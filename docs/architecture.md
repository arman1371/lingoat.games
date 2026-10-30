# Architecture

## Principles

1. **Content is data, engines are generic.** A game is `{ gameType, config, tags, difficulty, … }`.
   The engine for `gameType` renders any config of that type.
2. **Levels are lazy content packs.** `src/content/levels.ts` lists levels; each `available` level has a
   `load()` that dynamically imports its pack (own chunk). A1.1, A1.2, A2.1, A2.2, B1.1, B1.2, B2.1, B2.2 and C1.1 are available; C1.2 is
   already in the catalogue as "coming soon".
3. **Everything is deterministic with a seed.** `?seed=` drives all shuffles and distractors
   (`src/lib/rng.ts`), which makes bugs reproducible and e2e tests stable.
4. **Local-first.** Progress/settings are zustand stores persisted through `ProgressRepository`
   (`src/store/repository.ts`). There are deliberately no accounts and no server-side learner data (GDPR);
   to move to another device, Profile → Export/Import saves and loads one versioned JSON file
   (`src/lib/progressTransfer.ts`). Import validates the file with zod; the learner then chooses Merge ("best of both":
   XP, stars, accuracy and plays never go down; the default) or Replace (exact copy of the file).
   Settings always come from the file. Bump
   `TRANSFER_VERSION` when the file shape changes.
5. **One language per page.** `src/content/languages.ts` lists the languages (`de`, `fr`). German is the default and
   keeps its URLs, level ids and storage key; every other language lives under a route prefix (`/fr/...`) with level ids
   prefixed by its id (`fr-a1-1`). The prefix is the router's `basename` (`createAppRouter`), so links and routes are
   identical in every language and switching language is a normal page navigation. `AppLayout` receives the language,
   provides it through `useLanguage()`, loads only that language's levels (`levelsOf`) and sets the speech voice
   (`setSpeechLanguage`). Progress is one zustand store per language (`progressStores`, key `lingoat.progress` for
   German, `lingoat.progress.<id>` otherwise), read through `useProgress()`: XP, streak, daily XP, stars and the mistake
   box never mix. Theme, sound, speech and the daily-goal target are shared settings. Export files (`schemaVersion` 2)
   carry one progress block per language; version 1 files import as German, and importing never touches a language
   that is not in the file.
6. **Accessible by default.** Real buttons/inputs, labelled groups, live regions for feedback,
   number-key shortcuts, 44 px targets, visible focus, no nested interactive controls, axe in CI.

## Data flow

```
levels.ts ──load()──▶ LevelContent {units, vocab, activities}
                          │ buildIndex()
                          ▼
              ContentProvider (useContent)
        ┌─────────────┼───────────────┐
     Unit page     Library          Home/Review
   (guided path)   (filters)       (continue, mistakes)
        └─────────────┼───────────────┘
                      ▼
              /play/:activityId?seed=&q=queue&review=1
                      │ gameComponents[gameType] (lazy)
                      ▼
        Engine({config, seed, onFinish}) ──GameResult──▶ progressStore.recordResult
                                                         (stars, XP, streak, mistake box)
```

- **Guided path** = activities of a unit in authoring order; the first unfinished one is "up next".
- **Queues** are plain URL state (`?q=id1,id2`), so a filtered library list, a unit path and a review
  session all use the same play flow.
- **Review**: `withItems(activity, mistakeIds)` replays only the failed items; Leitner boxes (1 → 3 → graduate)
  schedule them (`src/lib/srs.ts`).

## Game engine contract

```ts
interface GameProps<T extends GameType> {
  config: ConfigOf<T>; // validated by zod in tests
  seed: number;
  onFinish(result: { correct; total; played: string[]; mistakes: string[]; bonusXp? }): void;
}
```

Sequential engines use `useSequence` (shuffle, first-try verdicts, finish) and `GameFrame` / `FeedbackFooter`.
Memory is a two-column matching board: words on the left, matches on the right, each column shuffled on its own
(`buildColumns`); tap one card on each side to pair them. A wrong pair stays marked (with the usual `MistakeHint`) until the next tap.
Every item has a stable `id`; that id is what the mistake box stores.

