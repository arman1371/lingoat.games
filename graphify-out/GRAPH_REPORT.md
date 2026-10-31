# Graph Report - lingoat.games  (2026-10-31)

## Corpus Check
- 564 files · ~604,913 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 3471 nodes · 9578 edges · 120 communities (111 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 159 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ecc5990b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @testing-library/react
- meta
- manifest.json
- german/conjugation.ts
- a2-2/helpers.ts
- B1.1 coverage and research doc
- tf
- german/numbers.ts
- content/schema.ts
- AppLayout.tsx
- vocabList
- package.json
- progressStore.ts
- grammar.test.ts
- devDependencies
- PlayPage.tsx
- content/hints.ts
- react
- builders.ts
- build.mjs
- e2e/helpers.ts
- compilerOptions
- ActivityCard.tsx
- lessons.ts
- Clock.tsx
- a2-1/index.ts
- b2-1/index.ts
- compilerOptions
- playability.tsx
- rng.ts
- StatePanel.tsx
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- UnitContent
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- Memory.tsx
- c1-2/index.ts
- c2-1/index.ts
- Icon.tsx
- u4-famille.ts
- heard
- dependencies
- a2-2/index.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- sent
- appIcons.test.ts
- app-icons.md
- srs.ts
- u8-temps.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- u3-nombres.ts
- e2e/tsconfig.json
- b1-1/index.ts
- upload.ts
- graphify reference: add a URL and watch a folder
- wordPhotos.ts
- .prettierrc.json
- tsconfig.json
- vite-env.d.ts
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- ref_i18n
- filters.ts
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- progressTransfer.ts
- README (lingoat)
- market/logic.ts
- worker/index.ts
- Conjugation.tsx
- fr-a1-1/index.ts
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- c2-2/helpers.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- Button.tsx
- app.tsx
- a1-1/index.ts
- build.ts
- french/conjugation.ts
- u7-ville.ts
- fetch.ts
- lib/report.ts
- nouns.ts
- images/index.ts
- ui.test.tsx
- a2-2.ts
- turnstile.ts
- b1-2/index.ts
- ReportButton.tsx
- forms.ts
- q
- u6-table.ts
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- sources.ts
- u2-presenter.ts
- u5-loisirs.ts
- vitest
- articles.ts
- vite.config.ts
- FeedbackBanner.tsx
- worker/report.test.ts
- u1-bonjour.ts
- frTable
- main
- Grammar lesson sources

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 164 edges
2. `activity()` - 151 edges
3. `vocabList()` - 140 edges
4. `heard()` - 136 edges
5. `byDe()` - 136 edges
6. `meta()` - 134 edges
7. `gap()` - 133 edges
8. `q()` - 132 edges
9. `tf()` - 132 edges
10. `say()` - 132 edges

## Surprising Connections (you probably didn't know these)
- `Grammar hints` --references--> `main()`  [INFERRED]
  docs/b1-2-coverage.md → scripts/images/fetch.ts
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `One-time setup (by hand)` --references--> `main()`  [INFERRED]
  docs/code-quality.md → scripts/images/fetch.ts
- `Pinned install` --references--> `main()`  [INFERRED]
  docs/graphify.md → scripts/images/fetch.ts
- `Repo settings` --references--> `main()`  [INFERRED]
  docs/graphify.md → scripts/images/fetch.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (120 total, 9 thin omitted)

### Community 0 - "@testing-library/react"
Cohesion: 0.05
Nodes (50): In the app, ref_lib_german_nouns, ref_lib_useimagemanifest, ref_lib_wordphotos, ref_test_render, ref_test_speech, @testing-library/react, @testing-library/user-event (+42 more)

### Community 1 - "meta"
Cohesion: 0.04
Nodes (63): meta(), you(), unit22(), bank, insurance, money, vocab, memories (+55 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "german/conjugation.ts"
Cohesion: 0.13
Nodes (23): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), Forms, IRREGULAR, konjunktiv2, MIXED_PRETERITE (+15 more)

### Community 4 - "a2-2/helpers.ts"
Cohesion: 0.05
Nodes (78): customTable(), pastTable(), Pronoun, Question, readRound(), sepTable(), setRound(), table() (+70 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "tf"
Cohesion: 0.06
Nodes (48): sortItems(), tf(), typed(), authorities, countries, forms, nat(), vocab (+40 more)

### Community 7 - "german/numbers.ts"
Cohesion: 0.07
Nodes (48): year(), below100(), below1000(), digitsToFrench(), LETTER_NAMES_FR, numberToFrench(), ONES, priceToFrench() (+40 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.04
Nodes (62): ref_test_factories, ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent() (+54 more)

### Community 9 - "AppLayout.tsx"
Cohesion: 0.06
Nodes (23): ref_components_ui_logo, ref_components_ui_statpill, ref_content_languages, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout(), NAV (+15 more)

### Community 10 - "vocabList"
Cohesion: 0.07
Nodes (37): gap(), unitB11(), events, phrases, vocab, environment, materials, vocab (+29 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.10
Nodes (27): zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress(), nextStreak() (+19 more)

### Community 13 - "grammar.test.ts"
Cohesion: 0.06
Nodes (38): ref_lib_german_konjunktiv1, A12_TOPICS, A21_TOPICS, B11_TOPICS, B12_TOPICS, B21_TOPICS, sein, werden (+30 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.04
Nodes (71): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_fulllessonlink, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar (+63 more)

### Community 16 - "content/hints.ts"
Cohesion: 0.11
Nodes (21): ref_lib_german_adjectives, ref_lib_german_forms, hints, hints, hints, hints, adjectiveHint(), ENDINGS (+13 more)

### Community 17 - "react"
Cohesion: 0.09
Nodes (46): What the issue contains, ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_components_wordimage, ref_lib_answer_check, ref_lib_tts, react (+38 more)

### Community 18 - "builders.ts"
Cohesion: 0.03
Nodes (111): byes, feelings, hallo, hellos, polite, vocab, people, phrases (+103 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.06
Nodes (48): PAGES, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+40 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "ActivityCard.tsx"
Cohesion: 0.13
Nodes (14): ref_content_gametypes, ActivityCard(), Props, Chip(), ChipProps, Tag(), GameTile(), SIZES (+6 more)

### Community 23 - "lessons.ts"
Cohesion: 0.13
Nodes (18): Meta, VocabPathOptions, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS (+10 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.20
Nodes (14): ref_lib_french_time, ref_lib_german_time, ref_lib_rng, ref_lib_spoken, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime() (+6 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.05
Nodes (51): ref_test_contentsuite, ref_test_playability, content, units, vocab, alltag, stadt, wohnen (+43 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.04
Nodes (51): sortitTranslations, sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, wissenschaft, unterwegs (+43 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "playability.tsx"
Cohesion: 0.20
Nodes (11): ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_games_types, ref_lib_scoring, cont(), describePlayability(), prompt() (+3 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "StatePanel.tsx"
Cohesion: 0.21
Nodes (11): Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood, MascotShape, Kind (+3 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.21
Nodes (11): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT (+3 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.14
Nodes (7): num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen

### Community 34 - "lib.ts"
Cohesion: 0.20
Nodes (18): The pipeline (`scripts/images/`), cleanQuery(), cropsWell(), isBlocked(), isCandidate(), pagePath(), pickHit(), PixabayHit (+10 more)

### Community 35 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, check, deploy, dev, format, format:check, icons (+9 more)

### Community 36 - "UnitContent"
Cohesion: 0.08
Nodes (40): UnitContent, listen(), memory(), Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table() (+32 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "Memory.tsx"
Cohesion: 0.15
Nodes (17): ref_lib_sfx, Blitz(), buildColumns(), isMatch(), MemoryCard, MemoryColumns, ColumnProps, Memory() (+9 more)

### Community 40 - "c1-2/index.ts"
Cohesion: 0.10
Nodes (19): earlierLevels, key(), REVIEW_WORDS, content, units, vocab, sortitTranslations, team10 (+11 more)

### Community 41 - "c2-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, vocab, sortitTranslations, sprache, arbeit, wirtschaft, digitalUnit (+5 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.10
Nodes (23): src_components_ui_icon_iconname, Props, IconButton(), Props, Size, SIZES, Variant, VARIANTS (+15 more)

### Community 43 - "u4-famille.ts"
Cohesion: 0.18
Nodes (10): adjectives, CEST_CARDS, emojiFamily, famille, family, meaning(), PAIRS, phrases (+2 more)

### Community 44 - "heard"
Cohesion: 0.04
Nodes (53): ref_lib_german_numbers, ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), chores, people, rules, vocab (+45 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "a2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, bankUnit, leben, arbeit, lernen, sportUnit (+7 more)

### Community 47 - "guard.ts"
Cohesion: 0.13
Nodes (11): Claim, dayOf(), DEFAULT_LIMITS, Entry, GuardCore, GuardLimits, ReportGuard, StateLike (+3 more)

### Community 48 - "answer-check.ts"
Cohesion: 0.39
Nodes (10): AnswerVerdict, checkAnswer(), checkNumeric(), foldUmlauts(), normalize(), normalizeDigits(), parsePriceToCents(), stripAccents() (+2 more)

### Community 49 - "sfx.ts"
Cohesion: 0.29
Nodes (7): AudioContextCtor, Note, playSfx(), resetSfx(), SFX, SfxKind, sfxSupported()

### Community 50 - "tts.test.ts"
Cohesion: 0.32
Nodes (8): pickGermanVoice(), pickVoice(), setSpeechLanguage(), speak(), SpeakOptions, stopSpeaking(), Utterance, ttsSupported()

### Community 51 - "sent"
Cohesion: 0.08
Nodes (43): dictation(), sent(), quizDeEn(), Blanks, k1PerfectTable(), k1Table(), lx(), sixForms() (+35 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "u8-temps.ts"
Cohesion: 0.18
Nodes (8): clothes, days, months, pictureQuiz, POSITION_CARDS, SORT_CARDS, vocab, weather

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "worker/report.ts"
Cohesion: 0.25
Nodes (15): addPlusOne(), createIssue(), fail(), get(), githubHeaders(), GuardStub, handleReport(), issueBody() (+7 more)

### Community 59 - "u3-nombres.ts"
Cohesion: 0.15
Nodes (6): num(), NUMBERS, numberVocab, numCard(), vocab, words

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "b1-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, feiern, umwelt, pannen, glueck, unterhaltung (+7 more)

### Community 62 - "upload.ts"
Cohesion: 0.16
Nodes (18): aws4fetch, ref_node_util, bucketUrl(), CACHE_CONTROL, CONTENT_TYPE, decodeXml(), OBJECT_NAME, parseList() (+10 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "wordPhotos.ts"
Cohesion: 0.17
Nodes (13): ref_content_images, ImageManifestContext, preloadImageManifest(), useImageManifest(), buildWordPhotoIndex(), key(), photoIdFor(), PhotoSource (+5 more)

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 73 - "ref_i18n"
Cohesion: 0.14
Nodes (16): ref_content_grammar, ref_content_lessons, ref_games_shared_hints, ref_games_shared_mistakehint, ref_i18n, FullLessonLink(), GrammarLesson(), LessonMeta() (+8 more)

### Community 74 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 75 - "controls.test.tsx"
Cohesion: 0.14
Nodes (14): ChoiceCards(), Props, Props, Segment(), Skeleton(), panelId(), Props, tabId() (+6 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.18
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "progressTransfer.ts"
Cohesion: 0.10
Nodes (29): applyImport(), applyImportAll(), buildExport(), count, day, exportFileName(), id, ImportErrorCode (+21 more)

### Community 79 - "README (lingoat)"
Cohesion: 0.08
Nodes (34): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine (+26 more)

### Community 80 - "market/logic.ts"
Cohesion: 0.31
Nodes (8): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market()

### Community 81 - "worker/index.ts"
Cohesion: 0.20
Nodes (10): REPORT_PATH, CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env() (+2 more)

### Community 82 - "Conjugation.tsx"
Cohesion: 0.32
Nodes (10): ref_lib_french_conjugation, ref_lib_persons, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), Forms (+2 more)

### Community 83 - "fr-a1-1/index.ts"
Cohesion: 0.24
Nodes (6): ref_content_items, ref_content_tags, content, units, nombres, temps

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "c2-2/helpers.ts"
Cohesion: 0.06
Nodes (53): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+45 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources (+2 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 90 - "app.tsx"
Cohesion: 0.06
Nodes (29): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+21 more)

### Community 91 - "a1-1/index.ts"
Cohesion: 0.05
Nodes (29): units, vocab, countries, country(), languages, vocab, woher, words (+21 more)

### Community 92 - "build.ts"
Cohesion: 0.28
Nodes (21): ref_lib_german_articles, ref_lib_german_conjugation, A11_TOPICS, CASES, GENDERS, articleTable(), CASES, compare() (+13 more)

### Community 93 - "french/conjugation.ts"
Cohesion: 0.14
Nodes (20): conjugateFr(), ER_ENDINGS, ER_STRONG_STEM, forms(), FrenchForms, IR_ENDINGS, IRREGULAR, nousStem() (+12 more)

### Community 94 - "u7-ville.ts"
Cohesion: 0.20
Nodes (9): phrases, pictureQuiz, places, route, SORT_CARDS, ville, vocab, where (+1 more)

### Community 95 - "fetch.ts"
Cohesion: 0.12
Nodes (22): ref_node_crypto, sharp, apiTurn, byId(), CACHE, download(), downloadTurn, downloadWithRetry() (+14 more)

### Community 97 - "lib/report.ts"
Cohesion: 0.20
Nodes (14): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_TYPE_META, REPORT_TYPES (+6 more)

### Community 98 - "nouns.ts"
Cohesion: 0.24
Nodes (16): bareNoun(), buildNounIndex(), CASE_TAGS, drillsCase(), findGapNoun(), GENDER, isCapitalised(), isDeterminer() (+8 more)

### Community 99 - "images/index.ts"
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (17): ref_games_shared_gameframe, DailyGoalCard(), Card(), Props, COLORS, Confetti(), Logo(), MARK (+9 more)

### Community 102 - "a2-2.ts"
Cohesion: 0.29
Nodes (7): superlativeRows(), A22_TOPICS, adjectivePhrases(), CASES, GENDERS, K2_VERBS, datPlural()

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen, digital (+7 more)

### Community 105 - "ReportButton.tsx"
Cohesion: 0.11
Nodes (15): How it is protected, Report a problem, Setup (once, in the Cloudflare and GitHub dashboards), Tests, What the player sees, ref_components_ui_dialog, ref_components_ui_iconbutton, ref_lib_report (+7 more)

### Community 107 - "forms.ts"
Cohesion: 0.16
Nodes (16): adjectiveEnding(), row(), adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms() (+8 more)

### Community 108 - "q"
Cohesion: 0.05
Nodes (46): q(), say(), opinions, screen, vocab, unitB22(), green, mobility (+38 more)

### Community 109 - "u6-table.ts"
Cohesion: 0.18
Nodes (9): ref_lib_french_numbers, drinksMeals, foods, phrases, pictureQuiz, quantities, SORT_CARDS, table (+1 more)

### Community 110 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 114 - "sources.ts"
Cohesion: 0.12
Nodes (6): B1_SOURCES, B2_SOURCES, C1_SOURCES, Source, SOURCES, C2_SOURCES

### Community 115 - "u2-presenter.ts"
Cohesion: 0.17
Nodes (11): Table, unitFr(), countries, GENDER_CARDS, jobs, nationalities, pairs, phrases (+3 more)

### Community 116 - "u5-loisirs.ts"
Cohesion: 0.22
Nodes (8): activities, likes, loisirs, phrases, pictureQuiz, SORT_CARDS, sports, vocab

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "articles.ts"
Cohesion: 0.16
Nodes (17): DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, Case, DEFINITE, definiteArticle() (+9 more)

### Community 119 - "vite.config.ts"
Cohesion: 0.25
Nodes (5): ref_node_fs, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 120 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FEEDBACK_TINT, FeedbackBanner(), FeedbackKind, Props, STYLE

### Community 123 - "worker/report.test.ts"
Cohesion: 0.29
Nodes (3): limit(), Call, goodBody

### Community 125 - "u1-bonjour.ts"
Cohesion: 0.22
Nodes (7): bonjour, byes, feelings, hellos, manners, polite, vocab

### Community 128 - "frTable"
Cohesion: 0.33
Nodes (5): Build plan, French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read), frTable()

### Community 134 - "main"
Cohesion: 0.14
Nodes (15): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources, Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify) (+7 more)

### Community 135 - "Grammar lesson sources"
Cohesion: 0.22
Nodes (8): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), Grammar lesson sources, Limits of the research

## Knowledge Gaps
- **1659 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1654 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1892 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `@testing-library/react`, `content/schema.ts`, `AppLayout.tsx`, `package.json`, `PlayPage.tsx`, `ActivityCard.tsx`, `Clock.tsx`, `playability.tsx`, `StatePanel.tsx`, `Sentence.tsx`, `Memory.tsx`, `Icon.tsx`, `wordPhotos.ts`, `ref_i18n`, `controls.test.tsx`, `Conjugation.tsx`, `Button.tsx`, `app.tsx`, `ui.test.tsx`, `ReportButton.tsx`, `FeedbackBanner.tsx`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `zod` connect `app.tsx` to `content/schema.ts`, `package.json`, `grammar.test.ts`, `progressTransfer.ts`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `ui.test.tsx`, `Memory.tsx`, `content/schema.ts`, `ref_i18n`, `AppLayout.tsx`, `package.json`, `ReportButton.tsx`, `controls.test.tsx`, `PlayPage.tsx`, `react`, `Conjugation.tsx`, `vitest`, `Clock.tsx`, `app.tsx`, `playability.tsx`, `fetch.ts`, `Sentence.tsx`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1659 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `@testing-library/react` be split into smaller, more focused modules?**
  _Cohesion score 0.04590892262125139 - nodes in this community are weakly interconnected._
- **Should `meta` be split into smaller, more focused modules?**
  _Cohesion score 0.03759398496240601 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._