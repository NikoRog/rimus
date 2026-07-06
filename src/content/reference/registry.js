import { REFERENCE_PACKS } from './packs/index.js';

export const referenceRegistry = {
  packs: REFERENCE_PACKS,
  bySubject: new Map(REFERENCE_PACKS.map(pack => [pack.id, pack]))
};

export function getReferencePacks(subjectIds = []) {
  if (!subjectIds.length || subjectIds.includes('random')) return REFERENCE_PACKS;
  return subjectIds.map(id => referenceRegistry.bySubject.get(id)).filter(Boolean);
}

export function hasReferencePack(subjectId) {
  return referenceRegistry.bySubject.has(subjectId);
}
