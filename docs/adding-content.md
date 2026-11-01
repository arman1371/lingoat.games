# Adding content

## A new level (e.g. B2.2)

A1.2 (`src/content/a1-2/`), A2.1 (`src/content/a2-1/`), A2.2 (`src/content/a2-2/`), B1.1 (`src/content/b1-1/`), B1.2 (`src/content/b1-2/`), B2.1 (`src/content/b2-1/`), B2.2 (`src/content/b2-2/`) and C1.1 (`src/content/c1-1/`) are the worked examples:
one file per unit, plus `index.ts`. A2.1 re-exports the A1.2 authoring helpers from `a2-1/helpers.ts` and only
adds `unit21` and `reflexiveTable`; A2.2 does the same from `a2-2/helpers.ts` and adds `unit22`, `k2Table`
(Konjunktiv II), `passiveTable`, `reflexiveDativeTable` and `adjGap` (adjective endings generated from
`src/lib/german/adjectives.ts`). B1.1 (`b1-1/helpers.ts`) adds `unitB11` and generated compound-tense tables:
`pqpTable` (Plusquamperfekt), `futurTable` (Futur I), `k2PastTable` (Konjunktiv II of the past) and
`passiveModalTable` (muss … gemacht werden). B1.2 (`b1-2/helpers.ts`) adds `unitB12`, `passivePastTable` / `passivePerfektTable` and `hint` (attaches `why` and `lesson` to an item). B2.1 (`b2-1/helpers.ts`) adds `unitB21`, `statePassiveTable` (Zustandspassiv), `futur2Table` and `k1Table` (Konjunktiv I). B2.2 (`b2-2/helpers.ts`) adds only `unitB22` and re-uses `k1Table`. C1.1 (`c1-1/helpers.ts`) re-exports the B1.1 helpers and adds `unitC11`, `lx` (attaches a mini lesson to one item, for mixed challenge quizzes) and its own `k1Table` / `k1PerfectTable` (forms from `src/lib/german/konjunktiv1.ts`). Copy the helpers file of the latest level as the starting point.

**Integrity between levels:** before writing a level, map its syllabus against the units that exist (see
`docs/a2-2-coverage.md`, `docs/b1-1-coverage.md`, `docs/b1-2-coverage.md`, `docs/b2-1-coverage.md`, `docs/b2-2-coverage.md` and `docs/c1-1-coverage.md`, which also lists the course books and exam documents the
unit list was researched from): what is new, what extends an earlier topic and what is only reviewed. A level's
`content.test.ts` should also check that its word cards do not repeat vocabulary from earlier levels
(`REVIEW_WORDS` lists the deliberate exceptions).

1. Create `src/content/b1-1/` with `index.ts` that default-exports a `LevelContent`
   (copy the shape of `src/content/a1-2/index.ts`) and one file per unit (`u1-….ts`).
   Unit and activity ids are prefixed with the level id (`b1-1-…`); units pass `levelId: 'b1-1'`
   (`unit22()` in `a2-2/helpers.ts` shows how – copy or generalise it).
2. In `src/content/levels.ts` change the entry to `status: 'available'` and add
   `load: () => import('./b1-1')`, then add the next "coming soon" level.
3. Add two three-line test files that reuse the shared harnesses:
   - `content.test.ts` → `describeLevelContent('B1.1', content, 'b1-1')` (`src/test/contentSuite.ts`: schema,
     unique ids, canonical tags, unit shape, distinguishable items, level prefix),
   - `playability.test.tsx` → `describePlayability(content)` (`src/test/playability.tsx`: every activity is
     completed perfectly through the real engine).
4. Add new tags (topics/grammar points) to `src/content/tags.ts` first – filters pick them up automatically.
   The Library's Games tab has a **Level** facet (`?lvl=a2-2`) that appears as soon as more than one level has units.
5. Add an e2e flow for the new level (`e2e/a1-2.spec.ts`, `e2e/a2-1.spec.ts` and `e2e/a2-2.spec.ts` play one
   activity per engine and touch every unit) and add its pages to `e2e/a11y.spec.ts`. `e2e/helpers.ts` (`allActivities`) and `src/test/app.tsx`
   need the new pack added to their lists.

Everything else – Home, level page, library, review and progress – is driven by the catalogue.

### Authoring helpers (A1.2, reused by A2.1 and A2.2)

