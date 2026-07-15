# Rimus Freestyle Content

Freestyle content is loaded from TXT packs listed in `freestyle-packs.json`.

Each pack uses repeated `PERSON` blocks:

- `NAME`
- `CATEGORY`
- `SNTC01`
- `SNTC02`
- `WORKS`

The runtime treats `SNTC01` and `SNTC02` as separate cards. It does not generate or rewrite sentences.

Static browser builds cannot enumerate folders, so future TXT packs must be added to `freestyle-packs.json`.
