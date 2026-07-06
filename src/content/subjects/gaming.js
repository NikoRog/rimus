import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "gaming",
  name: "Gaming",
  theme: "rules, play, levels, systems, competition, and interaction",
  nodes: [
    {
      id: "gaming_combat",
      topic: "Combat",
      scene: "boss arena",
      people: [
        "player",
        "builder",
        "creeper",
        "rival",
        "champion",
        "boss"
      ],
      places: [
        "arena",
        "cave",
        "village",
        "mine",
        "screen",
        "grid"
      ],
      objects: [
        "block",
        "pickaxe",
        "diamond",
        "line",
        "shape",
        "sword"
      ],
      actions: [
        "craft",
        "mine",
        "build",
        "rotate",
        "drop",
        "clear"
      ],
      moods: [
        "focused",
        "dangerous",
        "epic",
        "tense",
        "chaotic",
        "competitive"
      ],
      adverbs: [
        "quickly",
        "boldly",
        "silently",
        "carefully",
        "wildly"
      ],
      facts: [
        "Combat belongs to Gaming: rules, play, levels, systems, competition, and interaction.",
        "boss arena gives Gaming prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        arena: "arena is a place or setting connected to Gaming, especially Combat.",
        cave: "cave is a place or setting connected to Gaming, especially Combat.",
        village: "village is a place or setting connected to Gaming, especially Combat.",
        mine: "mine is an action connected to Gaming, especially Combat.",
        screen: "screen is a place or setting connected to Gaming, especially Combat.",
        grid: "grid is a place or setting connected to Gaming, especially Combat.",
        player: "player is a person or role connected to Gaming, especially Combat.",
        builder: "builder is a person or role connected to Gaming, especially Combat.",
        creeper: "creeper is a person or role connected to Gaming, especially Combat.",
        rival: "rival is a person or role connected to Gaming, especially Combat.",
        champion: "champion is a person or role connected to Gaming, especially Combat.",
        boss: "boss is a person or role connected to Gaming, especially Combat.",
        block: "block is a term or object connected to Gaming, especially Combat.",
        pickaxe: "pickaxe is a term or object connected to Gaming, especially Combat.",
        diamond: "diamond is a term or object connected to Gaming, especially Combat.",
        line: "line is a term or object connected to Gaming, especially Combat.",
        shape: "shape is a term or object connected to Gaming, especially Combat.",
        sword: "sword is a term or object connected to Gaming, especially Combat.",
        craft: "craft is an action connected to Gaming, especially Combat.",
        build: "build is an action connected to Gaming, especially Combat.",
        rotate: "rotate is an action connected to Gaming, especially Combat.",
        drop: "drop is an action connected to Gaming, especially Combat.",
        clear: "clear is an action connected to Gaming, especially Combat.",
        focused: "focused is a description or mood connected to Gaming, especially Combat.",
        dangerous: "dangerous is a description or mood connected to Gaming, especially Combat.",
        epic: "epic is a description or mood connected to Gaming, especially Combat.",
        tense: "tense is a description or mood connected to Gaming, especially Combat.",
        chaotic: "chaotic is a description or mood connected to Gaming, especially Combat.",
        competitive: "competitive is a description or mood connected to Gaming, especially Combat.",
        quickly: "quickly is a way something happens connected to Gaming, especially Combat.",
        boldly: "boldly is a way something happens connected to Gaming, especially Combat.",
        silently: "silently is a way something happens connected to Gaming, especially Combat.",
        carefully: "carefully is a way something happens connected to Gaming, especially Combat.",
        wildly: "wildly is a way something happens connected to Gaming, especially Combat."
      },
      templates: [
        {
          id: "gaming_places_0_0",
          role: "places",
          text: "The quest started in the {target}.",
          tags: [
            "places",
            "combat"
          ]
        },
        {
          id: "gaming_places_0_1",
          role: "places",
          text: "The player respawned near the {target}.",
          tags: [
            "places",
            "combat"
          ]
        },
        {
          id: "gaming_people_0_0",
          role: "people",
          text: "The final loot went to the {target}.",
          tags: [
            "people",
            "combat"
          ]
        },
        {
          id: "gaming_people_0_1",
          role: "people",
          text: "The squad waited for the {target}.",
          tags: [
            "people",
            "combat"
          ]
        },
        {
          id: "gaming_objects_0_0",
          role: "objects",
          text: "The level ended with the {target}.",
          tags: [
            "objects",
            "combat"
          ]
        },
        {
          id: "gaming_objects_0_1",
          role: "objects",
          text: "The player dodged toward the {target}.",
          tags: [
            "objects",
            "combat"
          ]
        },
        {
          id: "gaming_actions_0_0",
          role: "actions",
          text: "The player had to {target}.",
          tags: [
            "actions",
            "combat"
          ]
        },
        {
          id: "gaming_actions_0_1",
          role: "actions",
          text: "The party chose to {target}.",
          tags: [
            "actions",
            "combat"
          ]
        },
        {
          id: "gaming_moods_0_0",
          role: "moods",
          text: "The boss fight felt {target}.",
          tags: [
            "moods",
            "combat"
          ]
        },
        {
          id: "gaming_moods_0_1",
          role: "moods",
          text: "The final level looked {target}.",
          tags: [
            "moods",
            "combat"
          ]
        },
        {
          id: "gaming_adverbs_0_0",
          role: "adverbs",
          text: "The player dodged {target}.",
          tags: [
            "adverbs",
            "combat"
          ]
        },
        {
          id: "gaming_adverbs_0_1",
          role: "adverbs",
          text: "The squad pushed the objective {target}.",
          tags: [
            "adverbs",
            "combat"
          ]
        }
      ]
    },
    {
      id: "gaming_puzzle",
      topic: "Puzzle",
      scene: "puzzle room",
      people: [
        "creeper",
        "rival",
        "champion",
        "boss",
        "teammate",
        "mage"
      ],
      places: [
        "village",
        "mine",
        "screen",
        "grid",
        "arcade",
        "lobby"
      ],
      objects: [
        "diamond",
        "line",
        "shape",
        "sword",
        "shield",
        "quest"
      ],
      actions: [
        "build",
        "rotate",
        "drop",
        "clear",
        "dodge",
        "attack"
      ],
      moods: [
        "epic",
        "tense",
        "chaotic",
        "competitive",
        "hidden",
        "legendary"
      ],
      adverbs: [
        "silently",
        "carefully",
        "wildly",
        "smoothly",
        "slowly"
      ],
      facts: [
        "Puzzle belongs to Gaming: rules, play, levels, systems, competition, and interaction.",
        "puzzle room gives Gaming prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        village: "village is a place or setting connected to Gaming, especially Puzzle.",
        mine: "mine is a place or setting connected to Gaming, especially Puzzle.",
        screen: "screen is a place or setting connected to Gaming, especially Puzzle.",
        grid: "grid is a place or setting connected to Gaming, especially Puzzle.",
        arcade: "arcade is a place or setting connected to Gaming, especially Puzzle.",
        lobby: "lobby is a place or setting connected to Gaming, especially Puzzle.",
        creeper: "creeper is a person or role connected to Gaming, especially Puzzle.",
        rival: "rival is a person or role connected to Gaming, especially Puzzle.",
        champion: "champion is a person or role connected to Gaming, especially Puzzle.",
        boss: "boss is a person or role connected to Gaming, especially Puzzle.",
        teammate: "teammate is a person or role connected to Gaming, especially Puzzle.",
        mage: "mage is a person or role connected to Gaming, especially Puzzle.",
        diamond: "diamond is a term or object connected to Gaming, especially Puzzle.",
        line: "line is a term or object connected to Gaming, especially Puzzle.",
        shape: "shape is a term or object connected to Gaming, especially Puzzle.",
        sword: "sword is a term or object connected to Gaming, especially Puzzle.",
        shield: "shield is a term or object connected to Gaming, especially Puzzle.",
        quest: "quest is a term or object connected to Gaming, especially Puzzle.",
        build: "build is an action connected to Gaming, especially Puzzle.",
        rotate: "rotate is an action connected to Gaming, especially Puzzle.",
        drop: "drop is an action connected to Gaming, especially Puzzle.",
        clear: "clear is an action connected to Gaming, especially Puzzle.",
        dodge: "dodge is an action connected to Gaming, especially Puzzle.",
        attack: "attack is an action connected to Gaming, especially Puzzle.",
        epic: "epic is a description or mood connected to Gaming, especially Puzzle.",
        tense: "tense is a description or mood connected to Gaming, especially Puzzle.",
        chaotic: "chaotic is a description or mood connected to Gaming, especially Puzzle.",
        competitive: "competitive is a description or mood connected to Gaming, especially Puzzle.",
        hidden: "hidden is a description or mood connected to Gaming, especially Puzzle.",
        legendary: "legendary is a description or mood connected to Gaming, especially Puzzle.",
        silently: "silently is a way something happens connected to Gaming, especially Puzzle.",
        carefully: "carefully is a way something happens connected to Gaming, especially Puzzle.",
        wildly: "wildly is a way something happens connected to Gaming, especially Puzzle.",
        smoothly: "smoothly is a way something happens connected to Gaming, especially Puzzle.",
        slowly: "slowly is a way something happens connected to Gaming, especially Puzzle."
      },
      templates: [
        {
          id: "gaming_places_1_0",
          role: "places",
          text: "The quest started in the {target}.",
          tags: [
            "places",
            "puzzle"
          ]
        },
        {
          id: "gaming_places_1_1",
          role: "places",
          text: "The player respawned near the {target}.",
          tags: [
            "places",
            "puzzle"
          ]
        },
        {
          id: "gaming_people_1_0",
          role: "people",
          text: "The final loot went to the {target}.",
          tags: [
            "people",
            "puzzle"
          ]
        },
        {
          id: "gaming_people_1_1",
          role: "people",
          text: "The squad waited for the {target}.",
          tags: [
            "people",
            "puzzle"
          ]
        },
        {
          id: "gaming_objects_1_0",
          role: "objects",
          text: "The level ended with the {target}.",
          tags: [
            "objects",
            "puzzle"
          ]
        },
        {
          id: "gaming_objects_1_1",
          role: "objects",
          text: "The player dodged toward the {target}.",
          tags: [
            "objects",
            "puzzle"
          ]
        },
        {
          id: "gaming_actions_1_0",
          role: "actions",
          text: "The player had to {target}.",
          tags: [
            "actions",
            "puzzle"
          ]
        },
        {
          id: "gaming_actions_1_1",
          role: "actions",
          text: "The party chose to {target}.",
          tags: [
            "actions",
            "puzzle"
          ]
        },
        {
          id: "gaming_moods_1_0",
          role: "moods",
          text: "The boss fight felt {target}.",
          tags: [
            "moods",
            "puzzle"
          ]
        },
        {
          id: "gaming_moods_1_1",
          role: "moods",
          text: "The final level looked {target}.",
          tags: [
            "moods",
            "puzzle"
          ]
        },
        {
          id: "gaming_adverbs_1_0",
          role: "adverbs",
          text: "The player dodged {target}.",
          tags: [
            "adverbs",
            "puzzle"
          ]
        },
        {
          id: "gaming_adverbs_1_1",
          role: "adverbs",
          text: "The squad pushed the objective {target}.",
          tags: [
            "adverbs",
            "puzzle"
          ]
        }
      ]
    },
    {
      id: "gaming_multiplayer",
      topic: "Multiplayer",
      scene: "online lobby",
      people: [
        "champion",
        "boss",
        "teammate",
        "mage",
        "healer",
        "speedrunner"
      ],
      places: [
        "screen",
        "grid",
        "arcade",
        "lobby",
        "dungeon",
        "level"
      ],
      objects: [
        "shape",
        "sword",
        "shield",
        "quest",
        "loot",
        "portal"
      ],
      actions: [
        "drop",
        "clear",
        "dodge",
        "attack",
        "unlock",
        "respawn"
      ],
      moods: [
        "chaotic",
        "competitive",
        "hidden",
        "legendary",
        "fast",
        "strategic"
      ],
      adverbs: [
        "wildly",
        "smoothly",
        "slowly",
        "cleverly",
        "sharply"
      ],
      facts: [
        "Multiplayer belongs to Gaming: rules, play, levels, systems, competition, and interaction.",
        "online lobby gives Gaming prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        screen: "screen is a place or setting connected to Gaming, especially Multiplayer.",
        grid: "grid is a place or setting connected to Gaming, especially Multiplayer.",
        arcade: "arcade is a place or setting connected to Gaming, especially Multiplayer.",
        lobby: "lobby is a place or setting connected to Gaming, especially Multiplayer.",
        dungeon: "dungeon is a place or setting connected to Gaming, especially Multiplayer.",
        level: "level is a place or setting connected to Gaming, especially Multiplayer.",
        champion: "champion is a person or role connected to Gaming, especially Multiplayer.",
        boss: "boss is a person or role connected to Gaming, especially Multiplayer.",
        teammate: "teammate is a person or role connected to Gaming, especially Multiplayer.",
        mage: "mage is a person or role connected to Gaming, especially Multiplayer.",
        healer: "healer is a person or role connected to Gaming, especially Multiplayer.",
        speedrunner: "speedrunner is a person or role connected to Gaming, especially Multiplayer.",
        shape: "shape is a term or object connected to Gaming, especially Multiplayer.",
        sword: "sword is a term or object connected to Gaming, especially Multiplayer.",
        shield: "shield is a term or object connected to Gaming, especially Multiplayer.",
        quest: "quest is a term or object connected to Gaming, especially Multiplayer.",
        loot: "loot is a term or object connected to Gaming, especially Multiplayer.",
        portal: "portal is a term or object connected to Gaming, especially Multiplayer.",
        drop: "drop is an action connected to Gaming, especially Multiplayer.",
        clear: "clear is an action connected to Gaming, especially Multiplayer.",
        dodge: "dodge is an action connected to Gaming, especially Multiplayer.",
        attack: "attack is an action connected to Gaming, especially Multiplayer.",
        unlock: "unlock is an action connected to Gaming, especially Multiplayer.",
        respawn: "respawn is an action connected to Gaming, especially Multiplayer.",
        chaotic: "chaotic is a description or mood connected to Gaming, especially Multiplayer.",
        competitive: "competitive is a description or mood connected to Gaming, especially Multiplayer.",
        hidden: "hidden is a description or mood connected to Gaming, especially Multiplayer.",
        legendary: "legendary is a description or mood connected to Gaming, especially Multiplayer.",
        fast: "fast is a description or mood connected to Gaming, especially Multiplayer.",
        strategic: "strategic is a description or mood connected to Gaming, especially Multiplayer.",
        wildly: "wildly is a way something happens connected to Gaming, especially Multiplayer.",
        smoothly: "smoothly is a way something happens connected to Gaming, especially Multiplayer.",
        slowly: "slowly is a way something happens connected to Gaming, especially Multiplayer.",
        cleverly: "cleverly is a way something happens connected to Gaming, especially Multiplayer.",
        sharply: "sharply is a way something happens connected to Gaming, especially Multiplayer."
      },
      templates: [
        {
          id: "gaming_places_2_0",
          role: "places",
          text: "The quest started in the {target}.",
          tags: [
            "places",
            "multiplayer"
          ]
        },
        {
          id: "gaming_places_2_1",
          role: "places",
          text: "The player respawned near the {target}.",
          tags: [
            "places",
            "multiplayer"
          ]
        },
        {
          id: "gaming_people_2_0",
          role: "people",
          text: "The final loot went to the {target}.",
          tags: [
            "people",
            "multiplayer"
          ]
        },
        {
          id: "gaming_people_2_1",
          role: "people",
          text: "The squad waited for the {target}.",
          tags: [
            "people",
            "multiplayer"
          ]
        },
        {
          id: "gaming_objects_2_0",
          role: "objects",
          text: "The level ended with the {target}.",
          tags: [
            "objects",
            "multiplayer"
          ]
        },
        {
          id: "gaming_objects_2_1",
          role: "objects",
          text: "The player dodged toward the {target}.",
          tags: [
            "objects",
            "multiplayer"
          ]
        },
        {
          id: "gaming_actions_2_0",
          role: "actions",
          text: "The player had to {target}.",
          tags: [
            "actions",
            "multiplayer"
          ]
        },
        {
          id: "gaming_actions_2_1",
          role: "actions",
          text: "The party chose to {target}.",
          tags: [
            "actions",
            "multiplayer"
          ]
        },
        {
          id: "gaming_moods_2_0",
          role: "moods",
          text: "The boss fight felt {target}.",
          tags: [
            "moods",
            "multiplayer"
          ]
        },
        {
          id: "gaming_moods_2_1",
          role: "moods",
          text: "The final level looked {target}.",
          tags: [
            "moods",
            "multiplayer"
          ]
        },
        {
          id: "gaming_adverbs_2_0",
          role: "adverbs",
          text: "The player dodged {target}.",
          tags: [
            "adverbs",
            "multiplayer"
          ]
        },
        {
          id: "gaming_adverbs_2_1",
          role: "adverbs",
          text: "The squad pushed the objective {target}.",
          tags: [
            "adverbs",
            "multiplayer"
          ]
        }
      ]
    },
    {
      id: "gaming_rpg",
      topic: "RPG",
      scene: "village quest",
      people: [
        "teammate",
        "mage",
        "healer",
        "speedrunner",
        "raider",
        "npc"
      ],
      places: [
        "arcade",
        "lobby",
        "dungeon",
        "level",
        "checkpoint",
        "server"
      ],
      objects: [
        "shield",
        "quest",
        "loot",
        "portal",
        "controller",
        "treasure"
      ],
      actions: [
        "dodge",
        "attack",
        "unlock",
        "respawn",
        "level",
        "survive"
      ],
      moods: [
        "hidden",
        "legendary",
        "fast",
        "strategic",
        "wild",
        "clutch"
      ],
      adverbs: [
        "slowly",
        "cleverly",
        "sharply",
        "perfectly",
        "quickly"
      ],
      facts: [
        "RPG belongs to Gaming: rules, play, levels, systems, competition, and interaction.",
        "village quest gives Gaming prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        arcade: "arcade is a place or setting connected to Gaming, especially RPG.",
        lobby: "lobby is a place or setting connected to Gaming, especially RPG.",
        dungeon: "dungeon is a place or setting connected to Gaming, especially RPG.",
        level: "level is an action connected to Gaming, especially RPG.",
        checkpoint: "checkpoint is a place or setting connected to Gaming, especially RPG.",
        server: "server is a place or setting connected to Gaming, especially RPG.",
        teammate: "teammate is a person or role connected to Gaming, especially RPG.",
        mage: "mage is a person or role connected to Gaming, especially RPG.",
        healer: "healer is a person or role connected to Gaming, especially RPG.",
        speedrunner: "speedrunner is a person or role connected to Gaming, especially RPG.",
        raider: "raider is a person or role connected to Gaming, especially RPG.",
        npc: "npc is a person or role connected to Gaming, especially RPG.",
        shield: "shield is a term or object connected to Gaming, especially RPG.",
        quest: "quest is a term or object connected to Gaming, especially RPG.",
        loot: "loot is a term or object connected to Gaming, especially RPG.",
        portal: "portal is a term or object connected to Gaming, especially RPG.",
        controller: "controller is a term or object connected to Gaming, especially RPG.",
        treasure: "treasure is a term or object connected to Gaming, especially RPG.",
        dodge: "dodge is an action connected to Gaming, especially RPG.",
        attack: "attack is an action connected to Gaming, especially RPG.",
        unlock: "unlock is an action connected to Gaming, especially RPG.",
        respawn: "respawn is an action connected to Gaming, especially RPG.",
        survive: "survive is an action connected to Gaming, especially RPG.",
        hidden: "hidden is a description or mood connected to Gaming, especially RPG.",
        legendary: "legendary is a description or mood connected to Gaming, especially RPG.",
        fast: "fast is a description or mood connected to Gaming, especially RPG.",
        strategic: "strategic is a description or mood connected to Gaming, especially RPG.",
        wild: "wild is a description or mood connected to Gaming, especially RPG.",
        clutch: "clutch is a description or mood connected to Gaming, especially RPG.",
        slowly: "slowly is a way something happens connected to Gaming, especially RPG.",
        cleverly: "cleverly is a way something happens connected to Gaming, especially RPG.",
        sharply: "sharply is a way something happens connected to Gaming, especially RPG.",
        perfectly: "perfectly is a way something happens connected to Gaming, especially RPG.",
        quickly: "quickly is a way something happens connected to Gaming, especially RPG."
      },
      templates: [
        {
          id: "gaming_places_3_0",
          role: "places",
          text: "The quest started in the {target}.",
          tags: [
            "places",
            "rpg"
          ]
        },
        {
          id: "gaming_places_3_1",
          role: "places",
          text: "The player respawned near the {target}.",
          tags: [
            "places",
            "rpg"
          ]
        },
        {
          id: "gaming_people_3_0",
          role: "people",
          text: "The final loot went to the {target}.",
          tags: [
            "people",
            "rpg"
          ]
        },
        {
          id: "gaming_people_3_1",
          role: "people",
          text: "The squad waited for the {target}.",
          tags: [
            "people",
            "rpg"
          ]
        },
        {
          id: "gaming_objects_3_0",
          role: "objects",
          text: "The level ended with the {target}.",
          tags: [
            "objects",
            "rpg"
          ]
        },
        {
          id: "gaming_objects_3_1",
          role: "objects",
          text: "The player dodged toward the {target}.",
          tags: [
            "objects",
            "rpg"
          ]
        },
        {
          id: "gaming_actions_3_0",
          role: "actions",
          text: "The player had to {target}.",
          tags: [
            "actions",
            "rpg"
          ]
        },
        {
          id: "gaming_actions_3_1",
          role: "actions",
          text: "The party chose to {target}.",
          tags: [
            "actions",
            "rpg"
          ]
        },
        {
          id: "gaming_moods_3_0",
          role: "moods",
          text: "The boss fight felt {target}.",
          tags: [
            "moods",
            "rpg"
          ]
        },
        {
          id: "gaming_moods_3_1",
          role: "moods",
          text: "The final level looked {target}.",
          tags: [
            "moods",
            "rpg"
          ]
        },
        {
          id: "gaming_adverbs_3_0",
          role: "adverbs",
          text: "The player dodged {target}.",
          tags: [
            "adverbs",
            "rpg"
          ]
        },
        {
          id: "gaming_adverbs_3_1",
          role: "adverbs",
          text: "The squad pushed the objective {target}.",
          tags: [
            "adverbs",
            "rpg"
          ]
        }
      ]
    },
    {
      id: "gaming_platforming",
      topic: "Platforming",
      scene: "platform level",
      people: [
        "healer",
        "speedrunner",
        "raider",
        "npc",
        "player",
        "builder"
      ],
      places: [
        "dungeon",
        "level",
        "checkpoint",
        "server",
        "arena",
        "cave"
      ],
      objects: [
        "loot",
        "portal",
        "controller",
        "treasure",
        "block",
        "pickaxe"
      ],
      actions: [
        "unlock",
        "respawn",
        "level",
        "survive",
        "craft",
        "mine"
      ],
      moods: [
        "fast",
        "strategic",
        "wild",
        "clutch",
        "focused",
        "dangerous"
      ],
      adverbs: [
        "sharply",
        "perfectly",
        "quickly",
        "boldly",
        "silently"
      ],
      facts: [
        "Platforming belongs to Gaming: rules, play, levels, systems, competition, and interaction.",
        "platform level gives Gaming prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        dungeon: "dungeon is a place or setting connected to Gaming, especially Platforming.",
        level: "level is an action connected to Gaming, especially Platforming.",
        checkpoint: "checkpoint is a place or setting connected to Gaming, especially Platforming.",
        server: "server is a place or setting connected to Gaming, especially Platforming.",
        arena: "arena is a place or setting connected to Gaming, especially Platforming.",
        cave: "cave is a place or setting connected to Gaming, especially Platforming.",
        healer: "healer is a person or role connected to Gaming, especially Platforming.",
        speedrunner: "speedrunner is a person or role connected to Gaming, especially Platforming.",
        raider: "raider is a person or role connected to Gaming, especially Platforming.",
        npc: "npc is a person or role connected to Gaming, especially Platforming.",
        player: "player is a person or role connected to Gaming, especially Platforming.",
        builder: "builder is a person or role connected to Gaming, especially Platforming.",
        loot: "loot is a term or object connected to Gaming, especially Platforming.",
        portal: "portal is a term or object connected to Gaming, especially Platforming.",
        controller: "controller is a term or object connected to Gaming, especially Platforming.",
        treasure: "treasure is a term or object connected to Gaming, especially Platforming.",
        block: "block is a term or object connected to Gaming, especially Platforming.",
        pickaxe: "pickaxe is a term or object connected to Gaming, especially Platforming.",
        unlock: "unlock is an action connected to Gaming, especially Platforming.",
        respawn: "respawn is an action connected to Gaming, especially Platforming.",
        survive: "survive is an action connected to Gaming, especially Platforming.",
        craft: "craft is an action connected to Gaming, especially Platforming.",
        mine: "mine is an action connected to Gaming, especially Platforming.",
        fast: "fast is a description or mood connected to Gaming, especially Platforming.",
        strategic: "strategic is a description or mood connected to Gaming, especially Platforming.",
        wild: "wild is a description or mood connected to Gaming, especially Platforming.",
        clutch: "clutch is a description or mood connected to Gaming, especially Platforming.",
        focused: "focused is a description or mood connected to Gaming, especially Platforming.",
        dangerous: "dangerous is a description or mood connected to Gaming, especially Platforming.",
        sharply: "sharply is a way something happens connected to Gaming, especially Platforming.",
        perfectly: "perfectly is a way something happens connected to Gaming, especially Platforming.",
        quickly: "quickly is a way something happens connected to Gaming, especially Platforming.",
        boldly: "boldly is a way something happens connected to Gaming, especially Platforming.",
        silently: "silently is a way something happens connected to Gaming, especially Platforming."
      },
      templates: [
        {
          id: "gaming_places_4_0",
          role: "places",
          text: "The quest started in the {target}.",
          tags: [
            "places",
            "platforming"
          ]
        },
        {
          id: "gaming_places_4_1",
          role: "places",
          text: "The player respawned near the {target}.",
          tags: [
            "places",
            "platforming"
          ]
        },
        {
          id: "gaming_people_4_0",
          role: "people",
          text: "The final loot went to the {target}.",
          tags: [
            "people",
            "platforming"
          ]
        },
        {
          id: "gaming_people_4_1",
          role: "people",
          text: "The squad waited for the {target}.",
          tags: [
            "people",
            "platforming"
          ]
        },
        {
          id: "gaming_objects_4_0",
          role: "objects",
          text: "The level ended with the {target}.",
          tags: [
            "objects",
            "platforming"
          ]
        },
        {
          id: "gaming_objects_4_1",
          role: "objects",
          text: "The player dodged toward the {target}.",
          tags: [
            "objects",
            "platforming"
          ]
        },
        {
          id: "gaming_actions_4_0",
          role: "actions",
          text: "The player had to {target}.",
          tags: [
            "actions",
            "platforming"
          ]
        },
        {
          id: "gaming_actions_4_1",
          role: "actions",
          text: "The party chose to {target}.",
          tags: [
            "actions",
            "platforming"
          ]
        },
        {
          id: "gaming_moods_4_0",
          role: "moods",
          text: "The boss fight felt {target}.",
          tags: [
            "moods",
            "platforming"
          ]
        },
        {
          id: "gaming_moods_4_1",
          role: "moods",
          text: "The final level looked {target}.",
          tags: [
            "moods",
            "platforming"
          ]
        },
        {
          id: "gaming_adverbs_4_0",
          role: "adverbs",
          text: "The player dodged {target}.",
          tags: [
            "adverbs",
            "platforming"
          ]
        },
        {
          id: "gaming_adverbs_4_1",
          role: "adverbs",
          text: "The squad pushed the objective {target}.",
          tags: [
            "adverbs",
            "platforming"
          ]
        }
      ]
    },
    {
      id: "gaming_survival",
      topic: "Survival",
      scene: "safe camp",
      people: [
        "raider",
        "npc",
        "player",
        "builder",
        "creeper",
        "rival"
      ],
      places: [
        "checkpoint",
        "server",
        "arena",
        "cave",
        "village",
        "mine"
      ],
      objects: [
        "controller",
        "treasure",
        "block",
        "pickaxe",
        "diamond",
        "line"
      ],
      actions: [
        "level",
        "survive",
        "craft",
        "mine",
        "build",
        "rotate"
      ],
      moods: [
        "wild",
        "clutch",
        "focused",
        "dangerous",
        "epic",
        "tense"
      ],
      adverbs: [
        "quickly",
        "boldly",
        "silently",
        "carefully",
        "wildly"
      ],
      facts: [
        "Survival belongs to Gaming: rules, play, levels, systems, competition, and interaction.",
        "safe camp gives Gaming prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        checkpoint: "checkpoint is a place or setting connected to Gaming, especially Survival.",
        server: "server is a place or setting connected to Gaming, especially Survival.",
        arena: "arena is a place or setting connected to Gaming, especially Survival.",
        cave: "cave is a place or setting connected to Gaming, especially Survival.",
        village: "village is a place or setting connected to Gaming, especially Survival.",
        mine: "mine is an action connected to Gaming, especially Survival.",
        raider: "raider is a person or role connected to Gaming, especially Survival.",
        npc: "npc is a person or role connected to Gaming, especially Survival.",
        player: "player is a person or role connected to Gaming, especially Survival.",
        builder: "builder is a person or role connected to Gaming, especially Survival.",
        creeper: "creeper is a person or role connected to Gaming, especially Survival.",
        rival: "rival is a person or role connected to Gaming, especially Survival.",
        controller: "controller is a term or object connected to Gaming, especially Survival.",
        treasure: "treasure is a term or object connected to Gaming, especially Survival.",
        block: "block is a term or object connected to Gaming, especially Survival.",
        pickaxe: "pickaxe is a term or object connected to Gaming, especially Survival.",
        diamond: "diamond is a term or object connected to Gaming, especially Survival.",
        line: "line is a term or object connected to Gaming, especially Survival.",
        level: "level is an action connected to Gaming, especially Survival.",
        survive: "survive is an action connected to Gaming, especially Survival.",
        craft: "craft is an action connected to Gaming, especially Survival.",
        build: "build is an action connected to Gaming, especially Survival.",
        rotate: "rotate is an action connected to Gaming, especially Survival.",
        wild: "wild is a description or mood connected to Gaming, especially Survival.",
        clutch: "clutch is a description or mood connected to Gaming, especially Survival.",
        focused: "focused is a description or mood connected to Gaming, especially Survival.",
        dangerous: "dangerous is a description or mood connected to Gaming, especially Survival.",
        epic: "epic is a description or mood connected to Gaming, especially Survival.",
        tense: "tense is a description or mood connected to Gaming, especially Survival.",
        quickly: "quickly is a way something happens connected to Gaming, especially Survival.",
        boldly: "boldly is a way something happens connected to Gaming, especially Survival.",
        silently: "silently is a way something happens connected to Gaming, especially Survival.",
        carefully: "carefully is a way something happens connected to Gaming, especially Survival.",
        wildly: "wildly is a way something happens connected to Gaming, especially Survival."
      },
      templates: [
        {
          id: "gaming_places_5_0",
          role: "places",
          text: "The quest started in the {target}.",
          tags: [
            "places",
            "survival"
          ]
        },
        {
          id: "gaming_places_5_1",
          role: "places",
          text: "The player respawned near the {target}.",
          tags: [
            "places",
            "survival"
          ]
        },
        {
          id: "gaming_people_5_0",
          role: "people",
          text: "The final loot went to the {target}.",
          tags: [
            "people",
            "survival"
          ]
        },
        {
          id: "gaming_people_5_1",
          role: "people",
          text: "The squad waited for the {target}.",
          tags: [
            "people",
            "survival"
          ]
        },
        {
          id: "gaming_objects_5_0",
          role: "objects",
          text: "The level ended with the {target}.",
          tags: [
            "objects",
            "survival"
          ]
        },
        {
          id: "gaming_objects_5_1",
          role: "objects",
          text: "The player dodged toward the {target}.",
          tags: [
            "objects",
            "survival"
          ]
        },
        {
          id: "gaming_actions_5_0",
          role: "actions",
          text: "The player had to {target}.",
          tags: [
            "actions",
            "survival"
          ]
        },
        {
          id: "gaming_actions_5_1",
          role: "actions",
          text: "The party chose to {target}.",
          tags: [
            "actions",
            "survival"
          ]
        },
        {
          id: "gaming_moods_5_0",
          role: "moods",
          text: "The boss fight felt {target}.",
          tags: [
            "moods",
            "survival"
          ]
        },
        {
          id: "gaming_moods_5_1",
          role: "moods",
          text: "The final level looked {target}.",
          tags: [
            "moods",
            "survival"
          ]
        },
        {
          id: "gaming_adverbs_5_0",
          role: "adverbs",
          text: "The player dodged {target}.",
          tags: [
            "adverbs",
            "survival"
          ]
        },
        {
          id: "gaming_adverbs_5_1",
          role: "adverbs",
          text: "The squad pushed the objective {target}.",
          tags: [
            "adverbs",
            "survival"
          ]
        }
      ]
    }
  ]
});
