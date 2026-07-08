# Rimus Compact Entertainment Pack v3

Drop-in file: `entertainmentCompact01.js` if your SE currently imports that name.
Canonical file: `entertainmentCompact03.js`.

Format: `anchor_made_v1`

Top-level shape:

```js
pack.subjects.movies.george_lucas = {
  name: "George Lucas",
  fallback: { name: "Lucasfilm", target: "film", rhymes: [...] },
  made: [
    { name: "Star Wars", target: "Wars", rhymes: [...], fact: "..." }
  ]
}
```

Rules intended for SE:

- Facts are item-level fun facts.
- Use item target/rhymes for forward sentence.
- Use anchor target only if anchor has explicit rhymes; otherwise use fallback for backward layout.
- Skip any item with fewer than 3 rhymes.
- Verb repeat cap should be handled by SE.
- Verbs belong to SE, not the pack.

Subjects: movies, gaming, music.
Anchors per subject: 10.
Items per subject: 80.
Total items: 240.
