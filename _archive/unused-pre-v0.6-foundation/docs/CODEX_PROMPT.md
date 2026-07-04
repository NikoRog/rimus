# Codex Handoff Prompt — Rimus v0.6

You are continuing an HTML/CSS/JavaScript mobile party game called **Rimus**.

## Critical instruction

Do NOT rewrite the whole game unless necessary.
Do NOT remove working features.
Refactor carefully.
Keep the project browser-first and mobile-first.

The current monolithic reference build is included as:

`legacy-current-build.html`

The new modular scaffold is:

```text
index.html
styles/main.css
src/app.js
src/apiManager.js
src/audio.js
src/analytics.js
src/config.js
src/contentEngine.js
src/gameState.js
src/offlinePacks.js
src/storage.js
src/ui.js
content/knowledgeNodes.js
content/templates.js
content/subjects.json
assets/yo-100634.mp3
```

## Product summary

Rimus is a party game. The screen gives a sentence. Player must say another sentence that rhymes. Other players judge manually.

It is NOT marketed as educational, but underneath it trains quick thinking, freestyle, memory, subject learning, vocabulary, and improvisation.

## v0.6 goal

This version is the **functionality update**.

Priority order:

1. Real Content Engine
2. Real Offline Packs
3. Better API Layer
4. Analytics

Future roadmap:
- v0.7 visuals
- v0.8 animation/VFX
- v0.9 SFX/audio
- v1.0 monetization

## Current modes

### Survival — default
Old lives system:
- Player/group has 3 hearts.
- Word help costs 0.5 heart.
- Sentence help costs 1 heart.
- If Word was already used, Sentence costs only remaining 0.5 heart.
- If Sentence was used first, Word must NOT cost extra.
- Has Word, Sentence, What's this.

### Free Play
- Infinite rounds.
- No score/lives.
- Has Word, Sentence, What's this.

### Rivals
- Points-based, no lives.
- Select players.
- Select rounds: 5 / 10 / 15 / 20.
- Important: 5 rounds means 5 rounds EACH PLAYER. One full round means every player plays once.
- Each turn starts at 20 points.
- Every 10 seconds loses 1 point.
- Minimum turn score is 10.
- Word costs -5 points.
- Sentence button is removed/hidden in Rivals.
- End screen ranks players by score.
- Buttons: Rematch / Main Menu.

## Content architecture

Do NOT store thousands of sentences.

Build a real **Content Engine** using:

```text
Knowledge Nodes
+ reusable tagged words
+ sentence templates
+ API rhyme validation
+ prompt scoring
+ anti-repeat memory
+ local/offline cache
```

### Knowledge Node example

```js
{
  subject: "movies",
  id: "jaws",
  reference: "Jaws",
  definition: "Reference to Jaws, the shark thriller where a beach town is terrorized by a great white shark.",
  roles: {
    places: ["water", "beach", "boat", "shore", "dock"],
    people: ["swimmer", "captain", "sheriff", "tourist"],
    objects: ["shark", "fin", "cage", "ocean"],
    actions: ["swim", "escape", "hide", "hunt"],
    moods: ["fear", "panic", "danger", "tension"]
  }
}
```

Do not store fixed prompts. Store reusable roles.

## Smart word system

Avoid duplication. Normalize reusable words.

A word like `water` should not be duplicated inside Movies, Travel, Biology, Food. It should be reusable with tags/roles where possible.

Implement or prepare for:

```js
wordBank = {
  water: {
    subjects: ["movies", "travel", "biology", "food"],
    roles: ["place", "object", "ending"],
    vibes: ["danger", "calm", "nature"]
  }
}
```

The prompt generator should make use of each word multiple ways:
- beginning/context word
- middle/object word
- ending rhyme target
- definition/reference clue

## Prompt generation

The sentence must end with the rhyme target.

Example:
Sentence:
"Nobody felt safe near the beach."

Target:
"beach"

Word button shows:
teach, reach, speech, each

Sentence button shows:
"I kept the rhythm moving with speech."

A prompt object should contain:

