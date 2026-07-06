import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "fashion",
  name: "Fashion",
  theme: "clothing, styling, design, materials, and personal identity",
  nodes: [
    {
      id: "fashion_runway",
      topic: "Runway",
      scene: "runway show",
      people: [
        "model",
        "designer",
        "stylist",
        "tailor",
        "critic",
        "photographer"
      ],
      places: [
        "runway",
        "studio",
        "backstage",
        "boutique",
        "street",
        "store"
      ],
      objects: [
        "jacket",
        "dress",
        "sneaker",
        "fabric",
        "lace",
        "sole"
      ],
      actions: [
        "pose",
        "walk",
        "tailor",
        "style",
        "collect",
        "stitch"
      ],
      moods: [
        "glamorous",
        "fresh",
        "bold",
        "sleek",
        "casual",
        "elegant"
      ],
      adverbs: [
        "smoothly",
        "boldly",
        "carefully",
        "neatly",
        "quietly"
      ],
      facts: [
        "Runway belongs to Fashion: clothing, styling, design, materials, and personal identity.",
        "runway show gives Fashion prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        runway: "runway is a place or setting connected to Fashion, especially Runway.",
        studio: "studio is a place or setting connected to Fashion, especially Runway.",
        backstage: "backstage is a place or setting connected to Fashion, especially Runway.",
        boutique: "boutique is a place or setting connected to Fashion, especially Runway.",
        street: "street is a place or setting connected to Fashion, especially Runway.",
        store: "store is a place or setting connected to Fashion, especially Runway.",
        model: "model is a person or role connected to Fashion, especially Runway.",
        designer: "designer is a person or role connected to Fashion, especially Runway.",
        stylist: "stylist is a person or role connected to Fashion, especially Runway.",
        tailor: "tailor is an action connected to Fashion, especially Runway.",
        critic: "critic is a person or role connected to Fashion, especially Runway.",
        photographer: "photographer is a person or role connected to Fashion, especially Runway.",
        jacket: "jacket is a term or object connected to Fashion, especially Runway.",
        dress: "dress is a term or object connected to Fashion, especially Runway.",
        sneaker: "sneaker is a term or object connected to Fashion, especially Runway.",
        fabric: "fabric is a term or object connected to Fashion, especially Runway.",
        lace: "lace is a term or object connected to Fashion, especially Runway.",
        sole: "sole is a term or object connected to Fashion, especially Runway.",
        pose: "pose is an action connected to Fashion, especially Runway.",
        walk: "walk is an action connected to Fashion, especially Runway.",
        style: "style is an action connected to Fashion, especially Runway.",
        collect: "collect is an action connected to Fashion, especially Runway.",
        stitch: "stitch is an action connected to Fashion, especially Runway.",
        glamorous: "glamorous is a description or mood connected to Fashion, especially Runway.",
        fresh: "fresh is a description or mood connected to Fashion, especially Runway.",
        bold: "bold is a description or mood connected to Fashion, especially Runway.",
        sleek: "sleek is a description or mood connected to Fashion, especially Runway.",
        casual: "casual is a description or mood connected to Fashion, especially Runway.",
        elegant: "elegant is a description or mood connected to Fashion, especially Runway.",
        smoothly: "smoothly is a way something happens connected to Fashion, especially Runway.",
        boldly: "boldly is a way something happens connected to Fashion, especially Runway.",
        carefully: "carefully is a way something happens connected to Fashion, especially Runway.",
        neatly: "neatly is a way something happens connected to Fashion, especially Runway.",
        quietly: "quietly is a way something happens connected to Fashion, especially Runway."
      },
      templates: [
        {
          id: "fashion_places_0_0",
          role: "places",
          text: "The model walked across the {target}.",
          tags: [
            "places",
            "runway"
          ]
        },
        {
          id: "fashion_places_0_1",
          role: "places",
          text: "The designer photographed the look at the {target}.",
          tags: [
            "places",
            "runway"
          ]
        },
        {
          id: "fashion_people_0_0",
          role: "people",
          text: "The jacket was adjusted by the {target}.",
          tags: [
            "people",
            "runway"
          ]
        },
        {
          id: "fashion_people_0_1",
          role: "people",
          text: "The runway lights followed the {target}.",
          tags: [
            "people",
            "runway"
          ]
        },
        {
          id: "fashion_objects_0_0",
          role: "objects",
          text: "The designer adjusted the {target}.",
          tags: [
            "objects",
            "runway"
          ]
        },
        {
          id: "fashion_objects_0_1",
          role: "objects",
          text: "The cut changed the {target}.",
          tags: [
            "objects",
            "runway"
          ]
        },
        {
          id: "fashion_actions_0_0",
          role: "actions",
          text: "The stylist chose to {target}.",
          tags: [
            "actions",
            "runway"
          ]
        },
        {
          id: "fashion_actions_0_1",
          role: "actions",
          text: "The model had to {target}.",
          tags: [
            "actions",
            "runway"
          ]
        },
        {
          id: "fashion_moods_0_0",
          role: "moods",
          text: "The whole outfit looked {target}.",
          tags: [
            "moods",
            "runway"
          ]
        },
        {
          id: "fashion_moods_0_1",
          role: "moods",
          text: "The fabric choice felt {target}.",
          tags: [
            "moods",
            "runway"
          ]
        },
        {
          id: "fashion_adverbs_0_0",
          role: "adverbs",
          text: "The model crossed the runway {target}.",
          tags: [
            "adverbs",
            "runway"
          ]
        },
        {
          id: "fashion_adverbs_0_1",
          role: "adverbs",
          text: "The stylist pinned the fabric {target}.",
          tags: [
            "adverbs",
            "runway"
          ]
        }
      ]
    },
    {
      id: "fashion_streetwear",
      topic: "Streetwear",
      scene: "street corner",
      people: [
        "stylist",
        "tailor",
        "critic",
        "photographer",
        "collector",
        "skater"
      ],
      places: [
        "backstage",
        "boutique",
        "street",
        "store",
        "mirror",
        "atelier"
      ],
      objects: [
        "sneaker",
        "fabric",
        "lace",
        "sole",
        "heel",
        "camera"
      ],
      actions: [
        "tailor",
        "style",
        "collect",
        "stitch",
        "drape",
        "sketch"
      ],
      moods: [
        "bold",
        "sleek",
        "casual",
        "elegant",
        "dramatic",
        "confident"
      ],
      adverbs: [
        "carefully",
        "neatly",
        "quietly",
        "brightly",
        "loosely"
      ],
      facts: [
        "Streetwear belongs to Fashion: clothing, styling, design, materials, and personal identity.",
        "street corner gives Fashion prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        backstage: "backstage is a place or setting connected to Fashion, especially Streetwear.",
        boutique: "boutique is a place or setting connected to Fashion, especially Streetwear.",
        street: "street is a place or setting connected to Fashion, especially Streetwear.",
        store: "store is a place or setting connected to Fashion, especially Streetwear.",
        mirror: "mirror is a place or setting connected to Fashion, especially Streetwear.",
        atelier: "atelier is a place or setting connected to Fashion, especially Streetwear.",
        stylist: "stylist is a person or role connected to Fashion, especially Streetwear.",
        tailor: "tailor is an action connected to Fashion, especially Streetwear.",
        critic: "critic is a person or role connected to Fashion, especially Streetwear.",
        photographer: "photographer is a person or role connected to Fashion, especially Streetwear.",
        collector: "collector is a person or role connected to Fashion, especially Streetwear.",
        skater: "skater is a person or role connected to Fashion, especially Streetwear.",
        sneaker: "sneaker is a term or object connected to Fashion, especially Streetwear.",
        fabric: "fabric is a term or object connected to Fashion, especially Streetwear.",
        lace: "lace is a term or object connected to Fashion, especially Streetwear.",
        sole: "sole is a term or object connected to Fashion, especially Streetwear.",
        heel: "heel is a term or object connected to Fashion, especially Streetwear.",
        camera: "camera is a term or object connected to Fashion, especially Streetwear.",
        style: "style is an action connected to Fashion, especially Streetwear.",
        collect: "collect is an action connected to Fashion, especially Streetwear.",
        stitch: "stitch is an action connected to Fashion, especially Streetwear.",
        drape: "drape is an action connected to Fashion, especially Streetwear.",
        sketch: "sketch is an action connected to Fashion, especially Streetwear.",
        bold: "bold is a description or mood connected to Fashion, especially Streetwear.",
        sleek: "sleek is a description or mood connected to Fashion, especially Streetwear.",
        casual: "casual is a description or mood connected to Fashion, especially Streetwear.",
        elegant: "elegant is a description or mood connected to Fashion, especially Streetwear.",
        dramatic: "dramatic is a description or mood connected to Fashion, especially Streetwear.",
        confident: "confident is a description or mood connected to Fashion, especially Streetwear.",
        carefully: "carefully is a way something happens connected to Fashion, especially Streetwear.",
        neatly: "neatly is a way something happens connected to Fashion, especially Streetwear.",
        quietly: "quietly is a way something happens connected to Fashion, especially Streetwear.",
        brightly: "brightly is a way something happens connected to Fashion, especially Streetwear.",
        loosely: "loosely is a way something happens connected to Fashion, especially Streetwear."
      },
      templates: [
        {
          id: "fashion_places_1_0",
          role: "places",
          text: "The model walked across the {target}.",
          tags: [
            "places",
            "streetwear"
          ]
        },
        {
          id: "fashion_places_1_1",
          role: "places",
          text: "The designer photographed the look at the {target}.",
          tags: [
            "places",
            "streetwear"
          ]
        },
        {
          id: "fashion_people_1_0",
          role: "people",
          text: "The jacket was adjusted by the {target}.",
          tags: [
            "people",
            "streetwear"
          ]
        },
        {
          id: "fashion_people_1_1",
          role: "people",
          text: "The runway lights followed the {target}.",
          tags: [
            "people",
            "streetwear"
          ]
        },
        {
          id: "fashion_objects_1_0",
          role: "objects",
          text: "The designer adjusted the {target}.",
          tags: [
            "objects",
            "streetwear"
          ]
        },
        {
          id: "fashion_objects_1_1",
          role: "objects",
          text: "The cut changed the {target}.",
          tags: [
            "objects",
            "streetwear"
          ]
        },
        {
          id: "fashion_actions_1_0",
          role: "actions",
          text: "The stylist chose to {target}.",
          tags: [
            "actions",
            "streetwear"
          ]
        },
        {
          id: "fashion_actions_1_1",
          role: "actions",
          text: "The model had to {target}.",
          tags: [
            "actions",
            "streetwear"
          ]
        },
        {
          id: "fashion_moods_1_0",
          role: "moods",
          text: "The whole outfit looked {target}.",
          tags: [
            "moods",
            "streetwear"
          ]
        },
        {
          id: "fashion_moods_1_1",
          role: "moods",
          text: "The fabric choice felt {target}.",
          tags: [
            "moods",
            "streetwear"
          ]
        },
        {
          id: "fashion_adverbs_1_0",
          role: "adverbs",
          text: "The model crossed the runway {target}.",
          tags: [
            "adverbs",
            "streetwear"
          ]
        },
        {
          id: "fashion_adverbs_1_1",
          role: "adverbs",
          text: "The stylist pinned the fabric {target}.",
          tags: [
            "adverbs",
            "streetwear"
          ]
        }
      ]
    },
    {
      id: "fashion_tailoring",
      topic: "Tailoring",
      scene: "tailor shop",
      people: [
        "critic",
        "photographer",
        "collector",
        "skater",
        "athlete",
        "buyer"
      ],
      places: [
        "street",
        "store",
        "mirror",
        "atelier",
        "closet",
        "showroom"
      ],
      objects: [
        "lace",
        "sole",
        "heel",
        "camera",
        "pattern",
        "scarf"
      ],
      actions: [
        "collect",
        "stitch",
        "drape",
        "sketch",
        "match",
        "layer"
      ],
      moods: [
        "casual",
        "elegant",
        "dramatic",
        "confident",
        "minimal",
        "vintage"
      ],
      adverbs: [
        "quietly",
        "brightly",
        "loosely",
        "sharply",
        "lightly"
      ],
      facts: [
        "Tailoring belongs to Fashion: clothing, styling, design, materials, and personal identity.",
        "tailor shop gives Fashion prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        street: "street is a place or setting connected to Fashion, especially Tailoring.",
        store: "store is a place or setting connected to Fashion, especially Tailoring.",
        mirror: "mirror is a place or setting connected to Fashion, especially Tailoring.",
        atelier: "atelier is a place or setting connected to Fashion, especially Tailoring.",
        closet: "closet is a place or setting connected to Fashion, especially Tailoring.",
        showroom: "showroom is a place or setting connected to Fashion, especially Tailoring.",
        critic: "critic is a person or role connected to Fashion, especially Tailoring.",
        photographer: "photographer is a person or role connected to Fashion, especially Tailoring.",
        collector: "collector is a person or role connected to Fashion, especially Tailoring.",
        skater: "skater is a person or role connected to Fashion, especially Tailoring.",
        athlete: "athlete is a person or role connected to Fashion, especially Tailoring.",
        buyer: "buyer is a person or role connected to Fashion, especially Tailoring.",
        lace: "lace is a term or object connected to Fashion, especially Tailoring.",
        sole: "sole is a term or object connected to Fashion, especially Tailoring.",
        heel: "heel is a term or object connected to Fashion, especially Tailoring.",
        camera: "camera is a term or object connected to Fashion, especially Tailoring.",
        pattern: "pattern is a term or object connected to Fashion, especially Tailoring.",
        scarf: "scarf is a term or object connected to Fashion, especially Tailoring.",
        collect: "collect is an action connected to Fashion, especially Tailoring.",
        stitch: "stitch is an action connected to Fashion, especially Tailoring.",
        drape: "drape is an action connected to Fashion, especially Tailoring.",
        sketch: "sketch is an action connected to Fashion, especially Tailoring.",
        match: "match is an action connected to Fashion, especially Tailoring.",
        layer: "layer is an action connected to Fashion, especially Tailoring.",
        casual: "casual is a description or mood connected to Fashion, especially Tailoring.",
        elegant: "elegant is a description or mood connected to Fashion, especially Tailoring.",
        dramatic: "dramatic is a description or mood connected to Fashion, especially Tailoring.",
        confident: "confident is a description or mood connected to Fashion, especially Tailoring.",
        minimal: "minimal is a description or mood connected to Fashion, especially Tailoring.",
        vintage: "vintage is a description or mood connected to Fashion, especially Tailoring.",
        quietly: "quietly is a way something happens connected to Fashion, especially Tailoring.",
        brightly: "brightly is a way something happens connected to Fashion, especially Tailoring.",
        loosely: "loosely is a way something happens connected to Fashion, especially Tailoring.",
        sharply: "sharply is a way something happens connected to Fashion, especially Tailoring.",
        lightly: "lightly is a way something happens connected to Fashion, especially Tailoring."
      },
      templates: [
        {
          id: "fashion_places_2_0",
          role: "places",
          text: "The model walked across the {target}.",
          tags: [
            "places",
            "tailoring"
          ]
        },
        {
          id: "fashion_places_2_1",
          role: "places",
          text: "The designer photographed the look at the {target}.",
          tags: [
            "places",
            "tailoring"
          ]
        },
        {
          id: "fashion_people_2_0",
          role: "people",
          text: "The jacket was adjusted by the {target}.",
          tags: [
            "people",
            "tailoring"
          ]
        },
        {
          id: "fashion_people_2_1",
          role: "people",
          text: "The runway lights followed the {target}.",
          tags: [
            "people",
            "tailoring"
          ]
        },
        {
          id: "fashion_objects_2_0",
          role: "objects",
          text: "The designer adjusted the {target}.",
          tags: [
            "objects",
            "tailoring"
          ]
        },
        {
          id: "fashion_objects_2_1",
          role: "objects",
          text: "The cut changed the {target}.",
          tags: [
            "objects",
            "tailoring"
          ]
        },
        {
          id: "fashion_actions_2_0",
          role: "actions",
          text: "The stylist chose to {target}.",
          tags: [
            "actions",
            "tailoring"
          ]
        },
        {
          id: "fashion_actions_2_1",
          role: "actions",
          text: "The model had to {target}.",
          tags: [
            "actions",
            "tailoring"
          ]
        },
        {
          id: "fashion_moods_2_0",
          role: "moods",
          text: "The whole outfit looked {target}.",
          tags: [
            "moods",
            "tailoring"
          ]
        },
        {
          id: "fashion_moods_2_1",
          role: "moods",
          text: "The fabric choice felt {target}.",
          tags: [
            "moods",
            "tailoring"
          ]
        },
        {
          id: "fashion_adverbs_2_0",
          role: "adverbs",
          text: "The model crossed the runway {target}.",
          tags: [
            "adverbs",
            "tailoring"
          ]
        },
        {
          id: "fashion_adverbs_2_1",
          role: "adverbs",
          text: "The stylist pinned the fabric {target}.",
          tags: [
            "adverbs",
            "tailoring"
          ]
        }
      ]
    },
    {
      id: "fashion_accessories",
      topic: "Accessories",
      scene: "accessory table",
      people: [
        "collector",
        "skater",
        "athlete",
        "buyer",
        "editor",
        "influencer"
      ],
      places: [
        "mirror",
        "atelier",
        "closet",
        "showroom",
        "catwalk",
        "fitting"
      ],
      objects: [
        "heel",
        "camera",
        "pattern",
        "scarf",
        "button",
        "silhouette"
      ],
      actions: [
        "drape",
        "sketch",
        "match",
        "layer",
        "fit",
        "hem"
      ],
      moods: [
        "dramatic",
        "confident",
        "minimal",
        "vintage",
        "sharp",
        "clean"
      ],
      adverbs: [
        "loosely",
        "sharply",
        "lightly",
        "gracefully",
        "smoothly"
      ],
      facts: [
        "Accessories belongs to Fashion: clothing, styling, design, materials, and personal identity.",
        "accessory table gives Fashion prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        mirror: "mirror is a place or setting connected to Fashion, especially Accessories.",
        atelier: "atelier is a place or setting connected to Fashion, especially Accessories.",
        closet: "closet is a place or setting connected to Fashion, especially Accessories.",
        showroom: "showroom is a place or setting connected to Fashion, especially Accessories.",
        catwalk: "catwalk is a place or setting connected to Fashion, especially Accessories.",
        fitting: "fitting is a place or setting connected to Fashion, especially Accessories.",
        collector: "collector is a person or role connected to Fashion, especially Accessories.",
        skater: "skater is a person or role connected to Fashion, especially Accessories.",
        athlete: "athlete is a person or role connected to Fashion, especially Accessories.",
        buyer: "buyer is a person or role connected to Fashion, especially Accessories.",
        editor: "editor is a person or role connected to Fashion, especially Accessories.",
        influencer: "influencer is a person or role connected to Fashion, especially Accessories.",
        heel: "heel is a term or object connected to Fashion, especially Accessories.",
        camera: "camera is a term or object connected to Fashion, especially Accessories.",
        pattern: "pattern is a term or object connected to Fashion, especially Accessories.",
        scarf: "scarf is a term or object connected to Fashion, especially Accessories.",
        button: "button is a term or object connected to Fashion, especially Accessories.",
        silhouette: "silhouette is a term or object connected to Fashion, especially Accessories.",
        drape: "drape is an action connected to Fashion, especially Accessories.",
        sketch: "sketch is an action connected to Fashion, especially Accessories.",
        match: "match is an action connected to Fashion, especially Accessories.",
        layer: "layer is an action connected to Fashion, especially Accessories.",
        fit: "fit is an action connected to Fashion, especially Accessories.",
        hem: "hem is an action connected to Fashion, especially Accessories.",
        dramatic: "dramatic is a description or mood connected to Fashion, especially Accessories.",
        confident: "confident is a description or mood connected to Fashion, especially Accessories.",
        minimal: "minimal is a description or mood connected to Fashion, especially Accessories.",
        vintage: "vintage is a description or mood connected to Fashion, especially Accessories.",
        sharp: "sharp is a description or mood connected to Fashion, especially Accessories.",
        clean: "clean is a description or mood connected to Fashion, especially Accessories.",
        loosely: "loosely is a way something happens connected to Fashion, especially Accessories.",
        sharply: "sharply is a way something happens connected to Fashion, especially Accessories.",
        lightly: "lightly is a way something happens connected to Fashion, especially Accessories.",
        gracefully: "gracefully is a way something happens connected to Fashion, especially Accessories.",
        smoothly: "smoothly is a way something happens connected to Fashion, especially Accessories."
      },
      templates: [
        {
          id: "fashion_places_3_0",
          role: "places",
          text: "The model walked across the {target}.",
          tags: [
            "places",
            "accessories"
          ]
        },
        {
          id: "fashion_places_3_1",
          role: "places",
          text: "The designer photographed the look at the {target}.",
          tags: [
            "places",
            "accessories"
          ]
        },
        {
          id: "fashion_people_3_0",
          role: "people",
          text: "The jacket was adjusted by the {target}.",
          tags: [
            "people",
            "accessories"
          ]
        },
        {
          id: "fashion_people_3_1",
          role: "people",
          text: "The runway lights followed the {target}.",
          tags: [
            "people",
            "accessories"
          ]
        },
        {
          id: "fashion_objects_3_0",
          role: "objects",
          text: "The designer adjusted the {target}.",
          tags: [
            "objects",
            "accessories"
          ]
        },
        {
          id: "fashion_objects_3_1",
          role: "objects",
          text: "The cut changed the {target}.",
          tags: [
            "objects",
            "accessories"
          ]
        },
        {
          id: "fashion_actions_3_0",
          role: "actions",
          text: "The stylist chose to {target}.",
          tags: [
            "actions",
            "accessories"
          ]
        },
        {
          id: "fashion_actions_3_1",
          role: "actions",
          text: "The model had to {target}.",
          tags: [
            "actions",
            "accessories"
          ]
        },
        {
          id: "fashion_moods_3_0",
          role: "moods",
          text: "The whole outfit looked {target}.",
          tags: [
            "moods",
            "accessories"
          ]
        },
        {
          id: "fashion_moods_3_1",
          role: "moods",
          text: "The fabric choice felt {target}.",
          tags: [
            "moods",
            "accessories"
          ]
        },
        {
          id: "fashion_adverbs_3_0",
          role: "adverbs",
          text: "The model crossed the runway {target}.",
          tags: [
            "adverbs",
            "accessories"
          ]
        },
        {
          id: "fashion_adverbs_3_1",
          role: "adverbs",
          text: "The stylist pinned the fabric {target}.",
          tags: [
            "adverbs",
            "accessories"
          ]
        }
      ]
    },
    {
      id: "fashion_textiles",
      topic: "Textiles",
      scene: "textile studio",
      people: [
        "athlete",
        "buyer",
        "editor",
        "influencer",
        "model",
        "designer"
      ],
      places: [
        "closet",
        "showroom",
        "catwalk",
        "fitting",
        "runway",
        "studio"
      ],
      objects: [
        "pattern",
        "scarf",
        "button",
        "silhouette",
        "jacket",
        "dress"
      ],
      actions: [
        "match",
        "layer",
        "fit",
        "hem",
        "pose",
        "walk"
      ],
      moods: [
        "minimal",
        "vintage",
        "sharp",
        "clean",
        "glamorous",
        "fresh"
      ],
      adverbs: [
        "lightly",
        "gracefully",
        "smoothly",
        "boldly",
        "carefully"
      ],
      facts: [
        "Textiles belongs to Fashion: clothing, styling, design, materials, and personal identity.",
        "textile studio gives Fashion prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        closet: "closet is a place or setting connected to Fashion, especially Textiles.",
        showroom: "showroom is a place or setting connected to Fashion, especially Textiles.",
        catwalk: "catwalk is a place or setting connected to Fashion, especially Textiles.",
        fitting: "fitting is a place or setting connected to Fashion, especially Textiles.",
        runway: "runway is a place or setting connected to Fashion, especially Textiles.",
        studio: "studio is a place or setting connected to Fashion, especially Textiles.",
        athlete: "athlete is a person or role connected to Fashion, especially Textiles.",
        buyer: "buyer is a person or role connected to Fashion, especially Textiles.",
        editor: "editor is a person or role connected to Fashion, especially Textiles.",
        influencer: "influencer is a person or role connected to Fashion, especially Textiles.",
        model: "model is a person or role connected to Fashion, especially Textiles.",
        designer: "designer is a person or role connected to Fashion, especially Textiles.",
        pattern: "pattern is a term or object connected to Fashion, especially Textiles.",
        scarf: "scarf is a term or object connected to Fashion, especially Textiles.",
        button: "button is a term or object connected to Fashion, especially Textiles.",
        silhouette: "silhouette is a term or object connected to Fashion, especially Textiles.",
        jacket: "jacket is a term or object connected to Fashion, especially Textiles.",
        dress: "dress is a term or object connected to Fashion, especially Textiles.",
        match: "match is an action connected to Fashion, especially Textiles.",
        layer: "layer is an action connected to Fashion, especially Textiles.",
        fit: "fit is an action connected to Fashion, especially Textiles.",
        hem: "hem is an action connected to Fashion, especially Textiles.",
        pose: "pose is an action connected to Fashion, especially Textiles.",
        walk: "walk is an action connected to Fashion, especially Textiles.",
        minimal: "minimal is a description or mood connected to Fashion, especially Textiles.",
        vintage: "vintage is a description or mood connected to Fashion, especially Textiles.",
        sharp: "sharp is a description or mood connected to Fashion, especially Textiles.",
        clean: "clean is a description or mood connected to Fashion, especially Textiles.",
        glamorous: "glamorous is a description or mood connected to Fashion, especially Textiles.",
        fresh: "fresh is a description or mood connected to Fashion, especially Textiles.",
        lightly: "lightly is a way something happens connected to Fashion, especially Textiles.",
        gracefully: "gracefully is a way something happens connected to Fashion, especially Textiles.",
        smoothly: "smoothly is a way something happens connected to Fashion, especially Textiles.",
        boldly: "boldly is a way something happens connected to Fashion, especially Textiles.",
        carefully: "carefully is a way something happens connected to Fashion, especially Textiles."
      },
      templates: [
        {
          id: "fashion_places_4_0",
          role: "places",
          text: "The model walked across the {target}.",
          tags: [
            "places",
            "textiles"
          ]
        },
        {
          id: "fashion_places_4_1",
          role: "places",
          text: "The designer photographed the look at the {target}.",
          tags: [
            "places",
            "textiles"
          ]
        },
        {
          id: "fashion_people_4_0",
          role: "people",
          text: "The jacket was adjusted by the {target}.",
          tags: [
            "people",
            "textiles"
          ]
        },
        {
          id: "fashion_people_4_1",
          role: "people",
          text: "The runway lights followed the {target}.",
          tags: [
            "people",
            "textiles"
          ]
        },
        {
          id: "fashion_objects_4_0",
          role: "objects",
          text: "The designer adjusted the {target}.",
          tags: [
            "objects",
            "textiles"
          ]
        },
        {
          id: "fashion_objects_4_1",
          role: "objects",
          text: "The cut changed the {target}.",
          tags: [
            "objects",
            "textiles"
          ]
        },
        {
          id: "fashion_actions_4_0",
          role: "actions",
          text: "The stylist chose to {target}.",
          tags: [
            "actions",
            "textiles"
          ]
        },
        {
          id: "fashion_actions_4_1",
          role: "actions",
          text: "The model had to {target}.",
          tags: [
            "actions",
            "textiles"
          ]
        },
        {
          id: "fashion_moods_4_0",
          role: "moods",
          text: "The whole outfit looked {target}.",
          tags: [
            "moods",
            "textiles"
          ]
        },
        {
          id: "fashion_moods_4_1",
          role: "moods",
          text: "The fabric choice felt {target}.",
          tags: [
            "moods",
            "textiles"
          ]
        },
        {
          id: "fashion_adverbs_4_0",
          role: "adverbs",
          text: "The model crossed the runway {target}.",
          tags: [
            "adverbs",
            "textiles"
          ]
        },
        {
          id: "fashion_adverbs_4_1",
          role: "adverbs",
          text: "The stylist pinned the fabric {target}.",
          tags: [
            "adverbs",
            "textiles"
          ]
        }
      ]
    },
    {
      id: "fashion_trends",
      topic: "Trends",
      scene: "trend board",
      people: [
        "editor",
        "influencer",
        "model",
        "designer",
        "stylist",
        "tailor"
      ],
      places: [
        "catwalk",
        "fitting",
        "runway",
        "studio",
        "backstage",
        "boutique"
      ],
      objects: [
        "button",
        "silhouette",
        "jacket",
        "dress",
        "sneaker",
        "fabric"
      ],
      actions: [
        "fit",
        "hem",
        "pose",
        "walk",
        "tailor",
        "style"
      ],
      moods: [
        "sharp",
        "clean",
        "glamorous",
        "fresh",
        "bold",
        "sleek"
      ],
      adverbs: [
        "smoothly",
        "boldly",
        "carefully",
        "neatly",
        "quietly"
      ],
      facts: [
        "Trends belongs to Fashion: clothing, styling, design, materials, and personal identity.",
        "trend board gives Fashion prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        catwalk: "catwalk is a place or setting connected to Fashion, especially Trends.",
        fitting: "fitting is a place or setting connected to Fashion, especially Trends.",
        runway: "runway is a place or setting connected to Fashion, especially Trends.",
        studio: "studio is a place or setting connected to Fashion, especially Trends.",
        backstage: "backstage is a place or setting connected to Fashion, especially Trends.",
        boutique: "boutique is a place or setting connected to Fashion, especially Trends.",
        editor: "editor is a person or role connected to Fashion, especially Trends.",
        influencer: "influencer is a person or role connected to Fashion, especially Trends.",
        model: "model is a person or role connected to Fashion, especially Trends.",
        designer: "designer is a person or role connected to Fashion, especially Trends.",
        stylist: "stylist is a person or role connected to Fashion, especially Trends.",
        tailor: "tailor is an action connected to Fashion, especially Trends.",
        button: "button is a term or object connected to Fashion, especially Trends.",
        silhouette: "silhouette is a term or object connected to Fashion, especially Trends.",
        jacket: "jacket is a term or object connected to Fashion, especially Trends.",
        dress: "dress is a term or object connected to Fashion, especially Trends.",
        sneaker: "sneaker is a term or object connected to Fashion, especially Trends.",
        fabric: "fabric is a term or object connected to Fashion, especially Trends.",
        fit: "fit is an action connected to Fashion, especially Trends.",
        hem: "hem is an action connected to Fashion, especially Trends.",
        pose: "pose is an action connected to Fashion, especially Trends.",
        walk: "walk is an action connected to Fashion, especially Trends.",
        style: "style is an action connected to Fashion, especially Trends.",
        sharp: "sharp is a description or mood connected to Fashion, especially Trends.",
        clean: "clean is a description or mood connected to Fashion, especially Trends.",
        glamorous: "glamorous is a description or mood connected to Fashion, especially Trends.",
        fresh: "fresh is a description or mood connected to Fashion, especially Trends.",
        bold: "bold is a description or mood connected to Fashion, especially Trends.",
        sleek: "sleek is a description or mood connected to Fashion, especially Trends.",
        smoothly: "smoothly is a way something happens connected to Fashion, especially Trends.",
        boldly: "boldly is a way something happens connected to Fashion, especially Trends.",
        carefully: "carefully is a way something happens connected to Fashion, especially Trends.",
        neatly: "neatly is a way something happens connected to Fashion, especially Trends.",
        quietly: "quietly is a way something happens connected to Fashion, especially Trends."
      },
      templates: [
        {
          id: "fashion_places_5_0",
          role: "places",
          text: "The model walked across the {target}.",
          tags: [
            "places",
            "trends"
          ]
        },
        {
          id: "fashion_places_5_1",
          role: "places",
          text: "The designer photographed the look at the {target}.",
          tags: [
            "places",
            "trends"
          ]
        },
        {
          id: "fashion_people_5_0",
          role: "people",
          text: "The jacket was adjusted by the {target}.",
          tags: [
            "people",
            "trends"
          ]
        },
        {
          id: "fashion_people_5_1",
          role: "people",
          text: "The runway lights followed the {target}.",
          tags: [
            "people",
            "trends"
          ]
        },
        {
          id: "fashion_objects_5_0",
          role: "objects",
          text: "The designer adjusted the {target}.",
          tags: [
            "objects",
            "trends"
          ]
        },
        {
          id: "fashion_objects_5_1",
          role: "objects",
          text: "The cut changed the {target}.",
          tags: [
            "objects",
            "trends"
          ]
        },
        {
          id: "fashion_actions_5_0",
          role: "actions",
          text: "The stylist chose to {target}.",
          tags: [
            "actions",
            "trends"
          ]
        },
        {
          id: "fashion_actions_5_1",
          role: "actions",
          text: "The model had to {target}.",
          tags: [
            "actions",
            "trends"
          ]
        },
        {
          id: "fashion_moods_5_0",
          role: "moods",
          text: "The whole outfit looked {target}.",
          tags: [
            "moods",
            "trends"
          ]
        },
        {
          id: "fashion_moods_5_1",
          role: "moods",
          text: "The fabric choice felt {target}.",
          tags: [
            "moods",
            "trends"
          ]
        },
        {
          id: "fashion_adverbs_5_0",
          role: "adverbs",
          text: "The model crossed the runway {target}.",
          tags: [
            "adverbs",
            "trends"
          ]
        },
        {
          id: "fashion_adverbs_5_1",
          role: "adverbs",
          text: "The stylist pinned the fabric {target}.",
          tags: [
            "adverbs",
            "trends"
          ]
        }
      ]
    }
  ]
});
