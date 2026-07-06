import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "history",
  name: "History",
  theme: "past societies, events, power, inventions, and change",
  nodes: [
    {
      id: "history_ancientempires",
      topic: "Ancient Empires",
      scene: "ancient city",
      people: [
        "emperor",
        "soldier",
        "senator",
        "raider",
        "king",
        "sailor"
      ],
      places: [
        "empire",
        "road",
        "sea",
        "village",
        "ship",
        "castle"
      ],
      objects: [
        "sword",
        "law",
        "coin",
        "axe",
        "shield",
        "longship"
      ],
      actions: [
        "march",
        "rule",
        "build",
        "sail",
        "raid",
        "trade"
      ],
      moods: [
        "ancient",
        "royal",
        "brave",
        "tense",
        "historic",
        "powerful"
      ],
      adverbs: [
        "boldly",
        "slowly",
        "publicly",
        "secretly",
        "carefully"
      ],
      facts: [
        "Ancient Empires belongs to History: past societies, events, power, inventions, and change.",
        "ancient city gives History prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        empire: "empire is a place or setting connected to History, especially Ancient Empires.",
        road: "road is a place or setting connected to History, especially Ancient Empires.",
        sea: "sea is a place or setting connected to History, especially Ancient Empires.",
        village: "village is a place or setting connected to History, especially Ancient Empires.",
        ship: "ship is a place or setting connected to History, especially Ancient Empires.",
        castle: "castle is a place or setting connected to History, especially Ancient Empires.",
        emperor: "emperor is a person or role connected to History, especially Ancient Empires.",
        soldier: "soldier is a person or role connected to History, especially Ancient Empires.",
        senator: "senator is a person or role connected to History, especially Ancient Empires.",
        raider: "raider is a person or role connected to History, especially Ancient Empires.",
        king: "king is a person or role connected to History, especially Ancient Empires.",
        sailor: "sailor is a person or role connected to History, especially Ancient Empires.",
        sword: "sword is a term or object connected to History, especially Ancient Empires.",
        law: "law is a term or object connected to History, especially Ancient Empires.",
        coin: "coin is a term or object connected to History, especially Ancient Empires.",
        axe: "axe is a term or object connected to History, especially Ancient Empires.",
        shield: "shield is a term or object connected to History, especially Ancient Empires.",
        longship: "longship is a term or object connected to History, especially Ancient Empires.",
        march: "march is an action connected to History, especially Ancient Empires.",
        rule: "rule is an action connected to History, especially Ancient Empires.",
        build: "build is an action connected to History, especially Ancient Empires.",
        sail: "sail is an action connected to History, especially Ancient Empires.",
        raid: "raid is an action connected to History, especially Ancient Empires.",
        trade: "trade is an action connected to History, especially Ancient Empires.",
        ancient: "ancient is a description or mood connected to History, especially Ancient Empires.",
        royal: "royal is a description or mood connected to History, especially Ancient Empires.",
        brave: "brave is a description or mood connected to History, especially Ancient Empires.",
        tense: "tense is a description or mood connected to History, especially Ancient Empires.",
        historic: "historic is a description or mood connected to History, especially Ancient Empires.",
        powerful: "powerful is a description or mood connected to History, especially Ancient Empires.",
        boldly: "boldly is a way something happens connected to History, especially Ancient Empires.",
        slowly: "slowly is a way something happens connected to History, especially Ancient Empires.",
        publicly: "publicly is a way something happens connected to History, especially Ancient Empires.",
        secretly: "secretly is a way something happens connected to History, especially Ancient Empires.",
        carefully: "carefully is a way something happens connected to History, especially Ancient Empires."
      },
      templates: [
        {
          id: "history_places_0_0",
          role: "places",
          text: "The record pointed to the {target}.",
          tags: [
            "places",
            "ancient_empires"
          ]
        },
        {
          id: "history_places_0_1",
          role: "places",
          text: "The army defended the {target}.",
          tags: [
            "places",
            "ancient_empires"
          ]
        },
        {
          id: "history_people_0_0",
          role: "people",
          text: "The treaty was signed by the {target}.",
          tags: [
            "people",
            "ancient_empires"
          ]
        },
        {
          id: "history_people_0_1",
          role: "people",
          text: "The chronicle named the {target}.",
          tags: [
            "people",
            "ancient_empires"
          ]
        },
        {
          id: "history_objects_0_0",
          role: "objects",
          text: "The museum displayed the {target}.",
          tags: [
            "objects",
            "ancient_empires"
          ]
        },
        {
          id: "history_objects_0_1",
          role: "objects",
          text: "The inventor tested the {target}.",
          tags: [
            "objects",
            "ancient_empires"
          ]
        },
        {
          id: "history_actions_0_0",
          role: "actions",
          text: "The empire had to {target}.",
          tags: [
            "actions",
            "ancient_empires"
          ]
        },
        {
          id: "history_actions_0_1",
          role: "actions",
          text: "The rebel crowd started to {target}.",
          tags: [
            "actions",
            "ancient_empires"
          ]
        },
        {
          id: "history_moods_0_0",
          role: "moods",
          text: "The old record sounded {target}.",
          tags: [
            "moods",
            "ancient_empires"
          ]
        },
        {
          id: "history_moods_0_1",
          role: "moods",
          text: "The battle report felt {target}.",
          tags: [
            "moods",
            "ancient_empires"
          ]
        },
        {
          id: "history_adverbs_0_0",
          role: "adverbs",
          text: "The historian read the tablet {target}.",
          tags: [
            "adverbs",
            "ancient_empires"
          ]
        },
        {
          id: "history_adverbs_0_1",
          role: "adverbs",
          text: "The army advanced {target}.",
          tags: [
            "adverbs",
            "ancient_empires"
          ]
        }
      ]
    },
    {
      id: "history_battles",
      topic: "Battles",
      scene: "battlefield",
      people: [
        "senator",
        "raider",
        "king",
        "sailor",
        "queen",
        "inventor"
      ],
      places: [
        "sea",
        "village",
        "ship",
        "castle",
        "court",
        "border"
      ],
      objects: [
        "coin",
        "axe",
        "shield",
        "longship",
        "treaty",
        "crown"
      ],
      actions: [
        "build",
        "sail",
        "raid",
        "trade",
        "defend",
        "invent"
      ],
      moods: [
        "brave",
        "tense",
        "historic",
        "powerful",
        "forgotten",
        "public"
      ],
      adverbs: [
        "publicly",
        "secretly",
        "carefully",
        "bravely",
        "widely"
      ],
      facts: [
        "Battles belongs to History: past societies, events, power, inventions, and change.",
        "battlefield gives History prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        sea: "sea is a place or setting connected to History, especially Battles.",
        village: "village is a place or setting connected to History, especially Battles.",
        ship: "ship is a place or setting connected to History, especially Battles.",
        castle: "castle is a place or setting connected to History, especially Battles.",
        court: "court is a place or setting connected to History, especially Battles.",
        border: "border is a place or setting connected to History, especially Battles.",
        senator: "senator is a person or role connected to History, especially Battles.",
        raider: "raider is a person or role connected to History, especially Battles.",
        king: "king is a person or role connected to History, especially Battles.",
        sailor: "sailor is a person or role connected to History, especially Battles.",
        queen: "queen is a person or role connected to History, especially Battles.",
        inventor: "inventor is a person or role connected to History, especially Battles.",
        coin: "coin is a term or object connected to History, especially Battles.",
        axe: "axe is a term or object connected to History, especially Battles.",
        shield: "shield is a term or object connected to History, especially Battles.",
        longship: "longship is a term or object connected to History, especially Battles.",
        treaty: "treaty is a term or object connected to History, especially Battles.",
        crown: "crown is a term or object connected to History, especially Battles.",
        build: "build is an action connected to History, especially Battles.",
        sail: "sail is an action connected to History, especially Battles.",
        raid: "raid is an action connected to History, especially Battles.",
        trade: "trade is an action connected to History, especially Battles.",
        defend: "defend is an action connected to History, especially Battles.",
        invent: "invent is an action connected to History, especially Battles.",
        brave: "brave is a description or mood connected to History, especially Battles.",
        tense: "tense is a description or mood connected to History, especially Battles.",
        historic: "historic is a description or mood connected to History, especially Battles.",
        powerful: "powerful is a description or mood connected to History, especially Battles.",
        forgotten: "forgotten is a description or mood connected to History, especially Battles.",
        public: "public is a description or mood connected to History, especially Battles.",
        publicly: "publicly is a way something happens connected to History, especially Battles.",
        secretly: "secretly is a way something happens connected to History, especially Battles.",
        carefully: "carefully is a way something happens connected to History, especially Battles.",
        bravely: "bravely is a way something happens connected to History, especially Battles.",
        widely: "widely is a way something happens connected to History, especially Battles."
      },
      templates: [
        {
          id: "history_places_1_0",
          role: "places",
          text: "The record pointed to the {target}.",
          tags: [
            "places",
            "battles"
          ]
        },
        {
          id: "history_places_1_1",
          role: "places",
          text: "The army defended the {target}.",
          tags: [
            "places",
            "battles"
          ]
        },
        {
          id: "history_people_1_0",
          role: "people",
          text: "The treaty was signed by the {target}.",
          tags: [
            "people",
            "battles"
          ]
        },
        {
          id: "history_people_1_1",
          role: "people",
          text: "The chronicle named the {target}.",
          tags: [
            "people",
            "battles"
          ]
        },
        {
          id: "history_objects_1_0",
          role: "objects",
          text: "The museum displayed the {target}.",
          tags: [
            "objects",
            "battles"
          ]
        },
        {
          id: "history_objects_1_1",
          role: "objects",
          text: "The inventor tested the {target}.",
          tags: [
            "objects",
            "battles"
          ]
        },
        {
          id: "history_actions_1_0",
          role: "actions",
          text: "The empire had to {target}.",
          tags: [
            "actions",
            "battles"
          ]
        },
        {
          id: "history_actions_1_1",
          role: "actions",
          text: "The rebel crowd started to {target}.",
          tags: [
            "actions",
            "battles"
          ]
        },
        {
          id: "history_moods_1_0",
          role: "moods",
          text: "The old record sounded {target}.",
          tags: [
            "moods",
            "battles"
          ]
        },
        {
          id: "history_moods_1_1",
          role: "moods",
          text: "The battle report felt {target}.",
          tags: [
            "moods",
            "battles"
          ]
        },
        {
          id: "history_adverbs_1_0",
          role: "adverbs",
          text: "The historian read the tablet {target}.",
          tags: [
            "adverbs",
            "battles"
          ]
        },
        {
          id: "history_adverbs_1_1",
          role: "adverbs",
          text: "The army advanced {target}.",
          tags: [
            "adverbs",
            "battles"
          ]
        }
      ]
    },
    {
      id: "history_kingsleaders",
      topic: "Kings / Leaders",
      scene: "royal court",
      people: [
        "king",
        "sailor",
        "queen",
        "inventor",
        "rebel",
        "scribe"
      ],
      places: [
        "ship",
        "castle",
        "court",
        "border",
        "museum",
        "forum"
      ],
      objects: [
        "shield",
        "longship",
        "treaty",
        "crown",
        "scroll",
        "banner"
      ],
      actions: [
        "raid",
        "trade",
        "defend",
        "invent",
        "revolt",
        "record"
      ],
      moods: [
        "historic",
        "powerful",
        "forgotten",
        "public",
        "fierce",
        "lasting"
      ],
      adverbs: [
        "carefully",
        "bravely",
        "widely",
        "quietly",
        "fiercely"
      ],
      facts: [
        "Kings / Leaders belongs to History: past societies, events, power, inventions, and change.",
        "royal court gives History prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        ship: "ship is a place or setting connected to History, especially Kings / Leaders.",
        castle: "castle is a place or setting connected to History, especially Kings / Leaders.",
        court: "court is a place or setting connected to History, especially Kings / Leaders.",
        border: "border is a place or setting connected to History, especially Kings / Leaders.",
        museum: "museum is a place or setting connected to History, especially Kings / Leaders.",
        forum: "forum is a place or setting connected to History, especially Kings / Leaders.",
        king: "king is a person or role connected to History, especially Kings / Leaders.",
        sailor: "sailor is a person or role connected to History, especially Kings / Leaders.",
        queen: "queen is a person or role connected to History, especially Kings / Leaders.",
        inventor: "inventor is a person or role connected to History, especially Kings / Leaders.",
        rebel: "rebel is a person or role connected to History, especially Kings / Leaders.",
        scribe: "scribe is a person or role connected to History, especially Kings / Leaders.",
        shield: "shield is a term or object connected to History, especially Kings / Leaders.",
        longship: "longship is a term or object connected to History, especially Kings / Leaders.",
        treaty: "treaty is a term or object connected to History, especially Kings / Leaders.",
        crown: "crown is a term or object connected to History, especially Kings / Leaders.",
        scroll: "scroll is a term or object connected to History, especially Kings / Leaders.",
        banner: "banner is a term or object connected to History, especially Kings / Leaders.",
        raid: "raid is an action connected to History, especially Kings / Leaders.",
        trade: "trade is an action connected to History, especially Kings / Leaders.",
        defend: "defend is an action connected to History, especially Kings / Leaders.",
        invent: "invent is an action connected to History, especially Kings / Leaders.",
        revolt: "revolt is an action connected to History, especially Kings / Leaders.",
        record: "record is an action connected to History, especially Kings / Leaders.",
        historic: "historic is a description or mood connected to History, especially Kings / Leaders.",
        powerful: "powerful is a description or mood connected to History, especially Kings / Leaders.",
        forgotten: "forgotten is a description or mood connected to History, especially Kings / Leaders.",
        public: "public is a description or mood connected to History, especially Kings / Leaders.",
        fierce: "fierce is a description or mood connected to History, especially Kings / Leaders.",
        lasting: "lasting is a description or mood connected to History, especially Kings / Leaders.",
        carefully: "carefully is a way something happens connected to History, especially Kings / Leaders.",
        bravely: "bravely is a way something happens connected to History, especially Kings / Leaders.",
        widely: "widely is a way something happens connected to History, especially Kings / Leaders.",
        quietly: "quietly is a way something happens connected to History, especially Kings / Leaders.",
        fiercely: "fiercely is a way something happens connected to History, especially Kings / Leaders."
      },
      templates: [
        {
          id: "history_places_2_0",
          role: "places",
          text: "The record pointed to the {target}.",
          tags: [
            "places",
            "kings_leaders"
          ]
        },
        {
          id: "history_places_2_1",
          role: "places",
          text: "The army defended the {target}.",
          tags: [
            "places",
            "kings_leaders"
          ]
        },
        {
          id: "history_people_2_0",
          role: "people",
          text: "The treaty was signed by the {target}.",
          tags: [
            "people",
            "kings_leaders"
          ]
        },
        {
          id: "history_people_2_1",
          role: "people",
          text: "The chronicle named the {target}.",
          tags: [
            "people",
            "kings_leaders"
          ]
        },
        {
          id: "history_objects_2_0",
          role: "objects",
          text: "The museum displayed the {target}.",
          tags: [
            "objects",
            "kings_leaders"
          ]
        },
        {
          id: "history_objects_2_1",
          role: "objects",
          text: "The inventor tested the {target}.",
          tags: [
            "objects",
            "kings_leaders"
          ]
        },
        {
          id: "history_actions_2_0",
          role: "actions",
          text: "The empire had to {target}.",
          tags: [
            "actions",
            "kings_leaders"
          ]
        },
        {
          id: "history_actions_2_1",
          role: "actions",
          text: "The rebel crowd started to {target}.",
          tags: [
            "actions",
            "kings_leaders"
          ]
        },
        {
          id: "history_moods_2_0",
          role: "moods",
          text: "The old record sounded {target}.",
          tags: [
            "moods",
            "kings_leaders"
          ]
        },
        {
          id: "history_moods_2_1",
          role: "moods",
          text: "The battle report felt {target}.",
          tags: [
            "moods",
            "kings_leaders"
          ]
        },
        {
          id: "history_adverbs_2_0",
          role: "adverbs",
          text: "The historian read the tablet {target}.",
          tags: [
            "adverbs",
            "kings_leaders"
          ]
        },
        {
          id: "history_adverbs_2_1",
          role: "adverbs",
          text: "The army advanced {target}.",
          tags: [
            "adverbs",
            "kings_leaders"
          ]
        }
      ]
    },
    {
      id: "history_inventions",
      topic: "Inventions",
      scene: "workshop",
      people: [
        "queen",
        "inventor",
        "rebel",
        "scribe",
        "general",
        "merchant"
      ],
      places: [
        "court",
        "border",
        "museum",
        "forum",
        "battlefield",
        "empire"
      ],
      objects: [
        "treaty",
        "crown",
        "scroll",
        "banner",
        "tablet",
        "artifact"
      ],
      actions: [
        "defend",
        "invent",
        "revolt",
        "record",
        "sign",
        "conquer"
      ],
      moods: [
        "forgotten",
        "public",
        "fierce",
        "lasting",
        "cultural",
        "strategic"
      ],
      adverbs: [
        "widely",
        "quietly",
        "fiercely",
        "steadily",
        "boldly"
      ],
      facts: [
        "Inventions belongs to History: past societies, events, power, inventions, and change.",
        "workshop gives History prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        court: "court is a place or setting connected to History, especially Inventions.",
        border: "border is a place or setting connected to History, especially Inventions.",
        museum: "museum is a place or setting connected to History, especially Inventions.",
        forum: "forum is a place or setting connected to History, especially Inventions.",
        battlefield: "battlefield is a place or setting connected to History, especially Inventions.",
        empire: "empire is a place or setting connected to History, especially Inventions.",
        queen: "queen is a person or role connected to History, especially Inventions.",
        inventor: "inventor is a person or role connected to History, especially Inventions.",
        rebel: "rebel is a person or role connected to History, especially Inventions.",
        scribe: "scribe is a person or role connected to History, especially Inventions.",
        general: "general is a person or role connected to History, especially Inventions.",
        merchant: "merchant is a person or role connected to History, especially Inventions.",
        treaty: "treaty is a term or object connected to History, especially Inventions.",
        crown: "crown is a term or object connected to History, especially Inventions.",
        scroll: "scroll is a term or object connected to History, especially Inventions.",
        banner: "banner is a term or object connected to History, especially Inventions.",
        tablet: "tablet is a term or object connected to History, especially Inventions.",
        artifact: "artifact is a term or object connected to History, especially Inventions.",
        defend: "defend is an action connected to History, especially Inventions.",
        invent: "invent is an action connected to History, especially Inventions.",
        revolt: "revolt is an action connected to History, especially Inventions.",
        record: "record is an action connected to History, especially Inventions.",
        sign: "sign is an action connected to History, especially Inventions.",
        conquer: "conquer is an action connected to History, especially Inventions.",
        forgotten: "forgotten is a description or mood connected to History, especially Inventions.",
        public: "public is a description or mood connected to History, especially Inventions.",
        fierce: "fierce is a description or mood connected to History, especially Inventions.",
        lasting: "lasting is a description or mood connected to History, especially Inventions.",
        cultural: "cultural is a description or mood connected to History, especially Inventions.",
        strategic: "strategic is a description or mood connected to History, especially Inventions.",
        widely: "widely is a way something happens connected to History, especially Inventions.",
        quietly: "quietly is a way something happens connected to History, especially Inventions.",
        fiercely: "fiercely is a way something happens connected to History, especially Inventions.",
        steadily: "steadily is a way something happens connected to History, especially Inventions.",
        boldly: "boldly is a way something happens connected to History, especially Inventions."
      },
      templates: [
        {
          id: "history_places_3_0",
          role: "places",
          text: "The record pointed to the {target}.",
          tags: [
            "places",
            "inventions"
          ]
        },
        {
          id: "history_places_3_1",
          role: "places",
          text: "The army defended the {target}.",
          tags: [
            "places",
            "inventions"
          ]
        },
        {
          id: "history_people_3_0",
          role: "people",
          text: "The treaty was signed by the {target}.",
          tags: [
            "people",
            "inventions"
          ]
        },
        {
          id: "history_people_3_1",
          role: "people",
          text: "The chronicle named the {target}.",
          tags: [
            "people",
            "inventions"
          ]
        },
        {
          id: "history_objects_3_0",
          role: "objects",
          text: "The museum displayed the {target}.",
          tags: [
            "objects",
            "inventions"
          ]
        },
        {
          id: "history_objects_3_1",
          role: "objects",
          text: "The inventor tested the {target}.",
          tags: [
            "objects",
            "inventions"
          ]
        },
        {
          id: "history_actions_3_0",
          role: "actions",
          text: "The empire had to {target}.",
          tags: [
            "actions",
            "inventions"
          ]
        },
        {
          id: "history_actions_3_1",
          role: "actions",
          text: "The rebel crowd started to {target}.",
          tags: [
            "actions",
            "inventions"
          ]
        },
        {
          id: "history_moods_3_0",
          role: "moods",
          text: "The old record sounded {target}.",
          tags: [
            "moods",
            "inventions"
          ]
        },
        {
          id: "history_moods_3_1",
          role: "moods",
          text: "The battle report felt {target}.",
          tags: [
            "moods",
            "inventions"
          ]
        },
        {
          id: "history_adverbs_3_0",
          role: "adverbs",
          text: "The historian read the tablet {target}.",
          tags: [
            "adverbs",
            "inventions"
          ]
        },
        {
          id: "history_adverbs_3_1",
          role: "adverbs",
          text: "The army advanced {target}.",
          tags: [
            "adverbs",
            "inventions"
          ]
        }
      ]
    },
    {
      id: "history_revolutions",
      topic: "Revolutions",
      scene: "public square",
      people: [
        "rebel",
        "scribe",
        "general",
        "merchant",
        "emperor",
        "soldier"
      ],
      places: [
        "museum",
        "forum",
        "battlefield",
        "empire",
        "road",
        "sea"
      ],
      objects: [
        "scroll",
        "banner",
        "tablet",
        "artifact",
        "sword",
        "law"
      ],
      actions: [
        "revolt",
        "record",
        "sign",
        "conquer",
        "march",
        "rule"
      ],
      moods: [
        "fierce",
        "lasting",
        "cultural",
        "strategic",
        "ancient",
        "royal"
      ],
      adverbs: [
        "fiercely",
        "steadily",
        "boldly",
        "slowly",
        "publicly"
      ],
      facts: [
        "Revolutions belongs to History: past societies, events, power, inventions, and change.",
        "public square gives History prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        museum: "museum is a place or setting connected to History, especially Revolutions.",
        forum: "forum is a place or setting connected to History, especially Revolutions.",
        battlefield: "battlefield is a place or setting connected to History, especially Revolutions.",
        empire: "empire is a place or setting connected to History, especially Revolutions.",
        road: "road is a place or setting connected to History, especially Revolutions.",
        sea: "sea is a place or setting connected to History, especially Revolutions.",
        rebel: "rebel is a person or role connected to History, especially Revolutions.",
        scribe: "scribe is a person or role connected to History, especially Revolutions.",
        general: "general is a person or role connected to History, especially Revolutions.",
        merchant: "merchant is a person or role connected to History, especially Revolutions.",
        emperor: "emperor is a person or role connected to History, especially Revolutions.",
        soldier: "soldier is a person or role connected to History, especially Revolutions.",
        scroll: "scroll is a term or object connected to History, especially Revolutions.",
        banner: "banner is a term or object connected to History, especially Revolutions.",
        tablet: "tablet is a term or object connected to History, especially Revolutions.",
        artifact: "artifact is a term or object connected to History, especially Revolutions.",
        sword: "sword is a term or object connected to History, especially Revolutions.",
        law: "law is a term or object connected to History, especially Revolutions.",
        revolt: "revolt is an action connected to History, especially Revolutions.",
        record: "record is an action connected to History, especially Revolutions.",
        sign: "sign is an action connected to History, especially Revolutions.",
        conquer: "conquer is an action connected to History, especially Revolutions.",
        march: "march is an action connected to History, especially Revolutions.",
        rule: "rule is an action connected to History, especially Revolutions.",
        fierce: "fierce is a description or mood connected to History, especially Revolutions.",
        lasting: "lasting is a description or mood connected to History, especially Revolutions.",
        cultural: "cultural is a description or mood connected to History, especially Revolutions.",
        strategic: "strategic is a description or mood connected to History, especially Revolutions.",
        ancient: "ancient is a description or mood connected to History, especially Revolutions.",
        royal: "royal is a description or mood connected to History, especially Revolutions.",
        fiercely: "fiercely is a way something happens connected to History, especially Revolutions.",
        steadily: "steadily is a way something happens connected to History, especially Revolutions.",
        boldly: "boldly is a way something happens connected to History, especially Revolutions.",
        slowly: "slowly is a way something happens connected to History, especially Revolutions.",
        publicly: "publicly is a way something happens connected to History, especially Revolutions."
      },
      templates: [
        {
          id: "history_places_4_0",
          role: "places",
          text: "The record pointed to the {target}.",
          tags: [
            "places",
            "revolutions"
          ]
        },
        {
          id: "history_places_4_1",
          role: "places",
          text: "The army defended the {target}.",
          tags: [
            "places",
            "revolutions"
          ]
        },
        {
          id: "history_people_4_0",
          role: "people",
          text: "The treaty was signed by the {target}.",
          tags: [
            "people",
            "revolutions"
          ]
        },
        {
          id: "history_people_4_1",
          role: "people",
          text: "The chronicle named the {target}.",
          tags: [
            "people",
            "revolutions"
          ]
        },
        {
          id: "history_objects_4_0",
          role: "objects",
          text: "The museum displayed the {target}.",
          tags: [
            "objects",
            "revolutions"
          ]
        },
        {
          id: "history_objects_4_1",
          role: "objects",
          text: "The inventor tested the {target}.",
          tags: [
            "objects",
            "revolutions"
          ]
        },
        {
          id: "history_actions_4_0",
          role: "actions",
          text: "The empire had to {target}.",
          tags: [
            "actions",
            "revolutions"
          ]
        },
        {
          id: "history_actions_4_1",
          role: "actions",
          text: "The rebel crowd started to {target}.",
          tags: [
            "actions",
            "revolutions"
          ]
        },
        {
          id: "history_moods_4_0",
          role: "moods",
          text: "The old record sounded {target}.",
          tags: [
            "moods",
            "revolutions"
          ]
        },
        {
          id: "history_moods_4_1",
          role: "moods",
          text: "The battle report felt {target}.",
          tags: [
            "moods",
            "revolutions"
          ]
        },
        {
          id: "history_adverbs_4_0",
          role: "adverbs",
          text: "The historian read the tablet {target}.",
          tags: [
            "adverbs",
            "revolutions"
          ]
        },
        {
          id: "history_adverbs_4_1",
          role: "adverbs",
          text: "The army advanced {target}.",
          tags: [
            "adverbs",
            "revolutions"
          ]
        }
      ]
    },
    {
      id: "history_culture",
      topic: "Culture",
      scene: "museum hall",
      people: [
        "general",
        "merchant",
        "emperor",
        "soldier",
        "senator",
        "raider"
      ],
      places: [
        "battlefield",
        "empire",
        "road",
        "sea",
        "village",
        "ship"
      ],
      objects: [
        "tablet",
        "artifact",
        "sword",
        "law",
        "coin",
        "axe"
      ],
      actions: [
        "sign",
        "conquer",
        "march",
        "rule",
        "build",
        "sail"
      ],
      moods: [
        "cultural",
        "strategic",
        "ancient",
        "royal",
        "brave",
        "tense"
      ],
      adverbs: [
        "boldly",
        "slowly",
        "publicly",
        "secretly",
        "carefully"
      ],
      facts: [
        "Culture belongs to History: past societies, events, power, inventions, and change.",
        "museum hall gives History prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        battlefield: "battlefield is a place or setting connected to History, especially Culture.",
        empire: "empire is a place or setting connected to History, especially Culture.",
        road: "road is a place or setting connected to History, especially Culture.",
        sea: "sea is a place or setting connected to History, especially Culture.",
        village: "village is a place or setting connected to History, especially Culture.",
        ship: "ship is a place or setting connected to History, especially Culture.",
        general: "general is a person or role connected to History, especially Culture.",
        merchant: "merchant is a person or role connected to History, especially Culture.",
        emperor: "emperor is a person or role connected to History, especially Culture.",
        soldier: "soldier is a person or role connected to History, especially Culture.",
        senator: "senator is a person or role connected to History, especially Culture.",
        raider: "raider is a person or role connected to History, especially Culture.",
        tablet: "tablet is a term or object connected to History, especially Culture.",
        artifact: "artifact is a term or object connected to History, especially Culture.",
        sword: "sword is a term or object connected to History, especially Culture.",
        law: "law is a term or object connected to History, especially Culture.",
        coin: "coin is a term or object connected to History, especially Culture.",
        axe: "axe is a term or object connected to History, especially Culture.",
        sign: "sign is an action connected to History, especially Culture.",
        conquer: "conquer is an action connected to History, especially Culture.",
        march: "march is an action connected to History, especially Culture.",
        rule: "rule is an action connected to History, especially Culture.",
        build: "build is an action connected to History, especially Culture.",
        sail: "sail is an action connected to History, especially Culture.",
        cultural: "cultural is a description or mood connected to History, especially Culture.",
        strategic: "strategic is a description or mood connected to History, especially Culture.",
        ancient: "ancient is a description or mood connected to History, especially Culture.",
        royal: "royal is a description or mood connected to History, especially Culture.",
        brave: "brave is a description or mood connected to History, especially Culture.",
        tense: "tense is a description or mood connected to History, especially Culture.",
        boldly: "boldly is a way something happens connected to History, especially Culture.",
        slowly: "slowly is a way something happens connected to History, especially Culture.",
        publicly: "publicly is a way something happens connected to History, especially Culture.",
        secretly: "secretly is a way something happens connected to History, especially Culture.",
        carefully: "carefully is a way something happens connected to History, especially Culture."
      },
      templates: [
        {
          id: "history_places_5_0",
          role: "places",
          text: "The record pointed to the {target}.",
          tags: [
            "places",
            "culture"
          ]
        },
        {
          id: "history_places_5_1",
          role: "places",
          text: "The army defended the {target}.",
          tags: [
            "places",
            "culture"
          ]
        },
        {
          id: "history_people_5_0",
          role: "people",
          text: "The treaty was signed by the {target}.",
          tags: [
            "people",
            "culture"
          ]
        },
        {
          id: "history_people_5_1",
          role: "people",
          text: "The chronicle named the {target}.",
          tags: [
            "people",
            "culture"
          ]
        },
        {
          id: "history_objects_5_0",
          role: "objects",
          text: "The museum displayed the {target}.",
          tags: [
            "objects",
            "culture"
          ]
        },
        {
          id: "history_objects_5_1",
          role: "objects",
          text: "The inventor tested the {target}.",
          tags: [
            "objects",
            "culture"
          ]
        },
        {
          id: "history_actions_5_0",
          role: "actions",
          text: "The empire had to {target}.",
          tags: [
            "actions",
            "culture"
          ]
        },
        {
          id: "history_actions_5_1",
          role: "actions",
          text: "The rebel crowd started to {target}.",
          tags: [
            "actions",
            "culture"
          ]
        },
        {
          id: "history_moods_5_0",
          role: "moods",
          text: "The old record sounded {target}.",
          tags: [
            "moods",
            "culture"
          ]
        },
        {
          id: "history_moods_5_1",
          role: "moods",
          text: "The battle report felt {target}.",
          tags: [
            "moods",
            "culture"
          ]
        },
        {
          id: "history_adverbs_5_0",
          role: "adverbs",
          text: "The historian read the tablet {target}.",
          tags: [
            "adverbs",
            "culture"
          ]
        },
        {
          id: "history_adverbs_5_1",
          role: "adverbs",
          text: "The army advanced {target}.",
          tags: [
            "adverbs",
            "culture"
          ]
        }
      ]
    }
  ]
});
