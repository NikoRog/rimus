const node = (subject, id, reference, definition, roles) => ({
  subject,
  id,
  reference,
  definition,
  roles
});

export const KNOWLEDGE_NODES = [
  node("movies", "jaws", "Jaws", "A shark thriller where a beach town is terrorized by a great white shark.", {
    places: ["water", "beach", "boat", "shore", "dock"],
    people: ["swimmer", "captain", "sheriff", "tourist"],
    objects: ["shark", "fin", "cage", "ocean"],
    actions: ["swim", "escape", "hide", "hunt"],
    moods: ["fear", "panic", "danger", "tension"]
  }),
  node("movies", "matrix", "The Matrix", "A sci-fi story about simulated reality, agents, and choosing the truth.", {
    places: ["city", "system", "rooftop", "lobby"],
    people: ["hacker", "agent", "oracle", "rebel"],
    objects: ["code", "pill", "phone", "screen"],
    actions: ["dodge", "hack", "wake", "choose"],
    moods: ["doubt", "control", "wonder", "pressure"]
  }),
  node("gym", "leg_day", "Leg Day", "A gym training day focused on squats, lunges, power, and endurance.", {
    places: ["rack", "floor", "platform", "mirror"],
    people: ["coach", "lifter", "spotter", "rookie"],
    objects: ["bar", "plate", "knee", "shoe"],
    actions: ["squat", "push", "lift", "stretch"],
    moods: ["grit", "burn", "focus", "pride"]
  }),
  node("gym", "boxing", "Boxing Gym", "A training space for footwork, punches, defense, and conditioning.", {
    places: ["ring", "corner", "mat", "bag"],
    people: ["boxer", "trainer", "rival", "champ"],
    objects: ["glove", "rope", "bell", "guard"],
    actions: ["jab", "duck", "spar", "sweat"],
    moods: ["heat", "nerve", "power", "hype"]
  }),
  node("sports", "football", "Football Match", "A team sport built around passing, spacing, pressure, and goals.", {
    places: ["field", "goal", "line", "bench"],
    people: ["striker", "keeper", "captain", "referee"],
    objects: ["ball", "net", "boot", "whistle"],
    actions: ["pass", "shoot", "tackle", "score"],
    moods: ["rush", "hope", "drama", "pressure"]
  }),
  node("sports", "basketball", "Basketball Court", "A fast court game of dribbling, shooting, screens, and rebounds.", {
    places: ["court", "paint", "arc", "rim"],
    people: ["guard", "center", "coach", "rookie"],
    objects: ["ball", "hoop", "jersey", "clock"],
    actions: ["drive", "dunk", "screen", "shoot"],
    moods: ["speed", "swagger", "focus", "clutch"]
  }),
  node("fashion", "runway", "Runway Show", "A fashion event where models present outfits, silhouettes, and trends.", {
    places: ["runway", "studio", "mirror", "backstage"],
    people: ["model", "designer", "stylist", "critic"],
    objects: ["jacket", "dress", "heel", "fabric"],
    actions: ["pose", "tailor", "style", "glow"],
    moods: ["glamour", "nerve", "taste", "flair"]
  }),
  node("medicine", "heart", "Heart", "The heart pumps blood through the body and keeps circulation moving.", {
    places: ["chest", "body", "clinic", "artery"],
    people: ["doctor", "patient", "nurse", "surgeon"],
    objects: ["heart", "blood", "pulse", "valve"],
    actions: ["pump", "beat", "heal", "test"],
    moods: ["care", "panic", "hope", "stress"]
  }),
  node("biology", "rainforest", "Rainforest", "A dense ecosystem with layered plants, animals, water cycles, and adaptation.", {
    places: ["forest", "canopy", "river", "soil"],
    people: ["ranger", "researcher", "guide", "student"],
    objects: ["leaf", "root", "frog", "seed"],
    actions: ["grow", "adapt", "crawl", "bloom"],
    moods: ["wonder", "balance", "danger", "calm"]
  }),
  node("history", "rome", "Ancient Rome", "A civilization known for roads, law, armies, architecture, and empire.", {
    places: ["road", "forum", "arena", "gate"],
    people: ["emperor", "senator", "soldier", "citizen"],
    objects: ["shield", "scroll", "coin", "crown"],
    actions: ["march", "rule", "debate", "build"],
    moods: ["glory", "order", "tension", "power"]
  }),
  node("geography", "volcano", "Volcano", "A landform where magma, ash, and gas can erupt from beneath Earth's crust.", {
    places: ["island", "crater", "slope", "valley"],
    people: ["climber", "scientist", "villager", "pilot"],
    objects: ["lava", "ash", "rock", "smoke"],
    actions: ["erupt", "flow", "shake", "rise"],
    moods: ["danger", "awe", "heat", "alarm"]
  }),
  node("music", "studio", "Recording Studio", "A creative room for vocals, beats, takes, mixing, and performance.", {
    places: ["booth", "stage", "room", "desk"],
    people: ["rapper", "singer", "producer", "dj"],
    objects: ["mic", "beat", "track", "speaker"],
    actions: ["record", "mix", "flow", "drop"],
    moods: ["hype", "soul", "groove", "spark"]
  }),
  node("food", "pizza", "Pizza Kitchen", "A food setting with dough, sauce, toppings, heat, and sharing.", {
    places: ["oven", "table", "kitchen", "counter"],
    people: ["chef", "friend", "server", "guest"],
    objects: ["dough", "slice", "cheese", "sauce"],
    actions: ["bake", "share", "taste", "serve"],
    moods: ["hunger", "comfort", "joy", "craving"]
  }),
  node("gaming", "minecraft", "Minecraft", "A sandbox game about mining, crafting, building, and surviving.", {
    places: ["cave", "village", "mine", "world"],
    people: ["player", "builder", "creeper", "friend"],
    objects: ["block", "pickaxe", "diamond", "torch"],
    actions: ["craft", "mine", "build", "survive"],
    moods: ["creativity", "danger", "wonder", "panic"]
  }),
  node("travel", "airport", "Airport", "A travel hub for flights, gates, luggage, passports, and departures.", {
    places: ["gate", "terminal", "runway", "lounge"],
    people: ["pilot", "traveler", "agent", "tourist"],
    objects: ["ticket", "bag", "plane", "passport"],
    actions: ["board", "fly", "wait", "land"],
    moods: ["rush", "relief", "stress", "wonder"]
  }),
  node("space", "moon", "Moon Mission", "A space journey involving rockets, orbit, landing, dust, and exploration.", {
    places: ["moon", "orbit", "crater", "station"],
    people: ["astronaut", "engineer", "pilot", "crew"],
    objects: ["rocket", "helmet", "flag", "module"],
    actions: ["launch", "float", "land", "explore"],
    moods: ["awe", "silence", "risk", "hope"]
  }),
  node("languages", "translation", "Translation", "The act of carrying meaning between languages, cultures, and voices.", {
    places: ["class", "market", "border", "page"],
    people: ["speaker", "teacher", "traveler", "poet"],
    objects: ["word", "phrase", "accent", "letter"],
    actions: ["speak", "listen", "translate", "learn"],
    moods: ["curiosity", "confusion", "clarity", "respect"]
  })
];
