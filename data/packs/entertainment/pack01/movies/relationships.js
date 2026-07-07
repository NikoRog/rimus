export const relationships = [
  {
    "id": "movies.relationship.001",
    "subject": "movies",
    "relationshipType": "created_by",
    "fromEntityId": "movies.franchise.star-wars",
    "toEntityId": "movies.director.george-lucas",
    "objectText": null,
    "templateIds": [
      "movies.template.002"
    ],
    "finalWordIds": [
      "movies.final_word.lucas"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "movies.relationship.002",
    "subject": "movies",
    "relationshipType": "features_character",
    "fromEntityId": "movies.franchise.star-wars",
    "toEntityId": "movies.character.darth-vader",
    "objectText": null,
    "templateIds": [
      "movies.template.003"
    ],
    "finalWordIds": [
      "movies.final_word.vader"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "movies.relationship.003",
    "subject": "movies",
    "relationshipType": "directed_by",
    "fromEntityId": "movies.film.jurassic-park",
    "toEntityId": "movies.director.steven-spielberg",
    "objectText": null,
    "templateIds": [
      "movies.template.001"
    ],
    "finalWordIds": [
      "movies.final_word.spielberg"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "movies.relationship.004",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.character.indiana-jones",
    "toEntityId": "movies.director.steven-spielberg",
    "objectText": null,
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.spielberg"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "movies.relationship.005",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.character.indiana-jones",
    "toEntityId": "movies.director.george-lucas",
    "objectText": null,
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.lucas"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "movies.relationship.006",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.character.james-bond",
    "toEntityId": null,
    "objectText": "spy cinema",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.bond"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "movies.relationship.007",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.character.harry-potter",
    "toEntityId": null,
    "objectText": "fantasy film",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.potter"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "movies.relationship.008",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.character.godzilla",
    "toEntityId": null,
    "objectText": "kaiju cinema",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.godzilla"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "movies.relationship.009",
    "subject": "movies",
    "relationshipType": "produced_by",
    "fromEntityId": "movies.film.spirited-away",
    "toEntityId": "movies.studio.studio-ghibli",
    "objectText": null,
    "templateIds": [
      "movies.template.013"
    ],
    "finalWordIds": [
      "movies.final_word.ghibli"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "movies.relationship.010",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.film.parasite",
    "toEntityId": null,
    "objectText": "Korean cinema",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.parasite"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "movies.relationship.011",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.film.the-lord-of-the-rings",
    "toEntityId": null,
    "objectText": "fantasy epics",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.rings"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "movies.relationship.012",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.film.rocky",
    "toEntityId": null,
    "objectText": "boxing films",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.rocky"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "movies.relationship.013",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.film.the-matrix",
    "toEntityId": null,
    "objectText": "cyberpunk action",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.matrix"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "movies.relationship.014",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.film.avatar",
    "toEntityId": null,
    "objectText": "visual effects spectacle",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.avatar"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "movies.relationship.015",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.film.the-godfather",
    "toEntityId": null,
    "objectText": "mafia cinema",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.godfather"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "movies.relationship.016",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.film.titanic",
    "toEntityId": null,
    "objectText": "romantic disaster cinema",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.titanic"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "movies.relationship.017",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.industry.hollywood",
    "toEntityId": null,
    "objectText": "American film industry",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.hollywood"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "movies.relationship.018",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.franchise.marvel-cinematic-universe",
    "toEntityId": null,
    "objectText": "superhero blockbusters",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.marvel"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "movies.relationship.019",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.award.academy-awards",
    "toEntityId": null,
    "objectText": "film awards",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.oscars"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "movies.relationship.020",
    "subject": "movies",
    "relationshipType": "associated_with",
    "fromEntityId": "movies.industry.bollywood",
    "toEntityId": null,
    "objectText": "Indian popular cinema",
    "templateIds": [
      "movies.template.004"
    ],
    "finalWordIds": [
      "movies.final_word.bollywood"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  }
];
