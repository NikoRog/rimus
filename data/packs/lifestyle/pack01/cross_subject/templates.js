export const crossTemplates = [
  {
    "id": "lifestyle.template.001",
    "subject": "lifestyle",
    "templateType": "cross_relationship_sentence",
    "pattern": "{subject} connects {domainA} with {domainB}.",
    "slots": [
      "subject",
      "domainA",
      "domainB"
    ],
    "compatibleRelationshipTypes": [
      "connects_domains"
    ],
    "finalWordSlot": "domainB",
    "difficulty": 2,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "lifestyle.template.002",
    "subject": "lifestyle",
    "templateType": "cross_relationship_sentence",
    "pattern": "{subject} is linked to {object} across lifestyle culture.",
    "slots": [
      "subject",
      "object"
    ],
    "compatibleRelationshipTypes": [
      "linked_to"
    ],
    "finalWordSlot": "object",
    "difficulty": 2,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "lifestyle.template.003",
    "subject": "lifestyle",
    "templateType": "cross_relationship_sentence",
    "pattern": "{subject} is part of the travel experience around {object}.",
    "slots": [
      "subject",
      "object"
    ],
    "compatibleRelationshipTypes": [
      "travel_experience"
    ],
    "finalWordSlot": "object",
    "difficulty": 2,
    "tags": [
      "travel_food"
    ]
  },
  {
    "id": "lifestyle.template.004",
    "subject": "lifestyle",
    "templateType": "cross_fact_sentence",
    "pattern": "{subject} shows how {domainA} and {domainB} overlap.",
    "slots": [
      "subject",
      "domainA",
      "domainB"
    ],
    "compatibleRelationshipTypes": [
      "overlap"
    ],
    "finalWordSlot": "domainB",
    "difficulty": 2,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "lifestyle.template.005",
    "subject": "lifestyle",
    "templateType": "cross_fact_sentence",
    "pattern": "{subject} turns lifestyle into {object}.",
    "slots": [
      "subject",
      "object"
    ],
    "compatibleRelationshipTypes": [
      "turns_into"
    ],
    "finalWordSlot": "object",
    "difficulty": 2,
    "tags": [
      "culture"
    ]
  }
];
