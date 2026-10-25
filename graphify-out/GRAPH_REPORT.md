# Graph Report - lingoat.games  (2026-10-25)

## Corpus Check
- 482 files · ~497,495 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 3065 nodes · 8481 edges · 114 communities (105 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 134 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3cde622d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- c1-2/index.ts
- activity
- manifest.json
- forms.ts
- heard
- B1.1 coverage and research doc
- ReportButton.tsx
- numbers.ts
- schema.ts
- app.tsx
- a2-1/index.ts
- package.json
- progressStore.ts
- q
- devDependencies
- PlayPage.tsx
- b1-1/index.ts
- Gapfill.tsx
- content/hints.ts
- build.mjs
- e2e/helpers.ts
- compilerOptions
- c2-1/index.ts
- lessons.ts
- Clock.tsx
- label
- b2-1/index.ts
- compilerOptions
- wordPhotos.ts
- rng.ts
- @testing-library/react
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- Market.tsx
- scripts
- builders.ts
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- StatePanel.tsx
- a2-2/helpers.ts
- router.tsx
- Icon.tsx
- fetch.ts
- meta
- dependencies
- levels.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- appIcons.test.ts
- app-icons.md
- srs.ts
- c2-2/index.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- u2-wer.ts
- e2e/tsconfig.json
- vocabList
- upload.ts
- graphify reference: add a URL and watch a folder
- WordImage.tsx
- .prettierrc.json
- tsconfig.json
- vite-env.d.ts
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- c2-2/helpers.ts
- filters.ts
- react
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- progressTransfer.ts
- Deployment doc
- byDe
- worker/index.ts
- ref_lib_german_conjugation
- playability.tsx
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- ActivityCard.tsx
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- UnitContent
- Button.tsx
- u3-woher.ts
- a2-2/index.ts
- ref_content_schema
- b2-2/index.ts
- b1-2/index.ts
- u8-einkaufen.ts
- a1-1/index.ts
- Tabs.tsx
- lib/report.ts
- nouns.ts
- u5-familie.ts
- Dialogue.tsx
- ui.test.tsx
- worker/report.test.ts
- turnstile.ts
- README (lingoat)
- vite.config.ts
- Architecture doc
- path.ts
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- u1-hallo.ts
- vitest
- say

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

## Communities (114 total, 9 thin omitted)

### Community 0 - "c1-2/index.ts"
Cohesion: 0.12
Nodes (16): content, units, vocab, sortitTranslations, team10, nachhaltigkeit, vortrag, finanzen (+8 more)

### Community 1 - "activity"
Cohesion: 0.05
Nodes (79): gap(), sent(), you(), events, phrases, vocab, activity(), quizDeEn() (+71 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "forms.ts"
Cohesion: 0.05
Nodes (57): ref_lib_answer_check, adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row() (+49 more)

### Community 4 - "heard"
Cohesion: 0.05
Nodes (47): ref_lib_german_numbers, ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), chores, people, rules, vocab (+39 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "ReportButton.tsx"
Cohesion: 0.14
Nodes (11): What the player sees, ref_components_ui_dialog, ref_components_ui_iconbutton, ref_lib_report, ref_lib_turnstile, ReportButton(), ReportContext, ReportDialog() (+3 more)

### Community 7 - "numbers.ts"
Cohesion: 0.11
Nodes (30): year(), below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES (+22 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (32): GAME_TYPES, GameType, ActivitySchema, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf (+24 more)

### Community 9 - "app.tsx"
Cohesion: 0.11
Nodes (17): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+9 more)

### Community 10 - "a2-1/index.ts"
Cohesion: 0.05
Nodes (45): units, vocab, sortitTranslations, alltag, stadt, wohnen, arbeit, gesundheit (+37 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.11
Nodes (23): zustand, ref_zustand_middleware, ActivityProgress, dailyXp, initialProgress(), nextStreak(), ProgressActions, ProgressData (+15 more)

### Community 13 - "q"
Cohesion: 0.05
Nodes (39): q(), tf(), unitB12(), reviews, theatre, vocab, debate, phrases (+31 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.06
Nodes (50): ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_reportbutton, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_choicecards (+42 more)

### Community 16 - "b1-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, feiern, umwelt, pannen, glueck, unterhaltung (+7 more)

### Community 17 - "Gapfill.tsx"
Cohesion: 0.11
Nodes (33): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_wordimage, ref_content_lessons, @dnd-kit/core, ref_lib_tts, Flashcards(), Gapfill() (+25 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.10
Nodes (25): ref_lib_german_adjectives, ref_lib_german_articles, ref_test_factories, hints, hints, hints, hints, Meta (+17 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.07
Nodes (40): PAGES, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+32 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "c2-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, vocab, sortitTranslations, sprache, arbeit, wirtschaft, digitalUnit (+5 more)

### Community 23 - "lessons.ts"
Cohesion: 0.17
Nodes (13): BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags(), LESSONS, GROUP_LABELS (+5 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "label"
Cohesion: 0.09
Nodes (33): PLAYED, ref_test_contentsuite, ref_test_playability, content, content, content, key(), REVIEW_WORDS (+25 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, wissenschaft, unterwegs, klima, beziehungen, besitz (+7 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "wordPhotos.ts"
Cohesion: 0.27
Nodes (9): buildWordPhotoIndex(), key(), photoIdFor(), PhotoSource, index, manifest, vocab, withArticle() (+1 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "@testing-library/react"
Cohesion: 0.05
Nodes (38): ref_games_types, ref_lib_german_nouns, ref_lib_scoring, ref_test_render, ref_test_speech, @testing-library/react, @testing-library/user-event, pick() (+30 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.36
Nodes (8): buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), useSentenceSpeech(), useSpeakSentence()

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.15
Nodes (6): num(), NUMBERS, numberVocab, numCard(), vocab, words

### Community 34 - "Market.tsx"
Cohesion: 0.24
Nodes (10): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market() (+2 more)

### Community 35 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, check, deploy, dev, format, format:check, icons (+9 more)

### Community 36 - "builders.ts"
Cohesion: 0.06
Nodes (43): QuizQuestion, VocabRow, Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table(), k2ModalPastTable() (+35 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "StatePanel.tsx"
Cohesion: 0.21
Nodes (11): Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood, MascotShape, Kind (+3 more)

### Community 40 - "a2-2/helpers.ts"
Cohesion: 0.05
Nodes (77): ref_lib_german_konjunktiv1, customTable(), pastTable(), Pronoun, Question, readRound(), sepTable(), setRound() (+69 more)

### Community 41 - "router.tsx"
Cohesion: 0.07
Nodes (15): ref_components_ui_logo, ref_components_ui_skeleton, ref_components_ui_statpill, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout(), NAV (+7 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.10
Nodes (24): FeedbackBanner(), FeedbackKind, Props, STYLE, Icon(), src_components_ui_icon_iconname, Props, IconButton() (+16 more)

### Community 43 - "fetch.ts"
Cohesion: 0.05
Nodes (62): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources, Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify) (+54 more)

### Community 44 - "meta"
Cohesion: 0.05
Nodes (45): meta(), unit22(), bank, insurance, money, vocab, memories, stages (+37 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "levels.ts"
Cohesion: 0.19
Nodes (16): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+8 more)

### Community 47 - "guard.ts"
Cohesion: 0.13
Nodes (10): Claim, dayOf(), DEFAULT_LIMITS, Entry, GuardCore, GuardLimits, ReportGuard, StateLike (+2 more)

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

### Community 55 - "c2-2/index.ts"
Cohesion: 0.07
Nodes (35): unitC22(), withLesson(), withWhy(), content, units, vocab, sortitTranslations, kunst (+27 more)

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "worker/report.ts"
Cohesion: 0.25
Nodes (15): addPlusOne(), createIssue(), fail(), get(), githubHeaders(), GuardStub, handleReport(), issueBody() (+7 more)

### Community 59 - "u2-wer.ts"
Cohesion: 0.22
Nodes (7): people, phrases, vocab, wer, distractors(), quizEnDe(), quizQuestions()

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "vocabList"
Cohesion: 0.05
Nodes (64): dictation(), opinions, screen, vocab, clarify, languages, vocab, phrases (+56 more)

### Community 62 - "upload.ts"
Cohesion: 0.16
Nodes (18): aws4fetch, ref_node_util, bucketUrl(), CACHE_CONTROL, CONTENT_TYPE, decodeXml(), OBJECT_NAME, parseList() (+10 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "WordImage.tsx"
Cohesion: 0.09
Nodes (20): In the app, What the issue contains, ref_content_images, ref_lib_useimagemanifest, ref_lib_wordphotos, Props, SIZES, manifest (+12 more)

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 73 - "c2-2/helpers.ts"
Cohesion: 0.16
Nodes (18): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+10 more)

### Community 74 - "filters.ts"
Cohesion: 0.20
Nodes (13): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+5 more)

### Community 75 - "react"
Cohesion: 0.13
Nodes (15): react, ChoiceCards(), Props, Props, Segment(), Skeleton(), Props, TextField() (+7 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.18
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "progressTransfer.ts"
Cohesion: 0.11
Nodes (24): applyImport(), buildExport(), count, day, exportFileName(), id, ImportErrorCode, ImportMode (+16 more)

### Community 79 - "Deployment doc"
Cohesion: 0.12
Nodes (15): ProgressRepository (local-first storage seam), Deployment doc, Cloudflare Pages / Workers hosting, Alternative hosts (Vercel, Netlify, Render), PWA service worker and caching headers, wrangler.jsonc SPA config, Storage and delivery, Where the photos come from (+7 more)

### Community 80 - "byDe"
Cohesion: 0.08
Nodes (23): unitB11(), mishaps, reactions, vocab, luck, news, vocab, fitness (+15 more)

### Community 81 - "worker/index.ts"
Cohesion: 0.20
Nodes (10): REPORT_PATH, CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env() (+2 more)

### Community 82 - "ref_lib_german_conjugation"
Cohesion: 0.31
Nodes (10): ref_components_ui_umlautkeyboard, ref_lib_german_conjugation, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy() (+2 more)

### Community 83 - "playability.tsx"
Cohesion: 0.31
Nodes (9): ref_games_market_logic, ref_games_memory_logic, ref_games_registry, cont(), describePlayability(), prompt(), solve(), text() (+1 more)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "ActivityCard.tsx"
Cohesion: 0.16
Nodes (11): ref_content_gametypes, ActivityCard(), Props, Chip(), ChipProps, Tag(), GameTile(), SIZES (+3 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.17
Nodes (11): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources (+3 more)

### Community 87 - "UnitContent"
Cohesion: 0.06
Nodes (25): UnitContent, places, vocab, ways, jobs, vocab, work, ads (+17 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 90 - "a2-2/index.ts"
Cohesion: 0.13
Nodes (14): units, vocab, bankUnit, leben, arbeit, lernen, sportUnit, nachbarn (+6 more)

### Community 91 - "ref_content_schema"
Cohesion: 0.20
Nodes (7): ref_content_items, ref_content_schema, ref_content_tags, zod, ids(), levelFixture(), quizActivity()

### Community 92 - "b2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, stadt, druck, netz, beziehungen, ernaehrung (+7 more)

### Community 93 - "b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen, digital (+7 more)

### Community 94 - "u8-einkaufen.ts"
Cohesion: 0.25
Nodes (5): einkaufen, food, genderItems, shopping, vocab

### Community 95 - "a1-1/index.ts"
Cohesion: 0.22
Nodes (7): units, vocab, sortitTranslations, zahlen, freizeit, hobbies, vocab

### Community 96 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 97 - "lib/report.ts"
Cohesion: 0.20
Nodes (14): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_TYPE_META, REPORT_TYPES (+6 more)

### Community 98 - "nouns.ts"
Cohesion: 0.21
Nodes (16): nouns, play(), squash(), bareNoun(), buildNounIndex(), findGapNoun(), GENDER, isCapitalised() (+8 more)

### Community 99 - "u5-familie.ts"
Cohesion: 0.29
Nodes (5): familie, female, male, relatives, vocab

### Community 100 - "Dialogue.tsx"
Cohesion: 0.11
Nodes (22): ref_lib_sfx, Blitz(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+14 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (17): ref_games_shared_gameframe, DailyGoalCard(), Card(), Props, COLORS, Confetti(), Logo(), MARK (+9 more)

### Community 102 - "worker/report.test.ts"
Cohesion: 0.29
Nodes (3): limit(), Call, goodBody

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 105 - "README (lingoat)"
Cohesion: 0.20
Nodes (12): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine, Procedure: add a new unit (builders.ts), Content is data, engines are generic, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts) (+4 more)

### Community 106 - "vite.config.ts"
Cohesion: 0.25
Nodes (5): ref_node_fs, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 109 - "Architecture doc"
Cohesion: 0.25
Nodes (11): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Architecture doc, Accessible by default, Lazy level content packs (levels.ts), Seeded determinism (rng.ts) (+3 more)

### Community 111 - "path.ts"
Cohesion: 0.33
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 112 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 113 - "u1-hallo.ts"
Cohesion: 0.29
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 129 - "say"
Cohesion: 0.04
Nodes (67): say(), sortItems(), typed(), authorities, countries, forms, nat(), vocab (+59 more)

## Knowledge Gaps
- **1535 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1530 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1717 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `ReportButton.tsx`, `app.tsx`, `package.json`, `PlayPage.tsx`, `Gapfill.tsx`, `Clock.tsx`, `@testing-library/react`, `Sentence.tsx`, `Market.tsx`, `StatePanel.tsx`, `router.tsx`, `Icon.tsx`, `levels.ts`, `WordImage.tsx`, `ref_lib_german_conjugation`, `playability.tsx`, `ActivityCard.tsx`, `Button.tsx`, `Tabs.tsx`, `Dialogue.tsx`, `ui.test.tsx`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Why does `vitest` connect `vitest` to `worker/report.test.ts`, `fetch.ts`, `package.json`, `guard.ts`, `worker/index.ts`, `upload.ts`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `WordImage.tsx`, `Market.tsx`, `Dialogue.tsx`, `ui.test.tsx`, `ReportButton.tsx`, `router.tsx`, `app.tsx`, `react`, `package.json`, `levels.ts`, `PlayPage.tsx`, `Gapfill.tsx`, `ref_lib_german_conjugation`, `playability.tsx`, `e2e/helpers.ts`, `vitest`, `Clock.tsx`, `ref_content_schema`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1535 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `c1-2/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11695906432748537 - nodes in this community are weakly interconnected._
- **Should `activity` be split into smaller, more focused modules?**
  _Cohesion score 0.04873405672948791 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._