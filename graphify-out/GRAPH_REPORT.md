# Graph Report - lingoat.games  (2026-10-25)

## Corpus Check
- 463 files · ~482,112 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 5, .ico 1, .properties 1)

## Summary
- 2899 nodes · 8150 edges · 116 communities (107 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 111 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bd8a86cb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- c1-1/index.ts
- UnitContent
- manifest.json
- conjugation.ts
- heard
- B1.1 coverage and research doc
- playability.tsx
- numbers.ts
- schema.ts
- @testing-library/react
- a1-2/index.ts
- package.json
- progressStore.ts
- sortItems
- devDependencies
- PlayPage.tsx
- Blitz.test.tsx
- react
- content/hints.ts
- build.mjs
- e2e/helpers.ts
- compilerOptions
- customTable
- lessons.ts
- Clock.tsx
- a1-1/index.ts
- b2-1/index.ts
- compilerOptions
- rng.ts
- Memory.tsx
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- Market.tsx
- scripts
- u8-nuancen.ts
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- StatePanel.tsx
- b2-2/index.ts
- router.tsx
- Icon.tsx
- fetch.ts
- meta
- dependencies
- vocabList
- c1-2/index.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- appIcons.test.ts
- app-icons.md
- srs.ts
- c2-2/helpers.ts
- i18n/index.ts
- graphify reference: query, path, explain
- a1-1/types.ts
- u5-familie.ts
- e2e/tsconfig.json
- lib.ts
- upload.ts
- graphify reference: add a URL and watch a folder
- Spell.test.tsx
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- Gapfill.test.tsx
- README (lingoat)
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- filters.ts
- Architecture doc
- q
- worker/index.test.ts
- Conjugation.tsx
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- forms.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- gap
- Button.tsx
- u3-woher.ts
- a2-2/index.ts
- images/index.ts
- builders.ts
- b1-2/index.ts
- u8-einkaufen.ts
- path.ts
- Tabs.tsx
- u1-hallo.ts
- nouns.ts
- items.ts
- a2-1/index.ts
- ui.test.tsx
- DailyGoalCard.tsx
- u6-freizeit.ts
- articles.ts
- UmlautKeyboard.tsx
- u2-literatur.ts
- u4-recht.ts
- vitest
- c2-2/index.ts
- u5-staat.ts
- u7-klima.ts
- konjunktiv1.ts
- c2-2/u6-engagement.ts
- tf

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
- `Grammar hints` --references--> `main()`  [INFERRED]
  docs/b1-2-coverage.md → scripts/images/fetch.ts
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1` --references--> `main()`  [INFERRED]
  docs/c1-2-coverage.md → scripts/images/fetch.ts
- `One-time setup (by hand)` --references--> `main()`  [INFERRED]
  docs/code-quality.md → scripts/images/fetch.ts
- `Repo settings` --references--> `main()`  [INFERRED]
  docs/graphify.md → scripts/images/fetch.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (116 total, 9 thin omitted)

### Community 0 - "c1-1/index.ts"
Cohesion: 0.07
Nodes (33): sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, wirtschaft, gesellschaft, zeit (+25 more)

### Community 1 - "UnitContent"
Cohesion: 0.10
Nodes (31): UnitContent, dictation(), say(), sw(), unitC21(), style, talk, vocab (+23 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "heard"
Cohesion: 0.05
Nodes (50): ref_lib_german_numbers, ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), chores, people, rules, vocab (+42 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.16
Nodes (14): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, B1.1 coverage and research doc, CEFR B1 global scale (Council of Europe), Goethe-Zertifikat B1 and word list, Menschen B1 (Hueber) (+6 more)

### Community 6 - "playability.tsx"
Cohesion: 0.12
Nodes (17): ref_content_items, ref_content_schema, ref_content_tags, ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_games_types, ref_lib_scoring (+9 more)

### Community 7 - "numbers.ts"
Cohesion: 0.11
Nodes (30): year(), below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES (+22 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.08
Nodes (24): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+16 more)

### Community 10 - "a1-2/index.ts"
Cohesion: 0.14
Nodes (13): units, vocab, sortitTranslations, alltag, stadt, wohnen, arbeit, gesundheit (+5 more)

### Community 11 - "package.json"
Cohesion: 0.06
Nodes (34): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+26 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.11
Nodes (22): zustand, ref_zustand_middleware, ActivityProgress, dailyXp, initialProgress(), nextStreak(), ProgressActions, ProgressData (+14 more)

### Community 13 - "sortItems"
Cohesion: 0.06
Nodes (43): sortItems(), typed(), authorities, countries, forms, nat(), vocab, lx() (+35 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.07
Nodes (43): ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_dialog (+35 more)

### Community 16 - "Blitz.test.tsx"
Cohesion: 0.39
Nodes (7): Blitz(), answerRight(), answerWrong(), config, prompt(), statements, truth()

### Community 17 - "react"
Cohesion: 0.10
Nodes (42): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_components_wordimage, ref_lib_tts, react, collectNpcLines(), latestNpcText() (+34 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.14
Nodes (18): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, ref_test_factories, hints, hints, hints, hints (+10 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.07
Nodes (38): PAGES, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+30 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "customTable"
Cohesion: 0.11
Nodes (27): Grammar, customTable(), reflexiveAccTable(), reflexiveDativeTable(), compound(), futurTable(), k2PastTable(), passiveModalTable() (+19 more)

### Community 23 - "lessons.ts"
Cohesion: 0.13
Nodes (18): Meta, VocabPathOptions, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS (+10 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a1-1/index.ts"
Cohesion: 0.08
Nodes (46): PLAYED, PLAYED, ref_test_contentsuite, content, units, vocab, content, content (+38 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, wissenschaft, unterwegs, klima, beziehungen, besitz (+7 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "Memory.tsx"
Cohesion: 0.10
Nodes (23): ref_content_lessons, ref_lib_sfx, ref_test_render, ref_test_speech, Dialogue(), config, BACK, config (+15 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.21
Nodes (11): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT (+3 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.14
Nodes (7): num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen

### Community 34 - "Market.tsx"
Cohesion: 0.24
Nodes (10): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market() (+2 more)

### Community 35 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, check, deploy, dev, format, format:check, icons (+9 more)

### Community 36 - "u8-nuancen.ts"
Cohesion: 0.25
Nodes (7): withWhy(), grammarTags, LESSON, nuancen, redewendungen, stil, vocab

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
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, stadt, druck, netz, beziehungen, ernaehrung (+7 more)

### Community 41 - "router.tsx"
Cohesion: 0.07
Nodes (15): ref_components_ui_logo, ref_components_ui_skeleton, ref_components_ui_statpill, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout(), NAV (+7 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.10
Nodes (24): FeedbackBanner(), FeedbackKind, Props, STYLE, Icon(), src_components_ui_icon_iconname, Props, IconButton() (+16 more)

### Community 43 - "fetch.ts"
Cohesion: 0.10
Nodes (29): Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify), Locally, Repo settings, The workflow, ref_node_crypto, sharp (+21 more)

### Community 44 - "meta"
Cohesion: 0.05
Nodes (71): meta(), sent(), unitB11(), environment, materials, vocab, luck, news (+63 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "vocabList"
Cohesion: 0.05
Nodes (47): unit22(), bank, insurance, money, vocab, memories, stages, story (+39 more)

### Community 47 - "c1-2/index.ts"
Cohesion: 0.10
Nodes (20): earlierLevels, key(), REVIEW_WORDS, content, units, vocab, sortitTranslations, team10 (+12 more)

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

### Community 58 - "a1-1/types.ts"
Cohesion: 0.13
Nodes (18): VocabList, ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent() (+10 more)

### Community 59 - "u5-familie.ts"
Cohesion: 0.12
Nodes (12): people, phrases, vocab, wer, familie, female, male, relatives (+4 more)

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "lib.ts"
Cohesion: 0.17
Nodes (21): Storage and delivery, The pipeline (`scripts/images/`), Where the photos come from, Word photos, cleanQuery(), cropsWell(), isBlocked(), isCandidate() (+13 more)

### Community 62 - "upload.ts"
Cohesion: 0.16
Nodes (18): aws4fetch, ref_node_util, bucketUrl(), CACHE_CONTROL, CONTENT_TYPE, decodeXml(), OBJECT_NAME, parseList() (+10 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "Spell.test.tsx"
Cohesion: 0.13
Nodes (13): In the app, ref_content_images, ref_lib_useimagemanifest, Props, manifest, TileProps, WordImage(), dictation (+5 more)

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 73 - "Gapfill.test.tsx"
Cohesion: 0.14
Nodes (13): ref_lib_german_nouns, pick(), cheese, chips, nouns, typed, ANSWER, config (+5 more)

### Community 74 - "README (lingoat)"
Cohesion: 0.10
Nodes (20): Procedure: add a new game engine, Game engine contract (GameProps, useSequence, GameFrame), ProgressRepository (local-first storage seam), Answer sounds (sfx.ts), Leitner SRS review (srs.ts), C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen (+12 more)

### Community 75 - "controls.test.tsx"
Cohesion: 0.13
Nodes (12): Props, Segment(), Skeleton(), Props, TextField(), ICON, Props, STYLE (+4 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.18
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 79 - "Architecture doc"
Cohesion: 0.15
Nodes (19): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Integrity between levels (no repeated vocab) (+11 more)

### Community 80 - "q"
Cohesion: 0.05
Nodes (45): q(), events, phrases, vocab, fitness, health, vocab, unitB22() (+37 more)

### Community 81 - "worker/index.test.ts"
Cohesion: 0.23
Nodes (7): CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), run()

### Community 82 - "Conjugation.tsx"
Cohesion: 0.32
Nodes (9): ref_lib_answer_check, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), gradeTable() (+1 more)

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
Cohesion: 0.25
Nodes (7): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 87 - "gap"
Cohesion: 0.05
Nodes (77): ref_lib_german_konjunktiv1, gap(), pastTable(), Pronoun, Question, readRound(), sepTable(), setRound() (+69 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 90 - "a2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, bankUnit, leben, arbeit, lernen, sportUnit (+7 more)

### Community 91 - "images/index.ts"
Cohesion: 0.31
Nodes (8): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX, LEVELS

### Community 92 - "builders.ts"
Cohesion: 0.08
Nodes (46): activity(), byDe(), memory(), quizDeEn(), QuizQuestion, slug(), vocab, VocabRow (+38 more)

### Community 93 - "b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen, digital (+7 more)

### Community 94 - "u8-einkaufen.ts"
Cohesion: 0.25
Nodes (5): einkaufen, food, genderItems, shopping, vocab

### Community 95 - "path.ts"
Cohesion: 0.33
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 96 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 97 - "u1-hallo.ts"
Cohesion: 0.29
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 98 - "nouns.ts"
Cohesion: 0.22
Nodes (16): Gender, bareNoun(), buildNounIndex(), findGapNoun(), GapNoun, GENDER, isCapitalised(), isDeterminer() (+8 more)

### Community 99 - "items.ts"
Cohesion: 0.48
Nodes (5): getItems(), itemCount(), ITEMS_KEY, ItemsKey, withItems()

### Community 100 - "a2-1/index.ts"
Cohesion: 0.10
Nodes (13): ref_test_playability, units, vocab, sortitTranslations, beruf, online, freizeit, wetter (+5 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.09
Nodes (22): ref_content_gametypes, ref_games_shared_gameframe, ActivityCard(), Props, Card(), Props, Chip(), ChipProps (+14 more)

### Community 102 - "DailyGoalCard.tsx"
Cohesion: 0.50
Nodes (3): DailyGoalCard(), ProgressRing(), Props

### Community 103 - "u6-freizeit.ts"
Cohesion: 0.40
Nodes (3): freizeit, hobbies, vocab

### Community 104 - "articles.ts"
Cohesion: 0.18
Nodes (14): DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, Case, DEFINITE, definiteArticle() (+6 more)

### Community 105 - "UmlautKeyboard.tsx"
Cohesion: 0.50
Nodes (3): KEYS, Props, UmlautKeyboard()

### Community 115 - "u2-literatur.ts"
Cohesion: 0.29
Nodes (6): buch, grammarTags, kritik, LESSON, literatur, vocab

### Community 116 - "u4-recht.ts"
Cohesion: 0.14
Nodes (13): unitC22(), vocabPath(), gericht, grammarTags, LESSON, recht, verfahren, vocab (+5 more)

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "c2-2/index.ts"
Cohesion: 0.17
Nodes (10): content, units, vocab, sortitTranslations, betrieb, grammarTags, kunst, LESSON (+2 more)

### Community 119 - "u5-staat.ts"
Cohesion: 0.29
Nodes (6): debatte, grammarTags, LESSON, staat, staatPolitik, vocab

### Community 120 - "u7-klima.ts"
Cohesion: 0.25
Nodes (7): withLesson(), grammarTags, handeln, klima, LESSON, vocab, welt

### Community 121 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 125 - "c2-2/u6-engagement.ts"
Cohesion: 0.29
Nodes (6): engagement, gesellschaft, grammarTags, LESSON, verben, vocab

### Community 129 - "tf"
Cohesion: 0.04
Nodes (57): tf(), you(), mishaps, reactions, vocab, unitB21(), alternatives, progress (+49 more)

## Knowledge Gaps
- **1494 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1489 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1653 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `playability.tsx`, `@testing-library/react`, `package.json`, `PlayPage.tsx`, `Clock.tsx`, `Memory.tsx`, `Sentence.tsx`, `Market.tsx`, `StatePanel.tsx`, `router.tsx`, `Icon.tsx`, `a1-1/types.ts`, `Spell.test.tsx`, `Gapfill.test.tsx`, `controls.test.tsx`, `Conjugation.tsx`, `Button.tsx`, `Tabs.tsx`, `ui.test.tsx`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `Spell.test.tsx`, `Market.tsx`, `ui.test.tsx`, `playability.tsx`, `router.tsx`, `Gapfill.test.tsx`, `controls.test.tsx`, `package.json`, `PlayPage.tsx`, `Blitz.test.tsx`, `react`, `Conjugation.tsx`, `vitest`, `Clock.tsx`, `a1-1/types.ts`, `Memory.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `page()` connect `e2e/helpers.ts` to `a1-1/index.ts`, `images/index.ts`, `router.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1494 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `c1-1/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06504065040650407 - nodes in this community are weakly interconnected._
- **Should `UnitContent` be split into smaller, more focused modules?**
  _Cohesion score 0.09615384615384616 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._