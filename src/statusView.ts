import { ItemView, WorkspaceLeaf, TFile, DataAdapter, normalizePath } from 'obsidian';

export const STATUS_VIEW_TYPE = 'notes-exporter-status';

const APP_STORE_URL = 'https://apps.apple.com/us/app/notes-exporter/id6741618455?mt=12';

interface ExportFailure {
	noteId: string;
	title: string;
	folder: string;
	reason: string;
}

interface AttachmentIssue {
	note: string;
	attachment: string;
	reason: string;
}

interface ExportReport {
	runId: string;
	source: string; // "apple-notes" | "bear" | "logseq"
	startedAt: string;
	finishedAt: string;
	durationSec: number;
	format: string;
	selected: number;
	succeeded: number;
	failed: number;
	failures: ExportFailure[];
	attachmentIssues: AttachmentIssue[];
}

interface ExportRootReport {
	root: string; // vault-relative path of the export root ('' = vault root)
	report: ExportReport;
}

const SOURCE_NAMES: Record<string, string> = {
	'apple-notes': 'Apple Notes',
	'bear': 'Bear',
	'logseq': 'Logseq',
};

const SKIP_FOLDERS = new Set(['node_modules', 'attachments']);

const MAX_SCAN_DEPTH = 3;

function sourceDisplayName(source: string): string {
	return SOURCE_NAMES[source] || source;
}

function formatRelativeTime(iso: string): string {
	const then = new Date(iso).getTime();
	if (isNaN(then)) return '';
	const ms = Date.now() - then;
	if (ms < 60_000) return 'just now';
	if (ms < 3600_000) return `${Math.floor(ms / 60_000)}m ago`;
	if (ms < 86400_000) return `${Math.floor(ms / 3600_000)}h ago`;
	return `${Math.floor(ms / 86400_000)}d ago`;
}

/**
 * Find every export root in the vault by looking for `.exporter/last-export.json`.
 * Obsidian's vault index ignores dot-folders, so this scans via the raw adapter.
 * Checks the vault root plus subfolders up to MAX_SCAN_DEPTH levels deep.
 */
async function findExportRoots(adapter: DataAdapter): Promise<string[]> {
	const roots: string[] = [];

	const visit = async (folder: string, depth: number): Promise<void> => {
		const reportPath = folder
			? `${folder}/.exporter/last-export.json`
			: '.exporter/last-export.json';
		try {
			if (await adapter.exists(reportPath)) {
				roots.push(folder);
			}
		} catch {
			// unreadable folder: ignore
		}

		if (depth >= MAX_SCAN_DEPTH) return;

		let listing;
		try {
			listing = await adapter.list(folder || '/');
		} catch {
			return;
		}

		for (const sub of listing.folders) {
			const name = (sub.split('/').pop() || '').toLowerCase();
			if (!name) continue;
			// dot-folders (.obsidian, .git, .trash, .exporter, ...) never hold vault-visible exports
			if (name.startsWith('.')) continue;
			if (SKIP_FOLDERS.has(name)) continue;
			await visit(sub, depth + 1);
		}
	};

	await visit('', 0);
	return roots;
}

