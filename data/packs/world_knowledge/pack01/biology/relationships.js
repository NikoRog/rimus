export const relationships = [
  {
    "id": "biology.relationship.001",
    "subject": "biology",
    "relationshipType": "studies",
    "fromEntityId": "biology.person.charles-darwin",
    "toEntityId": "biology.concept.evolution",
    "objectText": null,
    "templateIds": [
      "biology.template.014"
    ],
    "finalWordIds": [
      "biology.final_word.evolution"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "biology.relationship.002",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.person.charles-darwin",
    "toEntityId": "biology.concept.natural-selection",
    "objectText": null,
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.selection"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "biology.relationship.003",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.person.gregor-mendel",
    "toEntityId": "biology.concept.gene",
    "objectText": null,
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.gene"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "biology.relationship.004",
    "subject": "biology",
    "relationshipType": "contains",
    "fromEntityId": "biology.molecule.dna",
    "toEntityId": "biology.concept.gene",
    "objectText": null,
    "templateIds": [
      "biology.template.001"
    ],
    "finalWordIds": [
      "biology.final_word.gene"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "biology.relationship.005",
    "subject": "biology",
    "relationshipType": "contains",
    "fromEntityId": "biology.structure.cell",
    "toEntityId": "biology.organelle.nucleus",
    "objectText": null,
    "templateIds": [
      "biology.template.001"
    ],
    "finalWordIds": [
      "biology.final_word.nucleus"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "biology.relationship.006",
    "subject": "biology",
    "relationshipType": "contains",
    "fromEntityId": "biology.structure.cell",
    "toEntityId": "biology.organelle.mitochondria",
    "objectText": null,
    "templateIds": [
      "biology.template.001"
    ],
    "finalWordIds": [
      "biology.final_word.mitochondria"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "biology.relationship.007",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.concept.evolution",
    "toEntityId": "biology.concept.natural-selection",
    "objectText": null,
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.selection"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "biology.relationship.008",
    "subject": "biology",
    "relationshipType": "produces",
    "fromEntityId": "biology.process.photosynthesis",
    "toEntityId": null,
    "objectText": "sugar and oxygen",
    "templateIds": [
      "biology.template.006"
    ],
    "finalWordIds": [
      "biology.final_word.photosynthesis"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "biology.relationship.009",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.process.photosynthesis",
    "toEntityId": "biology.organism_group.plant",
    "objectText": null,
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.plant"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "biology.relationship.010",
    "subject": "biology",
    "relationshipType": "contains",
    "fromEntityId": "biology.system.ecosystem",
    "toEntityId": "biology.concept.food-chain",
    "objectText": null,
    "templateIds": [
      "biology.template.001"
    ],
    "finalWordIds": [
      "biology.final_word.chain"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "biology.relationship.011",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.concept.species",
    "toEntityId": "biology.concept.evolution",
    "objectText": null,
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.evolution"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "biology.relationship.012",
    "subject": "biology",
    "relationshipType": "belongs_to",
    "fromEntityId": "biology.animal_group.mammal",
    "toEntityId": null,
    "objectText": "animals",
    "templateIds": [
      "biology.template.011"
    ],
    "finalWordIds": [
      "biology.final_word.mammal"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "biology.relationship.013",
    "subject": "biology",
    "relationshipType": "belongs_to",
    "fromEntityId": "biology.animal_group.bird",
    "toEntityId": null,
    "objectText": "animals",
    "templateIds": [
      "biology.template.011"
    ],
    "finalWordIds": [
      "biology.final_word.bird"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "biology.relationship.014",
    "subject": "biology",
    "relationshipType": "belongs_to",
    "fromEntityId": "biology.animal_group.fish",
    "toEntityId": null,
    "objectText": "animals",
    "templateIds": [
      "biology.template.011"
    ],
    "finalWordIds": [
      "biology.final_word.fish"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "biology.relationship.015",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.organism_group.bacteria",
    "toEntityId": null,
    "objectText": "microbiology",
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.bacteria"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "biology.relationship.016",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.biological_agent.virus",
    "toEntityId": null,
    "objectText": "infection",
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.virus"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "biology.relationship.017",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.organism_group.fungus",
    "toEntityId": null,
    "objectText": "decomposition",
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.fungus"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "biology.relationship.018",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.organ.brain",
    "toEntityId": null,
    "objectText": "the nervous system",
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.brain"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "biology.relationship.019",
    "subject": "biology",
    "relationshipType": "linked_to",
    "fromEntityId": "biology.organ.heart",
    "toEntityId": null,
    "objectText": "blood circulation",
    "templateIds": [
      "biology.template.007"
    ],
    "finalWordIds": [
      "biology.final_word.heart"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "biology.relationship.020",
    "subject": "biology",
    "relationshipType": "protects_against",
    "fromEntityId": "biology.medical_tool.vaccine",
    "toEntityId": null,
    "objectText": "infectious disease",
    "templateIds": [
      "biology.template.004"
    ],
    "finalWordIds": [
      "biology.final_word.vaccine"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  }
];
