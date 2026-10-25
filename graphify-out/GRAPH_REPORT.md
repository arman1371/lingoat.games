# Graph Report - lingoat.games  (2026-10-25)

## Corpus Check
- 425 files · ~449,795 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .properties 1, .css 1)

## Summary
- 2203 nodes · 7243 edges · 116 communities (109 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 95 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `70c62a5e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- c1-1/index.ts
- q
- say
- conjugation.ts
- heard
- B1.1 coverage and research doc
- ref_content_schema
- numbers.ts
- schema.ts
- @testing-library/react
- u6-feste.ts
- package.json
- progressStore.ts
- you
- devDependencies
- PlayPage.tsx
- react
- Gapfill.tsx
- content/hints.ts
- Gapfill.test.tsx
- e2e/helpers.ts
- compilerOptions
- c2-1/helpers.ts
- lessons.ts
- Clock.tsx
- a2-2/index.ts
- b2-1/index.ts
- compilerOptions
- filters.ts
- rng.ts
- items.ts
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- Market.tsx
- scripts
- controls.test.tsx
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- StatePanel.tsx
- b2-2/index.ts
- Conjugation.tsx
- c2-1/index.ts
- levels.ts
- meta
- dependencies
- UnitContent
- c1-2/index.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- content/index.ts
- ref_test_render
- srs.ts
- c2-2/helpers.ts
- i18n/index.ts
- graphify reference: query, path, explain
- Icon.tsx
- u5-familie.ts
- e2e/tsconfig.json
- vite.config.ts
- Tabs.tsx
- graphify reference: add a URL and watch a folder
- ActivityCard.tsx
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- README (lingoat)
- Deployment doc
- Button.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- b1-1/index.ts
- Architecture doc
- Code graph (Graphify)
- a1-2/helpers.ts
- Spell.tsx
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- forms.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- a2-1/helpers.ts
- memory.spec.ts
- u3-woher.ts
- b2-1/helpers.ts
- FeedbackBanner.tsx
- activity
- u10-beruf.ts
- a2-2/helpers.ts
- nouns.ts
- u9-jobsuche.ts
- ui.test.tsx
- path.ts
- articles.ts
- table
- u3-wetter.ts
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- u2-literatur.ts
- u4-recht.ts
- vitest
- u1-kunst.ts
- u5-staat.ts
- u7-klima.ts
- konjunktiv1.ts
- a1-1/types.ts
- c2-2/index.ts
- u8-nuancen.ts
- builders.ts

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 154 edges
2. `activity()` - 143 edges
3. `heard()` - 136 edges
4. `meta()` - 134 edges
5. `gap()` - 133 edges
6. `q()` - 132 edges
7. `tf()` - 132 edges
8. `say()` - 132 edges
9. `you()` - 132 edges
10. `vocabList()` - 132 edges

## Surprising Connections (you probably didn't know these)
- `Grammar` --references--> `statePassiveTable()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `13 game engines` --implements--> `Game engine contract (GameProps, useSequence, GameFrame)`  [INFERRED]
  README.md → docs/architecture.md
- `index.html app shell` --references--> `Favicon: white umlaut A on blue rounded square`  [EXTRACTED]
  index.html → public/favicon.svg
- `graphify trigger instructions (.claude/CLAUDE.md)` --conceptually_related_to--> `CLAUDE.md project notes`  [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (116 total, 7 thin omitted)

### Community 0 - "c1-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, wirtschaft, gesellschaft, zeit, digital, sprache, manieren (+5 more)

### Community 1 - "q"
Cohesion: 0.06
Nodes (41): q(), sortItems(), family, givers, status, vocab, sw(), unitC21() (+33 more)

### Community 2 - "say"
Cohesion: 0.07
Nodes (37): say(), unitB11(), events, phrases, vocab, environment, materials, vocab (+29 more)

### Community 3 - "conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "heard"
Cohesion: 0.05
Nodes (52): ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), tf(), chores, people, rules, vocab (+44 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "ref_content_schema"
Cohesion: 0.29
Nodes (5): ref_content_items, ref_content_schema, ref_content_tags, levelFixture(), quizActivity()

### Community 7 - "numbers.ts"
Cohesion: 0.12
Nodes (29): below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES, priceToGerman() (+21 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.06
Nodes (33): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+25 more)

### Community 10 - "u6-feste.ts"
Cohesion: 0.25
Nodes (7): etiquette, feste, festivals, people, restaurant, values, vocab

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.11
Nodes (22): zustand, ref_zustand_middleware, ActivityProgress, dailyXp, initialProgress(), nextStreak(), ProgressActions, ProgressData (+14 more)

### Community 13 - "you"
Cohesion: 0.06
Nodes (51): ref_lib_german_konjunktiv1, typed(), you(), body, health, vocab, authorities, countries (+43 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.05
Nodes (45): ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_dialog (+37 more)

### Community 16 - "react"
Cohesion: 0.11
Nodes (29): ref_content_lessons, ref_lib_scoring, ref_lib_sfx, react, Blitz(), buildColumns(), isMatch(), MemoryCard (+21 more)

### Community 17 - "Gapfill.tsx"
Cohesion: 0.11
Nodes (27): ref_components_ui_feedbackbanner, collectNpcLines(), latestNpcText(), Line, Scene, SceneView(), Gapfill(), spokenWithoutGap() (+19 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.13
Nodes (15): ref_lib_german_adjectives, ref_lib_german_articles, hints, hints, hints, hints, adjectiveHint(), ENDINGS (+7 more)

### Community 19 - "Gapfill.test.tsx"
Cohesion: 0.12
Nodes (15): ref_games_types, ref_lib_german_nouns, @testing-library/user-event, pick(), cheese, chips, nouns, typed (+7 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.11
Nodes (33): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+25 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "c2-1/helpers.ts"
Cohesion: 0.27
Nodes (10): Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table(), k2ModalPastTable(), konjunktiv1(), SixForms (+2 more)

### Community 23 - "lessons.ts"
Cohesion: 0.13
Nodes (18): Meta, VocabPathOptions, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS (+10 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.33
Nodes (9): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+1 more)

### Community 25 - "a2-2/index.ts"
Cohesion: 0.07
Nodes (47): ref_test_contentsuite, ref_test_playability, content, units, alltag, stadt, arbeit, gesundheit (+39 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.14
Nodes (13): units, wissenschaft, unterwegs, klima, beziehungen, besitz, wohlbefinden, kommunikation (+5 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "items.ts"
Cohesion: 0.39
Nodes (6): getItems(), itemCount(), ITEMS_KEY, ItemsKey, mapItems(), withItems()

### Community 31 - "Sentence.tsx"
Cohesion: 0.42
Nodes (7): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence()

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.07
Nodes (22): ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_lib_german_numbers, num(), NUMBERS, numberVocab, numCard() (+14 more)

### Community 34 - "Market.tsx"
Cohesion: 0.13
Nodes (18): ref_components_ui_mascot, ref_components_ui_segment, ref_components_ui_speakbutton, ref_components_ui_toast, ref_components_ui_toggle, Flashcards(), BACK, config (+10 more)

### Community 35 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, check, deploy, dev, format, format:check, lint (+6 more)

### Community 36 - "controls.test.tsx"
Cohesion: 0.13
Nodes (12): Props, Segment(), Skeleton(), Props, TextField(), ICON, Props, STYLE (+4 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "StatePanel.tsx"
Cohesion: 0.21
Nodes (11): Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood, MascotShape, Kind (+3 more)

### Community 40 - "b2-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, stadt, druck, netz, beziehungen, ernaehrung, studium (+6 more)

### Community 41 - "Conjugation.tsx"
Cohesion: 0.28
Nodes (10): ref_components_ui_umlautkeyboard, ref_lib_answer_check, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy() (+2 more)

### Community 42 - "c2-1/index.ts"
Cohesion: 0.17
Nodes (11): content, units, sprache, arbeit, wirtschaft, digitalUnit, ki, medizin (+3 more)

### Community 43 - "levels.ts"
Cohesion: 0.26
Nodes (12): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+4 more)

### Community 44 - "meta"
Cohesion: 0.06
Nodes (58): meta(), Blanks, compound(), hint(), passivePastTable(), passivePerfektTable(), SixForms, unitB12() (+50 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "UnitContent"
Cohesion: 0.05
Nodes (53): UnitContent, gap(), adjGap(), unit22(), bank, insurance, money, vocab (+45 more)

### Community 47 - "c1-2/index.ts"
Cohesion: 0.11
Nodes (18): earlierLevels, key(), REVIEW_WORDS, content, units, team10, nachhaltigkeit, vortrag (+10 more)

### Community 48 - "answer-check.ts"
Cohesion: 0.44
Nodes (8): AnswerVerdict, checkAnswer(), checkNumeric(), foldUmlauts(), normalize(), normalizeDigits(), parsePriceToCents(), stripUmlauts()

### Community 49 - "sfx.ts"
Cohesion: 0.29
Nodes (7): AudioContextCtor, Note, playSfx(), resetSfx(), SFX, SfxKind, sfxSupported()

### Community 50 - "tts.test.ts"
Cohesion: 0.36
Nodes (6): pickGermanVoice(), speak(), SpeakOptions, stopSpeaking(), Utterance, ttsSupported()

### Community 51 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 52 - "content/index.ts"
Cohesion: 0.36
Nodes (6): ref_test_factories, VocabList, ContentIndex, EMPTY_INDEX, Activity, Vocab

### Community 53 - "ref_test_render"
Cohesion: 0.15
Nodes (12): ref_test_render, answerRight(), answerWrong(), config, prompt(), statements, truth(), config (+4 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "c2-2/helpers.ts"
Cohesion: 0.20
Nodes (14): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+6 more)

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "Icon.tsx"
Cohesion: 0.14
Nodes (17): src_components_ui_icon_iconname, Props, IconButton(), Props, Size, SIZES, Variant, VARIANTS (+9 more)

### Community 59 - "u5-familie.ts"
Cohesion: 0.12
Nodes (12): people, phrases, vocab, wer, familie, female, male, relatives (+4 more)

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "vite.config.ts"
Cohesion: 0.33
Nodes (5): ref_node_url, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 62 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "ActivityCard.tsx"
Cohesion: 0.17
Nodes (12): ref_content_gametypes, ActivityCard(), Props, Chip(), ChipProps, Tag(), GameTile(), SIZES (+4 more)

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 73 - "README (lingoat)"
Cohesion: 0.18
Nodes (12): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts), Leitner SRS review (srs.ts), Code quality: SonarQube Cloud (+4 more)

### Community 74 - "Deployment doc"
Cohesion: 0.29
Nodes (8): ProgressRepository (local-first storage seam), Deployment doc, Cloudflare Pages / Workers hosting, Alternative hosts (Vercel, Netlify, Render), PWA service worker and caching headers, wrangler.jsonc SPA config, index.html app shell, Favicon: white umlaut A on blue rounded square

### Community 75 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.18
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "b1-1/index.ts"
Cohesion: 0.14
Nodes (13): units, feiern, umwelt, pannen, glueck, unterhaltung, gesundheit, sprachen (+5 more)

### Community 79 - "Architecture doc"
Cohesion: 0.21
Nodes (13): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Procedure: add a new unit (builders.ts), Architecture doc, Accessible by default, Content is data, engines are generic (+5 more)

### Community 80 - "Code graph (Graphify)"
Cohesion: 0.40
Nodes (4): Code graph (Graphify), Locally, Repo settings, The workflow

### Community 81 - "a1-2/helpers.ts"
Cohesion: 0.16
Nodes (11): ref_lib_german_conjugation, freizeit, hobbies, vocab, pastTable(), Pronoun, Question, Turn (+3 more)

### Community 82 - "Spell.tsx"
Cohesion: 0.26
Nodes (7): LetterTile, scrambleForItem(), scrambleLetters(), Spell(), dictation, typed, unscramble

### Community 83 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "forms.ts"
Cohesion: 0.16
Nodes (16): adjectiveEnding(), row(), adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms() (+8 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.22
Nodes (8): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 87 - "a2-1/helpers.ts"
Cohesion: 0.12
Nodes (20): readRound(), sepTable(), setRound(), Blanks, reflexiveTable(), events, freizeit, plans (+12 more)

### Community 88 - "memory.spec.ts"
Cohesion: 0.13
Nodes (8): PAGES, allVocab, { left, right }, memory, nouns, play(), squash(), @axe-core/playwright

### Community 89 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 90 - "b2-1/helpers.ts"
Cohesion: 0.36
Nodes (7): Blanks, compound(), futur2Table(), k1Table(), konjunktiv1(), SixForms, statePassiveTable()

### Community 91 - "FeedbackBanner.tsx"
Cohesion: 0.40
Nodes (4): FeedbackBanner(), FeedbackKind, Props, STYLE

### Community 92 - "activity"
Cohesion: 0.05
Nodes (80): dictation(), sent(), unitB22(), green, mobility, vocab, decide, stress (+72 more)

### Community 94 - "u10-beruf.ts"
Cohesion: 0.25
Nodes (6): beruf, cv, PERFEKT, verbs, vocab, year()

### Community 97 - "a2-2/helpers.ts"
Cohesion: 0.25
Nodes (15): customTable(), Blanks, ENDING_ORDER, k2Table(), passiveTable(), reflexiveAccTable(), reflexiveDativeTable(), SixForms (+7 more)

### Community 98 - "nouns.ts"
Cohesion: 0.22
Nodes (16): Gender, bareNoun(), buildNounIndex(), findGapNoun(), GapNoun, GENDER, isCapitalised(), isDeterminer() (+8 more)

### Community 100 - "u9-jobsuche.ts"
Cohesion: 0.12
Nodes (11): ads, furniture, money, verbs, vocab, wohnung, ads, jobs (+3 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (18): ref_games_shared_gameframe, DailyGoalCard(), Card(), Props, COLORS, Confetti(), Logo(), MARK (+10 more)

### Community 102 - "path.ts"
Cohesion: 0.33
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 104 - "articles.ts"
Cohesion: 0.18
Nodes (14): DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, Case, DEFINITE, definiteArticle() (+6 more)

### Community 109 - "table"
Cohesion: 0.29
Nodes (6): table(), actions, devices, online, vocab, web

### Community 111 - "u3-wetter.ts"
Cohesion: 0.29
Nodes (6): colours, phrases, seasons, vocab, weather, wetter

### Community 113 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 115 - "u2-literatur.ts"
Cohesion: 0.29
Nodes (6): buch, grammarTags, kritik, LESSON, literatur, vocab

### Community 116 - "u4-recht.ts"
Cohesion: 0.25
Nodes (7): unitC22(), gericht, grammarTags, LESSON, recht, verfahren, vocab

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "u1-kunst.ts"
Cohesion: 0.25
Nodes (7): withLesson(), betrieb, grammarTags, kunst, LESSON, urteil, vocab

### Community 119 - "u5-staat.ts"
Cohesion: 0.29
Nodes (6): debatte, grammarTags, LESSON, staat, staatPolitik, vocab

### Community 120 - "u7-klima.ts"
Cohesion: 0.25
Nodes (7): withWhy(), grammarTags, handeln, klima, LESSON, vocab, welt

### Community 121 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 122 - "a1-1/types.ts"
Cohesion: 0.22
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 125 - "c2-2/index.ts"
Cohesion: 0.22
Nodes (8): units, engagement, gesellschaft, grammarTags, LESSON, verben, vocab, stellung

### Community 126 - "u8-nuancen.ts"
Cohesion: 0.29
Nodes (6): grammarTags, LESSON, nuancen, redewendungen, stil, vocab

### Community 129 - "builders.ts"
Cohesion: 0.05
Nodes (59): fitness, health, vocab, unitB21(), alternatives, progress, research, vocab (+51 more)

## Knowledge Gaps
- **952 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+947 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1088 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `README (lingoat)` connect `README (lingoat)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Deployment doc`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `C2.1 – syllabus research, coverage and overlap with A1.1–C1.2`, `Architecture doc`, `Code graph (Graphify)`, `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `C2.2 – syllabus research, coverage and overlap with A1.1–C2.1`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `u4-zahlen.ts`, `Market.tsx`, `controls.test.tsx`, `ui.test.tsx`, `Conjugation.tsx`, `levels.ts`, `package.json`, `PlayPage.tsx`, `react`, `Gapfill.tsx`, `Spell.tsx`, `Gapfill.test.tsx`, `ref_test_render`, `vitest`, `Clock.tsx`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `@testing-library/react`, `package.json`, `PlayPage.tsx`, `Gapfill.tsx`, `Gapfill.test.tsx`, `Clock.tsx`, `Sentence.tsx`, `u4-zahlen.ts`, `Market.tsx`, `controls.test.tsx`, `StatePanel.tsx`, `Conjugation.tsx`, `levels.ts`, `Icon.tsx`, `Tabs.tsx`, `ActivityCard.tsx`, `Button.tsx`, `Spell.tsx`, `FeedbackBanner.tsx`, `ui.test.tsx`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _952 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `c1-1/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `q` be split into smaller, more focused modules?**
  _Cohesion score 0.062409288824383166 - nodes in this community are weakly interconnected._
- **Should `say` be split into smaller, more focused modules?**
  _Cohesion score 0.07482993197278912 - nodes in this community are weakly interconnected._