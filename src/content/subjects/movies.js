import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "movies",
  name: "Movies",
  theme: "film craft, scenes, performers, genres, and storytelling",
  nodes: [
    {
      id: "movies_filming",
      topic: "Filming",
      scene: "film set",
      people: [
        "actor",
        "director",
        "writer",
        "villain",
        "hero",
        "critic"
      ],
      places: [
        "cinema",
        "theater",
        "screen",
        "stage",
        "set",
        "studio"
      ],
      objects: [
        "camera",
        "script",
        "trailer",
        "costume",
        "poster",
        "frame"
      ],
      actions: [
        "film",
        "edit",
        "act",
        "direct",
        "rehearse",
        "project"
      ],
      moods: [
        "dramatic",
        "funny",
        "tense",
        "scary",
        "epic",
        "silent"
      ],
      adverbs: [
        "slowly",
        "boldly",
        "quietly",
        "quickly",
        "clearly"
      ],
      facts: [
        "Filming belongs to Movies: film craft, scenes, performers, genres, and storytelling.",
        "film set gives Movies prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        cinema: "cinema is a place or setting connected to Movies, especially Filming.",
        theater: "theater is a place or setting connected to Movies, especially Filming.",
        screen: "screen is a place or setting connected to Movies, especially Filming.",
        stage: "stage is a place or setting connected to Movies, especially Filming.",
        set: "set is a place or setting connected to Movies, especially Filming.",
        studio: "studio is a place or setting connected to Movies, especially Filming.",
        actor: "actor is a person or role connected to Movies, especially Filming.",
        director: "director is a person or role connected to Movies, especially Filming.",
        writer: "writer is a person or role connected to Movies, especially Filming.",
        villain: "villain is a person or role connected to Movies, especially Filming.",
        hero: "hero is a person or role connected to Movies, especially Filming.",
        critic: "critic is a person or role connected to Movies, especially Filming.",
        camera: "camera is a term or object connected to Movies, especially Filming.",
        script: "script is a term or object connected to Movies, especially Filming.",
        trailer: "trailer is a term or object connected to Movies, especially Filming.",
        costume: "costume is a term or object connected to Movies, especially Filming.",
        poster: "poster is a term or object connected to Movies, especially Filming.",
        frame: "frame is a term or object connected to Movies, especially Filming.",
        film: "film is an action connected to Movies, especially Filming.",
        edit: "edit is an action connected to Movies, especially Filming.",
        act: "act is an action connected to Movies, especially Filming.",
        direct: "direct is an action connected to Movies, especially Filming.",
        rehearse: "rehearse is an action connected to Movies, especially Filming.",
        project: "project is an action connected to Movies, especially Filming.",
        dramatic: "dramatic is a description or mood connected to Movies, especially Filming.",
        funny: "funny is a description or mood connected to Movies, especially Filming.",
        tense: "tense is a description or mood connected to Movies, especially Filming.",
        scary: "scary is a description or mood connected to Movies, especially Filming.",
        epic: "epic is a description or mood connected to Movies, especially Filming.",
        silent: "silent is a description or mood connected to Movies, especially Filming.",
        slowly: "slowly is a way something happens connected to Movies, especially Filming.",
        boldly: "boldly is a way something happens connected to Movies, especially Filming.",
        quietly: "quietly is a way something happens connected to Movies, especially Filming.",
        quickly: "quickly is a way something happens connected to Movies, especially Filming.",
        clearly: "clearly is a way something happens connected to Movies, especially Filming."
      },
      templates: [
        {
          id: "movies_places_0_0",
          role: "places",
          text: "The director framed the scene inside the {target}.",
          tags: [
            "places",
            "filming"
          ]
        },
        {
          id: "movies_places_0_1",
          role: "places",
          text: "The audience gathered at the {target}.",
          tags: [
            "places",
            "filming"
          ]
        },
        {
          id: "movies_people_0_0",
          role: "people",
          text: "The camera followed the {target}.",
          tags: [
            "people",
            "filming"
          ]
        },
        {
          id: "movies_people_0_1",
          role: "people",
          text: "The final line was delivered by the {target}.",
          tags: [
            "people",
            "filming"
          ]
        },
        {
          id: "movies_objects_0_0",
          role: "objects",
          text: "The director framed the {target}.",
          tags: [
            "objects",
            "filming"
          ]
        },
        {
          id: "movies_objects_0_1",
          role: "objects",
          text: "The preview revealed the {target}.",
          tags: [
            "objects",
            "filming"
          ]
        },
        {
          id: "movies_actions_0_0",
          role: "actions",
          text: "The actor had to {target}.",
          tags: [
            "actions",
            "filming"
          ]
        },
        {
          id: "movies_actions_0_1",
          role: "actions",
          text: "The editor chose to {target}.",
          tags: [
            "actions",
            "filming"
          ]
        },
        {
          id: "movies_moods_0_0",
          role: "moods",
          text: "The final scene felt {target}.",
          tags: [
            "moods",
            "filming"
          ]
        },
        {
          id: "movies_moods_0_1",
          role: "moods",
          text: "The trailer suddenly became {target}.",
          tags: [
            "moods",
            "filming"
          ]
        },
        {
          id: "movies_adverbs_0_0",
          role: "adverbs",
          text: "The actor delivered the line {target}.",
          tags: [
            "adverbs",
            "filming"
          ]
        },
        {
          id: "movies_adverbs_0_1",
          role: "adverbs",
          text: "The editor cut the scene {target}.",
          tags: [
            "adverbs",
            "filming"
          ]
        }
      ]
    },
    {
      id: "movies_acting",
      topic: "Acting",
      scene: "rehearsal room",
      people: [
        "writer",
        "villain",
        "hero",
        "critic",
        "producer",
        "animator"
      ],
      places: [
        "screen",
        "stage",
        "set",
        "studio",
        "archive",
        "premiere"
      ],
      objects: [
        "trailer",
        "costume",
        "poster",
        "frame",
        "microphone",
        "spotlight"
      ],
      actions: [
        "act",
        "direct",
        "rehearse",
        "project",
        "animate",
        "record"
      ],
      moods: [
        "tense",
        "scary",
        "epic",
        "silent",
        "emotional",
        "mysterious"
      ],
      adverbs: [
        "quietly",
        "quickly",
        "clearly",
        "wildly",
        "smoothly"
      ],
      facts: [
        "Acting belongs to Movies: film craft, scenes, performers, genres, and storytelling.",
        "rehearsal room gives Movies prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        screen: "screen is a place or setting connected to Movies, especially Acting.",
        stage: "stage is a place or setting connected to Movies, especially Acting.",
        set: "set is a place or setting connected to Movies, especially Acting.",
        studio: "studio is a place or setting connected to Movies, especially Acting.",
        archive: "archive is a place or setting connected to Movies, especially Acting.",
        premiere: "premiere is a place or setting connected to Movies, especially Acting.",
        writer: "writer is a person or role connected to Movies, especially Acting.",
        villain: "villain is a person or role connected to Movies, especially Acting.",
        hero: "hero is a person or role connected to Movies, especially Acting.",
        critic: "critic is a person or role connected to Movies, especially Acting.",
        producer: "producer is a person or role connected to Movies, especially Acting.",
        animator: "animator is a person or role connected to Movies, especially Acting.",
        trailer: "trailer is a term or object connected to Movies, especially Acting.",
        costume: "costume is a term or object connected to Movies, especially Acting.",
        poster: "poster is a term or object connected to Movies, especially Acting.",
        frame: "frame is a term or object connected to Movies, especially Acting.",
        microphone: "microphone is a term or object connected to Movies, especially Acting.",
        spotlight: "spotlight is a term or object connected to Movies, especially Acting.",
        act: "act is an action connected to Movies, especially Acting.",
        direct: "direct is an action connected to Movies, especially Acting.",
        rehearse: "rehearse is an action connected to Movies, especially Acting.",
        project: "project is an action connected to Movies, especially Acting.",
        animate: "animate is an action connected to Movies, especially Acting.",
        record: "record is an action connected to Movies, especially Acting.",
        tense: "tense is a description or mood connected to Movies, especially Acting.",
        scary: "scary is a description or mood connected to Movies, especially Acting.",
        epic: "epic is a description or mood connected to Movies, especially Acting.",
        silent: "silent is a description or mood connected to Movies, especially Acting.",
        emotional: "emotional is a description or mood connected to Movies, especially Acting.",
        mysterious: "mysterious is a description or mood connected to Movies, especially Acting.",
        quietly: "quietly is a way something happens connected to Movies, especially Acting.",
        quickly: "quickly is a way something happens connected to Movies, especially Acting.",
        clearly: "clearly is a way something happens connected to Movies, especially Acting.",
        wildly: "wildly is a way something happens connected to Movies, especially Acting.",
        smoothly: "smoothly is a way something happens connected to Movies, especially Acting."
      },
      templates: [
        {
          id: "movies_places_1_0",
          role: "places",
          text: "The director framed the scene inside the {target}.",
          tags: [
            "places",
            "acting"
          ]
        },
        {
          id: "movies_places_1_1",
          role: "places",
          text: "The audience gathered at the {target}.",
          tags: [
            "places",
            "acting"
          ]
        },
        {
          id: "movies_people_1_0",
          role: "people",
          text: "The camera followed the {target}.",
          tags: [
            "people",
            "acting"
          ]
        },
        {
          id: "movies_people_1_1",
          role: "people",
          text: "The final line was delivered by the {target}.",
          tags: [
            "people",
            "acting"
          ]
        },
        {
          id: "movies_objects_1_0",
          role: "objects",
          text: "The director framed the {target}.",
          tags: [
            "objects",
            "acting"
          ]
        },
        {
          id: "movies_objects_1_1",
          role: "objects",
          text: "The preview revealed the {target}.",
          tags: [
            "objects",
            "acting"
          ]
        },
        {
          id: "movies_actions_1_0",
          role: "actions",
          text: "The actor had to {target}.",
          tags: [
            "actions",
            "acting"
          ]
        },
        {
          id: "movies_actions_1_1",
          role: "actions",
          text: "The editor chose to {target}.",
          tags: [
            "actions",
            "acting"
          ]
        },
        {
          id: "movies_moods_1_0",
          role: "moods",
          text: "The final scene felt {target}.",
          tags: [
            "moods",
            "acting"
          ]
        },
        {
          id: "movies_moods_1_1",
          role: "moods",
          text: "The trailer suddenly became {target}.",
          tags: [
            "moods",
            "acting"
          ]
        },
        {
          id: "movies_adverbs_1_0",
          role: "adverbs",
          text: "The actor delivered the line {target}.",
          tags: [
            "adverbs",
            "acting"
          ]
        },
        {
          id: "movies_adverbs_1_1",
          role: "adverbs",
          text: "The editor cut the scene {target}.",
          tags: [
            "adverbs",
            "acting"
          ]
        }
      ]
    },
    {
      id: "movies_comedy",
      topic: "Comedy",
      scene: "comedy scene",
      people: [
        "hero",
        "critic",
        "producer",
        "animator",
        "stuntman",
        "composer"
      ],
      places: [
        "set",
        "studio",
        "archive",
        "premiere",
        "festival",
        "booth"
      ],
      objects: [
        "poster",
        "frame",
        "microphone",
        "spotlight",
        "ticket",
        "soundtrack"
      ],
      actions: [
        "rehearse",
        "project",
        "animate",
        "record",
        "perform",
        "premiere"
      ],
      moods: [
        "epic",
        "silent",
        "emotional",
        "mysterious",
        "awkward",
        "heroic"
      ],
      adverbs: [
        "clearly",
        "wildly",
        "smoothly",
        "loudly",
        "carefully"
      ],
      facts: [
        "Comedy belongs to Movies: film craft, scenes, performers, genres, and storytelling.",
        "comedy scene gives Movies prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        set: "set is a place or setting connected to Movies, especially Comedy.",
        studio: "studio is a place or setting connected to Movies, especially Comedy.",
        archive: "archive is a place or setting connected to Movies, especially Comedy.",
        premiere: "premiere is an action connected to Movies, especially Comedy.",
        festival: "festival is a place or setting connected to Movies, especially Comedy.",
        booth: "booth is a place or setting connected to Movies, especially Comedy.",
        hero: "hero is a person or role connected to Movies, especially Comedy.",
        critic: "critic is a person or role connected to Movies, especially Comedy.",
        producer: "producer is a person or role connected to Movies, especially Comedy.",
        animator: "animator is a person or role connected to Movies, especially Comedy.",
        stuntman: "stuntman is a person or role connected to Movies, especially Comedy.",
        composer: "composer is a person or role connected to Movies, especially Comedy.",
        poster: "poster is a term or object connected to Movies, especially Comedy.",
        frame: "frame is a term or object connected to Movies, especially Comedy.",
        microphone: "microphone is a term or object connected to Movies, especially Comedy.",
        spotlight: "spotlight is a term or object connected to Movies, especially Comedy.",
        ticket: "ticket is a term or object connected to Movies, especially Comedy.",
        soundtrack: "soundtrack is a term or object connected to Movies, especially Comedy.",
        rehearse: "rehearse is an action connected to Movies, especially Comedy.",
        project: "project is an action connected to Movies, especially Comedy.",
        animate: "animate is an action connected to Movies, especially Comedy.",
        record: "record is an action connected to Movies, especially Comedy.",
        perform: "perform is an action connected to Movies, especially Comedy.",
        epic: "epic is a description or mood connected to Movies, especially Comedy.",
        silent: "silent is a description or mood connected to Movies, especially Comedy.",
        emotional: "emotional is a description or mood connected to Movies, especially Comedy.",
        mysterious: "mysterious is a description or mood connected to Movies, especially Comedy.",
        awkward: "awkward is a description or mood connected to Movies, especially Comedy.",
        heroic: "heroic is a description or mood connected to Movies, especially Comedy.",
        clearly: "clearly is a way something happens connected to Movies, especially Comedy.",
        wildly: "wildly is a way something happens connected to Movies, especially Comedy.",
        smoothly: "smoothly is a way something happens connected to Movies, especially Comedy.",
        loudly: "loudly is a way something happens connected to Movies, especially Comedy.",
        carefully: "carefully is a way something happens connected to Movies, especially Comedy."
      },
      templates: [
        {
          id: "movies_places_2_0",
          role: "places",
          text: "The director framed the scene inside the {target}.",
          tags: [
            "places",
            "comedy"
          ]
        },
        {
          id: "movies_places_2_1",
          role: "places",
          text: "The audience gathered at the {target}.",
          tags: [
            "places",
            "comedy"
          ]
        },
        {
          id: "movies_people_2_0",
          role: "people",
          text: "The camera followed the {target}.",
          tags: [
            "people",
            "comedy"
          ]
        },
        {
          id: "movies_people_2_1",
          role: "people",
          text: "The final line was delivered by the {target}.",
          tags: [
            "people",
            "comedy"
          ]
        },
        {
          id: "movies_objects_2_0",
          role: "objects",
          text: "The director framed the {target}.",
          tags: [
            "objects",
            "comedy"
          ]
        },
        {
          id: "movies_objects_2_1",
          role: "objects",
          text: "The preview revealed the {target}.",
          tags: [
            "objects",
            "comedy"
          ]
        },
        {
          id: "movies_actions_2_0",
          role: "actions",
          text: "The actor had to {target}.",
          tags: [
            "actions",
            "comedy"
          ]
        },
        {
          id: "movies_actions_2_1",
          role: "actions",
          text: "The editor chose to {target}.",
          tags: [
            "actions",
            "comedy"
          ]
        },
        {
          id: "movies_moods_2_0",
          role: "moods",
          text: "The final scene felt {target}.",
          tags: [
            "moods",
            "comedy"
          ]
        },
        {
          id: "movies_moods_2_1",
          role: "moods",
          text: "The trailer suddenly became {target}.",
          tags: [
            "moods",
            "comedy"
          ]
        },
        {
          id: "movies_adverbs_2_0",
          role: "adverbs",
          text: "The actor delivered the line {target}.",
          tags: [
            "adverbs",
            "comedy"
          ]
        },
        {
          id: "movies_adverbs_2_1",
          role: "adverbs",
          text: "The editor cut the scene {target}.",
          tags: [
            "adverbs",
            "comedy"
          ]
        }
      ]
    },
    {
      id: "movies_horror",
      topic: "Horror",
      scene: "dark hallway",
      people: [
        "producer",
        "animator",
        "stuntman",
        "composer",
        "editor",
        "operator"
      ],
      places: [
        "archive",
        "premiere",
        "festival",
        "booth",
        "location",
        "cinema"
      ],
      objects: [
        "microphone",
        "spotlight",
        "ticket",
        "soundtrack",
        "clapper",
        "monster"
      ],
      actions: [
        "animate",
        "record",
        "perform",
        "premiere",
        "frame",
        "cut"
      ],
      moods: [
        "emotional",
        "mysterious",
        "awkward",
        "heroic",
        "cinematic",
        "dark"
      ],
      adverbs: [
        "smoothly",
        "loudly",
        "carefully",
        "suddenly",
        "slowly"
      ],
      facts: [
        "Horror belongs to Movies: film craft, scenes, performers, genres, and storytelling.",
        "dark hallway gives Movies prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        archive: "archive is a place or setting connected to Movies, especially Horror.",
        premiere: "premiere is an action connected to Movies, especially Horror.",
        festival: "festival is a place or setting connected to Movies, especially Horror.",
        booth: "booth is a place or setting connected to Movies, especially Horror.",
        location: "location is a place or setting connected to Movies, especially Horror.",
        cinema: "cinema is a place or setting connected to Movies, especially Horror.",
        producer: "producer is a person or role connected to Movies, especially Horror.",
        animator: "animator is a person or role connected to Movies, especially Horror.",
        stuntman: "stuntman is a person or role connected to Movies, especially Horror.",
        composer: "composer is a person or role connected to Movies, especially Horror.",
        editor: "editor is a person or role connected to Movies, especially Horror.",
        operator: "operator is a person or role connected to Movies, especially Horror.",
        microphone: "microphone is a term or object connected to Movies, especially Horror.",
        spotlight: "spotlight is a term or object connected to Movies, especially Horror.",
        ticket: "ticket is a term or object connected to Movies, especially Horror.",
        soundtrack: "soundtrack is a term or object connected to Movies, especially Horror.",
        clapper: "clapper is a term or object connected to Movies, especially Horror.",
        monster: "monster is a term or object connected to Movies, especially Horror.",
        animate: "animate is an action connected to Movies, especially Horror.",
        record: "record is an action connected to Movies, especially Horror.",
        perform: "perform is an action connected to Movies, especially Horror.",
        frame: "frame is an action connected to Movies, especially Horror.",
        cut: "cut is an action connected to Movies, especially Horror.",
        emotional: "emotional is a description or mood connected to Movies, especially Horror.",
        mysterious: "mysterious is a description or mood connected to Movies, especially Horror.",
        awkward: "awkward is a description or mood connected to Movies, especially Horror.",
        heroic: "heroic is a description or mood connected to Movies, especially Horror.",
        cinematic: "cinematic is a description or mood connected to Movies, especially Horror.",
        dark: "dark is a description or mood connected to Movies, especially Horror.",
        smoothly: "smoothly is a way something happens connected to Movies, especially Horror.",
        loudly: "loudly is a way something happens connected to Movies, especially Horror.",
        carefully: "carefully is a way something happens connected to Movies, especially Horror.",
        suddenly: "suddenly is a way something happens connected to Movies, especially Horror.",
        slowly: "slowly is a way something happens connected to Movies, especially Horror."
      },
      templates: [
        {
          id: "movies_places_3_0",
          role: "places",
          text: "The director framed the scene inside the {target}.",
          tags: [
            "places",
            "horror"
          ]
        },
        {
          id: "movies_places_3_1",
          role: "places",
          text: "The audience gathered at the {target}.",
          tags: [
            "places",
            "horror"
          ]
        },
        {
          id: "movies_people_3_0",
          role: "people",
          text: "The camera followed the {target}.",
          tags: [
            "people",
            "horror"
          ]
        },
        {
          id: "movies_people_3_1",
          role: "people",
          text: "The final line was delivered by the {target}.",
          tags: [
            "people",
            "horror"
          ]
        },
        {
          id: "movies_objects_3_0",
          role: "objects",
          text: "The director framed the {target}.",
          tags: [
            "objects",
            "horror"
          ]
        },
        {
          id: "movies_objects_3_1",
          role: "objects",
          text: "The preview revealed the {target}.",
          tags: [
            "objects",
            "horror"
          ]
        },
        {
          id: "movies_actions_3_0",
          role: "actions",
          text: "The actor had to {target}.",
          tags: [
            "actions",
            "horror"
          ]
        },
        {
          id: "movies_actions_3_1",
          role: "actions",
          text: "The editor chose to {target}.",
          tags: [
            "actions",
            "horror"
          ]
        },
        {
          id: "movies_moods_3_0",
          role: "moods",
          text: "The final scene felt {target}.",
          tags: [
            "moods",
            "horror"
          ]
        },
        {
          id: "movies_moods_3_1",
          role: "moods",
          text: "The trailer suddenly became {target}.",
          tags: [
            "moods",
            "horror"
          ]
        },
        {
          id: "movies_adverbs_3_0",
          role: "adverbs",
          text: "The actor delivered the line {target}.",
          tags: [
            "adverbs",
            "horror"
          ]
        },
        {
          id: "movies_adverbs_3_1",
          role: "adverbs",
          text: "The editor cut the scene {target}.",
          tags: [
            "adverbs",
            "horror"
          ]
        }
      ]
    },
    {
      id: "movies_animation",
      topic: "Animation",
      scene: "animation studio",
      people: [
        "stuntman",
        "composer",
        "editor",
        "operator",
        "actor",
        "director"
      ],
      places: [
        "festival",
        "booth",
        "location",
        "cinema",
        "theater",
        "screen"
      ],
      objects: [
        "ticket",
        "soundtrack",
        "clapper",
        "monster",
        "camera",
        "script"
      ],
      actions: [
        "perform",
        "premiere",
        "frame",
        "cut",
        "film",
        "edit"
      ],
      moods: [
        "awkward",
        "heroic",
        "cinematic",
        "dark",
        "dramatic",
        "funny"
      ],
      adverbs: [
        "carefully",
        "suddenly",
        "slowly",
        "boldly",
        "quietly"
      ],
      facts: [
        "Animation belongs to Movies: film craft, scenes, performers, genres, and storytelling.",
        "animation studio gives Movies prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        festival: "festival is a place or setting connected to Movies, especially Animation.",
        booth: "booth is a place or setting connected to Movies, especially Animation.",
        location: "location is a place or setting connected to Movies, especially Animation.",
        cinema: "cinema is a place or setting connected to Movies, especially Animation.",
        theater: "theater is a place or setting connected to Movies, especially Animation.",
        screen: "screen is a place or setting connected to Movies, especially Animation.",
        stuntman: "stuntman is a person or role connected to Movies, especially Animation.",
        composer: "composer is a person or role connected to Movies, especially Animation.",
        editor: "editor is a person or role connected to Movies, especially Animation.",
        operator: "operator is a person or role connected to Movies, especially Animation.",
        actor: "actor is a person or role connected to Movies, especially Animation.",
        director: "director is a person or role connected to Movies, especially Animation.",
        ticket: "ticket is a term or object connected to Movies, especially Animation.",
        soundtrack: "soundtrack is a term or object connected to Movies, especially Animation.",
        clapper: "clapper is a term or object connected to Movies, especially Animation.",
        monster: "monster is a term or object connected to Movies, especially Animation.",
        camera: "camera is a term or object connected to Movies, especially Animation.",
        script: "script is a term or object connected to Movies, especially Animation.",
        perform: "perform is an action connected to Movies, especially Animation.",
        premiere: "premiere is an action connected to Movies, especially Animation.",
        frame: "frame is an action connected to Movies, especially Animation.",
        cut: "cut is an action connected to Movies, especially Animation.",
        film: "film is an action connected to Movies, especially Animation.",
        edit: "edit is an action connected to Movies, especially Animation.",
        awkward: "awkward is a description or mood connected to Movies, especially Animation.",
        heroic: "heroic is a description or mood connected to Movies, especially Animation.",
        cinematic: "cinematic is a description or mood connected to Movies, especially Animation.",
        dark: "dark is a description or mood connected to Movies, especially Animation.",
        dramatic: "dramatic is a description or mood connected to Movies, especially Animation.",
        funny: "funny is a description or mood connected to Movies, especially Animation.",
        carefully: "carefully is a way something happens connected to Movies, especially Animation.",
        suddenly: "suddenly is a way something happens connected to Movies, especially Animation.",
        slowly: "slowly is a way something happens connected to Movies, especially Animation.",
        boldly: "boldly is a way something happens connected to Movies, especially Animation.",
        quietly: "quietly is a way something happens connected to Movies, especially Animation."
      },
      templates: [
        {
          id: "movies_places_4_0",
          role: "places",
          text: "The director framed the scene inside the {target}.",
          tags: [
            "places",
            "animation"
          ]
        },
        {
          id: "movies_places_4_1",
          role: "places",
          text: "The audience gathered at the {target}.",
          tags: [
            "places",
            "animation"
          ]
        },
        {
          id: "movies_people_4_0",
          role: "people",
          text: "The camera followed the {target}.",
          tags: [
            "people",
            "animation"
          ]
        },
        {
          id: "movies_people_4_1",
          role: "people",
          text: "The final line was delivered by the {target}.",
          tags: [
            "people",
            "animation"
          ]
        },
        {
          id: "movies_objects_4_0",
          role: "objects",
          text: "The director framed the {target}.",
          tags: [
            "objects",
            "animation"
          ]
        },
        {
          id: "movies_objects_4_1",
          role: "objects",
          text: "The preview revealed the {target}.",
          tags: [
            "objects",
            "animation"
          ]
        },
        {
          id: "movies_actions_4_0",
          role: "actions",
          text: "The actor had to {target}.",
          tags: [
            "actions",
            "animation"
          ]
        },
        {
          id: "movies_actions_4_1",
          role: "actions",
          text: "The editor chose to {target}.",
          tags: [
            "actions",
            "animation"
          ]
        },
        {
          id: "movies_moods_4_0",
          role: "moods",
          text: "The final scene felt {target}.",
          tags: [
            "moods",
            "animation"
          ]
        },
        {
          id: "movies_moods_4_1",
          role: "moods",
          text: "The trailer suddenly became {target}.",
          tags: [
            "moods",
            "animation"
          ]
        },
        {
          id: "movies_adverbs_4_0",
          role: "adverbs",
          text: "The actor delivered the line {target}.",
          tags: [
            "adverbs",
            "animation"
          ]
        },
        {
          id: "movies_adverbs_4_1",
          role: "adverbs",
          text: "The editor cut the scene {target}.",
          tags: [
            "adverbs",
            "animation"
          ]
        }
      ]
    },
    {
      id: "movies_cinema",
      topic: "Cinema",
      scene: "cinema screen",
      people: [
        "editor",
        "operator",
        "actor",
        "director",
        "writer",
        "villain"
      ],
      places: [
        "location",
        "cinema",
        "theater",
        "screen",
        "stage",
        "set"
      ],
      objects: [
        "clapper",
        "monster",
        "camera",
        "script",
        "trailer",
        "costume"
      ],
      actions: [
        "frame",
        "cut",
        "film",
        "edit",
        "act",
        "direct"
      ],
      moods: [
        "cinematic",
        "dark",
        "dramatic",
        "funny",
        "tense",
        "scary"
      ],
      adverbs: [
        "slowly",
        "boldly",
        "quietly",
        "quickly",
        "clearly"
      ],
      facts: [
        "Cinema belongs to Movies: film craft, scenes, performers, genres, and storytelling.",
        "cinema screen gives Movies prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        location: "location is a place or setting connected to Movies, especially Cinema.",
        cinema: "cinema is a place or setting connected to Movies, especially Cinema.",
        theater: "theater is a place or setting connected to Movies, especially Cinema.",
        screen: "screen is a place or setting connected to Movies, especially Cinema.",
        stage: "stage is a place or setting connected to Movies, especially Cinema.",
        set: "set is a place or setting connected to Movies, especially Cinema.",
        editor: "editor is a person or role connected to Movies, especially Cinema.",
        operator: "operator is a person or role connected to Movies, especially Cinema.",
        actor: "actor is a person or role connected to Movies, especially Cinema.",
        director: "director is a person or role connected to Movies, especially Cinema.",
        writer: "writer is a person or role connected to Movies, especially Cinema.",
        villain: "villain is a person or role connected to Movies, especially Cinema.",
        clapper: "clapper is a term or object connected to Movies, especially Cinema.",
        monster: "monster is a term or object connected to Movies, especially Cinema.",
        camera: "camera is a term or object connected to Movies, especially Cinema.",
        script: "script is a term or object connected to Movies, especially Cinema.",
        trailer: "trailer is a term or object connected to Movies, especially Cinema.",
        costume: "costume is a term or object connected to Movies, especially Cinema.",
        frame: "frame is an action connected to Movies, especially Cinema.",
        cut: "cut is an action connected to Movies, especially Cinema.",
        film: "film is an action connected to Movies, especially Cinema.",
        edit: "edit is an action connected to Movies, especially Cinema.",
        act: "act is an action connected to Movies, especially Cinema.",
        direct: "direct is an action connected to Movies, especially Cinema.",
        cinematic: "cinematic is a description or mood connected to Movies, especially Cinema.",
        dark: "dark is a description or mood connected to Movies, especially Cinema.",
        dramatic: "dramatic is a description or mood connected to Movies, especially Cinema.",
        funny: "funny is a description or mood connected to Movies, especially Cinema.",
        tense: "tense is a description or mood connected to Movies, especially Cinema.",
        scary: "scary is a description or mood connected to Movies, especially Cinema.",
        slowly: "slowly is a way something happens connected to Movies, especially Cinema.",
        boldly: "boldly is a way something happens connected to Movies, especially Cinema.",
        quietly: "quietly is a way something happens connected to Movies, especially Cinema.",
        quickly: "quickly is a way something happens connected to Movies, especially Cinema.",
        clearly: "clearly is a way something happens connected to Movies, especially Cinema."
      },
      templates: [
        {
          id: "movies_places_5_0",
          role: "places",
          text: "The director framed the scene inside the {target}.",
          tags: [
            "places",
            "cinema"
          ]
        },
        {
          id: "movies_places_5_1",
          role: "places",
          text: "The audience gathered at the {target}.",
          tags: [
            "places",
            "cinema"
          ]
        },
        {
          id: "movies_people_5_0",
          role: "people",
          text: "The camera followed the {target}.",
          tags: [
            "people",
            "cinema"
          ]
        },
        {
          id: "movies_people_5_1",
          role: "people",
          text: "The final line was delivered by the {target}.",
          tags: [
            "people",
            "cinema"
          ]
        },
        {
          id: "movies_objects_5_0",
          role: "objects",
          text: "The director framed the {target}.",
          tags: [
            "objects",
            "cinema"
          ]
        },
        {
          id: "movies_objects_5_1",
          role: "objects",
          text: "The preview revealed the {target}.",
          tags: [
            "objects",
            "cinema"
          ]
        },
        {
          id: "movies_actions_5_0",
          role: "actions",
          text: "The actor had to {target}.",
          tags: [
            "actions",
            "cinema"
          ]
        },
        {
          id: "movies_actions_5_1",
          role: "actions",
          text: "The editor chose to {target}.",
          tags: [
            "actions",
            "cinema"
          ]
        },
        {
          id: "movies_moods_5_0",
          role: "moods",
          text: "The final scene felt {target}.",
          tags: [
            "moods",
            "cinema"
          ]
        },
        {
          id: "movies_moods_5_1",
          role: "moods",
          text: "The trailer suddenly became {target}.",
          tags: [
            "moods",
            "cinema"
          ]
        },
        {
          id: "movies_adverbs_5_0",
          role: "adverbs",
          text: "The actor delivered the line {target}.",
          tags: [
            "adverbs",
            "cinema"
          ]
        },
        {
          id: "movies_adverbs_5_1",
          role: "adverbs",
          text: "The editor cut the scene {target}.",
          tags: [
            "adverbs",
            "cinema"
          ]
        }
      ]
    }
  ]
});
