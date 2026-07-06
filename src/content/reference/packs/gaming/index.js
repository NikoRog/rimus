import { normalizeReferencePack } from '../../schema.js';
import { gamingReferenceEntities } from './entities.js';
import { gamingReferenceNodes } from './nodes.js';

export const gamingReferencePack = normalizeReferencePack({
  id: 'gaming',
  name: 'Gaming',
  regionWeights: { international: 20, europe: 20, balkans: 5, eastAsia: 35, rest: 20 },
  familiarityWeights: { foundation: 25, expansion: 55, discovery: 20 },
  nodes: gamingReferenceNodes.map(node => ({
    ...node,
    entities: gamingReferenceEntities.filter(entity => entity.node === node.id)
  }))
});
