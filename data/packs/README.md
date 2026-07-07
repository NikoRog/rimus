# Rimus Production Packs

Pack ZIPs are extracted here as immutable source data.

Runtime code imports these modules through `src/content/pack01/adapter.js`.
The adapter validates pack references, preserves entities/relationships/facts/templates/final words, and exposes `final_words.js` as the first playable layer for the current v0.6.x prompt engine.

Do not manually edit generated pack files in this folder. Add fixes upstream and replace the pack.
