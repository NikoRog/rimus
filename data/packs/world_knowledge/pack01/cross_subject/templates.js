export const crossTemplates = [
  {
    "id": "world_knowledge.template.001",
    "subject": "world_knowledge",
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
    "id": "world_knowledge.template.002",
    "subject": "world_knowledge",
    "templateType": "cross_relationship_sentence",
    "pattern": "{subject} is linked to {object} across world knowledge.",
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
    "id": "world_knowledge.template.003",
    "subject": "world_knowledge",
    "templateType": "cross_relationship_sentence",
    "pattern": "{subject} shaped life around {object}.",
    "slots": [
      "subject",
      "object"
    ],
    "compatibleRelationshipTypes": [
      "shaped_life_around"
    ],
    "finalWordSlot": "object",
    "difficulty": 2,
    "tags": [
      "history_geography"
    ]
  },
  {
    "id": "world_knowledge.template.004",
    "subject": "world_knowledge",
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
    "id": "world_knowledge.template.005",
    "subject": "world_knowledge",
    "templateType": "cross_fact_sentence",
    "pattern": "{subject} is a bridge between {domainA} and {domainB}.",
    "slots": [
      "subject",
      "domainA",
      "domainB"
    ],
    "compatibleRelationshipTypes": [
      "bridge"
    ],
    "finalWordSlot": "domainB",
    "difficulty": 2,
    "tags": [
      "cross_subject"
    ]
  }
];
