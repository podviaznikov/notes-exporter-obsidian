"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ExporterPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");
var import_view = require("@codemirror/view");
var import_state = require("@codemirror/state");

// src/icons.ts
var APP_ICONS = {
  "notes://": "data:image/png;base64,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",
  "bear://": "data:image/png;base64,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",
  // Neutral generic document glyph (NOT the Logseq logo — trademark constraint)
  "logseq://": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M9 3h10l8 8v15a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z' fill='%23909090'/><path d='M19 3l8 8h-6a2 2 0 0 1-2-2V3z' fill='%23bdbdbd'/><rect x='10' y='16' width='12' height='2' rx='1' fill='%23f5f5f5'/><rect x='10' y='21' width='9' height='2' rx='1' fill='%23f5f5f5'/></svg>"
};
var APP_NAMES = {
  "notes://": "Apple Notes",
  "bear://": "Bear",
  "logseq://": "Logseq"
};
var SORTED_SCHEMES = Object.keys(APP_ICONS).sort((a, b) => b.length - a.length);
function getIconForUrl(url) {
  for (const scheme of SORTED_SCHEMES) {
    if (url.startsWith(scheme)) return APP_ICONS[scheme];
  }
  return null;
}
function getAppNameForUrl(url) {
  for (const scheme of SORTED_SCHEMES) {
    if (url.startsWith(scheme)) return APP_NAMES[scheme] || null;
  }
  return null;
}

