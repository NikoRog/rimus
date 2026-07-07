import { manifest as entertainmentManifest } from '../../../data/packs/entertainment/pack01/manifest.js';
import { entities as gamingEntities } from '../../../data/packs/entertainment/pack01/gaming/entities.js';
import { relationships as gamingRelationships } from '../../../data/packs/entertainment/pack01/gaming/relationships.js';
import { facts as gamingFacts } from '../../../data/packs/entertainment/pack01/gaming/facts.js';
import { templates as gamingTemplates } from '../../../data/packs/entertainment/pack01/gaming/templates.js';
import { finalWords as gamingFinalWords } from '../../../data/packs/entertainment/pack01/gaming/final_words.js';
import { entities as moviesEntities } from '../../../data/packs/entertainment/pack01/movies/entities.js';
import { relationships as moviesRelationships } from '../../../data/packs/entertainment/pack01/movies/relationships.js';
import { facts as moviesFacts } from '../../../data/packs/entertainment/pack01/movies/facts.js';
import { templates as moviesTemplates } from '../../../data/packs/entertainment/pack01/movies/templates.js';
import { finalWords as moviesFinalWords } from '../../../data/packs/entertainment/pack01/movies/final_words.js';
import { entities as musicEntities } from '../../../data/packs/entertainment/pack01/music/entities.js';
import { relationships as musicRelationships } from '../../../data/packs/entertainment/pack01/music/relationships.js';
import { facts as musicFacts } from '../../../data/packs/entertainment/pack01/music/facts.js';
import { templates as musicTemplates } from '../../../data/packs/entertainment/pack01/music/templates.js';
import { finalWords as musicFinalWords } from '../../../data/packs/entertainment/pack01/music/final_words.js';
import { crossRelationships as entertainmentCrossRelationships } from '../../../data/packs/entertainment/pack01/cross_subject/relationships.js';
import { crossFacts as entertainmentCrossFacts } from '../../../data/packs/entertainment/pack01/cross_subject/facts.js';
import { crossTemplates as entertainmentCrossTemplates } from '../../../data/packs/entertainment/pack01/cross_subject/templates.js';

import { manifest as worldKnowledgeManifest } from '../../../data/packs/world_knowledge/pack01/manifest.js';
import { entities as historyEntities } from '../../../data/packs/world_knowledge/pack01/history/entities.js';
import { relationships as historyRelationships } from '../../../data/packs/world_knowledge/pack01/history/relationships.js';
import { facts as historyFacts } from '../../../data/packs/world_knowledge/pack01/history/facts.js';
import { templates as historyTemplates } from '../../../data/packs/world_knowledge/pack01/history/templates.js';
import { finalWords as historyFinalWords } from '../../../data/packs/world_knowledge/pack01/history/final_words.js';
import { entities as geographyEntities } from '../../../data/packs/world_knowledge/pack01/geography/entities.js';
import { relationships as geographyRelationships } from '../../../data/packs/world_knowledge/pack01/geography/relationships.js';
import { facts as geographyFacts } from '../../../data/packs/world_knowledge/pack01/geography/facts.js';
import { templates as geographyTemplates } from '../../../data/packs/world_knowledge/pack01/geography/templates.js';
import { finalWords as geographyFinalWords } from '../../../data/packs/world_knowledge/pack01/geography/final_words.js';
import { entities as biologyEntities } from '../../../data/packs/world_knowledge/pack01/biology/entities.js';
import { relationships as biologyRelationships } from '../../../data/packs/world_knowledge/pack01/biology/relationships.js';
import { facts as biologyFacts } from '../../../data/packs/world_knowledge/pack01/biology/facts.js';
import { templates as biologyTemplates } from '../../../data/packs/world_knowledge/pack01/biology/templates.js';
import { finalWords as biologyFinalWords } from '../../../data/packs/world_knowledge/pack01/biology/final_words.js';
import { crossRelationships as worldKnowledgeCrossRelationships } from '../../../data/packs/world_knowledge/pack01/cross_subject/relationships.js';
import { crossFacts as worldKnowledgeCrossFacts } from '../../../data/packs/world_knowledge/pack01/cross_subject/facts.js';
import { crossTemplates as worldKnowledgeCrossTemplates } from '../../../data/packs/world_knowledge/pack01/cross_subject/templates.js';

