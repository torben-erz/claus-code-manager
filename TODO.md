# Website-TODOs

Offene Punkte vor dem Live-Schalten der Marketing-Seite.

Schnelles Auflisten aller TODO-Marker im Code:

```sh
grep -rn "TODO" Website/
```

---

## 🟡 Vor dem ersten Release

### App-Code-Rename auf „Claus Code Manager" nachziehen

Auf der Website ist der Name umgestellt (HTML, i18n EN+DE, README, CSS-Header).
Der **App-Code** trägt noch den alten Namen — separat zu erledigen, **nicht Teil
dieser Website-TODO-Liste**, hier nur als Erinnerung:

- `ClaudeCodeManagerApp.swift`, `Localizable.xcstrings`, `Info.plist`
- Bundle-Identifier `com.nanoapes.Claude-Code-Manager` ggf. mitziehen — ein
  bereits notarisiertes Binary unter altem Identifier wird sonst nicht ersetzt.

### Download-URL eintragen

In `index.html` zwei Stellen mit `#TODO-DOWNLOAD-URL` (bzw. dem Hero-Anchor `#download`)
auf das echte Apple-signierte `.dmg`/`.zip` umbiegen:

- [ ] Hero-CTA — Anchor `#download` reicht aktuell, springt auf die Download-Section (kein Fix nötig, solange Section unten existiert)
- [ ] Download-Button-Anchor `href="#TODO-DOWNLOAD-URL"` ersetzen (`index.html:139`)

### Version & Größe aktualisieren

- [ ] `<span class="value">v1.0.0</span>` (`index.html:148`) auf echte Versionsnummer setzen
- [ ] `<span class="value">~5 MB</span>` (`index.html:153`) auf echte Dateigröße setzen

### Impressum

Pflichtangaben nach **§ 5 DDG** sind ausgefüllt: Torben Daniel Erz, Menzelstraße 8,
41564 Kaarst, Germany, torben.erz@nanoapes.com. Telefon und USt-IdNr. wurden
bewusst weggelassen (Blöcke + zugehörige i18n-Keys entfernt). Disclaimer
(Haftung für Inhalte/Links/Urheberrecht) ist mit Standardtexten zweisprachig
gefüllt.

---

## 🟢 Nice-to-have

### SEO

- [ ] `<meta name="description">` ggf. auf Marketing-Headline schärfen
- [ ] Open-Graph-Tags ergänzen (`og:title`, `og:description`, `og:image`, `og:url`) — relevant, sobald die Seite irgendwo geteilt wird
- [ ] Twitter-Card-Tags (`twitter:card`, `twitter:image`) — analog zu OG
- [ ] `sitemap.xml` und `robots.txt` (für GitHub Pages: optional, kann auto-generiert werden)

### Inhalt

- [ ] Screenshots der App in den Features-Bereich einbauen (aktuell nur Emoji-Icons)
- [ ] Changelog-/Release-Notes-Section, sobald Releases laufen
- [ ] FAQ-Section (z.B. „Warum brauche ich macOS 26.4?", „Wo werden meine Daten gespeichert?")
- [ ] Englischer Hero-Untertitel im DE-Block ggf. lokalisieren („SwiftUI-App" → „App"?)

### Tooling

- [ ] HTML-Smoke-Validierung in CI: `npx -y html-validate Website/index.html`
- [ ] Lighthouse-Run vor Live-Schaltung (Performance + Accessibility)
- [ ] Hosting-Setup wählen (GitHub Pages aus `/Website` ist am einfachsten)

### Datenschutz

- [ ] Prüfen, ob ein Hinweis zu `localStorage` (nur `lang`-Key) in einer
  Datenschutzerklärung nötig ist. Bei reiner Sprach-Persistenz **ohne**
  personenbezogenen Bezug i.d.R. kein Cookie-Banner notwendig — rechtlich aber
  einmal kurz prüfen.
