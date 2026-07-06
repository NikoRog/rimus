import { defineSubjectPack } from './_packTools.js';

export default defineSubjectPack({
  id: "medicine",
  name: "Medicine",
  theme: "health, care, body systems, treatment, and recovery",
  nodes: [
    {
      id: "medicine_anatomy",
      topic: "Anatomy",
      scene: "anatomy chart",
      people: [
        "doctor",
        "patient",
        "nurse",
        "surgeon",
        "scientist",
        "therapist"
      ],
      places: [
        "clinic",
        "hospital",
        "chest",
        "body",
        "skull",
        "ward"
      ],
      objects: [
        "heart",
        "blood",
        "pulse",
        "brain",
        "memory",
        "signal"
      ],
      actions: [
        "pump",
        "beat",
        "heal",
        "think",
        "learn",
        "remember"
      ],
      moods: [
        "careful",
        "calm",
        "urgent",
        "stable",
        "healthy",
        "sore"
      ],
      adverbs: [
        "carefully",
        "slowly",
        "gently",
        "quickly",
        "steadily"
      ],
      facts: [
        "Anatomy belongs to Medicine: health, care, body systems, treatment, and recovery.",
        "anatomy chart gives Medicine prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        clinic: "clinic is a place or setting connected to Medicine, especially Anatomy.",
        hospital: "hospital is a place or setting connected to Medicine, especially Anatomy.",
        chest: "chest is a place or setting connected to Medicine, especially Anatomy.",
        body: "body is a place or setting connected to Medicine, especially Anatomy.",
        skull: "skull is a place or setting connected to Medicine, especially Anatomy.",
        ward: "ward is a place or setting connected to Medicine, especially Anatomy.",
        doctor: "doctor is a person or role connected to Medicine, especially Anatomy.",
        patient: "patient is a person or role connected to Medicine, especially Anatomy.",
        nurse: "nurse is a person or role connected to Medicine, especially Anatomy.",
        surgeon: "surgeon is a person or role connected to Medicine, especially Anatomy.",
        scientist: "scientist is a person or role connected to Medicine, especially Anatomy.",
        therapist: "therapist is a person or role connected to Medicine, especially Anatomy.",
        heart: "heart is a term or object connected to Medicine, especially Anatomy.",
        blood: "blood is a term or object connected to Medicine, especially Anatomy.",
        pulse: "pulse is a term or object connected to Medicine, especially Anatomy.",
        brain: "brain is a term or object connected to Medicine, especially Anatomy.",
        memory: "memory is a term or object connected to Medicine, especially Anatomy.",
        signal: "signal is a term or object connected to Medicine, especially Anatomy.",
        pump: "pump is an action connected to Medicine, especially Anatomy.",
        beat: "beat is an action connected to Medicine, especially Anatomy.",
        heal: "heal is an action connected to Medicine, especially Anatomy.",
        think: "think is an action connected to Medicine, especially Anatomy.",
        learn: "learn is an action connected to Medicine, especially Anatomy.",
        remember: "remember is an action connected to Medicine, especially Anatomy.",
        careful: "careful is a description or mood connected to Medicine, especially Anatomy.",
        calm: "calm is a description or mood connected to Medicine, especially Anatomy.",
        urgent: "urgent is a description or mood connected to Medicine, especially Anatomy.",
        stable: "stable is a description or mood connected to Medicine, especially Anatomy.",
        healthy: "healthy is a description or mood connected to Medicine, especially Anatomy.",
        sore: "sore is a description or mood connected to Medicine, especially Anatomy.",
        carefully: "carefully is a way something happens connected to Medicine, especially Anatomy.",
        slowly: "slowly is a way something happens connected to Medicine, especially Anatomy.",
        gently: "gently is a way something happens connected to Medicine, especially Anatomy.",
        quickly: "quickly is a way something happens connected to Medicine, especially Anatomy.",
        steadily: "steadily is a way something happens connected to Medicine, especially Anatomy."
      },
      templates: [
        {
          id: "medicine_places_0_0",
          role: "places",
          text: "The patient waited in the {target}.",
          tags: [
            "places",
            "anatomy"
          ]
        },
        {
          id: "medicine_places_0_1",
          role: "places",
          text: "The nurse moved supplies through the {target}.",
          tags: [
            "places",
            "anatomy"
          ]
        },
        {
          id: "medicine_people_0_0",
          role: "people",
          text: "The chart was reviewed by the {target}.",
          tags: [
            "people",
            "anatomy"
          ]
        },
        {
          id: "medicine_people_0_1",
          role: "people",
          text: "The bandage was prepared for the {target}.",
          tags: [
            "people",
            "anatomy"
          ]
        },
        {
          id: "medicine_objects_0_0",
          role: "objects",
          text: "The doctor checked the {target}.",
          tags: [
            "objects",
            "anatomy"
          ]
        },
        {
          id: "medicine_objects_0_1",
          role: "objects",
          text: "The nurse prepared the {target}.",
          tags: [
            "objects",
            "anatomy"
          ]
        },
        {
          id: "medicine_actions_0_0",
          role: "actions",
          text: "The doctor needed to {target}.",
          tags: [
            "actions",
            "anatomy"
          ]
        },
        {
          id: "medicine_actions_0_1",
          role: "actions",
          text: "The patient tried to {target}.",
          tags: [
            "actions",
            "anatomy"
          ]
        },
        {
          id: "medicine_moods_0_0",
          role: "moods",
          text: "The recovery plan felt {target}.",
          tags: [
            "moods",
            "anatomy"
          ]
        },
        {
          id: "medicine_moods_0_1",
          role: "moods",
          text: "The exam room stayed {target}.",
          tags: [
            "moods",
            "anatomy"
          ]
        },
        {
          id: "medicine_adverbs_0_0",
          role: "adverbs",
          text: "The nurse cleaned the wound {target}.",
          tags: [
            "adverbs",
            "anatomy"
          ]
        },
        {
          id: "medicine_adverbs_0_1",
          role: "adverbs",
          text: "The patient breathed {target}.",
          tags: [
            "adverbs",
            "anatomy"
          ]
        }
      ]
    },
    {
      id: "medicine_diagnosis",
      topic: "Diagnosis",
      scene: "exam room",
      people: [
        "nurse",
        "surgeon",
        "scientist",
        "therapist",
        "paramedic",
        "pharmacist"
      ],
      places: [
        "chest",
        "body",
        "skull",
        "ward",
        "pharmacy",
        "lab"
      ],
      objects: [
        "pulse",
        "brain",
        "memory",
        "signal",
        "bandage",
        "chart"
      ],
      actions: [
        "heal",
        "think",
        "learn",
        "remember",
        "diagnose",
        "treat"
      ],
      moods: [
        "urgent",
        "stable",
        "healthy",
        "sore",
        "clinical",
        "hopeful"
      ],
      adverbs: [
        "gently",
        "quickly",
        "steadily",
        "quietly",
        "clinically"
      ],
      facts: [
        "Diagnosis belongs to Medicine: health, care, body systems, treatment, and recovery.",
        "exam room gives Medicine prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        chest: "chest is a place or setting connected to Medicine, especially Diagnosis.",
        body: "body is a place or setting connected to Medicine, especially Diagnosis.",
        skull: "skull is a place or setting connected to Medicine, especially Diagnosis.",
        ward: "ward is a place or setting connected to Medicine, especially Diagnosis.",
        pharmacy: "pharmacy is a place or setting connected to Medicine, especially Diagnosis.",
        lab: "lab is a place or setting connected to Medicine, especially Diagnosis.",
        nurse: "nurse is a person or role connected to Medicine, especially Diagnosis.",
        surgeon: "surgeon is a person or role connected to Medicine, especially Diagnosis.",
        scientist: "scientist is a person or role connected to Medicine, especially Diagnosis.",
        therapist: "therapist is a person or role connected to Medicine, especially Diagnosis.",
        paramedic: "paramedic is a person or role connected to Medicine, especially Diagnosis.",
        pharmacist: "pharmacist is a person or role connected to Medicine, especially Diagnosis.",
        pulse: "pulse is a term or object connected to Medicine, especially Diagnosis.",
        brain: "brain is a term or object connected to Medicine, especially Diagnosis.",
        memory: "memory is a term or object connected to Medicine, especially Diagnosis.",
        signal: "signal is a term or object connected to Medicine, especially Diagnosis.",
        bandage: "bandage is a term or object connected to Medicine, especially Diagnosis.",
        chart: "chart is a term or object connected to Medicine, especially Diagnosis.",
        heal: "heal is an action connected to Medicine, especially Diagnosis.",
        think: "think is an action connected to Medicine, especially Diagnosis.",
        learn: "learn is an action connected to Medicine, especially Diagnosis.",
        remember: "remember is an action connected to Medicine, especially Diagnosis.",
        diagnose: "diagnose is an action connected to Medicine, especially Diagnosis.",
        treat: "treat is an action connected to Medicine, especially Diagnosis.",
        urgent: "urgent is a description or mood connected to Medicine, especially Diagnosis.",
        stable: "stable is a description or mood connected to Medicine, especially Diagnosis.",
        healthy: "healthy is a description or mood connected to Medicine, especially Diagnosis.",
        sore: "sore is a description or mood connected to Medicine, especially Diagnosis.",
        clinical: "clinical is a description or mood connected to Medicine, especially Diagnosis.",
        hopeful: "hopeful is a description or mood connected to Medicine, especially Diagnosis.",
        gently: "gently is a way something happens connected to Medicine, especially Diagnosis.",
        quickly: "quickly is a way something happens connected to Medicine, especially Diagnosis.",
        steadily: "steadily is a way something happens connected to Medicine, especially Diagnosis.",
        quietly: "quietly is a way something happens connected to Medicine, especially Diagnosis.",
        clinically: "clinically is a way something happens connected to Medicine, especially Diagnosis."
      },
      templates: [
        {
          id: "medicine_places_1_0",
          role: "places",
          text: "The patient waited in the {target}.",
          tags: [
            "places",
            "diagnosis"
          ]
        },
        {
          id: "medicine_places_1_1",
          role: "places",
          text: "The nurse moved supplies through the {target}.",
          tags: [
            "places",
            "diagnosis"
          ]
        },
        {
          id: "medicine_people_1_0",
          role: "people",
          text: "The chart was reviewed by the {target}.",
          tags: [
            "people",
            "diagnosis"
          ]
        },
        {
          id: "medicine_people_1_1",
          role: "people",
          text: "The bandage was prepared for the {target}.",
          tags: [
            "people",
            "diagnosis"
          ]
        },
        {
          id: "medicine_objects_1_0",
          role: "objects",
          text: "The doctor checked the {target}.",
          tags: [
            "objects",
            "diagnosis"
          ]
        },
        {
          id: "medicine_objects_1_1",
          role: "objects",
          text: "The nurse prepared the {target}.",
          tags: [
            "objects",
            "diagnosis"
          ]
        },
        {
          id: "medicine_actions_1_0",
          role: "actions",
          text: "The doctor needed to {target}.",
          tags: [
            "actions",
            "diagnosis"
          ]
        },
        {
          id: "medicine_actions_1_1",
          role: "actions",
          text: "The patient tried to {target}.",
          tags: [
            "actions",
            "diagnosis"
          ]
        },
        {
          id: "medicine_moods_1_0",
          role: "moods",
          text: "The recovery plan felt {target}.",
          tags: [
            "moods",
            "diagnosis"
          ]
        },
        {
          id: "medicine_moods_1_1",
          role: "moods",
          text: "The exam room stayed {target}.",
          tags: [
            "moods",
            "diagnosis"
          ]
        },
        {
          id: "medicine_adverbs_1_0",
          role: "adverbs",
          text: "The nurse cleaned the wound {target}.",
          tags: [
            "adverbs",
            "diagnosis"
          ]
        },
        {
          id: "medicine_adverbs_1_1",
          role: "adverbs",
          text: "The patient breathed {target}.",
          tags: [
            "adverbs",
            "diagnosis"
          ]
        }
      ]
    },
    {
      id: "medicine_treatment",
      topic: "Treatment",
      scene: "treatment plan",
      people: [
        "scientist",
        "therapist",
        "paramedic",
        "pharmacist",
        "specialist",
        "intern"
      ],
      places: [
        "skull",
        "ward",
        "pharmacy",
        "lab",
        "room",
        "artery"
      ],
      objects: [
        "memory",
        "signal",
        "bandage",
        "chart",
        "symptom",
        "vaccine"
      ],
      actions: [
        "learn",
        "remember",
        "diagnose",
        "treat",
        "check",
        "recover"
      ],
      moods: [
        "healthy",
        "sore",
        "clinical",
        "hopeful",
        "tired",
        "focused"
      ],
      adverbs: [
        "steadily",
        "quietly",
        "clinically",
        "safely",
        "deeply"
      ],
      facts: [
        "Treatment belongs to Medicine: health, care, body systems, treatment, and recovery.",
        "treatment plan gives Medicine prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        skull: "skull is a place or setting connected to Medicine, especially Treatment.",
        ward: "ward is a place or setting connected to Medicine, especially Treatment.",
        pharmacy: "pharmacy is a place or setting connected to Medicine, especially Treatment.",
        lab: "lab is a place or setting connected to Medicine, especially Treatment.",
        room: "room is a place or setting connected to Medicine, especially Treatment.",
        artery: "artery is a place or setting connected to Medicine, especially Treatment.",
        scientist: "scientist is a person or role connected to Medicine, especially Treatment.",
        therapist: "therapist is a person or role connected to Medicine, especially Treatment.",
        paramedic: "paramedic is a person or role connected to Medicine, especially Treatment.",
        pharmacist: "pharmacist is a person or role connected to Medicine, especially Treatment.",
        specialist: "specialist is a person or role connected to Medicine, especially Treatment.",
        intern: "intern is a person or role connected to Medicine, especially Treatment.",
        memory: "memory is a term or object connected to Medicine, especially Treatment.",
        signal: "signal is a term or object connected to Medicine, especially Treatment.",
        bandage: "bandage is a term or object connected to Medicine, especially Treatment.",
        chart: "chart is a term or object connected to Medicine, especially Treatment.",
        symptom: "symptom is a term or object connected to Medicine, especially Treatment.",
        vaccine: "vaccine is a term or object connected to Medicine, especially Treatment.",
        learn: "learn is an action connected to Medicine, especially Treatment.",
        remember: "remember is an action connected to Medicine, especially Treatment.",
        diagnose: "diagnose is an action connected to Medicine, especially Treatment.",
        treat: "treat is an action connected to Medicine, especially Treatment.",
        check: "check is an action connected to Medicine, especially Treatment.",
        recover: "recover is an action connected to Medicine, especially Treatment.",
        healthy: "healthy is a description or mood connected to Medicine, especially Treatment.",
        sore: "sore is a description or mood connected to Medicine, especially Treatment.",
        clinical: "clinical is a description or mood connected to Medicine, especially Treatment.",
        hopeful: "hopeful is a description or mood connected to Medicine, especially Treatment.",
        tired: "tired is a description or mood connected to Medicine, especially Treatment.",
        focused: "focused is a description or mood connected to Medicine, especially Treatment.",
        steadily: "steadily is a way something happens connected to Medicine, especially Treatment.",
        quietly: "quietly is a way something happens connected to Medicine, especially Treatment.",
        clinically: "clinically is a way something happens connected to Medicine, especially Treatment.",
        safely: "safely is a way something happens connected to Medicine, especially Treatment.",
        deeply: "deeply is a way something happens connected to Medicine, especially Treatment."
      },
      templates: [
        {
          id: "medicine_places_2_0",
          role: "places",
          text: "The patient waited in the {target}.",
          tags: [
            "places",
            "treatment"
          ]
        },
        {
          id: "medicine_places_2_1",
          role: "places",
          text: "The nurse moved supplies through the {target}.",
          tags: [
            "places",
            "treatment"
          ]
        },
        {
          id: "medicine_people_2_0",
          role: "people",
          text: "The chart was reviewed by the {target}.",
          tags: [
            "people",
            "treatment"
          ]
        },
        {
          id: "medicine_people_2_1",
          role: "people",
          text: "The bandage was prepared for the {target}.",
          tags: [
            "people",
            "treatment"
          ]
        },
        {
          id: "medicine_objects_2_0",
          role: "objects",
          text: "The doctor checked the {target}.",
          tags: [
            "objects",
            "treatment"
          ]
        },
        {
          id: "medicine_objects_2_1",
          role: "objects",
          text: "The nurse prepared the {target}.",
          tags: [
            "objects",
            "treatment"
          ]
        },
        {
          id: "medicine_actions_2_0",
          role: "actions",
          text: "The doctor needed to {target}.",
          tags: [
            "actions",
            "treatment"
          ]
        },
        {
          id: "medicine_actions_2_1",
          role: "actions",
          text: "The patient tried to {target}.",
          tags: [
            "actions",
            "treatment"
          ]
        },
        {
          id: "medicine_moods_2_0",
          role: "moods",
          text: "The recovery plan felt {target}.",
          tags: [
            "moods",
            "treatment"
          ]
        },
        {
          id: "medicine_moods_2_1",
          role: "moods",
          text: "The exam room stayed {target}.",
          tags: [
            "moods",
            "treatment"
          ]
        },
        {
          id: "medicine_adverbs_2_0",
          role: "adverbs",
          text: "The nurse cleaned the wound {target}.",
          tags: [
            "adverbs",
            "treatment"
          ]
        },
        {
          id: "medicine_adverbs_2_1",
          role: "adverbs",
          text: "The patient breathed {target}.",
          tags: [
            "adverbs",
            "treatment"
          ]
        }
      ]
    },
    {
      id: "medicine_hospital",
      topic: "Hospital",
      scene: "hospital ward",
      people: [
        "paramedic",
        "pharmacist",
        "specialist",
        "intern",
        "medic",
        "caregiver"
      ],
      places: [
        "pharmacy",
        "lab",
        "room",
        "artery",
        "bed",
        "theater"
      ],
      objects: [
        "bandage",
        "chart",
        "symptom",
        "vaccine",
        "stethoscope",
        "medicine"
      ],
      actions: [
        "diagnose",
        "treat",
        "check",
        "recover",
        "scan",
        "breathe"
      ],
      moods: [
        "clinical",
        "hopeful",
        "tired",
        "focused",
        "gentle",
        "serious"
      ],
      adverbs: [
        "clinically",
        "safely",
        "deeply",
        "clearly",
        "carefully"
      ],
      facts: [
        "Hospital belongs to Medicine: health, care, body systems, treatment, and recovery.",
        "hospital ward gives Medicine prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        pharmacy: "pharmacy is a place or setting connected to Medicine, especially Hospital.",
        lab: "lab is a place or setting connected to Medicine, especially Hospital.",
        room: "room is a place or setting connected to Medicine, especially Hospital.",
        artery: "artery is a place or setting connected to Medicine, especially Hospital.",
        bed: "bed is a place or setting connected to Medicine, especially Hospital.",
        theater: "theater is a place or setting connected to Medicine, especially Hospital.",
        paramedic: "paramedic is a person or role connected to Medicine, especially Hospital.",
        pharmacist: "pharmacist is a person or role connected to Medicine, especially Hospital.",
        specialist: "specialist is a person or role connected to Medicine, especially Hospital.",
        intern: "intern is a person or role connected to Medicine, especially Hospital.",
        medic: "medic is a person or role connected to Medicine, especially Hospital.",
        caregiver: "caregiver is a person or role connected to Medicine, especially Hospital.",
        bandage: "bandage is a term or object connected to Medicine, especially Hospital.",
        chart: "chart is a term or object connected to Medicine, especially Hospital.",
        symptom: "symptom is a term or object connected to Medicine, especially Hospital.",
        vaccine: "vaccine is a term or object connected to Medicine, especially Hospital.",
        stethoscope: "stethoscope is a term or object connected to Medicine, especially Hospital.",
        medicine: "medicine is a term or object connected to Medicine, especially Hospital.",
        diagnose: "diagnose is an action connected to Medicine, especially Hospital.",
        treat: "treat is an action connected to Medicine, especially Hospital.",
        check: "check is an action connected to Medicine, especially Hospital.",
        recover: "recover is an action connected to Medicine, especially Hospital.",
        scan: "scan is an action connected to Medicine, especially Hospital.",
        breathe: "breathe is an action connected to Medicine, especially Hospital.",
        clinical: "clinical is a description or mood connected to Medicine, especially Hospital.",
        hopeful: "hopeful is a description or mood connected to Medicine, especially Hospital.",
        tired: "tired is a description or mood connected to Medicine, especially Hospital.",
        focused: "focused is a description or mood connected to Medicine, especially Hospital.",
        gentle: "gentle is a description or mood connected to Medicine, especially Hospital.",
        serious: "serious is a description or mood connected to Medicine, especially Hospital.",
        clinically: "clinically is a way something happens connected to Medicine, especially Hospital.",
        safely: "safely is a way something happens connected to Medicine, especially Hospital.",
        deeply: "deeply is a way something happens connected to Medicine, especially Hospital.",
        clearly: "clearly is a way something happens connected to Medicine, especially Hospital.",
        carefully: "carefully is a way something happens connected to Medicine, especially Hospital."
      },
      templates: [
        {
          id: "medicine_places_3_0",
          role: "places",
          text: "The patient waited in the {target}.",
          tags: [
            "places",
            "hospital"
          ]
        },
        {
          id: "medicine_places_3_1",
          role: "places",
          text: "The nurse moved supplies through the {target}.",
          tags: [
            "places",
            "hospital"
          ]
        },
        {
          id: "medicine_people_3_0",
          role: "people",
          text: "The chart was reviewed by the {target}.",
          tags: [
            "people",
            "hospital"
          ]
        },
        {
          id: "medicine_people_3_1",
          role: "people",
          text: "The bandage was prepared for the {target}.",
          tags: [
            "people",
            "hospital"
          ]
        },
        {
          id: "medicine_objects_3_0",
          role: "objects",
          text: "The doctor checked the {target}.",
          tags: [
            "objects",
            "hospital"
          ]
        },
        {
          id: "medicine_objects_3_1",
          role: "objects",
          text: "The nurse prepared the {target}.",
          tags: [
            "objects",
            "hospital"
          ]
        },
        {
          id: "medicine_actions_3_0",
          role: "actions",
          text: "The doctor needed to {target}.",
          tags: [
            "actions",
            "hospital"
          ]
        },
        {
          id: "medicine_actions_3_1",
          role: "actions",
          text: "The patient tried to {target}.",
          tags: [
            "actions",
            "hospital"
          ]
        },
        {
          id: "medicine_moods_3_0",
          role: "moods",
          text: "The recovery plan felt {target}.",
          tags: [
            "moods",
            "hospital"
          ]
        },
        {
          id: "medicine_moods_3_1",
          role: "moods",
          text: "The exam room stayed {target}.",
          tags: [
            "moods",
            "hospital"
          ]
        },
        {
          id: "medicine_adverbs_3_0",
          role: "adverbs",
          text: "The nurse cleaned the wound {target}.",
          tags: [
            "adverbs",
            "hospital"
          ]
        },
        {
          id: "medicine_adverbs_3_1",
          role: "adverbs",
          text: "The patient breathed {target}.",
          tags: [
            "adverbs",
            "hospital"
          ]
        }
      ]
    },
    {
      id: "medicine_symptoms",
      topic: "Symptoms",
      scene: "symptom note",
      people: [
        "specialist",
        "intern",
        "medic",
        "caregiver",
        "doctor",
        "patient"
      ],
      places: [
        "room",
        "artery",
        "bed",
        "theater",
        "clinic",
        "hospital"
      ],
      objects: [
        "symptom",
        "vaccine",
        "stethoscope",
        "medicine",
        "heart",
        "blood"
      ],
      actions: [
        "check",
        "recover",
        "scan",
        "breathe",
        "pump",
        "beat"
      ],
      moods: [
        "tired",
        "focused",
        "gentle",
        "serious",
        "careful",
        "calm"
      ],
      adverbs: [
        "deeply",
        "clearly",
        "carefully",
        "slowly",
        "gently"
      ],
      facts: [
        "Symptoms belongs to Medicine: health, care, body systems, treatment, and recovery.",
        "symptom note gives Medicine prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        room: "room is a place or setting connected to Medicine, especially Symptoms.",
        artery: "artery is a place or setting connected to Medicine, especially Symptoms.",
        bed: "bed is a place or setting connected to Medicine, especially Symptoms.",
        theater: "theater is a place or setting connected to Medicine, especially Symptoms.",
        clinic: "clinic is a place or setting connected to Medicine, especially Symptoms.",
        hospital: "hospital is a place or setting connected to Medicine, especially Symptoms.",
        specialist: "specialist is a person or role connected to Medicine, especially Symptoms.",
        intern: "intern is a person or role connected to Medicine, especially Symptoms.",
        medic: "medic is a person or role connected to Medicine, especially Symptoms.",
        caregiver: "caregiver is a person or role connected to Medicine, especially Symptoms.",
        doctor: "doctor is a person or role connected to Medicine, especially Symptoms.",
        patient: "patient is a person or role connected to Medicine, especially Symptoms.",
        symptom: "symptom is a term or object connected to Medicine, especially Symptoms.",
        vaccine: "vaccine is a term or object connected to Medicine, especially Symptoms.",
        stethoscope: "stethoscope is a term or object connected to Medicine, especially Symptoms.",
        medicine: "medicine is a term or object connected to Medicine, especially Symptoms.",
        heart: "heart is a term or object connected to Medicine, especially Symptoms.",
        blood: "blood is a term or object connected to Medicine, especially Symptoms.",
        check: "check is an action connected to Medicine, especially Symptoms.",
        recover: "recover is an action connected to Medicine, especially Symptoms.",
        scan: "scan is an action connected to Medicine, especially Symptoms.",
        breathe: "breathe is an action connected to Medicine, especially Symptoms.",
        pump: "pump is an action connected to Medicine, especially Symptoms.",
        beat: "beat is an action connected to Medicine, especially Symptoms.",
        tired: "tired is a description or mood connected to Medicine, especially Symptoms.",
        focused: "focused is a description or mood connected to Medicine, especially Symptoms.",
        gentle: "gentle is a description or mood connected to Medicine, especially Symptoms.",
        serious: "serious is a description or mood connected to Medicine, especially Symptoms.",
        careful: "careful is a description or mood connected to Medicine, especially Symptoms.",
        calm: "calm is a description or mood connected to Medicine, especially Symptoms.",
        deeply: "deeply is a way something happens connected to Medicine, especially Symptoms.",
        clearly: "clearly is a way something happens connected to Medicine, especially Symptoms.",
        carefully: "carefully is a way something happens connected to Medicine, especially Symptoms.",
        slowly: "slowly is a way something happens connected to Medicine, especially Symptoms.",
        gently: "gently is a way something happens connected to Medicine, especially Symptoms."
      },
      templates: [
        {
          id: "medicine_places_4_0",
          role: "places",
          text: "The patient waited in the {target}.",
          tags: [
            "places",
            "symptoms"
          ]
        },
        {
          id: "medicine_places_4_1",
          role: "places",
          text: "The nurse moved supplies through the {target}.",
          tags: [
            "places",
            "symptoms"
          ]
        },
        {
          id: "medicine_people_4_0",
          role: "people",
          text: "The chart was reviewed by the {target}.",
          tags: [
            "people",
            "symptoms"
          ]
        },
        {
          id: "medicine_people_4_1",
          role: "people",
          text: "The bandage was prepared for the {target}.",
          tags: [
            "people",
            "symptoms"
          ]
        },
        {
          id: "medicine_objects_4_0",
          role: "objects",
          text: "The doctor checked the {target}.",
          tags: [
            "objects",
            "symptoms"
          ]
        },
        {
          id: "medicine_objects_4_1",
          role: "objects",
          text: "The nurse prepared the {target}.",
          tags: [
            "objects",
            "symptoms"
          ]
        },
        {
          id: "medicine_actions_4_0",
          role: "actions",
          text: "The doctor needed to {target}.",
          tags: [
            "actions",
            "symptoms"
          ]
        },
        {
          id: "medicine_actions_4_1",
          role: "actions",
          text: "The patient tried to {target}.",
          tags: [
            "actions",
            "symptoms"
          ]
        },
        {
          id: "medicine_moods_4_0",
          role: "moods",
          text: "The recovery plan felt {target}.",
          tags: [
            "moods",
            "symptoms"
          ]
        },
        {
          id: "medicine_moods_4_1",
          role: "moods",
          text: "The exam room stayed {target}.",
          tags: [
            "moods",
            "symptoms"
          ]
        },
        {
          id: "medicine_adverbs_4_0",
          role: "adverbs",
          text: "The nurse cleaned the wound {target}.",
          tags: [
            "adverbs",
            "symptoms"
          ]
        },
        {
          id: "medicine_adverbs_4_1",
          role: "adverbs",
          text: "The patient breathed {target}.",
          tags: [
            "adverbs",
            "symptoms"
          ]
        }
      ]
    },
    {
      id: "medicine_recovery",
      topic: "Recovery",
      scene: "recovery bed",
      people: [
        "medic",
        "caregiver",
        "doctor",
        "patient",
        "nurse",
        "surgeon"
      ],
      places: [
        "bed",
        "theater",
        "clinic",
        "hospital",
        "chest",
        "body"
      ],
      objects: [
        "stethoscope",
        "medicine",
        "heart",
        "blood",
        "pulse",
        "brain"
      ],
      actions: [
        "scan",
        "breathe",
        "pump",
        "beat",
        "heal",
        "think"
      ],
      moods: [
        "gentle",
        "serious",
        "careful",
        "calm",
        "urgent",
        "stable"
      ],
      adverbs: [
        "carefully",
        "slowly",
        "gently",
        "quickly",
        "steadily"
      ],
      facts: [
        "Recovery belongs to Medicine: health, care, body systems, treatment, and recovery.",
        "recovery bed gives Medicine prompts a specific context instead of a generic sentence."
      ],
      definitions: {
        bed: "bed is a place or setting connected to Medicine, especially Recovery.",
        theater: "theater is a place or setting connected to Medicine, especially Recovery.",
        clinic: "clinic is a place or setting connected to Medicine, especially Recovery.",
        hospital: "hospital is a place or setting connected to Medicine, especially Recovery.",
        chest: "chest is a place or setting connected to Medicine, especially Recovery.",
        body: "body is a place or setting connected to Medicine, especially Recovery.",
        medic: "medic is a person or role connected to Medicine, especially Recovery.",
        caregiver: "caregiver is a person or role connected to Medicine, especially Recovery.",
        doctor: "doctor is a person or role connected to Medicine, especially Recovery.",
        patient: "patient is a person or role connected to Medicine, especially Recovery.",
        nurse: "nurse is a person or role connected to Medicine, especially Recovery.",
        surgeon: "surgeon is a person or role connected to Medicine, especially Recovery.",
        stethoscope: "stethoscope is a term or object connected to Medicine, especially Recovery.",
        medicine: "medicine is a term or object connected to Medicine, especially Recovery.",
        heart: "heart is a term or object connected to Medicine, especially Recovery.",
        blood: "blood is a term or object connected to Medicine, especially Recovery.",
        pulse: "pulse is a term or object connected to Medicine, especially Recovery.",
        brain: "brain is a term or object connected to Medicine, especially Recovery.",
        scan: "scan is an action connected to Medicine, especially Recovery.",
        breathe: "breathe is an action connected to Medicine, especially Recovery.",
        pump: "pump is an action connected to Medicine, especially Recovery.",
        beat: "beat is an action connected to Medicine, especially Recovery.",
        heal: "heal is an action connected to Medicine, especially Recovery.",
        think: "think is an action connected to Medicine, especially Recovery.",
        gentle: "gentle is a description or mood connected to Medicine, especially Recovery.",
        serious: "serious is a description or mood connected to Medicine, especially Recovery.",
        careful: "careful is a description or mood connected to Medicine, especially Recovery.",
        calm: "calm is a description or mood connected to Medicine, especially Recovery.",
        urgent: "urgent is a description or mood connected to Medicine, especially Recovery.",
        stable: "stable is a description or mood connected to Medicine, especially Recovery.",
        carefully: "carefully is a way something happens connected to Medicine, especially Recovery.",
        slowly: "slowly is a way something happens connected to Medicine, especially Recovery.",
        gently: "gently is a way something happens connected to Medicine, especially Recovery.",
        quickly: "quickly is a way something happens connected to Medicine, especially Recovery.",
        steadily: "steadily is a way something happens connected to Medicine, especially Recovery."
      },
      templates: [
        {
          id: "medicine_places_5_0",
          role: "places",
          text: "The patient waited in the {target}.",
          tags: [
            "places",
            "recovery"
          ]
        },
        {
          id: "medicine_places_5_1",
          role: "places",
          text: "The nurse moved supplies through the {target}.",
          tags: [
            "places",
            "recovery"
          ]
        },
        {
          id: "medicine_people_5_0",
          role: "people",
          text: "The chart was reviewed by the {target}.",
          tags: [
            "people",
            "recovery"
          ]
        },
        {
          id: "medicine_people_5_1",
          role: "people",
          text: "The bandage was prepared for the {target}.",
          tags: [
            "people",
            "recovery"
          ]
        },
        {
          id: "medicine_objects_5_0",
          role: "objects",
          text: "The doctor checked the {target}.",
          tags: [
            "objects",
            "recovery"
          ]
        },
        {
          id: "medicine_objects_5_1",
          role: "objects",
          text: "The nurse prepared the {target}.",
          tags: [
            "objects",
            "recovery"
          ]
        },
        {
          id: "medicine_actions_5_0",
          role: "actions",
          text: "The doctor needed to {target}.",
          tags: [
            "actions",
            "recovery"
          ]
        },
        {
          id: "medicine_actions_5_1",
          role: "actions",
          text: "The patient tried to {target}.",
          tags: [
            "actions",
            "recovery"
          ]
        },
        {
          id: "medicine_moods_5_0",
          role: "moods",
          text: "The recovery plan felt {target}.",
          tags: [
            "moods",
            "recovery"
          ]
        },
        {
          id: "medicine_moods_5_1",
          role: "moods",
          text: "The exam room stayed {target}.",
          tags: [
            "moods",
            "recovery"
          ]
        },
        {
          id: "medicine_adverbs_5_0",
          role: "adverbs",
          text: "The nurse cleaned the wound {target}.",
          tags: [
            "adverbs",
            "recovery"
          ]
        },
        {
          id: "medicine_adverbs_5_1",
          role: "adverbs",
          text: "The patient breathed {target}.",
          tags: [
            "adverbs",
            "recovery"
          ]
        }
      ]
    }
  ]
});