Noun article: gap fill and quiz gaps whose answer depends on a noun's article (`den`, `einem`, `zum`, an adjective
ending, a relative pronoun) show a "The noun" row in the feedback (`NounArticle`, same sheet for right and wrong). PlayPage
provides the vocabulary as a `NounIndexContext` (`buildNounIndex`); engines rendered without it show no row.

Noun articles up front: in case drills (activities tagged accusative, dative, genitive, two-way/dative/genitive
prepositions, adjective endings, relative clauses, n-declension or possessives; `drillsCase`) gap fill, quiz and blitz
show a non-interactive "Nouns" row (`SentenceNouns`) under the sentence with the dictionary article of every noun in it
(`sentenceNouns`), before the player answers, so a missing article is never the reason for a wrong answer. PlayPage
provides `CaseDrillContext` from the activity tags; an activity tagged only "articles" never shows it. Design: Penpot
component "Noun Articles", screens "Gap Fill C" and "Blitz C".

Answer sounds: `useSequence` plays a tiny synthesized right/wrong cue (`src/lib/sfx.ts`, Web Audio, no asset
files) for every verdict. Dialogue (a cue per reply), blitz and memory call `useAnswerSound()` themselves;
dialogue and self-graded flashcards pass `sounds: false` to `useSequence`. The "Sound effects" setting mutes
them.

Speech: `src/lib/tts.ts` wraps the browser voice (de-DE); every `speak()` cancels the previous utterance.
Listening engines use `useAutoSpeak` (setting "Speak German automatically"). The "Read sentences aloud"
setting (`speakSentences`, default on) covers the other engines through `useSentenceSpeech`: gap fill reads
the sentence without the missing word (`spokenWithoutGap`, the gap becomes a comma pause), the sentence
builder speaks each word as it is tapped, and dialogue speaks the new speaker lines. Nothing is spoken when
an answer is revealed. Blitz and quiz stay silent on purpose: half of the blitz sentences are deliberately
wrong, and a quiz `speak` text can give the answer away.

Report a problem: a flag button in the play header files a GitHub issue through the Worker (`/api/report`),
protected by Turnstile, a rate limit and a Durable Object guard; see [report-a-problem.md](report-a-problem.md).
`useSequence` tells the play page which item is on screen (`useReportItem`).

## Grammar lessons

Full grammar topics live in `src/content/grammar/` (data, zod-validated) and are loaded as their own chunk by
`useGrammar()`. Topic id = grammar tag = mini-lesson id; `unitTopics.ts` links units to topics. The same
`GrammarLesson` renders the lesson page (`/library/grammar/:topicId`, listed on the Grammar tab of the Library) and the sheet that opens from a wrong-answer
hint. See `docs/adding-content.md` (Grammar lessons) and `docs/grammar-sources.md`.

## Tags and filters

`src/content/tags.ts` is the single vocabulary (skill / topic / grammar). Filter facets: level, unit, skill,
topic, grammar, game type, difficulty, duration + free text. Within a facet options are OR-ed, across facets AND-ed
(`src/lib/filters.ts`). Filter state lives in the URL.

## Testing pyramid

- `src/lib/**`, `src/store/**`: pure unit tests.
- `src/games/**`: logic tests + component tests per engine (correct path, wrong path, keyboard).
- `src/content/**`: schema, ids, tags and **playability** – every activity is solved through the real engine.
  Both checks are shared harnesses (`src/test/contentSuite.ts`, `src/test/playability.tsx`) that each level
  pack calls with its content.
- `src/pages/pages.test.tsx`: whole app in jsdom with the real A1.1 to C1.1 content.
- `e2e/`: Playwright on desktop + mobile: all engines, navigation, filters, persistence, review, keyboard, axe;
  `e2e/a1-2.spec.ts`, `e2e/a2-1.spec.ts`, `e2e/a2-2.spec.ts`, `e2e/b1-1.spec.ts`, `e2e/b1-2.spec.ts`, `e2e/b2-1.spec.ts`, `e2e/b2-2.spec.ts` and `e2e/c1-1.spec.ts` cover the level navigation, the level facet and one activity per engine and unit.
