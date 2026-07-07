export const relationships = [
  {
    "id": "fashion.relationship.001",
    "subject": "fashion",
    "relationshipType": "made_from",
    "fromEntityId": "fashion.garment.jeans",
    "toEntityId": "fashion.material.denim",
    "objectText": null,
    "templateIds": [
      "fashion.template.001"
    ],
    "finalWordIds": [
      "fashion.final_word.denim"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "fashion.relationship.002",
    "subject": "fashion",
    "relationshipType": "made_from",
    "fromEntityId": "fashion.material.leather",
    "toEntityId": null,
    "objectText": "animal hide",
    "templateIds": [
      "fashion.template.001"
    ],
    "finalWordIds": [
      "fashion.final_word.leather"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "fashion.relationship.003",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.footwear.sneakers",
    "toEntityId": "fashion.style.streetwear",
    "objectText": null,
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.streetwear"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "fashion.relationship.004",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.garment.hoodie",
    "toEntityId": "fashion.style.streetwear",
    "objectText": null,
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.hoodie"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "fashion.relationship.005",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.garment.suit",
    "toEntityId": null,
    "objectText": "formal style",
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.suit"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "fashion.relationship.006",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.garment.little-black-dress",
    "toEntityId": "fashion.designer.coco-chanel",
    "objectText": null,
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.chanel"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "fashion.relationship.007",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.garment.kimono",
    "toEntityId": null,
    "objectText": "Japanese traditional clothing",
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.kimono"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "fashion.relationship.008",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.garment.sari",
    "toEntityId": null,
    "objectText": "South Asian traditional clothing",
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.sari"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "fashion.relationship.009",
    "subject": "fashion",
    "relationshipType": "belongs_to",
    "fromEntityId": "fashion.garment.baseball-cap",
    "toEntityId": null,
    "objectText": "casual accessories",
    "templateIds": [
      "fashion.template.005"
    ],
    "finalWordIds": [
      "fashion.final_word.cap"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "fashion.relationship.010",
    "subject": "fashion",
    "relationshipType": "belongs_to",
    "fromEntityId": "fashion.accessory.handbag",
    "toEntityId": null,
    "objectText": "fashion accessories",
    "templateIds": [
      "fashion.template.005"
    ],
    "finalWordIds": [
      "fashion.final_word.handbag"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "fashion.relationship.011",
    "subject": "fashion",
    "relationshipType": "belongs_to",
    "fromEntityId": "fashion.accessory.sunglasses",
    "toEntityId": null,
    "objectText": "eyewear",
    "templateIds": [
      "fashion.template.005"
    ],
    "finalWordIds": [
      "fashion.final_word.shades"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "fashion.relationship.012",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.style.haute-couture",
    "toEntityId": null,
    "objectText": "luxury runway fashion",
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.couture"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "fashion.relationship.013",
    "subject": "fashion",
    "relationshipType": "connected_to",
    "fromEntityId": "fashion.event.fashion-week",
    "toEntityId": null,
    "objectText": "runway shows",
    "templateIds": [
      "fashion.template.014"
    ],
    "finalWordIds": [
      "fashion.final_word.runway"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "fashion.relationship.014",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.media.vogue",
    "toEntityId": null,
    "objectText": "fashion media",
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.vogue"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "fashion.relationship.015",
    "subject": "fashion",
    "relationshipType": "shaped_by",
    "fromEntityId": "fashion.brand.chanel",
    "toEntityId": "fashion.designer.coco-chanel",
    "objectText": null,
    "templateIds": [
      "fashion.template.004"
    ],
    "finalWordIds": [
      "fashion.final_word.chanel"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "fashion.relationship.016",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.designer.yves-saint-laurent",
    "toEntityId": null,
    "objectText": "Paris fashion",
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.laurent"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "fashion.relationship.017",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.designer.virgil-abloh",
    "toEntityId": "fashion.style.streetwear",
    "objectText": null,
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.abloh"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  },
  {
    "id": "fashion.relationship.018",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.brand.nike",
    "toEntityId": "fashion.footwear.sneakers",
    "objectText": null,
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.nike"
    ],
    "difficulty": 1,
    "importance": 10,
    "tags": []
  },
  {
    "id": "fashion.relationship.019",
    "subject": "fashion",
    "relationshipType": "associated_with",
    "fromEntityId": "fashion.brand.levis",
    "toEntityId": "fashion.garment.jeans",
    "objectText": null,
    "templateIds": [
      "fashion.template.003"
    ],
    "finalWordIds": [
      "fashion.final_word.levis"
    ],
    "difficulty": 1,
    "importance": 9,
    "tags": []
  },
  {
    "id": "fashion.relationship.020",
    "subject": "fashion",
    "relationshipType": "appears_on",
    "fromEntityId": "fashion.role.model",
    "toEntityId": null,
    "objectText": "runway",
    "templateIds": [
      "fashion.template.009"
    ],
    "finalWordIds": [
      "fashion.final_word.model"
    ],
    "difficulty": 1,
    "importance": 8,
    "tags": []
  }
];
