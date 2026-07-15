const PACK_BASE = './src/content/';

export async function loadFreestylePacks(manifestUrl = `${PACK_BASE}freestyle-packs.json`) {
  const manifestResponse = await fetch(manifestUrl, { cache: 'no-store' });
  if (!manifestResponse.ok) throw new Error(`Freestyle manifest failed to load: ${manifestResponse.status}`);
  const files = await manifestResponse.json();
  if (!Array.isArray(files)) throw new Error('Freestyle manifest must be an array of TXT filenames');

  const people = [];
  for (const file of files) {
    if (!String(file).toLowerCase().endsWith('.txt')) continue;
    const response = await fetch(PACK_BASE + encodeURIComponent(file), { cache: 'no-store' });
    if (!response.ok) throw new Error(`Freestyle pack failed to load: ${response.status} ${file}`);
    people.push(...parseFreestylePack(await response.text(), file));
  }

  const cards = people.flatMap(person => ['SNTC01', 'SNTC02']
    .filter(key => person.sentences[key])
    .map(key => ({
      id: `${person.pack}:${person.id}:${key}`,
      personName: person.name,
      category: person.category,
      sentence: person.sentences[key],
      sentenceKey: key,
      works: person.works
    })));

  if (!cards.length) throw new Error('No valid freestyle cards were found');

  const categories = [...new Set(people.map(person => person.category))].sort().map(id => ({
    id,
    name: titleCase(id)
  }));

  return { files, people, cards, categories };
}

export function parseFreestylePack(text, pack = 'inline') {
  const blocks = String(text || '').split(/\bPERSON\b/g).map(block => block.trim()).filter(Boolean);
  const people = [];

  blocks.forEach((block, index) => {
    const fields = {};
    for (const rawLine of block.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || !line.includes('=')) continue;
      const splitAt = line.indexOf('=');
      fields[line.slice(0, splitAt).trim().toUpperCase()] = line.slice(splitAt + 1).trim();
    }

    const name = fields.NAME;
    const category = fields.CATEGORY;
    if (!name || !category || (!fields.SNTC01 && !fields.SNTC02)) return;

    people.push({
      id: `${slug(category)}.${slug(name)}.${index}`,
      pack,
      name,
      category,
      sentences: {
        SNTC01: fields.SNTC01 || '',
        SNTC02: fields.SNTC02 || ''
      },
      works: (fields.WORKS || '').split('|').map(item => item.trim()).filter(Boolean)
    });
  });

  return people;
}

export function finalMeaningfulWord(sentence) {
  const match = String(sentence || '').trim().match(/[A-Za-z0-9'-]+(?=[^A-Za-z0-9'-]*$)/);
  return match ? match[0].replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, '') : '';
}

function slug(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

function titleCase(value) {
  return String(value || '').replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}
