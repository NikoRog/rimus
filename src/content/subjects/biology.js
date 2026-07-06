import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "biology",
  name: "Biology",
  theme: "living organisms, cells, ecosystems, and how life works",
  nodes: [
    {
      id: "biology_cells",
      topic: "Cells",
      scene: "cell lab",
      people: [
        "biologist",
        "scientist",
        "student",
        "teacher",
        "researcher",
        "farmer"
      ],
      places: [
        "lab",
        "cell",
        "leaf",
        "forest",
        "ocean",
        "habitat"
      ],
      objects: [
        "cell",
        "DNA",
        "gene",
        "root",
        "flower",
        "species"
      ],
      actions: [
        "divide",
        "grow",
        "copy",
        "mutate",
        "adapt",
        "bloom"
      ],
      moods: [
        "tiny",
        "alive",
        "wild",
        "green",
        "complex",
        "ancient"
      ],
      adverbs: [
        "slowly",
        "naturally",
        "carefully",
        "quietly",
        "quickly"
      ],
      facts: [
        "Cells belongs to Biology: living organisms, cells, ecosystems, and how life works.",
        "cell lab gives Biology prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        lab: "lab is a place or setting connected to Biology, especially Cells.",
        cell: "cell is a term or object connected to Biology, especially Cells.",
        leaf: "leaf is a place or setting connected to Biology, especially Cells.",
        forest: "forest is a place or setting connected to Biology, especially Cells.",
        ocean: "ocean is a place or setting connected to Biology, especially Cells.",
        habitat: "habitat is a place or setting connected to Biology, especially Cells.",
        biologist: "biologist is a person or role connected to Biology, especially Cells.",
        scientist: "scientist is a person or role connected to Biology, especially Cells.",
        student: "student is a person or role connected to Biology, especially Cells.",
        teacher: "teacher is a person or role connected to Biology, especially Cells.",
        researcher: "researcher is a person or role connected to Biology, especially Cells.",
        farmer: "farmer is a person or role connected to Biology, especially Cells.",
        dna: "DNA is a term or object connected to Biology, especially Cells.",
        gene: "gene is a term or object connected to Biology, especially Cells.",
        root: "root is a term or object connected to Biology, especially Cells.",
        flower: "flower is a term or object connected to Biology, especially Cells.",
        species: "species is a term or object connected to Biology, especially Cells.",
        divide: "divide is an action connected to Biology, especially Cells.",
        grow: "grow is an action connected to Biology, especially Cells.",
        copy: "copy is an action connected to Biology, especially Cells.",
        mutate: "mutate is an action connected to Biology, especially Cells.",
        adapt: "adapt is an action connected to Biology, especially Cells.",
        bloom: "bloom is an action connected to Biology, especially Cells.",
        tiny: "tiny is a description or mood connected to Biology, especially Cells.",
        alive: "alive is a description or mood connected to Biology, especially Cells.",
        wild: "wild is a description or mood connected to Biology, especially Cells.",
        green: "green is a description or mood connected to Biology, especially Cells.",
        complex: "complex is a description or mood connected to Biology, especially Cells.",
        ancient: "ancient is a description or mood connected to Biology, especially Cells.",
        slowly: "slowly is a way something happens connected to Biology, especially Cells.",
        naturally: "naturally is a way something happens connected to Biology, especially Cells.",
        carefully: "carefully is a way something happens connected to Biology, especially Cells.",
        quietly: "quietly is a way something happens connected to Biology, especially Cells.",
        quickly: "quickly is a way something happens connected to Biology, especially Cells."
      },
      templates: [
        {
          id: "biology_places_0_0",
          role: "places",
          text: "The organism adapted inside the {target}.",
          tags: [
            "places",
            "cells"
          ]
        },
        {
          id: "biology_places_0_1",
          role: "places",
          text: "The researcher compared samples from the {target}.",
          tags: [
            "places",
            "cells"
          ]
        },
        {
          id: "biology_people_0_0",
          role: "people",
          text: "The microscope result surprised the {target}.",
          tags: [
            "people",
            "cells"
          ]
        },
        {
          id: "biology_people_0_1",
          role: "people",
          text: "The lab note was checked by the {target}.",
          tags: [
            "people",
            "cells"
          ]
        },
        {
          id: "biology_objects_0_0",
          role: "objects",
          text: "The microscope revealed the {target}.",
          tags: [
            "objects",
            "cells"
          ]
        },
        {
          id: "biology_objects_0_1",
          role: "objects",
          text: "The strand copied the {target}.",
          tags: [
            "objects",
            "cells"
          ]
        },
        {
          id: "biology_actions_0_0",
          role: "actions",
          text: "The cell started to {target}.",
          tags: [
            "actions",
            "cells"
          ]
        },
        {
          id: "biology_actions_0_1",
          role: "actions",
          text: "The organism needed to {target}.",
          tags: [
            "actions",
            "cells"
          ]
        },
        {
          id: "biology_moods_0_0",
          role: "moods",
          text: "The living sample looked {target}.",
          tags: [
            "moods",
            "cells"
          ]
        },
        {
          id: "biology_moods_0_1",
          role: "moods",
          text: "The habitat became {target}.",
          tags: [
            "moods",
            "cells"
          ]
        },
        {
          id: "biology_adverbs_0_0",
          role: "adverbs",
          text: "The scientist observed the sample {target}.",
          tags: [
            "adverbs",
            "cells"
          ]
        },
        {
          id: "biology_adverbs_0_1",
          role: "adverbs",
          text: "The organism changed {target}.",
          tags: [
            "adverbs",
            "cells"
          ]
        }
      ]
    },
    {
      id: "biology_dnagenetics",
      topic: "DNA / Genetics",
      scene: "genetics bench",
      people: [
        "student",
        "teacher",
        "researcher",
        "farmer",
        "diver",
        "doctor"
      ],
      places: [
        "leaf",
        "forest",
        "ocean",
        "habitat",
        "reef",
        "soil"
      ],
      objects: [
        "gene",
        "root",
        "flower",
        "species",
        "microbe",
        "trait"
      ],
      actions: [
        "copy",
        "mutate",
        "adapt",
        "bloom",
        "swim",
        "digest"
      ],
      moods: [
        "wild",
        "green",
        "complex",
        "ancient",
        "fragile",
        "bright"
      ],
      adverbs: [
        "carefully",
        "quietly",
        "quickly",
        "deeply",
        "silently"
      ],
      facts: [
        "DNA / Genetics belongs to Biology: living organisms, cells, ecosystems, and how life works.",
        "genetics bench gives Biology prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        leaf: "leaf is a place or setting connected to Biology, especially DNA / Genetics.",
        forest: "forest is a place or setting connected to Biology, especially DNA / Genetics.",
        ocean: "ocean is a place or setting connected to Biology, especially DNA / Genetics.",
        habitat: "habitat is a place or setting connected to Biology, especially DNA / Genetics.",
        reef: "reef is a place or setting connected to Biology, especially DNA / Genetics.",
        soil: "soil is a place or setting connected to Biology, especially DNA / Genetics.",
        student: "student is a person or role connected to Biology, especially DNA / Genetics.",
        teacher: "teacher is a person or role connected to Biology, especially DNA / Genetics.",
        researcher: "researcher is a person or role connected to Biology, especially DNA / Genetics.",
        farmer: "farmer is a person or role connected to Biology, especially DNA / Genetics.",
        diver: "diver is a person or role connected to Biology, especially DNA / Genetics.",
        doctor: "doctor is a person or role connected to Biology, especially DNA / Genetics.",
        gene: "gene is a term or object connected to Biology, especially DNA / Genetics.",
        root: "root is a term or object connected to Biology, especially DNA / Genetics.",
        flower: "flower is a term or object connected to Biology, especially DNA / Genetics.",
        species: "species is a term or object connected to Biology, especially DNA / Genetics.",
        microbe: "microbe is a term or object connected to Biology, especially DNA / Genetics.",
        trait: "trait is a term or object connected to Biology, especially DNA / Genetics.",
        copy: "copy is an action connected to Biology, especially DNA / Genetics.",
        mutate: "mutate is an action connected to Biology, especially DNA / Genetics.",
        adapt: "adapt is an action connected to Biology, especially DNA / Genetics.",
        bloom: "bloom is an action connected to Biology, especially DNA / Genetics.",
        swim: "swim is an action connected to Biology, especially DNA / Genetics.",
        digest: "digest is an action connected to Biology, especially DNA / Genetics.",
        wild: "wild is a description or mood connected to Biology, especially DNA / Genetics.",
        green: "green is a description or mood connected to Biology, especially DNA / Genetics.",
        complex: "complex is a description or mood connected to Biology, especially DNA / Genetics.",
        ancient: "ancient is a description or mood connected to Biology, especially DNA / Genetics.",
        fragile: "fragile is a description or mood connected to Biology, especially DNA / Genetics.",
        bright: "bright is a description or mood connected to Biology, especially DNA / Genetics.",
        carefully: "carefully is a way something happens connected to Biology, especially DNA / Genetics.",
        quietly: "quietly is a way something happens connected to Biology, especially DNA / Genetics.",
        quickly: "quickly is a way something happens connected to Biology, especially DNA / Genetics.",
        deeply: "deeply is a way something happens connected to Biology, especially DNA / Genetics.",
        silently: "silently is a way something happens connected to Biology, especially DNA / Genetics."
      },
      templates: [
        {
          id: "biology_places_1_0",
          role: "places",
          text: "The organism adapted inside the {target}.",
          tags: [
            "places",
            "dna_genetics"
          ]
        },
        {
          id: "biology_places_1_1",
          role: "places",
          text: "The researcher compared samples from the {target}.",
          tags: [
            "places",
            "dna_genetics"
          ]
        },
        {
          id: "biology_people_1_0",
          role: "people",
          text: "The microscope result surprised the {target}.",
          tags: [
            "people",
            "dna_genetics"
          ]
        },
        {
          id: "biology_people_1_1",
          role: "people",
          text: "The lab note was checked by the {target}.",
          tags: [
            "people",
            "dna_genetics"
          ]
        },
        {
          id: "biology_objects_1_0",
          role: "objects",
          text: "The microscope revealed the {target}.",
          tags: [
            "objects",
            "dna_genetics"
          ]
        },
        {
          id: "biology_objects_1_1",
          role: "objects",
          text: "The strand copied the {target}.",
          tags: [
            "objects",
            "dna_genetics"
          ]
        },
        {
          id: "biology_actions_1_0",
          role: "actions",
          text: "The cell started to {target}.",
          tags: [
            "actions",
            "dna_genetics"
          ]
        },
        {
          id: "biology_actions_1_1",
          role: "actions",
          text: "The organism needed to {target}.",
          tags: [
            "actions",
            "dna_genetics"
          ]
        },
        {
          id: "biology_moods_1_0",
          role: "moods",
          text: "The living sample looked {target}.",
          tags: [
            "moods",
            "dna_genetics"
          ]
        },
        {
          id: "biology_moods_1_1",
          role: "moods",
          text: "The habitat became {target}.",
          tags: [
            "moods",
            "dna_genetics"
          ]
        },
        {
          id: "biology_adverbs_1_0",
          role: "adverbs",
          text: "The scientist observed the sample {target}.",
          tags: [
            "adverbs",
            "dna_genetics"
          ]
        },
        {
          id: "biology_adverbs_1_1",
          role: "adverbs",
          text: "The organism changed {target}.",
          tags: [
            "adverbs",
            "dna_genetics"
          ]
        }
      ]
    },
    {
      id: "biology_plants",
      topic: "Plants",
      scene: "garden bed",
      people: [
        "researcher",
        "farmer",
        "diver",
        "doctor",
        "zoologist",
        "ecologist"
      ],
      places: [
        "ocean",
        "habitat",
        "reef",
        "soil",
        "garden",
        "body"
      ],
      objects: [
        "flower",
        "species",
        "microbe",
        "trait",
        "coral",
        "organ"
      ],
      actions: [
        "adapt",
        "bloom",
        "swim",
        "digest",
        "sense",
        "survive"
      ],
      moods: [
        "complex",
        "ancient",
        "fragile",
        "bright",
        "hidden",
        "natural"
      ],
      adverbs: [
        "quickly",
        "deeply",
        "silently",
        "constantly",
        "closely"
      ],
      facts: [
        "Plants belongs to Biology: living organisms, cells, ecosystems, and how life works.",
        "garden bed gives Biology prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        ocean: "ocean is a place or setting connected to Biology, especially Plants.",
        habitat: "habitat is a place or setting connected to Biology, especially Plants.",
        reef: "reef is a place or setting connected to Biology, especially Plants.",
        soil: "soil is a place or setting connected to Biology, especially Plants.",
        garden: "garden is a place or setting connected to Biology, especially Plants.",
        body: "body is a place or setting connected to Biology, especially Plants.",
        researcher: "researcher is a person or role connected to Biology, especially Plants.",
        farmer: "farmer is a person or role connected to Biology, especially Plants.",
        diver: "diver is a person or role connected to Biology, especially Plants.",
        doctor: "doctor is a person or role connected to Biology, especially Plants.",
        zoologist: "zoologist is a person or role connected to Biology, especially Plants.",
        ecologist: "ecologist is a person or role connected to Biology, especially Plants.",
        flower: "flower is a term or object connected to Biology, especially Plants.",
        species: "species is a term or object connected to Biology, especially Plants.",
        microbe: "microbe is a term or object connected to Biology, especially Plants.",
        trait: "trait is a term or object connected to Biology, especially Plants.",
        coral: "coral is a term or object connected to Biology, especially Plants.",
        organ: "organ is a term or object connected to Biology, especially Plants.",
        adapt: "adapt is an action connected to Biology, especially Plants.",
        bloom: "bloom is an action connected to Biology, especially Plants.",
        swim: "swim is an action connected to Biology, especially Plants.",
        digest: "digest is an action connected to Biology, especially Plants.",
        sense: "sense is an action connected to Biology, especially Plants.",
        survive: "survive is an action connected to Biology, especially Plants.",
        complex: "complex is a description or mood connected to Biology, especially Plants.",
        ancient: "ancient is a description or mood connected to Biology, especially Plants.",
        fragile: "fragile is a description or mood connected to Biology, especially Plants.",
        bright: "bright is a description or mood connected to Biology, especially Plants.",
        hidden: "hidden is a description or mood connected to Biology, especially Plants.",
        natural: "natural is a description or mood connected to Biology, especially Plants.",
        quickly: "quickly is a way something happens connected to Biology, especially Plants.",
        deeply: "deeply is a way something happens connected to Biology, especially Plants.",
        silently: "silently is a way something happens connected to Biology, especially Plants.",
        constantly: "constantly is a way something happens connected to Biology, especially Plants.",
        closely: "closely is a way something happens connected to Biology, especially Plants."
      },
      templates: [
        {
          id: "biology_places_2_0",
          role: "places",
          text: "The organism adapted inside the {target}.",
          tags: [
            "places",
            "plants"
          ]
        },
        {
          id: "biology_places_2_1",
          role: "places",
          text: "The researcher compared samples from the {target}.",
          tags: [
            "places",
            "plants"
          ]
        },
        {
          id: "biology_people_2_0",
          role: "people",
          text: "The microscope result surprised the {target}.",
          tags: [
            "people",
            "plants"
          ]
        },
        {
          id: "biology_people_2_1",
          role: "people",
          text: "The lab note was checked by the {target}.",
          tags: [
            "people",
            "plants"
          ]
        },
        {
          id: "biology_objects_2_0",
          role: "objects",
          text: "The microscope revealed the {target}.",
          tags: [
            "objects",
            "plants"
          ]
        },
        {
          id: "biology_objects_2_1",
          role: "objects",
          text: "The strand copied the {target}.",
          tags: [
            "objects",
            "plants"
          ]
        },
        {
          id: "biology_actions_2_0",
          role: "actions",
          text: "The cell started to {target}.",
          tags: [
            "actions",
            "plants"
          ]
        },
        {
          id: "biology_actions_2_1",
          role: "actions",
          text: "The organism needed to {target}.",
          tags: [
            "actions",
            "plants"
          ]
        },
        {
          id: "biology_moods_2_0",
          role: "moods",
          text: "The living sample looked {target}.",
          tags: [
            "moods",
            "plants"
          ]
        },
        {
          id: "biology_moods_2_1",
          role: "moods",
          text: "The habitat became {target}.",
          tags: [
            "moods",
            "plants"
          ]
        },
        {
          id: "biology_adverbs_2_0",
          role: "adverbs",
          text: "The scientist observed the sample {target}.",
          tags: [
            "adverbs",
            "plants"
          ]
        },
        {
          id: "biology_adverbs_2_1",
          role: "adverbs",
          text: "The organism changed {target}.",
          tags: [
            "adverbs",
            "plants"
          ]
        }
      ]
    },
    {
      id: "biology_evolution",
      topic: "Evolution",
      scene: "fossil field",
      people: [
        "diver",
        "doctor",
        "zoologist",
        "ecologist",
        "geneticist",
        "botanist"
      ],
      places: [
        "reef",
        "soil",
        "garden",
        "body",
        "canopy",
        "wetland"
      ],
      objects: [
        "microbe",
        "trait",
        "coral",
        "organ",
        "nucleus",
        "membrane"
      ],
      actions: [
        "swim",
        "digest",
        "sense",
        "survive",
        "evolve",
        "decode"
      ],
      moods: [
        "fragile",
        "bright",
        "hidden",
        "natural",
        "diverse",
        "balanced"
      ],
      adverbs: [
        "silently",
        "constantly",
        "closely",
        "brightly",
        "slowly"
      ],
      facts: [
        "Evolution belongs to Biology: living organisms, cells, ecosystems, and how life works.",
        "fossil field gives Biology prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        reef: "reef is a place or setting connected to Biology, especially Evolution.",
        soil: "soil is a place or setting connected to Biology, especially Evolution.",
        garden: "garden is a place or setting connected to Biology, especially Evolution.",
        body: "body is a place or setting connected to Biology, especially Evolution.",
        canopy: "canopy is a place or setting connected to Biology, especially Evolution.",
        wetland: "wetland is a place or setting connected to Biology, especially Evolution.",
        diver: "diver is a person or role connected to Biology, especially Evolution.",
        doctor: "doctor is a person or role connected to Biology, especially Evolution.",
        zoologist: "zoologist is a person or role connected to Biology, especially Evolution.",
        ecologist: "ecologist is a person or role connected to Biology, especially Evolution.",
        geneticist: "geneticist is a person or role connected to Biology, especially Evolution.",
        botanist: "botanist is a person or role connected to Biology, especially Evolution.",
        microbe: "microbe is a term or object connected to Biology, especially Evolution.",
        trait: "trait is a term or object connected to Biology, especially Evolution.",
        coral: "coral is a term or object connected to Biology, especially Evolution.",
        organ: "organ is a term or object connected to Biology, especially Evolution.",
        nucleus: "nucleus is a term or object connected to Biology, especially Evolution.",
        membrane: "membrane is a term or object connected to Biology, especially Evolution.",
        swim: "swim is an action connected to Biology, especially Evolution.",
        digest: "digest is an action connected to Biology, especially Evolution.",
        sense: "sense is an action connected to Biology, especially Evolution.",
        survive: "survive is an action connected to Biology, especially Evolution.",
        evolve: "evolve is an action connected to Biology, especially Evolution.",
        decode: "decode is an action connected to Biology, especially Evolution.",
        fragile: "fragile is a description or mood connected to Biology, especially Evolution.",
        bright: "bright is a description or mood connected to Biology, especially Evolution.",
        hidden: "hidden is a description or mood connected to Biology, especially Evolution.",
        natural: "natural is a description or mood connected to Biology, especially Evolution.",
        diverse: "diverse is a description or mood connected to Biology, especially Evolution.",
        balanced: "balanced is a description or mood connected to Biology, especially Evolution.",
        silently: "silently is a way something happens connected to Biology, especially Evolution.",
        constantly: "constantly is a way something happens connected to Biology, especially Evolution.",
        closely: "closely is a way something happens connected to Biology, especially Evolution.",
        brightly: "brightly is a way something happens connected to Biology, especially Evolution.",
        slowly: "slowly is a way something happens connected to Biology, especially Evolution."
      },
      templates: [
        {
          id: "biology_places_3_0",
          role: "places",
          text: "The organism adapted inside the {target}.",
          tags: [
            "places",
            "evolution"
          ]
        },
        {
          id: "biology_places_3_1",
          role: "places",
          text: "The researcher compared samples from the {target}.",
          tags: [
            "places",
            "evolution"
          ]
        },
        {
          id: "biology_people_3_0",
          role: "people",
          text: "The microscope result surprised the {target}.",
          tags: [
            "people",
            "evolution"
          ]
        },
        {
          id: "biology_people_3_1",
          role: "people",
          text: "The lab note was checked by the {target}.",
          tags: [
            "people",
            "evolution"
          ]
        },
        {
          id: "biology_objects_3_0",
          role: "objects",
          text: "The microscope revealed the {target}.",
          tags: [
            "objects",
            "evolution"
          ]
        },
        {
          id: "biology_objects_3_1",
          role: "objects",
          text: "The strand copied the {target}.",
          tags: [
            "objects",
            "evolution"
          ]
        },
        {
          id: "biology_actions_3_0",
          role: "actions",
          text: "The cell started to {target}.",
          tags: [
            "actions",
            "evolution"
          ]
        },
        {
          id: "biology_actions_3_1",
          role: "actions",
          text: "The organism needed to {target}.",
          tags: [
            "actions",
            "evolution"
          ]
        },
        {
          id: "biology_moods_3_0",
          role: "moods",
          text: "The living sample looked {target}.",
          tags: [
            "moods",
            "evolution"
          ]
        },
        {
          id: "biology_moods_3_1",
          role: "moods",
          text: "The habitat became {target}.",
          tags: [
            "moods",
            "evolution"
          ]
        },
        {
          id: "biology_adverbs_3_0",
          role: "adverbs",
          text: "The scientist observed the sample {target}.",
          tags: [
            "adverbs",
            "evolution"
          ]
        },
        {
          id: "biology_adverbs_3_1",
          role: "adverbs",
          text: "The organism changed {target}.",
          tags: [
            "adverbs",
            "evolution"
          ]
        }
      ]
    },
    {
      id: "biology_ecosystems",
      topic: "Ecosystems",
      scene: "forest habitat",
      people: [
        "zoologist",
        "ecologist",
        "geneticist",
        "botanist",
        "biologist",
        "scientist"
      ],
      places: [
        "garden",
        "body",
        "canopy",
        "wetland",
        "lab",
        "cell"
      ],
      objects: [
        "coral",
        "organ",
        "nucleus",
        "membrane",
        "cell",
        "DNA"
      ],
      actions: [
        "sense",
        "survive",
        "evolve",
        "decode",
        "divide",
        "grow"
      ],
      moods: [
        "hidden",
        "natural",
        "diverse",
        "balanced",
        "tiny",
        "alive"
      ],
      adverbs: [
        "closely",
        "brightly",
        "slowly",
        "naturally",
        "carefully"
      ],
      facts: [
        "Ecosystems belongs to Biology: living organisms, cells, ecosystems, and how life works.",
        "forest habitat gives Biology prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        garden: "garden is a place or setting connected to Biology, especially Ecosystems.",
        body: "body is a place or setting connected to Biology, especially Ecosystems.",
        canopy: "canopy is a place or setting connected to Biology, especially Ecosystems.",
        wetland: "wetland is a place or setting connected to Biology, especially Ecosystems.",
        lab: "lab is a place or setting connected to Biology, especially Ecosystems.",
        cell: "cell is a term or object connected to Biology, especially Ecosystems.",
        zoologist: "zoologist is a person or role connected to Biology, especially Ecosystems.",
        ecologist: "ecologist is a person or role connected to Biology, especially Ecosystems.",
        geneticist: "geneticist is a person or role connected to Biology, especially Ecosystems.",
        botanist: "botanist is a person or role connected to Biology, especially Ecosystems.",
        biologist: "biologist is a person or role connected to Biology, especially Ecosystems.",
        scientist: "scientist is a person or role connected to Biology, especially Ecosystems.",
        coral: "coral is a term or object connected to Biology, especially Ecosystems.",
        organ: "organ is a term or object connected to Biology, especially Ecosystems.",
        nucleus: "nucleus is a term or object connected to Biology, especially Ecosystems.",
        membrane: "membrane is a term or object connected to Biology, especially Ecosystems.",
        dna: "DNA is a term or object connected to Biology, especially Ecosystems.",
        sense: "sense is an action connected to Biology, especially Ecosystems.",
        survive: "survive is an action connected to Biology, especially Ecosystems.",
        evolve: "evolve is an action connected to Biology, especially Ecosystems.",
        decode: "decode is an action connected to Biology, especially Ecosystems.",
        divide: "divide is an action connected to Biology, especially Ecosystems.",
        grow: "grow is an action connected to Biology, especially Ecosystems.",
        hidden: "hidden is a description or mood connected to Biology, especially Ecosystems.",
        natural: "natural is a description or mood connected to Biology, especially Ecosystems.",
        diverse: "diverse is a description or mood connected to Biology, especially Ecosystems.",
        balanced: "balanced is a description or mood connected to Biology, especially Ecosystems.",
        tiny: "tiny is a description or mood connected to Biology, especially Ecosystems.",
        alive: "alive is a description or mood connected to Biology, especially Ecosystems.",
        closely: "closely is a way something happens connected to Biology, especially Ecosystems.",
        brightly: "brightly is a way something happens connected to Biology, especially Ecosystems.",
        slowly: "slowly is a way something happens connected to Biology, especially Ecosystems.",
        naturally: "naturally is a way something happens connected to Biology, especially Ecosystems.",
        carefully: "carefully is a way something happens connected to Biology, especially Ecosystems."
      },
      templates: [
        {
          id: "biology_places_4_0",
          role: "places",
          text: "The organism adapted inside the {target}.",
          tags: [
            "places",
            "ecosystems"
          ]
        },
        {
          id: "biology_places_4_1",
          role: "places",
          text: "The researcher compared samples from the {target}.",
          tags: [
            "places",
            "ecosystems"
          ]
        },
        {
          id: "biology_people_4_0",
          role: "people",
          text: "The microscope result surprised the {target}.",
          tags: [
            "people",
            "ecosystems"
          ]
        },
        {
          id: "biology_people_4_1",
          role: "people",
          text: "The lab note was checked by the {target}.",
          tags: [
            "people",
            "ecosystems"
          ]
        },
        {
          id: "biology_objects_4_0",
          role: "objects",
          text: "The microscope revealed the {target}.",
          tags: [
            "objects",
            "ecosystems"
          ]
        },
        {
          id: "biology_objects_4_1",
          role: "objects",
          text: "The strand copied the {target}.",
          tags: [
            "objects",
            "ecosystems"
          ]
        },
        {
          id: "biology_actions_4_0",
          role: "actions",
          text: "The cell started to {target}.",
          tags: [
            "actions",
            "ecosystems"
          ]
        },
        {
          id: "biology_actions_4_1",
          role: "actions",
          text: "The organism needed to {target}.",
          tags: [
            "actions",
            "ecosystems"
          ]
        },
        {
          id: "biology_moods_4_0",
          role: "moods",
          text: "The living sample looked {target}.",
          tags: [
            "moods",
            "ecosystems"
          ]
        },
        {
          id: "biology_moods_4_1",
          role: "moods",
          text: "The habitat became {target}.",
          tags: [
            "moods",
            "ecosystems"
          ]
        },
        {
          id: "biology_adverbs_4_0",
          role: "adverbs",
          text: "The scientist observed the sample {target}.",
          tags: [
            "adverbs",
            "ecosystems"
          ]
        },
        {
          id: "biology_adverbs_4_1",
          role: "adverbs",
          text: "The organism changed {target}.",
          tags: [
            "adverbs",
            "ecosystems"
          ]
        }
      ]
    },
    {
      id: "biology_humanbody",
      topic: "Human Body",
      scene: "anatomy room",
      people: [
        "geneticist",
        "botanist",
        "biologist",
        "scientist",
        "student",
        "teacher"
      ],
      places: [
        "canopy",
        "wetland",
        "lab",
        "cell",
        "leaf",
        "forest"
      ],
      objects: [
        "nucleus",
        "membrane",
        "cell",
        "DNA",
        "gene",
        "root"
      ],
      actions: [
        "evolve",
        "decode",
        "divide",
        "grow",
        "copy",
        "mutate"
      ],
      moods: [
        "diverse",
        "balanced",
        "tiny",
        "alive",
        "wild",
        "green"
      ],
      adverbs: [
        "slowly",
        "naturally",
        "carefully",
        "quietly",
        "quickly"
      ],
      facts: [
        "Human Body belongs to Biology: living organisms, cells, ecosystems, and how life works.",
        "anatomy room gives Biology prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        canopy: "canopy is a place or setting connected to Biology, especially Human Body.",
        wetland: "wetland is a place or setting connected to Biology, especially Human Body.",
        lab: "lab is a place or setting connected to Biology, especially Human Body.",
        cell: "cell is a term or object connected to Biology, especially Human Body.",
        leaf: "leaf is a place or setting connected to Biology, especially Human Body.",
        forest: "forest is a place or setting connected to Biology, especially Human Body.",
        geneticist: "geneticist is a person or role connected to Biology, especially Human Body.",
        botanist: "botanist is a person or role connected to Biology, especially Human Body.",
        biologist: "biologist is a person or role connected to Biology, especially Human Body.",
        scientist: "scientist is a person or role connected to Biology, especially Human Body.",
        student: "student is a person or role connected to Biology, especially Human Body.",
        teacher: "teacher is a person or role connected to Biology, especially Human Body.",
        nucleus: "nucleus is a term or object connected to Biology, especially Human Body.",
        membrane: "membrane is a term or object connected to Biology, especially Human Body.",
        dna: "DNA is a term or object connected to Biology, especially Human Body.",
        gene: "gene is a term or object connected to Biology, especially Human Body.",
        root: "root is a term or object connected to Biology, especially Human Body.",
        evolve: "evolve is an action connected to Biology, especially Human Body.",
        decode: "decode is an action connected to Biology, especially Human Body.",
        divide: "divide is an action connected to Biology, especially Human Body.",
        grow: "grow is an action connected to Biology, especially Human Body.",
        copy: "copy is an action connected to Biology, especially Human Body.",
        mutate: "mutate is an action connected to Biology, especially Human Body.",
        diverse: "diverse is a description or mood connected to Biology, especially Human Body.",
        balanced: "balanced is a description or mood connected to Biology, especially Human Body.",
        tiny: "tiny is a description or mood connected to Biology, especially Human Body.",
        alive: "alive is a description or mood connected to Biology, especially Human Body.",
        wild: "wild is a description or mood connected to Biology, especially Human Body.",
        green: "green is a description or mood connected to Biology, especially Human Body.",
        slowly: "slowly is a way something happens connected to Biology, especially Human Body.",
        naturally: "naturally is a way something happens connected to Biology, especially Human Body.",
        carefully: "carefully is a way something happens connected to Biology, especially Human Body.",
        quietly: "quietly is a way something happens connected to Biology, especially Human Body.",
        quickly: "quickly is a way something happens connected to Biology, especially Human Body."
      },
      templates: [
        {
          id: "biology_places_5_0",
          role: "places",
          text: "The organism adapted inside the {target}.",
          tags: [
            "places",
            "human_body"
          ]
        },
        {
          id: "biology_places_5_1",
          role: "places",
          text: "The researcher compared samples from the {target}.",
          tags: [
            "places",
            "human_body"
          ]
        },
        {
          id: "biology_people_5_0",
          role: "people",
          text: "The microscope result surprised the {target}.",
          tags: [
            "people",
            "human_body"
          ]
        },
        {
          id: "biology_people_5_1",
          role: "people",
          text: "The lab note was checked by the {target}.",
          tags: [
            "people",
            "human_body"
          ]
        },
        {
          id: "biology_objects_5_0",
          role: "objects",
          text: "The microscope revealed the {target}.",
          tags: [
            "objects",
            "human_body"
          ]
        },
        {
          id: "biology_objects_5_1",
          role: "objects",
          text: "The strand copied the {target}.",
          tags: [
            "objects",
            "human_body"
          ]
        },
        {
          id: "biology_actions_5_0",
          role: "actions",
          text: "The cell started to {target}.",
          tags: [
            "actions",
            "human_body"
          ]
        },
        {
          id: "biology_actions_5_1",
          role: "actions",
          text: "The organism needed to {target}.",
          tags: [
            "actions",
            "human_body"
          ]
        },
        {
          id: "biology_moods_5_0",
          role: "moods",
          text: "The living sample looked {target}.",
          tags: [
            "moods",
            "human_body"
          ]
        },
        {
          id: "biology_moods_5_1",
          role: "moods",
          text: "The habitat became {target}.",
          tags: [
            "moods",
            "human_body"
          ]
        },
        {
          id: "biology_adverbs_5_0",
          role: "adverbs",
          text: "The scientist observed the sample {target}.",
          tags: [
            "adverbs",
            "human_body"
          ]
        },
        {
          id: "biology_adverbs_5_1",
          role: "adverbs",
          text: "The organism changed {target}.",
          tags: [
            "adverbs",
            "human_body"
          ]
        }
      ]
    }
  ]
});
