# Website — Claus Code Manager

Zweisprachige (DE/EN) One-Page-Werbeseite für die macOS-App.

Plain HTML + CSS + Vanilla JS — kein Build-Step, direkt deploybar.

## Lokal testen

```sh
open index.html
```

Alle Pfade sind relativ, kein Server nötig. Sprach-Toggle in der Top-Bar (`EN | DE`).
Default-Sprache kommt aus `navigator.language`, manuelle Auswahl wird in `localStorage` gespeichert.

## Struktur

```
.
├── index.html      One-Pager (Hero · Features · Download · Footer · Impressum)
├── styles.css      Layout + Auto-Dark-Mode + Responsive (Breakpoint 720px / 960px)
├── i18n.js         Sprach-Map (en/de) + Toggle-Logik
├── assets/         App-Icon-Kopien (Favicon + Hero)
└── README.md
```

## Offene Punkte

Alle offenen TODOs (App-Name, Download-URL, Impressum, SEO, …) stehen in **[TODO.md](TODO.md)**.

## Deployment

Die Seite ist statisch und wird via **GitHub Pages** aus dem `main`-Branch (Root) ausgeliefert.
Repo-Settings → Pages → Source: `main` → `/(root)`.

Alternative Hostings (alle ohne Build-Step): Netlify, Vercel, Cloudflare Pages, eigener Webspace per (S)FTP.

## Datenschutz

- Keine externen CDNs, Fonts oder Tracker.
- Nur ein einziger `localStorage`-Key (`lang`) für die Sprach-Persistenz.
- Damit i.d.R. kein Cookie-Banner nötig — bitte trotzdem rechtlich prüfen, falls
  später z.B. Analytics dazukommt.