`src/content/a1-2/helpers.ts` keeps hand-written items short: `gap`/`typed` (gap fill), `q` (quiz question,
answer first), `sent`, `tf` (blitz), `say`/`you` (dialogue turns), `heard`/`dictation`, `sortItems`,
`table`/`sepTable`/`pastTable`/`customTable` (conjugation grids) and `readRound`/`setRound` (clock).
`reflexiveTable` builds a reflexive grid from `reflexiveForms`. German grammar helpers live in `src/lib/german`
(`conjugate`, `conjugatePreterite` (regular, strong and mixed verbs), `konjunktiv2`, `passiveForms`,
`reflexiveForms`, `reflexiveDativeForms`, `adjectiveEnding` / `declineAdjective` in `adjectives.ts`, ordinals and dates in `ordinals.ts`, prices, numbers and
years (`yearToGerman`) in `numbers.ts`, clock time in `time.ts`) – generate forms from them
instead of typing them twice.

## A new language level (French)

`src/content/fr-a1-1/` is the worked example: `index.ts` (a `LevelContent`), one file per unit (`u1-bonjour.ts`) and the
two shared test harnesses (`content.test.ts`, `playability.test.tsx`), plus French-specific checks. Differences from German:

- Level ids start with the language id (`fr-a1-1`), unit and activity ids with the level id, and the `levels.ts` entry has
  `language: 'fr'`. The pack is served under `/fr`; German URLs and ids never change.
- Write the word in the `de` field ("Bonjour") and keep French nouns with their article ("le pain", "l’eau"); do not use the
  `article` column. Ids are made ascii by `vocabList`.
- Grammar tags and their mini lessons are French only (`fr-…` in `tags.ts` / `lessons.ts`). Never tag a French grammar
  activity with a German grammar point: the wrong-answer hint would explain German.
- Sort it cards carry their own English `translation`; there is no `translations.ts` overlay yet.
- Conjugation tables use the six French persons (`je, tu, il/elle/on, nous, vous, ils/elles`, `src/lib/persons.ts`);
  generate the forms with `conjugateFr` / `reflexiveFr` (`src/lib/french`, irregular verbs from a table, regular -er and
  -ir verbs with the usual spelling changes) through `frTable` in `fr-a1-1/helpers.ts`. A table is written in one
  language's persons only (the schema checks it). The clock and market engines still depend on German helpers and need a
  French counterpart before a unit can use them.
- Tenses beyond the present (passé composé, imparfait, futur simple) come from `src/lib/french/tenses.ts`; `fr-a2-1/helpers.ts`
  wraps them as conjugation tables (`pcTable`, `pcReflexiveTable`, `imparfaitTable`, `futurTable`).
- e2e: add the pack to `frenchActivities` in `e2e/helpers.ts` (kept apart from `allActivities`, which counts German library
  games) and follow `e2e/fr-a1-1.spec.ts`.

## A new unit

A unit file exports `{ unit, vocab, activities }` (`UnitContent`). Use the helpers in
`src/content/builders.ts`:

```ts
const vocab = vocabList(U, 'Food', [['Brot', 'bread', '🍞', 'das', 'Brote'], …]);

activity(U, 'flash', 'flashcards', { title, description, tags, difficulty: 1, estMinutes: 3 }, flashcards(vocab));
activity(U, 'quiz',  'quiz',       meta, quizEmoji(vocab));      // generated with seeded distractors
activity(U, 'gap',   'gapfill',    meta, { items: [ … ] });      // hand-written grammar
```

Rules enforced by tests: 10–16 activities per unit, at least 6 game types, first activity easy (difficulty 1),
last one titled "… challenge", ids prefixed with the unit id, item ids unique inside an activity.
Order = guided path order (easy → hard). Aim for vocabulary → listening/spelling → grammar → conversation → challenge.

## Grammar lessons

Every grammar tag has a short mini lesson (`src/content/lessons.ts`, shown after a wrong answer) and may also have a
**full lesson**: a topic page with what the rule is, when and why it is used, tables, a comparison with related cases,
typical mistakes and examples. Full lessons are written once per topic and linked from every unit that teaches them.

- `src/content/grammar/<level>.ts` exports the topics of one level (`A11_TOPICS`, `A12_TOPICS`, `C21_TOPICS`, `C22_TOPICS` …); `index.ts` collects them.
  The topic `id` is the grammar tag / mini-lesson id, so no activity needs re-tagging. `level` is the first level that
  teaches the topic (the content test checks this against `unitTopics.ts`).
- `src/content/grammar/unitTopics.ts` maps unit ids to the topics they teach (`{ topic, note? }`, the note says what
  this unit adds). Every unit of a level that has lessons needs at least one entry; units without entries keep the
  one-line grammar list on the unit screen.
