# Rimus v0.6 Open Beta

Static GitHub Pages web version.

## Pages

- `index.html` - landing page
- `play.html` - game
- `about.html` - about, privacy, feedback, roadmap
- `styles/main.css` - shared landing/about styles
- `assets/` - game assets
- `src/` and `content/` - reserved for future modular extraction

## Run Locally

Use a local server, not `file://`.

```bash
python -m http.server 4173
```

Open:

```text
http://localhost:4173
```

VS Code Live Server is also fine.

## Notes

- No backend.
- No build step.
- Links are relative for GitHub Pages subpaths.
- Firebase Analytics is consent-gated.
- Firebase web config is public; do not add server keys or paid API keys to frontend code.
- Firestore or Storage must have security rules before use.

## Backup And Archive

- Pre-split backup: `backups/index-before-rimus-site-split.html`
- v0.6 foundation backup: `backups/index-v0.6-foundation-backup.html`
- Archived old modular attempt: `_archive/unused-pre-v0.6-foundation/`

