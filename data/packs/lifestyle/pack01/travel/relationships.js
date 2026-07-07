export const relationships = [
  {
    "id": "travel.relationship.001",
    "subject": "travel",
    "relationshipType": "used_for",
    "fromEntityId": "travel.document.passport",
    "toEntityId": null,
    "objectText": "crossing borders",
    "templateIds": [
      "travel.template.001"
    ],
    "finalWordIds": [
      "travel.final_word.passport"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "travel.relationship.002",
    "subject": "travel",
    "relationshipType": "used_for",
    "fromEntityId": "travel.document.visa",
    "toEntityId": null,
    "objectText": "entering some countries",
    "templateIds": [
      "travel.template.001"
    ],
    "finalWordIds": [
      "travel.final_word.visa"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "travel.relationship.003",
    "subject": "travel",
    "relationshipType": "associated_with",
    "fromEntityId": "travel.place.airport",
    "toEntityId": "travel.transport.flight",
    "objectText": null,
    "templateIds": [
      "travel.template.004"
    ],
    "finalWordIds": [
      "travel.final_word.flight"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "travel.relationship.004",
    "subject": "travel",
    "relationshipType": "leads_to",
    "fromEntityId": "travel.transport.flight",
    "toEntityId": "travel.place.airport",
    "objectText": null,
    "templateIds": [
      "travel.template.003"
    ],
    "finalWordIds": [
      "travel.final_word.airport"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "travel.relationship.005",
    "subject": "travel",
    "relationshipType": "associated_with",
    "fromEntityId": "travel.transport.train",
    "toEntityId": null,
    "objectText": "railway stations",
    "templateIds": [
      "travel.template.004"
    ],
    "finalWordIds": [
      "travel.final_word.train"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "travel.relationship.006",
    "subject": "travel",
    "relationshipType": "associated_with",
    "fromEntityId": "travel.transport.road-trip",
    "toEntityId": null,
    "objectText": "cars and open roads",
    "templateIds": [
      "travel.template.004"
    ],
    "finalWordIds": [
      "travel.final_word.road"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "travel.relationship.007",
    "subject": "travel",
    "relationshipType": "belongs_to",
    "fromEntityId": "travel.lodging.hotel",
    "toEntityId": null,
    "objectText": "accommodation",
    "templateIds": [
      "travel.template.009"
    ],
    "finalWordIds": [
      "travel.final_word.hotel"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "travel.relationship.008",
    "subject": "travel",
    "relationshipType": "belongs_to",
    "fromEntityId": "travel.lodging.hostel",
    "toEntityId": null,
    "objectText": "budget accommodation",
    "templateIds": [
      "travel.template.009"
    ],
    "finalWordIds": [
      "travel.final_word.hostel"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "travel.relationship.009",
    "subject": "travel",
    "relationshipType": "used_for",
    "fromEntityId": "travel.bag.suitcase",
    "toEntityId": null,
    "objectText": "packing clothes",
    "templateIds": [
      "travel.template.001"
    ],
    "finalWordIds": [
      "travel.final_word.suitcase"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "travel.relationship.010",
    "subject": "travel",
    "relationshipType": "used_for",
    "fromEntityId": "travel.gear.map",
    "toEntityId": null,
    "objectText": "navigation",
    "templateIds": [
      "travel.template.001"
    ],
    "finalWordIds": [
      "travel.final_word.map"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "travel.relationship.011",
    "subject": "travel",
    "relationshipType": "associated_with",
    "fromEntityId": "travel.activity.backpacking",
    "toEntityId": "travel.lodging.hostel",
    "objectText": null,
    "templateIds": [
      "travel.template.004"
    ],
    "finalWordIds": [
      "travel.final_word.backpacking"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "travel.relationship.012",
    "subject": "travel",
    "relationshipType": "associated_with",
    "fromEntityId": "travel.activity.camping",
    "toEntityId": null,
    "objectText": "tents and nature",
    "templateIds": [
      "travel.template.004"
    ],
    "finalWordIds": [
      "travel.final_word.camping"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "travel.relationship.013",
    "subject": "travel",
    "relationshipType": "associated_with",
    "fromEntityId": "travel.place.beach",
    "toEntityId": null,
    "objectText": "summer vacation",
    "templateIds": [
      "travel.template.004"
    ],
    "finalWordIds": [
      "travel.final_word.beach"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "travel.relationship.014",
    "subject": "travel",
    "relationshipType": "associated_with",
    "fromEntityId": "travel.place.museum",
    "toEntityId": null,
    "objectText": "culture and history",
    "templateIds": [
      "travel.template.004"
    ],
    "finalWordIds": [
      "travel.final_word.museum"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "travel.relationship.015",
    "subject": "travel",
    "relationshipType": "associated_with",
    "fromEntityId": "travel.place.landmark",
    "toEntityId": null,
    "objectText": "sightseeing",
    "templateIds": [
      "travel.template.004"
    ],
    "finalWordIds": [
      "travel.final_word.landmark"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "travel.relationship.016",
    "subject": "travel",
    "relationshipType": "associated_with",
    "fromEntityId": "travel.object.souvenir",
    "toEntityId": null,
    "objectText": "memories from a trip",
    "templateIds": [
      "travel.template.004"
    ],
    "finalWordIds": [
      "travel.final_word.souvenir"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "travel.relationship.017",
    "subject": "travel",
    "relationshipType": "organizes",
    "fromEntityId": "travel.plan.itinerary",
    "toEntityId": null,
    "objectText": "travel plans",
    "templateIds": [
      "travel.template.010"
    ],
    "finalWordIds": [
      "travel.final_word.itinerary"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "travel.relationship.018",
    "subject": "travel",
    "relationshipType": "located_in",
    "fromEntityId": "travel.destination.paris",
    "toEntityId": null,
    "objectText": "France",
    "templateIds": [
      "travel.template.011"
    ],
    "finalWordIds": [
      "travel.final_word.paris"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "travel.relationship.019",
    "subject": "travel",
    "relationshipType": "located_in",
    "fromEntityId": "travel.destination.tokyo",
    "toEntityId": null,
    "objectText": "Japan",
    "templateIds": [
      "travel.template.011"
    ],
    "finalWordIds": [
      "travel.final_word.tokyo"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "travel.relationship.020",
    "subject": "travel",
    "relationshipType": "located_in",
    "fromEntityId": "travel.destination.belgrade",
    "toEntityId": null,
    "objectText": "Serbia",
    "templateIds": [
      "travel.template.011"
    ],
    "finalWordIds": [
      "travel.final_word.belgrade"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  }
];