export class StatusView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType(): string {
		return STATUS_VIEW_TYPE;
	}

	getDisplayText(): string {
		return 'Notes Exporter';
	}

	getIcon(): string {
		return 'refresh-cw';
	}

	async onOpen(): Promise<void> {
		this.addAction('refresh-cw', 'Refresh', () => {
			void this.refresh();
		});

		await this.refresh();

		// Adapter reads don't fire vault events for dot-folders, so poll while open
		this.registerInterval(
			window.setInterval(() => void this.refresh(), 30_000),
		);
	}

	async refresh(): Promise<void> {
		const adapter = this.app.vault.adapter;
		const roots = await findExportRoots(adapter);

		const reports: ExportRootReport[] = [];
		for (const root of roots) {
			const reportPath = root
				? `${root}/.exporter/last-export.json`
				: '.exporter/last-export.json';
			try {
				const raw = await adapter.read(reportPath);
				const report = JSON.parse(raw) as ExportReport;
				reports.push({ root, report });
			} catch (e) {
				console.warn(`notes-exporter: could not read ${reportPath}`, e);
			}
		}

		// most recent export first
		reports.sort((a, b) => {
			const ta = new Date(a.report.finishedAt).getTime() || 0;
			const tb = new Date(b.report.finishedAt).getTime() || 0;
			return tb - ta;
		});

		this.render(reports);
	}

	private render(reports: ExportRootReport[]): void {
		const container = this.contentEl;
		container.empty();
		container.addClass('exporter-status-view');

		if (reports.length === 0) {
			this.renderEmptyState(container);
			return;
		}

		for (const { root, report } of reports) {
			this.renderCard(container, root, report);
		}
	}

	private renderCard(container: HTMLElement, root: string, report: ExportReport): void {
		const card = container.createDiv({ cls: 'exporter-status-card' });

		const header = card.createDiv({ cls: 'exporter-status-card-header' });
		header.createSpan({
			cls: 'exporter-status-source',
			text: sourceDisplayName(report.source),
		});
		header.createSpan({
			cls: 'exporter-status-time',
			text: formatRelativeTime(report.finishedAt),
		});

		if (root) {
			card.createDiv({ cls: 'exporter-status-root', text: `${root}/` });
		}

		const summary = `${report.succeeded} of ${report.selected} exported`;
		const summaryEl = card.createDiv({ cls: 'exporter-status-summary' });
		summaryEl.createSpan({ text: summary });
		if (report.format) {
			summaryEl.createSpan({ cls: 'exporter-status-format', text: ` · ${report.format}` });
		}

		if (report.failed > 0 && Array.isArray(report.failures) && report.failures.length > 0) {
			const failures = card.createDiv({ cls: 'exporter-status-failures' });
			failures.createDiv({
				cls: 'exporter-status-failures-heading',
				text: `${report.failed} failed`,
			});
			for (const failure of report.failures) {
				this.renderFailure(failures, root, failure);
			}
		}

		if (Array.isArray(report.attachmentIssues) && report.attachmentIssues.length > 0) {
			const count = report.attachmentIssues.length;
			card.createDiv({
				cls: 'exporter-status-attachments',
				text: `${count} attachment ${count === 1 ? 'issue' : 'issues'}`,
			});
		}
	}

	private renderFailure(container: HTMLElement, root: string, failure: ExportFailure): void {
		const row = container.createDiv({ cls: 'exporter-status-failure' });

		const parts = [root, failure.folder, `${failure.title}.md`].filter((p) => p);
		const path = normalizePath(parts.join('/'));
		const file = this.app.vault.getAbstractFileByPath(path);

		if (file instanceof TFile) {
			const link = row.createEl('a', {
				cls: 'exporter-status-failure-title',
				text: failure.title,
			});
			link.addEventListener('click', (e) => {
				e.preventDefault();
				void this.app.workspace.getLeaf(false).openFile(file);
			});
		} else {
			row.createSpan({ cls: 'exporter-status-failure-title', text: failure.title });
		}

		row.createSpan({ cls: 'exporter-status-failure-reason', text: ` — ${failure.reason}` });
	}

	private renderEmptyState(container: HTMLElement): void {
		const panel = container.createDiv({ cls: 'exporter-onboarding' });

		panel.createEl('h3', {
			cls: 'exporter-onboarding-headline',
			text: 'Capture in Apple Notes. Think in Obsidian.',
		});

		panel.createEl('p', {
			cls: 'exporter-onboarding-body',
			text:
				'Notes Exporter is a Mac app that exports your Apple Notes into plain Markdown files, ' +
				'with frontmatter, tags, attachments, and deep links back to the original note. ' +
				'Once your notes land in this vault, this panel shows the status of every export.',
		});

		const steps = panel.createEl('ol', { cls: 'exporter-onboarding-steps' });

		const step1 = steps.createEl('li');
		step1.createEl('a', {
			text: 'Get Notes Exporter for Mac',
			href: APP_STORE_URL,
		});

		steps.createEl('li', {
			text: 'Export your notes into this vault, or open the export folder as a vault',
		});

		steps.createEl('li', {
			text: 'Sync status appears here after the first export',
		});

		panel.createEl('p', {
			cls: 'exporter-onboarding-note',
			text: 'Bear and Logseq exports work the same way.',
		});
	}
}
