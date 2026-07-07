export const relationships = [
  {
    "id": "food.relationship.001",
    "subject": "food",
    "relationshipType": "originates_from",
    "fromEntityId": "food.dish.pizza",
    "toEntityId": "food.cuisine.italian-cuisine",
    "objectText": null,
    "templateIds": [
      "food.template.001"
    ],
    "finalWordIds": [
      "food.final_word.italian"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.002",
    "subject": "food",
    "relationshipType": "originates_from",
    "fromEntityId": "food.dish.sushi",
    "toEntityId": "food.cuisine.japanese-cuisine",
    "objectText": null,
    "templateIds": [
      "food.template.001"
    ],
    "finalWordIds": [
      "food.final_word.japanese"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.003",
    "subject": "food",
    "relationshipType": "part_of",
    "fromEntityId": "food.dish.ramen",
    "toEntityId": "food.cuisine.japanese-cuisine",
    "objectText": null,
    "templateIds": [
      "food.template.010"
    ],
    "finalWordIds": [
      "food.final_word.japanese"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "food.relationship.004",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.dish.tacos",
    "toEntityId": null,
    "objectText": "Mexican street food",
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.tacos"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.005",
    "subject": "food",
    "relationshipType": "part_of",
    "fromEntityId": "food.dish.pasta",
    "toEntityId": "food.cuisine.italian-cuisine",
    "objectText": null,
    "templateIds": [
      "food.template.010"
    ],
    "finalWordIds": [
      "food.final_word.italian"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.006",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.dish.burger",
    "toEntityId": null,
    "objectText": "fast food",
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.burger"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.007",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.dish.burek",
    "toEntityId": null,
    "objectText": "Balkan breakfast and bakeries",
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.burek"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "food.relationship.008",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.dish.croissant",
    "toEntityId": null,
    "objectText": "French bakeries",
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.croissant"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "food.relationship.009",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.dish.curry",
    "toEntityId": null,
    "objectText": "spices and sauce",
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.curry"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "food.relationship.010",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.dish.kimchi",
    "toEntityId": "food.process.fermentation",
    "objectText": null,
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.fermentation"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "food.relationship.011",
    "subject": "food",
    "relationshipType": "made_with",
    "fromEntityId": "food.dish.pizza",
    "toEntityId": "food.ingredient.cheese",
    "objectText": null,
    "templateIds": [
      "food.template.013"
    ],
    "finalWordIds": [
      "food.final_word.cheese"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.012",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.food.bread",
    "toEntityId": "food.process.fermentation",
    "objectText": null,
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.bread"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "food.relationship.013",
    "subject": "food",
    "relationshipType": "staple_of",
    "fromEntityId": "food.food.rice",
    "toEntityId": null,
    "objectText": "many Asian cuisines",
    "templateIds": [
      "food.template.009"
    ],
    "finalWordIds": [
      "food.final_word.rice"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.014",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.ingredient.olive-oil",
    "toEntityId": null,
    "objectText": "Mediterranean cooking",
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.oil"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "food.relationship.015",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.food.chocolate",
    "toEntityId": null,
    "objectText": "desserts and sweets",
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.chocolate"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.016",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.drink.coffee",
    "toEntityId": null,
    "objectText": "morning routines",
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.coffee"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.017",
    "subject": "food",
    "relationshipType": "belongs_to",
    "fromEntityId": "food.dessert.ice-cream",
    "toEntityId": null,
    "objectText": "desserts",
    "templateIds": [
      "food.template.003"
    ],
    "finalWordIds": [
      "food.final_word.cream"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "food.relationship.018",
    "subject": "food",
    "relationshipType": "belongs_to",
    "fromEntityId": "food.dish.soup",
    "toEntityId": null,
    "objectText": "comfort food",
    "templateIds": [
      "food.template.003"
    ],
    "finalWordIds": [
      "food.final_word.soup"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "food.relationship.019",
    "subject": "food",
    "relationshipType": "belongs_to",
    "fromEntityId": "food.dish.salad",
    "toEntityId": null,
    "objectText": "fresh dishes",
    "templateIds": [
      "food.template.003"
    ],
    "finalWordIds": [
      "food.final_word.salad"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "food.relationship.020",
    "subject": "food",
    "relationshipType": "associated_with",
    "fromEntityId": "food.award.michelin-star",
    "toEntityId": null,
    "objectText": "fine dining",
    "templateIds": [
      "food.template.004"
    ],
    "finalWordIds": [
      "food.final_word.michelin"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  }
];
