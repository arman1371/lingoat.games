# Graph Report - lingoat.games  (2026-10-25)

## Corpus Check
- 414 files · ~444,302 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .properties 1, .css 1)

## Summary
- 2141 nodes · 7059 edges · 169 communities (160 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 77 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7732d8c4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- c2-1/index.ts
- UnitContent
- gap
- forms.ts
- u2-wohnen.ts
- B1.1 coverage and research doc
- u9-aemter.ts
- numbers.ts
- schema.ts
- @testing-library/react
- StatePanel.tsx
- package.json
- progressStore.ts
- c1-1/helpers.ts
- devDependencies
- PlayPage.tsx
- sounds.test.tsx
- react
- content/hints.ts
- b1-1/helpers.ts
- e2e/helpers.ts
- compilerOptions
- c2-2/helpers.ts
- lessons.ts
- Clock.tsx
- a2-1/index.ts
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
- a1-1/types.ts
- u1-kollegen.ts
- dependencies
- u6-reisen.ts
- AppLayout.tsx
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- builders.ts
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
- c1-2/index.ts
- u1-hallo.ts
- u5-wohnung.ts
- a11y.spec.ts
- FeedbackBanner.tsx
- ProgressBar.tsx
- UmlautKeyboard.tsx
- c1-2/helpers.ts
- u5-wuensche.ts
- a2-2/index.ts
- b2-1/helpers.ts
- c2-2/index.ts
- table
- memory
- a2-2/helpers.ts
- a1-2/helpers.ts
- ui.test.tsx
- path.ts
- dictation
- meta
- q
- quizDeEn
- byDe
- u3-woher.ts
- u10-beruf.ts
- u1-kunst.ts
- heard
- typed
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- u3-wetter.ts
- u2-literatur.ts
- u4-recht.ts
- setup.ts
- c2-2/u6-engagement.ts
- u5-staat.ts
- u7-klima.ts
- a2-1/helpers.ts
- u8-nuancen.ts
- say
- u8-schule.ts
- u7-familie.ts
- u1-online.ts
- u2-freizeit.ts
- hint
- u10-wissenschaft.ts
- u11-unterwegs.ts
- u1-stadt.ts
- u3-arbeit.ts
- sent
- sortItems
- you
- u4-gesundheit.ts
- u10-alltag.ts
- listen
- flashcards
- activity
- quizEmoji
- b2-1/u1-beziehungen.ts
- u3-wohlbefinden.ts
- u4-kommunikation.ts
- u5-teamgeist.ts
- u6-lebenswege.ts
- u7-gesellschaft.ts
- u8-wohnen.ts
- u9-medien.ts
- u7-wohnen.ts
- u9-zukunft.ts
- u10-heimat.ts
- u11-kunst.ts
- u12-diskussion.ts
- b1-2/u2-digital.ts
- u3-konsum.ts
- u4-weiterbildung.ts
- u5-regeln.ts
- b1-2/u6-engagement.ts
- u7-politik.ts
- u1-finanzen.ts
- u2-gesundheit.ts
- u5-stadt.ts
- u6-literatur.ts
- u7-kino.ts
- u8-geschaeft.ts

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

## Communities (169 total, 9 thin omitted)

### Community 0 - "c2-1/index.ts"
Cohesion: 0.15
Nodes (11): content, units, sprache, arbeit, wirtschaft, digitalUnit, ki, medizin (+3 more)

### Community 1 - "UnitContent"
Cohesion: 0.08
Nodes (43): UnitContent, tf(), spell(), Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table() (+35 more)

### Community 2 - "gap"
Cohesion: 0.16
Nodes (10): gap(), luck, news, vocab, fitness, health, vocab, phrases (+2 more)

### Community 3 - "forms.ts"
Cohesion: 0.06
Nodes (54): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+46 more)

### Community 4 - "u2-wohnen.ts"
Cohesion: 0.33
Nodes (6): ads, euro(), furniture, rent(), rooms, vocab

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "u9-aemter.ts"
Cohesion: 0.33
Nodes (5): feeHeard(), forms, formWords, service, vocab

### Community 7 - "numbers.ts"
Cohesion: 0.12
Nodes (29): below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES, priceToGerman() (+21 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.06
Nodes (31): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+23 more)

