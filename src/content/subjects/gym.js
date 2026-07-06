import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "gym",
  name: "Gym",
  theme: "training, muscles, recovery, and exercise habits",
  nodes: [
    {
      id: "gym_strength",
      topic: "Strength",
      scene: "weight room",
      people: [
        "coach",
        "lifter",
        "trainer",
        "athlete",
        "beginner",
        "boxer"
      ],
      places: [
        "gym",
        "rack",
        "floor",
        "mat",
        "studio",
        "ring"
      ],
      objects: [
        "barbell",
        "weight",
        "knee",
        "timer",
        "elbow",
        "core"
      ],
      actions: [
        "squat",
        "brace",
        "push",
        "hold",
        "shake",
        "breathe"
      ],
      moods: [
        "focused",
        "strong",
        "tired",
        "steady",
        "sore",
        "explosive"
      ],
      adverbs: [
        "slowly",
        "steadily",
        "deeply",
        "quickly",
        "carefully"
      ],
      facts: [
        "Strength belongs to Gym: training, muscles, recovery, and exercise habits.",
        "weight room gives Gym prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        gym: "gym is a place or setting connected to Gym, especially Strength.",
        rack: "rack is a place or setting connected to Gym, especially Strength.",
        floor: "floor is a place or setting connected to Gym, especially Strength.",
        mat: "mat is a place or setting connected to Gym, especially Strength.",
        studio: "studio is a place or setting connected to Gym, especially Strength.",
        ring: "ring is a place or setting connected to Gym, especially Strength.",
        coach: "coach is a person or role connected to Gym, especially Strength.",
        lifter: "lifter is a person or role connected to Gym, especially Strength.",
        trainer: "trainer is a person or role connected to Gym, especially Strength.",
        athlete: "athlete is a person or role connected to Gym, especially Strength.",
        beginner: "beginner is a person or role connected to Gym, especially Strength.",
        boxer: "boxer is a person or role connected to Gym, especially Strength.",
        barbell: "barbell is a term or object connected to Gym, especially Strength.",
        weight: "weight is a term or object connected to Gym, especially Strength.",
        knee: "knee is a term or object connected to Gym, especially Strength.",
        timer: "timer is a term or object connected to Gym, especially Strength.",
        elbow: "elbow is a term or object connected to Gym, especially Strength.",
        core: "core is a term or object connected to Gym, especially Strength.",
        squat: "squat is an action connected to Gym, especially Strength.",
        brace: "brace is an action connected to Gym, especially Strength.",
        push: "push is an action connected to Gym, especially Strength.",
        hold: "hold is an action connected to Gym, especially Strength.",
        shake: "shake is an action connected to Gym, especially Strength.",
        breathe: "breathe is an action connected to Gym, especially Strength.",
        focused: "focused is a description or mood connected to Gym, especially Strength.",
        strong: "strong is a description or mood connected to Gym, especially Strength.",
        tired: "tired is a description or mood connected to Gym, especially Strength.",
        steady: "steady is a description or mood connected to Gym, especially Strength.",
        sore: "sore is a description or mood connected to Gym, especially Strength.",
        explosive: "explosive is a description or mood connected to Gym, especially Strength.",
        slowly: "slowly is a way something happens connected to Gym, especially Strength.",
        steadily: "steadily is a way something happens connected to Gym, especially Strength.",
        deeply: "deeply is a way something happens connected to Gym, especially Strength.",
        quickly: "quickly is a way something happens connected to Gym, especially Strength.",
        carefully: "carefully is a way something happens connected to Gym, especially Strength."
      },
      templates: [
        {
          id: "gym_places_0_0",
          role: "places",
          text: "The trainer corrected form near the {target}.",
          tags: [
            "places",
            "strength"
          ]
        },
        {
          id: "gym_places_0_1",
          role: "places",
          text: "The workout ended at the {target}.",
          tags: [
            "places",
            "strength"
          ]
        },
        {
          id: "gym_people_0_0",
          role: "people",
          text: "The timer was checked by the {target}.",
          tags: [
            "people",
            "strength"
          ]
        },
        {
          id: "gym_people_0_1",
          role: "people",
          text: "The squat was corrected by the {target}.",
          tags: [
            "people",
            "strength"
          ]
        },
        {
          id: "gym_objects_0_0",
          role: "objects",
          text: "The lifter used the {target}.",
          tags: [
            "objects",
            "strength"
          ]
        },
        {
          id: "gym_objects_0_1",
          role: "objects",
          text: "The biceps contracted during the {target}.",
          tags: [
            "objects",
            "strength"
          ]
        },
        {
          id: "gym_actions_0_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "strength"
          ]
        },
        {
          id: "gym_actions_0_1",
          role: "actions",
          text: "The trainer told the group to {target}.",
          tags: [
            "actions",
            "strength"
          ]
        },
        {
          id: "gym_moods_0_0",
          role: "moods",
          text: "The final set felt {target}.",
          tags: [
            "moods",
            "strength"
          ]
        },
        {
          id: "gym_moods_0_1",
          role: "moods",
          text: "The recovery session stayed {target}.",
          tags: [
            "moods",
            "strength"
          ]
        },
        {
          id: "gym_adverbs_0_0",
          role: "adverbs",
          text: "The runner moved {target}.",
          tags: [
            "adverbs",
            "strength"
          ]
        },
        {
          id: "gym_adverbs_0_1",
          role: "adverbs",
          text: "The lifter lowered the weight {target}.",
          tags: [
            "adverbs",
            "strength"
          ]
        }
      ]
    },
    {
      id: "gym_cardio",
      topic: "Cardio",
      scene: "running track",
      people: [
        "trainer",
        "athlete",
        "beginner",
        "boxer",
        "runner",
        "spotter"
      ],
      places: [
        "floor",
        "mat",
        "studio",
        "ring",
        "track",
        "platform"
      ],
      objects: [
        "knee",
        "timer",
        "elbow",
        "core",
        "glove",
        "rope"
      ],
      actions: [
        "push",
        "hold",
        "shake",
        "breathe",
        "jab",
        "spar"
      ],
      moods: [
        "tired",
        "steady",
        "sore",
        "explosive",
        "disciplined",
        "calm"
      ],
      adverbs: [
        "deeply",
        "quickly",
        "carefully",
        "smoothly",
        "lightly"
      ],
      facts: [
        "Cardio belongs to Gym: training, muscles, recovery, and exercise habits.",
        "running track gives Gym prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        floor: "floor is a place or setting connected to Gym, especially Cardio.",
        mat: "mat is a place or setting connected to Gym, especially Cardio.",
        studio: "studio is a place or setting connected to Gym, especially Cardio.",
        ring: "ring is a place or setting connected to Gym, especially Cardio.",
        track: "track is a place or setting connected to Gym, especially Cardio.",
        platform: "platform is a place or setting connected to Gym, especially Cardio.",
        trainer: "trainer is a person or role connected to Gym, especially Cardio.",
        athlete: "athlete is a person or role connected to Gym, especially Cardio.",
        beginner: "beginner is a person or role connected to Gym, especially Cardio.",
        boxer: "boxer is a person or role connected to Gym, especially Cardio.",
        runner: "runner is a person or role connected to Gym, especially Cardio.",
        spotter: "spotter is a person or role connected to Gym, especially Cardio.",
        knee: "knee is a term or object connected to Gym, especially Cardio.",
        timer: "timer is a term or object connected to Gym, especially Cardio.",
        elbow: "elbow is a term or object connected to Gym, especially Cardio.",
        core: "core is a term or object connected to Gym, especially Cardio.",
        glove: "glove is a term or object connected to Gym, especially Cardio.",
        rope: "rope is a term or object connected to Gym, especially Cardio.",
        push: "push is an action connected to Gym, especially Cardio.",
        hold: "hold is an action connected to Gym, especially Cardio.",
        shake: "shake is an action connected to Gym, especially Cardio.",
        breathe: "breathe is an action connected to Gym, especially Cardio.",
        jab: "jab is an action connected to Gym, especially Cardio.",
        spar: "spar is an action connected to Gym, especially Cardio.",
        tired: "tired is a description or mood connected to Gym, especially Cardio.",
        steady: "steady is a description or mood connected to Gym, especially Cardio.",
        sore: "sore is a description or mood connected to Gym, especially Cardio.",
        explosive: "explosive is a description or mood connected to Gym, especially Cardio.",
        disciplined: "disciplined is a description or mood connected to Gym, especially Cardio.",
        calm: "calm is a description or mood connected to Gym, especially Cardio.",
        deeply: "deeply is a way something happens connected to Gym, especially Cardio.",
        quickly: "quickly is a way something happens connected to Gym, especially Cardio.",
        carefully: "carefully is a way something happens connected to Gym, especially Cardio.",
        smoothly: "smoothly is a way something happens connected to Gym, especially Cardio.",
        lightly: "lightly is a way something happens connected to Gym, especially Cardio."
      },
      templates: [
        {
          id: "gym_places_1_0",
          role: "places",
          text: "The trainer corrected form near the {target}.",
          tags: [
            "places",
            "cardio"
          ]
        },
        {
          id: "gym_places_1_1",
          role: "places",
          text: "The workout ended at the {target}.",
          tags: [
            "places",
            "cardio"
          ]
        },
        {
          id: "gym_people_1_0",
          role: "people",
          text: "The timer was checked by the {target}.",
          tags: [
            "people",
            "cardio"
          ]
        },
        {
          id: "gym_people_1_1",
          role: "people",
          text: "The squat was corrected by the {target}.",
          tags: [
            "people",
            "cardio"
          ]
        },
        {
          id: "gym_objects_1_0",
          role: "objects",
          text: "The lifter used the {target}.",
          tags: [
            "objects",
            "cardio"
          ]
        },
        {
          id: "gym_objects_1_1",
          role: "objects",
          text: "The biceps contracted during the {target}.",
          tags: [
            "objects",
            "cardio"
          ]
        },
        {
          id: "gym_actions_1_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "cardio"
          ]
        },
        {
          id: "gym_actions_1_1",
          role: "actions",
          text: "The trainer told the group to {target}.",
          tags: [
            "actions",
            "cardio"
          ]
        },
        {
          id: "gym_moods_1_0",
          role: "moods",
          text: "The final set felt {target}.",
          tags: [
            "moods",
            "cardio"
          ]
        },
        {
          id: "gym_moods_1_1",
          role: "moods",
          text: "The recovery session stayed {target}.",
          tags: [
            "moods",
            "cardio"
          ]
        },
        {
          id: "gym_adverbs_1_0",
          role: "adverbs",
          text: "The runner moved {target}.",
          tags: [
            "adverbs",
            "cardio"
          ]
        },
        {
          id: "gym_adverbs_1_1",
          role: "adverbs",
          text: "The lifter lowered the weight {target}.",
          tags: [
            "adverbs",
            "cardio"
          ]
        }
      ]
    },
    {
      id: "gym_machines",
      topic: "Machines",
      scene: "machine area",
      people: [
        "beginner",
        "boxer",
        "runner",
        "spotter",
        "swimmer",
        "cyclist"
      ],
      places: [
        "studio",
        "ring",
        "track",
        "platform",
        "bench",
        "pool"
      ],
      objects: [
        "elbow",
        "core",
        "glove",
        "rope",
        "bell",
        "dumbbell"
      ],
      actions: [
        "shake",
        "breathe",
        "jab",
        "spar",
        "stretch",
        "curl"
      ],
      moods: [
        "sore",
        "explosive",
        "disciplined",
        "calm",
        "sharp",
        "driven"
      ],
      adverbs: [
        "carefully",
        "smoothly",
        "lightly",
        "powerfully",
        "strictly"
      ],
      facts: [
        "Machines belongs to Gym: training, muscles, recovery, and exercise habits.",
        "machine area gives Gym prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        studio: "studio is a place or setting connected to Gym, especially Machines.",
        ring: "ring is a place or setting connected to Gym, especially Machines.",
        track: "track is a place or setting connected to Gym, especially Machines.",
        platform: "platform is a place or setting connected to Gym, especially Machines.",
        bench: "bench is a place or setting connected to Gym, especially Machines.",
        pool: "pool is a place or setting connected to Gym, especially Machines.",
        beginner: "beginner is a person or role connected to Gym, especially Machines.",
        boxer: "boxer is a person or role connected to Gym, especially Machines.",
        runner: "runner is a person or role connected to Gym, especially Machines.",
        spotter: "spotter is a person or role connected to Gym, especially Machines.",
        swimmer: "swimmer is a person or role connected to Gym, especially Machines.",
        cyclist: "cyclist is a person or role connected to Gym, especially Machines.",
        elbow: "elbow is a term or object connected to Gym, especially Machines.",
        core: "core is a term or object connected to Gym, especially Machines.",
        glove: "glove is a term or object connected to Gym, especially Machines.",
        rope: "rope is a term or object connected to Gym, especially Machines.",
        bell: "bell is a term or object connected to Gym, especially Machines.",
        dumbbell: "dumbbell is a term or object connected to Gym, especially Machines.",
        shake: "shake is an action connected to Gym, especially Machines.",
        breathe: "breathe is an action connected to Gym, especially Machines.",
        jab: "jab is an action connected to Gym, especially Machines.",
        spar: "spar is an action connected to Gym, especially Machines.",
        stretch: "stretch is an action connected to Gym, especially Machines.",
        curl: "curl is an action connected to Gym, especially Machines.",
        sore: "sore is a description or mood connected to Gym, especially Machines.",
        explosive: "explosive is a description or mood connected to Gym, especially Machines.",
        disciplined: "disciplined is a description or mood connected to Gym, especially Machines.",
        calm: "calm is a description or mood connected to Gym, especially Machines.",
        sharp: "sharp is a description or mood connected to Gym, especially Machines.",
        driven: "driven is a description or mood connected to Gym, especially Machines.",
        carefully: "carefully is a way something happens connected to Gym, especially Machines.",
        smoothly: "smoothly is a way something happens connected to Gym, especially Machines.",
        lightly: "lightly is a way something happens connected to Gym, especially Machines.",
        powerfully: "powerfully is a way something happens connected to Gym, especially Machines.",
        strictly: "strictly is a way something happens connected to Gym, especially Machines."
      },
      templates: [
        {
          id: "gym_places_2_0",
          role: "places",
          text: "The trainer corrected form near the {target}.",
          tags: [
            "places",
            "machines"
          ]
        },
        {
          id: "gym_places_2_1",
          role: "places",
          text: "The workout ended at the {target}.",
          tags: [
            "places",
            "machines"
          ]
        },
        {
          id: "gym_people_2_0",
          role: "people",
          text: "The timer was checked by the {target}.",
          tags: [
            "people",
            "machines"
          ]
        },
        {
          id: "gym_people_2_1",
          role: "people",
          text: "The squat was corrected by the {target}.",
          tags: [
            "people",
            "machines"
          ]
        },
        {
          id: "gym_objects_2_0",
          role: "objects",
          text: "The lifter used the {target}.",
          tags: [
            "objects",
            "machines"
          ]
        },
        {
          id: "gym_objects_2_1",
          role: "objects",
          text: "The biceps contracted during the {target}.",
          tags: [
            "objects",
            "machines"
          ]
        },
        {
          id: "gym_actions_2_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "machines"
          ]
        },
        {
          id: "gym_actions_2_1",
          role: "actions",
          text: "The trainer told the group to {target}.",
          tags: [
            "actions",
            "machines"
          ]
        },
        {
          id: "gym_moods_2_0",
          role: "moods",
          text: "The final set felt {target}.",
          tags: [
            "moods",
            "machines"
          ]
        },
        {
          id: "gym_moods_2_1",
          role: "moods",
          text: "The recovery session stayed {target}.",
          tags: [
            "moods",
            "machines"
          ]
        },
        {
          id: "gym_adverbs_2_0",
          role: "adverbs",
          text: "The runner moved {target}.",
          tags: [
            "adverbs",
            "machines"
          ]
        },
        {
          id: "gym_adverbs_2_1",
          role: "adverbs",
          text: "The lifter lowered the weight {target}.",
          tags: [
            "adverbs",
            "machines"
          ]
        }
      ]
    },
    {
      id: "gym_muscles",
      topic: "Muscles",
      scene: "muscle chart",
      people: [
        "runner",
        "spotter",
        "swimmer",
        "cyclist",
        "rookie",
        "partner"
      ],
      places: [
        "track",
        "platform",
        "bench",
        "pool",
        "machine",
        "locker"
      ],
      objects: [
        "glove",
        "rope",
        "bell",
        "dumbbell",
        "treadmill",
        "band"
      ],
      actions: [
        "jab",
        "spar",
        "stretch",
        "curl",
        "row",
        "recover"
      ],
      moods: [
        "disciplined",
        "calm",
        "sharp",
        "driven",
        "balanced",
        "ready"
      ],
      adverbs: [
        "lightly",
        "powerfully",
        "strictly",
        "evenly",
        "slowly"
      ],
      facts: [
        "Muscles belongs to Gym: training, muscles, recovery, and exercise habits.",
        "muscle chart gives Gym prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        track: "track is a place or setting connected to Gym, especially Muscles.",
        platform: "platform is a place or setting connected to Gym, especially Muscles.",
        bench: "bench is a place or setting connected to Gym, especially Muscles.",
        pool: "pool is a place or setting connected to Gym, especially Muscles.",
        machine: "machine is a place or setting connected to Gym, especially Muscles.",
        locker: "locker is a place or setting connected to Gym, especially Muscles.",
        runner: "runner is a person or role connected to Gym, especially Muscles.",
        spotter: "spotter is a person or role connected to Gym, especially Muscles.",
        swimmer: "swimmer is a person or role connected to Gym, especially Muscles.",
        cyclist: "cyclist is a person or role connected to Gym, especially Muscles.",
        rookie: "rookie is a person or role connected to Gym, especially Muscles.",
        partner: "partner is a person or role connected to Gym, especially Muscles.",
        glove: "glove is a term or object connected to Gym, especially Muscles.",
        rope: "rope is a term or object connected to Gym, especially Muscles.",
        bell: "bell is a term or object connected to Gym, especially Muscles.",
        dumbbell: "dumbbell is a term or object connected to Gym, especially Muscles.",
        treadmill: "treadmill is a term or object connected to Gym, especially Muscles.",
        band: "band is a term or object connected to Gym, especially Muscles.",
        jab: "jab is an action connected to Gym, especially Muscles.",
        spar: "spar is an action connected to Gym, especially Muscles.",
        stretch: "stretch is an action connected to Gym, especially Muscles.",
        curl: "curl is an action connected to Gym, especially Muscles.",
        row: "row is an action connected to Gym, especially Muscles.",
        recover: "recover is an action connected to Gym, especially Muscles.",
        disciplined: "disciplined is a description or mood connected to Gym, especially Muscles.",
        calm: "calm is a description or mood connected to Gym, especially Muscles.",
        sharp: "sharp is a description or mood connected to Gym, especially Muscles.",
        driven: "driven is a description or mood connected to Gym, especially Muscles.",
        balanced: "balanced is a description or mood connected to Gym, especially Muscles.",
        ready: "ready is a description or mood connected to Gym, especially Muscles.",
        lightly: "lightly is a way something happens connected to Gym, especially Muscles.",
        powerfully: "powerfully is a way something happens connected to Gym, especially Muscles.",
        strictly: "strictly is a way something happens connected to Gym, especially Muscles.",
        evenly: "evenly is a way something happens connected to Gym, especially Muscles.",
        slowly: "slowly is a way something happens connected to Gym, especially Muscles."
      },
      templates: [
        {
          id: "gym_places_3_0",
          role: "places",
          text: "The trainer corrected form near the {target}.",
          tags: [
            "places",
            "muscles"
          ]
        },
        {
          id: "gym_places_3_1",
          role: "places",
          text: "The workout ended at the {target}.",
          tags: [
            "places",
            "muscles"
          ]
        },
        {
          id: "gym_people_3_0",
          role: "people",
          text: "The timer was checked by the {target}.",
          tags: [
            "people",
            "muscles"
          ]
        },
        {
          id: "gym_people_3_1",
          role: "people",
          text: "The squat was corrected by the {target}.",
          tags: [
            "people",
            "muscles"
          ]
        },
        {
          id: "gym_objects_3_0",
          role: "objects",
          text: "The lifter used the {target}.",
          tags: [
            "objects",
            "muscles"
          ]
        },
        {
          id: "gym_objects_3_1",
          role: "objects",
          text: "The biceps contracted during the {target}.",
          tags: [
            "objects",
            "muscles"
          ]
        },
        {
          id: "gym_actions_3_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "muscles"
          ]
        },
        {
          id: "gym_actions_3_1",
          role: "actions",
          text: "The trainer told the group to {target}.",
          tags: [
            "actions",
            "muscles"
          ]
        },
        {
          id: "gym_moods_3_0",
          role: "moods",
          text: "The final set felt {target}.",
          tags: [
            "moods",
            "muscles"
          ]
        },
        {
          id: "gym_moods_3_1",
          role: "moods",
          text: "The recovery session stayed {target}.",
          tags: [
            "moods",
            "muscles"
          ]
        },
        {
          id: "gym_adverbs_3_0",
          role: "adverbs",
          text: "The runner moved {target}.",
          tags: [
            "adverbs",
            "muscles"
          ]
        },
        {
          id: "gym_adverbs_3_1",
          role: "adverbs",
          text: "The lifter lowered the weight {target}.",
          tags: [
            "adverbs",
            "muscles"
          ]
        }
      ]
    },
    {
      id: "gym_recovery",
      topic: "Recovery",
      scene: "recovery mat",
      people: [
        "swimmer",
        "cyclist",
        "rookie",
        "partner",
        "coach",
        "lifter"
      ],
      places: [
        "bench",
        "pool",
        "machine",
        "locker",
        "gym",
        "rack"
      ],
      objects: [
        "bell",
        "dumbbell",
        "treadmill",
        "band",
        "barbell",
        "weight"
      ],
      actions: [
        "stretch",
        "curl",
        "row",
        "recover",
        "squat",
        "brace"
      ],
      moods: [
        "sharp",
        "driven",
        "balanced",
        "ready",
        "focused",
        "strong"
      ],
      adverbs: [
        "strictly",
        "evenly",
        "slowly",
        "steadily",
        "deeply"
      ],
      facts: [
        "Recovery belongs to Gym: training, muscles, recovery, and exercise habits.",
        "recovery mat gives Gym prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        bench: "bench is a place or setting connected to Gym, especially Recovery.",
        pool: "pool is a place or setting connected to Gym, especially Recovery.",
        machine: "machine is a place or setting connected to Gym, especially Recovery.",
        locker: "locker is a place or setting connected to Gym, especially Recovery.",
        gym: "gym is a place or setting connected to Gym, especially Recovery.",
        rack: "rack is a place or setting connected to Gym, especially Recovery.",
        swimmer: "swimmer is a person or role connected to Gym, especially Recovery.",
        cyclist: "cyclist is a person or role connected to Gym, especially Recovery.",
        rookie: "rookie is a person or role connected to Gym, especially Recovery.",
        partner: "partner is a person or role connected to Gym, especially Recovery.",
        coach: "coach is a person or role connected to Gym, especially Recovery.",
        lifter: "lifter is a person or role connected to Gym, especially Recovery.",
        bell: "bell is a term or object connected to Gym, especially Recovery.",
        dumbbell: "dumbbell is a term or object connected to Gym, especially Recovery.",
        treadmill: "treadmill is a term or object connected to Gym, especially Recovery.",
        band: "band is a term or object connected to Gym, especially Recovery.",
        barbell: "barbell is a term or object connected to Gym, especially Recovery.",
        weight: "weight is a term or object connected to Gym, especially Recovery.",
        stretch: "stretch is an action connected to Gym, especially Recovery.",
        curl: "curl is an action connected to Gym, especially Recovery.",
        row: "row is an action connected to Gym, especially Recovery.",
        recover: "recover is an action connected to Gym, especially Recovery.",
        squat: "squat is an action connected to Gym, especially Recovery.",
        brace: "brace is an action connected to Gym, especially Recovery.",
        sharp: "sharp is a description or mood connected to Gym, especially Recovery.",
        driven: "driven is a description or mood connected to Gym, especially Recovery.",
        balanced: "balanced is a description or mood connected to Gym, especially Recovery.",
        ready: "ready is a description or mood connected to Gym, especially Recovery.",
        focused: "focused is a description or mood connected to Gym, especially Recovery.",
        strong: "strong is a description or mood connected to Gym, especially Recovery.",
        strictly: "strictly is a way something happens connected to Gym, especially Recovery.",
        evenly: "evenly is a way something happens connected to Gym, especially Recovery.",
        slowly: "slowly is a way something happens connected to Gym, especially Recovery.",
        steadily: "steadily is a way something happens connected to Gym, especially Recovery.",
        deeply: "deeply is a way something happens connected to Gym, especially Recovery."
      },
      templates: [
        {
          id: "gym_places_4_0",
          role: "places",
          text: "The trainer corrected form near the {target}.",
          tags: [
            "places",
            "recovery"
          ]
        },
        {
          id: "gym_places_4_1",
          role: "places",
          text: "The workout ended at the {target}.",
          tags: [
            "places",
            "recovery"
          ]
        },
        {
          id: "gym_people_4_0",
          role: "people",
          text: "The timer was checked by the {target}.",
          tags: [
            "people",
            "recovery"
          ]
        },
        {
          id: "gym_people_4_1",
          role: "people",
          text: "The squat was corrected by the {target}.",
          tags: [
            "people",
            "recovery"
          ]
        },
        {
          id: "gym_objects_4_0",
          role: "objects",
          text: "The lifter used the {target}.",
          tags: [
            "objects",
            "recovery"
          ]
        },
        {
          id: "gym_objects_4_1",
          role: "objects",
          text: "The biceps contracted during the {target}.",
          tags: [
            "objects",
            "recovery"
          ]
        },
        {
          id: "gym_actions_4_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "recovery"
          ]
        },
        {
          id: "gym_actions_4_1",
          role: "actions",
          text: "The trainer told the group to {target}.",
          tags: [
            "actions",
            "recovery"
          ]
        },
        {
          id: "gym_moods_4_0",
          role: "moods",
          text: "The final set felt {target}.",
          tags: [
            "moods",
            "recovery"
          ]
        },
        {
          id: "gym_moods_4_1",
          role: "moods",
          text: "The recovery session stayed {target}.",
          tags: [
            "moods",
            "recovery"
          ]
        },
        {
          id: "gym_adverbs_4_0",
          role: "adverbs",
          text: "The runner moved {target}.",
          tags: [
            "adverbs",
            "recovery"
          ]
        },
        {
          id: "gym_adverbs_4_1",
          role: "adverbs",
          text: "The lifter lowered the weight {target}.",
          tags: [
            "adverbs",
            "recovery"
          ]
        }
      ]
    },
    {
      id: "gym_workout",
      topic: "Workout",
      scene: "training plan",
      people: [
        "rookie",
        "partner",
        "coach",
        "lifter",
        "trainer",
        "athlete"
      ],
      places: [
        "machine",
        "locker",
        "gym",
        "rack",
        "floor",
        "mat"
      ],
      objects: [
        "treadmill",
        "band",
        "barbell",
        "weight",
        "knee",
        "timer"
      ],
      actions: [
        "row",
        "recover",
        "squat",
        "brace",
        "push",
        "hold"
      ],
      moods: [
        "balanced",
        "ready",
        "focused",
        "strong",
        "tired",
        "steady"
      ],
      adverbs: [
        "slowly",
        "steadily",
        "deeply",
        "quickly",
        "carefully"
      ],
      facts: [
        "Workout belongs to Gym: training, muscles, recovery, and exercise habits.",
        "training plan gives Gym prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        machine: "machine is a place or setting connected to Gym, especially Workout.",
        locker: "locker is a place or setting connected to Gym, especially Workout.",
        gym: "gym is a place or setting connected to Gym, especially Workout.",
        rack: "rack is a place or setting connected to Gym, especially Workout.",
        floor: "floor is a place or setting connected to Gym, especially Workout.",
        mat: "mat is a place or setting connected to Gym, especially Workout.",
        rookie: "rookie is a person or role connected to Gym, especially Workout.",
        partner: "partner is a person or role connected to Gym, especially Workout.",
        coach: "coach is a person or role connected to Gym, especially Workout.",
        lifter: "lifter is a person or role connected to Gym, especially Workout.",
        trainer: "trainer is a person or role connected to Gym, especially Workout.",
        athlete: "athlete is a person or role connected to Gym, especially Workout.",
        treadmill: "treadmill is a term or object connected to Gym, especially Workout.",
        band: "band is a term or object connected to Gym, especially Workout.",
        barbell: "barbell is a term or object connected to Gym, especially Workout.",
        weight: "weight is a term or object connected to Gym, especially Workout.",
        knee: "knee is a term or object connected to Gym, especially Workout.",
        timer: "timer is a term or object connected to Gym, especially Workout.",
        row: "row is an action connected to Gym, especially Workout.",
        recover: "recover is an action connected to Gym, especially Workout.",
        squat: "squat is an action connected to Gym, especially Workout.",
        brace: "brace is an action connected to Gym, especially Workout.",
        push: "push is an action connected to Gym, especially Workout.",
        hold: "hold is an action connected to Gym, especially Workout.",
        balanced: "balanced is a description or mood connected to Gym, especially Workout.",
        ready: "ready is a description or mood connected to Gym, especially Workout.",
        focused: "focused is a description or mood connected to Gym, especially Workout.",
        strong: "strong is a description or mood connected to Gym, especially Workout.",
        tired: "tired is a description or mood connected to Gym, especially Workout.",
        steady: "steady is a description or mood connected to Gym, especially Workout.",
        slowly: "slowly is a way something happens connected to Gym, especially Workout.",
        steadily: "steadily is a way something happens connected to Gym, especially Workout.",
        deeply: "deeply is a way something happens connected to Gym, especially Workout.",
        quickly: "quickly is a way something happens connected to Gym, especially Workout.",
        carefully: "carefully is a way something happens connected to Gym, especially Workout."
      },
      templates: [
        {
          id: "gym_places_5_0",
          role: "places",
          text: "The trainer corrected form near the {target}.",
          tags: [
            "places",
            "workout"
          ]
        },
        {
          id: "gym_places_5_1",
          role: "places",
          text: "The workout ended at the {target}.",
          tags: [
            "places",
            "workout"
          ]
        },
        {
          id: "gym_people_5_0",
          role: "people",
          text: "The timer was checked by the {target}.",
          tags: [
            "people",
            "workout"
          ]
        },
        {
          id: "gym_people_5_1",
          role: "people",
          text: "The squat was corrected by the {target}.",
          tags: [
            "people",
            "workout"
          ]
        },
        {
          id: "gym_objects_5_0",
          role: "objects",
          text: "The lifter used the {target}.",
          tags: [
            "objects",
            "workout"
          ]
        },
        {
          id: "gym_objects_5_1",
          role: "objects",
          text: "The biceps contracted during the {target}.",
          tags: [
            "objects",
            "workout"
          ]
        },
        {
          id: "gym_actions_5_0",
          role: "actions",
          text: "The athlete had to {target}.",
          tags: [
            "actions",
            "workout"
          ]
        },
        {
          id: "gym_actions_5_1",
          role: "actions",
          text: "The trainer told the group to {target}.",
          tags: [
            "actions",
            "workout"
          ]
        },
        {
          id: "gym_moods_5_0",
          role: "moods",
          text: "The final set felt {target}.",
          tags: [
            "moods",
            "workout"
          ]
        },
        {
          id: "gym_moods_5_1",
          role: "moods",
          text: "The recovery session stayed {target}.",
          tags: [
            "moods",
            "workout"
          ]
        },
        {
          id: "gym_adverbs_5_0",
          role: "adverbs",
          text: "The runner moved {target}.",
          tags: [
            "adverbs",
            "workout"
          ]
        },
        {
          id: "gym_adverbs_5_1",
          role: "adverbs",
          text: "The lifter lowered the weight {target}.",
          tags: [
            "adverbs",
            "workout"
          ]
        }
      ]
    }
  ]
});
