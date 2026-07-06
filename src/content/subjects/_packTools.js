const RHYME_BANK = {
  a: ['day', 'play', 'say', 'way'],
  e: ['see', 'free', 'tree', 'be'],
  i: ['sky', 'try', 'fly', 'high'],
  o: ['go', 'show', 'flow', 'know'],
  u: ['true', 'blue', 'new', 'through'],
  t: ['light', 'night', 'fight', 'right'],
  n: ['line', 'sign', 'shine', 'fine'],
  r: ['star', 'bar', 'far', 'car'],
  d: ['road', 'code', 'load', 'mode'],
  m: ['time', 'rhyme', 'climb', 'prime'],
  l: ['well', 'bell', 'tell', 'shell'],
  s: ['place', 'face', 'space', 'race'],
  k: ['back', 'track', 'stack', 'attack'],
  p: ['cap', 'rap', 'snap', 'trap'],
  g: ['ring', 'sing', 'bring', 'thing'],
  y: ['story', 'glory', 'category', 'memory']
};

export function cleanTerm(term) {
  return String(term || '').toLowerCase().replace(/[^a-z]/g, '');
}

export function cycleSlice(words, index, size = 5) {
  return Array.from({ length: size }, (_, offset) => words[(index + offset) % words.length]);
}

export function guessRhymes(term) {
  const key = cleanTerm(term);
  if (!key) return RHYME_BANK.n;
  if (key.endsWith('tion') || key.endsWith('sion')) return ['station', 'nation', 'creation', 'relation'];
  if (key.endsWith('er') || key.endsWith('or')) return ['later', 'greater', 'creator', 'speaker'];
  if (key.endsWith('ing')) return ['sing', 'ring', 'bring', 'thing'];
  if (key.endsWith('le')) return ['trouble', 'bubble', 'double', 'subtle'];
  if (key.endsWith('ight')) return ['light', 'night', 'fight', 'right'];
  return RHYME_BANK[key.at(-1)] || RHYME_BANK.n;
}

export function defineSubjectPack(pack) {
  return pack;
}

export function buildNodes(pack) {
  if (Array.isArray(pack.nodes)) {
    return pack.nodes.map(node => ({
      s: pack.id,
      id: node.id,
      r: node.topic,
      scene: node.scene,
      d: (node.facts || [])[0] || pack.theme,
      facts: node.facts || [],
      defs: node.definitions || {},
      templates: node.templates || [],
      roles: {
        places: node.places || [],
        people: node.people || node.actors || [],
        objects: node.objects || [],
        actions: node.actions || [],
        moods: node.moods || node.adjectives || [],
        adverbs: node.adverbs || []
      }
    }));
  }
  return pack.topics.map((topic, index) => ({
    s: pack.id,
    r: topic,
    d: pack.facts[index % pack.facts.length],
    defs: pack.definitions,
    fragments: pack.fragments,
    roles: {
      places: cycleSlice(pack.places, index, 5),
      people: cycleSlice(pack.people, index, 5),
      objects: cycleSlice(pack.objects, index, 6),
      actions: cycleSlice(pack.actions, index, 5),
      moods: cycleSlice(pack.moods, index, 5),
      adverbs: cycleSlice(pack.adverbs, index, 4)
    }
  }));
}

export function buildLocalRhymes(packs) {
  const local = {};
  for (const pack of packs) {
    for (const role of ['places', 'people', 'objects', 'actions', 'moods', 'adverbs']) {
      if (Array.isArray(pack.nodes)) {
        for (const node of pack.nodes) {
          const words = role === 'people' ? (node.people || node.actors || []) :
            role === 'moods' ? (node.moods || node.adjectives || []) : (node[role] || []);
          for (const term of words) local[cleanTerm(term)] = guessRhymes(term);
        }
      } else {
        for (const term of pack[role]) local[cleanTerm(term)] = guessRhymes(term);
      }
    }
  }
  return local;
}

export function packItemCount(pack) {
  if (Array.isArray(pack.nodes)) {
    return pack.nodes.reduce((total, node) => total +
      ['places', 'people', 'actors', 'objects', 'actions', 'moods', 'adjectives', 'adverbs']
        .reduce((sum, role) => sum + (node[role]?.length || 0), 0) +
      Object.keys(node.definitions || {}).length + (node.facts?.length || 0) +
      (node.templates?.length || 0), pack.nodes.length);
  }
  return pack.topics.length + pack.places.length + pack.people.length + pack.objects.length +
    pack.actions.length + pack.moods.length + pack.adverbs.length +
    Object.keys(pack.definitions).length + pack.facts.length + pack.fragments.length;
}
