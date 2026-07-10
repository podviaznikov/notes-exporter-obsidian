import { Plugin, MarkdownView, PluginSettingTab, App, Setting, TFile, Menu, WorkspaceLeaf } from 'obsidian';
import { EditorView, Decoration, DecorationSet, ViewPlugin, ViewUpdate, WidgetType } from '@codemirror/view';
import { RangeSetBuilder } from '@codemirror/state';
import { getIconForUrl, getAppNameForUrl, APP_ICONS } from './icons';
import { StatusView, STATUS_VIEW_TYPE } from './statusView';

const SCHEMES = Object.keys(APP_ICONS);

function decorateLinks(el: HTMLElement) {
	// Decorate <a> links (reading view, rendered links)
	const links = el.querySelectorAll('a');
	for (const link of Array.from(links)) {
		const href = link.getAttribute('href')
			|| link.getAttribute('data-href')
			|| '';
		if (!href) continue;

		const iconSrc = getIconForUrl(href);
		if (!iconSrc) continue;
		if (link.querySelector('.exporter-app-icon')) continue;

		const img = document.createElement('img');
		img.src = iconSrc;
		img.className = 'exporter-app-icon';
		img.alt = '';

		// In properties panel or inline deep links: replace text with just the icon
		const isInProperties = link.closest('.metadata-property') !== null;
		const linkText = link.textContent?.trim() || '';
		if (isInProperties || linkText === '↗' || linkText === 'open') {
			link.textContent = '';
			link.appendChild(img);
			link.classList.add('exporter-source-link');
		} else {
			link.insertBefore(img, link.firstChild);
		}
	}

	// Decorate properties panel inputs/spans that contain raw URLs
	const propertyValues = el.querySelectorAll('.metadata-property .metadata-input-longtext, .metadata-property .multi-select-pill-content');
	for (const node of Array.from(propertyValues)) {
		const text = (node as HTMLElement).textContent?.trim() || '';
		if (!text) continue;

		const iconSrc = getIconForUrl(text);
		if (!iconSrc) continue;
		if ((node as HTMLElement).querySelector?.('.exporter-app-icon')) continue;
		if ((node as HTMLElement).parentElement?.querySelector?.('.exporter-app-icon')) continue;

		const img = document.createElement('img');
		img.src = iconSrc;
		img.className = 'exporter-app-icon';
		img.alt = '';

		const parent = node.parentElement;
		if (parent) {
			parent.insertBefore(img, node);
			parent.classList.add('exporter-source-link');
		}
	}
}

