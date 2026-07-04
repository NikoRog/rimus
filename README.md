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

VS Code Live Server is also fine, including `http://localhost:5500/` and `http://127.0.0.1:5500/`.

## Notes

- No backend.
- No build step.
- Links are relative for GitHub Pages subpaths.
- Firebase Analytics is consent-gated.
- Firebase web config is public; do not add server keys or paid API keys to frontend code.
- Firebase Web API keys are public by design. The key is restricted in Google Cloud Console by allowed HTTP referrers. No private server keys or service account credentials should be committed to this repository.
- Firestore or Storage must have security rules before use.

## License

The source code of Rimus is licensed under the MIT License.

All artwork, branding, logos, music, sound effects, UI assets, character designs, original content, and other creative assets are licensed separately under the Rimus Asset License (All Rights Reserved).

See ASSETS_LICENSE.md for details.

## Backup And Archive

- Pre-split backup: `backups/index-before-rimus-site-split.html`
- v0.6 foundation backup: `backups/index-v0.6-foundation-backup.html`
- Archived old modular attempt: `_archive/unused-pre-v0.6-foundation/`
