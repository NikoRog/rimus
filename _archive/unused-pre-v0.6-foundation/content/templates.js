export const PROMPT_TEMPLATES = [
  { id: "safe_near_place", endRole: "places", text: "Nobody felt safe near the {target}." },
  { id: "hiding_under_place", endRole: "places", text: "Something was hiding under the {target}." },
  { id: "person_refused_place", endRole: "places", text: "The {person} refused to enter the {target}." },
  { id: "remembered_object", endRole: "objects", text: "Everyone remembered the {target}." },
  { id: "staring_object", endRole: "objects", text: "The {person} kept staring at the {target}." },
  { id: "full_of_mood", endRole: "moods", text: "The scene suddenly filled with {target}." },
  { id: "person_action", endRole: "actions", text: "The {person} chose to {target}." }
];

export const EXAMPLE_TEMPLATES = [
  "I kept the rhythm moving with {rhyme}.",
  "The crowd woke up when I said {rhyme}.",
  "The next line landed on {rhyme}.",
  "I turned the whole mistake into {rhyme}."
];
