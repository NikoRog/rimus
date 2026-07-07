export const crossTemplates = [
  {
    "id": "entertainment.template.001",
    "subject": "entertainment",
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
    "id": "entertainment.template.002",
    "subject": "entertainment",
    "templateType": "cross_relationship_sentence",
    "pattern": "{subject} brought {object} into {domain}.",
    "slots": [
      "subject",
      "object",
      "domain"
    ],
    "compatibleRelationshipTypes": [
      "brought_into"
    ],
    "finalWordSlot": "domain",
    "difficulty": 2,
    "tags": [
      "cross_subject"
    ]
  },
  {
    "id": "entertainment.template.003",
    "subject": "entertainment",
    "templateType": "cross_relationship_sentence",
    "pattern": "{subject} is linked to {object} through entertainment culture.",
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
    "id": "entertainment.template.004",
    "subject": "entertainment",
    "templateType": "cross_fact_sentence",
    "pattern": "{subject} moved between {domainA} and {domainB}.",
    "slots": [
      "subject",
      "domainA",
      "domainB"
    ],
    "compatibleRelationshipTypes": [
      "crossed_between"
    ],
    "finalWordSlot": "domainB",
    "difficulty": 2,
    "tags": [
      "cross_media"
    ]
  },
  {
    "id": "entertainment.template.005",
    "subject": "entertainment",
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
  }
];
