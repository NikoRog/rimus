import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "languages",
  name: "Languages",
  theme: "words, grammar, meaning, sound, writing, and communication",
  nodes: [
    {
      id: "languages_grammar",
      topic: "Grammar",
      scene: "grammar lesson",
      people: [
        "student",
        "teacher",
        "speaker",
        "translator",
        "poet",
        "traveler"
      ],
      places: [
        "class",
        "page",
        "school",
        "street",
        "screen",
        "library"
      ],
      objects: [
        "word",
        "accent",
        "phrase",
        "meaning",
        "sentence",
        "letter"
      ],
      actions: [
        "speak",
        "learn",
        "translate",
        "explain",
        "compare",
        "listen"
      ],
      moods: [
        "clear",
        "fluent",
        "formal",
        "casual",
        "confusing",
        "polite"
      ],
      adverbs: [
        "clearly",
        "slowly",
        "fluently",
        "carefully",
        "politely"
      ],
      facts: [
        "Grammar belongs to Languages: words, grammar, meaning, sound, writing, and communication.",
        "grammar lesson gives Languages prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        class: "class is a place or setting connected to Languages, especially Grammar.",
        page: "page is a place or setting connected to Languages, especially Grammar.",
        school: "school is a place or setting connected to Languages, especially Grammar.",
        street: "street is a place or setting connected to Languages, especially Grammar.",
        screen: "screen is a place or setting connected to Languages, especially Grammar.",
        library: "library is a place or setting connected to Languages, especially Grammar.",
        student: "student is a person or role connected to Languages, especially Grammar.",
        teacher: "teacher is a person or role connected to Languages, especially Grammar.",
        speaker: "speaker is a person or role connected to Languages, especially Grammar.",
        translator: "translator is a person or role connected to Languages, especially Grammar.",
        poet: "poet is a person or role connected to Languages, especially Grammar.",
        traveler: "traveler is a person or role connected to Languages, especially Grammar.",
        word: "word is a term or object connected to Languages, especially Grammar.",
        accent: "accent is a term or object connected to Languages, especially Grammar.",
        phrase: "phrase is a term or object connected to Languages, especially Grammar.",
        meaning: "meaning is a term or object connected to Languages, especially Grammar.",
        sentence: "sentence is a term or object connected to Languages, especially Grammar.",
        letter: "letter is a term or object connected to Languages, especially Grammar.",
        speak: "speak is an action connected to Languages, especially Grammar.",
        learn: "learn is an action connected to Languages, especially Grammar.",
        translate: "translate is an action connected to Languages, especially Grammar.",
        explain: "explain is an action connected to Languages, especially Grammar.",
        compare: "compare is an action connected to Languages, especially Grammar.",
        listen: "listen is an action connected to Languages, especially Grammar.",
        clear: "clear is a description or mood connected to Languages, especially Grammar.",
        fluent: "fluent is a description or mood connected to Languages, especially Grammar.",
        formal: "formal is a description or mood connected to Languages, especially Grammar.",
        casual: "casual is a description or mood connected to Languages, especially Grammar.",
        confusing: "confusing is a description or mood connected to Languages, especially Grammar.",
        polite: "polite is a description or mood connected to Languages, especially Grammar.",
        clearly: "clearly is a way something happens connected to Languages, especially Grammar.",
        slowly: "slowly is a way something happens connected to Languages, especially Grammar.",
        fluently: "fluently is a way something happens connected to Languages, especially Grammar.",
        carefully: "carefully is a way something happens connected to Languages, especially Grammar.",
        politely: "politely is a way something happens connected to Languages, especially Grammar."
      },
      templates: [
        {
          id: "languages_places_0_0",
          role: "places",
          text: "The phrase was practiced in the {target}.",
          tags: [
            "places",
            "grammar"
          ]
        },
        {
          id: "languages_places_0_1",
          role: "places",
          text: "The teacher wrote examples on the {target}.",
          tags: [
            "places",
            "grammar"
          ]
        },
        {
          id: "languages_people_0_0",
          role: "people",
          text: "The sentence was repeated by the {target}.",
          tags: [
            "people",
            "grammar"
          ]
        },
        {
          id: "languages_people_0_1",
          role: "people",
          text: "The meaning was explained to the {target}.",
          tags: [
            "people",
            "grammar"
          ]
        },
        {
          id: "languages_objects_0_0",
          role: "objects",
          text: "The teacher explained the {target}.",
          tags: [
            "objects",
            "grammar"
          ]
        },
        {
          id: "languages_objects_0_1",
          role: "objects",
          text: "The final line ended with the {target}.",
          tags: [
            "objects",
            "grammar"
          ]
        },
        {
          id: "languages_actions_0_0",
          role: "actions",
          text: "The speaker had to {target}.",
          tags: [
            "actions",
            "grammar"
          ]
        },
        {
          id: "languages_actions_0_1",
          role: "actions",
          text: "The student tried to {target}.",
          tags: [
            "actions",
            "grammar"
          ]
        },
        {
          id: "languages_moods_0_0",
          role: "moods",
          text: "The phrase sounded {target}.",
          tags: [
            "moods",
            "grammar"
          ]
        },
        {
          id: "languages_moods_0_1",
          role: "moods",
          text: "The accent became {target}.",
          tags: [
            "moods",
            "grammar"
          ]
        },
        {
          id: "languages_adverbs_0_0",
          role: "adverbs",
          text: "The speaker repeated the phrase {target}.",
          tags: [
            "adverbs",
            "grammar"
          ]
        },
        {
          id: "languages_adverbs_0_1",
          role: "adverbs",
          text: "The translator checked the sentence {target}.",
          tags: [
            "adverbs",
            "grammar"
          ]
        }
      ]
    },
    {
      id: "languages_vocabulary",
      topic: "Vocabulary",
      scene: "word list",
      people: [
        "speaker",
        "translator",
        "poet",
        "traveler",
        "listener",
        "writer"
      ],
      places: [
        "school",
        "street",
        "screen",
        "library",
        "market",
        "border"
      ],
      objects: [
        "phrase",
        "meaning",
        "sentence",
        "letter",
        "grammar",
        "vowel"
      ],
      actions: [
        "translate",
        "explain",
        "compare",
        "listen",
        "repeat",
        "write"
      ],
      moods: [
        "formal",
        "casual",
        "confusing",
        "polite",
        "poetic",
        "direct"
      ],
      adverbs: [
        "fluently",
        "carefully",
        "politely",
        "loudly",
        "quietly"
      ],
      facts: [
        "Vocabulary belongs to Languages: words, grammar, meaning, sound, writing, and communication.",
        "word list gives Languages prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        school: "school is a place or setting connected to Languages, especially Vocabulary.",
        street: "street is a place or setting connected to Languages, especially Vocabulary.",
        screen: "screen is a place or setting connected to Languages, especially Vocabulary.",
        library: "library is a place or setting connected to Languages, especially Vocabulary.",
        market: "market is a place or setting connected to Languages, especially Vocabulary.",
        border: "border is a place or setting connected to Languages, especially Vocabulary.",
        speaker: "speaker is a person or role connected to Languages, especially Vocabulary.",
        translator: "translator is a person or role connected to Languages, especially Vocabulary.",
        poet: "poet is a person or role connected to Languages, especially Vocabulary.",
        traveler: "traveler is a person or role connected to Languages, especially Vocabulary.",
        listener: "listener is a person or role connected to Languages, especially Vocabulary.",
        writer: "writer is a person or role connected to Languages, especially Vocabulary.",
        phrase: "phrase is a term or object connected to Languages, especially Vocabulary.",
        meaning: "meaning is a term or object connected to Languages, especially Vocabulary.",
        sentence: "sentence is a term or object connected to Languages, especially Vocabulary.",
        letter: "letter is a term or object connected to Languages, especially Vocabulary.",
        grammar: "grammar is a term or object connected to Languages, especially Vocabulary.",
        vowel: "vowel is a term or object connected to Languages, especially Vocabulary.",
        translate: "translate is an action connected to Languages, especially Vocabulary.",
        explain: "explain is an action connected to Languages, especially Vocabulary.",
        compare: "compare is an action connected to Languages, especially Vocabulary.",
        listen: "listen is an action connected to Languages, especially Vocabulary.",
        repeat: "repeat is an action connected to Languages, especially Vocabulary.",
        write: "write is an action connected to Languages, especially Vocabulary.",
        formal: "formal is a description or mood connected to Languages, especially Vocabulary.",
        casual: "casual is a description or mood connected to Languages, especially Vocabulary.",
        confusing: "confusing is a description or mood connected to Languages, especially Vocabulary.",
        polite: "polite is a description or mood connected to Languages, especially Vocabulary.",
        poetic: "poetic is a description or mood connected to Languages, especially Vocabulary.",
        direct: "direct is a description or mood connected to Languages, especially Vocabulary.",
        fluently: "fluently is a way something happens connected to Languages, especially Vocabulary.",
        carefully: "carefully is a way something happens connected to Languages, especially Vocabulary.",
        politely: "politely is a way something happens connected to Languages, especially Vocabulary.",
        loudly: "loudly is a way something happens connected to Languages, especially Vocabulary.",
        quietly: "quietly is a way something happens connected to Languages, especially Vocabulary."
      },
      templates: [
        {
          id: "languages_places_1_0",
          role: "places",
          text: "The phrase was practiced in the {target}.",
          tags: [
            "places",
            "vocabulary"
          ]
        },
        {
          id: "languages_places_1_1",
          role: "places",
          text: "The teacher wrote examples on the {target}.",
          tags: [
            "places",
            "vocabulary"
          ]
        },
        {
          id: "languages_people_1_0",
          role: "people",
          text: "The sentence was repeated by the {target}.",
          tags: [
            "people",
            "vocabulary"
          ]
        },
        {
          id: "languages_people_1_1",
          role: "people",
          text: "The meaning was explained to the {target}.",
          tags: [
            "people",
            "vocabulary"
          ]
        },
        {
          id: "languages_objects_1_0",
          role: "objects",
          text: "The teacher explained the {target}.",
          tags: [
            "objects",
            "vocabulary"
          ]
        },
        {
          id: "languages_objects_1_1",
          role: "objects",
          text: "The final line ended with the {target}.",
          tags: [
            "objects",
            "vocabulary"
          ]
        },
        {
          id: "languages_actions_1_0",
          role: "actions",
          text: "The speaker had to {target}.",
          tags: [
            "actions",
            "vocabulary"
          ]
        },
        {
          id: "languages_actions_1_1",
          role: "actions",
          text: "The student tried to {target}.",
          tags: [
            "actions",
            "vocabulary"
          ]
        },
        {
          id: "languages_moods_1_0",
          role: "moods",
          text: "The phrase sounded {target}.",
          tags: [
            "moods",
            "vocabulary"
          ]
        },
        {
          id: "languages_moods_1_1",
          role: "moods",
          text: "The accent became {target}.",
          tags: [
            "moods",
            "vocabulary"
          ]
        },
        {
          id: "languages_adverbs_1_0",
          role: "adverbs",
          text: "The speaker repeated the phrase {target}.",
          tags: [
            "adverbs",
            "vocabulary"
          ]
        },
        {
          id: "languages_adverbs_1_1",
          role: "adverbs",
          text: "The translator checked the sentence {target}.",
          tags: [
            "adverbs",
            "vocabulary"
          ]
        }
      ]
    },
    {
      id: "languages_translation",
      topic: "Translation",
      scene: "translation desk",
      people: [
        "poet",
        "traveler",
        "listener",
        "writer",
        "reader",
        "interpreter"
      ],
      places: [
        "screen",
        "library",
        "market",
        "border",
        "notebook",
        "conversation"
      ],
      objects: [
        "sentence",
        "letter",
        "grammar",
        "vowel",
        "pronunciation",
        "dictionary"
      ],
      actions: [
        "compare",
        "listen",
        "repeat",
        "write",
        "read",
        "pronounce"
      ],
      moods: [
        "confusing",
        "polite",
        "poetic",
        "direct",
        "local",
        "precise"
      ],
      adverbs: [
        "politely",
        "loudly",
        "quietly",
        "accurately",
        "briefly"
      ],
      facts: [
        "Translation belongs to Languages: words, grammar, meaning, sound, writing, and communication.",
        "translation desk gives Languages prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        screen: "screen is a place or setting connected to Languages, especially Translation.",
        library: "library is a place or setting connected to Languages, especially Translation.",
        market: "market is a place or setting connected to Languages, especially Translation.",
        border: "border is a place or setting connected to Languages, especially Translation.",
        notebook: "notebook is a place or setting connected to Languages, especially Translation.",
        conversation: "conversation is a place or setting connected to Languages, especially Translation.",
        poet: "poet is a person or role connected to Languages, especially Translation.",
        traveler: "traveler is a person or role connected to Languages, especially Translation.",
        listener: "listener is a person or role connected to Languages, especially Translation.",
        writer: "writer is a person or role connected to Languages, especially Translation.",
        reader: "reader is a person or role connected to Languages, especially Translation.",
        interpreter: "interpreter is a person or role connected to Languages, especially Translation.",
        sentence: "sentence is a term or object connected to Languages, especially Translation.",
        letter: "letter is a term or object connected to Languages, especially Translation.",
        grammar: "grammar is a term or object connected to Languages, especially Translation.",
        vowel: "vowel is a term or object connected to Languages, especially Translation.",
        pronunciation: "pronunciation is a term or object connected to Languages, especially Translation.",
        dictionary: "dictionary is a term or object connected to Languages, especially Translation.",
        compare: "compare is an action connected to Languages, especially Translation.",
        listen: "listen is an action connected to Languages, especially Translation.",
        repeat: "repeat is an action connected to Languages, especially Translation.",
        write: "write is an action connected to Languages, especially Translation.",
        read: "read is an action connected to Languages, especially Translation.",
        pronounce: "pronounce is an action connected to Languages, especially Translation.",
        confusing: "confusing is a description or mood connected to Languages, especially Translation.",
        polite: "polite is a description or mood connected to Languages, especially Translation.",
        poetic: "poetic is a description or mood connected to Languages, especially Translation.",
        direct: "direct is a description or mood connected to Languages, especially Translation.",
        local: "local is a description or mood connected to Languages, especially Translation.",
        precise: "precise is a description or mood connected to Languages, especially Translation.",
        politely: "politely is a way something happens connected to Languages, especially Translation.",
        loudly: "loudly is a way something happens connected to Languages, especially Translation.",
        quietly: "quietly is a way something happens connected to Languages, especially Translation.",
        accurately: "accurately is a way something happens connected to Languages, especially Translation.",
        briefly: "briefly is a way something happens connected to Languages, especially Translation."
      },
      templates: [
        {
          id: "languages_places_2_0",
          role: "places",
          text: "The phrase was practiced in the {target}.",
          tags: [
            "places",
            "translation"
          ]
        },
        {
          id: "languages_places_2_1",
          role: "places",
          text: "The teacher wrote examples on the {target}.",
          tags: [
            "places",
            "translation"
          ]
        },
        {
          id: "languages_people_2_0",
          role: "people",
          text: "The sentence was repeated by the {target}.",
          tags: [
            "people",
            "translation"
          ]
        },
        {
          id: "languages_people_2_1",
          role: "people",
          text: "The meaning was explained to the {target}.",
          tags: [
            "people",
            "translation"
          ]
        },
        {
          id: "languages_objects_2_0",
          role: "objects",
          text: "The teacher explained the {target}.",
          tags: [
            "objects",
            "translation"
          ]
        },
        {
          id: "languages_objects_2_1",
          role: "objects",
          text: "The final line ended with the {target}.",
          tags: [
            "objects",
            "translation"
          ]
        },
        {
          id: "languages_actions_2_0",
          role: "actions",
          text: "The speaker had to {target}.",
          tags: [
            "actions",
            "translation"
          ]
        },
        {
          id: "languages_actions_2_1",
          role: "actions",
          text: "The student tried to {target}.",
          tags: [
            "actions",
            "translation"
          ]
        },
        {
          id: "languages_moods_2_0",
          role: "moods",
          text: "The phrase sounded {target}.",
          tags: [
            "moods",
            "translation"
          ]
        },
        {
          id: "languages_moods_2_1",
          role: "moods",
          text: "The accent became {target}.",
          tags: [
            "moods",
            "translation"
          ]
        },
        {
          id: "languages_adverbs_2_0",
          role: "adverbs",
          text: "The speaker repeated the phrase {target}.",
          tags: [
            "adverbs",
            "translation"
          ]
        },
        {
          id: "languages_adverbs_2_1",
          role: "adverbs",
          text: "The translator checked the sentence {target}.",
          tags: [
            "adverbs",
            "translation"
          ]
        }
      ]
    },
    {
      id: "languages_pronunciation",
      topic: "Pronunciation",
      scene: "speaking class",
      people: [
        "listener",
        "writer",
        "reader",
        "interpreter",
        "learner",
        "editor"
      ],
      places: [
        "market",
        "border",
        "notebook",
        "conversation",
        "sentence",
        "class"
      ],
      objects: [
        "grammar",
        "vowel",
        "pronunciation",
        "dictionary",
        "paragraph",
        "verb"
      ],
      actions: [
        "repeat",
        "write",
        "read",
        "pronounce",
        "spell",
        "define"
      ],
      moods: [
        "poetic",
        "direct",
        "local",
        "precise",
        "expressive",
        "natural"
      ],
      adverbs: [
        "quietly",
        "accurately",
        "briefly",
        "naturally",
        "clearly"
      ],
      facts: [
        "Pronunciation belongs to Languages: words, grammar, meaning, sound, writing, and communication.",
        "speaking class gives Languages prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        market: "market is a place or setting connected to Languages, especially Pronunciation.",
        border: "border is a place or setting connected to Languages, especially Pronunciation.",
        notebook: "notebook is a place or setting connected to Languages, especially Pronunciation.",
        conversation: "conversation is a place or setting connected to Languages, especially Pronunciation.",
        sentence: "sentence is a place or setting connected to Languages, especially Pronunciation.",
        class: "class is a place or setting connected to Languages, especially Pronunciation.",
        listener: "listener is a person or role connected to Languages, especially Pronunciation.",
        writer: "writer is a person or role connected to Languages, especially Pronunciation.",
        reader: "reader is a person or role connected to Languages, especially Pronunciation.",
        interpreter: "interpreter is a person or role connected to Languages, especially Pronunciation.",
        learner: "learner is a person or role connected to Languages, especially Pronunciation.",
        editor: "editor is a person or role connected to Languages, especially Pronunciation.",
        grammar: "grammar is a term or object connected to Languages, especially Pronunciation.",
        vowel: "vowel is a term or object connected to Languages, especially Pronunciation.",
        pronunciation: "pronunciation is a term or object connected to Languages, especially Pronunciation.",
        dictionary: "dictionary is a term or object connected to Languages, especially Pronunciation.",
        paragraph: "paragraph is a term or object connected to Languages, especially Pronunciation.",
        verb: "verb is a term or object connected to Languages, especially Pronunciation.",
        repeat: "repeat is an action connected to Languages, especially Pronunciation.",
        write: "write is an action connected to Languages, especially Pronunciation.",
        read: "read is an action connected to Languages, especially Pronunciation.",
        pronounce: "pronounce is an action connected to Languages, especially Pronunciation.",
        spell: "spell is an action connected to Languages, especially Pronunciation.",
        define: "define is an action connected to Languages, especially Pronunciation.",
        poetic: "poetic is a description or mood connected to Languages, especially Pronunciation.",
        direct: "direct is a description or mood connected to Languages, especially Pronunciation.",
        local: "local is a description or mood connected to Languages, especially Pronunciation.",
        precise: "precise is a description or mood connected to Languages, especially Pronunciation.",
        expressive: "expressive is a description or mood connected to Languages, especially Pronunciation.",
        natural: "natural is a description or mood connected to Languages, especially Pronunciation.",
        quietly: "quietly is a way something happens connected to Languages, especially Pronunciation.",
        accurately: "accurately is a way something happens connected to Languages, especially Pronunciation.",
        briefly: "briefly is a way something happens connected to Languages, especially Pronunciation.",
        naturally: "naturally is a way something happens connected to Languages, especially Pronunciation.",
        clearly: "clearly is a way something happens connected to Languages, especially Pronunciation."
      },
      templates: [
        {
          id: "languages_places_3_0",
          role: "places",
          text: "The phrase was practiced in the {target}.",
          tags: [
            "places",
            "pronunciation"
          ]
        },
        {
          id: "languages_places_3_1",
          role: "places",
          text: "The teacher wrote examples on the {target}.",
          tags: [
            "places",
            "pronunciation"
          ]
        },
        {
          id: "languages_people_3_0",
          role: "people",
          text: "The sentence was repeated by the {target}.",
          tags: [
            "people",
            "pronunciation"
          ]
        },
        {
          id: "languages_people_3_1",
          role: "people",
          text: "The meaning was explained to the {target}.",
          tags: [
            "people",
            "pronunciation"
          ]
        },
        {
          id: "languages_objects_3_0",
          role: "objects",
          text: "The teacher explained the {target}.",
          tags: [
            "objects",
            "pronunciation"
          ]
        },
        {
          id: "languages_objects_3_1",
          role: "objects",
          text: "The final line ended with the {target}.",
          tags: [
            "objects",
            "pronunciation"
          ]
        },
        {
          id: "languages_actions_3_0",
          role: "actions",
          text: "The speaker had to {target}.",
          tags: [
            "actions",
            "pronunciation"
          ]
        },
        {
          id: "languages_actions_3_1",
          role: "actions",
          text: "The student tried to {target}.",
          tags: [
            "actions",
            "pronunciation"
          ]
        },
        {
          id: "languages_moods_3_0",
          role: "moods",
          text: "The phrase sounded {target}.",
          tags: [
            "moods",
            "pronunciation"
          ]
        },
        {
          id: "languages_moods_3_1",
          role: "moods",
          text: "The accent became {target}.",
          tags: [
            "moods",
            "pronunciation"
          ]
        },
        {
          id: "languages_adverbs_3_0",
          role: "adverbs",
          text: "The speaker repeated the phrase {target}.",
          tags: [
            "adverbs",
            "pronunciation"
          ]
        },
        {
          id: "languages_adverbs_3_1",
          role: "adverbs",
          text: "The translator checked the sentence {target}.",
          tags: [
            "adverbs",
            "pronunciation"
          ]
        }
      ]
    },
    {
      id: "languages_conversation",
      topic: "Conversation",
      scene: "conversation table",
      people: [
        "reader",
        "interpreter",
        "learner",
        "editor",
        "student",
        "teacher"
      ],
      places: [
        "notebook",
        "conversation",
        "sentence",
        "class",
        "page",
        "school"
      ],
      objects: [
        "pronunciation",
        "dictionary",
        "paragraph",
        "verb",
        "word",
        "accent"
      ],
      actions: [
        "read",
        "pronounce",
        "spell",
        "define",
        "speak",
        "learn"
      ],
      moods: [
        "local",
        "precise",
        "expressive",
        "natural",
        "clear",
        "fluent"
      ],
      adverbs: [
        "briefly",
        "naturally",
        "clearly",
        "slowly",
        "fluently"
      ],
      facts: [
        "Conversation belongs to Languages: words, grammar, meaning, sound, writing, and communication.",
        "conversation table gives Languages prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        notebook: "notebook is a place or setting connected to Languages, especially Conversation.",
        conversation: "conversation is a place or setting connected to Languages, especially Conversation.",
        sentence: "sentence is a place or setting connected to Languages, especially Conversation.",
        class: "class is a place or setting connected to Languages, especially Conversation.",
        page: "page is a place or setting connected to Languages, especially Conversation.",
        school: "school is a place or setting connected to Languages, especially Conversation.",
        reader: "reader is a person or role connected to Languages, especially Conversation.",
        interpreter: "interpreter is a person or role connected to Languages, especially Conversation.",
        learner: "learner is a person or role connected to Languages, especially Conversation.",
        editor: "editor is a person or role connected to Languages, especially Conversation.",
        student: "student is a person or role connected to Languages, especially Conversation.",
        teacher: "teacher is a person or role connected to Languages, especially Conversation.",
        pronunciation: "pronunciation is a term or object connected to Languages, especially Conversation.",
        dictionary: "dictionary is a term or object connected to Languages, especially Conversation.",
        paragraph: "paragraph is a term or object connected to Languages, especially Conversation.",
        verb: "verb is a term or object connected to Languages, especially Conversation.",
        word: "word is a term or object connected to Languages, especially Conversation.",
        accent: "accent is a term or object connected to Languages, especially Conversation.",
        read: "read is an action connected to Languages, especially Conversation.",
        pronounce: "pronounce is an action connected to Languages, especially Conversation.",
        spell: "spell is an action connected to Languages, especially Conversation.",
        define: "define is an action connected to Languages, especially Conversation.",
        speak: "speak is an action connected to Languages, especially Conversation.",
        learn: "learn is an action connected to Languages, especially Conversation.",
        local: "local is a description or mood connected to Languages, especially Conversation.",
        precise: "precise is a description or mood connected to Languages, especially Conversation.",
        expressive: "expressive is a description or mood connected to Languages, especially Conversation.",
        natural: "natural is a description or mood connected to Languages, especially Conversation.",
        clear: "clear is a description or mood connected to Languages, especially Conversation.",
        fluent: "fluent is a description or mood connected to Languages, especially Conversation.",
        briefly: "briefly is a way something happens connected to Languages, especially Conversation.",
        naturally: "naturally is a way something happens connected to Languages, especially Conversation.",
        clearly: "clearly is a way something happens connected to Languages, especially Conversation.",
        slowly: "slowly is a way something happens connected to Languages, especially Conversation.",
        fluently: "fluently is a way something happens connected to Languages, especially Conversation."
      },
      templates: [
        {
          id: "languages_places_4_0",
          role: "places",
          text: "The phrase was practiced in the {target}.",
          tags: [
            "places",
            "conversation"
          ]
        },
        {
          id: "languages_places_4_1",
          role: "places",
          text: "The teacher wrote examples on the {target}.",
          tags: [
            "places",
            "conversation"
          ]
        },
        {
          id: "languages_people_4_0",
          role: "people",
          text: "The sentence was repeated by the {target}.",
          tags: [
            "people",
            "conversation"
          ]
        },
        {
          id: "languages_people_4_1",
          role: "people",
          text: "The meaning was explained to the {target}.",
          tags: [
            "people",
            "conversation"
          ]
        },
        {
          id: "languages_objects_4_0",
          role: "objects",
          text: "The teacher explained the {target}.",
          tags: [
            "objects",
            "conversation"
          ]
        },
        {
          id: "languages_objects_4_1",
          role: "objects",
          text: "The final line ended with the {target}.",
          tags: [
            "objects",
            "conversation"
          ]
        },
        {
          id: "languages_actions_4_0",
          role: "actions",
          text: "The speaker had to {target}.",
          tags: [
            "actions",
            "conversation"
          ]
        },
        {
          id: "languages_actions_4_1",
          role: "actions",
          text: "The student tried to {target}.",
          tags: [
            "actions",
            "conversation"
          ]
        },
        {
          id: "languages_moods_4_0",
          role: "moods",
          text: "The phrase sounded {target}.",
          tags: [
            "moods",
            "conversation"
          ]
        },
        {
          id: "languages_moods_4_1",
          role: "moods",
          text: "The accent became {target}.",
          tags: [
            "moods",
            "conversation"
          ]
        },
        {
          id: "languages_adverbs_4_0",
          role: "adverbs",
          text: "The speaker repeated the phrase {target}.",
          tags: [
            "adverbs",
            "conversation"
          ]
        },
        {
          id: "languages_adverbs_4_1",
          role: "adverbs",
          text: "The translator checked the sentence {target}.",
          tags: [
            "adverbs",
            "conversation"
          ]
        }
      ]
    },
    {
      id: "languages_writing",
      topic: "Writing",
      scene: "writing page",
      people: [
        "learner",
        "editor",
        "student",
        "teacher",
        "speaker",
        "translator"
      ],
      places: [
        "sentence",
        "class",
        "page",
        "school",
        "street",
        "screen"
      ],
      objects: [
        "paragraph",
        "verb",
        "word",
        "accent",
        "phrase",
        "meaning"
      ],
      actions: [
        "spell",
        "define",
        "speak",
        "learn",
        "translate",
        "explain"
      ],
      moods: [
        "expressive",
        "natural",
        "clear",
        "fluent",
        "formal",
        "casual"
      ],
      adverbs: [
        "clearly",
        "slowly",
        "fluently",
        "carefully",
        "politely"
      ],
      facts: [
        "Writing belongs to Languages: words, grammar, meaning, sound, writing, and communication.",
        "writing page gives Languages prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        sentence: "sentence is a place or setting connected to Languages, especially Writing.",
        class: "class is a place or setting connected to Languages, especially Writing.",
        page: "page is a place or setting connected to Languages, especially Writing.",
        school: "school is a place or setting connected to Languages, especially Writing.",
        street: "street is a place or setting connected to Languages, especially Writing.",
        screen: "screen is a place or setting connected to Languages, especially Writing.",
        learner: "learner is a person or role connected to Languages, especially Writing.",
        editor: "editor is a person or role connected to Languages, especially Writing.",
        student: "student is a person or role connected to Languages, especially Writing.",
        teacher: "teacher is a person or role connected to Languages, especially Writing.",
        speaker: "speaker is a person or role connected to Languages, especially Writing.",
        translator: "translator is a person or role connected to Languages, especially Writing.",
        paragraph: "paragraph is a term or object connected to Languages, especially Writing.",
        verb: "verb is a term or object connected to Languages, especially Writing.",
        word: "word is a term or object connected to Languages, especially Writing.",
        accent: "accent is a term or object connected to Languages, especially Writing.",
        phrase: "phrase is a term or object connected to Languages, especially Writing.",
        meaning: "meaning is a term or object connected to Languages, especially Writing.",
        spell: "spell is an action connected to Languages, especially Writing.",
        define: "define is an action connected to Languages, especially Writing.",
        speak: "speak is an action connected to Languages, especially Writing.",
        learn: "learn is an action connected to Languages, especially Writing.",
        translate: "translate is an action connected to Languages, especially Writing.",
        explain: "explain is an action connected to Languages, especially Writing.",
        expressive: "expressive is a description or mood connected to Languages, especially Writing.",
        natural: "natural is a description or mood connected to Languages, especially Writing.",
        clear: "clear is a description or mood connected to Languages, especially Writing.",
        fluent: "fluent is a description or mood connected to Languages, especially Writing.",
        formal: "formal is a description or mood connected to Languages, especially Writing.",
        casual: "casual is a description or mood connected to Languages, especially Writing.",
        clearly: "clearly is a way something happens connected to Languages, especially Writing.",
        slowly: "slowly is a way something happens connected to Languages, especially Writing.",
        fluently: "fluently is a way something happens connected to Languages, especially Writing.",
        carefully: "carefully is a way something happens connected to Languages, especially Writing.",
        politely: "politely is a way something happens connected to Languages, especially Writing."
      },
      templates: [
        {
          id: "languages_places_5_0",
          role: "places",
          text: "The phrase was practiced in the {target}.",
          tags: [
            "places",
            "writing"
          ]
        },
        {
          id: "languages_places_5_1",
          role: "places",
          text: "The teacher wrote examples on the {target}.",
          tags: [
            "places",
            "writing"
          ]
        },
        {
          id: "languages_people_5_0",
          role: "people",
          text: "The sentence was repeated by the {target}.",
          tags: [
            "people",
            "writing"
          ]
        },
        {
          id: "languages_people_5_1",
          role: "people",
          text: "The meaning was explained to the {target}.",
          tags: [
            "people",
            "writing"
          ]
        },
        {
          id: "languages_objects_5_0",
          role: "objects",
          text: "The teacher explained the {target}.",
          tags: [
            "objects",
            "writing"
          ]
        },
        {
          id: "languages_objects_5_1",
          role: "objects",
          text: "The final line ended with the {target}.",
          tags: [
            "objects",
            "writing"
          ]
        },
        {
          id: "languages_actions_5_0",
          role: "actions",
          text: "The speaker had to {target}.",
          tags: [
            "actions",
            "writing"
          ]
        },
        {
          id: "languages_actions_5_1",
          role: "actions",
          text: "The student tried to {target}.",
          tags: [
            "actions",
            "writing"
          ]
        },
        {
          id: "languages_moods_5_0",
          role: "moods",
          text: "The phrase sounded {target}.",
          tags: [
            "moods",
            "writing"
          ]
        },
        {
          id: "languages_moods_5_1",
          role: "moods",
          text: "The accent became {target}.",
          tags: [
            "moods",
            "writing"
          ]
        },
        {
          id: "languages_adverbs_5_0",
          role: "adverbs",
          text: "The speaker repeated the phrase {target}.",
          tags: [
            "adverbs",
            "writing"
          ]
        },
        {
          id: "languages_adverbs_5_1",
          role: "adverbs",
          text: "The translator checked the sentence {target}.",
          tags: [
            "adverbs",
            "writing"
          ]
        }
      ]
    }
  ]
});
