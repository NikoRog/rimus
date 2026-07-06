import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "sports",
  name: "Sports",
  theme: "competition, rules, teams, equipment, and athletic skill",
  nodes: [
    {
      id: "sports_football",
      topic: "Football",
      scene: "football pitch",
      people: [
        "striker",
        "keeper",
        "coach",
        "guard",
        "center",
        "rookie"
      ],
      places: [
        "field",
        "stadium",
        "goal",
        "court",
        "arena",
        "bench"
      ],
      objects: [
        "ball",
        "net",
        "whistle",
        "hoop",
        "rim",
        "glove"
      ],
      actions: [
        "kick",
        "score",
        "defend",
        "shoot",
        "dribble",
        "dunk"
      ],
      moods: [
        "fast",
        "clutch",
        "strong",
        "focused",
        "competitive",
        "tense"
      ],
      adverbs: [
        "quickly",
        "fairly",
        "boldly",
        "smoothly",
        "sharply"
      ],
      facts: [
        "Football belongs to Sports: competition, rules, teams, equipment, and athletic skill.",
        "football pitch gives Sports prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        field: "field is a place or setting connected to Sports, especially Football.",
        stadium: "stadium is a place or setting connected to Sports, especially Football.",
        goal: "goal is a place or setting connected to Sports, especially Football.",
        court: "court is a place or setting connected to Sports, especially Football.",
        arena: "arena is a place or setting connected to Sports, especially Football.",
        bench: "bench is a place or setting connected to Sports, especially Football.",
        striker: "striker is a person or role connected to Sports, especially Football.",
        keeper: "keeper is a person or role connected to Sports, especially Football.",
        coach: "coach is a person or role connected to Sports, especially Football.",
        guard: "guard is a person or role connected to Sports, especially Football.",
        center: "center is a person or role connected to Sports, especially Football.",
        rookie: "rookie is a person or role connected to Sports, especially Football.",
        ball: "ball is a term or object connected to Sports, especially Football.",
        net: "net is a term or object connected to Sports, especially Football.",
        whistle: "whistle is a term or object connected to Sports, especially Football.",
        hoop: "hoop is a term or object connected to Sports, especially Football.",
        rim: "rim is a term or object connected to Sports, especially Football.",
        glove: "glove is a term or object connected to Sports, especially Football.",
        kick: "kick is an action connected to Sports, especially Football.",
        score: "score is an action connected to Sports, especially Football.",
        defend: "defend is an action connected to Sports, especially Football.",
        shoot: "shoot is an action connected to Sports, especially Football.",
        dribble: "dribble is an action connected to Sports, especially Football.",
        dunk: "dunk is an action connected to Sports, especially Football.",
        fast: "fast is a description or mood connected to Sports, especially Football.",
        clutch: "clutch is a description or mood connected to Sports, especially Football.",
        strong: "strong is a description or mood connected to Sports, especially Football.",
        focused: "focused is a description or mood connected to Sports, especially Football.",
        competitive: "competitive is a description or mood connected to Sports, especially Football.",
        tense: "tense is a description or mood connected to Sports, especially Football.",
        quickly: "quickly is a way something happens connected to Sports, especially Football.",
        fairly: "fairly is a way something happens connected to Sports, especially Football.",
        boldly: "boldly is a way something happens connected to Sports, especially Football.",
        smoothly: "smoothly is a way something happens connected to Sports, especially Football.",
        sharply: "sharply is a way something happens connected to Sports, especially Football."
      },
      templates: [
        {
          id: "sports_places_0_0",
          role: "places",
          text: "The athlete competed at the {target}.",
          tags: [
            "places",
            "football"
          ]
        },
        {
          id: "sports_places_0_1",
          role: "places",
          text: "The referee watched play from the {target}.",
          tags: [
            "places",
            "football"
          ]
        },
        {
          id: "sports_people_0_0",
          role: "people",
          text: "The tactic was changed by the {target}.",
          tags: [
            "people",
            "football"
          ]
        },
        {
          id: "sports_people_0_1",
          role: "people",
          text: "The ball was passed to the {target}.",
          tags: [
            "people",
            "football"
          ]
        },
        {
          id: "sports_objects_0_0",
          role: "objects",
          text: "The referee watched the {target}.",
          tags: [
            "objects",
            "football"
          ]
        },
        {
          id: "sports_objects_0_1",
          role: "objects",
          text: "The player chased the {target}.",
          tags: [
            "objects",
            "football"
          ]
        },
        {
          id: "sports_actions_0_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "football"
          ]
        },
        {
          id: "sports_actions_0_1",
          role: "actions",
          text: "The coach told the team to {target}.",
          tags: [
            "actions",
            "football"
          ]
        },
        {
          id: "sports_moods_0_0",
          role: "moods",
          text: "The final match felt {target}.",
          tags: [
            "moods",
            "football"
          ]
        },
        {
          id: "sports_moods_0_1",
          role: "moods",
          text: "The crowd became {target}.",
          tags: [
            "moods",
            "football"
          ]
        },
        {
          id: "sports_adverbs_0_0",
          role: "adverbs",
          text: "The runner finished {target}.",
          tags: [
            "adverbs",
            "football"
          ]
        },
        {
          id: "sports_adverbs_0_1",
          role: "adverbs",
          text: "The boxer stepped {target}.",
          tags: [
            "adverbs",
            "football"
          ]
        }
      ]
    },
    {
      id: "sports_basketball",
      topic: "Basketball",
      scene: "basketball court",
      people: [
        "coach",
        "guard",
        "center",
        "rookie",
        "referee",
        "boxer"
      ],
      places: [
        "goal",
        "court",
        "arena",
        "bench",
        "ring",
        "track"
      ],
      objects: [
        "whistle",
        "hoop",
        "rim",
        "glove",
        "helmet",
        "trophy"
      ],
      actions: [
        "defend",
        "shoot",
        "dribble",
        "dunk",
        "punch",
        "race"
      ],
      moods: [
        "strong",
        "focused",
        "competitive",
        "tense",
        "explosive",
        "fair"
      ],
      adverbs: [
        "boldly",
        "smoothly",
        "sharply",
        "steadily",
        "powerfully"
      ],
      facts: [
        "Basketball belongs to Sports: competition, rules, teams, equipment, and athletic skill.",
        "basketball court gives Sports prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        goal: "goal is a place or setting connected to Sports, especially Basketball.",
        court: "court is a place or setting connected to Sports, especially Basketball.",
        arena: "arena is a place or setting connected to Sports, especially Basketball.",
        bench: "bench is a place or setting connected to Sports, especially Basketball.",
        ring: "ring is a place or setting connected to Sports, especially Basketball.",
        track: "track is a place or setting connected to Sports, especially Basketball.",
        coach: "coach is a person or role connected to Sports, especially Basketball.",
        guard: "guard is a person or role connected to Sports, especially Basketball.",
        center: "center is a person or role connected to Sports, especially Basketball.",
        rookie: "rookie is a person or role connected to Sports, especially Basketball.",
        referee: "referee is a person or role connected to Sports, especially Basketball.",
        boxer: "boxer is a person or role connected to Sports, especially Basketball.",
        whistle: "whistle is a term or object connected to Sports, especially Basketball.",
        hoop: "hoop is a term or object connected to Sports, especially Basketball.",
        rim: "rim is a term or object connected to Sports, especially Basketball.",
        glove: "glove is a term or object connected to Sports, especially Basketball.",
        helmet: "helmet is a term or object connected to Sports, especially Basketball.",
        trophy: "trophy is a term or object connected to Sports, especially Basketball.",
        defend: "defend is an action connected to Sports, especially Basketball.",
        shoot: "shoot is an action connected to Sports, especially Basketball.",
        dribble: "dribble is an action connected to Sports, especially Basketball.",
        dunk: "dunk is an action connected to Sports, especially Basketball.",
        punch: "punch is an action connected to Sports, especially Basketball.",
        race: "race is an action connected to Sports, especially Basketball.",
        strong: "strong is a description or mood connected to Sports, especially Basketball.",
        focused: "focused is a description or mood connected to Sports, especially Basketball.",
        competitive: "competitive is a description or mood connected to Sports, especially Basketball.",
        tense: "tense is a description or mood connected to Sports, especially Basketball.",
        explosive: "explosive is a description or mood connected to Sports, especially Basketball.",
        fair: "fair is a description or mood connected to Sports, especially Basketball.",
        boldly: "boldly is a way something happens connected to Sports, especially Basketball.",
        smoothly: "smoothly is a way something happens connected to Sports, especially Basketball.",
        sharply: "sharply is a way something happens connected to Sports, especially Basketball.",
        steadily: "steadily is a way something happens connected to Sports, especially Basketball.",
        powerfully: "powerfully is a way something happens connected to Sports, especially Basketball."
      },
      templates: [
        {
          id: "sports_places_1_0",
          role: "places",
          text: "The athlete competed at the {target}.",
          tags: [
            "places",
            "basketball"
          ]
        },
        {
          id: "sports_places_1_1",
          role: "places",
          text: "The referee watched play from the {target}.",
          tags: [
            "places",
            "basketball"
          ]
        },
        {
          id: "sports_people_1_0",
          role: "people",
          text: "The tactic was changed by the {target}.",
          tags: [
            "people",
            "basketball"
          ]
        },
        {
          id: "sports_people_1_1",
          role: "people",
          text: "The ball was passed to the {target}.",
          tags: [
            "people",
            "basketball"
          ]
        },
        {
          id: "sports_objects_1_0",
          role: "objects",
          text: "The referee watched the {target}.",
          tags: [
            "objects",
            "basketball"
          ]
        },
        {
          id: "sports_objects_1_1",
          role: "objects",
          text: "The player chased the {target}.",
          tags: [
            "objects",
            "basketball"
          ]
        },
        {
          id: "sports_actions_1_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "basketball"
          ]
        },
        {
          id: "sports_actions_1_1",
          role: "actions",
          text: "The coach told the team to {target}.",
          tags: [
            "actions",
            "basketball"
          ]
        },
        {
          id: "sports_moods_1_0",
          role: "moods",
          text: "The final match felt {target}.",
          tags: [
            "moods",
            "basketball"
          ]
        },
        {
          id: "sports_moods_1_1",
          role: "moods",
          text: "The crowd became {target}.",
          tags: [
            "moods",
            "basketball"
          ]
        },
        {
          id: "sports_adverbs_1_0",
          role: "adverbs",
          text: "The runner finished {target}.",
          tags: [
            "adverbs",
            "basketball"
          ]
        },
        {
          id: "sports_adverbs_1_1",
          role: "adverbs",
          text: "The boxer stepped {target}.",
          tags: [
            "adverbs",
            "basketball"
          ]
        }
      ]
    },
    {
      id: "sports_tennis",
      topic: "Tennis",
      scene: "tennis court",
      people: [
        "center",
        "rookie",
        "referee",
        "boxer",
        "runner",
        "captain"
      ],
      places: [
        "arena",
        "bench",
        "ring",
        "track",
        "pool",
        "pitch"
      ],
      objects: [
        "rim",
        "glove",
        "helmet",
        "trophy",
        "jersey",
        "racket"
      ],
      actions: [
        "dribble",
        "dunk",
        "punch",
        "race",
        "serve",
        "pass"
      ],
      moods: [
        "competitive",
        "tense",
        "explosive",
        "fair",
        "strategic",
        "tired"
      ],
      adverbs: [
        "sharply",
        "steadily",
        "powerfully",
        "carefully",
        "wildly"
      ],
      facts: [
        "Tennis belongs to Sports: competition, rules, teams, equipment, and athletic skill.",
        "tennis court gives Sports prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        arena: "arena is a place or setting connected to Sports, especially Tennis.",
        bench: "bench is a place or setting connected to Sports, especially Tennis.",
        ring: "ring is a place or setting connected to Sports, especially Tennis.",
        track: "track is a place or setting connected to Sports, especially Tennis.",
        pool: "pool is a place or setting connected to Sports, especially Tennis.",
        pitch: "pitch is a place or setting connected to Sports, especially Tennis.",
        center: "center is a person or role connected to Sports, especially Tennis.",
        rookie: "rookie is a person or role connected to Sports, especially Tennis.",
        referee: "referee is a person or role connected to Sports, especially Tennis.",
        boxer: "boxer is a person or role connected to Sports, especially Tennis.",
        runner: "runner is a person or role connected to Sports, especially Tennis.",
        captain: "captain is a person or role connected to Sports, especially Tennis.",
        rim: "rim is a term or object connected to Sports, especially Tennis.",
        glove: "glove is a term or object connected to Sports, especially Tennis.",
        helmet: "helmet is a term or object connected to Sports, especially Tennis.",
        trophy: "trophy is a term or object connected to Sports, especially Tennis.",
        jersey: "jersey is a term or object connected to Sports, especially Tennis.",
        racket: "racket is a term or object connected to Sports, especially Tennis.",
        dribble: "dribble is an action connected to Sports, especially Tennis.",
        dunk: "dunk is an action connected to Sports, especially Tennis.",
        punch: "punch is an action connected to Sports, especially Tennis.",
        race: "race is an action connected to Sports, especially Tennis.",
        serve: "serve is an action connected to Sports, especially Tennis.",
        pass: "pass is an action connected to Sports, especially Tennis.",
        competitive: "competitive is a description or mood connected to Sports, especially Tennis.",
        tense: "tense is a description or mood connected to Sports, especially Tennis.",
        explosive: "explosive is a description or mood connected to Sports, especially Tennis.",
        fair: "fair is a description or mood connected to Sports, especially Tennis.",
        strategic: "strategic is a description or mood connected to Sports, especially Tennis.",
        tired: "tired is a description or mood connected to Sports, especially Tennis.",
        sharply: "sharply is a way something happens connected to Sports, especially Tennis.",
        steadily: "steadily is a way something happens connected to Sports, especially Tennis.",
        powerfully: "powerfully is a way something happens connected to Sports, especially Tennis.",
        carefully: "carefully is a way something happens connected to Sports, especially Tennis.",
        wildly: "wildly is a way something happens connected to Sports, especially Tennis."
      },
      templates: [
        {
          id: "sports_places_2_0",
          role: "places",
          text: "The athlete competed at the {target}.",
          tags: [
            "places",
            "tennis"
          ]
        },
        {
          id: "sports_places_2_1",
          role: "places",
          text: "The referee watched play from the {target}.",
          tags: [
            "places",
            "tennis"
          ]
        },
        {
          id: "sports_people_2_0",
          role: "people",
          text: "The tactic was changed by the {target}.",
          tags: [
            "people",
            "tennis"
          ]
        },
        {
          id: "sports_people_2_1",
          role: "people",
          text: "The ball was passed to the {target}.",
          tags: [
            "people",
            "tennis"
          ]
        },
        {
          id: "sports_objects_2_0",
          role: "objects",
          text: "The referee watched the {target}.",
          tags: [
            "objects",
            "tennis"
          ]
        },
        {
          id: "sports_objects_2_1",
          role: "objects",
          text: "The player chased the {target}.",
          tags: [
            "objects",
            "tennis"
          ]
        },
        {
          id: "sports_actions_2_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "tennis"
          ]
        },
        {
          id: "sports_actions_2_1",
          role: "actions",
          text: "The coach told the team to {target}.",
          tags: [
            "actions",
            "tennis"
          ]
        },
        {
          id: "sports_moods_2_0",
          role: "moods",
          text: "The final match felt {target}.",
          tags: [
            "moods",
            "tennis"
          ]
        },
        {
          id: "sports_moods_2_1",
          role: "moods",
          text: "The crowd became {target}.",
          tags: [
            "moods",
            "tennis"
          ]
        },
        {
          id: "sports_adverbs_2_0",
          role: "adverbs",
          text: "The runner finished {target}.",
          tags: [
            "adverbs",
            "tennis"
          ]
        },
        {
          id: "sports_adverbs_2_1",
          role: "adverbs",
          text: "The boxer stepped {target}.",
          tags: [
            "adverbs",
            "tennis"
          ]
        }
      ]
    },
    {
      id: "sports_boxing",
      topic: "Boxing",
      scene: "boxing ring",
      people: [
        "referee",
        "boxer",
        "runner",
        "captain",
        "racer",
        "teammate"
      ],
      places: [
        "ring",
        "track",
        "pool",
        "pitch",
        "lane",
        "gym"
      ],
      objects: [
        "helmet",
        "trophy",
        "jersey",
        "racket",
        "boot",
        "timer"
      ],
      actions: [
        "punch",
        "race",
        "serve",
        "pass",
        "block",
        "train"
      ],
      moods: [
        "explosive",
        "fair",
        "strategic",
        "tired",
        "victorious",
        "sharp"
      ],
      adverbs: [
        "powerfully",
        "carefully",
        "wildly",
        "cleanly",
        "quickly"
      ],
      facts: [
        "Boxing belongs to Sports: competition, rules, teams, equipment, and athletic skill.",
        "boxing ring gives Sports prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        ring: "ring is a place or setting connected to Sports, especially Boxing.",
        track: "track is a place or setting connected to Sports, especially Boxing.",
        pool: "pool is a place or setting connected to Sports, especially Boxing.",
        pitch: "pitch is a place or setting connected to Sports, especially Boxing.",
        lane: "lane is a place or setting connected to Sports, especially Boxing.",
        gym: "gym is a place or setting connected to Sports, especially Boxing.",
        referee: "referee is a person or role connected to Sports, especially Boxing.",
        boxer: "boxer is a person or role connected to Sports, especially Boxing.",
        runner: "runner is a person or role connected to Sports, especially Boxing.",
        captain: "captain is a person or role connected to Sports, especially Boxing.",
        racer: "racer is a person or role connected to Sports, especially Boxing.",
        teammate: "teammate is a person or role connected to Sports, especially Boxing.",
        helmet: "helmet is a term or object connected to Sports, especially Boxing.",
        trophy: "trophy is a term or object connected to Sports, especially Boxing.",
        jersey: "jersey is a term or object connected to Sports, especially Boxing.",
        racket: "racket is a term or object connected to Sports, especially Boxing.",
        boot: "boot is a term or object connected to Sports, especially Boxing.",
        timer: "timer is a term or object connected to Sports, especially Boxing.",
        punch: "punch is an action connected to Sports, especially Boxing.",
        race: "race is an action connected to Sports, especially Boxing.",
        serve: "serve is an action connected to Sports, especially Boxing.",
        pass: "pass is an action connected to Sports, especially Boxing.",
        block: "block is an action connected to Sports, especially Boxing.",
        train: "train is an action connected to Sports, especially Boxing.",
        explosive: "explosive is a description or mood connected to Sports, especially Boxing.",
        fair: "fair is a description or mood connected to Sports, especially Boxing.",
        strategic: "strategic is a description or mood connected to Sports, especially Boxing.",
        tired: "tired is a description or mood connected to Sports, especially Boxing.",
        victorious: "victorious is a description or mood connected to Sports, especially Boxing.",
        sharp: "sharp is a description or mood connected to Sports, especially Boxing.",
        powerfully: "powerfully is a way something happens connected to Sports, especially Boxing.",
        carefully: "carefully is a way something happens connected to Sports, especially Boxing.",
        wildly: "wildly is a way something happens connected to Sports, especially Boxing.",
        cleanly: "cleanly is a way something happens connected to Sports, especially Boxing.",
        quickly: "quickly is a way something happens connected to Sports, especially Boxing."
      },
      templates: [
        {
          id: "sports_places_3_0",
          role: "places",
          text: "The athlete competed at the {target}.",
          tags: [
            "places",
            "boxing"
          ]
        },
        {
          id: "sports_places_3_1",
          role: "places",
          text: "The referee watched play from the {target}.",
          tags: [
            "places",
            "boxing"
          ]
        },
        {
          id: "sports_people_3_0",
          role: "people",
          text: "The tactic was changed by the {target}.",
          tags: [
            "people",
            "boxing"
          ]
        },
        {
          id: "sports_people_3_1",
          role: "people",
          text: "The ball was passed to the {target}.",
          tags: [
            "people",
            "boxing"
          ]
        },
        {
          id: "sports_objects_3_0",
          role: "objects",
          text: "The referee watched the {target}.",
          tags: [
            "objects",
            "boxing"
          ]
        },
        {
          id: "sports_objects_3_1",
          role: "objects",
          text: "The player chased the {target}.",
          tags: [
            "objects",
            "boxing"
          ]
        },
        {
          id: "sports_actions_3_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "boxing"
          ]
        },
        {
          id: "sports_actions_3_1",
          role: "actions",
          text: "The coach told the team to {target}.",
          tags: [
            "actions",
            "boxing"
          ]
        },
        {
          id: "sports_moods_3_0",
          role: "moods",
          text: "The final match felt {target}.",
          tags: [
            "moods",
            "boxing"
          ]
        },
        {
          id: "sports_moods_3_1",
          role: "moods",
          text: "The crowd became {target}.",
          tags: [
            "moods",
            "boxing"
          ]
        },
        {
          id: "sports_adverbs_3_0",
          role: "adverbs",
          text: "The runner finished {target}.",
          tags: [
            "adverbs",
            "boxing"
          ]
        },
        {
          id: "sports_adverbs_3_1",
          role: "adverbs",
          text: "The boxer stepped {target}.",
          tags: [
            "adverbs",
            "boxing"
          ]
        }
      ]
    },
    {
      id: "sports_racing",
      topic: "Racing",
      scene: "race track",
      people: [
        "runner",
        "captain",
        "racer",
        "teammate",
        "striker",
        "keeper"
      ],
      places: [
        "pool",
        "pitch",
        "lane",
        "gym",
        "field",
        "stadium"
      ],
      objects: [
        "jersey",
        "racket",
        "boot",
        "timer",
        "ball",
        "net"
      ],
      actions: [
        "serve",
        "pass",
        "block",
        "train",
        "kick",
        "score"
      ],
      moods: [
        "strategic",
        "tired",
        "victorious",
        "sharp",
        "fast",
        "clutch"
      ],
      adverbs: [
        "wildly",
        "cleanly",
        "quickly",
        "fairly",
        "boldly"
      ],
      facts: [
        "Racing belongs to Sports: competition, rules, teams, equipment, and athletic skill.",
        "race track gives Sports prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        pool: "pool is a place or setting connected to Sports, especially Racing.",
        pitch: "pitch is a place or setting connected to Sports, especially Racing.",
        lane: "lane is a place or setting connected to Sports, especially Racing.",
        gym: "gym is a place or setting connected to Sports, especially Racing.",
        field: "field is a place or setting connected to Sports, especially Racing.",
        stadium: "stadium is a place or setting connected to Sports, especially Racing.",
        runner: "runner is a person or role connected to Sports, especially Racing.",
        captain: "captain is a person or role connected to Sports, especially Racing.",
        racer: "racer is a person or role connected to Sports, especially Racing.",
        teammate: "teammate is a person or role connected to Sports, especially Racing.",
        striker: "striker is a person or role connected to Sports, especially Racing.",
        keeper: "keeper is a person or role connected to Sports, especially Racing.",
        jersey: "jersey is a term or object connected to Sports, especially Racing.",
        racket: "racket is a term or object connected to Sports, especially Racing.",
        boot: "boot is a term or object connected to Sports, especially Racing.",
        timer: "timer is a term or object connected to Sports, especially Racing.",
        ball: "ball is a term or object connected to Sports, especially Racing.",
        net: "net is a term or object connected to Sports, especially Racing.",
        serve: "serve is an action connected to Sports, especially Racing.",
        pass: "pass is an action connected to Sports, especially Racing.",
        block: "block is an action connected to Sports, especially Racing.",
        train: "train is an action connected to Sports, especially Racing.",
        kick: "kick is an action connected to Sports, especially Racing.",
        score: "score is an action connected to Sports, especially Racing.",
        strategic: "strategic is a description or mood connected to Sports, especially Racing.",
        tired: "tired is a description or mood connected to Sports, especially Racing.",
        victorious: "victorious is a description or mood connected to Sports, especially Racing.",
        sharp: "sharp is a description or mood connected to Sports, especially Racing.",
        fast: "fast is a description or mood connected to Sports, especially Racing.",
        clutch: "clutch is a description or mood connected to Sports, especially Racing.",
        wildly: "wildly is a way something happens connected to Sports, especially Racing.",
        cleanly: "cleanly is a way something happens connected to Sports, especially Racing.",
        quickly: "quickly is a way something happens connected to Sports, especially Racing.",
        fairly: "fairly is a way something happens connected to Sports, especially Racing.",
        boldly: "boldly is a way something happens connected to Sports, especially Racing."
      },
      templates: [
        {
          id: "sports_places_4_0",
          role: "places",
          text: "The athlete competed at the {target}.",
          tags: [
            "places",
            "racing"
          ]
        },
        {
          id: "sports_places_4_1",
          role: "places",
          text: "The referee watched play from the {target}.",
          tags: [
            "places",
            "racing"
          ]
        },
        {
          id: "sports_people_4_0",
          role: "people",
          text: "The tactic was changed by the {target}.",
          tags: [
            "people",
            "racing"
          ]
        },
        {
          id: "sports_people_4_1",
          role: "people",
          text: "The ball was passed to the {target}.",
          tags: [
            "people",
            "racing"
          ]
        },
        {
          id: "sports_objects_4_0",
          role: "objects",
          text: "The referee watched the {target}.",
          tags: [
            "objects",
            "racing"
          ]
        },
        {
          id: "sports_objects_4_1",
          role: "objects",
          text: "The player chased the {target}.",
          tags: [
            "objects",
            "racing"
          ]
        },
        {
          id: "sports_actions_4_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "racing"
          ]
        },
        {
          id: "sports_actions_4_1",
          role: "actions",
          text: "The coach told the team to {target}.",
          tags: [
            "actions",
            "racing"
          ]
        },
        {
          id: "sports_moods_4_0",
          role: "moods",
          text: "The final match felt {target}.",
          tags: [
            "moods",
            "racing"
          ]
        },
        {
          id: "sports_moods_4_1",
          role: "moods",
          text: "The crowd became {target}.",
          tags: [
            "moods",
            "racing"
          ]
        },
        {
          id: "sports_adverbs_4_0",
          role: "adverbs",
          text: "The runner finished {target}.",
          tags: [
            "adverbs",
            "racing"
          ]
        },
        {
          id: "sports_adverbs_4_1",
          role: "adverbs",
          text: "The boxer stepped {target}.",
          tags: [
            "adverbs",
            "racing"
          ]
        }
      ]
    },
    {
      id: "sports_training",
      topic: "Training",
      scene: "training field",
      people: [
        "racer",
        "teammate",
        "striker",
        "keeper",
        "coach",
        "guard"
      ],
      places: [
        "lane",
        "gym",
        "field",
        "stadium",
        "goal",
        "court"
      ],
      objects: [
        "boot",
        "timer",
        "ball",
        "net",
        "whistle",
        "hoop"
      ],
      actions: [
        "block",
        "train",
        "kick",
        "score",
        "defend",
        "shoot"
      ],
      moods: [
        "victorious",
        "sharp",
        "fast",
        "clutch",
        "strong",
        "focused"
      ],
      adverbs: [
        "quickly",
        "fairly",
        "boldly",
        "smoothly",
        "sharply"
      ],
      facts: [
        "Training belongs to Sports: competition, rules, teams, equipment, and athletic skill.",
        "training field gives Sports prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        lane: "lane is a place or setting connected to Sports, especially Training.",
        gym: "gym is a place or setting connected to Sports, especially Training.",
        field: "field is a place or setting connected to Sports, especially Training.",
        stadium: "stadium is a place or setting connected to Sports, especially Training.",
        goal: "goal is a place or setting connected to Sports, especially Training.",
        court: "court is a place or setting connected to Sports, especially Training.",
        racer: "racer is a person or role connected to Sports, especially Training.",
        teammate: "teammate is a person or role connected to Sports, especially Training.",
        striker: "striker is a person or role connected to Sports, especially Training.",
        keeper: "keeper is a person or role connected to Sports, especially Training.",
        coach: "coach is a person or role connected to Sports, especially Training.",
        guard: "guard is a person or role connected to Sports, especially Training.",
        boot: "boot is a term or object connected to Sports, especially Training.",
        timer: "timer is a term or object connected to Sports, especially Training.",
        ball: "ball is a term or object connected to Sports, especially Training.",
        net: "net is a term or object connected to Sports, especially Training.",
        whistle: "whistle is a term or object connected to Sports, especially Training.",
        hoop: "hoop is a term or object connected to Sports, especially Training.",
        block: "block is an action connected to Sports, especially Training.",
        train: "train is an action connected to Sports, especially Training.",
        kick: "kick is an action connected to Sports, especially Training.",
        score: "score is an action connected to Sports, especially Training.",
        defend: "defend is an action connected to Sports, especially Training.",
        shoot: "shoot is an action connected to Sports, especially Training.",
        victorious: "victorious is a description or mood connected to Sports, especially Training.",
        sharp: "sharp is a description or mood connected to Sports, especially Training.",
        fast: "fast is a description or mood connected to Sports, especially Training.",
        clutch: "clutch is a description or mood connected to Sports, especially Training.",
        strong: "strong is a description or mood connected to Sports, especially Training.",
        focused: "focused is a description or mood connected to Sports, especially Training.",
        quickly: "quickly is a way something happens connected to Sports, especially Training.",
        fairly: "fairly is a way something happens connected to Sports, especially Training.",
        boldly: "boldly is a way something happens connected to Sports, especially Training.",
        smoothly: "smoothly is a way something happens connected to Sports, especially Training.",
        sharply: "sharply is a way something happens connected to Sports, especially Training."
      },
      templates: [
        {
          id: "sports_places_5_0",
          role: "places",
          text: "The athlete competed at the {target}.",
          tags: [
            "places",
            "training"
          ]
        },
        {
          id: "sports_places_5_1",
          role: "places",
          text: "The referee watched play from the {target}.",
          tags: [
            "places",
            "training"
          ]
        },
        {
          id: "sports_people_5_0",
          role: "people",
          text: "The tactic was changed by the {target}.",
          tags: [
            "people",
            "training"
          ]
        },
        {
          id: "sports_people_5_1",
          role: "people",
          text: "The ball was passed to the {target}.",
          tags: [
            "people",
            "training"
          ]
        },
        {
          id: "sports_objects_5_0",
          role: "objects",
          text: "The referee watched the {target}.",
          tags: [
            "objects",
            "training"
          ]
        },
        {
          id: "sports_objects_5_1",
          role: "objects",
          text: "The player chased the {target}.",
          tags: [
            "objects",
            "training"
          ]
        },
        {
          id: "sports_actions_5_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "training"
          ]
        },
        {
          id: "sports_actions_5_1",
          role: "actions",
          text: "The coach told the team to {target}.",
          tags: [
            "actions",
            "training"
          ]
        },
        {
          id: "sports_moods_5_0",
          role: "moods",
          text: "The final match felt {target}.",
          tags: [
            "moods",
            "training"
          ]
        },
        {
          id: "sports_moods_5_1",
          role: "moods",
          text: "The crowd became {target}.",
          tags: [
            "moods",
            "training"
          ]
        },
        {
          id: "sports_adverbs_5_0",
          role: "adverbs",
          text: "The runner finished {target}.",
          tags: [
            "adverbs",
            "training"
          ]
        },
        {
          id: "sports_adverbs_5_1",
          role: "adverbs",
          text: "The boxer stepped {target}.",
          tags: [
            "adverbs",
            "training"
          ]
        }
      ]
    }
  ]
});