### Community 10 - "StatePanel.tsx"
Cohesion: 0.21
Nodes (11): Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood, MascotShape, Kind (+3 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.11
Nodes (22): zustand, ref_zustand_middleware, ActivityProgress, dailyXp, initialProgress(), nextStreak(), ProgressActions, ProgressData (+14 more)

### Community 13 - "c1-1/helpers.ts"
Cohesion: 0.06
Nodes (53): ref_lib_german_konjunktiv1, Blanks, k1PerfectTable(), k1Table(), lx(), sixForms(), unitC11(), units (+45 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.08
Nodes (40): ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_dialog (+32 more)

### Community 16 - "sounds.test.tsx"
Cohesion: 0.14
Nodes (16): ref_lib_sfx, Blitz(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+8 more)

### Community 17 - "react"
Cohesion: 0.10
Nodes (41): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_lib_answer_check, ref_lib_tts, react, Props, collectNpcLines(), Line (+33 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.13
Nodes (17): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, ref_test_factories, hints, hints, hints, hints (+9 more)

### Community 19 - "b1-1/helpers.ts"
Cohesion: 0.24
Nodes (16): customTable(), k2Table(), passiveTable(), reflexiveAccTable(), Blanks, compound(), futurTable(), k2PastTable() (+8 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.13
Nodes (30): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+22 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "c2-2/helpers.ts"
Cohesion: 0.20
Nodes (14): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+6 more)

### Community 23 - "lessons.ts"
Cohesion: 0.13
Nodes (18): Meta, VocabPathOptions, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS (+10 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.07
Nodes (39): ref_test_contentsuite, content, units, alltag, stadt, wohnen, arbeit, gesundheit (+31 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.13
Nodes (14): content, units, wissenschaft, unterwegs, klima, beziehungen, besitz, wohlbefinden (+6 more)

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

### Community 39 - "playability.tsx"
Cohesion: 0.12
Nodes (17): ref_content_items, ref_content_schema, ref_content_tags, ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_games_types, ref_lib_scoring (+9 more)

### Community 40 - "b2-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, stadt, druck, netz, beziehungen, ernaehrung, studium (+6 more)

### Community 41 - "Conjugation.tsx"
Cohesion: 0.19
Nodes (14): ref_components_ui_umlautkeyboard, ref_content_lessons, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy() (+6 more)

### Community 42 - "u5-familie.ts"
Cohesion: 0.12
Nodes (12): people, phrases, vocab, wer, familie, female, male, relatives (+4 more)

### Community 43 - "a1-1/types.ts"
Cohesion: 0.16
Nodes (18): VocabList, ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent() (+10 more)

### Community 44 - "u1-kollegen.ts"
Cohesion: 0.22
Nodes (6): office, phrases, vocab, opinions, places, vocab

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "u6-reisen.ts"
Cohesion: 0.33
Nodes (5): hotel, travel, vocab, weather, weatherTalk

### Community 47 - "AppLayout.tsx"
Cohesion: 0.07
Nodes (16): ref_components_ui_logo, ref_components_ui_skeleton, ref_components_ui_statpill, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout(), NAV (+8 more)

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

### Community 52 - "builders.ts"
Cohesion: 0.10
Nodes (21): feelings, sport, verbs, vocab, moving, neighbours, pets, vocab (+13 more)

### Community 53 - "u5-kleidung.ts"
Cohesion: 0.33
Nodes (5): clothes, colours, priceHeard(), shop, vocab

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "u7-feste.ts"
Cohesion: 0.29
Nodes (6): dateHeard(), DM, feste, months, phrases, vocab

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
Cohesion: 0.33
Nodes (4): ads, jobs, reflexive, vocab

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
Cohesion: 0.09
Nodes (19): ref_test_playability, content, units, feiern, umwelt, pannen, glueck, unterhaltung (+11 more)

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
Cohesion: 0.15
Nodes (11): adjGap(), adjectives, art, music, tickets, vocab, ads, describing (+3 more)

### Community 83 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "c1-2/index.ts"
Cohesion: 0.11
Nodes (18): earlierLevels, key(), REVIEW_WORDS, content, units, team10, nachhaltigkeit, vortrag (+10 more)

### Community 86 - "u1-hallo.ts"
Cohesion: 0.29
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 87 - "u5-wohnung.ts"
Cohesion: 0.25
Nodes (6): ads, furniture, money, verbs, vocab, wohnung

### Community 89 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FeedbackBanner(), FeedbackKind, ICON, Props, STYLE

### Community 90 - "ProgressBar.tsx"
Cohesion: 0.50
Nodes (3): FILL, ProgressBar(), Props

### Community 91 - "UmlautKeyboard.tsx"
Cohesion: 0.50
Nodes (3): KEYS, Props, UmlautKeyboard()

### Community 92 - "c1-2/helpers.ts"
Cohesion: 0.12
Nodes (16): unitC12(), conflict, team, vocab, farming, sustain, vocab, court (+8 more)

### Community 93 - "u5-wuensche.ts"
Cohesion: 0.13
Nodes (13): unit22(), memories, stages, story, vocab, proverbs, time, vocab (+5 more)

### Community 94 - "a2-2/index.ts"
Cohesion: 0.14
Nodes (13): units, bankUnit, leben, arbeit, lernen, sportUnit, nachbarn, kunst (+5 more)

### Community 95 - "b2-1/helpers.ts"
Cohesion: 0.21
Nodes (11): Blanks, compound(), futur2Table(), k1Table(), konjunktiv1(), SixForms, statePassiveTable(), diet (+3 more)

### Community 96 - "c2-2/index.ts"
Cohesion: 0.20
Nodes (9): units, literatur, recht, engagement, argument, communicationTags, redemittel, stellung (+1 more)

### Community 97 - "table"
Cohesion: 0.18
Nodes (9): table(), bank, insurance, money, vocab, exams, problems, tips (+1 more)

### Community 98 - "memory"
Cohesion: 0.13
Nodes (13): bonds, diversity, vocab, campus, money, vocab, fitness, medicine (+5 more)

### Community 99 - "a2-2/helpers.ts"
Cohesion: 0.20
Nodes (9): Blanks, ENDING_ORDER, reflexiveDativeTable(), SixForms, career, emergency, hospital, office (+1 more)

### Community 100 - "a1-2/helpers.ts"
Cohesion: 0.22
Nodes (9): pastTable(), Pronoun, Question, Turn, unit12(), unitB11(), unitB12(), unitB22() (+1 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (23): ref_content_gametypes, ActivityCard(), Props, DailyGoalCard(), Card(), Props, Chip(), ChipProps (+15 more)

### Community 102 - "path.ts"
Cohesion: 0.33
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 103 - "dictation"
Cohesion: 0.22
Nodes (7): dictation(), eating, shopping, vocab, claims, service, vocab

### Community 104 - "meta"
Cohesion: 0.22
Nodes (7): meta(), decide, stress, vocab, discuss, present, vocab

### Community 105 - "q"
Cohesion: 0.22
Nodes (7): q(), green, mobility, vocab, money, tourism, vocab

### Community 106 - "quizDeEn"
Cohesion: 0.22
Nodes (7): events, phrases, vocab, eras, resistance, vocab, quizDeEn()

### Community 107 - "byDe"
Cohesion: 0.22
Nodes (7): friends, traits, vocab, skills, varieties, vocab, byDe()

### Community 108 - "u3-woher.ts"
Cohesion: 0.14
Nodes (9): countries, country(), languages, vocab, woher, words, freizeit, hobbies (+1 more)

### Community 109 - "u10-beruf.ts"
Cohesion: 0.25
Nodes (6): beruf, cv, PERFEKT, verbs, vocab, year()

### Community 110 - "u1-kunst.ts"
Cohesion: 0.25
Nodes (7): withLesson(), betrieb, grammarTags, kunst, LESSON, urteil, vocab

### Community 111 - "heard"
Cohesion: 0.33
Nodes (6): heard(), calls, contact, letters, phoneHeard(), vocab

### Community 112 - "typed"
Cohesion: 0.33
Nodes (6): typed(), authorities, countries, forms, nat(), vocab

### Community 113 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 114 - "u3-wetter.ts"
Cohesion: 0.29
Nodes (5): colours, phrases, seasons, vocab, weather

### Community 115 - "u2-literatur.ts"
Cohesion: 0.29
Nodes (6): unitC22(), buch, grammarTags, kritik, LESSON, vocab

### Community 116 - "u4-recht.ts"
Cohesion: 0.29
Nodes (6): vocabPath(), gericht, grammarTags, LESSON, verfahren, vocab

### Community 118 - "c2-2/u6-engagement.ts"
Cohesion: 0.29
Nodes (6): withWhy(), gesellschaft, grammarTags, LESSON, verben, vocab

### Community 119 - "u5-staat.ts"
Cohesion: 0.29
Nodes (6): debatte, grammarTags, LESSON, staat, staatPolitik, vocab

### Community 120 - "u7-klima.ts"
Cohesion: 0.29
Nodes (6): grammarTags, handeln, klima, LESSON, vocab, welt

### Community 121 - "a2-1/helpers.ts"
Cohesion: 0.24
Nodes (8): readRound(), setRound(), Blanks, adjectives, announce, bahn, station, vocab

### Community 122 - "u8-nuancen.ts"
Cohesion: 0.29
Nodes (6): grammarTags, LESSON, nuancen, redewendungen, stil, vocab

### Community 123 - "say"
Cohesion: 0.33
Nodes (5): say(), route, traffic, trip, vocab

### Community 124 - "u8-schule.ts"
Cohesion: 0.33
Nodes (5): sepTable(), learning, school, subjects, vocab

### Community 125 - "u7-familie.ts"
Cohesion: 0.33
Nodes (5): reflexiveTable(), family, givers, status, vocab

### Community 126 - "u1-online.ts"
Cohesion: 0.33
Nodes (5): unit21(), actions, devices, vocab, web

### Community 127 - "u2-freizeit.ts"
Cohesion: 0.33
Nodes (5): events, freizeit, plans, times, vocab

### Community 128 - "hint"
Cohesion: 0.33
Nodes (5): hint(), climate, globalisation, nominal, vocab

### Community 129 - "u10-wissenschaft.ts"
Cohesion: 0.33
Nodes (5): unitB21(), alternatives, progress, research, vocab

### Community 130 - "u11-unterwegs.ts"
Cohesion: 0.33
Nodes (4): concession, mobility, travel, vocab

### Community 131 - "u1-stadt.ts"
Cohesion: 0.40
Nodes (4): ref_lib_german_ordinals, places, vocab, ways

### Community 132 - "u3-arbeit.ts"
Cohesion: 0.40
Nodes (4): src_content_a1_2_helpers_activity, jobs, vocab, work

### Community 133 - "sent"
Cohesion: 0.40
Nodes (4): sent(), strengths, vocab, workplace

### Community 134 - "sortItems"
Cohesion: 0.40
Nodes (4): sortItems(), law, media, vocab

### Community 135 - "you"
Cohesion: 0.40
Nodes (4): you(), mishaps, reactions, vocab

### Community 136 - "u4-gesundheit.ts"
Cohesion: 0.40
Nodes (3): body, health, vocab

### Community 137 - "u10-alltag.ts"
Cohesion: 0.40
Nodes (4): chores, people, rules, vocab

### Community 138 - "listen"
Cohesion: 0.40
Nodes (4): environment, materials, vocab, listen()

### Community 141 - "flashcards"
Cohesion: 0.40
Nodes (4): opinions, screen, vocab, flashcards()

### Community 142 - "activity"
Cohesion: 0.40
Nodes (4): clarify, languages, vocab, activity()

### Community 143 - "quizEmoji"
Cohesion: 0.40
Nodes (4): history, memories, vocab, quizEmoji()

### Community 144 - "b2-1/u1-beziehungen.ts"
Cohesion: 0.40
Nodes (4): bonds, phrases, traits, vocab

### Community 145 - "u3-wohlbefinden.ts"
Cohesion: 0.40
Nodes (4): fitness, reasons, stress, vocab

### Community 146 - "u4-kommunikation.ts"
Cohesion: 0.40
Nodes (4): body, guesses, talk, vocab

### Community 147 - "u5-teamgeist.ts"
Cohesion: 0.40
Nodes (4): office, states, team, vocab

### Community 148 - "u6-lebenswege.ts"
Cohesion: 0.40
Nodes (4): education, timing, turns, vocab

### Community 149 - "u7-gesellschaft.ts"
Cohesion: 0.40
Nodes (4): phrases, politics, social, vocab

### Community 150 - "u8-wohnen.ts"
Cohesion: 0.40
Nodes (4): defects, market, rules, vocab

### Community 151 - "u9-medien.ts"
Cohesion: 0.40
Nodes (4): digital, links, news, vocab

### Community 152 - "u7-wohnen.ts"
Cohesion: 0.50
Nodes (3): dream, together, vocab

### Community 153 - "u9-zukunft.ts"
Cohesion: 0.50
Nodes (3): future, tech, vocab

### Community 154 - "u10-heimat.ts"
Cohesion: 0.50
Nodes (3): europe, home, vocab

### Community 155 - "u11-kunst.ts"
Cohesion: 0.50
Nodes (3): reviews, theatre, vocab

### Community 156 - "u12-diskussion.ts"
Cohesion: 0.50
Nodes (3): debate, phrases, vocab

### Community 157 - "b1-2/u2-digital.ts"
Cohesion: 0.50
Nodes (3): computer, help, vocab

### Community 158 - "u3-konsum.ts"
Cohesion: 0.50
Nodes (3): consumer, opinions, vocab

### Community 159 - "u4-weiterbildung.ts"
Cohesion: 0.50
Nodes (3): courses, recommend, vocab

### Community 160 - "u5-regeln.ts"
Cohesion: 0.50
Nodes (3): phrases, rules, vocab

### Community 161 - "b1-2/u6-engagement.ts"
Cohesion: 0.50
Nodes (3): help, phrases, vocab

### Community 162 - "u7-politik.ts"
Cohesion: 0.50
Nodes (3): debate, politics, vocab

### Community 163 - "u1-finanzen.ts"
Cohesion: 0.50
Nodes (3): debts, payments, vocab

### Community 164 - "u2-gesundheit.ts"
Cohesion: 0.50
Nodes (3): food, medicine, vocab

### Community 165 - "u5-stadt.ts"
Cohesion: 0.50
Nodes (3): city, village, vocab

### Community 166 - "u6-literatur.ts"
Cohesion: 0.50
Nodes (3): books, vocab, writing

### Community 167 - "u7-kino.ts"
Cohesion: 0.50
Nodes (3): art, film, vocab

### Community 168 - "u8-geschaeft.ts"
Cohesion: 0.50
Nodes (3): business, culture, vocab

## Knowledge Gaps
- **937 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+932 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1063 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `controls.test.tsx`, `ui.test.tsx`, `playability.tsx`, `Conjugation.tsx`, `StatePanel.tsx`, `Button.tsx`, `package.json`, `a1-1/types.ts`, `@testing-library/react`, `AppLayout.tsx`, `sounds.test.tsx`, `PlayPage.tsx`, `Clock.tsx`, `FeedbackBanner.tsx`, `Icon.tsx`, `Tabs.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Why does `README (Deutsch Spielplatz)` connect `README (Deutsch Spielplatz)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Deployment doc`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `C2.1 – syllabus research, coverage and overlap with A1.1–C1.2`, `Architecture doc`, `Code graph (Graphify)`, `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `C2.2 – syllabus research, coverage and overlap with A1.1–C2.1`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `market/logic.ts`, `controls.test.tsx`, `ui.test.tsx`, `playability.tsx`, `Conjugation.tsx`, `a1-1/types.ts`, `package.json`, `AppLayout.tsx`, `sounds.test.tsx`, `react`, `setup.ts`, `Clock.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _937 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UnitContent` be split into smaller, more focused modules?**
  _Cohesion score 0.08106219426974144 - nodes in this community are weakly interconnected._
- **Should `forms.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.058653846153846154 - nodes in this community are weakly interconnected._
- **Should `B1.1 coverage and research doc` be split into smaller, more focused modules?**
  _Cohesion score 0.13970588235294118 - nodes in this community are weakly interconnected._