// src/statusView.ts
var import_obsidian = require("obsidian");
var STATUS_VIEW_TYPE = "notes-exporter-status";
var APP_STORE_URL = "https://apps.apple.com/us/app/notes-exporter/id6741618455?mt=12";
var SOURCE_NAMES = {
  "apple-notes": "Apple Notes",
  "bear": "Bear",
  "logseq": "Logseq"
};
var SKIP_FOLDERS = /* @__PURE__ */ new Set(["node_modules", "attachments"]);
var MAX_SCAN_DEPTH = 3;
function sourceDisplayName(source) {
  return SOURCE_NAMES[source] || source;
}
function formatRelativeTime(iso) {
  const then = new Date(iso).getTime();
  if (isNaN(then)) return "";
  const ms = Date.now() - then;
  if (ms < 6e4) return "just now";
  if (ms < 36e5) return `${Math.floor(ms / 6e4)}m ago`;
  if (ms < 864e5) return `${Math.floor(ms / 36e5)}h ago`;
  return `${Math.floor(ms / 864e5)}d ago`;
}
async function findExportRoots(adapter) {
  const roots = [];
  const visit = async (folder, depth) => {
    const reportPath = folder ? `${folder}/.exporter/last-export.json` : ".exporter/last-export.json";
    try {
      if (await adapter.exists(reportPath)) {
        roots.push(folder);
      }
    } catch {
    }
    if (depth >= MAX_SCAN_DEPTH) return;
    let listing;
    try {
      listing = await adapter.list(folder || "/");
    } catch {
      return;
    }
    for (const sub of listing.folders) {
      const name = (sub.split("/").pop() || "").toLowerCase();
      if (!name) continue;
      if (name.startsWith(".")) continue;
      if (SKIP_FOLDERS.has(name)) continue;
      await visit(sub, depth + 1);
    }
  };
  await visit("", 0);
  return roots;
}
var StatusView = class extends import_obsidian.ItemView {
  constructor(leaf) {
    super(leaf);
  }
  getViewType() {
    return STATUS_VIEW_TYPE;
  }
  getDisplayText() {
    return "Notes Exporter";
  }
  getIcon() {
    return "refresh-cw";
  }
  async onOpen() {
    this.addAction("refresh-cw", "Refresh", () => {
      void this.refresh();
    });
    await this.refresh();
    this.registerInterval(
      window.setInterval(() => void this.refresh(), 3e4)
    );
  }
  async refresh() {
    const adapter = this.app.vault.adapter;
    const roots = await findExportRoots(adapter);
    const reports = [];
    for (const root of roots) {
      const reportPath = root ? `${root}/.exporter/last-export.json` : ".exporter/last-export.json";
      try {
        const raw = await adapter.read(reportPath);
        const report = JSON.parse(raw);
        reports.push({ root, report });
      } catch (e) {
        console.warn(`notes-exporter: could not read ${reportPath}`, e);
      }
    }
    reports.sort((a, b) => {
      const ta = new Date(a.report.finishedAt).getTime() || 0;
      const tb = new Date(b.report.finishedAt).getTime() || 0;
      return tb - ta;
    });
    this.render(reports);
  }
  render(reports) {
    const container = this.contentEl;
    container.empty();
    container.addClass("exporter-status-view");
    if (reports.length === 0) {
      this.renderEmptyState(container);
      return;
    }
    for (const { root, report } of reports) {
      this.renderCard(container, root, report);
    }
  }
  renderCard(container, root, report) {
    const card = container.createDiv({ cls: "exporter-status-card" });
    const header = card.createDiv({ cls: "exporter-status-card-header" });
    header.createSpan({
      cls: "exporter-status-source",
      text: sourceDisplayName(report.source)
    });
    header.createSpan({
      cls: "exporter-status-time",
      text: formatRelativeTime(report.finishedAt)
    });
    if (root) {
      card.createDiv({ cls: "exporter-status-root", text: `${root}/` });
    }
    const summary = `${report.succeeded} of ${report.selected} exported`;
    const summaryEl = card.createDiv({ cls: "exporter-status-summary" });
    summaryEl.createSpan({ text: summary });
    if (report.format) {
      summaryEl.createSpan({ cls: "exporter-status-format", text: ` \xB7 ${report.format}` });
    }
    if (report.failed > 0 && Array.isArray(report.failures) && report.failures.length > 0) {
      const failures = card.createDiv({ cls: "exporter-status-failures" });
      failures.createDiv({
        cls: "exporter-status-failures-heading",
        text: `${report.failed} failed`
      });
      for (const failure of report.failures) {
        this.renderFailure(failures, root, failure);
      }
    }
    if (Array.isArray(report.attachmentIssues) && report.attachmentIssues.length > 0) {
      const count = report.attachmentIssues.length;
      card.createDiv({
        cls: "exporter-status-attachments",
        text: `${count} attachment ${count === 1 ? "issue" : "issues"}`
      });
    }
  }
  renderFailure(container, root, failure) {
    const row = container.createDiv({ cls: "exporter-status-failure" });
    const parts = [root, failure.folder, `${failure.title}.md`].filter((p) => p);
    const path = (0, import_obsidian.normalizePath)(parts.join("/"));
    const file = this.app.vault.getAbstractFileByPath(path);
    if (file instanceof import_obsidian.TFile) {
      const link = row.createEl("a", {
        cls: "exporter-status-failure-title",
        text: failure.title
      });
      link.addEventListener("click", (e) => {
        e.preventDefault();
        void this.app.workspace.getLeaf(false).openFile(file);
      });
    } else {
      row.createSpan({ cls: "exporter-status-failure-title", text: failure.title });
    }
    row.createSpan({ cls: "exporter-status-failure-reason", text: ` \u2014 ${failure.reason}` });
  }
  renderEmptyState(container) {
    const panel = container.createDiv({ cls: "exporter-onboarding" });
    panel.createEl("h3", {
      cls: "exporter-onboarding-headline",
      text: "Capture in Apple Notes. Think in Obsidian."
    });
    panel.createEl("p", {
      cls: "exporter-onboarding-body",
      text: "Notes Exporter is a Mac app that exports your Apple Notes into plain Markdown files, with frontmatter, tags, attachments, and deep links back to the original note. Once your notes land in this vault, this panel shows the status of every export."
    });
    const steps = panel.createEl("ol", { cls: "exporter-onboarding-steps" });
    const step1 = steps.createEl("li");
    step1.createEl("a", {
      text: "Get Notes Exporter for Mac",
      href: APP_STORE_URL
    });
    steps.createEl("li", {
      text: "Export your notes into this vault, or open the export folder as a vault"
    });
    steps.createEl("li", {
      text: "Sync status appears here after the first export"
    });
    panel.createEl("p", {
      cls: "exporter-onboarding-note",
      text: "Bear and Logseq exports work the same way."
    });
  }
};

