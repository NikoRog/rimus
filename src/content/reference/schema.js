export const FAMILIARITY_WEIGHTS = {
  foundation: 20,
  expansion: 60,
  discovery: 20
};

export const REGION_WEIGHTS = {
  international: 20,
  europe: 20,
  balkans: 20,
  eastAsia: 30,
  rest: 10
};

export const ENTITY_TYPES = {
  person: ['creator', 'athlete', 'artist', 'scientist', 'actor', 'director'],
  work: ['movie', 'game', 'song', 'book', 'album'],
  place: ['country', 'mountain', 'city', 'landmark', 'river'],
  object: ['machine', 'instrument', 'weapon', 'tool', 'food'],
  concept: ['genre', 'style', 'rule', 'technique', 'disease', 'mechanic'],
  organism: ['animal', 'plant', 'fungus', 'bacteria'],
  event: ['battle', 'tournament', 'discovery', 'release', 'era']
};

export function normalizeReferencePack(pack) {
  return {
    regionWeights: REGION_WEIGHTS,
    familiarityWeights: FAMILIARITY_WEIGHTS,
    nodes: [],
    ...pack,
    nodes: (pack.nodes || []).map(node => ({
      entityTypes: [],
      entities: [],
      ...node,
      entities: (node.entities || []).map(entity => ({
        subject: pack.id,
        node: node.id,
        relationships: [],
        aliases: [],
        tags: [],
        facts: {},
        ...entity
      }))
    }))
  };
}
