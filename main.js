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
  "addressbook://": "data:image/png;base64,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",
  "sms://": "data:image/png;base64,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",
  "x-apple-reminderkit://": "data:image/png;base64,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",
  // Neutral generic document glyph (NOT the Logseq logo — trademark constraint)
  "logseq://": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M9 3h10l8 8v15a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z' fill='%23909090'/><path d='M19 3l8 8h-6a2 2 0 0 1-2-2V3z' fill='%23bdbdbd'/><rect x='10' y='16' width='12' height='2' rx='1' fill='%23f5f5f5'/><rect x='10' y='21' width='9' height='2' rx='1' fill='%23f5f5f5'/></svg>"
};
var APP_NAMES = {
  "notes://": "Apple Notes",
  "logseq://": "Logseq",
  "addressbook://": "Contacts",
  "sms://": "Messages",
  "x-apple-reminderkit://": "Reminders"
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
var DOWNLOAD_URL = "https://exporter.dev/download";
var SOURCE_NAMES = {
  "apple-notes": "Apple Notes",
  "bear": "Bear",
  "logseq": "Logseq",
  "contacts": "Contacts",
  "messages": "Messages",
  "screen-time": "Screen Time",
  "reminders": "Reminders",
  "documents": "Documents",
  "claude-code-sessions": "Claude Code",
  "wallet": "Wallet",
  "calendar": "Calendar"
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
      text: "Exporter is a Mac app that exports Apple Notes, Messages, Contacts, Screen Time, Bear, Logseq and your documents as Markdown files, kept in sync, ready for any agent. Once an export lands in this vault, this panel shows the status of every run."
    });
    const steps = panel.createEl("ol", { cls: "exporter-onboarding-steps" });
    const step1 = steps.createEl("li");
    step1.createEl("a", {
      text: "Get Exporter for Mac",
      href: DOWNLOAD_URL
    });
    steps.createEl("li", {
      text: "Export into this vault, or open the export folder as a vault"
    });
    steps.createEl("li", {
      text: "Sync status appears here after the first export"
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
