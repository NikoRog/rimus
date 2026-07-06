import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "food",
  name: "Food",
  theme: "ingredients, cooking, meals, taste, and eating culture",
  nodes: [
    {
      id: "food_cooking",
      topic: "Cooking",
      scene: "kitchen station",
      people: [
        "chef",
        "cook",
        "server",
        "guest",
        "baker",
        "friend"
      ],
      places: [
        "kitchen",
        "oven",
        "table",
        "bowl",
        "counter",
        "restaurant"
      ],
      objects: [
        "pizza",
        "cheese",
        "slice",
        "soup",
        "spoon",
        "broth"
      ],
      actions: [
        "bake",
        "share",
        "eat",
        "stir",
        "boil",
        "sip"
      ],
      moods: [
        "warm",
        "spicy",
        "sweet",
        "fresh",
        "crispy",
        "savory"
      ],
      adverbs: [
        "slowly",
        "warmly",
        "carefully",
        "quickly",
        "gently"
      ],
      facts: [
        "Cooking belongs to Food: ingredients, cooking, meals, taste, and eating culture.",
        "kitchen station gives Food prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        kitchen: "kitchen is a place or setting connected to Food, especially Cooking.",
        oven: "oven is a place or setting connected to Food, especially Cooking.",
        table: "table is a place or setting connected to Food, especially Cooking.",
        bowl: "bowl is a place or setting connected to Food, especially Cooking.",
        counter: "counter is a place or setting connected to Food, especially Cooking.",
        restaurant: "restaurant is a place or setting connected to Food, especially Cooking.",
        chef: "chef is a person or role connected to Food, especially Cooking.",
        cook: "cook is a person or role connected to Food, especially Cooking.",
        server: "server is a person or role connected to Food, especially Cooking.",
        guest: "guest is a person or role connected to Food, especially Cooking.",
        baker: "baker is a person or role connected to Food, especially Cooking.",
        friend: "friend is a person or role connected to Food, especially Cooking.",
        pizza: "pizza is a term or object connected to Food, especially Cooking.",
        cheese: "cheese is a term or object connected to Food, especially Cooking.",
        slice: "slice is a term or object connected to Food, especially Cooking.",
        soup: "soup is a term or object connected to Food, especially Cooking.",
        spoon: "spoon is a term or object connected to Food, especially Cooking.",
        broth: "broth is a term or object connected to Food, especially Cooking.",
        bake: "bake is an action connected to Food, especially Cooking.",
        share: "share is an action connected to Food, especially Cooking.",
        eat: "eat is an action connected to Food, especially Cooking.",
        stir: "stir is an action connected to Food, especially Cooking.",
        boil: "boil is an action connected to Food, especially Cooking.",
        sip: "sip is an action connected to Food, especially Cooking.",
        warm: "warm is a description or mood connected to Food, especially Cooking.",
        spicy: "spicy is a description or mood connected to Food, especially Cooking.",
        sweet: "sweet is a description or mood connected to Food, especially Cooking.",
        fresh: "fresh is a description or mood connected to Food, especially Cooking.",
        crispy: "crispy is a description or mood connected to Food, especially Cooking.",
        savory: "savory is a description or mood connected to Food, especially Cooking.",
        slowly: "slowly is a way something happens connected to Food, especially Cooking.",
        warmly: "warmly is a way something happens connected to Food, especially Cooking.",
        carefully: "carefully is a way something happens connected to Food, especially Cooking.",
        quickly: "quickly is a way something happens connected to Food, especially Cooking.",
        gently: "gently is a way something happens connected to Food, especially Cooking."
      },
      templates: [
        {
          id: "food_places_0_0",
          role: "places",
          text: "The chef served dinner at the {target}.",
          tags: [
            "places",
            "cooking"
          ]
        },
        {
          id: "food_places_0_1",
          role: "places",
          text: "The aroma filled the {target}.",
          tags: [
            "places",
            "cooking"
          ]
        },
        {
          id: "food_people_0_0",
          role: "people",
          text: "The tasting menu was judged by the {target}.",
          tags: [
            "people",
            "cooking"
          ]
        },
        {
          id: "food_people_0_1",
          role: "people",
          text: "The hot plate was handed to the {target}.",
          tags: [
            "people",
            "cooking"
          ]
        },
        {
          id: "food_objects_0_0",
          role: "objects",
          text: "The chef prepared the {target}.",
          tags: [
            "objects",
            "cooking"
          ]
        },
        {
          id: "food_objects_0_1",
          role: "objects",
          text: "The seasoning covered the {target}.",
          tags: [
            "objects",
            "cooking"
          ]
        },
        {
          id: "food_actions_0_0",
          role: "actions",
          text: "The cook had to {target}.",
          tags: [
            "actions",
            "cooking"
          ]
        },
        {
          id: "food_actions_0_1",
          role: "actions",
          text: "The kitchen team started to {target}.",
          tags: [
            "actions",
            "cooking"
          ]
        },
        {
          id: "food_moods_0_0",
          role: "moods",
          text: "The dish tasted {target}.",
          tags: [
            "moods",
            "cooking"
          ]
        },
        {
          id: "food_moods_0_1",
          role: "moods",
          text: "The table suddenly smelled {target}.",
          tags: [
            "moods",
            "cooking"
          ]
        },
        {
          id: "food_adverbs_0_0",
          role: "adverbs",
          text: "The chef sliced the herbs {target}.",
          tags: [
            "adverbs",
            "cooking"
          ]
        },
        {
          id: "food_adverbs_0_1",
          role: "adverbs",
          text: "The server carried the plate {target}.",
          tags: [
            "adverbs",
            "cooking"
          ]
        }
      ]
    },
    {
      id: "food_baking",
      topic: "Baking",
      scene: "bakery counter",
      people: [
        "server",
        "guest",
        "baker",
        "friend",
        "family",
        "farmer"
      ],
      places: [
        "table",
        "bowl",
        "counter",
        "restaurant",
        "pantry",
        "market"
      ],
      objects: [
        "slice",
        "soup",
        "spoon",
        "broth",
        "bread",
        "sauce"
      ],
      actions: [
        "eat",
        "stir",
        "boil",
        "sip",
        "chop",
        "taste"
      ],
      moods: [
        "sweet",
        "fresh",
        "crispy",
        "savory",
        "tender",
        "comforting"
      ],
      adverbs: [
        "carefully",
        "quickly",
        "gently",
        "evenly",
        "lightly"
      ],
      facts: [
        "Baking belongs to Food: ingredients, cooking, meals, taste, and eating culture.",
        "bakery counter gives Food prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        table: "table is a place or setting connected to Food, especially Baking.",
        bowl: "bowl is a place or setting connected to Food, especially Baking.",
        counter: "counter is a place or setting connected to Food, especially Baking.",
        restaurant: "restaurant is a place or setting connected to Food, especially Baking.",
        pantry: "pantry is a place or setting connected to Food, especially Baking.",
        market: "market is a place or setting connected to Food, especially Baking.",
        server: "server is a person or role connected to Food, especially Baking.",
        guest: "guest is a person or role connected to Food, especially Baking.",
        baker: "baker is a person or role connected to Food, especially Baking.",
        friend: "friend is a person or role connected to Food, especially Baking.",
        family: "family is a person or role connected to Food, especially Baking.",
        farmer: "farmer is a person or role connected to Food, especially Baking.",
        slice: "slice is a term or object connected to Food, especially Baking.",
        soup: "soup is a term or object connected to Food, especially Baking.",
        spoon: "spoon is a term or object connected to Food, especially Baking.",
        broth: "broth is a term or object connected to Food, especially Baking.",
        bread: "bread is a term or object connected to Food, especially Baking.",
        sauce: "sauce is a term or object connected to Food, especially Baking.",
        eat: "eat is an action connected to Food, especially Baking.",
        stir: "stir is an action connected to Food, especially Baking.",
        boil: "boil is an action connected to Food, especially Baking.",
        sip: "sip is an action connected to Food, especially Baking.",
        chop: "chop is an action connected to Food, especially Baking.",
        taste: "taste is an action connected to Food, especially Baking.",
        sweet: "sweet is a description or mood connected to Food, especially Baking.",
        fresh: "fresh is a description or mood connected to Food, especially Baking.",
        crispy: "crispy is a description or mood connected to Food, especially Baking.",
        savory: "savory is a description or mood connected to Food, especially Baking.",
        tender: "tender is a description or mood connected to Food, especially Baking.",
        comforting: "comforting is a description or mood connected to Food, especially Baking.",
        carefully: "carefully is a way something happens connected to Food, especially Baking.",
        quickly: "quickly is a way something happens connected to Food, especially Baking.",
        gently: "gently is a way something happens connected to Food, especially Baking.",
        evenly: "evenly is a way something happens connected to Food, especially Baking.",
        lightly: "lightly is a way something happens connected to Food, especially Baking."
      },
      templates: [
        {
          id: "food_places_1_0",
          role: "places",
          text: "The chef served dinner at the {target}.",
          tags: [
            "places",
            "baking"
          ]
        },
        {
          id: "food_places_1_1",
          role: "places",
          text: "The aroma filled the {target}.",
          tags: [
            "places",
            "baking"
          ]
        },
        {
          id: "food_people_1_0",
          role: "people",
          text: "The tasting menu was judged by the {target}.",
          tags: [
            "people",
            "baking"
          ]
        },
        {
          id: "food_people_1_1",
          role: "people",
          text: "The hot plate was handed to the {target}.",
          tags: [
            "people",
            "baking"
          ]
        },
        {
          id: "food_objects_1_0",
          role: "objects",
          text: "The chef prepared the {target}.",
          tags: [
            "objects",
            "baking"
          ]
        },
        {
          id: "food_objects_1_1",
          role: "objects",
          text: "The seasoning covered the {target}.",
          tags: [
            "objects",
            "baking"
          ]
        },
        {
          id: "food_actions_1_0",
          role: "actions",
          text: "The cook had to {target}.",
          tags: [
            "actions",
            "baking"
          ]
        },
        {
          id: "food_actions_1_1",
          role: "actions",
          text: "The kitchen team started to {target}.",
          tags: [
            "actions",
            "baking"
          ]
        },
        {
          id: "food_moods_1_0",
          role: "moods",
          text: "The dish tasted {target}.",
          tags: [
            "moods",
            "baking"
          ]
        },
        {
          id: "food_moods_1_1",
          role: "moods",
          text: "The table suddenly smelled {target}.",
          tags: [
            "moods",
            "baking"
          ]
        },
        {
          id: "food_adverbs_1_0",
          role: "adverbs",
          text: "The chef sliced the herbs {target}.",
          tags: [
            "adverbs",
            "baking"
          ]
        },
        {
          id: "food_adverbs_1_1",
          role: "adverbs",
          text: "The server carried the plate {target}.",
          tags: [
            "adverbs",
            "baking"
          ]
        }
      ]
    },
    {
      id: "food_restaurant",
      topic: "Restaurant",
      scene: "restaurant table",
      people: [
        "baker",
        "friend",
        "family",
        "farmer",
        "vendor",
        "critic"
      ],
      places: [
        "counter",
        "restaurant",
        "pantry",
        "market",
        "stall",
        "bakery"
      ],
      objects: [
        "spoon",
        "broth",
        "bread",
        "sauce",
        "dough",
        "herb"
      ],
      actions: [
        "boil",
        "sip",
        "chop",
        "taste",
        "serve",
        "season"
      ],
      moods: [
        "crispy",
        "savory",
        "tender",
        "comforting",
        "bright",
        "rich"
      ],
      adverbs: [
        "gently",
        "evenly",
        "lightly",
        "crisply",
        "freshly"
      ],
      facts: [
        "Restaurant belongs to Food: ingredients, cooking, meals, taste, and eating culture.",
        "restaurant table gives Food prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        counter: "counter is a place or setting connected to Food, especially Restaurant.",
        restaurant: "restaurant is a place or setting connected to Food, especially Restaurant.",
        pantry: "pantry is a place or setting connected to Food, especially Restaurant.",
        market: "market is a place or setting connected to Food, especially Restaurant.",
        stall: "stall is a place or setting connected to Food, especially Restaurant.",
        bakery: "bakery is a place or setting connected to Food, especially Restaurant.",
        baker: "baker is a person or role connected to Food, especially Restaurant.",
        friend: "friend is a person or role connected to Food, especially Restaurant.",
        family: "family is a person or role connected to Food, especially Restaurant.",
        farmer: "farmer is a person or role connected to Food, especially Restaurant.",
        vendor: "vendor is a person or role connected to Food, especially Restaurant.",
        critic: "critic is a person or role connected to Food, especially Restaurant.",
        spoon: "spoon is a term or object connected to Food, especially Restaurant.",
        broth: "broth is a term or object connected to Food, especially Restaurant.",
        bread: "bread is a term or object connected to Food, especially Restaurant.",
        sauce: "sauce is a term or object connected to Food, especially Restaurant.",
        dough: "dough is a term or object connected to Food, especially Restaurant.",
        herb: "herb is a term or object connected to Food, especially Restaurant.",
        boil: "boil is an action connected to Food, especially Restaurant.",
        sip: "sip is an action connected to Food, especially Restaurant.",
        chop: "chop is an action connected to Food, especially Restaurant.",
        taste: "taste is an action connected to Food, especially Restaurant.",
        serve: "serve is an action connected to Food, especially Restaurant.",
        season: "season is an action connected to Food, especially Restaurant.",
        crispy: "crispy is a description or mood connected to Food, especially Restaurant.",
        savory: "savory is a description or mood connected to Food, especially Restaurant.",
        tender: "tender is a description or mood connected to Food, especially Restaurant.",
        comforting: "comforting is a description or mood connected to Food, especially Restaurant.",
        bright: "bright is a description or mood connected to Food, especially Restaurant.",
        rich: "rich is a description or mood connected to Food, especially Restaurant.",
        gently: "gently is a way something happens connected to Food, especially Restaurant.",
        evenly: "evenly is a way something happens connected to Food, especially Restaurant.",
        lightly: "lightly is a way something happens connected to Food, especially Restaurant.",
        crisply: "crisply is a way something happens connected to Food, especially Restaurant.",
        freshly: "freshly is a way something happens connected to Food, especially Restaurant."
      },
      templates: [
        {
          id: "food_places_2_0",
          role: "places",
          text: "The chef served dinner at the {target}.",
          tags: [
            "places",
            "restaurant"
          ]
        },
        {
          id: "food_places_2_1",
          role: "places",
          text: "The aroma filled the {target}.",
          tags: [
            "places",
            "restaurant"
          ]
        },
        {
          id: "food_people_2_0",
          role: "people",
          text: "The tasting menu was judged by the {target}.",
          tags: [
            "people",
            "restaurant"
          ]
        },
        {
          id: "food_people_2_1",
          role: "people",
          text: "The hot plate was handed to the {target}.",
          tags: [
            "people",
            "restaurant"
          ]
        },
        {
          id: "food_objects_2_0",
          role: "objects",
          text: "The chef prepared the {target}.",
          tags: [
            "objects",
            "restaurant"
          ]
        },
        {
          id: "food_objects_2_1",
          role: "objects",
          text: "The seasoning covered the {target}.",
          tags: [
            "objects",
            "restaurant"
          ]
        },
        {
          id: "food_actions_2_0",
          role: "actions",
          text: "The cook had to {target}.",
          tags: [
            "actions",
            "restaurant"
          ]
        },
        {
          id: "food_actions_2_1",
          role: "actions",
          text: "The kitchen team started to {target}.",
          tags: [
            "actions",
            "restaurant"
          ]
        },
        {
          id: "food_moods_2_0",
          role: "moods",
          text: "The dish tasted {target}.",
          tags: [
            "moods",
            "restaurant"
          ]
        },
        {
          id: "food_moods_2_1",
          role: "moods",
          text: "The table suddenly smelled {target}.",
          tags: [
            "moods",
            "restaurant"
          ]
        },
        {
          id: "food_adverbs_2_0",
          role: "adverbs",
          text: "The chef sliced the herbs {target}.",
          tags: [
            "adverbs",
            "restaurant"
          ]
        },
        {
          id: "food_adverbs_2_1",
          role: "adverbs",
          text: "The server carried the plate {target}.",
          tags: [
            "adverbs",
            "restaurant"
          ]
        }
      ]
    },
    {
      id: "food_ingredients",
      topic: "Ingredients",
      scene: "prep bowl",
      people: [
        "family",
        "farmer",
        "vendor",
        "critic",
        "barista",
        "butcher"
      ],
      places: [
        "pantry",
        "market",
        "stall",
        "bakery",
        "grill",
        "plate"
      ],
      objects: [
        "bread",
        "sauce",
        "dough",
        "herb",
        "noodle",
        "pepper"
      ],
      actions: [
        "chop",
        "taste",
        "serve",
        "season",
        "grill",
        "knead"
      ],
      moods: [
        "tender",
        "comforting",
        "bright",
        "rich",
        "smoky",
        "creamy"
      ],
      adverbs: [
        "lightly",
        "crisply",
        "freshly",
        "boldly",
        "slowly"
      ],
      facts: [
        "Ingredients belongs to Food: ingredients, cooking, meals, taste, and eating culture.",
        "prep bowl gives Food prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        pantry: "pantry is a place or setting connected to Food, especially Ingredients.",
        market: "market is a place or setting connected to Food, especially Ingredients.",
        stall: "stall is a place or setting connected to Food, especially Ingredients.",
        bakery: "bakery is a place or setting connected to Food, especially Ingredients.",
        grill: "grill is an action connected to Food, especially Ingredients.",
        plate: "plate is a place or setting connected to Food, especially Ingredients.",
        family: "family is a person or role connected to Food, especially Ingredients.",
        farmer: "farmer is a person or role connected to Food, especially Ingredients.",
        vendor: "vendor is a person or role connected to Food, especially Ingredients.",
        critic: "critic is a person or role connected to Food, especially Ingredients.",
        barista: "barista is a person or role connected to Food, especially Ingredients.",
        butcher: "butcher is a person or role connected to Food, especially Ingredients.",
        bread: "bread is a term or object connected to Food, especially Ingredients.",
        sauce: "sauce is a term or object connected to Food, especially Ingredients.",
        dough: "dough is a term or object connected to Food, especially Ingredients.",
        herb: "herb is a term or object connected to Food, especially Ingredients.",
        noodle: "noodle is a term or object connected to Food, especially Ingredients.",
        pepper: "pepper is a term or object connected to Food, especially Ingredients.",
        chop: "chop is an action connected to Food, especially Ingredients.",
        taste: "taste is an action connected to Food, especially Ingredients.",
        serve: "serve is an action connected to Food, especially Ingredients.",
        season: "season is an action connected to Food, especially Ingredients.",
        knead: "knead is an action connected to Food, especially Ingredients.",
        tender: "tender is a description or mood connected to Food, especially Ingredients.",
        comforting: "comforting is a description or mood connected to Food, especially Ingredients.",
        bright: "bright is a description or mood connected to Food, especially Ingredients.",
        rich: "rich is a description or mood connected to Food, especially Ingredients.",
        smoky: "smoky is a description or mood connected to Food, especially Ingredients.",
        creamy: "creamy is a description or mood connected to Food, especially Ingredients.",
        lightly: "lightly is a way something happens connected to Food, especially Ingredients.",
        crisply: "crisply is a way something happens connected to Food, especially Ingredients.",
        freshly: "freshly is a way something happens connected to Food, especially Ingredients.",
        boldly: "boldly is a way something happens connected to Food, especially Ingredients.",
        slowly: "slowly is a way something happens connected to Food, especially Ingredients."
      },
      templates: [
        {
          id: "food_places_3_0",
          role: "places",
          text: "The chef served dinner at the {target}.",
          tags: [
            "places",
            "ingredients"
          ]
        },
        {
          id: "food_places_3_1",
          role: "places",
          text: "The aroma filled the {target}.",
          tags: [
            "places",
            "ingredients"
          ]
        },
        {
          id: "food_people_3_0",
          role: "people",
          text: "The tasting menu was judged by the {target}.",
          tags: [
            "people",
            "ingredients"
          ]
        },
        {
          id: "food_people_3_1",
          role: "people",
          text: "The hot plate was handed to the {target}.",
          tags: [
            "people",
            "ingredients"
          ]
        },
        {
          id: "food_objects_3_0",
          role: "objects",
          text: "The chef prepared the {target}.",
          tags: [
            "objects",
            "ingredients"
          ]
        },
        {
          id: "food_objects_3_1",
          role: "objects",
          text: "The seasoning covered the {target}.",
          tags: [
            "objects",
            "ingredients"
          ]
        },
        {
          id: "food_actions_3_0",
          role: "actions",
          text: "The cook had to {target}.",
          tags: [
            "actions",
            "ingredients"
          ]
        },
        {
          id: "food_actions_3_1",
          role: "actions",
          text: "The kitchen team started to {target}.",
          tags: [
            "actions",
            "ingredients"
          ]
        },
        {
          id: "food_moods_3_0",
          role: "moods",
          text: "The dish tasted {target}.",
          tags: [
            "moods",
            "ingredients"
          ]
        },
        {
          id: "food_moods_3_1",
          role: "moods",
          text: "The table suddenly smelled {target}.",
          tags: [
            "moods",
            "ingredients"
          ]
        },
        {
          id: "food_adverbs_3_0",
          role: "adverbs",
          text: "The chef sliced the herbs {target}.",
          tags: [
            "adverbs",
            "ingredients"
          ]
        },
        {
          id: "food_adverbs_3_1",
          role: "adverbs",
          text: "The server carried the plate {target}.",
          tags: [
            "adverbs",
            "ingredients"
          ]
        }
      ]
    },
    {
      id: "food_taste",
      topic: "Taste",
      scene: "tasting menu",
      people: [
        "vendor",
        "critic",
        "barista",
        "butcher",
        "chef",
        "cook"
      ],
      places: [
        "stall",
        "bakery",
        "grill",
        "plate",
        "kitchen",
        "oven"
      ],
      objects: [
        "dough",
        "herb",
        "noodle",
        "pepper",
        "pizza",
        "cheese"
      ],
      actions: [
        "serve",
        "season",
        "grill",
        "knead",
        "bake",
        "share"
      ],
      moods: [
        "bright",
        "rich",
        "smoky",
        "creamy",
        "warm",
        "spicy"
      ],
      adverbs: [
        "freshly",
        "boldly",
        "slowly",
        "warmly",
        "carefully"
      ],
      facts: [
        "Taste belongs to Food: ingredients, cooking, meals, taste, and eating culture.",
        "tasting menu gives Food prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        stall: "stall is a place or setting connected to Food, especially Taste.",
        bakery: "bakery is a place or setting connected to Food, especially Taste.",
        grill: "grill is an action connected to Food, especially Taste.",
        plate: "plate is a place or setting connected to Food, especially Taste.",
        kitchen: "kitchen is a place or setting connected to Food, especially Taste.",
        oven: "oven is a place or setting connected to Food, especially Taste.",
        vendor: "vendor is a person or role connected to Food, especially Taste.",
        critic: "critic is a person or role connected to Food, especially Taste.",
        barista: "barista is a person or role connected to Food, especially Taste.",
        butcher: "butcher is a person or role connected to Food, especially Taste.",
        chef: "chef is a person or role connected to Food, especially Taste.",
        cook: "cook is a person or role connected to Food, especially Taste.",
        dough: "dough is a term or object connected to Food, especially Taste.",
        herb: "herb is a term or object connected to Food, especially Taste.",
        noodle: "noodle is a term or object connected to Food, especially Taste.",
        pepper: "pepper is a term or object connected to Food, especially Taste.",
        pizza: "pizza is a term or object connected to Food, especially Taste.",
        cheese: "cheese is a term or object connected to Food, especially Taste.",
        serve: "serve is an action connected to Food, especially Taste.",
        season: "season is an action connected to Food, especially Taste.",
        knead: "knead is an action connected to Food, especially Taste.",
        bake: "bake is an action connected to Food, especially Taste.",
        share: "share is an action connected to Food, especially Taste.",
        bright: "bright is a description or mood connected to Food, especially Taste.",
        rich: "rich is a description or mood connected to Food, especially Taste.",
        smoky: "smoky is a description or mood connected to Food, especially Taste.",
        creamy: "creamy is a description or mood connected to Food, especially Taste.",
        warm: "warm is a description or mood connected to Food, especially Taste.",
        spicy: "spicy is a description or mood connected to Food, especially Taste.",
        freshly: "freshly is a way something happens connected to Food, especially Taste.",
        boldly: "boldly is a way something happens connected to Food, especially Taste.",
        slowly: "slowly is a way something happens connected to Food, especially Taste.",
        warmly: "warmly is a way something happens connected to Food, especially Taste.",
        carefully: "carefully is a way something happens connected to Food, especially Taste."
      },
      templates: [
        {
          id: "food_places_4_0",
          role: "places",
          text: "The chef served dinner at the {target}.",
          tags: [
            "places",
            "taste"
          ]
        },
        {
          id: "food_places_4_1",
          role: "places",
          text: "The aroma filled the {target}.",
          tags: [
            "places",
            "taste"
          ]
        },
        {
          id: "food_people_4_0",
          role: "people",
          text: "The tasting menu was judged by the {target}.",
          tags: [
            "people",
            "taste"
          ]
        },
        {
          id: "food_people_4_1",
          role: "people",
          text: "The hot plate was handed to the {target}.",
          tags: [
            "people",
            "taste"
          ]
        },
        {
          id: "food_objects_4_0",
          role: "objects",
          text: "The chef prepared the {target}.",
          tags: [
            "objects",
            "taste"
          ]
        },
        {
          id: "food_objects_4_1",
          role: "objects",
          text: "The seasoning covered the {target}.",
          tags: [
            "objects",
            "taste"
          ]
        },
        {
          id: "food_actions_4_0",
          role: "actions",
          text: "The cook had to {target}.",
          tags: [
            "actions",
            "taste"
          ]
        },
        {
          id: "food_actions_4_1",
          role: "actions",
          text: "The kitchen team started to {target}.",
          tags: [
            "actions",
            "taste"
          ]
        },
        {
          id: "food_moods_4_0",
          role: "moods",
          text: "The dish tasted {target}.",
          tags: [
            "moods",
            "taste"
          ]
        },
        {
          id: "food_moods_4_1",
          role: "moods",
          text: "The table suddenly smelled {target}.",
          tags: [
            "moods",
            "taste"
          ]
        },
        {
          id: "food_adverbs_4_0",
          role: "adverbs",
          text: "The chef sliced the herbs {target}.",
          tags: [
            "adverbs",
            "taste"
          ]
        },
        {
          id: "food_adverbs_4_1",
          role: "adverbs",
          text: "The server carried the plate {target}.",
          tags: [
            "adverbs",
            "taste"
          ]
        }
      ]
    },
    {
      id: "food_streetfood",
      topic: "Street Food",
      scene: "food stall",
      people: [
        "barista",
        "butcher",
        "chef",
        "cook",
        "server",
        "guest"
      ],
      places: [
        "grill",
        "plate",
        "kitchen",
        "oven",
        "table",
        "bowl"
      ],
      objects: [
        "noodle",
        "pepper",
        "pizza",
        "cheese",
        "slice",
        "soup"
      ],
      actions: [
        "grill",
        "knead",
        "bake",
        "share",
        "eat",
        "stir"
      ],
      moods: [
        "smoky",
        "creamy",
        "warm",
        "spicy",
        "sweet",
        "fresh"
      ],
      adverbs: [
        "slowly",
        "warmly",
        "carefully",
        "quickly",
        "gently"
      ],
      facts: [
        "Street Food belongs to Food: ingredients, cooking, meals, taste, and eating culture.",
        "food stall gives Food prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        grill: "grill is an action connected to Food, especially Street Food.",
        plate: "plate is a place or setting connected to Food, especially Street Food.",
        kitchen: "kitchen is a place or setting connected to Food, especially Street Food.",
        oven: "oven is a place or setting connected to Food, especially Street Food.",
        table: "table is a place or setting connected to Food, especially Street Food.",
        bowl: "bowl is a place or setting connected to Food, especially Street Food.",
        barista: "barista is a person or role connected to Food, especially Street Food.",
        butcher: "butcher is a person or role connected to Food, especially Street Food.",
        chef: "chef is a person or role connected to Food, especially Street Food.",
        cook: "cook is a person or role connected to Food, especially Street Food.",
        server: "server is a person or role connected to Food, especially Street Food.",
        guest: "guest is a person or role connected to Food, especially Street Food.",
        noodle: "noodle is a term or object connected to Food, especially Street Food.",
        pepper: "pepper is a term or object connected to Food, especially Street Food.",
        pizza: "pizza is a term or object connected to Food, especially Street Food.",
        cheese: "cheese is a term or object connected to Food, especially Street Food.",
        slice: "slice is a term or object connected to Food, especially Street Food.",
        soup: "soup is a term or object connected to Food, especially Street Food.",
        knead: "knead is an action connected to Food, especially Street Food.",
        bake: "bake is an action connected to Food, especially Street Food.",
        share: "share is an action connected to Food, especially Street Food.",
        eat: "eat is an action connected to Food, especially Street Food.",
        stir: "stir is an action connected to Food, especially Street Food.",
        smoky: "smoky is a description or mood connected to Food, especially Street Food.",
        creamy: "creamy is a description or mood connected to Food, especially Street Food.",
        warm: "warm is a description or mood connected to Food, especially Street Food.",
        spicy: "spicy is a description or mood connected to Food, especially Street Food.",
        sweet: "sweet is a description or mood connected to Food, especially Street Food.",
        fresh: "fresh is a description or mood connected to Food, especially Street Food.",
        slowly: "slowly is a way something happens connected to Food, especially Street Food.",
        warmly: "warmly is a way something happens connected to Food, especially Street Food.",
        carefully: "carefully is a way something happens connected to Food, especially Street Food.",
        quickly: "quickly is a way something happens connected to Food, especially Street Food.",
        gently: "gently is a way something happens connected to Food, especially Street Food."
      },
      templates: [
        {
          id: "food_places_5_0",
          role: "places",
          text: "The chef served dinner at the {target}.",
          tags: [
            "places",
            "street_food"
          ]
        },
        {
          id: "food_places_5_1",
          role: "places",
          text: "The aroma filled the {target}.",
          tags: [
            "places",
            "street_food"
          ]
        },
        {
          id: "food_people_5_0",
          role: "people",
          text: "The tasting menu was judged by the {target}.",
          tags: [
            "people",
            "street_food"
          ]
        },
        {
          id: "food_people_5_1",
          role: "people",
          text: "The hot plate was handed to the {target}.",
          tags: [
            "people",
            "street_food"
          ]
        },
        {
          id: "food_objects_5_0",
          role: "objects",
          text: "The chef prepared the {target}.",
          tags: [
            "objects",
            "street_food"
          ]
        },
        {
          id: "food_objects_5_1",
          role: "objects",
          text: "The seasoning covered the {target}.",
          tags: [
            "objects",
            "street_food"
          ]
        },
        {
          id: "food_actions_5_0",
          role: "actions",
          text: "The cook had to {target}.",
          tags: [
            "actions",
            "street_food"
          ]
        },
        {
          id: "food_actions_5_1",
          role: "actions",
          text: "The kitchen team started to {target}.",
          tags: [
            "actions",
            "street_food"
          ]
        },
        {
          id: "food_moods_5_0",
          role: "moods",
          text: "The dish tasted {target}.",
          tags: [
            "moods",
            "street_food"
          ]
        },
        {
          id: "food_moods_5_1",
          role: "moods",
          text: "The table suddenly smelled {target}.",
          tags: [
            "moods",
            "street_food"
          ]
        },
        {
          id: "food_adverbs_5_0",
          role: "adverbs",
          text: "The chef sliced the herbs {target}.",
          tags: [
            "adverbs",
            "street_food"
          ]
        },
        {
          id: "food_adverbs_5_1",
          role: "adverbs",
          text: "The server carried the plate {target}.",
          tags: [
            "adverbs",
            "street_food"
          ]
        }
      ]
    }
  ]
});
