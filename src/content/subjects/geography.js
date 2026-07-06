import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "geography",
  name: "Geography",
  theme: "places, landforms, water, climate, maps, and people",
  nodes: [
    {
      id: "geography_mountains",
      topic: "Mountains",
      scene: "mountain pass",
      people: [
        "climber",
        "guide",
        "hiker",
        "traveler",
        "fisher",
        "farmer"
      ],
      places: [
        "mountain",
        "valley",
        "river",
        "bank",
        "city",
        "country"
      ],
      objects: [
        "map",
        "rope",
        "snow",
        "water",
        "bridge",
        "boat"
      ],
      actions: [
        "climb",
        "cross",
        "descend",
        "flow",
        "carry",
        "erupt"
      ],
      moods: [
        "steep",
        "calm",
        "dry",
        "remote",
        "wide",
        "coastal"
      ],
      adverbs: [
        "slowly",
        "steadily",
        "northward",
        "southward",
        "carefully"
      ],
      facts: [
        "Mountains belongs to Geography: places, landforms, water, climate, maps, and people.",
        "mountain pass gives Geography prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        mountain: "mountain is a place or setting connected to Geography, especially Mountains.",
        valley: "valley is a place or setting connected to Geography, especially Mountains.",
        river: "river is a place or setting connected to Geography, especially Mountains.",
        bank: "bank is a place or setting connected to Geography, especially Mountains.",
        city: "city is a place or setting connected to Geography, especially Mountains.",
        country: "country is a place or setting connected to Geography, especially Mountains.",
        climber: "climber is a person or role connected to Geography, especially Mountains.",
        guide: "guide is a person or role connected to Geography, especially Mountains.",
        hiker: "hiker is a person or role connected to Geography, especially Mountains.",
        traveler: "traveler is a person or role connected to Geography, especially Mountains.",
        fisher: "fisher is a person or role connected to Geography, especially Mountains.",
        farmer: "farmer is a person or role connected to Geography, especially Mountains.",
        map: "map is a term or object connected to Geography, especially Mountains.",
        rope: "rope is a term or object connected to Geography, especially Mountains.",
        snow: "snow is a term or object connected to Geography, especially Mountains.",
        water: "water is a term or object connected to Geography, especially Mountains.",
        bridge: "bridge is a term or object connected to Geography, especially Mountains.",
        boat: "boat is a term or object connected to Geography, especially Mountains.",
        climb: "climb is an action connected to Geography, especially Mountains.",
        cross: "cross is an action connected to Geography, especially Mountains.",
        descend: "descend is an action connected to Geography, especially Mountains.",
        flow: "flow is an action connected to Geography, especially Mountains.",
        carry: "carry is an action connected to Geography, especially Mountains.",
        erupt: "erupt is an action connected to Geography, especially Mountains.",
        steep: "steep is a description or mood connected to Geography, especially Mountains.",
        calm: "calm is a description or mood connected to Geography, especially Mountains.",
        dry: "dry is a description or mood connected to Geography, especially Mountains.",
        remote: "remote is a description or mood connected to Geography, especially Mountains.",
        wide: "wide is a description or mood connected to Geography, especially Mountains.",
        coastal: "coastal is a description or mood connected to Geography, especially Mountains.",
        slowly: "slowly is a way something happens connected to Geography, especially Mountains.",
        steadily: "steadily is a way something happens connected to Geography, especially Mountains.",
        northward: "northward is a way something happens connected to Geography, especially Mountains.",
        southward: "southward is a way something happens connected to Geography, especially Mountains.",
        carefully: "carefully is a way something happens connected to Geography, especially Mountains."
      },
      templates: [
        {
          id: "geography_places_0_0",
          role: "places",
          text: "The route crossed the {target}.",
          tags: [
            "places",
            "mountains"
          ]
        },
        {
          id: "geography_places_0_1",
          role: "places",
          text: "The map marked the {target}.",
          tags: [
            "places",
            "mountains"
          ]
        },
        {
          id: "geography_people_0_0",
          role: "people",
          text: "The border report was checked by the {target}.",
          tags: [
            "people",
            "mountains"
          ]
        },
        {
          id: "geography_people_0_1",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "mountains"
          ]
        },
        {
          id: "geography_objects_0_0",
          role: "objects",
          text: "The survey showed the {target}.",
          tags: [
            "objects",
            "mountains"
          ]
        },
        {
          id: "geography_objects_0_1",
          role: "objects",
          text: "The survey marked the {target}.",
          tags: [
            "objects",
            "mountains"
          ]
        },
        {
          id: "geography_actions_0_0",
          role: "actions",
          text: "The explorer had to {target}.",
          tags: [
            "actions",
            "mountains"
          ]
        },
        {
          id: "geography_actions_0_1",
          role: "actions",
          text: "The river started to {target}.",
          tags: [
            "actions",
            "mountains"
          ]
        },
        {
          id: "geography_moods_0_0",
          role: "moods",
          text: "The mountain air felt {target}.",
          tags: [
            "moods",
            "mountains"
          ]
        },
        {
          id: "geography_moods_0_1",
          role: "moods",
          text: "The climate turned {target}.",
          tags: [
            "moods",
            "mountains"
          ]
        },
        {
          id: "geography_adverbs_0_0",
          role: "adverbs",
          text: "The guide crossed the valley {target}.",
          tags: [
            "adverbs",
            "mountains"
          ]
        },
        {
          id: "geography_adverbs_0_1",
          role: "adverbs",
          text: "The map shifted the route {target}.",
          tags: [
            "adverbs",
            "mountains"
          ]
        }
      ]
    },
    {
      id: "geography_rivers",
      topic: "Rivers",
      scene: "river valley",
      people: [
        "hiker",
        "traveler",
        "fisher",
        "farmer",
        "cartographer",
        "pilot"
      ],
      places: [
        "river",
        "bank",
        "city",
        "country",
        "border",
        "island"
      ],
      objects: [
        "snow",
        "water",
        "bridge",
        "boat",
        "compass",
        "border"
      ],
      actions: [
        "descend",
        "flow",
        "carry",
        "erupt",
        "map",
        "measure"
      ],
      moods: [
        "dry",
        "remote",
        "wide",
        "coastal",
        "urban",
        "rural"
      ],
      adverbs: [
        "northward",
        "southward",
        "carefully",
        "quietly",
        "widely"
      ],
      facts: [
        "Rivers belongs to Geography: places, landforms, water, climate, maps, and people.",
        "river valley gives Geography prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        river: "river is a place or setting connected to Geography, especially Rivers.",
        bank: "bank is a place or setting connected to Geography, especially Rivers.",
        city: "city is a place or setting connected to Geography, especially Rivers.",
        country: "country is a place or setting connected to Geography, especially Rivers.",
        border: "border is a term or object connected to Geography, especially Rivers.",
        island: "island is a place or setting connected to Geography, especially Rivers.",
        hiker: "hiker is a person or role connected to Geography, especially Rivers.",
        traveler: "traveler is a person or role connected to Geography, especially Rivers.",
        fisher: "fisher is a person or role connected to Geography, especially Rivers.",
        farmer: "farmer is a person or role connected to Geography, especially Rivers.",
        cartographer: "cartographer is a person or role connected to Geography, especially Rivers.",
        pilot: "pilot is a person or role connected to Geography, especially Rivers.",
        snow: "snow is a term or object connected to Geography, especially Rivers.",
        water: "water is a term or object connected to Geography, especially Rivers.",
        bridge: "bridge is a term or object connected to Geography, especially Rivers.",
        boat: "boat is a term or object connected to Geography, especially Rivers.",
        compass: "compass is a term or object connected to Geography, especially Rivers.",
        descend: "descend is an action connected to Geography, especially Rivers.",
        flow: "flow is an action connected to Geography, especially Rivers.",
        carry: "carry is an action connected to Geography, especially Rivers.",
        erupt: "erupt is an action connected to Geography, especially Rivers.",
        map: "map is an action connected to Geography, especially Rivers.",
        measure: "measure is an action connected to Geography, especially Rivers.",
        dry: "dry is a description or mood connected to Geography, especially Rivers.",
        remote: "remote is a description or mood connected to Geography, especially Rivers.",
        wide: "wide is a description or mood connected to Geography, especially Rivers.",
        coastal: "coastal is a description or mood connected to Geography, especially Rivers.",
        urban: "urban is a description or mood connected to Geography, especially Rivers.",
        rural: "rural is a description or mood connected to Geography, especially Rivers.",
        northward: "northward is a way something happens connected to Geography, especially Rivers.",
        southward: "southward is a way something happens connected to Geography, especially Rivers.",
        carefully: "carefully is a way something happens connected to Geography, especially Rivers.",
        quietly: "quietly is a way something happens connected to Geography, especially Rivers.",
        widely: "widely is a way something happens connected to Geography, especially Rivers."
      },
      templates: [
        {
          id: "geography_places_1_0",
          role: "places",
          text: "The route crossed the {target}.",
          tags: [
            "places",
            "rivers"
          ]
        },
        {
          id: "geography_places_1_1",
          role: "places",
          text: "The map marked the {target}.",
          tags: [
            "places",
            "rivers"
          ]
        },
        {
          id: "geography_people_1_0",
          role: "people",
          text: "The border report was checked by the {target}.",
          tags: [
            "people",
            "rivers"
          ]
        },
        {
          id: "geography_people_1_1",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "rivers"
          ]
        },
        {
          id: "geography_objects_1_0",
          role: "objects",
          text: "The survey showed the {target}.",
          tags: [
            "objects",
            "rivers"
          ]
        },
        {
          id: "geography_objects_1_1",
          role: "objects",
          text: "The survey marked the {target}.",
          tags: [
            "objects",
            "rivers"
          ]
        },
        {
          id: "geography_actions_1_0",
          role: "actions",
          text: "The explorer had to {target}.",
          tags: [
            "actions",
            "rivers"
          ]
        },
        {
          id: "geography_actions_1_1",
          role: "actions",
          text: "The river started to {target}.",
          tags: [
            "actions",
            "rivers"
          ]
        },
        {
          id: "geography_moods_1_0",
          role: "moods",
          text: "The mountain air felt {target}.",
          tags: [
            "moods",
            "rivers"
          ]
        },
        {
          id: "geography_moods_1_1",
          role: "moods",
          text: "The climate turned {target}.",
          tags: [
            "moods",
            "rivers"
          ]
        },
        {
          id: "geography_adverbs_1_0",
          role: "adverbs",
          text: "The guide crossed the valley {target}.",
          tags: [
            "adverbs",
            "rivers"
          ]
        },
        {
          id: "geography_adverbs_1_1",
          role: "adverbs",
          text: "The map shifted the route {target}.",
          tags: [
            "adverbs",
            "rivers"
          ]
        }
      ]
    },
    {
      id: "geography_cities",
      topic: "Cities",
      scene: "city square",
      people: [
        "fisher",
        "farmer",
        "cartographer",
        "pilot",
        "surveyor",
        "resident"
      ],
      places: [
        "city",
        "country",
        "border",
        "island",
        "desert",
        "coast"
      ],
      objects: [
        "bridge",
        "boat",
        "compass",
        "border",
        "climate",
        "atlas"
      ],
      actions: [
        "carry",
        "erupt",
        "map",
        "measure",
        "settle",
        "trace"
      ],
      moods: [
        "wide",
        "coastal",
        "urban",
        "rural",
        "cold",
        "tropical"
      ],
      adverbs: [
        "carefully",
        "quietly",
        "widely",
        "deeply",
        "inland"
      ],
      facts: [
        "Cities belongs to Geography: places, landforms, water, climate, maps, and people.",
        "city square gives Geography prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        city: "city is a place or setting connected to Geography, especially Cities.",
        country: "country is a place or setting connected to Geography, especially Cities.",
        border: "border is a term or object connected to Geography, especially Cities.",
        island: "island is a place or setting connected to Geography, especially Cities.",
        desert: "desert is a place or setting connected to Geography, especially Cities.",
        coast: "coast is a place or setting connected to Geography, especially Cities.",
        fisher: "fisher is a person or role connected to Geography, especially Cities.",
        farmer: "farmer is a person or role connected to Geography, especially Cities.",
        cartographer: "cartographer is a person or role connected to Geography, especially Cities.",
        pilot: "pilot is a person or role connected to Geography, especially Cities.",
        surveyor: "surveyor is a person or role connected to Geography, especially Cities.",
        resident: "resident is a person or role connected to Geography, especially Cities.",
        bridge: "bridge is a term or object connected to Geography, especially Cities.",
        boat: "boat is a term or object connected to Geography, especially Cities.",
        compass: "compass is a term or object connected to Geography, especially Cities.",
        climate: "climate is a term or object connected to Geography, especially Cities.",
        atlas: "atlas is a term or object connected to Geography, especially Cities.",
        carry: "carry is an action connected to Geography, especially Cities.",
        erupt: "erupt is an action connected to Geography, especially Cities.",
        map: "map is an action connected to Geography, especially Cities.",
        measure: "measure is an action connected to Geography, especially Cities.",
        settle: "settle is an action connected to Geography, especially Cities.",
        trace: "trace is an action connected to Geography, especially Cities.",
        wide: "wide is a description or mood connected to Geography, especially Cities.",
        coastal: "coastal is a description or mood connected to Geography, especially Cities.",
        urban: "urban is a description or mood connected to Geography, especially Cities.",
        rural: "rural is a description or mood connected to Geography, especially Cities.",
        cold: "cold is a description or mood connected to Geography, especially Cities.",
        tropical: "tropical is a description or mood connected to Geography, especially Cities.",
        carefully: "carefully is a way something happens connected to Geography, especially Cities.",
        quietly: "quietly is a way something happens connected to Geography, especially Cities.",
        widely: "widely is a way something happens connected to Geography, especially Cities.",
        deeply: "deeply is a way something happens connected to Geography, especially Cities.",
        inland: "inland is a way something happens connected to Geography, especially Cities."
      },
      templates: [
        {
          id: "geography_places_2_0",
          role: "places",
          text: "The route crossed the {target}.",
          tags: [
            "places",
            "cities"
          ]
        },
        {
          id: "geography_places_2_1",
          role: "places",
          text: "The map marked the {target}.",
          tags: [
            "places",
            "cities"
          ]
        },
        {
          id: "geography_people_2_0",
          role: "people",
          text: "The border report was checked by the {target}.",
          tags: [
            "people",
            "cities"
          ]
        },
        {
          id: "geography_people_2_1",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "cities"
          ]
        },
        {
          id: "geography_objects_2_0",
          role: "objects",
          text: "The survey showed the {target}.",
          tags: [
            "objects",
            "cities"
          ]
        },
        {
          id: "geography_objects_2_1",
          role: "objects",
          text: "The survey marked the {target}.",
          tags: [
            "objects",
            "cities"
          ]
        },
        {
          id: "geography_actions_2_0",
          role: "actions",
          text: "The explorer had to {target}.",
          tags: [
            "actions",
            "cities"
          ]
        },
        {
          id: "geography_actions_2_1",
          role: "actions",
          text: "The river started to {target}.",
          tags: [
            "actions",
            "cities"
          ]
        },
        {
          id: "geography_moods_2_0",
          role: "moods",
          text: "The mountain air felt {target}.",
          tags: [
            "moods",
            "cities"
          ]
        },
        {
          id: "geography_moods_2_1",
          role: "moods",
          text: "The climate turned {target}.",
          tags: [
            "moods",
            "cities"
          ]
        },
        {
          id: "geography_adverbs_2_0",
          role: "adverbs",
          text: "The guide crossed the valley {target}.",
          tags: [
            "adverbs",
            "cities"
          ]
        },
        {
          id: "geography_adverbs_2_1",
          role: "adverbs",
          text: "The map shifted the route {target}.",
          tags: [
            "adverbs",
            "cities"
          ]
        }
      ]
    },
    {
      id: "geography_climate",
      topic: "Climate",
      scene: "weather station",
      people: [
        "cartographer",
        "pilot",
        "surveyor",
        "resident",
        "explorer",
        "geographer"
      ],
      places: [
        "border",
        "island",
        "desert",
        "coast",
        "village",
        "cliff"
      ],
      objects: [
        "compass",
        "border",
        "climate",
        "atlas",
        "globe",
        "landmark"
      ],
      actions: [
        "map",
        "measure",
        "settle",
        "trace",
        "navigate",
        "survey"
      ],
      moods: [
        "urban",
        "rural",
        "cold",
        "tropical",
        "windy",
        "vast"
      ],
      adverbs: [
        "widely",
        "deeply",
        "inland",
        "uphill",
        "slowly"
      ],
      facts: [
        "Climate belongs to Geography: places, landforms, water, climate, maps, and people.",
        "weather station gives Geography prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        border: "border is a term or object connected to Geography, especially Climate.",
        island: "island is a place or setting connected to Geography, especially Climate.",
        desert: "desert is a place or setting connected to Geography, especially Climate.",
        coast: "coast is a place or setting connected to Geography, especially Climate.",
        village: "village is a place or setting connected to Geography, especially Climate.",
        cliff: "cliff is a place or setting connected to Geography, especially Climate.",
        cartographer: "cartographer is a person or role connected to Geography, especially Climate.",
        pilot: "pilot is a person or role connected to Geography, especially Climate.",
        surveyor: "surveyor is a person or role connected to Geography, especially Climate.",
        resident: "resident is a person or role connected to Geography, especially Climate.",
        explorer: "explorer is a person or role connected to Geography, especially Climate.",
        geographer: "geographer is a person or role connected to Geography, especially Climate.",
        compass: "compass is a term or object connected to Geography, especially Climate.",
        climate: "climate is a term or object connected to Geography, especially Climate.",
        atlas: "atlas is a term or object connected to Geography, especially Climate.",
        globe: "globe is a term or object connected to Geography, especially Climate.",
        landmark: "landmark is a term or object connected to Geography, especially Climate.",
        map: "map is an action connected to Geography, especially Climate.",
        measure: "measure is an action connected to Geography, especially Climate.",
        settle: "settle is an action connected to Geography, especially Climate.",
        trace: "trace is an action connected to Geography, especially Climate.",
        navigate: "navigate is an action connected to Geography, especially Climate.",
        survey: "survey is an action connected to Geography, especially Climate.",
        urban: "urban is a description or mood connected to Geography, especially Climate.",
        rural: "rural is a description or mood connected to Geography, especially Climate.",
        cold: "cold is a description or mood connected to Geography, especially Climate.",
        tropical: "tropical is a description or mood connected to Geography, especially Climate.",
        windy: "windy is a description or mood connected to Geography, especially Climate.",
        vast: "vast is a description or mood connected to Geography, especially Climate.",
        widely: "widely is a way something happens connected to Geography, especially Climate.",
        deeply: "deeply is a way something happens connected to Geography, especially Climate.",
        inland: "inland is a way something happens connected to Geography, especially Climate.",
        uphill: "uphill is a way something happens connected to Geography, especially Climate.",
        slowly: "slowly is a way something happens connected to Geography, especially Climate."
      },
      templates: [
        {
          id: "geography_places_3_0",
          role: "places",
          text: "The route crossed the {target}.",
          tags: [
            "places",
            "climate"
          ]
        },
        {
          id: "geography_places_3_1",
          role: "places",
          text: "The map marked the {target}.",
          tags: [
            "places",
            "climate"
          ]
        },
        {
          id: "geography_people_3_0",
          role: "people",
          text: "The border report was checked by the {target}.",
          tags: [
            "people",
            "climate"
          ]
        },
        {
          id: "geography_people_3_1",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "climate"
          ]
        },
        {
          id: "geography_objects_3_0",
          role: "objects",
          text: "The survey showed the {target}.",
          tags: [
            "objects",
            "climate"
          ]
        },
        {
          id: "geography_objects_3_1",
          role: "objects",
          text: "The survey marked the {target}.",
          tags: [
            "objects",
            "climate"
          ]
        },
        {
          id: "geography_actions_3_0",
          role: "actions",
          text: "The explorer had to {target}.",
          tags: [
            "actions",
            "climate"
          ]
        },
        {
          id: "geography_actions_3_1",
          role: "actions",
          text: "The river started to {target}.",
          tags: [
            "actions",
            "climate"
          ]
        },
        {
          id: "geography_moods_3_0",
          role: "moods",
          text: "The mountain air felt {target}.",
          tags: [
            "moods",
            "climate"
          ]
        },
        {
          id: "geography_moods_3_1",
          role: "moods",
          text: "The climate turned {target}.",
          tags: [
            "moods",
            "climate"
          ]
        },
        {
          id: "geography_adverbs_3_0",
          role: "adverbs",
          text: "The guide crossed the valley {target}.",
          tags: [
            "adverbs",
            "climate"
          ]
        },
        {
          id: "geography_adverbs_3_1",
          role: "adverbs",
          text: "The map shifted the route {target}.",
          tags: [
            "adverbs",
            "climate"
          ]
        }
      ]
    },
    {
      id: "geography_maps",
      topic: "Maps",
      scene: "map table",
      people: [
        "surveyor",
        "resident",
        "explorer",
        "geographer",
        "climber",
        "guide"
      ],
      places: [
        "desert",
        "coast",
        "village",
        "cliff",
        "mountain",
        "valley"
      ],
      objects: [
        "climate",
        "atlas",
        "globe",
        "landmark",
        "map",
        "rope"
      ],
      actions: [
        "settle",
        "trace",
        "navigate",
        "survey",
        "climb",
        "cross"
      ],
      moods: [
        "cold",
        "tropical",
        "windy",
        "vast",
        "steep",
        "calm"
      ],
      adverbs: [
        "inland",
        "uphill",
        "slowly",
        "steadily",
        "northward"
      ],
      facts: [
        "Maps belongs to Geography: places, landforms, water, climate, maps, and people.",
        "map table gives Geography prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        desert: "desert is a place or setting connected to Geography, especially Maps.",
        coast: "coast is a place or setting connected to Geography, especially Maps.",
        village: "village is a place or setting connected to Geography, especially Maps.",
        cliff: "cliff is a place or setting connected to Geography, especially Maps.",
        mountain: "mountain is a place or setting connected to Geography, especially Maps.",
        valley: "valley is a place or setting connected to Geography, especially Maps.",
        surveyor: "surveyor is a person or role connected to Geography, especially Maps.",
        resident: "resident is a person or role connected to Geography, especially Maps.",
        explorer: "explorer is a person or role connected to Geography, especially Maps.",
        geographer: "geographer is a person or role connected to Geography, especially Maps.",
        climber: "climber is a person or role connected to Geography, especially Maps.",
        guide: "guide is a person or role connected to Geography, especially Maps.",
        climate: "climate is a term or object connected to Geography, especially Maps.",
        atlas: "atlas is a term or object connected to Geography, especially Maps.",
        globe: "globe is a term or object connected to Geography, especially Maps.",
        landmark: "landmark is a term or object connected to Geography, especially Maps.",
        map: "map is a term or object connected to Geography, especially Maps.",
        rope: "rope is a term or object connected to Geography, especially Maps.",
        settle: "settle is an action connected to Geography, especially Maps.",
        trace: "trace is an action connected to Geography, especially Maps.",
        navigate: "navigate is an action connected to Geography, especially Maps.",
        survey: "survey is an action connected to Geography, especially Maps.",
        climb: "climb is an action connected to Geography, especially Maps.",
        cross: "cross is an action connected to Geography, especially Maps.",
        cold: "cold is a description or mood connected to Geography, especially Maps.",
        tropical: "tropical is a description or mood connected to Geography, especially Maps.",
        windy: "windy is a description or mood connected to Geography, especially Maps.",
        vast: "vast is a description or mood connected to Geography, especially Maps.",
        steep: "steep is a description or mood connected to Geography, especially Maps.",
        calm: "calm is a description or mood connected to Geography, especially Maps.",
        inland: "inland is a way something happens connected to Geography, especially Maps.",
        uphill: "uphill is a way something happens connected to Geography, especially Maps.",
        slowly: "slowly is a way something happens connected to Geography, especially Maps.",
        steadily: "steadily is a way something happens connected to Geography, especially Maps.",
        northward: "northward is a way something happens connected to Geography, especially Maps."
      },
      templates: [
        {
          id: "geography_places_4_0",
          role: "places",
          text: "The route crossed the {target}.",
          tags: [
            "places",
            "maps"
          ]
        },
        {
          id: "geography_places_4_1",
          role: "places",
          text: "The map marked the {target}.",
          tags: [
            "places",
            "maps"
          ]
        },
        {
          id: "geography_people_4_0",
          role: "people",
          text: "The border report was checked by the {target}.",
          tags: [
            "people",
            "maps"
          ]
        },
        {
          id: "geography_people_4_1",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "maps"
          ]
        },
        {
          id: "geography_objects_4_0",
          role: "objects",
          text: "The survey showed the {target}.",
          tags: [
            "objects",
            "maps"
          ]
        },
        {
          id: "geography_objects_4_1",
          role: "objects",
          text: "The survey marked the {target}.",
          tags: [
            "objects",
            "maps"
          ]
        },
        {
          id: "geography_actions_4_0",
          role: "actions",
          text: "The explorer had to {target}.",
          tags: [
            "actions",
            "maps"
          ]
        },
        {
          id: "geography_actions_4_1",
          role: "actions",
          text: "The river started to {target}.",
          tags: [
            "actions",
            "maps"
          ]
        },
        {
          id: "geography_moods_4_0",
          role: "moods",
          text: "The mountain air felt {target}.",
          tags: [
            "moods",
            "maps"
          ]
        },
        {
          id: "geography_moods_4_1",
          role: "moods",
          text: "The climate turned {target}.",
          tags: [
            "moods",
            "maps"
          ]
        },
        {
          id: "geography_adverbs_4_0",
          role: "adverbs",
          text: "The guide crossed the valley {target}.",
          tags: [
            "adverbs",
            "maps"
          ]
        },
        {
          id: "geography_adverbs_4_1",
          role: "adverbs",
          text: "The map shifted the route {target}.",
          tags: [
            "adverbs",
            "maps"
          ]
        }
      ]
    },
    {
      id: "geography_countries",
      topic: "Countries",
      scene: "border crossing",
      people: [
        "explorer",
        "geographer",
        "climber",
        "guide",
        "hiker",
        "traveler"
      ],
      places: [
        "village",
        "cliff",
        "mountain",
        "valley",
        "river",
        "bank"
      ],
      objects: [
        "globe",
        "landmark",
        "map",
        "rope",
        "snow",
        "water"
      ],
      actions: [
        "navigate",
        "survey",
        "climb",
        "cross",
        "descend",
        "flow"
      ],
      moods: [
        "windy",
        "vast",
        "steep",
        "calm",
        "dry",
        "remote"
      ],
      adverbs: [
        "slowly",
        "steadily",
        "northward",
        "southward",
        "carefully"
      ],
      facts: [
        "Countries belongs to Geography: places, landforms, water, climate, maps, and people.",
        "border crossing gives Geography prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        village: "village is a place or setting connected to Geography, especially Countries.",
        cliff: "cliff is a place or setting connected to Geography, especially Countries.",
        mountain: "mountain is a place or setting connected to Geography, especially Countries.",
        valley: "valley is a place or setting connected to Geography, especially Countries.",
        river: "river is a place or setting connected to Geography, especially Countries.",
        bank: "bank is a place or setting connected to Geography, especially Countries.",
        explorer: "explorer is a person or role connected to Geography, especially Countries.",
        geographer: "geographer is a person or role connected to Geography, especially Countries.",
        climber: "climber is a person or role connected to Geography, especially Countries.",
        guide: "guide is a person or role connected to Geography, especially Countries.",
        hiker: "hiker is a person or role connected to Geography, especially Countries.",
        traveler: "traveler is a person or role connected to Geography, especially Countries.",
        globe: "globe is a term or object connected to Geography, especially Countries.",
        landmark: "landmark is a term or object connected to Geography, especially Countries.",
        map: "map is a term or object connected to Geography, especially Countries.",
        rope: "rope is a term or object connected to Geography, especially Countries.",
        snow: "snow is a term or object connected to Geography, especially Countries.",
        water: "water is a term or object connected to Geography, especially Countries.",
        navigate: "navigate is an action connected to Geography, especially Countries.",
        survey: "survey is an action connected to Geography, especially Countries.",
        climb: "climb is an action connected to Geography, especially Countries.",
        cross: "cross is an action connected to Geography, especially Countries.",
        descend: "descend is an action connected to Geography, especially Countries.",
        flow: "flow is an action connected to Geography, especially Countries.",
        windy: "windy is a description or mood connected to Geography, especially Countries.",
        vast: "vast is a description or mood connected to Geography, especially Countries.",
        steep: "steep is a description or mood connected to Geography, especially Countries.",
        calm: "calm is a description or mood connected to Geography, especially Countries.",
        dry: "dry is a description or mood connected to Geography, especially Countries.",
        remote: "remote is a description or mood connected to Geography, especially Countries.",
        slowly: "slowly is a way something happens connected to Geography, especially Countries.",
        steadily: "steadily is a way something happens connected to Geography, especially Countries.",
        northward: "northward is a way something happens connected to Geography, especially Countries.",
        southward: "southward is a way something happens connected to Geography, especially Countries.",
        carefully: "carefully is a way something happens connected to Geography, especially Countries."
      },
      templates: [
        {
          id: "geography_places_5_0",
          role: "places",
          text: "The route crossed the {target}.",
          tags: [
            "places",
            "countries"
          ]
        },
        {
          id: "geography_places_5_1",
          role: "places",
          text: "The map marked the {target}.",
          tags: [
            "places",
            "countries"
          ]
        },
        {
          id: "geography_people_5_0",
          role: "people",
          text: "The border report was checked by the {target}.",
          tags: [
            "people",
            "countries"
          ]
        },
        {
          id: "geography_people_5_1",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "countries"
          ]
        },
        {
          id: "geography_objects_5_0",
          role: "objects",
          text: "The survey showed the {target}.",
          tags: [
            "objects",
            "countries"
          ]
        },
        {
          id: "geography_objects_5_1",
          role: "objects",
          text: "The survey marked the {target}.",
          tags: [
            "objects",
            "countries"
          ]
        },
        {
          id: "geography_actions_5_0",
          role: "actions",
          text: "The explorer had to {target}.",
          tags: [
            "actions",
            "countries"
          ]
        },
        {
          id: "geography_actions_5_1",
          role: "actions",
          text: "The river started to {target}.",
          tags: [
            "actions",
            "countries"
          ]
        },
        {
          id: "geography_moods_5_0",
          role: "moods",
          text: "The mountain air felt {target}.",
          tags: [
            "moods",
            "countries"
          ]
        },
        {
          id: "geography_moods_5_1",
          role: "moods",
          text: "The climate turned {target}.",
          tags: [
            "moods",
            "countries"
          ]
        },
        {
          id: "geography_adverbs_5_0",
          role: "adverbs",
          text: "The guide crossed the valley {target}.",
          tags: [
            "adverbs",
            "countries"
          ]
        },
        {
          id: "geography_adverbs_5_1",
          role: "adverbs",
          text: "The map shifted the route {target}.",
          tags: [
            "adverbs",
            "countries"
          ]
        }
      ]
    }
  ]
});
