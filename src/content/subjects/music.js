import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "music",
  name: "Music",
  theme: "rhythm, melody, instruments, performance, and recording",
  nodes: [
    {
      id: "music_rhythm",
      topic: "Rhythm",
      scene: "drum groove",
      people: [
        "guitarist",
        "singer",
        "band",
        "drummer",
        "crowd",
        "producer"
      ],
      places: [
        "stage",
        "studio",
        "concert",
        "club",
        "booth",
        "room"
      ],
      objects: [
        "guitar",
        "string",
        "chord",
        "drum",
        "beat",
        "stick"
      ],
      actions: [
        "play",
        "strum",
        "tune",
        "hit",
        "tap",
        "groove"
      ],
      moods: [
        "rhythmic",
        "loud",
        "soft",
        "melodic",
        "soulful",
        "electric"
      ],
      adverbs: [
        "loudly",
        "softly",
        "smoothly",
        "quickly",
        "slowly"
      ],
      facts: [
        "Rhythm belongs to Music: rhythm, melody, instruments, performance, and recording.",
        "drum groove gives Music prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        stage: "stage is a place or setting connected to Music, especially Rhythm.",
        studio: "studio is a place or setting connected to Music, especially Rhythm.",
        concert: "concert is a place or setting connected to Music, especially Rhythm.",
        club: "club is a place or setting connected to Music, especially Rhythm.",
        booth: "booth is a place or setting connected to Music, especially Rhythm.",
        room: "room is a place or setting connected to Music, especially Rhythm.",
        guitarist: "guitarist is a person or role connected to Music, especially Rhythm.",
        singer: "singer is a person or role connected to Music, especially Rhythm.",
        band: "band is a person or role connected to Music, especially Rhythm.",
        drummer: "drummer is a person or role connected to Music, especially Rhythm.",
        crowd: "crowd is a person or role connected to Music, especially Rhythm.",
        producer: "producer is a person or role connected to Music, especially Rhythm.",
        guitar: "guitar is a term or object connected to Music, especially Rhythm.",
        string: "string is a term or object connected to Music, especially Rhythm.",
        chord: "chord is a term or object connected to Music, especially Rhythm.",
        drum: "drum is a term or object connected to Music, especially Rhythm.",
        beat: "beat is a term or object connected to Music, especially Rhythm.",
        stick: "stick is a term or object connected to Music, especially Rhythm.",
        play: "play is an action connected to Music, especially Rhythm.",
        strum: "strum is an action connected to Music, especially Rhythm.",
        tune: "tune is an action connected to Music, especially Rhythm.",
        hit: "hit is an action connected to Music, especially Rhythm.",
        tap: "tap is an action connected to Music, especially Rhythm.",
        groove: "groove is an action connected to Music, especially Rhythm.",
        rhythmic: "rhythmic is a description or mood connected to Music, especially Rhythm.",
        loud: "loud is a description or mood connected to Music, especially Rhythm.",
        soft: "soft is a description or mood connected to Music, especially Rhythm.",
        melodic: "melodic is a description or mood connected to Music, especially Rhythm.",
        soulful: "soulful is a description or mood connected to Music, especially Rhythm.",
        electric: "electric is a description or mood connected to Music, especially Rhythm.",
        loudly: "loudly is a way something happens connected to Music, especially Rhythm.",
        softly: "softly is a way something happens connected to Music, especially Rhythm.",
        smoothly: "smoothly is a way something happens connected to Music, especially Rhythm.",
        quickly: "quickly is a way something happens connected to Music, especially Rhythm.",
        slowly: "slowly is a way something happens connected to Music, especially Rhythm."
      },
      templates: [
        {
          id: "music_places_0_0",
          role: "places",
          text: "The band rehearsed in the {target}.",
          tags: [
            "places",
            "rhythm"
          ]
        },
        {
          id: "music_places_0_1",
          role: "places",
          text: "The melody echoed through the {target}.",
          tags: [
            "places",
            "rhythm"
          ]
        },
        {
          id: "music_people_0_0",
          role: "people",
          text: "The melody was followed by the {target}.",
          tags: [
            "people",
            "rhythm"
          ]
        },
        {
          id: "music_people_0_1",
          role: "people",
          text: "The audience listened to the {target}.",
          tags: [
            "people",
            "rhythm"
          ]
        },
        {
          id: "music_objects_0_0",
          role: "objects",
          text: "The producer adjusted the {target}.",
          tags: [
            "objects",
            "rhythm"
          ]
        },
        {
          id: "music_objects_0_1",
          role: "objects",
          text: "The drummer kept the {target}.",
          tags: [
            "objects",
            "rhythm"
          ]
        },
        {
          id: "music_actions_0_0",
          role: "actions",
          text: "The singer had to {target}.",
          tags: [
            "actions",
            "rhythm"
          ]
        },
        {
          id: "music_actions_0_1",
          role: "actions",
          text: "The band started to {target}.",
          tags: [
            "actions",
            "rhythm"
          ]
        },
        {
          id: "music_moods_0_0",
          role: "moods",
          text: "The chorus sounded {target}.",
          tags: [
            "moods",
            "rhythm"
          ]
        },
        {
          id: "music_moods_0_1",
          role: "moods",
          text: "The final note felt {target}.",
          tags: [
            "moods",
            "rhythm"
          ]
        },
        {
          id: "music_adverbs_0_0",
          role: "adverbs",
          text: "The drummer played {target}.",
          tags: [
            "adverbs",
            "rhythm"
          ]
        },
        {
          id: "music_adverbs_0_1",
          role: "adverbs",
          text: "The singer entered the verse {target}.",
          tags: [
            "adverbs",
            "rhythm"
          ]
        }
      ]
    },
    {
      id: "music_instruments",
      topic: "Instruments",
      scene: "instrument room",
      people: [
        "band",
        "drummer",
        "crowd",
        "producer",
        "rapper",
        "dj"
      ],
      places: [
        "concert",
        "club",
        "booth",
        "room",
        "venue",
        "hall"
      ],
      objects: [
        "chord",
        "drum",
        "beat",
        "stick",
        "mic",
        "track"
      ],
      actions: [
        "tune",
        "hit",
        "tap",
        "groove",
        "record",
        "mix"
      ],
      moods: [
        "soft",
        "melodic",
        "soulful",
        "electric",
        "smooth",
        "heavy"
      ],
      adverbs: [
        "smoothly",
        "quickly",
        "slowly",
        "brightly",
        "deeply"
      ],
      facts: [
        "Instruments belongs to Music: rhythm, melody, instruments, performance, and recording.",
        "instrument room gives Music prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        concert: "concert is a place or setting connected to Music, especially Instruments.",
        club: "club is a place or setting connected to Music, especially Instruments.",
        booth: "booth is a place or setting connected to Music, especially Instruments.",
        room: "room is a place or setting connected to Music, especially Instruments.",
        venue: "venue is a place or setting connected to Music, especially Instruments.",
        hall: "hall is a place or setting connected to Music, especially Instruments.",
        band: "band is a person or role connected to Music, especially Instruments.",
        drummer: "drummer is a person or role connected to Music, especially Instruments.",
        crowd: "crowd is a person or role connected to Music, especially Instruments.",
        producer: "producer is a person or role connected to Music, especially Instruments.",
        rapper: "rapper is a person or role connected to Music, especially Instruments.",
        dj: "dj is a person or role connected to Music, especially Instruments.",
        chord: "chord is a term or object connected to Music, especially Instruments.",
        drum: "drum is a term or object connected to Music, especially Instruments.",
        beat: "beat is a term or object connected to Music, especially Instruments.",
        stick: "stick is a term or object connected to Music, especially Instruments.",
        mic: "mic is a term or object connected to Music, especially Instruments.",
        track: "track is a term or object connected to Music, especially Instruments.",
        tune: "tune is an action connected to Music, especially Instruments.",
        hit: "hit is an action connected to Music, especially Instruments.",
        tap: "tap is an action connected to Music, especially Instruments.",
        groove: "groove is an action connected to Music, especially Instruments.",
        record: "record is an action connected to Music, especially Instruments.",
        mix: "mix is an action connected to Music, especially Instruments.",
        soft: "soft is a description or mood connected to Music, especially Instruments.",
        melodic: "melodic is a description or mood connected to Music, especially Instruments.",
        soulful: "soulful is a description or mood connected to Music, especially Instruments.",
        electric: "electric is a description or mood connected to Music, especially Instruments.",
        smooth: "smooth is a description or mood connected to Music, especially Instruments.",
        heavy: "heavy is a description or mood connected to Music, especially Instruments.",
        smoothly: "smoothly is a way something happens connected to Music, especially Instruments.",
        quickly: "quickly is a way something happens connected to Music, especially Instruments.",
        slowly: "slowly is a way something happens connected to Music, especially Instruments.",
        brightly: "brightly is a way something happens connected to Music, especially Instruments.",
        deeply: "deeply is a way something happens connected to Music, especially Instruments."
      },
      templates: [
        {
          id: "music_places_1_0",
          role: "places",
          text: "The band rehearsed in the {target}.",
          tags: [
            "places",
            "instruments"
          ]
        },
        {
          id: "music_places_1_1",
          role: "places",
          text: "The melody echoed through the {target}.",
          tags: [
            "places",
            "instruments"
          ]
        },
        {
          id: "music_people_1_0",
          role: "people",
          text: "The melody was followed by the {target}.",
          tags: [
            "people",
            "instruments"
          ]
        },
        {
          id: "music_people_1_1",
          role: "people",
          text: "The audience listened to the {target}.",
          tags: [
            "people",
            "instruments"
          ]
        },
        {
          id: "music_objects_1_0",
          role: "objects",
          text: "The producer adjusted the {target}.",
          tags: [
            "objects",
            "instruments"
          ]
        },
        {
          id: "music_objects_1_1",
          role: "objects",
          text: "The drummer kept the {target}.",
          tags: [
            "objects",
            "instruments"
          ]
        },
        {
          id: "music_actions_1_0",
          role: "actions",
          text: "The singer had to {target}.",
          tags: [
            "actions",
            "instruments"
          ]
        },
        {
          id: "music_actions_1_1",
          role: "actions",
          text: "The band started to {target}.",
          tags: [
            "actions",
            "instruments"
          ]
        },
        {
          id: "music_moods_1_0",
          role: "moods",
          text: "The chorus sounded {target}.",
          tags: [
            "moods",
            "instruments"
          ]
        },
        {
          id: "music_moods_1_1",
          role: "moods",
          text: "The final note felt {target}.",
          tags: [
            "moods",
            "instruments"
          ]
        },
        {
          id: "music_adverbs_1_0",
          role: "adverbs",
          text: "The drummer played {target}.",
          tags: [
            "adverbs",
            "instruments"
          ]
        },
        {
          id: "music_adverbs_1_1",
          role: "adverbs",
          text: "The singer entered the verse {target}.",
          tags: [
            "adverbs",
            "instruments"
          ]
        }
      ]
    },
    {
      id: "music_concert",
      topic: "Concert",
      scene: "concert stage",
      people: [
        "crowd",
        "producer",
        "rapper",
        "dj",
        "composer",
        "pianist"
      ],
      places: [
        "booth",
        "room",
        "venue",
        "hall",
        "festival",
        "choir"
      ],
      objects: [
        "beat",
        "stick",
        "mic",
        "track",
        "speaker",
        "melody"
      ],
      actions: [
        "tap",
        "groove",
        "record",
        "mix",
        "flow",
        "drop"
      ],
      moods: [
        "soulful",
        "electric",
        "smooth",
        "heavy",
        "bright",
        "emotional"
      ],
      adverbs: [
        "slowly",
        "brightly",
        "deeply",
        "clearly",
        "wildly"
      ],
      facts: [
        "Concert belongs to Music: rhythm, melody, instruments, performance, and recording.",
        "concert stage gives Music prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        booth: "booth is a place or setting connected to Music, especially Concert.",
        room: "room is a place or setting connected to Music, especially Concert.",
        venue: "venue is a place or setting connected to Music, especially Concert.",
        hall: "hall is a place or setting connected to Music, especially Concert.",
        festival: "festival is a place or setting connected to Music, especially Concert.",
        choir: "choir is a place or setting connected to Music, especially Concert.",
        crowd: "crowd is a person or role connected to Music, especially Concert.",
        producer: "producer is a person or role connected to Music, especially Concert.",
        rapper: "rapper is a person or role connected to Music, especially Concert.",
        dj: "dj is a person or role connected to Music, especially Concert.",
        composer: "composer is a person or role connected to Music, especially Concert.",
        pianist: "pianist is a person or role connected to Music, especially Concert.",
        beat: "beat is a term or object connected to Music, especially Concert.",
        stick: "stick is a term or object connected to Music, especially Concert.",
        mic: "mic is a term or object connected to Music, especially Concert.",
        track: "track is a term or object connected to Music, especially Concert.",
        speaker: "speaker is a term or object connected to Music, especially Concert.",
        melody: "melody is a term or object connected to Music, especially Concert.",
        tap: "tap is an action connected to Music, especially Concert.",
        groove: "groove is an action connected to Music, especially Concert.",
        record: "record is an action connected to Music, especially Concert.",
        mix: "mix is an action connected to Music, especially Concert.",
        flow: "flow is an action connected to Music, especially Concert.",
        drop: "drop is an action connected to Music, especially Concert.",
        soulful: "soulful is a description or mood connected to Music, especially Concert.",
        electric: "electric is a description or mood connected to Music, especially Concert.",
        smooth: "smooth is a description or mood connected to Music, especially Concert.",
        heavy: "heavy is a description or mood connected to Music, especially Concert.",
        bright: "bright is a description or mood connected to Music, especially Concert.",
        emotional: "emotional is a description or mood connected to Music, especially Concert.",
        slowly: "slowly is a way something happens connected to Music, especially Concert.",
        brightly: "brightly is a way something happens connected to Music, especially Concert.",
        deeply: "deeply is a way something happens connected to Music, especially Concert.",
        clearly: "clearly is a way something happens connected to Music, especially Concert.",
        wildly: "wildly is a way something happens connected to Music, especially Concert."
      },
      templates: [
        {
          id: "music_places_2_0",
          role: "places",
          text: "The band rehearsed in the {target}.",
          tags: [
            "places",
            "concert"
          ]
        },
        {
          id: "music_places_2_1",
          role: "places",
          text: "The melody echoed through the {target}.",
          tags: [
            "places",
            "concert"
          ]
        },
        {
          id: "music_people_2_0",
          role: "people",
          text: "The melody was followed by the {target}.",
          tags: [
            "people",
            "concert"
          ]
        },
        {
          id: "music_people_2_1",
          role: "people",
          text: "The audience listened to the {target}.",
          tags: [
            "people",
            "concert"
          ]
        },
        {
          id: "music_objects_2_0",
          role: "objects",
          text: "The producer adjusted the {target}.",
          tags: [
            "objects",
            "concert"
          ]
        },
        {
          id: "music_objects_2_1",
          role: "objects",
          text: "The drummer kept the {target}.",
          tags: [
            "objects",
            "concert"
          ]
        },
        {
          id: "music_actions_2_0",
          role: "actions",
          text: "The singer had to {target}.",
          tags: [
            "actions",
            "concert"
          ]
        },
        {
          id: "music_actions_2_1",
          role: "actions",
          text: "The band started to {target}.",
          tags: [
            "actions",
            "concert"
          ]
        },
        {
          id: "music_moods_2_0",
          role: "moods",
          text: "The chorus sounded {target}.",
          tags: [
            "moods",
            "concert"
          ]
        },
        {
          id: "music_moods_2_1",
          role: "moods",
          text: "The final note felt {target}.",
          tags: [
            "moods",
            "concert"
          ]
        },
        {
          id: "music_adverbs_2_0",
          role: "adverbs",
          text: "The drummer played {target}.",
          tags: [
            "adverbs",
            "concert"
          ]
        },
        {
          id: "music_adverbs_2_1",
          role: "adverbs",
          text: "The singer entered the verse {target}.",
          tags: [
            "adverbs",
            "concert"
          ]
        }
      ]
    },
    {
      id: "music_studio",
      topic: "Studio",
      scene: "recording booth",
      people: [
        "rapper",
        "dj",
        "composer",
        "pianist",
        "bassist",
        "violinist"
      ],
      places: [
        "venue",
        "hall",
        "festival",
        "choir",
        "garage",
        "stage"
      ],
      objects: [
        "mic",
        "track",
        "speaker",
        "melody",
        "bass",
        "keyboard"
      ],
      actions: [
        "record",
        "mix",
        "flow",
        "drop",
        "sing",
        "compose"
      ],
      moods: [
        "smooth",
        "heavy",
        "bright",
        "emotional",
        "live",
        "catchy"
      ],
      adverbs: [
        "deeply",
        "clearly",
        "wildly",
        "evenly",
        "loudly"
      ],
      facts: [
        "Studio belongs to Music: rhythm, melody, instruments, performance, and recording.",
        "recording booth gives Music prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        venue: "venue is a place or setting connected to Music, especially Studio.",
        hall: "hall is a place or setting connected to Music, especially Studio.",
        festival: "festival is a place or setting connected to Music, especially Studio.",
        choir: "choir is a place or setting connected to Music, especially Studio.",
        garage: "garage is a place or setting connected to Music, especially Studio.",
        stage: "stage is a place or setting connected to Music, especially Studio.",
        rapper: "rapper is a person or role connected to Music, especially Studio.",
        dj: "dj is a person or role connected to Music, especially Studio.",
        composer: "composer is a person or role connected to Music, especially Studio.",
        pianist: "pianist is a person or role connected to Music, especially Studio.",
        bassist: "bassist is a person or role connected to Music, especially Studio.",
        violinist: "violinist is a person or role connected to Music, especially Studio.",
        mic: "mic is a term or object connected to Music, especially Studio.",
        track: "track is a term or object connected to Music, especially Studio.",
        speaker: "speaker is a term or object connected to Music, especially Studio.",
        melody: "melody is a term or object connected to Music, especially Studio.",
        bass: "bass is a term or object connected to Music, especially Studio.",
        keyboard: "keyboard is a term or object connected to Music, especially Studio.",
        record: "record is an action connected to Music, especially Studio.",
        mix: "mix is an action connected to Music, especially Studio.",
        flow: "flow is an action connected to Music, especially Studio.",
        drop: "drop is an action connected to Music, especially Studio.",
        sing: "sing is an action connected to Music, especially Studio.",
        compose: "compose is an action connected to Music, especially Studio.",
        smooth: "smooth is a description or mood connected to Music, especially Studio.",
        heavy: "heavy is a description or mood connected to Music, especially Studio.",
        bright: "bright is a description or mood connected to Music, especially Studio.",
        emotional: "emotional is a description or mood connected to Music, especially Studio.",
        live: "live is a description or mood connected to Music, especially Studio.",
        catchy: "catchy is a description or mood connected to Music, especially Studio.",
        deeply: "deeply is a way something happens connected to Music, especially Studio.",
        clearly: "clearly is a way something happens connected to Music, especially Studio.",
        wildly: "wildly is a way something happens connected to Music, especially Studio.",
        evenly: "evenly is a way something happens connected to Music, especially Studio.",
        loudly: "loudly is a way something happens connected to Music, especially Studio."
      },
      templates: [
        {
          id: "music_places_3_0",
          role: "places",
          text: "The band rehearsed in the {target}.",
          tags: [
            "places",
            "studio"
          ]
        },
        {
          id: "music_places_3_1",
          role: "places",
          text: "The melody echoed through the {target}.",
          tags: [
            "places",
            "studio"
          ]
        },
        {
          id: "music_people_3_0",
          role: "people",
          text: "The melody was followed by the {target}.",
          tags: [
            "people",
            "studio"
          ]
        },
        {
          id: "music_people_3_1",
          role: "people",
          text: "The audience listened to the {target}.",
          tags: [
            "people",
            "studio"
          ]
        },
        {
          id: "music_objects_3_0",
          role: "objects",
          text: "The producer adjusted the {target}.",
          tags: [
            "objects",
            "studio"
          ]
        },
        {
          id: "music_objects_3_1",
          role: "objects",
          text: "The drummer kept the {target}.",
          tags: [
            "objects",
            "studio"
          ]
        },
        {
          id: "music_actions_3_0",
          role: "actions",
          text: "The singer had to {target}.",
          tags: [
            "actions",
            "studio"
          ]
        },
        {
          id: "music_actions_3_1",
          role: "actions",
          text: "The band started to {target}.",
          tags: [
            "actions",
            "studio"
          ]
        },
        {
          id: "music_moods_3_0",
          role: "moods",
          text: "The chorus sounded {target}.",
          tags: [
            "moods",
            "studio"
          ]
        },
        {
          id: "music_moods_3_1",
          role: "moods",
          text: "The final note felt {target}.",
          tags: [
            "moods",
            "studio"
          ]
        },
        {
          id: "music_adverbs_3_0",
          role: "adverbs",
          text: "The drummer played {target}.",
          tags: [
            "adverbs",
            "studio"
          ]
        },
        {
          id: "music_adverbs_3_1",
          role: "adverbs",
          text: "The singer entered the verse {target}.",
          tags: [
            "adverbs",
            "studio"
          ]
        }
      ]
    },
    {
      id: "music_singing",
      topic: "Singing",
      scene: "vocal take",
      people: [
        "composer",
        "pianist",
        "bassist",
        "violinist",
        "guitarist",
        "singer"
      ],
      places: [
        "festival",
        "choir",
        "garage",
        "stage",
        "studio",
        "concert"
      ],
      objects: [
        "speaker",
        "melody",
        "bass",
        "keyboard",
        "guitar",
        "string"
      ],
      actions: [
        "flow",
        "drop",
        "sing",
        "compose",
        "play",
        "strum"
      ],
      moods: [
        "bright",
        "emotional",
        "live",
        "catchy",
        "rhythmic",
        "loud"
      ],
      adverbs: [
        "wildly",
        "evenly",
        "loudly",
        "softly",
        "smoothly"
      ],
      facts: [
        "Singing belongs to Music: rhythm, melody, instruments, performance, and recording.",
        "vocal take gives Music prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        festival: "festival is a place or setting connected to Music, especially Singing.",
        choir: "choir is a place or setting connected to Music, especially Singing.",
        garage: "garage is a place or setting connected to Music, especially Singing.",
        stage: "stage is a place or setting connected to Music, especially Singing.",
        studio: "studio is a place or setting connected to Music, especially Singing.",
        concert: "concert is a place or setting connected to Music, especially Singing.",
        composer: "composer is a person or role connected to Music, especially Singing.",
        pianist: "pianist is a person or role connected to Music, especially Singing.",
        bassist: "bassist is a person or role connected to Music, especially Singing.",
        violinist: "violinist is a person or role connected to Music, especially Singing.",
        guitarist: "guitarist is a person or role connected to Music, especially Singing.",
        singer: "singer is a person or role connected to Music, especially Singing.",
        speaker: "speaker is a term or object connected to Music, especially Singing.",
        melody: "melody is a term or object connected to Music, especially Singing.",
        bass: "bass is a term or object connected to Music, especially Singing.",
        keyboard: "keyboard is a term or object connected to Music, especially Singing.",
        guitar: "guitar is a term or object connected to Music, especially Singing.",
        string: "string is a term or object connected to Music, especially Singing.",
        flow: "flow is an action connected to Music, especially Singing.",
        drop: "drop is an action connected to Music, especially Singing.",
        sing: "sing is an action connected to Music, especially Singing.",
        compose: "compose is an action connected to Music, especially Singing.",
        play: "play is an action connected to Music, especially Singing.",
        strum: "strum is an action connected to Music, especially Singing.",
        bright: "bright is a description or mood connected to Music, especially Singing.",
        emotional: "emotional is a description or mood connected to Music, especially Singing.",
        live: "live is a description or mood connected to Music, especially Singing.",
        catchy: "catchy is a description or mood connected to Music, especially Singing.",
        rhythmic: "rhythmic is a description or mood connected to Music, especially Singing.",
        loud: "loud is a description or mood connected to Music, especially Singing.",
        wildly: "wildly is a way something happens connected to Music, especially Singing.",
        evenly: "evenly is a way something happens connected to Music, especially Singing.",
        loudly: "loudly is a way something happens connected to Music, especially Singing.",
        softly: "softly is a way something happens connected to Music, especially Singing.",
        smoothly: "smoothly is a way something happens connected to Music, especially Singing."
      },
      templates: [
        {
          id: "music_places_4_0",
          role: "places",
          text: "The band rehearsed in the {target}.",
          tags: [
            "places",
            "singing"
          ]
        },
        {
          id: "music_places_4_1",
          role: "places",
          text: "The melody echoed through the {target}.",
          tags: [
            "places",
            "singing"
          ]
        },
        {
          id: "music_people_4_0",
          role: "people",
          text: "The melody was followed by the {target}.",
          tags: [
            "people",
            "singing"
          ]
        },
        {
          id: "music_people_4_1",
          role: "people",
          text: "The audience listened to the {target}.",
          tags: [
            "people",
            "singing"
          ]
        },
        {
          id: "music_objects_4_0",
          role: "objects",
          text: "The producer adjusted the {target}.",
          tags: [
            "objects",
            "singing"
          ]
        },
        {
          id: "music_objects_4_1",
          role: "objects",
          text: "The drummer kept the {target}.",
          tags: [
            "objects",
            "singing"
          ]
        },
        {
          id: "music_actions_4_0",
          role: "actions",
          text: "The singer had to {target}.",
          tags: [
            "actions",
            "singing"
          ]
        },
        {
          id: "music_actions_4_1",
          role: "actions",
          text: "The band started to {target}.",
          tags: [
            "actions",
            "singing"
          ]
        },
        {
          id: "music_moods_4_0",
          role: "moods",
          text: "The chorus sounded {target}.",
          tags: [
            "moods",
            "singing"
          ]
        },
        {
          id: "music_moods_4_1",
          role: "moods",
          text: "The final note felt {target}.",
          tags: [
            "moods",
            "singing"
          ]
        },
        {
          id: "music_adverbs_4_0",
          role: "adverbs",
          text: "The drummer played {target}.",
          tags: [
            "adverbs",
            "singing"
          ]
        },
        {
          id: "music_adverbs_4_1",
          role: "adverbs",
          text: "The singer entered the verse {target}.",
          tags: [
            "adverbs",
            "singing"
          ]
        }
      ]
    },
    {
      id: "music_composition",
      topic: "Composition",
      scene: "composition desk",
      people: [
        "bassist",
        "violinist",
        "guitarist",
        "singer",
        "band",
        "drummer"
      ],
      places: [
        "garage",
        "stage",
        "studio",
        "concert",
        "club",
        "booth"
      ],
      objects: [
        "bass",
        "keyboard",
        "guitar",
        "string",
        "chord",
        "drum"
      ],
      actions: [
        "sing",
        "compose",
        "play",
        "strum",
        "tune",
        "hit"
      ],
      moods: [
        "live",
        "catchy",
        "rhythmic",
        "loud",
        "soft",
        "melodic"
      ],
      adverbs: [
        "loudly",
        "softly",
        "smoothly",
        "quickly",
        "slowly"
      ],
      facts: [
        "Composition belongs to Music: rhythm, melody, instruments, performance, and recording.",
        "composition desk gives Music prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        garage: "garage is a place or setting connected to Music, especially Composition.",
        stage: "stage is a place or setting connected to Music, especially Composition.",
        studio: "studio is a place or setting connected to Music, especially Composition.",
        concert: "concert is a place or setting connected to Music, especially Composition.",
        club: "club is a place or setting connected to Music, especially Composition.",
        booth: "booth is a place or setting connected to Music, especially Composition.",
        bassist: "bassist is a person or role connected to Music, especially Composition.",
        violinist: "violinist is a person or role connected to Music, especially Composition.",
        guitarist: "guitarist is a person or role connected to Music, especially Composition.",
        singer: "singer is a person or role connected to Music, especially Composition.",
        band: "band is a person or role connected to Music, especially Composition.",
        drummer: "drummer is a person or role connected to Music, especially Composition.",
        bass: "bass is a term or object connected to Music, especially Composition.",
        keyboard: "keyboard is a term or object connected to Music, especially Composition.",
        guitar: "guitar is a term or object connected to Music, especially Composition.",
        string: "string is a term or object connected to Music, especially Composition.",
        chord: "chord is a term or object connected to Music, especially Composition.",
        drum: "drum is a term or object connected to Music, especially Composition.",
        sing: "sing is an action connected to Music, especially Composition.",
        compose: "compose is an action connected to Music, especially Composition.",
        play: "play is an action connected to Music, especially Composition.",
        strum: "strum is an action connected to Music, especially Composition.",
        tune: "tune is an action connected to Music, especially Composition.",
        hit: "hit is an action connected to Music, especially Composition.",
        live: "live is a description or mood connected to Music, especially Composition.",
        catchy: "catchy is a description or mood connected to Music, especially Composition.",
        rhythmic: "rhythmic is a description or mood connected to Music, especially Composition.",
        loud: "loud is a description or mood connected to Music, especially Composition.",
        soft: "soft is a description or mood connected to Music, especially Composition.",
        melodic: "melodic is a description or mood connected to Music, especially Composition.",
        loudly: "loudly is a way something happens connected to Music, especially Composition.",
        softly: "softly is a way something happens connected to Music, especially Composition.",
        smoothly: "smoothly is a way something happens connected to Music, especially Composition.",
        quickly: "quickly is a way something happens connected to Music, especially Composition.",
        slowly: "slowly is a way something happens connected to Music, especially Composition."
      },
      templates: [
        {
          id: "music_places_5_0",
          role: "places",
          text: "The band rehearsed in the {target}.",
          tags: [
            "places",
            "composition"
          ]
        },
        {
          id: "music_places_5_1",
          role: "places",
          text: "The melody echoed through the {target}.",
          tags: [
            "places",
            "composition"
          ]
        },
        {
          id: "music_people_5_0",
          role: "people",
          text: "The melody was followed by the {target}.",
          tags: [
            "people",
            "composition"
          ]
        },
        {
          id: "music_people_5_1",
          role: "people",
          text: "The audience listened to the {target}.",
          tags: [
            "people",
            "composition"
          ]
        },
        {
          id: "music_objects_5_0",
          role: "objects",
          text: "The producer adjusted the {target}.",
          tags: [
            "objects",
            "composition"
          ]
        },
        {
          id: "music_objects_5_1",
          role: "objects",
          text: "The drummer kept the {target}.",
          tags: [
            "objects",
            "composition"
          ]
        },
        {
          id: "music_actions_5_0",
          role: "actions",
          text: "The singer had to {target}.",
          tags: [
            "actions",
            "composition"
          ]
        },
        {
          id: "music_actions_5_1",
          role: "actions",
          text: "The band started to {target}.",
          tags: [
            "actions",
            "composition"
          ]
        },
        {
          id: "music_moods_5_0",
          role: "moods",
          text: "The chorus sounded {target}.",
          tags: [
            "moods",
            "composition"
          ]
        },
        {
          id: "music_moods_5_1",
          role: "moods",
          text: "The final note felt {target}.",
          tags: [
            "moods",
            "composition"
          ]
        },
        {
          id: "music_adverbs_5_0",
          role: "adverbs",
          text: "The drummer played {target}.",
          tags: [
            "adverbs",
            "composition"
          ]
        },
        {
          id: "music_adverbs_5_1",
          role: "adverbs",
          text: "The singer entered the verse {target}.",
          tags: [
            "adverbs",
            "composition"
          ]
        }
      ]
    }
  ]
});
