# Graph Report - lingoat.games  (2026-10-30)

## Corpus Check
- 540 files · ~575,079 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 3315 nodes · 9203 edges · 132 communities (120 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 153 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d3ab809a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Gapfill.test.tsx
- meta
- manifest.json
- conjugation.ts
- heard
- B1.1 coverage and research doc
- activity
- numbers.ts
- content/schema.ts
- AppLayout.tsx
- builders.ts
- package.json
- progressStore.ts
- u8-werbung.ts
- devDependencies
- PlayPage.tsx
- content/hints.ts
- react
- gap
- build.mjs
- e2e/helpers.ts
- compilerOptions
- grammar.test.ts
- lessons.ts
- Clock.tsx
- a2-1/index.ts
- b2-1/index.ts
- compilerOptions
- wordPhotos.ts
- rng.ts
- b1-1/index.ts
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- Memory.tsx
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- market/logic.ts
- c1-2/index.ts
- router.tsx
- Icon.tsx
- c1-1/index.ts
- byDe
- dependencies
- a2-2/index.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- a1-2/index.ts
- appIcons.test.ts
- app-icons.md
- srs.ts
- c2-2/index.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- levels.ts
- e2e/tsconfig.json
- UnitContent
- upload.ts
- graphify reference: add a URL and watch a folder
- @testing-library/react
- .prettierrc.json
- tsconfig.json
- vite-env.d.ts
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- LevelContent
- filters.ts
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- progressTransfer.ts
- Architecture doc
- Vocab
- worker/index.ts
- Conjugation.tsx
- u1-kunst.ts
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- c2-2/helpers.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- say
- Button.tsx
- main
- ref_content_schema
- u7-tag.ts
- grammar/index.ts
- u5-staat.ts
- u8-nuancen.ts
- fetch.ts
- Tabs.tsx
- lib/report.ts
- nouns.ts
- images/index.ts
- u5-wohnung.ts
- ui.test.tsx
- grammar/grammar.test.tsx
- turnstile.ts
- b1-2/index.ts
- ReportButton.tsx
- worker/report.test.ts
- forms.ts
- memory.spec.ts
- README (lingoat)
- Toast.tsx
- path.ts
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- u3-kulturerbe.ts
- konjunktiv1.ts
- French A1.1 – syllabus research and plan
- articles.ts
- vitest
- adjectives.ts
- u1-online.ts
- u3-wohlbefinden.ts
- u2-literatur.ts
- c2-2/u6-engagement.ts
- FeedbackBanner.tsx
- a11y.spec.ts
- Logo.tsx
- u11-druck.ts
- ProgressBar.tsx
- UmlautKeyboard.tsx
- Grammar lesson sources

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

## Communities (132 total, 12 thin omitted)

### Community 0 - "Gapfill.test.tsx"
Cohesion: 0.09
Nodes (27): ref_lib_german_nouns, ref_test_render, ref_test_speech, pick(), Blitz(), answerRight(), answerWrong(), config (+19 more)

### Community 1 - "meta"
Cohesion: 0.05
Nodes (56): meta(), q(), you(), Blanks, compound(), futurTable(), k2PastTable(), passiveModalTable() (+48 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "heard"
Cohesion: 0.03
Nodes (96): heard(), pastTable(), Pronoun, Question, readRound(), sepTable(), setRound(), table() (+88 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.12
Nodes (19): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Lazy level content packs (levels.ts), Tags and filters (+11 more)

### Community 6 - "activity"
Cohesion: 0.04
Nodes (102): people, phrases, vocab, wer, familie, female, male, relatives (+94 more)

### Community 7 - "numbers.ts"
Cohesion: 0.11
Nodes (30): year(), below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES (+22 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "AppLayout.tsx"
Cohesion: 0.05
Nodes (43): ref_app_router, ref_components_languageswitcher, ref_components_ui_choicecards, ref_components_ui_logo, ref_components_ui_segment, ref_components_ui_statpill, ref_components_ui_toast, ref_components_ui_toggle (+35 more)

### Community 10 - "builders.ts"
Cohesion: 0.09
Nodes (18): ads, jobs, reflexive, vocab, bonds, phrases, traits, vocab (+10 more)

### Community 11 - "package.json"
Cohesion: 0.06
Nodes (32): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+24 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.09
Nodes (28): ref_lib_scoring, zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress() (+20 more)

### Community 13 - "u8-werbung.ts"
Cohesion: 0.33
Nodes (5): ads, describing, habits, proscons, vocab

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.05
Nodes (58): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_fulllessonlink, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar (+50 more)

### Community 16 - "content/hints.ts"
Cohesion: 0.13
Nodes (17): hints, hints, adjectiveHint(), ENDINGS, HintableItem, HintEntry, HintOverlay, resolve() (+9 more)

### Community 17 - "react"
Cohesion: 0.09
Nodes (47): What the issue contains, ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_components_wordimage, ref_lib_tts, react, react-dom (+39 more)

### Community 18 - "gap"
Cohesion: 0.04
Nodes (83): dictation(), gap(), adjGap(), Blanks, hint(), SixForms, unitB12(), europe (+75 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.06
Nodes (44): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+36 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "grammar.test.ts"
Cohesion: 0.10
Nodes (17): content, units, vocab, sortitTranslations, sprache, arbeit, wirtschaft, digitalUnit (+9 more)

### Community 23 - "lessons.ts"
Cohesion: 0.14
Nodes (17): Meta, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags() (+9 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.07
Nodes (42): ref_test_contentsuite, ref_test_playability, content, content, units, vocab, beruf, online (+34 more)

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

### Community 30 - "b1-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, feiern, umwelt, pannen, glueck, unterhaltung (+7 more)

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
Cohesion: 0.19
Nodes (19): The pipeline (`scripts/images/`), cleanQuery(), cropsWell(), germanQuery(), isBlocked(), isCandidate(), pagePath(), pickHit() (+11 more)

### Community 35 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, check, deploy, dev, format, format:check, icons (+9 more)

### Community 36 - "Memory.tsx"
Cohesion: 0.14
Nodes (18): ref_content_lessons, ref_lib_sfx, @testing-library/user-event, buildColumns(), isMatch(), MemoryCard, MemoryColumns, ColumnProps (+10 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "market/logic.ts"
Cohesion: 0.31
Nodes (8): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market()

### Community 40 - "c1-2/index.ts"
Cohesion: 0.12
Nodes (16): content, units, vocab, sortitTranslations, team10, nachhaltigkeit, vortrag, finanzen (+8 more)

### Community 41 - "router.tsx"
Cohesion: 0.11
Nodes (9): ref_react_dom_client, ref_react_router_dom, createAppRouter(), createRoutes(), createTestRouter(), pages, routerOptions(), src_index (+1 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.14
Nodes (17): src_components_ui_icon_iconname, Props, IconButton(), Props, Size, SIZES, Variant, VARIANTS (+9 more)

### Community 43 - "c1-1/index.ts"
Cohesion: 0.12
Nodes (15): content, units, vocab, sortitTranslations, wirtschaft, gesellschaft, zeit, digital (+7 more)

### Community 44 - "byDe"
Cohesion: 0.04
Nodes (50): ref_lib_german_numbers, ref_lib_german_ordinals, einkaufen, food, genderItems, shopping, vocab, src_content_a1_2_helpers_activity (+42 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "a2-2/index.ts"
Cohesion: 0.12
Nodes (16): hints, units, vocab, sortitTranslations, bankUnit, leben, arbeit, lernen (+8 more)

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
Cohesion: 0.32
Nodes (8): pickGermanVoice(), pickVoice(), setSpeechLanguage(), speak(), SpeakOptions, stopSpeaking(), Utterance, ttsSupported()

### Community 51 - "a1-2/index.ts"
Cohesion: 0.06
Nodes (35): sortitTranslations, hints, units, vocab, sortitTranslations, alltag, stadt, wohnen (+27 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "c2-2/index.ts"
Cohesion: 0.16
Nodes (11): units, vocab, sortitTranslations, recht, grammarTags, handeln, klima, LESSON (+3 more)

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "worker/report.ts"
Cohesion: 0.25
Nodes (15): addPlusOne(), createIssue(), fail(), get(), githubHeaders(), GuardStub, handleReport(), issueBody() (+7 more)

### Community 59 - "levels.ts"
Cohesion: 0.19
Nodes (15): DEFAULT_LANGUAGE, getLanguage(), isLanguageId(), LANGUAGE_IDS, LanguageId, LanguageMeta, languageOfPath(), LANGUAGES (+7 more)

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "UnitContent"
Cohesion: 0.05
Nodes (33): UnitContent, byes, feelings, hallo, hellos, polite, vocab, memories (+25 more)

### Community 62 - "upload.ts"
Cohesion: 0.17
Nodes (17): aws4fetch, bucketUrl(), CACHE_CONTROL, CONTENT_TYPE, decodeXml(), OBJECT_NAME, parseList(), planUpload() (+9 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "@testing-library/react"
Cohesion: 0.05
Nodes (31): In the app, ref_content_c1_2, ref_content_images, ref_content_images_manifest_json, ref_lib_useimagemanifest, ref_lib_wordphotos, ref_test_app, @testing-library/react (+23 more)

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 73 - "LevelContent"
Cohesion: 0.22
Nodes (12): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+4 more)

### Community 74 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 75 - "controls.test.tsx"
Cohesion: 0.10
Nodes (20): ChoiceCards(), Props, Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood (+12 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.20
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "progressTransfer.ts"
Cohesion: 0.07
Nodes (39): ref_games_market_logic, ref_games_memory_logic, ref_games_registry, zod, applyImport(), applyImportAll(), buildExport(), count (+31 more)

### Community 79 - "Architecture doc"
Cohesion: 0.12
Nodes (21): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Architecture doc, Accessible by default, ProgressRepository (local-first storage seam), Seeded determinism (rng.ts) (+13 more)

### Community 80 - "Vocab"
Cohesion: 0.22
Nodes (7): VocabList, VocabPathOptions, ContentIndex, Activity, ActivitySchema, Vocab, vocab

### Community 81 - "worker/index.ts"
Cohesion: 0.20
Nodes (10): REPORT_PATH, CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env() (+2 more)

### Community 82 - "Conjugation.tsx"
Cohesion: 0.36
Nodes (8): ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), gradeTable(), pronounOrder

### Community 83 - "u1-kunst.ts"
Cohesion: 0.25
Nodes (7): withLesson(), betrieb, grammarTags, kunst, LESSON, urteil, vocab

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "c2-2/helpers.ts"
Cohesion: 0.13
Nodes (23): customTable(), reflexiveAccTable(), reflexiveDativeTable(), compound(), passivePastTable(), passivePerfektTable(), k1PerfectTable(), k1Table() (+15 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.17
Nodes (11): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources (+3 more)

### Community 87 - "say"
Cohesion: 0.07
Nodes (49): say(), sent(), sortItems(), typed(), authorities, countries, forms, nat() (+41 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "main"
Cohesion: 0.14
Nodes (15): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources, Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify) (+7 more)

### Community 90 - "ref_content_schema"
Cohesion: 0.16
Nodes (7): ref_content_items, ref_content_schema, ref_content_tags, ref_games_types, practiceActivities(), levelFixture(), quizActivity()

### Community 91 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 92 - "grammar/index.ts"
Cohesion: 0.05
Nodes (76): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, ref_lib_german_konjunktiv1, countries, country(), languages, vocab (+68 more)

### Community 93 - "u5-staat.ts"
Cohesion: 0.25
Nodes (7): withWhy(), debatte, grammarTags, LESSON, staat, staatPolitik, vocab

### Community 94 - "u8-nuancen.ts"
Cohesion: 0.25
Nodes (7): unitC22(), grammarTags, LESSON, nuancen, redewendungen, stil, vocab

### Community 95 - "fetch.ts"
Cohesion: 0.12
Nodes (22): ref_node_crypto, ref_node_util, sharp, apiTurn, byId(), CACHE, download(), downloadTurn (+14 more)

### Community 96 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 97 - "lib/report.ts"
Cohesion: 0.20
Nodes (14): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_TYPE_META, REPORT_TYPES (+6 more)

### Community 98 - "nouns.ts"
Cohesion: 0.20
Nodes (19): Gender, bareNoun(), buildNounIndex(), CASE_TAGS, drillsCase(), findGapNoun(), GapNoun, GENDER (+11 more)

### Community 99 - "images/index.ts"
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 100 - "u5-wohnung.ts"
Cohesion: 0.29
Nodes (5): ads, furniture, money, verbs, vocab

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (24): ref_content_gametypes, ref_games_shared_gameframe, ref_i18n, ActivityCard(), Props, DailyGoalCard(), Card(), Props (+16 more)

### Community 102 - "grammar/grammar.test.tsx"
Cohesion: 0.15
Nodes (13): ref_components_ui_iconbutton, ref_content_grammar, ref_games_shared_mistakehint, GrammarLesson(), LessonMeta(), Props, GrammarSheet(), Props (+5 more)

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen, digital (+7 more)

### Community 105 - "ReportButton.tsx"
Cohesion: 0.15
Nodes (10): What the player sees, ref_components_ui_dialog, ref_lib_report, ref_lib_turnstile, ReportButton(), ReportContext, ReportDialog(), Status (+2 more)

### Community 106 - "worker/report.test.ts"
Cohesion: 0.29
Nodes (3): limit(), Call, goodBody

### Community 107 - "forms.ts"
Cohesion: 0.16
Nodes (15): ref_lib_answer_check, adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms(), DEFINITE (+7 more)

### Community 109 - "README (lingoat)"
Cohesion: 0.12
Nodes (15): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine, Procedure: add a new unit (builders.ts), Content is data, engines are generic, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts) (+7 more)

### Community 110 - "Toast.tsx"
Cohesion: 0.33
Nodes (5): ICON, Props, STYLE, Toast(), Tone

### Community 111 - "path.ts"
Cohesion: 0.25
Nodes (7): ref_test_factories, nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 112 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 113 - "u3-kulturerbe.ts"
Cohesion: 0.29
Nodes (6): bewahren, erbe, grammarTags, kulturerbe, LESSON, vocab

### Community 114 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 115 - "French A1.1 – syllabus research and plan"
Cohesion: 0.40
Nodes (4): Build plan, French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read)

### Community 116 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "adjectives.ts"
Cohesion: 0.36
Nodes (8): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case

### Community 119 - "u1-online.ts"
Cohesion: 0.40
Nodes (4): actions, devices, vocab, web

### Community 120 - "u3-wohlbefinden.ts"
Cohesion: 0.40
Nodes (4): fitness, reasons, stress, vocab

### Community 121 - "u2-literatur.ts"
Cohesion: 0.29
Nodes (6): buch, grammarTags, kritik, LESSON, literatur, vocab

### Community 122 - "c2-2/u6-engagement.ts"
Cohesion: 0.29
Nodes (6): engagement, gesellschaft, grammarTags, LESSON, verben, vocab

### Community 123 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FEEDBACK_TINT, FeedbackBanner(), FeedbackKind, Props, STYLE

### Community 126 - "u11-druck.ts"
Cohesion: 0.50
Nodes (3): decide, stress, vocab

### Community 127 - "ProgressBar.tsx"
Cohesion: 0.50
Nodes (3): FILL, ProgressBar(), Props

### Community 128 - "UmlautKeyboard.tsx"
Cohesion: 0.50
Nodes (3): KEYS, Props, UmlautKeyboard()

### Community 135 - "Grammar lesson sources"
Cohesion: 0.22
Nodes (8): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), Grammar lesson sources, Limits of the research

## Knowledge Gaps
- **1588 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1583 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1810 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Gapfill.test.tsx`, `AppLayout.tsx`, `package.json`, `PlayPage.tsx`, `Clock.tsx`, `Sentence.tsx`, `Memory.tsx`, `router.tsx`, `Icon.tsx`, `@testing-library/react`, `LevelContent`, `controls.test.tsx`, `progressTransfer.ts`, `Conjugation.tsx`, `Button.tsx`, `ref_content_schema`, `Tabs.tsx`, `ui.test.tsx`, `grammar/grammar.test.tsx`, `ReportButton.tsx`, `Toast.tsx`, `FeedbackBanner.tsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Why does `zod` connect `progressTransfer.ts` to `content/schema.ts`, `@testing-library/react`, `package.json`, `grammar/index.ts`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `Gapfill.test.tsx`, `Memory.tsx`, `ui.test.tsx`, `grammar/grammar.test.tsx`, `AppLayout.tsx`, `ReportButton.tsx`, `package.json`, `controls.test.tsx`, `LevelContent`, `progressTransfer.ts`, `PlayPage.tsx`, `react`, `Conjugation.tsx`, `vitest`, `Clock.tsx`, `ref_content_schema`, `Sentence.tsx`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1588 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gapfill.test.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08902439024390243 - nodes in this community are weakly interconnected._
- **Should `meta` be split into smaller, more focused modules?**
  _Cohesion score 0.052313883299798795 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._