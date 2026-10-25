# Graph Report - lingoat.games  (2026-10-25)

## Corpus Check
- 414 files · ~443,997 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .properties 1, .css 1)

## Summary
- 2138 nodes · 7050 edges · 103 communities (93 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 77 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6f5fa319`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- c2-1/index.ts
- meta
- UnitContent
- forms.ts
- u2-wohnen.ts
- B1.1 coverage and research doc
- u9-aemter.ts
- u10-beruf.ts
- schema.ts
- @testing-library/react
- StatePanel.tsx
- package.json
- progressStore.ts
- heard
- devDependencies
- PlayPage.tsx
- sounds.test.tsx
- react
- content/hints.ts
- a2-2/helpers.ts
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
- items.ts
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- market/logic.ts
- scripts
- controls.test.tsx
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- playability.tsx
- b2-2/index.ts
- Conjugation.tsx
- u5-familie.ts
- ref_test_playability
- builders.ts
- dependencies
- u6-reisen.ts
- AppLayout.tsx
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- u5-wuensche.ts
- u5-kleidung.ts
- srs.ts
- u7-feste.ts
- i18n/index.ts
- graphify reference: query, path, explain
- Icon.tsx
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- e2e/tsconfig.json
- vite.config.ts
- Tabs.tsx
- graphify reference: add a URL and watch a folder
- u9-jobsuche.ts
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- README (Deutsch Spielplatz)
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
- u8-einkaufen.ts
- u1-hallo.ts
- byDe
- a11y.spec.ts
- FeedbackBanner.tsx
- ProgressBar.tsx
- UmlautKeyboard.tsx
- gap
- you
- U
- activity
- ui.test.tsx
- u3-woher.ts
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- setup.ts
- a2-1/helpers.ts

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

## Communities (103 total, 10 thin omitted)

### Community 0 - "c2-1/index.ts"
Cohesion: 0.15
Nodes (11): content, units, sprache, arbeit, wirtschaft, digitalUnit, ki, medizin (+3 more)

### Community 1 - "meta"
Cohesion: 0.09
Nodes (38): dictation(), meta(), listen(), Blanks, SixForms, sw(), unitC21(), withWhy() (+30 more)

### Community 2 - "UnitContent"
Cohesion: 0.06
Nodes (48): UnitContent, q(), tf(), chores, people, rules, vocab, moving (+40 more)

### Community 3 - "forms.ts"
Cohesion: 0.06
Nodes (54): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+46 more)

### Community 4 - "u2-wohnen.ts"
Cohesion: 0.25
Nodes (8): ref_lib_german_ordinals, ads, euro(), furniture, rent(), rooms, vocab, wohnen

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "u9-aemter.ts"
Cohesion: 0.25
Nodes (7): ref_lib_german_numbers, aemter, feeHeard(), forms, formWords, service, vocab

### Community 7 - "u10-beruf.ts"
Cohesion: 0.09
Nodes (35): beruf, cv, PERFEKT, verbs, vocab, year(), below100(), below1000() (+27 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (35): VocabList, GAME_TYPES, GameType, ContentIndex, Activity, base, BlitzConfig, choiceBase (+27 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.05
Nodes (33): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+25 more)

### Community 10 - "StatePanel.tsx"
Cohesion: 0.21
Nodes (11): Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood, MascotShape, Kind (+3 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.11
Nodes (22): zustand, ref_zustand_middleware, ActivityProgress, dailyXp, initialProgress(), nextStreak(), ProgressActions, ProgressData (+14 more)

### Community 13 - "heard"
Cohesion: 0.05
Nodes (57): ref_lib_german_konjunktiv1, heard(), calls, contact, letters, phoneHeard(), termine, vocab (+49 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.08
Nodes (36): ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_dialog (+28 more)

### Community 16 - "sounds.test.tsx"
Cohesion: 0.14
Nodes (16): ref_lib_sfx, Blitz(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+8 more)

### Community 17 - "react"
Cohesion: 0.11
Nodes (40): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_lib_answer_check, ref_lib_tts, react, Props, collectNpcLines(), Line (+32 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.12
Nodes (19): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, hints, hints, hints, adjGap(), hints (+11 more)

### Community 19 - "a2-2/helpers.ts"
Cohesion: 0.11
Nodes (37): customTable(), pastTable(), Pronoun, Question, table(), Turn, unit12(), Blanks (+29 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.12
Nodes (30): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+22 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "c2-2/helpers.ts"
Cohesion: 0.05
Nodes (61): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+53 more)

### Community 23 - "lessons.ts"
Cohesion: 0.14
Nodes (16): Meta, VocabPathOptions, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags() (+8 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-2/index.ts"
Cohesion: 0.06
Nodes (50): ref_test_contentsuite, content, units, alltag, stadt, arbeit, gesundheit, content (+42 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.12
Nodes (15): REVIEW_WORDS, content, units, wissenschaft, unterwegs, klima, beziehungen, besitz (+7 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "filters.ts"
Cohesion: 0.07
Nodes (34): ref_test_factories, nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path, ContentContext (+26 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "items.ts"
Cohesion: 0.39
Nodes (6): getItems(), itemCount(), ITEMS_KEY, ItemsKey, mapItems(), withItems()

### Community 31 - "Sentence.tsx"
Cohesion: 0.22
Nodes (10): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT (+2 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.14
Nodes (7): num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen

### Community 34 - "market/logic.ts"
Cohesion: 0.31
Nodes (8): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market()

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

### Community 39 - "playability.tsx"
Cohesion: 0.12
Nodes (17): ref_content_items, ref_content_schema, ref_content_tags, ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_games_types, ref_lib_scoring (+9 more)

### Community 40 - "b2-2/index.ts"
Cohesion: 0.12
Nodes (16): key(), REVIEW_WORDS, content, units, stadt, druck, netz, beziehungen (+8 more)

### Community 41 - "Conjugation.tsx"
Cohesion: 0.19
Nodes (14): ref_components_ui_umlautkeyboard, ref_content_lessons, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy() (+6 more)

### Community 42 - "u5-familie.ts"
Cohesion: 0.12
Nodes (12): people, phrases, vocab, wer, familie, female, male, relatives (+4 more)

### Community 43 - "ref_test_playability"
Cohesion: 0.25
Nodes (3): ref_test_playability, content, content

### Community 44 - "builders.ts"
Cohesion: 0.06
Nodes (54): places, vocab, ways, exams, problems, tips, vocab, hint() (+46 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "u6-reisen.ts"
Cohesion: 0.25
Nodes (7): src_content_a1_2_helpers_activity, hotel, reisen, travel, vocab, weather, weatherTalk

### Community 47 - "AppLayout.tsx"
Cohesion: 0.07
Nodes (17): ref_components_ui_icon, ref_components_ui_logo, ref_components_ui_skeleton, ref_components_ui_statpill, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout() (+9 more)

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

### Community 52 - "u5-wuensche.ts"
Cohesion: 0.07
Nodes (30): reflexiveTable(), unit22(), feelings, sport, sportUnit, verbs, vocab, proverbs (+22 more)

### Community 53 - "u5-kleidung.ts"
Cohesion: 0.25
Nodes (6): clothes, colours, kleidung, priceHeard(), shop, vocab

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "u7-feste.ts"
Cohesion: 0.25
Nodes (7): dateHeard(), DM, feiern, feste, months, phrases, vocab

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "Icon.tsx"
Cohesion: 0.14
Nodes (17): src_components_ui_icon_iconname, Props, IconButton(), Props, Size, SIZES, Variant, VARIANTS (+9 more)

### Community 59 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.22
Nodes (8): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources

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

### Community 64 - "u9-jobsuche.ts"
Cohesion: 0.29
Nodes (5): ads, jobs, jobsuche, reflexive, vocab

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 73 - "README (Deutsch Spielplatz)"
Cohesion: 0.20
Nodes (9): Procedure: add a new game engine, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts), Leitner SRS review (srs.ts), Code quality: SonarQube Cloud, One-time setup (by hand), README (Deutsch Spielplatz), Fehlerkiste (Leitner review box) (+1 more)

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
Cohesion: 0.12
Nodes (16): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+8 more)

### Community 78 - "b1-1/index.ts"
Cohesion: 0.13
Nodes (14): content, units, feiern, umwelt, pannen, glueck, unterhaltung, gesundheit (+6 more)

### Community 79 - "Architecture doc"
Cohesion: 0.17
Nodes (16): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new unit (builders.ts) (+8 more)

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

### Community 85 - "u8-einkaufen.ts"
Cohesion: 0.25
Nodes (5): einkaufen, food, genderItems, shopping, vocab

### Community 86 - "u1-hallo.ts"
Cohesion: 0.29
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 87 - "byDe"
Cohesion: 0.10
Nodes (16): jobs, vocab, work, ads, furniture, money, verbs, vocab (+8 more)

### Community 89 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FeedbackBanner(), FeedbackKind, ICON, Props, STYLE

### Community 90 - "ProgressBar.tsx"
Cohesion: 0.50
Nodes (3): FILL, ProgressBar(), Props

### Community 91 - "UmlautKeyboard.tsx"
Cohesion: 0.50
Nodes (3): KEYS, Props, UmlautKeyboard()

### Community 92 - "gap"
Cohesion: 0.08
Nodes (41): gap(), sent(), memory(), quizDeEn(), unitC12(), conflict, team, vocab (+33 more)

### Community 93 - "you"
Cohesion: 0.04
Nodes (64): sortItems(), you(), bank, insurance, money, vocab, memories, stages (+56 more)

### Community 98 - "activity"
Cohesion: 0.05
Nodes (53): say(), typed(), body, health, vocab, aemter, authorities, countries (+45 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (23): ref_content_gametypes, ActivityCard(), Props, DailyGoalCard(), Card(), Props, Chip(), ChipProps (+15 more)

### Community 108 - "u3-woher.ts"
Cohesion: 0.14
Nodes (9): countries, country(), languages, vocab, woher, words, freizeit, hobbies (+1 more)

### Community 113 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 121 - "a2-1/helpers.ts"
Cohesion: 0.07
Nodes (36): readRound(), sepTable(), setRound(), Blanks, unit21(), actions, devices, online (+28 more)

## Knowledge Gaps
- **934 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+929 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1062 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `controls.test.tsx`, `ui.test.tsx`, `playability.tsx`, `Conjugation.tsx`, `StatePanel.tsx`, `Button.tsx`, `package.json`, `@testing-library/react`, `AppLayout.tsx`, `sounds.test.tsx`, `PlayPage.tsx`, `Clock.tsx`, `FeedbackBanner.tsx`, `Icon.tsx`, `filters.ts`, `Tabs.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Why does `README (Deutsch Spielplatz)` connect `README (Deutsch Spielplatz)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Deployment doc`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `Architecture doc`, `Code graph (Graphify)`, `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `C2.2 – syllabus research, coverage and overlap with A1.1–C2.1`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `controls.test.tsx`, `ui.test.tsx`, `playability.tsx`, `Conjugation.tsx`, `package.json`, `AppLayout.tsx`, `sounds.test.tsx`, `react`, `setup.ts`, `Clock.tsx`, `filters.ts`, `Sentence.tsx`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _934 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `meta` be split into smaller, more focused modules?**
  _Cohesion score 0.0858843537414966 - nodes in this community are weakly interconnected._
- **Should `UnitContent` be split into smaller, more focused modules?**
  _Cohesion score 0.05683563748079877 - nodes in this community are weakly interconnected._
- **Should `forms.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.058653846153846154 - nodes in this community are weakly interconnected._