import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "travel",
  name: "Travel",
  theme: "journeys, transport, places, visitors, and local experience",
  nodes: [
    {
      id: "travel_airport",
      topic: "Airport",
      scene: "airport gate",
      people: [
        "pilot",
        "traveler",
        "guard",
        "guest",
        "tourist",
        "receptionist"
      ],
      places: [
        "airport",
        "gate",
        "terminal",
        "hotel",
        "lobby",
        "room"
      ],
      objects: [
        "passport",
        "ticket",
        "luggage",
        "key",
        "bed",
        "towel"
      ],
      actions: [
        "fly",
        "wait",
        "board",
        "rest",
        "check",
        "sleep"
      ],
      moods: [
        "excited",
        "tired",
        "lost",
        "relaxed",
        "sunny",
        "busy"
      ],
      adverbs: [
        "quickly",
        "slowly",
        "carefully",
        "peacefully",
        "brightly"
      ],
      facts: [
        "Airport belongs to Travel: journeys, transport, places, visitors, and local experience.",
        "airport gate gives Travel prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        airport: "airport is a place or setting connected to Travel, especially Airport.",
        gate: "gate is a place or setting connected to Travel, especially Airport.",
        terminal: "terminal is a place or setting connected to Travel, especially Airport.",
        hotel: "hotel is a place or setting connected to Travel, especially Airport.",
        lobby: "lobby is a place or setting connected to Travel, especially Airport.",
        room: "room is a place or setting connected to Travel, especially Airport.",
        pilot: "pilot is a person or role connected to Travel, especially Airport.",
        traveler: "traveler is a person or role connected to Travel, especially Airport.",
        guard: "guard is a person or role connected to Travel, especially Airport.",
        guest: "guest is a person or role connected to Travel, especially Airport.",
        tourist: "tourist is a person or role connected to Travel, especially Airport.",
        receptionist: "receptionist is a person or role connected to Travel, especially Airport.",
        passport: "passport is a term or object connected to Travel, especially Airport.",
        ticket: "ticket is a term or object connected to Travel, especially Airport.",
        luggage: "luggage is a term or object connected to Travel, especially Airport.",
        key: "key is a term or object connected to Travel, especially Airport.",
        bed: "bed is a term or object connected to Travel, especially Airport.",
        towel: "towel is a term or object connected to Travel, especially Airport.",
        fly: "fly is an action connected to Travel, especially Airport.",
        wait: "wait is an action connected to Travel, especially Airport.",
        board: "board is an action connected to Travel, especially Airport.",
        rest: "rest is an action connected to Travel, especially Airport.",
        check: "check is an action connected to Travel, especially Airport.",
        sleep: "sleep is an action connected to Travel, especially Airport.",
        excited: "excited is a description or mood connected to Travel, especially Airport.",
        tired: "tired is a description or mood connected to Travel, especially Airport.",
        lost: "lost is a description or mood connected to Travel, especially Airport.",
        relaxed: "relaxed is a description or mood connected to Travel, especially Airport.",
        sunny: "sunny is a description or mood connected to Travel, especially Airport.",
        busy: "busy is a description or mood connected to Travel, especially Airport.",
        quickly: "quickly is a way something happens connected to Travel, especially Airport.",
        slowly: "slowly is a way something happens connected to Travel, especially Airport.",
        carefully: "carefully is a way something happens connected to Travel, especially Airport.",
        peacefully: "peacefully is a way something happens connected to Travel, especially Airport.",
        brightly: "brightly is a way something happens connected to Travel, especially Airport."
      },
      templates: [
        {
          id: "travel_places_0_0",
          role: "places",
          text: "The traveler reached the {target}.",
          tags: [
            "places",
            "airport"
          ]
        },
        {
          id: "travel_places_0_1",
          role: "places",
          text: "The guide pointed toward the {target}.",
          tags: [
            "places",
            "airport"
          ]
        },
        {
          id: "travel_people_0_0",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "airport"
          ]
        },
        {
          id: "travel_people_0_1",
          role: "people",
          text: "The passport was checked by the {target}.",
          tags: [
            "people",
            "airport"
          ]
        },
        {
          id: "travel_objects_0_0",
          role: "objects",
          text: "The traveler packed the {target}.",
          tags: [
            "objects",
            "airport"
          ]
        },
        {
          id: "travel_objects_0_1",
          role: "objects",
          text: "The guide unfolded the {target}.",
          tags: [
            "objects",
            "airport"
          ]
        },
        {
          id: "travel_actions_0_0",
          role: "actions",
          text: "The traveler had to {target}.",
          tags: [
            "actions",
            "airport"
          ]
        },
        {
          id: "travel_actions_0_1",
          role: "actions",
          text: "The group planned to {target}.",
          tags: [
            "actions",
            "airport"
          ]
        },
        {
          id: "travel_moods_0_0",
          role: "moods",
          text: "The beach morning felt {target}.",
          tags: [
            "moods",
            "airport"
          ]
        },
        {
          id: "travel_moods_0_1",
          role: "moods",
          text: "The city walk became {target}.",
          tags: [
            "moods",
            "airport"
          ]
        },
        {
          id: "travel_adverbs_0_0",
          role: "adverbs",
          text: "The traveler crossed the terminal {target}.",
          tags: [
            "adverbs",
            "airport"
          ]
        },
        {
          id: "travel_adverbs_0_1",
          role: "adverbs",
          text: "The guide pointed to the route {target}.",
          tags: [
            "adverbs",
            "airport"
          ]
        }
      ]
    },
    {
      id: "travel_hotels",
      topic: "Hotels",
      scene: "hotel lobby",
      people: [
        "guard",
        "guest",
        "tourist",
        "receptionist",
        "guide",
        "driver"
      ],
      places: [
        "terminal",
        "hotel",
        "lobby",
        "room",
        "beach",
        "city"
      ],
      objects: [
        "luggage",
        "key",
        "bed",
        "towel",
        "map",
        "camera"
      ],
      actions: [
        "board",
        "rest",
        "check",
        "sleep",
        "pack",
        "arrive"
      ],
      moods: [
        "lost",
        "relaxed",
        "sunny",
        "busy",
        "remote",
        "safe"
      ],
      adverbs: [
        "carefully",
        "peacefully",
        "brightly",
        "safely",
        "quietly"
      ],
      facts: [
        "Hotels belongs to Travel: journeys, transport, places, visitors, and local experience.",
        "hotel lobby gives Travel prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        terminal: "terminal is a place or setting connected to Travel, especially Hotels.",
        hotel: "hotel is a place or setting connected to Travel, especially Hotels.",
        lobby: "lobby is a place or setting connected to Travel, especially Hotels.",
        room: "room is a place or setting connected to Travel, especially Hotels.",
        beach: "beach is a place or setting connected to Travel, especially Hotels.",
        city: "city is a place or setting connected to Travel, especially Hotels.",
        guard: "guard is a person or role connected to Travel, especially Hotels.",
        guest: "guest is a person or role connected to Travel, especially Hotels.",
        tourist: "tourist is a person or role connected to Travel, especially Hotels.",
        receptionist: "receptionist is a person or role connected to Travel, especially Hotels.",
        guide: "guide is a person or role connected to Travel, especially Hotels.",
        driver: "driver is a person or role connected to Travel, especially Hotels.",
        luggage: "luggage is a term or object connected to Travel, especially Hotels.",
        key: "key is a term or object connected to Travel, especially Hotels.",
        bed: "bed is a term or object connected to Travel, especially Hotels.",
        towel: "towel is a term or object connected to Travel, especially Hotels.",
        map: "map is a term or object connected to Travel, especially Hotels.",
        camera: "camera is a term or object connected to Travel, especially Hotels.",
        board: "board is an action connected to Travel, especially Hotels.",
        rest: "rest is an action connected to Travel, especially Hotels.",
        check: "check is an action connected to Travel, especially Hotels.",
        sleep: "sleep is an action connected to Travel, especially Hotels.",
        pack: "pack is an action connected to Travel, especially Hotels.",
        arrive: "arrive is an action connected to Travel, especially Hotels.",
        lost: "lost is a description or mood connected to Travel, especially Hotels.",
        relaxed: "relaxed is a description or mood connected to Travel, especially Hotels.",
        sunny: "sunny is a description or mood connected to Travel, especially Hotels.",
        busy: "busy is a description or mood connected to Travel, especially Hotels.",
        remote: "remote is a description or mood connected to Travel, especially Hotels.",
        safe: "safe is a description or mood connected to Travel, especially Hotels.",
        carefully: "carefully is a way something happens connected to Travel, especially Hotels.",
        peacefully: "peacefully is a way something happens connected to Travel, especially Hotels.",
        brightly: "brightly is a way something happens connected to Travel, especially Hotels.",
        safely: "safely is a way something happens connected to Travel, especially Hotels.",
        quietly: "quietly is a way something happens connected to Travel, especially Hotels."
      },
      templates: [
        {
          id: "travel_places_1_0",
          role: "places",
          text: "The traveler reached the {target}.",
          tags: [
            "places",
            "hotels"
          ]
        },
        {
          id: "travel_places_1_1",
          role: "places",
          text: "The guide pointed toward the {target}.",
          tags: [
            "places",
            "hotels"
          ]
        },
        {
          id: "travel_people_1_0",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "hotels"
          ]
        },
        {
          id: "travel_people_1_1",
          role: "people",
          text: "The passport was checked by the {target}.",
          tags: [
            "people",
            "hotels"
          ]
        },
        {
          id: "travel_objects_1_0",
          role: "objects",
          text: "The traveler packed the {target}.",
          tags: [
            "objects",
            "hotels"
          ]
        },
        {
          id: "travel_objects_1_1",
          role: "objects",
          text: "The guide unfolded the {target}.",
          tags: [
            "objects",
            "hotels"
          ]
        },
        {
          id: "travel_actions_1_0",
          role: "actions",
          text: "The traveler had to {target}.",
          tags: [
            "actions",
            "hotels"
          ]
        },
        {
          id: "travel_actions_1_1",
          role: "actions",
          text: "The group planned to {target}.",
          tags: [
            "actions",
            "hotels"
          ]
        },
        {
          id: "travel_moods_1_0",
          role: "moods",
          text: "The beach morning felt {target}.",
          tags: [
            "moods",
            "hotels"
          ]
        },
        {
          id: "travel_moods_1_1",
          role: "moods",
          text: "The city walk became {target}.",
          tags: [
            "moods",
            "hotels"
          ]
        },
        {
          id: "travel_adverbs_1_0",
          role: "adverbs",
          text: "The traveler crossed the terminal {target}.",
          tags: [
            "adverbs",
            "hotels"
          ]
        },
        {
          id: "travel_adverbs_1_1",
          role: "adverbs",
          text: "The guide pointed to the route {target}.",
          tags: [
            "adverbs",
            "hotels"
          ]
        }
      ]
    },
    {
      id: "travel_roadtrips",
      topic: "Road Trips",
      scene: "open road",
      people: [
        "tourist",
        "receptionist",
        "guide",
        "driver",
        "backpacker",
        "local"
      ],
      places: [
        "lobby",
        "room",
        "beach",
        "city",
        "road",
        "station"
      ],
      objects: [
        "bed",
        "towel",
        "map",
        "camera",
        "suitcase",
        "train"
      ],
      actions: [
        "check",
        "sleep",
        "pack",
        "arrive",
        "explore",
        "book"
      ],
      moods: [
        "sunny",
        "busy",
        "remote",
        "safe",
        "curious",
        "peaceful"
      ],
      adverbs: [
        "brightly",
        "safely",
        "quietly",
        "eagerly",
        "locally"
      ],
      facts: [
        "Road Trips belongs to Travel: journeys, transport, places, visitors, and local experience.",
        "open road gives Travel prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        lobby: "lobby is a place or setting connected to Travel, especially Road Trips.",
        room: "room is a place or setting connected to Travel, especially Road Trips.",
        beach: "beach is a place or setting connected to Travel, especially Road Trips.",
        city: "city is a place or setting connected to Travel, especially Road Trips.",
        road: "road is a place or setting connected to Travel, especially Road Trips.",
        station: "station is a place or setting connected to Travel, especially Road Trips.",
        tourist: "tourist is a person or role connected to Travel, especially Road Trips.",
        receptionist: "receptionist is a person or role connected to Travel, especially Road Trips.",
        guide: "guide is a person or role connected to Travel, especially Road Trips.",
        driver: "driver is a person or role connected to Travel, especially Road Trips.",
        backpacker: "backpacker is a person or role connected to Travel, especially Road Trips.",
        local: "local is a person or role connected to Travel, especially Road Trips.",
        bed: "bed is a term or object connected to Travel, especially Road Trips.",
        towel: "towel is a term or object connected to Travel, especially Road Trips.",
        map: "map is a term or object connected to Travel, especially Road Trips.",
        camera: "camera is a term or object connected to Travel, especially Road Trips.",
        suitcase: "suitcase is a term or object connected to Travel, especially Road Trips.",
        train: "train is a term or object connected to Travel, especially Road Trips.",
        check: "check is an action connected to Travel, especially Road Trips.",
        sleep: "sleep is an action connected to Travel, especially Road Trips.",
        pack: "pack is an action connected to Travel, especially Road Trips.",
        arrive: "arrive is an action connected to Travel, especially Road Trips.",
        explore: "explore is an action connected to Travel, especially Road Trips.",
        book: "book is an action connected to Travel, especially Road Trips.",
        sunny: "sunny is a description or mood connected to Travel, especially Road Trips.",
        busy: "busy is a description or mood connected to Travel, especially Road Trips.",
        remote: "remote is a description or mood connected to Travel, especially Road Trips.",
        safe: "safe is a description or mood connected to Travel, especially Road Trips.",
        curious: "curious is a description or mood connected to Travel, especially Road Trips.",
        peaceful: "peaceful is a description or mood connected to Travel, especially Road Trips.",
        brightly: "brightly is a way something happens connected to Travel, especially Road Trips.",
        safely: "safely is a way something happens connected to Travel, especially Road Trips.",
        quietly: "quietly is a way something happens connected to Travel, especially Road Trips.",
        eagerly: "eagerly is a way something happens connected to Travel, especially Road Trips.",
        locally: "locally is a way something happens connected to Travel, especially Road Trips."
      },
      templates: [
        {
          id: "travel_places_2_0",
          role: "places",
          text: "The traveler reached the {target}.",
          tags: [
            "places",
            "road_trips"
          ]
        },
        {
          id: "travel_places_2_1",
          role: "places",
          text: "The guide pointed toward the {target}.",
          tags: [
            "places",
            "road_trips"
          ]
        },
        {
          id: "travel_people_2_0",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "road_trips"
          ]
        },
        {
          id: "travel_people_2_1",
          role: "people",
          text: "The passport was checked by the {target}.",
          tags: [
            "people",
            "road_trips"
          ]
        },
        {
          id: "travel_objects_2_0",
          role: "objects",
          text: "The traveler packed the {target}.",
          tags: [
            "objects",
            "road_trips"
          ]
        },
        {
          id: "travel_objects_2_1",
          role: "objects",
          text: "The guide unfolded the {target}.",
          tags: [
            "objects",
            "road_trips"
          ]
        },
        {
          id: "travel_actions_2_0",
          role: "actions",
          text: "The traveler had to {target}.",
          tags: [
            "actions",
            "road_trips"
          ]
        },
        {
          id: "travel_actions_2_1",
          role: "actions",
          text: "The group planned to {target}.",
          tags: [
            "actions",
            "road_trips"
          ]
        },
        {
          id: "travel_moods_2_0",
          role: "moods",
          text: "The beach morning felt {target}.",
          tags: [
            "moods",
            "road_trips"
          ]
        },
        {
          id: "travel_moods_2_1",
          role: "moods",
          text: "The city walk became {target}.",
          tags: [
            "moods",
            "road_trips"
          ]
        },
        {
          id: "travel_adverbs_2_0",
          role: "adverbs",
          text: "The traveler crossed the terminal {target}.",
          tags: [
            "adverbs",
            "road_trips"
          ]
        },
        {
          id: "travel_adverbs_2_1",
          role: "adverbs",
          text: "The guide pointed to the route {target}.",
          tags: [
            "adverbs",
            "road_trips"
          ]
        }
      ]
    },
    {
      id: "travel_beaches",
      topic: "Beaches",
      scene: "beach path",
      people: [
        "guide",
        "driver",
        "backpacker",
        "local",
        "agent",
        "passenger"
      ],
      places: [
        "beach",
        "city",
        "road",
        "station",
        "harbor",
        "route"
      ],
      objects: [
        "map",
        "camera",
        "suitcase",
        "train",
        "plane",
        "itinerary"
      ],
      actions: [
        "pack",
        "arrive",
        "explore",
        "book",
        "navigate",
        "depart"
      ],
      moods: [
        "remote",
        "safe",
        "curious",
        "peaceful",
        "crowded",
        "scenic"
      ],
      adverbs: [
        "quietly",
        "eagerly",
        "locally",
        "smoothly",
        "quickly"
      ],
      facts: [
        "Beaches belongs to Travel: journeys, transport, places, visitors, and local experience.",
        "beach path gives Travel prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        beach: "beach is a place or setting connected to Travel, especially Beaches.",
        city: "city is a place or setting connected to Travel, especially Beaches.",
        road: "road is a place or setting connected to Travel, especially Beaches.",
        station: "station is a place or setting connected to Travel, especially Beaches.",
        harbor: "harbor is a place or setting connected to Travel, especially Beaches.",
        route: "route is a place or setting connected to Travel, especially Beaches.",
        guide: "guide is a person or role connected to Travel, especially Beaches.",
        driver: "driver is a person or role connected to Travel, especially Beaches.",
        backpacker: "backpacker is a person or role connected to Travel, especially Beaches.",
        local: "local is a person or role connected to Travel, especially Beaches.",
        agent: "agent is a person or role connected to Travel, especially Beaches.",
        passenger: "passenger is a person or role connected to Travel, especially Beaches.",
        map: "map is a term or object connected to Travel, especially Beaches.",
        camera: "camera is a term or object connected to Travel, especially Beaches.",
        suitcase: "suitcase is a term or object connected to Travel, especially Beaches.",
        train: "train is a term or object connected to Travel, especially Beaches.",
        plane: "plane is a term or object connected to Travel, especially Beaches.",
        itinerary: "itinerary is a term or object connected to Travel, especially Beaches.",
        pack: "pack is an action connected to Travel, especially Beaches.",
        arrive: "arrive is an action connected to Travel, especially Beaches.",
        explore: "explore is an action connected to Travel, especially Beaches.",
        book: "book is an action connected to Travel, especially Beaches.",
        navigate: "navigate is an action connected to Travel, especially Beaches.",
        depart: "depart is an action connected to Travel, especially Beaches.",
        remote: "remote is a description or mood connected to Travel, especially Beaches.",
        safe: "safe is a description or mood connected to Travel, especially Beaches.",
        curious: "curious is a description or mood connected to Travel, especially Beaches.",
        peaceful: "peaceful is a description or mood connected to Travel, especially Beaches.",
        crowded: "crowded is a description or mood connected to Travel, especially Beaches.",
        scenic: "scenic is a description or mood connected to Travel, especially Beaches.",
        quietly: "quietly is a way something happens connected to Travel, especially Beaches.",
        eagerly: "eagerly is a way something happens connected to Travel, especially Beaches.",
        locally: "locally is a way something happens connected to Travel, especially Beaches.",
        smoothly: "smoothly is a way something happens connected to Travel, especially Beaches.",
        quickly: "quickly is a way something happens connected to Travel, especially Beaches."
      },
      templates: [
        {
          id: "travel_places_3_0",
          role: "places",
          text: "The traveler reached the {target}.",
          tags: [
            "places",
            "beaches"
          ]
        },
        {
          id: "travel_places_3_1",
          role: "places",
          text: "The guide pointed toward the {target}.",
          tags: [
            "places",
            "beaches"
          ]
        },
        {
          id: "travel_people_3_0",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "beaches"
          ]
        },
        {
          id: "travel_people_3_1",
          role: "people",
          text: "The passport was checked by the {target}.",
          tags: [
            "people",
            "beaches"
          ]
        },
        {
          id: "travel_objects_3_0",
          role: "objects",
          text: "The traveler packed the {target}.",
          tags: [
            "objects",
            "beaches"
          ]
        },
        {
          id: "travel_objects_3_1",
          role: "objects",
          text: "The guide unfolded the {target}.",
          tags: [
            "objects",
            "beaches"
          ]
        },
        {
          id: "travel_actions_3_0",
          role: "actions",
          text: "The traveler had to {target}.",
          tags: [
            "actions",
            "beaches"
          ]
        },
        {
          id: "travel_actions_3_1",
          role: "actions",
          text: "The group planned to {target}.",
          tags: [
            "actions",
            "beaches"
          ]
        },
        {
          id: "travel_moods_3_0",
          role: "moods",
          text: "The beach morning felt {target}.",
          tags: [
            "moods",
            "beaches"
          ]
        },
        {
          id: "travel_moods_3_1",
          role: "moods",
          text: "The city walk became {target}.",
          tags: [
            "moods",
            "beaches"
          ]
        },
        {
          id: "travel_adverbs_3_0",
          role: "adverbs",
          text: "The traveler crossed the terminal {target}.",
          tags: [
            "adverbs",
            "beaches"
          ]
        },
        {
          id: "travel_adverbs_3_1",
          role: "adverbs",
          text: "The guide pointed to the route {target}.",
          tags: [
            "adverbs",
            "beaches"
          ]
        }
      ]
    },
    {
      id: "travel_cities",
      topic: "Cities",
      scene: "city street",
      people: [
        "backpacker",
        "local",
        "agent",
        "passenger",
        "pilot",
        "traveler"
      ],
      places: [
        "road",
        "station",
        "harbor",
        "route",
        "airport",
        "gate"
      ],
      objects: [
        "suitcase",
        "train",
        "plane",
        "itinerary",
        "passport",
        "ticket"
      ],
      actions: [
        "explore",
        "book",
        "navigate",
        "depart",
        "fly",
        "wait"
      ],
      moods: [
        "curious",
        "peaceful",
        "crowded",
        "scenic",
        "excited",
        "tired"
      ],
      adverbs: [
        "locally",
        "smoothly",
        "quickly",
        "slowly",
        "carefully"
      ],
      facts: [
        "Cities belongs to Travel: journeys, transport, places, visitors, and local experience.",
        "city street gives Travel prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        road: "road is a place or setting connected to Travel, especially Cities.",
        station: "station is a place or setting connected to Travel, especially Cities.",
        harbor: "harbor is a place or setting connected to Travel, especially Cities.",
        route: "route is a place or setting connected to Travel, especially Cities.",
        airport: "airport is a place or setting connected to Travel, especially Cities.",
        gate: "gate is a place or setting connected to Travel, especially Cities.",
        backpacker: "backpacker is a person or role connected to Travel, especially Cities.",
        local: "local is a person or role connected to Travel, especially Cities.",
        agent: "agent is a person or role connected to Travel, especially Cities.",
        passenger: "passenger is a person or role connected to Travel, especially Cities.",
        pilot: "pilot is a person or role connected to Travel, especially Cities.",
        traveler: "traveler is a person or role connected to Travel, especially Cities.",
        suitcase: "suitcase is a term or object connected to Travel, especially Cities.",
        train: "train is a term or object connected to Travel, especially Cities.",
        plane: "plane is a term or object connected to Travel, especially Cities.",
        itinerary: "itinerary is a term or object connected to Travel, especially Cities.",
        passport: "passport is a term or object connected to Travel, especially Cities.",
        ticket: "ticket is a term or object connected to Travel, especially Cities.",
        explore: "explore is an action connected to Travel, especially Cities.",
        book: "book is an action connected to Travel, especially Cities.",
        navigate: "navigate is an action connected to Travel, especially Cities.",
        depart: "depart is an action connected to Travel, especially Cities.",
        fly: "fly is an action connected to Travel, especially Cities.",
        wait: "wait is an action connected to Travel, especially Cities.",
        curious: "curious is a description or mood connected to Travel, especially Cities.",
        peaceful: "peaceful is a description or mood connected to Travel, especially Cities.",
        crowded: "crowded is a description or mood connected to Travel, especially Cities.",
        scenic: "scenic is a description or mood connected to Travel, especially Cities.",
        excited: "excited is a description or mood connected to Travel, especially Cities.",
        tired: "tired is a description or mood connected to Travel, especially Cities.",
        locally: "locally is a way something happens connected to Travel, especially Cities.",
        smoothly: "smoothly is a way something happens connected to Travel, especially Cities.",
        quickly: "quickly is a way something happens connected to Travel, especially Cities.",
        slowly: "slowly is a way something happens connected to Travel, especially Cities.",
        carefully: "carefully is a way something happens connected to Travel, especially Cities."
      },
      templates: [
        {
          id: "travel_places_4_0",
          role: "places",
          text: "The traveler reached the {target}.",
          tags: [
            "places",
            "cities"
          ]
        },
        {
          id: "travel_places_4_1",
          role: "places",
          text: "The guide pointed toward the {target}.",
          tags: [
            "places",
            "cities"
          ]
        },
        {
          id: "travel_people_4_0",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "cities"
          ]
        },
        {
          id: "travel_people_4_1",
          role: "people",
          text: "The passport was checked by the {target}.",
          tags: [
            "people",
            "cities"
          ]
        },
        {
          id: "travel_objects_4_0",
          role: "objects",
          text: "The traveler packed the {target}.",
          tags: [
            "objects",
            "cities"
          ]
        },
        {
          id: "travel_objects_4_1",
          role: "objects",
          text: "The guide unfolded the {target}.",
          tags: [
            "objects",
            "cities"
          ]
        },
        {
          id: "travel_actions_4_0",
          role: "actions",
          text: "The traveler had to {target}.",
          tags: [
            "actions",
            "cities"
          ]
        },
        {
          id: "travel_actions_4_1",
          role: "actions",
          text: "The group planned to {target}.",
          tags: [
            "actions",
            "cities"
          ]
        },
        {
          id: "travel_moods_4_0",
          role: "moods",
          text: "The beach morning felt {target}.",
          tags: [
            "moods",
            "cities"
          ]
        },
        {
          id: "travel_moods_4_1",
          role: "moods",
          text: "The city walk became {target}.",
          tags: [
            "moods",
            "cities"
          ]
        },
        {
          id: "travel_adverbs_4_0",
          role: "adverbs",
          text: "The traveler crossed the terminal {target}.",
          tags: [
            "adverbs",
            "cities"
          ]
        },
        {
          id: "travel_adverbs_4_1",
          role: "adverbs",
          text: "The guide pointed to the route {target}.",
          tags: [
            "adverbs",
            "cities"
          ]
        }
      ]
    },
    {
      id: "travel_maps",
      topic: "Maps",
      scene: "route map",
      people: [
        "agent",
        "passenger",
        "pilot",
        "traveler",
        "guard",
        "guest"
      ],
      places: [
        "harbor",
        "route",
        "airport",
        "gate",
        "terminal",
        "hotel"
      ],
      objects: [
        "plane",
        "itinerary",
        "passport",
        "ticket",
        "luggage",
        "key"
      ],
      actions: [
        "navigate",
        "depart",
        "fly",
        "wait",
        "board",
        "rest"
      ],
      moods: [
        "crowded",
        "scenic",
        "excited",
        "tired",
        "lost",
        "relaxed"
      ],
      adverbs: [
        "quickly",
        "slowly",
        "carefully",
        "peacefully",
        "brightly"
      ],
      facts: [
        "Maps belongs to Travel: journeys, transport, places, visitors, and local experience.",
        "route map gives Travel prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        harbor: "harbor is a place or setting connected to Travel, especially Maps.",
        route: "route is a place or setting connected to Travel, especially Maps.",
        airport: "airport is a place or setting connected to Travel, especially Maps.",
        gate: "gate is a place or setting connected to Travel, especially Maps.",
        terminal: "terminal is a place or setting connected to Travel, especially Maps.",
        hotel: "hotel is a place or setting connected to Travel, especially Maps.",
        agent: "agent is a person or role connected to Travel, especially Maps.",
        passenger: "passenger is a person or role connected to Travel, especially Maps.",
        pilot: "pilot is a person or role connected to Travel, especially Maps.",
        traveler: "traveler is a person or role connected to Travel, especially Maps.",
        guard: "guard is a person or role connected to Travel, especially Maps.",
        guest: "guest is a person or role connected to Travel, especially Maps.",
        plane: "plane is a term or object connected to Travel, especially Maps.",
        itinerary: "itinerary is a term or object connected to Travel, especially Maps.",
        passport: "passport is a term or object connected to Travel, especially Maps.",
        ticket: "ticket is a term or object connected to Travel, especially Maps.",
        luggage: "luggage is a term or object connected to Travel, especially Maps.",
        key: "key is a term or object connected to Travel, especially Maps.",
        navigate: "navigate is an action connected to Travel, especially Maps.",
        depart: "depart is an action connected to Travel, especially Maps.",
        fly: "fly is an action connected to Travel, especially Maps.",
        wait: "wait is an action connected to Travel, especially Maps.",
        board: "board is an action connected to Travel, especially Maps.",
        rest: "rest is an action connected to Travel, especially Maps.",
        crowded: "crowded is a description or mood connected to Travel, especially Maps.",
        scenic: "scenic is a description or mood connected to Travel, especially Maps.",
        excited: "excited is a description or mood connected to Travel, especially Maps.",
        tired: "tired is a description or mood connected to Travel, especially Maps.",
        lost: "lost is a description or mood connected to Travel, especially Maps.",
        relaxed: "relaxed is a description or mood connected to Travel, especially Maps.",
        quickly: "quickly is a way something happens connected to Travel, especially Maps.",
        slowly: "slowly is a way something happens connected to Travel, especially Maps.",
        carefully: "carefully is a way something happens connected to Travel, especially Maps.",
        peacefully: "peacefully is a way something happens connected to Travel, especially Maps.",
        brightly: "brightly is a way something happens connected to Travel, especially Maps."
      },
      templates: [
        {
          id: "travel_places_5_0",
          role: "places",
          text: "The traveler reached the {target}.",
          tags: [
            "places",
            "maps"
          ]
        },
        {
          id: "travel_places_5_1",
          role: "places",
          text: "The guide pointed toward the {target}.",
          tags: [
            "places",
            "maps"
          ]
        },
        {
          id: "travel_people_5_0",
          role: "people",
          text: "The route was explained to the {target}.",
          tags: [
            "people",
            "maps"
          ]
        },
        {
          id: "travel_people_5_1",
          role: "people",
          text: "The passport was checked by the {target}.",
          tags: [
            "people",
            "maps"
          ]
        },
        {
          id: "travel_objects_5_0",
          role: "objects",
          text: "The traveler packed the {target}.",
          tags: [
            "objects",
            "maps"
          ]
        },
        {
          id: "travel_objects_5_1",
          role: "objects",
          text: "The guide unfolded the {target}.",
          tags: [
            "objects",
            "maps"
          ]
        },
        {
          id: "travel_actions_5_0",
          role: "actions",
          text: "The traveler had to {target}.",
          tags: [
            "actions",
            "maps"
          ]
        },
        {
          id: "travel_actions_5_1",
          role: "actions",
          text: "The group planned to {target}.",
          tags: [
            "actions",
            "maps"
          ]
        },
        {
          id: "travel_moods_5_0",
          role: "moods",
          text: "The beach morning felt {target}.",
          tags: [
            "moods",
            "maps"
          ]
        },
        {
          id: "travel_moods_5_1",
          role: "moods",
          text: "The city walk became {target}.",
          tags: [
            "moods",
            "maps"
          ]
        },
        {
          id: "travel_adverbs_5_0",
          role: "adverbs",
          text: "The traveler crossed the terminal {target}.",
          tags: [
            "adverbs",
            "maps"
          ]
        },
        {
          id: "travel_adverbs_5_1",
          role: "adverbs",
          text: "The guide pointed to the route {target}.",
          tags: [
            "adverbs",
            "maps"
          ]
        }
      ]
    }
  ]
});
