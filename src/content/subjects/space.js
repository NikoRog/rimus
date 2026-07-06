import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "space",
  name: "Space",
  theme: "planets, stars, missions, tools, and the universe",
  nodes: [
    {
      id: "space_planets",
      topic: "Planets",
      scene: "planet orbit",
      people: [
        "astronaut",
        "scientist",
        "pilot",
        "robot",
        "engineer",
        "crew"
      ],
      places: [
        "moon",
        "sky",
        "orbit",
        "planet",
        "base",
        "station"
      ],
      objects: [
        "rocket",
        "star",
        "dust",
        "rover",
        "probe",
        "helmet"
      ],
      actions: [
        "orbit",
        "land",
        "shine",
        "explore",
        "launch",
        "float"
      ],
      moods: [
        "distant",
        "silent",
        "cosmic",
        "bright",
        "lonely",
        "dangerous"
      ],
      adverbs: [
        "slowly",
        "silently",
        "carefully",
        "boldly",
        "brightly"
      ],
      facts: [
        "Planets belongs to Space: planets, stars, missions, tools, and the universe.",
        "planet orbit gives Space prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        moon: "moon is a place or setting connected to Space, especially Planets.",
        sky: "sky is a place or setting connected to Space, especially Planets.",
        orbit: "orbit is an action connected to Space, especially Planets.",
        planet: "planet is a place or setting connected to Space, especially Planets.",
        base: "base is a place or setting connected to Space, especially Planets.",
        station: "station is a place or setting connected to Space, especially Planets.",
        astronaut: "astronaut is a person or role connected to Space, especially Planets.",
        scientist: "scientist is a person or role connected to Space, especially Planets.",
        pilot: "pilot is a person or role connected to Space, especially Planets.",
        robot: "robot is a person or role connected to Space, especially Planets.",
        engineer: "engineer is a person or role connected to Space, especially Planets.",
        crew: "crew is a person or role connected to Space, especially Planets.",
        rocket: "rocket is a term or object connected to Space, especially Planets.",
        star: "star is a term or object connected to Space, especially Planets.",
        dust: "dust is a term or object connected to Space, especially Planets.",
        rover: "rover is a term or object connected to Space, especially Planets.",
        probe: "probe is a term or object connected to Space, especially Planets.",
        helmet: "helmet is a term or object connected to Space, especially Planets.",
        land: "land is an action connected to Space, especially Planets.",
        shine: "shine is an action connected to Space, especially Planets.",
        explore: "explore is an action connected to Space, especially Planets.",
        launch: "launch is an action connected to Space, especially Planets.",
        float: "float is an action connected to Space, especially Planets.",
        distant: "distant is a description or mood connected to Space, especially Planets.",
        silent: "silent is a description or mood connected to Space, especially Planets.",
        cosmic: "cosmic is a description or mood connected to Space, especially Planets.",
        bright: "bright is a description or mood connected to Space, especially Planets.",
        lonely: "lonely is a description or mood connected to Space, especially Planets.",
        dangerous: "dangerous is a description or mood connected to Space, especially Planets.",
        slowly: "slowly is a way something happens connected to Space, especially Planets.",
        silently: "silently is a way something happens connected to Space, especially Planets.",
        carefully: "carefully is a way something happens connected to Space, especially Planets.",
        boldly: "boldly is a way something happens connected to Space, especially Planets.",
        brightly: "brightly is a way something happens connected to Space, especially Planets."
      },
      templates: [
        {
          id: "space_places_0_0",
          role: "places",
          text: "The mission reached the {target}.",
          tags: [
            "places",
            "planets"
          ]
        },
        {
          id: "space_places_0_1",
          role: "places",
          text: "The telescope pointed toward the {target}.",
          tags: [
            "places",
            "planets"
          ]
        },
        {
          id: "space_people_0_0",
          role: "people",
          text: "The capsule was entered by the {target}.",
          tags: [
            "people",
            "planets"
          ]
        },
        {
          id: "space_people_0_1",
          role: "people",
          text: "The mission report named the {target}.",
          tags: [
            "people",
            "planets"
          ]
        },
        {
          id: "space_objects_0_0",
          role: "objects",
          text: "The observatory captured the {target}.",
          tags: [
            "objects",
            "planets"
          ]
        },
        {
          id: "space_objects_0_1",
          role: "objects",
          text: "The mission reached the {target}.",
          tags: [
            "objects",
            "planets"
          ]
        },
        {
          id: "space_actions_0_0",
          role: "actions",
          text: "The astronaut had to {target}.",
          tags: [
            "actions",
            "planets"
          ]
        },
        {
          id: "space_actions_0_1",
          role: "actions",
          text: "The rocket started to {target}.",
          tags: [
            "actions",
            "planets"
          ]
        },
        {
          id: "space_moods_0_0",
          role: "moods",
          text: "The planet looked {target}.",
          tags: [
            "moods",
            "planets"
          ]
        },
        {
          id: "space_moods_0_1",
          role: "moods",
          text: "The mission became {target}.",
          tags: [
            "moods",
            "planets"
          ]
        },
        {
          id: "space_adverbs_0_0",
          role: "adverbs",
          text: "The probe drifted {target}.",
          tags: [
            "adverbs",
            "planets"
          ]
        },
        {
          id: "space_adverbs_0_1",
          role: "adverbs",
          text: "The astronaut moved {target}.",
          tags: [
            "adverbs",
            "planets"
          ]
        }
      ]
    },
    {
      id: "space_stars",
      topic: "Stars",
      scene: "star field",
      people: [
        "pilot",
        "robot",
        "engineer",
        "crew",
        "commander",
        "researcher"
      ],
      places: [
        "orbit",
        "planet",
        "base",
        "station",
        "crater",
        "galaxy"
      ],
      objects: [
        "dust",
        "rover",
        "probe",
        "helmet",
        "telescope",
        "capsule"
      ],
      actions: [
        "shine",
        "explore",
        "launch",
        "float",
        "signal",
        "dock"
      ],
      moods: [
        "cosmic",
        "bright",
        "lonely",
        "dangerous",
        "weightless",
        "vast"
      ],
      adverbs: [
        "carefully",
        "boldly",
        "brightly",
        "steadily",
        "deeply"
      ],
      facts: [
        "Stars belongs to Space: planets, stars, missions, tools, and the universe.",
        "star field gives Space prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        orbit: "orbit is a place or setting connected to Space, especially Stars.",
        planet: "planet is a place or setting connected to Space, especially Stars.",
        base: "base is a place or setting connected to Space, especially Stars.",
        station: "station is a place or setting connected to Space, especially Stars.",
        crater: "crater is a place or setting connected to Space, especially Stars.",
        galaxy: "galaxy is a place or setting connected to Space, especially Stars.",
        pilot: "pilot is a person or role connected to Space, especially Stars.",
        robot: "robot is a person or role connected to Space, especially Stars.",
        engineer: "engineer is a person or role connected to Space, especially Stars.",
        crew: "crew is a person or role connected to Space, especially Stars.",
        commander: "commander is a person or role connected to Space, especially Stars.",
        researcher: "researcher is a person or role connected to Space, especially Stars.",
        dust: "dust is a term or object connected to Space, especially Stars.",
        rover: "rover is a term or object connected to Space, especially Stars.",
        probe: "probe is a term or object connected to Space, especially Stars.",
        helmet: "helmet is a term or object connected to Space, especially Stars.",
        telescope: "telescope is a term or object connected to Space, especially Stars.",
        capsule: "capsule is a term or object connected to Space, especially Stars.",
        shine: "shine is an action connected to Space, especially Stars.",
        explore: "explore is an action connected to Space, especially Stars.",
        launch: "launch is an action connected to Space, especially Stars.",
        float: "float is an action connected to Space, especially Stars.",
        signal: "signal is an action connected to Space, especially Stars.",
        dock: "dock is an action connected to Space, especially Stars.",
        cosmic: "cosmic is a description or mood connected to Space, especially Stars.",
        bright: "bright is a description or mood connected to Space, especially Stars.",
        lonely: "lonely is a description or mood connected to Space, especially Stars.",
        dangerous: "dangerous is a description or mood connected to Space, especially Stars.",
        weightless: "weightless is a description or mood connected to Space, especially Stars.",
        vast: "vast is a description or mood connected to Space, especially Stars.",
        carefully: "carefully is a way something happens connected to Space, especially Stars.",
        boldly: "boldly is a way something happens connected to Space, especially Stars.",
        brightly: "brightly is a way something happens connected to Space, especially Stars.",
        steadily: "steadily is a way something happens connected to Space, especially Stars.",
        deeply: "deeply is a way something happens connected to Space, especially Stars."
      },
      templates: [
        {
          id: "space_places_1_0",
          role: "places",
          text: "The mission reached the {target}.",
          tags: [
            "places",
            "stars"
          ]
        },
        {
          id: "space_places_1_1",
          role: "places",
          text: "The telescope pointed toward the {target}.",
          tags: [
            "places",
            "stars"
          ]
        },
        {
          id: "space_people_1_0",
          role: "people",
          text: "The capsule was entered by the {target}.",
          tags: [
            "people",
            "stars"
          ]
        },
        {
          id: "space_people_1_1",
          role: "people",
          text: "The mission report named the {target}.",
          tags: [
            "people",
            "stars"
          ]
        },
        {
          id: "space_objects_1_0",
          role: "objects",
          text: "The observatory captured the {target}.",
          tags: [
            "objects",
            "stars"
          ]
        },
        {
          id: "space_objects_1_1",
          role: "objects",
          text: "The mission reached the {target}.",
          tags: [
            "objects",
            "stars"
          ]
        },
        {
          id: "space_actions_1_0",
          role: "actions",
          text: "The astronaut had to {target}.",
          tags: [
            "actions",
            "stars"
          ]
        },
        {
          id: "space_actions_1_1",
          role: "actions",
          text: "The rocket started to {target}.",
          tags: [
            "actions",
            "stars"
          ]
        },
        {
          id: "space_moods_1_0",
          role: "moods",
          text: "The planet looked {target}.",
          tags: [
            "moods",
            "stars"
          ]
        },
        {
          id: "space_moods_1_1",
          role: "moods",
          text: "The mission became {target}.",
          tags: [
            "moods",
            "stars"
          ]
        },
        {
          id: "space_adverbs_1_0",
          role: "adverbs",
          text: "The probe drifted {target}.",
          tags: [
            "adverbs",
            "stars"
          ]
        },
        {
          id: "space_adverbs_1_1",
          role: "adverbs",
          text: "The astronaut moved {target}.",
          tags: [
            "adverbs",
            "stars"
          ]
        }
      ]
    },
    {
      id: "space_rockets",
      topic: "Rockets",
      scene: "launch pad",
      people: [
        "engineer",
        "crew",
        "commander",
        "researcher",
        "navigator",
        "technician"
      ],
      places: [
        "base",
        "station",
        "crater",
        "galaxy",
        "observatory",
        "hangar"
      ],
      objects: [
        "probe",
        "helmet",
        "telescope",
        "capsule",
        "module",
        "comet"
      ],
      actions: [
        "launch",
        "float",
        "signal",
        "dock",
        "observe",
        "drift"
      ],
      moods: [
        "lonely",
        "dangerous",
        "weightless",
        "vast",
        "unknown",
        "stellar"
      ],
      adverbs: [
        "brightly",
        "steadily",
        "deeply",
        "weightlessly",
        "safely"
      ],
      facts: [
        "Rockets belongs to Space: planets, stars, missions, tools, and the universe.",
        "launch pad gives Space prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        base: "base is a place or setting connected to Space, especially Rockets.",
        station: "station is a place or setting connected to Space, especially Rockets.",
        crater: "crater is a place or setting connected to Space, especially Rockets.",
        galaxy: "galaxy is a place or setting connected to Space, especially Rockets.",
        observatory: "observatory is a place or setting connected to Space, especially Rockets.",
        hangar: "hangar is a place or setting connected to Space, especially Rockets.",
        engineer: "engineer is a person or role connected to Space, especially Rockets.",
        crew: "crew is a person or role connected to Space, especially Rockets.",
        commander: "commander is a person or role connected to Space, especially Rockets.",
        researcher: "researcher is a person or role connected to Space, especially Rockets.",
        navigator: "navigator is a person or role connected to Space, especially Rockets.",
        technician: "technician is a person or role connected to Space, especially Rockets.",
        probe: "probe is a term or object connected to Space, especially Rockets.",
        helmet: "helmet is a term or object connected to Space, especially Rockets.",
        telescope: "telescope is a term or object connected to Space, especially Rockets.",
        capsule: "capsule is a term or object connected to Space, especially Rockets.",
        module: "module is a term or object connected to Space, especially Rockets.",
        comet: "comet is a term or object connected to Space, especially Rockets.",
        launch: "launch is an action connected to Space, especially Rockets.",
        float: "float is an action connected to Space, especially Rockets.",
        signal: "signal is an action connected to Space, especially Rockets.",
        dock: "dock is an action connected to Space, especially Rockets.",
        observe: "observe is an action connected to Space, especially Rockets.",
        drift: "drift is an action connected to Space, especially Rockets.",
        lonely: "lonely is a description or mood connected to Space, especially Rockets.",
        dangerous: "dangerous is a description or mood connected to Space, especially Rockets.",
        weightless: "weightless is a description or mood connected to Space, especially Rockets.",
        vast: "vast is a description or mood connected to Space, especially Rockets.",
        unknown: "unknown is a description or mood connected to Space, especially Rockets.",
        stellar: "stellar is a description or mood connected to Space, especially Rockets.",
        brightly: "brightly is a way something happens connected to Space, especially Rockets.",
        steadily: "steadily is a way something happens connected to Space, especially Rockets.",
        deeply: "deeply is a way something happens connected to Space, especially Rockets.",
        weightlessly: "weightlessly is a way something happens connected to Space, especially Rockets.",
        safely: "safely is a way something happens connected to Space, especially Rockets."
      },
      templates: [
        {
          id: "space_places_2_0",
          role: "places",
          text: "The mission reached the {target}.",
          tags: [
            "places",
            "rockets"
          ]
        },
        {
          id: "space_places_2_1",
          role: "places",
          text: "The telescope pointed toward the {target}.",
          tags: [
            "places",
            "rockets"
          ]
        },
        {
          id: "space_people_2_0",
          role: "people",
          text: "The capsule was entered by the {target}.",
          tags: [
            "people",
            "rockets"
          ]
        },
        {
          id: "space_people_2_1",
          role: "people",
          text: "The mission report named the {target}.",
          tags: [
            "people",
            "rockets"
          ]
        },
        {
          id: "space_objects_2_0",
          role: "objects",
          text: "The observatory captured the {target}.",
          tags: [
            "objects",
            "rockets"
          ]
        },
        {
          id: "space_objects_2_1",
          role: "objects",
          text: "The mission reached the {target}.",
          tags: [
            "objects",
            "rockets"
          ]
        },
        {
          id: "space_actions_2_0",
          role: "actions",
          text: "The astronaut had to {target}.",
          tags: [
            "actions",
            "rockets"
          ]
        },
        {
          id: "space_actions_2_1",
          role: "actions",
          text: "The rocket started to {target}.",
          tags: [
            "actions",
            "rockets"
          ]
        },
        {
          id: "space_moods_2_0",
          role: "moods",
          text: "The planet looked {target}.",
          tags: [
            "moods",
            "rockets"
          ]
        },
        {
          id: "space_moods_2_1",
          role: "moods",
          text: "The mission became {target}.",
          tags: [
            "moods",
            "rockets"
          ]
        },
        {
          id: "space_adverbs_2_0",
          role: "adverbs",
          text: "The probe drifted {target}.",
          tags: [
            "adverbs",
            "rockets"
          ]
        },
        {
          id: "space_adverbs_2_1",
          role: "adverbs",
          text: "The astronaut moved {target}.",
          tags: [
            "adverbs",
            "rockets"
          ]
        }
      ]
    },
    {
      id: "space_astronauts",
      topic: "Astronauts",
      scene: "space station",
      people: [
        "commander",
        "researcher",
        "navigator",
        "technician",
        "observer",
        "astronaut"
      ],
      places: [
        "crater",
        "galaxy",
        "observatory",
        "hangar",
        "launchpad",
        "moon"
      ],
      objects: [
        "telescope",
        "capsule",
        "module",
        "comet",
        "satellite",
        "planet"
      ],
      actions: [
        "signal",
        "dock",
        "observe",
        "drift",
        "ignite",
        "measure"
      ],
      moods: [
        "weightless",
        "vast",
        "unknown",
        "stellar",
        "cold",
        "hopeful"
      ],
      adverbs: [
        "deeply",
        "weightlessly",
        "safely",
        "remotely",
        "slowly"
      ],
      facts: [
        "Astronauts belongs to Space: planets, stars, missions, tools, and the universe.",
        "space station gives Space prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        crater: "crater is a place or setting connected to Space, especially Astronauts.",
        galaxy: "galaxy is a place or setting connected to Space, especially Astronauts.",
        observatory: "observatory is a place or setting connected to Space, especially Astronauts.",
        hangar: "hangar is a place or setting connected to Space, especially Astronauts.",
        launchpad: "launchpad is a place or setting connected to Space, especially Astronauts.",
        moon: "moon is a place or setting connected to Space, especially Astronauts.",
        commander: "commander is a person or role connected to Space, especially Astronauts.",
        researcher: "researcher is a person or role connected to Space, especially Astronauts.",
        navigator: "navigator is a person or role connected to Space, especially Astronauts.",
        technician: "technician is a person or role connected to Space, especially Astronauts.",
        observer: "observer is a person or role connected to Space, especially Astronauts.",
        astronaut: "astronaut is a person or role connected to Space, especially Astronauts.",
        telescope: "telescope is a term or object connected to Space, especially Astronauts.",
        capsule: "capsule is a term or object connected to Space, especially Astronauts.",
        module: "module is a term or object connected to Space, especially Astronauts.",
        comet: "comet is a term or object connected to Space, especially Astronauts.",
        satellite: "satellite is a term or object connected to Space, especially Astronauts.",
        planet: "planet is a term or object connected to Space, especially Astronauts.",
        signal: "signal is an action connected to Space, especially Astronauts.",
        dock: "dock is an action connected to Space, especially Astronauts.",
        observe: "observe is an action connected to Space, especially Astronauts.",
        drift: "drift is an action connected to Space, especially Astronauts.",
        ignite: "ignite is an action connected to Space, especially Astronauts.",
        measure: "measure is an action connected to Space, especially Astronauts.",
        weightless: "weightless is a description or mood connected to Space, especially Astronauts.",
        vast: "vast is a description or mood connected to Space, especially Astronauts.",
        unknown: "unknown is a description or mood connected to Space, especially Astronauts.",
        stellar: "stellar is a description or mood connected to Space, especially Astronauts.",
        cold: "cold is a description or mood connected to Space, especially Astronauts.",
        hopeful: "hopeful is a description or mood connected to Space, especially Astronauts.",
        deeply: "deeply is a way something happens connected to Space, especially Astronauts.",
        weightlessly: "weightlessly is a way something happens connected to Space, especially Astronauts.",
        safely: "safely is a way something happens connected to Space, especially Astronauts.",
        remotely: "remotely is a way something happens connected to Space, especially Astronauts.",
        slowly: "slowly is a way something happens connected to Space, especially Astronauts."
      },
      templates: [
        {
          id: "space_places_3_0",
          role: "places",
          text: "The mission reached the {target}.",
          tags: [
            "places",
            "astronauts"
          ]
        },
        {
          id: "space_places_3_1",
          role: "places",
          text: "The telescope pointed toward the {target}.",
          tags: [
            "places",
            "astronauts"
          ]
        },
        {
          id: "space_people_3_0",
          role: "people",
          text: "The capsule was entered by the {target}.",
          tags: [
            "people",
            "astronauts"
          ]
        },
        {
          id: "space_people_3_1",
          role: "people",
          text: "The mission report named the {target}.",
          tags: [
            "people",
            "astronauts"
          ]
        },
        {
          id: "space_objects_3_0",
          role: "objects",
          text: "The observatory captured the {target}.",
          tags: [
            "objects",
            "astronauts"
          ]
        },
        {
          id: "space_objects_3_1",
          role: "objects",
          text: "The mission reached the {target}.",
          tags: [
            "objects",
            "astronauts"
          ]
        },
        {
          id: "space_actions_3_0",
          role: "actions",
          text: "The astronaut had to {target}.",
          tags: [
            "actions",
            "astronauts"
          ]
        },
        {
          id: "space_actions_3_1",
          role: "actions",
          text: "The rocket started to {target}.",
          tags: [
            "actions",
            "astronauts"
          ]
        },
        {
          id: "space_moods_3_0",
          role: "moods",
          text: "The planet looked {target}.",
          tags: [
            "moods",
            "astronauts"
          ]
        },
        {
          id: "space_moods_3_1",
          role: "moods",
          text: "The mission became {target}.",
          tags: [
            "moods",
            "astronauts"
          ]
        },
        {
          id: "space_adverbs_3_0",
          role: "adverbs",
          text: "The probe drifted {target}.",
          tags: [
            "adverbs",
            "astronauts"
          ]
        },
        {
          id: "space_adverbs_3_1",
          role: "adverbs",
          text: "The astronaut moved {target}.",
          tags: [
            "adverbs",
            "astronauts"
          ]
        }
      ]
    },
    {
      id: "space_telescopes",
      topic: "Telescopes",
      scene: "observatory dome",
      people: [
        "navigator",
        "technician",
        "observer",
        "astronaut",
        "scientist",
        "pilot"
      ],
      places: [
        "observatory",
        "hangar",
        "launchpad",
        "moon",
        "sky",
        "orbit"
      ],
      objects: [
        "module",
        "comet",
        "satellite",
        "planet",
        "rocket",
        "star"
      ],
      actions: [
        "observe",
        "drift",
        "ignite",
        "measure",
        "orbit",
        "land"
      ],
      moods: [
        "unknown",
        "stellar",
        "cold",
        "hopeful",
        "distant",
        "silent"
      ],
      adverbs: [
        "safely",
        "remotely",
        "slowly",
        "silently",
        "carefully"
      ],
      facts: [
        "Telescopes belongs to Space: planets, stars, missions, tools, and the universe.",
        "observatory dome gives Space prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        observatory: "observatory is a place or setting connected to Space, especially Telescopes.",
        hangar: "hangar is a place or setting connected to Space, especially Telescopes.",
        launchpad: "launchpad is a place or setting connected to Space, especially Telescopes.",
        moon: "moon is a place or setting connected to Space, especially Telescopes.",
        sky: "sky is a place or setting connected to Space, especially Telescopes.",
        orbit: "orbit is an action connected to Space, especially Telescopes.",
        navigator: "navigator is a person or role connected to Space, especially Telescopes.",
        technician: "technician is a person or role connected to Space, especially Telescopes.",
        observer: "observer is a person or role connected to Space, especially Telescopes.",
        astronaut: "astronaut is a person or role connected to Space, especially Telescopes.",
        scientist: "scientist is a person or role connected to Space, especially Telescopes.",
        pilot: "pilot is a person or role connected to Space, especially Telescopes.",
        module: "module is a term or object connected to Space, especially Telescopes.",
        comet: "comet is a term or object connected to Space, especially Telescopes.",
        satellite: "satellite is a term or object connected to Space, especially Telescopes.",
        planet: "planet is a term or object connected to Space, especially Telescopes.",
        rocket: "rocket is a term or object connected to Space, especially Telescopes.",
        star: "star is a term or object connected to Space, especially Telescopes.",
        observe: "observe is an action connected to Space, especially Telescopes.",
        drift: "drift is an action connected to Space, especially Telescopes.",
        ignite: "ignite is an action connected to Space, especially Telescopes.",
        measure: "measure is an action connected to Space, especially Telescopes.",
        land: "land is an action connected to Space, especially Telescopes.",
        unknown: "unknown is a description or mood connected to Space, especially Telescopes.",
        stellar: "stellar is a description or mood connected to Space, especially Telescopes.",
        cold: "cold is a description or mood connected to Space, especially Telescopes.",
        hopeful: "hopeful is a description or mood connected to Space, especially Telescopes.",
        distant: "distant is a description or mood connected to Space, especially Telescopes.",
        silent: "silent is a description or mood connected to Space, especially Telescopes.",
        safely: "safely is a way something happens connected to Space, especially Telescopes.",
        remotely: "remotely is a way something happens connected to Space, especially Telescopes.",
        slowly: "slowly is a way something happens connected to Space, especially Telescopes.",
        silently: "silently is a way something happens connected to Space, especially Telescopes.",
        carefully: "carefully is a way something happens connected to Space, especially Telescopes."
      },
      templates: [
        {
          id: "space_places_4_0",
          role: "places",
          text: "The mission reached the {target}.",
          tags: [
            "places",
            "telescopes"
          ]
        },
        {
          id: "space_places_4_1",
          role: "places",
          text: "The telescope pointed toward the {target}.",
          tags: [
            "places",
            "telescopes"
          ]
        },
        {
          id: "space_people_4_0",
          role: "people",
          text: "The capsule was entered by the {target}.",
          tags: [
            "people",
            "telescopes"
          ]
        },
        {
          id: "space_people_4_1",
          role: "people",
          text: "The mission report named the {target}.",
          tags: [
            "people",
            "telescopes"
          ]
        },
        {
          id: "space_objects_4_0",
          role: "objects",
          text: "The observatory captured the {target}.",
          tags: [
            "objects",
            "telescopes"
          ]
        },
        {
          id: "space_objects_4_1",
          role: "objects",
          text: "The mission reached the {target}.",
          tags: [
            "objects",
            "telescopes"
          ]
        },
        {
          id: "space_actions_4_0",
          role: "actions",
          text: "The astronaut had to {target}.",
          tags: [
            "actions",
            "telescopes"
          ]
        },
        {
          id: "space_actions_4_1",
          role: "actions",
          text: "The rocket started to {target}.",
          tags: [
            "actions",
            "telescopes"
          ]
        },
        {
          id: "space_moods_4_0",
          role: "moods",
          text: "The planet looked {target}.",
          tags: [
            "moods",
            "telescopes"
          ]
        },
        {
          id: "space_moods_4_1",
          role: "moods",
          text: "The mission became {target}.",
          tags: [
            "moods",
            "telescopes"
          ]
        },
        {
          id: "space_adverbs_4_0",
          role: "adverbs",
          text: "The probe drifted {target}.",
          tags: [
            "adverbs",
            "telescopes"
          ]
        },
        {
          id: "space_adverbs_4_1",
          role: "adverbs",
          text: "The astronaut moved {target}.",
          tags: [
            "adverbs",
            "telescopes"
          ]
        }
      ]
    },
    {
      id: "space_galaxies",
      topic: "Galaxies",
      scene: "deep galaxy",
      people: [
        "observer",
        "astronaut",
        "scientist",
        "pilot",
        "robot",
        "engineer"
      ],
      places: [
        "launchpad",
        "moon",
        "sky",
        "orbit",
        "planet",
        "base"
      ],
      objects: [
        "satellite",
        "planet",
        "rocket",
        "star",
        "dust",
        "rover"
      ],
      actions: [
        "ignite",
        "measure",
        "orbit",
        "land",
        "shine",
        "explore"
      ],
      moods: [
        "cold",
        "hopeful",
        "distant",
        "silent",
        "cosmic",
        "bright"
      ],
      adverbs: [
        "slowly",
        "silently",
        "carefully",
        "boldly",
        "brightly"
      ],
      facts: [
        "Galaxies belongs to Space: planets, stars, missions, tools, and the universe.",
        "deep galaxy gives Space prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        launchpad: "launchpad is a place or setting connected to Space, especially Galaxies.",
        moon: "moon is a place or setting connected to Space, especially Galaxies.",
        sky: "sky is a place or setting connected to Space, especially Galaxies.",
        orbit: "orbit is an action connected to Space, especially Galaxies.",
        planet: "planet is a term or object connected to Space, especially Galaxies.",
        base: "base is a place or setting connected to Space, especially Galaxies.",
        observer: "observer is a person or role connected to Space, especially Galaxies.",
        astronaut: "astronaut is a person or role connected to Space, especially Galaxies.",
        scientist: "scientist is a person or role connected to Space, especially Galaxies.",
        pilot: "pilot is a person or role connected to Space, especially Galaxies.",
        robot: "robot is a person or role connected to Space, especially Galaxies.",
        engineer: "engineer is a person or role connected to Space, especially Galaxies.",
        satellite: "satellite is a term or object connected to Space, especially Galaxies.",
        rocket: "rocket is a term or object connected to Space, especially Galaxies.",
        star: "star is a term or object connected to Space, especially Galaxies.",
        dust: "dust is a term or object connected to Space, especially Galaxies.",
        rover: "rover is a term or object connected to Space, especially Galaxies.",
        ignite: "ignite is an action connected to Space, especially Galaxies.",
        measure: "measure is an action connected to Space, especially Galaxies.",
        land: "land is an action connected to Space, especially Galaxies.",
        shine: "shine is an action connected to Space, especially Galaxies.",
        explore: "explore is an action connected to Space, especially Galaxies.",
        cold: "cold is a description or mood connected to Space, especially Galaxies.",
        hopeful: "hopeful is a description or mood connected to Space, especially Galaxies.",
        distant: "distant is a description or mood connected to Space, especially Galaxies.",
        silent: "silent is a description or mood connected to Space, especially Galaxies.",
        cosmic: "cosmic is a description or mood connected to Space, especially Galaxies.",
        bright: "bright is a description or mood connected to Space, especially Galaxies.",
        slowly: "slowly is a way something happens connected to Space, especially Galaxies.",
        silently: "silently is a way something happens connected to Space, especially Galaxies.",
        carefully: "carefully is a way something happens connected to Space, especially Galaxies.",
        boldly: "boldly is a way something happens connected to Space, especially Galaxies.",
        brightly: "brightly is a way something happens connected to Space, especially Galaxies."
      },
      templates: [
        {
          id: "space_places_5_0",
          role: "places",
          text: "The mission reached the {target}.",
          tags: [
            "places",
            "galaxies"
          ]
        },
        {
          id: "space_places_5_1",
          role: "places",
          text: "The telescope pointed toward the {target}.",
          tags: [
            "places",
            "galaxies"
          ]
        },
        {
          id: "space_people_5_0",
          role: "people",
          text: "The capsule was entered by the {target}.",
          tags: [
            "people",
            "galaxies"
          ]
        },
        {
          id: "space_people_5_1",
          role: "people",
          text: "The mission report named the {target}.",
          tags: [
            "people",
            "galaxies"
          ]
        },
        {
          id: "space_objects_5_0",
          role: "objects",
          text: "The observatory captured the {target}.",
          tags: [
            "objects",
            "galaxies"
          ]
        },
        {
          id: "space_objects_5_1",
          role: "objects",
          text: "The mission reached the {target}.",
          tags: [
            "objects",
            "galaxies"
          ]
        },
        {
          id: "space_actions_5_0",
          role: "actions",
          text: "The astronaut had to {target}.",
          tags: [
            "actions",
            "galaxies"
          ]
        },
        {
          id: "space_actions_5_1",
          role: "actions",
          text: "The rocket started to {target}.",
          tags: [
            "actions",
            "galaxies"
          ]
        },
        {
          id: "space_moods_5_0",
          role: "moods",
          text: "The planet looked {target}.",
          tags: [
            "moods",
            "galaxies"
          ]
        },
        {
          id: "space_moods_5_1",
          role: "moods",
          text: "The mission became {target}.",
          tags: [
            "moods",
            "galaxies"
          ]
        },
        {
          id: "space_adverbs_5_0",
          role: "adverbs",
          text: "The probe drifted {target}.",
          tags: [
            "adverbs",
            "galaxies"
          ]
        },
        {
          id: "space_adverbs_5_1",
          role: "adverbs",
          text: "The astronaut moved {target}.",
          tags: [
            "adverbs",
            "galaxies"
          ]
        }
      ]
    }
  ]
});