- Build blocks with the helpers in `build.ts` (`p`, `list`, `table`, `examples`, `compare`, `mistake`, `tip`,
  `section`). Prefer the generated tables (`articleTable`, `indefiniteTable`, `conjugationTable`, forms from
  `src/lib/german`) over typing forms by hand. Strings may contain `**bold**`; first table column is the row header.
- Write in English with German examples. Do **not** copy text: read the references first, write in your own words and
  list the pages you actually read in `sources` (reusable entries live in `sources.ts`, overview in
  `docs/grammar-sources.md`).
- UI: the main-menu item **Library** has two tabs, **Grammar** first (the default at `/library`) and **Games**
  (`/library?view=games` plus the game filters). The Grammar tab lists every lesson by level (level chips `?glvl=`,
  search `?gq=`); `/library/grammar/:topicId` is the lesson page. The unit screen has a Grammar card with the unit's
  topics and the wrong-answer hint opens the lesson in a sheet (`FullLessonLink`). The level page does not list
  grammar. The lessons are a separate chunk (`src/content/grammar/load.ts`).
- Tests: `src/content/grammar/grammar.test.ts` (schema, links, levels), `src/pages/grammar.test.tsx`,
  `src/components/grammar/grammar.test.tsx`, `e2e/grammar.spec.ts` and the pages in `e2e/a11y.spec.ts`.

## A new game engine

1. `src/content/gameTypes.ts`: add the type to `GAME_TYPES`.
2. `src/content/schema.ts`: add a config schema and its `z.object({ …base, gameType: z.literal('x'), config })`
   to `ActivitySchema`; add the items key in `src/content/items.ts` (needed for the mistake box).
3. `src/games/<engine>/<Engine>.tsx` implementing `GameProps<'x'>` (use `useSequence` + `GameFrame`), with
   `logic.ts` for anything non-trivial.
4. Register it in `src/games/registry.ts` (lazy import + help text) and `GAME_TYPE_LABELS` in `src/lib/filters.ts`.
5. Tests: `logic.test.ts`, `<Engine>.test.tsx`, a solver in `src/content/a1-1/playability.test.tsx`
   and `e2e/helpers.ts`, and an entry in `e2e/games.spec.ts`.

## Writing good German content

- Always show nouns with their article (`der Apfel`) and plural where useful.
- Wrong options should be _plausible_ mistakes (verb endings, der/die/das, word order).
- Give a one-line `explanation` for grammar items – it is shown after every answer.
- Grammar hints after a **wrong** answer (never for vocabulary/meaning mistakes):
  - **Mini lessons** live in `src/content/lessons.ts`, one per grammar tag. An activity with the `grammar`
    skill tag and one main grammar point gets its lesson automatically (`lessonForTags`); set `lesson` on
    an item (or in the activity meta) when an activity mixes grammar points, e.g. a unit challenge.
  - **`why`** maps a wrong option (or an expected wrong typed answer) to one sentence on why it is wrong.
    Wrong articles/pronouns (`dem` vs `den`, `mir` vs `mich`), wrong adjective endings (`adjGap`) and
    another person's verb form (conjugation grids, `verbForms`) are explained automatically.
  - Existing levels add hints in `<level>/hints.ts` (a `HintOverlay` merged by `withHints` in `index.ts`);
    new content can write `lesson` / `why` directly on its items. The shared content suite checks that
    only grammar activities carry hints.
- Sort it: every card needs an English meaning, shown with the verdict. It comes from a `translation` on
  the item, then `<level>/translations.ts` (German text → English, merged by `withSortitTranslations` in
  `index.ts`), then the vocabulary list (`Apfel` / `der Apfel`). The content suite fails for a card without one.
- **Noun article in the feedback** (gap fill and quiz questions with a `___` blank): when the answer is an
  article-like word (der/den/dem, ein/einen, mein-, zum/im, a relative pronoun) or an adjective ending behind
  one, the feedback shows "The noun: der Käse" in the right and the wrong case. Nothing to author: the noun is
  the first capitalised word of the clause (or the one before a relative clause) and its article comes from the
  vocabulary (`findGapNoun` in `src/lib/german/nouns.ts`). It only shows for nouns that exist in the level
  vocabulary with an `article`, so list the nouns you use in gaps in your `vocabList`.
- Sentence builder: attach punctuation to the last word, keep capitalisation as in the sentence (grading
  ignores case/punctuation) and list other valid word orders in `alsoAccept`.