```js
{
  subject,
  reference,
  definition,
  nodeId,
  templateId,
  target,
  sentence,
  rhymes,
  example,
  quality
}
```

## Prompt scoring

Only allow quality prompts into queue.

Score factors:
- enough rhymes
- subject connection
- sentence length
- no recent target repeat
- no recent reference repeat
- no recent template repeat
- definition/reference exists for subject prompts

Goal:
- Random or any subject should feel fresh for at least 20 rounds.

## Anti-repeat memory

Track:
- recent targets
- recent references
- recent templates
- recent generated sentences
- recent rhymes used

## APIs

Use browser-accessible, no-key APIs first:

- Datamuse: rhymes and related words
- ConceptNet: semantic relationships
- Wikipedia REST: summaries
- Wikidata: structured facts if useful

Do not fake API status. If something needs a key/backend, mark it "not configured."

TMDb and RAWG may be added later, but they need keys/backend. Do not hardcode fake success.

Build an API Manager:
- timeout
- retry
- cache
- fallback
- diagnostics popup

Green API dot should open a modal showing:
- Datamuse connected/failed
- ConceptNet connected/failed
- Wikipedia connected/failed
- Wikidata connected/failed
- Local cache loaded
- Last test time

## Offline packs

Settings must include Content Packs.

Each subject behaves like future DLC:
- owned/locked
- cached prompt count
- estimated size
- delete cache button

Offline Library:
- Small
- Medium
- Large

For now this should actually create offline prompt libraries from the generator/cache, not just a fake button.

Example target sizes:
- Small: 30 prompts
- Medium: 100 prompts
- Large: 300 prompts

Same prompt engine must work online and offline.

## Analytics

Firebase config is already in `src/config.js`.

Must have:
- startup consent popup
- settings toggle on/off
- local event queue
- Firebase Analytics logging if consent accepted
- export local analytics JSON button

Track:
- app_start
- consent_accept
- consent_decline
- game_start
- mode_selected
- subjects_selected
- beat_selected
- loading_start
- loading_complete
- round_start
- round_complete
- word_used
- sentence_used
- definition_opened
- survival_life_lost
- rivals_turn_score
- game_end
- quit_to_menu
- api_status_opened
- api_failure
- offline_pack_created
- offline_pack_deleted

## Audio

The project includes:

`assets/yo-100634.mp3`

SFX button must play it and be spammable.

Settings must include volume slider.

Generated sounds:
- click
- new sentence pop
- lose life
- end game
- simple background beat placeholder

Do not let audio break if autoplay is blocked. Initialize audio after first user gesture.

## UI requirements

Keep old playful color palette:
- cream paper background
- red
- amber
- teal
- indigo
- thick black borders
- card shadows

Do not make it gray/minimal.

Subject selector:
- multi-select modal
- Random option
- Apply button next to Close button, always visible

Definitions:
- What's this button visible in Survival, Free Play, and Rivals
- Shows reference + definition

Word/Sentence:
- Rename Hint to Word
- Rename Answer to Sentence
- Newest Word appears on top
- Whole bubble clickable

Loading screen:
- shown only after Start Game
- lasts roughly 2-5 seconds
- use vinyl squash/stretch animation
- during loading build prompt queue

## Performance

Performance is priority.

Do:
- reduce DOM rewrites
- cache API responses in localStorage
- batch prompt generation
- avoid blocking UI
- avoid fetching every round
- prebuild queue during loading
- background refill while player thinks
- remove unused code
- keep modules clean

## HTML vs Godot decision

Stay HTML for v0.6 because:
- fastest iteration
- APIs/Firebase/cache easier
- text-heavy UI fits web
- can wrap for Google Play later

Do not port to Godot now.

## Deliverable

A stable playtestable browser project.

It should run with:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Before finishing:
- ensure no console errors
- test Survival
- test Free Play
- test Rivals with 2 players and 5 rounds
- test Word/Sentence/What's this
- test settings volume slider
- test analytics consent
- test API popup
- test offline pack creation/deletion
- test menu reset
