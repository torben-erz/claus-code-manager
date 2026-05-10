// =============================================================
// i18n.js — DE/EN-Sprachumschalter (client-only, kein Build-Step)
//
// Pattern:
//   <h1 data-i18n="hero.title">English fallback</h1>
//   <meta data-i18n-attr="content:meta.description" content="Fallback">
//
// Sprache:
//   1. localStorage('lang') falls gesetzt
//   2. navigator.language → 'de' bei de-*, sonst 'en'
// =============================================================

const translations = {
  en: {
    "meta.title": "Claus Code Manager — Native macOS App",
    "meta.description": "A native macOS app to manage your Claude Code sessions, projects, context usage, and subscription quota.",

    "nav.features": "Features",
    "nav.download": "Download",
    "nav.imprint": "Imprint",

    "hero.eyebrow": "Native macOS App",
    "hero.title": "Manage your Claude Code sessions natively on macOS.",
    "hero.subtitle": "Browse projects, track context usage, monitor your subscription quota and resume sessions — all from a single SwiftUI app, without ever leaving your Mac.",
    "hero.cta.primary": "Download for macOS",
    "hero.requirements": "Requires macOS 26.4 or later",
    "hero.signed": "Signed & notarized by Apple",

    "features.title": "Everything you need, in one place",
    "features.subtitle": "Claus Code Manager reads your local ~/.claude/ data and presents it in a clean, native interface — no analytics, no tracking, your session data never leaves your Mac.",

    "features.sessions.title": "Session Overview",
    "features.sessions.body": "All your projects with slug, branch, size and last access time — sortable, searchable, with project aliases that override the folder name.",

    "features.context.title": "Live Context Usage",
    "features.context.body": "Per-session token usage as a progress bar with auto-detected scale (200K or 1M). Reads the latest assistant turn directly from the JSONL tail.",

    "features.live.title": "Running-Session Indicator",
    "features.live.body": "Active claude processes are detected via FSEvents in sub-second latency and shown as a pulsing icon in the sidebar and a badge in the detail header.",

    "features.quota.title": "Subscription Quota",
    "features.quota.body": "Live 5-hour, weekly and monthly subscription windows with auto-refresh, smart back-off on rate limits and persistent caching across launches.",

    "features.update.title": "Version & Update Management",
    "features.update.body": "Detects whether claude was installed via Homebrew Cask, Formula, npm or natively — and updates it from a live-log sheet, optionally restoring all running sessions afterwards.",

    "features.tabs.title": "Memories, Files, Subagents, Todos",
    "features.tabs.body": "Four dedicated tabs per project show your memory files, Claude config files, delegated subagent runs (with final reports) and todo lists.",

    "features.move.title": "Project Management",
    "features.move.body": "Aliases, full project moves with automatic backup and JSONL cwd-patching, optional auto-purge of orphaned projects.",

    "features.global.title": "Global Configuration",
    "features.global.body": "CLAUDE.md, settings, keybindings, statusline, skills, agents, plugins from ~/.claude/ in one place — credentials are never displayed.",

    "download.title": "Download for macOS",
    "download.subtitle": "A single, signed and notarized binary. No installer, no background service.",
    "download.button": "Download Claus Code Manager",
    "download.meta.version": "Version",
    "download.meta.size": "Size",
    "download.meta.requirements": "Requires",
    "download.trust": "Signed with an Apple Developer ID and notarized by Apple — Gatekeeper opens it without warnings.",

    "imprint.title": "Imprint",
    "imprint.intro": "Information pursuant to § 5 DDG (German Digital Services Act).",
    "imprint.field.name": "Name",
    "imprint.field.address": "Address",
    "imprint.field.contact": "Contact",
    "imprint.field.email": "E-mail",
    "imprint.field.responsible": "Responsible for content (§ 18 (2) MStV)",
    "imprint.disclaimer.summary": "Disclaimer",
    "imprint.disclaimer.contentTitle": "Liability for content",
    "imprint.disclaimer.contentBody": "As a service provider we are responsible for our own content on these pages according to general legislation pursuant to § 7 (1) DDG. According to §§ 8 to 10 DDG, however, we are not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general legislation remain unaffected.",
    "imprint.disclaimer.linksTitle": "Liability for links",
    "imprint.disclaimer.linksBody": "Our offer contains links to external third-party websites whose content we have no influence on. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",
    "imprint.disclaimer.copyrightTitle": "Copyright",
    "imprint.disclaimer.copyrightBody": "The content and works on these pages created by the site operator are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.",
    "imprint.backToTop": "↑ Back to top",

    "trademark.title": "Trademark notice",
    "trademark.body": "\"Claude\" and \"Claude Code\" are trademarks of Anthropic, PBC. This app is an independent project and is not affiliated with, endorsed by, or sponsored by Anthropic."
  },

  de: {
    "meta.title": "Claus Code Manager — Native macOS-App",
    "meta.description": "Eine native macOS-App, mit der du deine Claude-Code-Sessions, Projekte, Kontext-Auslastung und dein Subscription-Kontingent verwaltest.",

    "nav.features": "Features",
    "nav.download": "Download",
    "nav.imprint": "Impressum",

    "hero.eyebrow": "Native macOS-App",
    "hero.title": "Verwalte deine Claude-Code-Sessions nativ auf dem Mac.",
    "hero.subtitle": "Projekte durchsuchen, Kontext-Auslastung im Blick behalten, Subscription-Kontingent live mitverfolgen und Sessions fortsetzen — alles in einer SwiftUI-App, ohne den Mac zu verlassen.",
    "hero.cta.primary": "Für macOS herunterladen",
    "hero.requirements": "Benötigt macOS 26.4 oder neuer",
    "hero.signed": "Von Apple signiert & notarisiert",

    "features.title": "Alles, was du brauchst, an einem Ort",
    "features.subtitle": "Der Claus Code Manager liest deine lokalen Daten unter ~/.claude/ und zeigt sie in einer klaren, nativen Oberfläche — keine Analytics, kein Tracking, deine Session-Daten verlassen den Mac nicht.",

    "features.sessions.title": "Session-Übersicht",
    "features.sessions.body": "Alle deine Projekte mit Slug, Branch, Größe und letztem Zugriff — sortier- und durchsuchbar, mit Projekt-Aliassen, die den Ordnernamen überschreiben.",

    "features.context.title": "Live-Kontext-Auslastung",
    "features.context.body": "Token-Verbrauch pro Session als Fortschrittsbalken mit automatisch erkannter Skala (200K oder 1M). Liest den letzten Assistant-Turn direkt aus dem JSONL-Tail.",

    "features.live.title": "Live-Indikator für laufende Sessions",
    "features.live.body": "Aktive claude-Prozesse werden via FSEvents in Sub-Sekunden-Latenz erkannt und als pulsierendes Icon in der Sidebar sowie als Badge im Detail-Header angezeigt.",

    "features.quota.title": "Subscription-Verbrauch",
    "features.quota.body": "Live-Anzeige für das 5-Stunden-, Wochen- und Monatsfenster mit Auto-Refresh, intelligentem Back-off bei Rate-Limits und persistentem Cache über App-Neustarts hinweg.",

    "features.update.title": "Versions- & Update-Management",
    "features.update.body": "Erkennt, ob claude per Homebrew Cask, Formula, npm oder nativ installiert wurde — und aktualisiert es aus einem Live-Log-Sheet heraus, optional inkl. Wiederherstellung aller laufenden Sessions.",

    "features.tabs.title": "Memories, Dateien, Subagents, Todos",
    "features.tabs.body": "Vier dedizierte Tabs pro Projekt zeigen deine Memory-Dateien, Claude-Konfigurationsdateien, delegierte Subagent-Läufe (inkl. Final-Reports) und Todo-Listen.",

    "features.move.title": "Projekt-Verwaltung",
    "features.move.body": "Aliasse, vollständige Projekt-Verschiebungen mit automatischem Backup und JSONL-cwd-Patch, optionales automatisches Aufräumen verwaister Projekte.",

    "features.global.title": "Globale Konfiguration",
    "features.global.body": "CLAUDE.md, Settings, Keybindings, Statusline, Skills, Agents, Plugins aus ~/.claude/ an einem Ort — Credentials werden niemals angezeigt.",

    "download.title": "Für macOS herunterladen",
    "download.subtitle": "Ein einzelnes, signiertes und notarisiertes Binary. Kein Installer, kein Hintergrund-Service.",
    "download.button": "Claus Code Manager herunterladen",
    "download.meta.version": "Version",
    "download.meta.size": "Größe",
    "download.meta.requirements": "Benötigt",
    "download.trust": "Mit einer Apple-Developer-ID signiert und von Apple notarisiert — Gatekeeper öffnet die App ohne Warnung.",

    "imprint.title": "Impressum",
    "imprint.intro": "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).",
    "imprint.field.name": "Name",
    "imprint.field.address": "Anschrift",
    "imprint.field.contact": "Kontakt",
    "imprint.field.email": "E-Mail",
    "imprint.field.responsible": "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    "imprint.disclaimer.summary": "Haftungsausschluss",
    "imprint.disclaimer.contentTitle": "Haftung für Inhalte",
    "imprint.disclaimer.contentBody": "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
    "imprint.disclaimer.linksTitle": "Haftung für Links",
    "imprint.disclaimer.linksBody": "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    "imprint.disclaimer.copyrightTitle": "Urheberrecht",
    "imprint.disclaimer.copyrightBody": "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    "imprint.backToTop": "↑ Nach oben",

    "trademark.title": "Markenrechtlicher Hinweis",
    "trademark.body": "„Claude\" und „Claude Code\" sind Marken von Anthropic, PBC. Diese App ist ein unabhängiges Projekt und steht in keiner Verbindung zu Anthropic — weder durch Sponsoring, Kooperation noch Empfehlung."
  }
};

const STORAGE_KEY = "lang";

function detectInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;
  } catch (_) { /* localStorage kann blockiert sein (z.B. Safari Private) */ }
  const navLang = (navigator.language || "en").toLowerCase();
  return navLang.startsWith("de") ? "de" : "en";
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  // Text-Knoten
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  // Attribut-Knoten — Format: "attrName:translation.key"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const spec = el.getAttribute("data-i18n-attr");
    const [attr, key] = spec.split(":");
    if (!attr || !key) return;
    const value = dict[key];
    if (typeof value === "string") {
      el.setAttribute(attr, value);
    }
  });

  // <html lang="…"> aktualisieren — wichtig für Screenreader & SEO
  document.documentElement.setAttribute("lang", lang);

  // Doc-Title spiegelt meta.title
  if (dict["meta.title"]) {
    document.title = dict["meta.title"];
  }

  // Sprach-Toggle-Buttons aktualisieren
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* siehe oben */ }
  applyLanguage(lang);
}

// Klick-Handler an alle .lang-btn binden
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
  applyLanguage(detectInitialLang());
});
