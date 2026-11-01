# Graph Report - lingoat.games  (2026-11-01)

## Corpus Check
- 592 files · ~630,309 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 3599 nodes · 9930 edges · 136 communities (126 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 167 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `68f1008d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Quiz.tsx
- sent
- manifest.json
- german/conjugation.ts
- q
- B1.1 coverage and research doc
- flashcards
- german/numbers.ts
- content/schema.ts
- router.tsx
- meta
- package.json
- progressStore.ts
- ref_lib_german_conjugation
- devDependencies
- PlayPage.tsx
- content/hints.ts
- Gapfill.tsx
- activity
- build.mjs
- e2e/helpers.ts
- compilerOptions
- ActivityCard.tsx
- lessons.ts
- Clock.tsx
- a2-1/index.ts
- b1-1/index.ts
- compilerOptions
- grammar.test.ts
- rng.ts
- UnitContent
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- say
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- grammar/index.ts
- levels.ts
- b2-1/index.ts
- Icon.tsx
- u4-famille.ts
- heard
- dependencies
- u5-familie.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- gap
- appIcons.test.ts
- app-icons.md
- srs.ts
- fr-a1-1/index.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- u3-nombres.ts
- e2e/tsconfig.json
- c2-1/index.ts
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
- react
- filters.ts
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- progressTransfer.ts
- c1-1/index.ts
- WordImage.tsx
- worker/index.ts
- Memory.tsx
- fr-a1-2/index.ts
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- build.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- b1-2/index.ts
- Button.tsx
- README (lingoat)
- @testing-library/react
- u7-tag.ts
- scoring.test.ts
- french/conjugation.ts
- a2-2/index.ts
- fetch.ts
- a1-1/types.ts
- lib/report.ts
- c1-2/index.ts
- tenses.ts
- u3-woher.ts
- ui.test.tsx
- path.ts
- turnstile.ts
- u1-journee.ts
- ReportButton.tsx
- images/index.ts
- forms.ts
- builders.ts
- u8-einkaufen.ts
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- Tabs.tsx
- a11y.spec.ts
- Toast.tsx
- sources.ts
- u2-presenter.ts
- grammar/schema.ts
- vitest
- a2-2.ts
- vite.config.ts
- FeedbackBanner.tsx
- u8-temps.ts
- u6-table.ts
- u7-ville.ts
- fr-a2-1.ts
- u5-loisirs.ts
- b2-1.ts
- fr-a1-1.ts
- u2-fetes.ts
- konjunktiv1.ts
- items.ts
- French A2.1 – syllabus research and plan
- main
- Grammar lesson sources

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 170 edges
2. `activity()` - 155 edges
3. `vocabList()` - 143 edges
4. `byDe()` - 139 edges
5. `heard()` - 137 edges
6. `meta()` - 136 edges
7. `gap()` - 135 edges
8. `flashcards()` - 135 edges
9. `q()` - 134 edges
10. `tf()` - 134 edges

## Surprising Connections (you probably didn't know these)
- `Grammar hints` --references--> `main()`  [INFERRED]
  docs/b1-2-coverage.md → scripts/images/fetch.ts
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `French A1.1 (25 topics)` --references--> `frConjugationTable()`  [INFERRED]
  docs/grammar-sources.md → src/content/grammar/build.ts
- `One-time setup (by hand)` --references--> `main()`  [INFERRED]
  docs/code-quality.md → scripts/images/fetch.ts
- `Pinned install` --references--> `main()`  [INFERRED]
  docs/graphify.md → scripts/images/fetch.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (136 total, 10 thin omitted)

### Community 0 - "Quiz.tsx"
Cohesion: 0.11
Nodes (24): ref_lib_german_nouns, ref_test_render, pick(), answerRight(), answerWrong(), config, prompt(), statements (+16 more)

### Community 1 - "sent"
Cohesion: 0.03
Nodes (106): pastTable(), Pronoun, Question, readRound(), sent(), sepTable(), setRound(), table() (+98 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "german/conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "q"
Cohesion: 0.07
Nodes (29): q(), you(), environment, materials, vocab, mishaps, reactions, vocab (+21 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "flashcards"
Cohesion: 0.05
Nodes (80): dictation(), sortItems(), green, mobility, vocab, decide, stress, vocab (+72 more)

### Community 7 - "german/numbers.ts"
Cohesion: 0.06
Nodes (57): Build plan, French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read), Build plan, French A1.2 – syllabus research and plan, How the units were chosen, Sources (what was actually read) (+49 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.07
Nodes (29): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConjugationConfig, DialogueConfig (+21 more)

### Community 9 - "router.tsx"
Cohesion: 0.11
Nodes (9): ref_react_dom_client, ref_react_router_dom, createAppRouter(), createRoutes(), createTestRouter(), pages, routerOptions(), src_index (+1 more)

### Community 10 - "meta"
Cohesion: 0.11
Nodes (19): meta(), ads, furniture, money, verbs, vocab, futurTable(), imparfaitTable() (+11 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.10
Nodes (27): zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress(), nextStreak() (+19 more)

### Community 13 - "ref_lib_german_conjugation"
Cohesion: 0.28
Nodes (14): ref_lib_german_conjugation, compare(), examples(), list(), mistake(), p(), section(), tip() (+6 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.04
Nodes (74): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar, ref_components_grammar_usegrammar (+66 more)

### Community 16 - "content/hints.ts"
Cohesion: 0.17
Nodes (12): hints, adjectiveHint(), ENDINGS, HintableItem, HintEntry, HintOverlay, ItemHint, resolve() (+4 more)

### Community 17 - "Gapfill.tsx"
Cohesion: 0.06
Nodes (56): What the issue contains, ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, @dnd-kit/core, ref_lib_scoring, ref_lib_sfx, ref_lib_tts, Blitz() (+48 more)

### Community 18 - "activity"
Cohesion: 0.04
Nodes (65): byes, feelings, hallo, hellos, polite, vocab, events, phrases (+57 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.06
Nodes (50): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+42 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "ActivityCard.tsx"
Cohesion: 0.17
Nodes (12): ref_content_gametypes, ActivityCard(), Props, Chip(), ChipProps, Tag(), GameTile(), SIZES (+4 more)

### Community 23 - "lessons.ts"
Cohesion: 0.15
Nodes (15): VocabPathOptions, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags(), LESSONS (+7 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.20
Nodes (14): ref_lib_french_time, ref_lib_german_time, ref_lib_rng, ref_lib_spoken, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime() (+6 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.05
Nodes (55): ref_test_contentsuite, ref_test_playability, hints, content, units, vocab, alltag, stadt (+47 more)

### Community 26 - "b1-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, feiern, umwelt, pannen, glueck, unterhaltung (+7 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "grammar.test.ts"
Cohesion: 0.10
Nodes (18): content, units, vocab, sortitTranslations, kunst, literatur, kulturerbe, recht (+10 more)

### Community 29 - "rng.ts"
Cohesion: 0.40
Nodes (8): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle()

### Community 30 - "UnitContent"
Cohesion: 0.06
Nodes (57): UnitContent, Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms (+49 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.12
Nodes (15): ref_store_settingsstore, ref_test_speech, Probe(), useApplySettings(), Props, config, buildTiles(), isCorrectSentence() (+7 more)

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

### Community 36 - "say"
Cohesion: 0.07
Nodes (44): say(), clarify, languages, vocab, Blanks, compound(), futur2Table(), k1PerfectTable() (+36 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "grammar/index.ts"
Cohesion: 0.12
Nodes (17): B11_TOPICS, B12_TOPICS, B21_TOPICS, B22_TOPICS, C11_TOPICS, C12_TOPICS, C22_TOPICS, FR11_TOPICS_B (+9 more)

### Community 40 - "levels.ts"
Cohesion: 0.11
Nodes (27): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+19 more)

### Community 41 - "b2-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, wissenschaft, unterwegs, klima, beziehungen, besitz (+7 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.14
Nodes (17): src_components_ui_icon_iconname, Props, IconButton(), Props, Size, SIZES, Variant, VARIANTS (+9 more)

### Community 43 - "u4-famille.ts"
Cohesion: 0.18
Nodes (10): adjectives, CEST_CARDS, emojiFamily, famille, family, meaning(), PAIRS, phrases (+2 more)

### Community 44 - "heard"
Cohesion: 0.05
Nodes (54): ref_lib_german_numbers, ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), unit12(), chores, people, rules (+46 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "u5-familie.ts"
Cohesion: 0.12
Nodes (12): people, phrases, vocab, wer, familie, female, male, relatives (+4 more)

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

### Community 51 - "gap"
Cohesion: 0.07
Nodes (42): gap(), tf(), Blanks, k1PerfectTable(), k1Table(), lx(), sixForms(), unitC11() (+34 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "fr-a1-1/index.ts"
Cohesion: 0.14
Nodes (12): content, units, bonjour, byes, feelings, hellos, manners, polite (+4 more)

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "worker/report.ts"
Cohesion: 0.17
Nodes (18): addPlusOne(), createIssue(), fail(), get(), githubHeaders(), GuardStub, handleReport(), issueBody() (+10 more)

### Community 59 - "u3-nombres.ts"
Cohesion: 0.15
Nodes (6): num(), NUMBERS, numberVocab, numCard(), vocab, words

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "c2-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, vocab, sortitTranslations, sprache, arbeit, wirtschaft, digitalUnit (+5 more)

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

### Community 73 - "react"
Cohesion: 0.10
Nodes (24): ref_components_ui_skeleton, ref_content_grammar, ref_content_grammar_load, ref_content_lessons, ref_games_shared_hints, ref_games_shared_mistakehint, ref_lib_grammarfilter, react (+16 more)

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
Cohesion: 0.18
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "progressTransfer.ts"
Cohesion: 0.10
Nodes (29): applyImport(), applyImportAll(), buildExport(), count, day, exportFileName(), id, ImportErrorCode (+21 more)

### Community 79 - "c1-1/index.ts"
Cohesion: 0.12
Nodes (15): content, units, vocab, sortitTranslations, wirtschaft, gesellschaft, zeit, digital (+7 more)

### Community 80 - "WordImage.tsx"
Cohesion: 0.07
Nodes (25): In the app, ref_components_wordimage, ref_lib_useimagemanifest, ref_lib_wordphotos, Props, SIZES, manifest, TileProps (+17 more)

### Community 81 - "worker/index.ts"
Cohesion: 0.22
Nodes (9): CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env(), run() (+1 more)

### Community 82 - "Memory.tsx"
Cohesion: 0.11
Nodes (26): ref_components_grammar_fulllessonlink, ref_components_ui_umlautkeyboard, ref_lib_answer_check, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts (+18 more)

### Community 83 - "fr-a1-2/index.ts"
Cohesion: 0.10
Nodes (16): ref_content_items, ref_content_tags, earlierLevels, key(), REVIEW_WORDS, content, units, journee (+8 more)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "build.ts"
Cohesion: 0.19
Nodes (15): ref_lib_french_conjugation, A11_TOPICS, CASES, GENDERS, A12_TOPICS, articleTable(), CASES, conjugationTable() (+7 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources (+2 more)

### Community 87 - "b1-2/index.ts"
Cohesion: 0.06
Nodes (37): sortitTranslations, sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, heimat, kunst (+29 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "README (lingoat)"
Cohesion: 0.07
Nodes (38): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine (+30 more)

### Community 90 - "@testing-library/react"
Cohesion: 0.06
Nodes (34): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+26 more)

### Community 91 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 92 - "scoring.test.ts"
Cohesion: 0.73
Nodes (4): accuracy(), GameResult, starsFor(), xpFor()

### Community 93 - "french/conjugation.ts"
Cohesion: 0.13
Nodes (22): Unit 2 – Félicitations ! (`fetes`), conjugateFr(), ER_ENDINGS, ER_STRONG_STEM, forms(), FrenchForms, IR_ENDINGS, IRREGULAR (+14 more)

### Community 94 - "a2-2/index.ts"
Cohesion: 0.12
Nodes (16): hints, units, vocab, sortitTranslations, bankUnit, leben, arbeit, lernen (+8 more)

### Community 95 - "fetch.ts"
Cohesion: 0.13
Nodes (21): ref_node_crypto, sharp, apiTurn, byId(), CACHE, download(), downloadTurn, downloadWithRetry() (+13 more)

### Community 96 - "a1-1/types.ts"
Cohesion: 0.13
Nodes (11): ref_test_factories, freizeit, hobbies, vocab, VocabList, ContentIndex, EMPTY_INDEX, Activity (+3 more)

### Community 97 - "lib/report.ts"
Cohesion: 0.17
Nodes (16): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_PATH, REPORT_TYPE_META (+8 more)

### Community 98 - "c1-2/index.ts"
Cohesion: 0.12
Nodes (16): content, units, vocab, sortitTranslations, team10, nachhaltigkeit, vortrag, finanzen (+8 more)

### Community 99 - "tenses.ts"
Cohesion: 0.18
Nodes (14): beforeI(), ETRE_VERBS, forms(), FUTURE_ENDINGS, FUTURE_STEM, futurSimple(), imparfait(), IMPARFAIT_ENDINGS (+6 more)

### Community 100 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (17): ref_games_shared_gameframe, DailyGoalCard(), Card(), Props, COLORS, Confetti(), Logo(), MARK (+9 more)

### Community 102 - "path.ts"
Cohesion: 0.29
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "u1-journee.ts"
Cohesion: 0.16
Nodes (12): ref_lib_french_passecompose, frTable(), Table, unitFr(), chores, heard, morning, order (+4 more)

### Community 105 - "ReportButton.tsx"
Cohesion: 0.14
Nodes (11): What the player sees, ref_components_ui_dialog, ref_components_ui_iconbutton, ref_lib_report, ref_lib_turnstile, ReportButton(), ReportContext, ReportDialog() (+3 more)

### Community 106 - "images/index.ts"
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 107 - "forms.ts"
Cohesion: 0.07
Nodes (49): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+41 more)

### Community 108 - "builders.ts"
Cohesion: 0.05
Nodes (72): customTable(), adjGap(), k2Table(), passiveTable(), reflexiveAccTable(), Blanks, compound(), futurTable() (+64 more)

### Community 109 - "u8-einkaufen.ts"
Cohesion: 0.25
Nodes (5): einkaufen, food, genderItems, shopping, vocab

### Community 110 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 111 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 113 - "Toast.tsx"
Cohesion: 0.33
Nodes (5): ICON, Props, STYLE, Toast(), Tone

### Community 114 - "sources.ts"
Cohesion: 0.15
Nodes (4): FR12_SOURCES, Source, SOURCES, C2_SOURCES

### Community 115 - "u2-presenter.ts"
Cohesion: 0.22
Nodes (8): unitFr(), countries, GENDER_CARDS, jobs, nationalities, pairs, phrases, vocab

### Community 116 - "grammar/schema.ts"
Cohesion: 0.15
Nodes (12): BlockSchema, Callout, Compare, Examples, GrammarTopicSchema, lessonId, List, Paragraph (+4 more)

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "a2-2.ts"
Cohesion: 0.23
Nodes (10): ref_lib_german_adjectives, ref_lib_german_articles, A21_TOPICS, superlativeRows(), A22_TOPICS, adjectivePhrases(), CASES, GENDERS (+2 more)

### Community 119 - "vite.config.ts"
Cohesion: 0.25
Nodes (5): ref_node_fs, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 120 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FEEDBACK_TINT, FeedbackBanner(), FeedbackKind, Props, STYLE

### Community 121 - "u8-temps.ts"
Cohesion: 0.17
Nodes (9): clothes, days, months, pictureQuiz, POSITION_CARDS, SORT_CARDS, temps, vocab (+1 more)

### Community 122 - "u6-table.ts"
Cohesion: 0.20
Nodes (8): ref_lib_french_numbers, drinksMeals, foods, phrases, pictureQuiz, quantities, SORT_CARDS, vocab

### Community 123 - "u7-ville.ts"
Cohesion: 0.20
Nodes (9): phrases, pictureQuiz, places, route, SORT_CARDS, ville, vocab, where (+1 more)

### Community 124 - "fr-a2-1.ts"
Cohesion: 0.25
Nodes (5): ref_lib_french_tenses, ref_lib_persons, etreTable(), FR21_TOPICS, FR21_SOURCES

### Community 125 - "u5-loisirs.ts"
Cohesion: 0.22
Nodes (8): activities, likes, loisirs, phrases, pictureQuiz, SORT_CARDS, sports, vocab

### Community 126 - "b2-1.ts"
Cohesion: 0.29
Nodes (4): ref_lib_german_konjunktiv1, sein, werden, B2_SOURCES

### Community 127 - "fr-a1-1.ts"
Cohesion: 0.32
Nodes (5): frConjugationTable(), FR11_TOPICS, conj(), FR_SOURCES, wiktionary()

### Community 128 - "u2-fetes.ts"
Cohesion: 0.17
Nodes (11): pcTable(), events, family, heard, looks, markers, PARTICIPLE_CARDS, pictureQuiz (+3 more)

### Community 129 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 130 - "items.ts"
Cohesion: 0.48
Nodes (5): getItems(), itemCount(), ITEMS_KEY, ItemsKey, withItems()

### Community 131 - "French A2.1 – syllabus research and plan"
Cohesion: 0.40
Nodes (4): Build plan, French A2.1 – syllabus research and plan, Sources (what was actually read), Units

### Community 134 - "main"
Cohesion: 0.14
Nodes (15): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources, Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify) (+7 more)

### Community 135 - "Grammar lesson sources"
Cohesion: 0.17
Nodes (11): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), French A1.1 (25 topics), French A1.2 (5 topics so far) (+3 more)

## Knowledge Gaps
- **1706 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1701 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1946 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Quiz.tsx`, `router.tsx`, `package.json`, `PlayPage.tsx`, `Gapfill.tsx`, `ActivityCard.tsx`, `Clock.tsx`, `Sentence.tsx`, `levels.ts`, `Icon.tsx`, `wordPhotos.ts`, `controls.test.tsx`, `WordImage.tsx`, `Memory.tsx`, `Button.tsx`, `@testing-library/react`, `ui.test.tsx`, `ReportButton.tsx`, `Tabs.tsx`, `Toast.tsx`, `FeedbackBanner.tsx`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Why does `zod` connect `@testing-library/react` to `content/schema.ts`, `package.json`, `grammar/schema.ts`, `progressTransfer.ts`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Why does `page()` connect `e2e/helpers.ts` to `a11y.spec.ts`, `router.tsx`, `images/index.ts`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1706 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10952380952380952 - nodes in this community are weakly interconnected._
- **Should `sent` be split into smaller, more focused modules?**
  _Cohesion score 0.033194540828128616 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._