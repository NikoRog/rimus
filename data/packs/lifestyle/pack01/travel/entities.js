export const entities = [
  {
    "id": "travel.document.passport",
    "canonicalName": "Passport",
    "displayName": "Passport",
    "type": "document",
    "subtype": "travel_document",
    "subject": "travel",
    "knowledgeNode": "travel_documents",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 10,
    "aliases": [],
    "tags": [
      "document",
      "border",
      "identity"
    ]
  },
  {
    "id": "travel.document.visa",
    "canonicalName": "Visa",
    "displayName": "Visa",
    "type": "document",
    "subtype": "travel_permission",
    "subject": "travel",
    "knowledgeNode": "travel_documents",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 9,
    "aliases": [],
    "tags": [
      "entry",
      "border",
      "permit"
    ]
  },
  {
    "id": "travel.place.airport",
    "canonicalName": "Airport",
    "displayName": "Airport",
    "type": "place",
    "subtype": "transport_hub",
    "subject": "travel",
    "knowledgeNode": "transport",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 10,
    "aliases": [],
    "tags": [
      "flight",
      "travel",
      "terminal"
    ]
  },
  {
    "id": "travel.transport.flight",
    "canonicalName": "Flight",
    "displayName": "Flight",
    "type": "transport",
    "subtype": "air_transport",
    "subject": "travel",
    "knowledgeNode": "transport",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 10,
    "aliases": [
      "Plane ride",
      "Air travel"
    ],
    "tags": [
      "airplane",
      "airport",
      "trip"
    ]
  },
  {
    "id": "travel.transport.train",
    "canonicalName": "Train",
    "displayName": "Train",
    "type": "transport",
    "subtype": "rail_transport",
    "subject": "travel",
    "knowledgeNode": "transport",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 9,
    "aliases": [],
    "tags": [
      "rail",
      "station",
      "journey"
    ]
  },
  {
    "id": "travel.transport.road-trip",
    "canonicalName": "Road Trip",
    "displayName": "Road Trip",
    "type": "transport",
    "subtype": "car_trip",
    "subject": "travel",
    "knowledgeNode": "transport",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 9,
    "aliases": [],
    "tags": [
      "drive",
      "car_trip",
      "route"
    ]
  },
  {
    "id": "travel.lodging.hotel",
    "canonicalName": "Hotel",
    "displayName": "Hotel",
    "type": "lodging",
    "subtype": "accommodation",
    "subject": "travel",
    "knowledgeNode": "accommodation",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 10,
    "aliases": [],
    "tags": [
      "room",
      "stay",
      "travel"
    ]
  },
  {
    "id": "travel.lodging.hostel",
    "canonicalName": "Hostel",
    "displayName": "Hostel",
    "type": "lodging",
    "subtype": "budget_accommodation",
    "subject": "travel",
    "knowledgeNode": "accommodation",
    "country": null,
    "region": "International foundation",
    "familiarity": "Expansion",
    "difficulty": 2,
    "importance": 8,
    "aliases": [],
    "tags": [
      "budget",
      "backpacking",
      "dorm"
    ]
  },
  {
    "id": "travel.bag.suitcase",
    "canonicalName": "Suitcase",
    "displayName": "Suitcase",
    "type": "bag",
    "subtype": "luggage",
    "subject": "travel",
    "knowledgeNode": "gear",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 9,
    "aliases": [
      "Luggage"
    ],
    "tags": [
      "bag",
      "packing",
      "trip"
    ]
  },
  {
    "id": "travel.gear.map",
    "canonicalName": "Map",
    "displayName": "Map",
    "type": "gear",
    "subtype": "travel_tool",
    "subject": "travel",
    "knowledgeNode": "gear",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 10,
    "aliases": [],
    "tags": [
      "navigation",
      "route",
      "place"
    ]
  },
  {
    "id": "travel.activity.backpacking",
    "canonicalName": "Backpacking",
    "displayName": "Backpacking",
    "type": "activity",
    "subtype": "travel_style",
    "subject": "travel",
    "knowledgeNode": "travel_styles",
    "country": null,
    "region": "International foundation",
    "familiarity": "Expansion",
    "difficulty": 2,
    "importance": 8,
    "aliases": [],
    "tags": [
      "backpacker",
      "budget",
      "adventure"
    ]
  },
  {
    "id": "travel.activity.camping",
    "canonicalName": "Camping",
    "displayName": "Camping",
    "type": "activity",
    "subtype": "outdoor_travel",
    "subject": "travel",
    "knowledgeNode": "travel_styles",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 8,
    "aliases": [],
    "tags": [
      "tent",
      "nature",
      "outdoors"
    ]
  },
  {
    "id": "travel.place.beach",
    "canonicalName": "Beach",
    "displayName": "Beach",
    "type": "place",
    "subtype": "natural_destination",
    "subject": "travel",
    "knowledgeNode": "destinations",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 10,
    "aliases": [],
    "tags": [
      "sea",
      "summer",
      "vacation"
    ]
  },
  {
    "id": "travel.place.museum",
    "canonicalName": "Museum",
    "displayName": "Museum",
    "type": "place",
    "subtype": "cultural_destination",
    "subject": "travel",
    "knowledgeNode": "destinations",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 8,
    "aliases": [],
    "tags": [
      "culture",
      "art",
      "history"
    ]
  },
  {
    "id": "travel.place.landmark",
    "canonicalName": "Landmark",
    "displayName": "Landmark",
    "type": "place",
    "subtype": "tourist_site",
    "subject": "travel",
    "knowledgeNode": "destinations",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 9,
    "aliases": [],
    "tags": [
      "sight",
      "monument",
      "tourism"
    ]
  },
  {
    "id": "travel.object.souvenir",
    "canonicalName": "Souvenir",
    "displayName": "Souvenir",
    "type": "object",
    "subtype": "memory_object",
    "subject": "travel",
    "knowledgeNode": "travel_objects",
    "country": null,
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 8,
    "aliases": [],
    "tags": [
      "memory",
      "gift",
      "trip"
    ]
  },
  {
    "id": "travel.plan.itinerary",
    "canonicalName": "Itinerary",
    "displayName": "Itinerary",
    "type": "plan",
    "subtype": "travel_plan",
    "subject": "travel",
    "knowledgeNode": "planning",
    "country": null,
    "region": "International foundation",
    "familiarity": "Expansion",
    "difficulty": 2,
    "importance": 8,
    "aliases": [],
    "tags": [
      "schedule",
      "plan",
      "route"
    ]
  },
  {
    "id": "travel.person.tour-guide",
    "canonicalName": "Tour Guide",
    "displayName": "Tour Guide",
    "type": "person",
    "subtype": "travel_role",
    "subject": "travel",
    "knowledgeNode": "roles",
    "country": null,
    "region": "International foundation",
    "familiarity": "Expansion",
    "difficulty": 2,
    "importance": 8,
    "aliases": [
      "Guide"
    ],
    "tags": [
      "guide",
      "tour",
      "local"
    ]
  },
  {
    "id": "travel.destination.paris",
    "canonicalName": "Paris",
    "displayName": "Paris",
    "type": "destination",
    "subtype": "city_destination",
    "subject": "travel",
    "knowledgeNode": "destinations",
    "country": "France",
    "region": "Europe",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 10,
    "aliases": [],
    "tags": [
      "city",
      "france",
      "tourism"
    ]
  },
  {
    "id": "travel.destination.tokyo",
    "canonicalName": "Tokyo",
    "displayName": "Tokyo",
    "type": "destination",
    "subtype": "city_destination",
    "subject": "travel",
    "knowledgeNode": "destinations",
    "country": "Japan",
    "region": "China / Japan / Korea",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 10,
    "aliases": [],
    "tags": [
      "city",
      "japan",
      "mega_city"
    ]
  },
  {
    "id": "travel.destination.new-york-city",
    "canonicalName": "New York City",
    "displayName": "New York City",
    "type": "destination",
    "subtype": "city_destination",
    "subject": "travel",
    "knowledgeNode": "destinations",
    "country": "United States",
    "region": "International foundation",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 10,
    "aliases": [
      "NYC",
      "New York"
    ],
    "tags": [
      "city",
      "usa",
      "tourism"
    ]
  },
  {
    "id": "travel.destination.barcelona",
    "canonicalName": "Barcelona",
    "displayName": "Barcelona",
    "type": "destination",
    "subtype": "city_destination",
    "subject": "travel",
    "knowledgeNode": "destinations",
    "country": "Spain",
    "region": "Europe",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 9,
    "aliases": [],
    "tags": [
      "city",
      "spain",
      "architecture"
    ]
  },
  {
    "id": "travel.destination.belgrade",
    "canonicalName": "Belgrade",
    "displayName": "Belgrade",
    "type": "destination",
    "subtype": "city_destination",
    "subject": "travel",
    "knowledgeNode": "destinations",
    "country": "Serbia",
    "region": "Balkans",
    "familiarity": "Foundation",
    "difficulty": 1,
    "importance": 8,
    "aliases": [
      "Beograd"
    ],
    "tags": [
      "city",
      "serbia",
      "balkans"
    ]
  },
  {
    "id": "travel.travel_style.cruise",
    "canonicalName": "Cruise",
    "displayName": "Cruise",
    "type": "travel_style",
    "subtype": "luxury_travel",
    "subject": "travel",
    "knowledgeNode": "travel_styles",
    "country": null,
    "region": "International foundation",
    "familiarity": "Expansion",
    "difficulty": 2,
    "importance": 8,
    "aliases": [],
    "tags": [
      "ship",
      "sea",
      "vacation"
    ]
  },
  {
    "id": "travel.travel_style.safari",
    "canonicalName": "Safari",
    "displayName": "Safari",
    "type": "travel_style",
    "subtype": "wildlife_travel",
    "subject": "travel",
    "knowledgeNode": "travel_styles",
    "country": "East Africa",
    "region": "Rest of world",
    "familiarity": "Expansion",
    "difficulty": 2,
    "importance": 8,
    "aliases": [],
    "tags": [
      "wildlife",
      "africa",
      "nature"
    ]
  }
];
