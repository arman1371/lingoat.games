# Graph Report - lingoat.games  (2026-10-25)

## Corpus Check
- 415 files · ~445,950 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .properties 1, .css 1)

## Summary
- 2152 nodes · 7111 edges · 115 communities (107 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 90 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a74e4ba8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- c1-1/index.ts
- activity
- q
- forms.ts
- heard
- B1.1 coverage and research doc
- playability.tsx
- numbers.ts
- schema.ts
- @testing-library/react
- u6-feste.ts
- package.json
- progressStore.ts
- say
- devDependencies
- PlayPage.tsx
- Memory.tsx
- react
- content/hints.ts
- gap
- e2e/helpers.ts
- compilerOptions
- c2-2/helpers.ts
- lessons.ts
- Clock.tsx
- a2-2/index.ts
- b2-1/index.ts
- compilerOptions
- filters.ts
- rng.ts
- content/index.ts
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- market/logic.ts
- scripts
- controls.test.tsx
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- StatePanel.tsx
- b2-2/index.ts
- Conjugation.tsx
- c2-1/index.ts
- ContentProvider.tsx
- builders.ts
- dependencies
- u12-arbeit.ts
- AppLayout.tsx
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- c2-1/helpers.ts
- u8-werbung.ts
- srs.ts
- u3-kulturerbe.ts
- i18n/index.ts
- graphify reference: query, path, explain
- Icon.tsx
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- e2e/tsconfig.json
- vite.config.ts
- Tabs.tsx
- graphify reference: add a URL and watch a folder
- u6-reisen.ts
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
- b1-2/index.ts
- u4-kunst.ts
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- c1-2/index.ts
- DailyGoalCard.tsx
- a2-1/helpers.ts
- memory.spec.ts
- UmlautKeyboard.tsx
- u3-nachbarn.ts
- you
- u11-leben.ts
- u10-beruf.ts
- statePassiveTable
- c2-2/index.ts
- a2-2/helpers.ts
- u7-post.ts
- u5-wohnung.ts
- ui.test.tsx
- path.ts
- u7-wirtschaft.ts
- table
- u3-wetter.ts
- u6-aemter.ts
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- u2-literatur.ts
- u4-recht.ts
- setup.ts
- u5-staat.ts
- u7-klima.ts
- UnitContent
- u7-gesellschaft.ts

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
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `Grammar` --references--> `statePassiveTable()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
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

## Communities (115 total, 8 thin omitted)

### Community 0 - "c1-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, wirtschaft, gesellschaft, zeit, digital, sprache, manieren (+5 more)

### Community 1 - "activity"
Cohesion: 0.05
Nodes (53): byes, feelings, hellos, polite, vocab, people, phrases, vocab (+45 more)

### Community 2 - "q"
Cohesion: 0.06
Nodes (38): q(), tf(), learning, school, subjects, vocab, feelings, sport (+30 more)

### Community 3 - "forms.ts"
Cohesion: 0.06
Nodes (54): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+46 more)

### Community 4 - "heard"
Cohesion: 0.06
Nodes (40): ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), chores, people, rules, vocab, places (+32 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "playability.tsx"
Cohesion: 0.16
Nodes (14): ref_content_schema, ref_games_market_logic, ref_games_memory_logic, ref_games_types, ref_lib_scoring, @testing-library/user-event, levelFixture(), quizActivity() (+6 more)

### Community 7 - "numbers.ts"
Cohesion: 0.11
Nodes (30): year(), below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES (+22 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.06
Nodes (29): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+21 more)

### Community 10 - "u6-feste.ts"
Cohesion: 0.25
Nodes (7): etiquette, feste, festivals, people, restaurant, values, vocab

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.11
Nodes (22): zustand, ref_zustand_middleware, ActivityProgress, dailyXp, initialProgress(), nextStreak(), ProgressActions, ProgressData (+14 more)

### Community 13 - "say"
Cohesion: 0.08
Nodes (45): ref_lib_german_konjunktiv1, dictation(), say(), typed(), eras, resistance, vocab, quizDeEn() (+37 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.06
Nodes (44): ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_dialog (+36 more)

### Community 16 - "Memory.tsx"
Cohesion: 0.09
Nodes (26): ref_lib_sfx, ref_test_render, Blitz(), answerRight(), answerWrong(), config, prompt(), statements (+18 more)

### Community 17 - "react"
Cohesion: 0.13
Nodes (36): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_lib_answer_check, ref_lib_tts, react, collectNpcLines(), Line (+28 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.15
Nodes (15): ref_lib_german_conjugation, hints, hints, hints, hints, adjectiveHint(), ENDINGS, HintableItem (+7 more)

### Community 19 - "gap"
Cohesion: 0.05
Nodes (54): gap(), pastTable(), Pronoun, Question, Turn, unit12(), adjGap(), Blanks (+46 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.11
Nodes (36): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+28 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "c2-2/helpers.ts"
Cohesion: 0.14
Nodes (23): customTable(), compound(), futurTable(), k2PastTable(), passiveModalTable(), pqpTable(), compound(), passivePastTable() (+15 more)

### Community 23 - "lessons.ts"
Cohesion: 0.14
Nodes (17): Meta, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags() (+9 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-2/index.ts"
Cohesion: 0.08
Nodes (44): ref_test_contentsuite, content, units, alltag, stadt, wohnen, arbeit, gesundheit (+36 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.13
Nodes (14): content, units, wissenschaft, unterwegs, klima, beziehungen, besitz, wohlbefinden (+6 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "filters.ts"
Cohesion: 0.14
Nodes (16): ref_content_items, ref_content_tags, activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities() (+8 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "content/index.ts"
Cohesion: 0.24
Nodes (9): ref_test_factories, ContentIndex, EMPTY_INDEX, getItems(), itemCount(), ITEMS_KEY, ItemsKey, withItems() (+1 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.22
Nodes (10): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT (+2 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.09
Nodes (13): ref_lib_german_numbers, num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen (+5 more)

### Community 34 - "market/logic.ts"
Cohesion: 0.20
Nodes (10): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market() (+2 more)

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
Cohesion: 0.09
Nodes (15): ref_test_playability, units, stadt, druck, netz, beziehungen, ernaehrung, studium (+7 more)

### Community 41 - "Conjugation.tsx"
Cohesion: 0.21
Nodes (13): ref_content_lessons, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), gradeTable() (+5 more)

### Community 42 - "c2-1/index.ts"
Cohesion: 0.15
Nodes (11): content, units, sprache, arbeit, wirtschaft, digitalUnit, ki, medizin (+3 more)

### Community 43 - "ContentProvider.tsx"
Cohesion: 0.24
Nodes (12): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+4 more)

### Community 44 - "builders.ts"
Cohesion: 0.04
Nodes (90): countries, country(), languages, vocab, words, meta(), environment, materials (+82 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "u12-arbeit.ts"
Cohesion: 0.25
Nodes (7): reflexiveDativeTable(), arbeit, career, emergency, hospital, office, vocab

### Community 47 - "AppLayout.tsx"
Cohesion: 0.07
Nodes (15): ref_components_ui_logo, ref_components_ui_skeleton, ref_components_ui_statpill, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout(), NAV (+7 more)

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

### Community 52 - "c2-1/helpers.ts"
Cohesion: 0.31
Nodes (9): Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table(), k2ModalPastTable(), konjunktiv1(), SixForms (+1 more)

### Community 53 - "u8-werbung.ts"
Cohesion: 0.29
Nodes (6): ads, describing, habits, proscons, vocab, werbung

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "u3-kulturerbe.ts"
Cohesion: 0.29
Nodes (6): bewahren, erbe, grammarTags, kulturerbe, LESSON, vocab

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "Icon.tsx"
Cohesion: 0.10
Nodes (24): FeedbackBanner(), FeedbackKind, Props, STYLE, Icon(), src_components_ui_icon_iconname, Props, IconButton() (+16 more)

### Community 59 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.25
Nodes (7): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar hints, How the units were chosen, Left out on purpose, Sources

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

### Community 64 - "u6-reisen.ts"
Cohesion: 0.33
Nodes (5): hotel, travel, vocab, weather, weatherTalk

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
Cohesion: 0.16
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
Cohesion: 0.20
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

### Community 81 - "b1-2/index.ts"
Cohesion: 0.14
Nodes (13): units, heimat, kunst, diskussion, kollegen, digital, konsum, weiterbildung (+5 more)

### Community 82 - "u4-kunst.ts"
Cohesion: 0.29
Nodes (6): adjectives, art, kunst, music, tickets, vocab

### Community 83 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "c1-2/index.ts"
Cohesion: 0.11
Nodes (18): earlierLevels, key(), REVIEW_WORDS, content, units, team10, nachhaltigkeit, vortrag (+10 more)

### Community 86 - "DailyGoalCard.tsx"
Cohesion: 0.50
Nodes (3): DailyGoalCard(), ProgressRing(), Props

### Community 87 - "a2-1/helpers.ts"
Cohesion: 0.16
Nodes (15): readRound(), setRound(), Blanks, reflexiveTable(), unit21(), events, freizeit, plans (+7 more)

### Community 88 - "memory.spec.ts"
Cohesion: 0.18
Nodes (4): PAGES, { left, right }, memory, @axe-core/playwright

### Community 89 - "UmlautKeyboard.tsx"
Cohesion: 0.50
Nodes (3): KEYS, Props, UmlautKeyboard()

### Community 91 - "u3-nachbarn.ts"
Cohesion: 0.15
Nodes (11): unit22(), moving, nachbarn, neighbours, pets, vocab, reisen, route (+3 more)

### Community 92 - "you"
Cohesion: 0.06
Nodes (48): sent(), sortItems(), you(), bank, insurance, money, vocab, proverbs (+40 more)

### Community 93 - "u11-leben.ts"
Cohesion: 0.40
Nodes (4): memories, stages, story, vocab

### Community 94 - "u10-beruf.ts"
Cohesion: 0.29
Nodes (5): beruf, cv, PERFEKT, verbs, vocab

### Community 95 - "statePassiveTable"
Cohesion: 0.50
Nodes (4): Grammar, compound(), futur2Table(), statePassiveTable()

### Community 96 - "c2-2/index.ts"
Cohesion: 0.11
Nodes (20): unitC22(), vocabPath(), units, betrieb, grammarTags, kunst, LESSON, urteil (+12 more)

### Community 97 - "a2-2/helpers.ts"
Cohesion: 0.15
Nodes (12): ref_lib_german_adjectives, ref_lib_german_articles, Blanks, ENDING_ORDER, k2Table(), reflexiveAccTable(), SixForms, exams (+4 more)

### Community 99 - "u7-post.ts"
Cohesion: 0.29
Nodes (6): passiveTable(), mobile, phone, post, postUnit, vocab

### Community 100 - "u5-wohnung.ts"
Cohesion: 0.25
Nodes (6): ads, furniture, money, verbs, vocab, wohnung

### Community 101 - "ui.test.tsx"
Cohesion: 0.09
Nodes (22): ref_content_gametypes, ref_games_shared_gameframe, ActivityCard(), Props, Card(), Props, Chip(), ChipProps (+14 more)

### Community 102 - "path.ts"
Cohesion: 0.33
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 105 - "u7-wirtschaft.ts"
Cohesion: 0.50
Nodes (3): money, tourism, vocab

### Community 109 - "table"
Cohesion: 0.15
Nodes (11): table(), actions, devices, online, vocab, web, familie, family (+3 more)

### Community 111 - "u3-wetter.ts"
Cohesion: 0.25
Nodes (7): sepTable(), colours, phrases, seasons, vocab, weather, wetter

### Community 112 - "u6-aemter.ts"
Cohesion: 0.29
Nodes (6): aemter, authorities, countries, forms, nat(), vocab

### Community 113 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 115 - "u2-literatur.ts"
Cohesion: 0.29
Nodes (6): buch, grammarTags, kritik, LESSON, literatur, vocab

### Community 116 - "u4-recht.ts"
Cohesion: 0.29
Nodes (6): gericht, grammarTags, LESSON, recht, verfahren, vocab

### Community 119 - "u5-staat.ts"
Cohesion: 0.29
Nodes (6): debatte, grammarTags, LESSON, staat, staatPolitik, vocab

### Community 120 - "u7-klima.ts"
Cohesion: 0.13
Nodes (14): withLesson(), withWhy(), grammarTags, handeln, klima, LESSON, vocab, welt (+6 more)

### Community 129 - "UnitContent"
Cohesion: 0.09
Nodes (19): UnitContent, jobs, vocab, work, alternatives, progress, research, vocab (+11 more)

### Community 149 - "u7-gesellschaft.ts"
Cohesion: 0.40
Nodes (4): phrases, politics, social, vocab

## Knowledge Gaps
- **939 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+934 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1069 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `controls.test.tsx`, `ui.test.tsx`, `playability.tsx`, `StatePanel.tsx`, `Conjugation.tsx`, `@testing-library/react`, `Button.tsx`, `package.json`, `ContentProvider.tsx`, `AppLayout.tsx`, `Memory.tsx`, `PlayPage.tsx`, `Clock.tsx`, `Icon.tsx`, `Tabs.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Why does `README (lingoat)` connect `README (lingoat)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Deployment doc`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `Architecture doc`, `Code graph (Graphify)`, `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `C2.2 – syllabus research, coverage and overlap with A1.1–C2.1`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `market/logic.ts`, `controls.test.tsx`, `ui.test.tsx`, `playability.tsx`, `Conjugation.tsx`, `package.json`, `ContentProvider.tsx`, `AppLayout.tsx`, `PlayPage.tsx`, `Memory.tsx`, `react`, `setup.ts`, `Clock.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _939 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `c1-1/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `activity` be split into smaller, more focused modules?**
  _Cohesion score 0.049899396378269616 - nodes in this community are weakly interconnected._
- **Should `q` be split into smaller, more focused modules?**
  _Cohesion score 0.05612244897959184 - nodes in this community are weakly interconnected._