import { manifest as lifestyleManifest } from '../../../data/packs/lifestyle/pack01/manifest.js';
import { entities as fashionEntities } from '../../../data/packs/lifestyle/pack01/fashion/entities.js';
import { relationships as fashionRelationships } from '../../../data/packs/lifestyle/pack01/fashion/relationships.js';
import { facts as fashionFacts } from '../../../data/packs/lifestyle/pack01/fashion/facts.js';
import { templates as fashionTemplates } from '../../../data/packs/lifestyle/pack01/fashion/templates.js';
import { finalWords as fashionFinalWords } from '../../../data/packs/lifestyle/pack01/fashion/final_words.js';
import { entities as foodEntities } from '../../../data/packs/lifestyle/pack01/food/entities.js';
import { relationships as foodRelationships } from '../../../data/packs/lifestyle/pack01/food/relationships.js';
import { facts as foodFacts } from '../../../data/packs/lifestyle/pack01/food/facts.js';
import { templates as foodTemplates } from '../../../data/packs/lifestyle/pack01/food/templates.js';
import { finalWords as foodFinalWords } from '../../../data/packs/lifestyle/pack01/food/final_words.js';
import { entities as travelEntities } from '../../../data/packs/lifestyle/pack01/travel/entities.js';
import { relationships as travelRelationships } from '../../../data/packs/lifestyle/pack01/travel/relationships.js';
import { facts as travelFacts } from '../../../data/packs/lifestyle/pack01/travel/facts.js';
import { templates as travelTemplates } from '../../../data/packs/lifestyle/pack01/travel/templates.js';
import { finalWords as travelFinalWords } from '../../../data/packs/lifestyle/pack01/travel/final_words.js';
import { crossRelationships as lifestyleCrossRelationships } from '../../../data/packs/lifestyle/pack01/cross_subject/relationships.js';
import { crossFacts as lifestyleCrossFacts } from '../../../data/packs/lifestyle/pack01/cross_subject/facts.js';
import { crossTemplates as lifestyleCrossTemplates } from '../../../data/packs/lifestyle/pack01/cross_subject/templates.js';

export const RAW_PACK01 = [
  {
    family: 'entertainment',
    packId: entertainmentManifest.packId,
    manifest: entertainmentManifest,
    subjects: {
      gaming: { entities: gamingEntities, relationships: gamingRelationships, facts: gamingFacts, templates: gamingTemplates, finalWords: gamingFinalWords },
      movies: { entities: moviesEntities, relationships: moviesRelationships, facts: moviesFacts, templates: moviesTemplates, finalWords: moviesFinalWords },
      music: { entities: musicEntities, relationships: musicRelationships, facts: musicFacts, templates: musicTemplates, finalWords: musicFinalWords }
    },
    crossSubjectRelationships: entertainmentCrossRelationships,
    crossSubjectFacts: entertainmentCrossFacts,
    crossSubjectTemplates: entertainmentCrossTemplates
  },
  {
    family: 'world_knowledge',
    packId: worldKnowledgeManifest.packId,
    manifest: worldKnowledgeManifest,
    subjects: {
      history: { entities: historyEntities, relationships: historyRelationships, facts: historyFacts, templates: historyTemplates, finalWords: historyFinalWords },
      geography: { entities: geographyEntities, relationships: geographyRelationships, facts: geographyFacts, templates: geographyTemplates, finalWords: geographyFinalWords },
      biology: { entities: biologyEntities, relationships: biologyRelationships, facts: biologyFacts, templates: biologyTemplates, finalWords: biologyFinalWords }
    },
    crossSubjectRelationships: worldKnowledgeCrossRelationships,
    crossSubjectFacts: worldKnowledgeCrossFacts,
    crossSubjectTemplates: worldKnowledgeCrossTemplates
  },
  {
    family: 'lifestyle',
    packId: lifestyleManifest.packId,
    manifest: lifestyleManifest,
    subjects: {
      fashion: { entities: fashionEntities, relationships: fashionRelationships, facts: fashionFacts, templates: fashionTemplates, finalWords: fashionFinalWords },
      food: { entities: foodEntities, relationships: foodRelationships, facts: foodFacts, templates: foodTemplates, finalWords: foodFinalWords },
      travel: { entities: travelEntities, relationships: travelRelationships, facts: travelFacts, templates: travelTemplates, finalWords: travelFinalWords }
    },
    crossSubjectRelationships: lifestyleCrossRelationships,
    crossSubjectFacts: lifestyleCrossFacts,
    crossSubjectTemplates: lifestyleCrossTemplates
  }
];