// Regex to find markdown links with any supported app scheme (notes://, bear://, logseq://)
const SCHEME_ALTERNATION = SCHEMES.map((s) => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')).join('|');
const LINK_RE = new RegExp(`\\[([^\\]]*)\\]\\(((${SCHEME_ALTERNATION})[^)]*)\\)`, 'g');

class AppIconWidget extends WidgetType {
	constructor(private iconSrc: string) {
		super();
	}

	toDOM(): HTMLElement {
		const img = document.createElement('img');
		img.src = this.iconSrc;
		img.className = 'exporter-app-icon';
		img.alt = '';
		return img;
	}

	eq(other: AppIconWidget): boolean {
		return this.iconSrc === other.iconSrc;
	}
}

function buildDecorations(view: EditorView): DecorationSet {
	const builder = new RangeSetBuilder<Decoration>();
	const doc = view.state.doc;

	for (const { from, to } of view.visibleRanges) {
		for (let pos = from; pos < to; ) {
			const line = doc.lineAt(pos);
			const text = line.text;

			LINK_RE.lastIndex = 0;
			let match;
			while ((match = LINK_RE.exec(text)) !== null) {
				const url = match[2];
				const iconSrc = getIconForUrl(url);
				if (iconSrc) {
					const linkStart = line.from + match.index + 1;
					builder.add(
						linkStart,
						linkStart,
						Decoration.widget({ widget: new AppIconWidget(iconSrc), side: -1 }),
					);
				}
			}

			pos = line.to + 1;
		}
	}

	return builder.finish();
}

const appIconPlugin = ViewPlugin.fromClass(
	class {
		decorations: DecorationSet;

		constructor(view: EditorView) {
			this.decorations = buildDecorations(view);
		}

		update(update: ViewUpdate) {
			if (update.docChanged || update.viewportChanged) {
				this.decorations = buildDecorations(update.view);
			}
		}
	},
	{ decorations: (v) => v.decorations },
);

/** Read source URL from file frontmatter */
function getSourceUrl(app: App, file: TFile): string | null {
	const fm = app.metadataCache.getFileCache(file)?.frontmatter;
	const url = fm?.['source_url'] || fm?.['source'] || fm?.['link'];
	if (!url || typeof url !== 'string') return null;
	if (!SCHEMES.some((s) => url.startsWith(s))) return null;
	return url;
}

/** Add "Open in {App}" item to a menu if the file has a source URL */
function addOpenInAppMenuItem(app: App, menu: Menu, file: TFile) {
	const url = getSourceUrl(app, file);
	if (!url) return;
	const appName = getAppNameForUrl(url);
	if (!appName) return;
	const iconSrc = getIconForUrl(url);

	menu.addItem((item) => {
		item.setTitle(`Open in ${appName}`);
		item.setIcon('arrow-up-right');
		item.onClick(() => window.open(url));

		if (iconSrc) {
			setTimeout(() => {
				const menuEl = document.querySelector('.menu');
				if (!menuEl) return;
				const items = menuEl.querySelectorAll('.menu-item-title');
				for (const el of Array.from(items)) {
					if (el.textContent === `Open in ${appName}`) {
						const iconEl = el.parentElement?.querySelector('.menu-item-icon');
						if (iconEl instanceof HTMLElement) {
							iconEl.empty();
							iconEl.createEl('img', {
								cls: 'exporter-app-icon',
								attr: { src: iconSrc, alt: '' },
							});
						}
						break;
					}
				}
			}, 0);
		}
	});
}

interface ExporterSettings {
	showStatusBar: boolean;
}

const DEFAULT_SETTINGS: ExporterSettings = {
	showStatusBar: true,
};

export default class ExporterPlugin extends Plugin {
	settings: ExporterSettings = DEFAULT_SETTINGS;
	private statusBarEl: HTMLElement | null = null;
	private viewActionCleanup: (() => void) | null = null;

	async onload() {
		await this.loadSettings();
		this.addSettingTab(new ExporterSettingTab(this.app, this));

		// Sync status panel (right sidebar)
		this.registerView(STATUS_VIEW_TYPE, (leaf) => new StatusView(leaf));
		this.addRibbonIcon('refresh-cw', 'Notes Exporter: sync status', () => {
			void this.activateStatusView();
		});
		this.addCommand({
			id: 'show-sync-status',
			name: 'Show sync status',
			callback: () => {
				void this.activateStatusView();
			},
		});

		// Editor extension: decorate app links with icons in Live Preview
		this.registerEditorExtension(appIconPlugin);

		// Reading view: decorate links via post-processor
		this.registerMarkdownPostProcessor((el) => {
			decorateLinks(el);
		});

		// Initial scan + rescan on leaf change (scoped to the active leaf, not document.body)
		this.app.workspace.onLayoutReady(() => this.decorateActiveLeaf());
		this.registerEvent(this.app.workspace.on('active-leaf-change', (leaf) => {
			setTimeout(() => {
				if (leaf) decorateLinks(leaf.view.containerEl);
			}, 100);
		}));

		// Re-decorate when metadata changes (covers the properties panel updating)
		this.registerEvent(this.app.metadataCache.on('changed', (file) => {
			const view = this.app.workspace.getActiveViewOfType(MarkdownView);
			if (view?.file === file) {
				setTimeout(() => decorateLinks(view.containerEl), 100);
			}
		}));

		// Command: open active file's source in native app
		this.addCommand({
			id: 'exporter:open-in-app',
			name: 'Open in native app',
			checkCallback: (checking: boolean) => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (!view || !view.file) return false;

				const url = getSourceUrl(this.app, view.file);
				if (!url) return false;

				if (!checking) {
					window.open(url);
				}
				return true;
			},
		});

		// File context menu: right-click file in explorer
		this.registerEvent(
			this.app.workspace.on('file-menu', (menu, file) => {
				if (file instanceof TFile && file.extension === 'md') {
					addOpenInAppMenuItem(this.app, menu, file);
				}
			}),
		);

		// Editor context menu: right-click in editor
		this.registerEvent(
			this.app.workspace.on('editor-menu', (menu, _editor, view) => {
				if (view.file) {
					addOpenInAppMenuItem(this.app, menu, view.file);
				}
			}),
		);

		// View action icon in tab header
		this.registerEvent(
			this.app.workspace.on('active-leaf-change', (leaf) => {
				this.updateViewAction(leaf);
			}),
		);
		this.app.workspace.onLayoutReady(() => {
			this.updateViewAction(this.app.workspace.activeLeaf);
		});

		// Status bar
		if (this.settings.showStatusBar) {
			this.initStatusBar();
		}
	}

	onunload() {
		this.viewActionCleanup?.();
	}

	private decorateActiveLeaf() {
		const leaf = this.app.workspace.activeLeaf;
		if (leaf) decorateLinks(leaf.view.containerEl);
	}

	private async activateStatusView() {
		const existing = this.app.workspace.getLeavesOfType(STATUS_VIEW_TYPE);
		if (existing.length > 0) {
			await this.app.workspace.revealLeaf(existing[0]);
			return;
		}
		const leaf = this.app.workspace.getRightLeaf(false);
		if (!leaf) return;
		await leaf.setViewState({ type: STATUS_VIEW_TYPE, active: true });
		await this.app.workspace.revealLeaf(leaf);
	}

	private updateViewAction(leaf: WorkspaceLeaf | null) {
		this.viewActionCleanup?.();
		this.viewActionCleanup = null;

		if (!leaf) return;
		const view = leaf.view;
		if (!(view instanceof MarkdownView) || !view.file) return;

		const url = getSourceUrl(this.app, view.file);
		if (!url) return;

		const appName = getAppNameForUrl(url);
		const iconSrc = getIconForUrl(url);
		if (!appName || !iconSrc) return;

		const actionEl = view.addAction('arrow-up-right', `Open in ${appName}`, () => {
			window.open(url);
		});

		actionEl.empty();
		actionEl.createEl('img', {
			cls: 'exporter-app-icon exporter-view-action-icon',
			attr: { src: iconSrc, alt: `Open in ${appName}` },
		});

		this.viewActionCleanup = () => actionEl.remove();
	}

	private initStatusBar() {
		this.statusBarEl = this.addStatusBarItem();
		this.statusBarEl.addClass('exporter-status-bar');

		this.app.workspace.onLayoutReady(() => this.updateStatusBar());
		this.registerEvent(this.app.workspace.on('active-leaf-change', () => this.updateStatusBar()));
	}

	private updateStatusBar() {
		if (!this.statusBarEl) return;

		const view = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (view?.file) {
			const url = getSourceUrl(this.app, view.file);
			if (url) {
				const appName = getAppNameForUrl(url);
				if (appName) {
					const fm = this.app.metadataCache.getFileCache(view.file)?.frontmatter;
					const mod = fm?.['modified'] || fm?.['modified_date'];
					if (mod) {
						const ago = Date.now() - new Date(mod).getTime();
						this.statusBarEl.setText(`modified ${formatTimeAgo(ago)} in ${appName}`);
					} else {
						this.statusBarEl.setText(appName);
					}
					return;
				}
			}
		}

		this.statusBarEl.setText('');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

function formatTimeAgo(ms: number): string {
	if (ms < 60_000) return 'just now';
	if (ms < 3600_000) return `${Math.floor(ms / 60_000)}m ago`;
	if (ms < 86400_000) return `${Math.floor(ms / 3600_000)}h ago`;
	return `${Math.floor(ms / 86400_000)}d ago`;
}

class ExporterSettingTab extends PluginSettingTab {
	plugin: ExporterPlugin;

	constructor(app: App, plugin: ExporterPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display() {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName('Show status bar')
			.setDesc('Display the source app name and last modified time for synced files')
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.showStatusBar).onChange(async (value) => {
					this.plugin.settings.showStatusBar = value;
					await this.plugin.saveSettings();
				}),
			);
	}
}