// src/main.ts
var SCHEMES = Object.keys(APP_ICONS);
function decorateLinks(el) {
  const links = el.querySelectorAll("a");
  for (const link of Array.from(links)) {
    const href = link.getAttribute("href") || link.getAttribute("data-href") || "";
    if (!href) continue;
    const iconSrc = getIconForUrl(href);
    if (!iconSrc) continue;
    if (link.querySelector(".exporter-app-icon")) continue;
    const img = activeDocument.createElement("img");
    img.src = iconSrc;
    img.className = "exporter-app-icon";
    img.alt = "";
    const isInProperties = link.closest(".metadata-property") !== null;
    const linkText = link.textContent?.trim() || "";
    if (isInProperties || linkText === "\u2197" || linkText === "open") {
      link.textContent = "";
      link.appendChild(img);
      link.classList.add("exporter-source-link");
    } else {
      link.insertBefore(img, link.firstChild);
    }
  }
  const propertyValues = el.querySelectorAll(".metadata-property .metadata-input-longtext, .metadata-property .multi-select-pill-content");
  for (const node of Array.from(propertyValues)) {
    const text = node.textContent?.trim() || "";
    if (!text) continue;
    const iconSrc = getIconForUrl(text);
    if (!iconSrc) continue;
    if (node.querySelector?.(".exporter-app-icon")) continue;
    if (node.parentElement?.querySelector?.(".exporter-app-icon")) continue;
    const img = activeDocument.createElement("img");
    img.src = iconSrc;
    img.className = "exporter-app-icon";
    img.alt = "";
    const parent = node.parentElement;
    if (parent) {
      parent.insertBefore(img, node);
      parent.classList.add("exporter-source-link");
    }
  }
}
var SCHEME_ALTERNATION = SCHEMES.map((s) => s.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")).join("|");
var LINK_RE = new RegExp(`\\[([^\\]]*)\\]\\(((${SCHEME_ALTERNATION})[^)]*)\\)`, "g");
var AppIconWidget = class extends import_view.WidgetType {
  constructor(iconSrc) {
    super();
    this.iconSrc = iconSrc;
  }
  toDOM() {
    const img = activeDocument.createElement("img");
    img.src = this.iconSrc;
    img.className = "exporter-app-icon";
    img.alt = "";
    return img;
  }
  eq(other) {
    return this.iconSrc === other.iconSrc;
  }
};
function buildDecorations(view) {
  const builder = new import_state.RangeSetBuilder();
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
            import_view.Decoration.widget({ widget: new AppIconWidget(iconSrc), side: -1 })
          );
        }
      }
      pos = line.to + 1;
    }
  }
  return builder.finish();
}
var appIconPlugin = import_view.ViewPlugin.fromClass(
  class {
    decorations;
    constructor(view) {
      this.decorations = buildDecorations(view);
    }
    update(update) {
      if (update.docChanged || update.viewportChanged) {
        this.decorations = buildDecorations(update.view);
      }
    }
  },
  { decorations: (v) => v.decorations }
);
function getSourceUrl(app, file) {
  const fm = app.metadataCache.getFileCache(file)?.frontmatter;
  const url = fm?.["source_url"] ?? fm?.["source"] ?? fm?.["link"];
  if (typeof url !== "string" || !url) return null;
  if (!SCHEMES.some((s) => url.startsWith(s))) return null;
  return url;
}
function addOpenInAppMenuItem(app, menu, file) {
  const url = getSourceUrl(app, file);
  if (!url) return;
  const appName = getAppNameForUrl(url);
  if (!appName) return;
  const iconSrc = getIconForUrl(url);
  menu.addItem((item) => {
    item.setTitle(`Open in ${appName}`);
    item.setIcon("arrow-up-right");
    item.onClick(() => window.open(url));
    if (iconSrc) {
      window.setTimeout(() => {
        const menuEl = activeDocument.querySelector(".menu");
        if (!menuEl) return;
        const items = menuEl.querySelectorAll(".menu-item-title");
        for (const el of Array.from(items)) {
          if (el.textContent === `Open in ${appName}`) {
            const iconEl = el.parentElement?.querySelector(".menu-item-icon");
            if (iconEl instanceof HTMLElement) {
              iconEl.empty();
              iconEl.createEl("img", {
                cls: "exporter-app-icon",
                attr: { src: iconSrc, alt: "" }
              });
            }
            break;
          }
        }
      }, 0);
    }
  });
}
var DEFAULT_SETTINGS = {
  showStatusBar: true
};
var ExporterPlugin = class extends import_obsidian2.Plugin {
  settings = DEFAULT_SETTINGS;
  statusBarEl = null;
  viewActionCleanup = null;
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new ExporterSettingTab(this.app, this));
    this.registerView(STATUS_VIEW_TYPE, (leaf) => new StatusView(leaf));
    this.addRibbonIcon("refresh-cw", "Notes Exporter: sync status", () => {
      void this.activateStatusView();
    });
    this.addCommand({
      id: "show-sync-status",
      name: "Show sync status",
      callback: () => {
        void this.activateStatusView();
      }
    });
    this.registerEditorExtension(appIconPlugin);
    this.registerMarkdownPostProcessor((el) => {
      decorateLinks(el);
    });
    this.app.workspace.onLayoutReady(() => this.decorateActiveLeaf());
    this.registerEvent(this.app.workspace.on("active-leaf-change", (leaf) => {
      window.setTimeout(() => {
        if (leaf) decorateLinks(leaf.view.containerEl);
      }, 100);
    }));
    this.registerEvent(this.app.metadataCache.on("changed", (file) => {
      const view = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
      if (view?.file === file) {
        window.setTimeout(() => decorateLinks(view.containerEl), 100);
      }
    }));
    this.addCommand({
      id: "exporter:open-in-app",
      name: "Open in native app",
      checkCallback: (checking) => {
        const view = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
        if (!view || !view.file) return false;
        const url = getSourceUrl(this.app, view.file);
        if (!url) return false;
        if (!checking) {
          window.open(url);
        }
        return true;
      }
    });
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        if (file instanceof import_obsidian2.TFile && file.extension === "md") {
          addOpenInAppMenuItem(this.app, menu, file);
        }
      })
    );
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, _editor, view) => {
        if (view.file) {
          addOpenInAppMenuItem(this.app, menu, view.file);
        }
      })
    );
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        this.updateViewAction(leaf);
      })
    );
    this.app.workspace.onLayoutReady(() => {
      this.updateViewAction(this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView)?.leaf ?? null);
    });
    if (this.settings.showStatusBar) {
      this.initStatusBar();
    }
  }
  onunload() {
    this.viewActionCleanup?.();
  }
  decorateActiveLeaf() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
    if (view) decorateLinks(view.containerEl);
  }
  async activateStatusView() {
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
  updateViewAction(leaf) {
    this.viewActionCleanup?.();
    this.viewActionCleanup = null;
    if (!leaf) return;
    const view = leaf.view;
    if (!(view instanceof import_obsidian2.MarkdownView) || !view.file) return;
    const url = getSourceUrl(this.app, view.file);
    if (!url) return;
    const appName = getAppNameForUrl(url);
    const iconSrc = getIconForUrl(url);
    if (!appName || !iconSrc) return;
    const actionEl = view.addAction("arrow-up-right", `Open in ${appName}`, () => {
      window.open(url);
    });
    actionEl.empty();
    actionEl.createEl("img", {
      cls: "exporter-app-icon exporter-view-action-icon",
      attr: { src: iconSrc, alt: `Open in ${appName}` }
    });
    this.viewActionCleanup = () => actionEl.remove();
  }
  initStatusBar() {
    this.statusBarEl = this.addStatusBarItem();
    this.statusBarEl.addClass("exporter-status-bar");
    this.app.workspace.onLayoutReady(() => this.updateStatusBar());
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.updateStatusBar()));
  }
  updateStatusBar() {
    if (!this.statusBarEl) return;
    const view = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
    if (view?.file) {
      const url = getSourceUrl(this.app, view.file);
      if (url) {
        const appName = getAppNameForUrl(url);
        if (appName) {
          const fm = this.app.metadataCache.getFileCache(view.file)?.frontmatter;
          const mod = fm?.["modified"] ?? fm?.["modified_date"];
          if (typeof mod === "string" || typeof mod === "number") {
            const ago = Date.now() - new Date(mod).getTime();
            this.statusBarEl.setText(`modified ${formatTimeAgo(ago)} in ${appName}`);
          } else {
            this.statusBarEl.setText(appName);
          }
          return;
        }
      }
    }
    this.statusBarEl.setText("");
  }
  async loadSettings() {
    const saved = await this.loadData();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, saved ?? {});
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
function formatTimeAgo(ms) {
  if (ms < 6e4) return "just now";
  if (ms < 36e5) return `${Math.floor(ms / 6e4)}m ago`;
  if (ms < 864e5) return `${Math.floor(ms / 36e5)}h ago`;
  return `${Math.floor(ms / 864e5)}d ago`;
}
var ExporterSettingTab = class extends import_obsidian2.PluginSettingTab {
  plugin;
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian2.Setting(containerEl).setName("Show status bar").setDesc("Display the source app name and last modified time for synced files").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showStatusBar).onChange(async (value) => {
        this.plugin.settings.showStatusBar = value;
        await this.plugin.saveSettings();
      })
    );
  }
};
