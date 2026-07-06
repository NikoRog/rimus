# Rimus Source Map

`../play.html` is now a static shell. The game starts from `main.js`.

- `analytics/` Firebase consent and event delivery.
- `audio/` SFX and future music controls.
- `content/` subjects, nodes, templates, local rhyme data.
- `core/` stable config and game object factories.
- `platform/` browser utilities, downloads, fetch helpers.
- `state/` initial saveable runtime state.
- `ui/` DOM lookup and reusable modal/help components.
- `visuals/` animation and VFX hooks.

Keep future changes inside the matching system whenever possible. Avoid moving gameplay rules into HTML.
