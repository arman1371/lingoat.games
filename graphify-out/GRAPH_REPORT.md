# Graph Report - lingoat.games  (2026-11-01)

## Corpus Check
- 602 files · ~637,108 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 3642 nodes · 10036 edges · 133 communities (124 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 170 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `182e8964`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Gapfill.test.tsx
- gap
- manifest.json
- german/conjugation.ts
- builders.ts
- B1.1 coverage and research doc
- activity
- german/numbers.ts
- content/schema.ts
- router.tsx
- u5-wohnung.ts
- package.json
- progressStore.ts
- GrammarTopic
- devDependencies
- PlayPage.tsx
- a2-2/index.ts
- react
- UnitContent
- build.mjs
- e2e/helpers.ts
- compilerOptions
- ActivityCard.tsx
- fr-a2-1/helpers.ts
- ref_lib_rng
- grammar.test.ts
- b1-1/index.ts
- compilerOptions
- c2-2/index.ts
- rng.ts
- meta
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- sortItems
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- grammar/index.ts
- levels.ts
- AppLayout.tsx
- Icon.tsx
- u4-famille.ts
- heard
- dependencies
- nouns.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- say
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
- grammar/grammar.test.tsx
- filters.ts
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- progressTransfer.ts
- u1-sante.ts
- Memory.tsx
- worker/index.ts
- Conjugation.tsx
- WordImage.tsx
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
- b2-2/index.ts
- fetch.ts
- market/logic.ts
- lib/report.ts
- c1-2/index.ts
- tenses.ts
- u3-woher.ts
- ui.test.tsx
- articles.ts
- turnstile.ts
- u1-journee.ts
- ReportButton.tsx
- images/index.ts
- forms.ts
- French A1.2 – syllabus research and plan
- section
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- Tabs.tsx
- French A2.2 – syllabus research and plan
- Toast.tsx
- ref_lib_german_conjugation
- u2-presenter.ts
- French A1.1 – syllabus research and plan
- vitest
- vite.config.ts
- FeedbackBanner.tsx
- u8-temps.ts
- u6-table.ts
- u7-ville.ts
- table
- u5-loisirs.ts
- b2-1.ts
- compare
- u2-fetes.ts
- French A2.1 – syllabus research and plan
- main
- Grammar lesson sources

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 173 edges
2. `activity()` - 156 edges
3. `vocabList()` - 144 edges
4. `byDe()` - 140 edges
5. `heard()` - 137 edges
6. `meta()` - 136 edges
7. `flashcards()` - 136 edges
8. `gap()` - 135 edges
9. `q()` - 134 edges
10. `tf()` - 134 edges

## Surprising Connections (you probably didn't know these)
- `Grammar hints` --references--> `main()`  [INFERRED]
  docs/b1-2-coverage.md → scripts/images/fetch.ts
- `Grammar` --references--> `statePassiveTable()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `French A1.1 (25 topics)` --references--> `frConjugationTable()`  [INFERRED]
  docs/grammar-sources.md → src/content/grammar/build.ts
- `One-time setup (by hand)` --references--> `main()`  [INFERRED]
  docs/code-quality.md → scripts/images/fetch.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (133 total, 9 thin omitted)

### Community 0 - "Gapfill.test.tsx"
Cohesion: 0.11
Nodes (22): ref_lib_german_nouns, pick(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+14 more)

### Community 1 - "gap"
Cohesion: 0.03
Nodes (107): customTable(), gap(), pastTable(), Pronoun, Question, readRound(), sepTable(), setRound() (+99 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "german/conjugation.ts"
Cohesion: 0.13
Nodes (23): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), Forms, IRREGULAR, konjunktiv2, MIXED_PRETERITE (+15 more)

### Community 4 - "builders.ts"
Cohesion: 0.05
Nodes (45): einkaufen, food, genderItems, shopping, vocab, chores, people, rules (+37 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "activity"
Cohesion: 0.04
Nodes (75): byes, feelings, hallo, hellos, polite, vocab, people, phrases (+67 more)

### Community 7 - "german/numbers.ts"
Cohesion: 0.07
Nodes (48): year(), below100(), below1000(), digitsToFrench(), LETTER_NAMES_FR, numberToFrench(), ONES, priceToFrench() (+40 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.06
Nodes (37): VocabList, GAME_TYPES, GameType, buildIndex(), ContentIndex, EMPTY_INDEX, Activity, ActivitySchema (+29 more)

### Community 9 - "router.tsx"
Cohesion: 0.11
Nodes (9): ref_react_dom_client, ref_react_router_dom, createAppRouter(), createRoutes(), createTestRouter(), pages, routerOptions(), src_index (+1 more)

### Community 10 - "u5-wohnung.ts"
Cohesion: 0.29
Nodes (5): ads, furniture, money, verbs, vocab

### Community 11 - "package.json"
Cohesion: 0.07
Nodes (29): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+21 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.10
Nodes (27): zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress(), nextStreak() (+19 more)

### Community 13 - "GrammarTopic"
Cohesion: 0.23
Nodes (8): B11_TOPICS, B12_TOPICS, examples(), list(), p(), GrammarTopic, B1_SOURCES, C1_SOURCES

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.04
Nodes (75): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_fulllessonlink, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar (+67 more)

### Community 16 - "a2-2/index.ts"
Cohesion: 0.07
Nodes (34): hints, hints, hints, hints, units, vocab, sortitTranslations, bankUnit (+26 more)

### Community 17 - "react"
Cohesion: 0.10
Nodes (44): What the issue contains, ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_components_wordimage, ref_lib_answer_check, ref_lib_tts, react (+36 more)

### Community 18 - "UnitContent"
Cohesion: 0.03
Nodes (108): UnitContent, q(), tf(), events, phrases, vocab, environment, materials (+100 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.05
Nodes (52): PAGES, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+44 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "ActivityCard.tsx"
Cohesion: 0.13
Nodes (14): ref_content_gametypes, ActivityCard(), Props, Chip(), ChipProps, Tag(), GameTile(), SIZES (+6 more)

### Community 23 - "fr-a2-1/helpers.ts"
Cohesion: 0.07
Nodes (32): ref_lib_french_tenses, Meta, VocabPathOptions, futurTable(), imparfaitTable(), pcReflexiveTable(), pcTable(), sortCards() (+24 more)

### Community 24 - "ref_lib_rng"
Cohesion: 0.17
Nodes (15): ref_content_languages, ref_lib_french_time, ref_lib_german_time, ref_lib_rng, ref_lib_spoken, AnalogClock(), ClockMaster(), buildClockOptions() (+7 more)

### Community 25 - "grammar.test.ts"
Cohesion: 0.05
Nodes (60): ref_test_contentsuite, ref_test_playability, content, units, vocab, alltag, stadt, wohnen (+52 more)

### Community 26 - "b1-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, feiern, umwelt, pannen, glueck, unterhaltung (+7 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "c2-2/index.ts"
Cohesion: 0.14
Nodes (13): content, units, vocab, sortitTranslations, kunst, literatur, kulturerbe, recht (+5 more)

### Community 29 - "rng.ts"
Cohesion: 0.40
Nodes (8): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle()

### Community 30 - "meta"
Cohesion: 0.06
Nodes (57): meta(), Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms (+49 more)

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

### Community 36 - "sortItems"
Cohesion: 0.07
Nodes (41): sortItems(), Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table(), k2ModalPastTable(), konjunktiv1() (+33 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "grammar/index.ts"
Cohesion: 0.09
Nodes (24): B22_TOPICS, C11_TOPICS, C12_TOPICS, GRAMMAR_TOPIC_BY_ID, GRAMMAR_TOPICS, topicsOfUnit(), unitsOfTopic(), GrammarModule (+16 more)

### Community 40 - "levels.ts"
Cohesion: 0.05
Nodes (47): ref_content_items, ref_content_tags, ContentContext, ContentProvider(), Props, State, Probe(), Strict() (+39 more)

### Community 41 - "AppLayout.tsx"
Cohesion: 0.14
Nodes (12): ref_components_ui_logo, ref_components_ui_statpill, ref_store_settingsstore, AppLayout(), NAV, Shell(), LanguageContext, useLanguage() (+4 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.14
Nodes (17): src_components_ui_icon_iconname, Props, IconButton(), Props, Size, SIZES, Variant, VARIANTS (+9 more)

### Community 43 - "u4-famille.ts"
Cohesion: 0.18
Nodes (10): adjectives, CEST_CARDS, emojiFamily, famille, family, meaning(), PAIRS, phrases (+2 more)

### Community 44 - "heard"
Cohesion: 0.05
Nodes (46): ref_lib_german_numbers, ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), places, vocab, ways, ads (+38 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "nouns.ts"
Cohesion: 0.20
Nodes (19): Gender, bareNoun(), buildNounIndex(), CASE_TAGS, drillsCase(), findGapNoun(), GapNoun, GENDER (+11 more)

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

### Community 51 - "say"
Cohesion: 0.04
Nodes (91): dictation(), say(), sent(), typed(), you(), authorities, countries, forms (+83 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "fr-a1-1/index.ts"
Cohesion: 0.16
Nodes (10): content, units, bonjour, byes, feelings, hellos, manners, polite (+2 more)

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
Cohesion: 0.27
Nodes (9): buildWordPhotoIndex(), key(), photoIdFor(), PhotoSource, index, manifest, vocab, withArticle() (+1 more)

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 73 - "grammar/grammar.test.tsx"
Cohesion: 0.14
Nodes (14): ref_content_grammar, ref_content_lessons, ref_games_shared_mistakehint, FullLessonLink(), GrammarLesson(), LessonMeta(), Props, GrammarSheet() (+6 more)

### Community 74 - "filters.ts"
Cohesion: 0.11
Nodes (21): ref_test_factories, nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path, activeFilterCount() (+13 more)

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
Cohesion: 0.09
Nodes (30): zod, applyImport(), applyImportAll(), buildExport(), count, day, exportFileName(), id (+22 more)

### Community 79 - "u1-sante.ts"
Cohesion: 0.13
Nodes (17): DialogueScene, gap(), GapItem, mc(), npc(), QuizQuestion, Turn, unitFr() (+9 more)

### Community 80 - "Memory.tsx"
Cohesion: 0.07
Nodes (30): ref_lib_sfx, ref_lib_useimagemanifest, ref_test_render, ref_test_speech, Blitz(), Dialogue(), config, BACK (+22 more)

### Community 81 - "worker/index.ts"
Cohesion: 0.22
Nodes (9): CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env(), run() (+1 more)

### Community 82 - "Conjugation.tsx"
Cohesion: 0.22
Nodes (13): ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), Forms, gradeTable() (+5 more)

### Community 83 - "WordImage.tsx"
Cohesion: 0.13
Nodes (14): In the app, ref_content_images, ref_lib_wordphotos, Props, SIZES, manifest, TileProps, WordImage() (+6 more)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "build.ts"
Cohesion: 0.12
Nodes (23): ref_lib_french_conjugation, ref_lib_german_adjectives, ref_lib_german_articles, A11_TOPICS, CASES, GENDERS, A12_TOPICS, A21_TOPICS (+15 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.22
Nodes (8): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 87 - "b1-2/index.ts"
Cohesion: 0.04
Nodes (51): sortitTranslations, sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, heimat, kunst (+43 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "README (lingoat)"
Cohesion: 0.07
Nodes (38): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine (+30 more)

### Community 90 - "@testing-library/react"
Cohesion: 0.06
Nodes (36): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+28 more)

### Community 91 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 92 - "scoring.test.ts"
Cohesion: 0.73
Nodes (4): accuracy(), GameResult, starsFor(), xpFor()

### Community 93 - "french/conjugation.ts"
Cohesion: 0.14
Nodes (21): conjugateFr(), ER_ENDINGS, ER_STRONG_STEM, forms(), FrenchForms, IR_ENDINGS, IRREGULAR, nousStem() (+13 more)

### Community 94 - "b2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, stadt, druck, netz, beziehungen, ernaehrung (+7 more)

### Community 95 - "fetch.ts"
Cohesion: 0.14
Nodes (20): ref_node_crypto, apiTurn, byId(), CACHE, download(), downloadTurn, downloadWithRetry(), exists() (+12 more)

### Community 96 - "market/logic.ts"
Cohesion: 0.31
Nodes (8): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market()

### Community 97 - "lib/report.ts"
Cohesion: 0.17
Nodes (16): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_PATH, REPORT_TYPE_META (+8 more)

### Community 98 - "c1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, team10, nachhaltigkeit, vortrag, finanzen, gesundheit (+7 more)

### Community 99 - "tenses.ts"
Cohesion: 0.18
Nodes (14): beforeI(), ETRE_VERBS, forms(), FUTURE_ENDINGS, FUTURE_STEM, futurSimple(), imparfait(), IMPARFAIT_ENDINGS (+6 more)

### Community 100 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (16): ref_games_shared_gameframe, DailyGoalCard(), Card(), Props, COLORS, Confetti(), Logo(), MARK (+8 more)

### Community 102 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "u1-journee.ts"
Cohesion: 0.15
Nodes (13): ref_lib_french_passecompose, frTable(), Table, unitFr(), chores, heard, journee, morning (+5 more)

### Community 105 - "ReportButton.tsx"
Cohesion: 0.14
Nodes (11): What the player sees, ref_components_ui_dialog, ref_components_ui_iconbutton, ref_lib_report, ref_lib_turnstile, ReportButton(), ReportContext, ReportDialog() (+3 more)

### Community 106 - "images/index.ts"
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 107 - "forms.ts"
Cohesion: 0.13
Nodes (22): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+14 more)

### Community 108 - "French A1.2 – syllabus research and plan"
Cohesion: 0.25
Nodes (6): Build plan, French A1.2 – syllabus research and plan, How the units were chosen, Sources (what was actually read), Unit 1 – Ma journée (`journee`), Unit 2 – Félicitations ! (`fetes`)

### Community 109 - "section"
Cohesion: 0.40
Nodes (3): section(), FR22_TOPICS, FR22_SOURCES

### Community 110 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 111 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 112 - "French A2.2 – syllabus research and plan"
Cohesion: 0.40
Nodes (4): Build status, French A2.2 – syllabus research and plan, Sources (what was actually read), Units

### Community 113 - "Toast.tsx"
Cohesion: 0.33
Nodes (5): ICON, Props, STYLE, Toast(), Tone

### Community 114 - "ref_lib_german_conjugation"
Cohesion: 0.19
Nodes (8): ref_lib_german_conjugation, ref_lib_german_konjunktiv1, mistake(), C21_TOPICS, futur2Rows, WERDEN, C22_TOPICS, C2_SOURCES

### Community 115 - "u2-presenter.ts"
Cohesion: 0.20
Nodes (9): unitFr(), countries, GENDER_CARDS, jobs, nationalities, pairs, phrases, presenter (+1 more)

### Community 116 - "French A1.1 – syllabus research and plan"
Cohesion: 0.50
Nodes (4): Build plan, French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read)

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

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
Cohesion: 0.18
Nodes (9): ref_lib_french_numbers, drinksMeals, foods, phrases, pictureQuiz, quantities, SORT_CARDS, table (+1 more)

### Community 123 - "u7-ville.ts"
Cohesion: 0.20
Nodes (9): phrases, pictureQuiz, places, route, SORT_CARDS, ville, vocab, where (+1 more)

### Community 124 - "table"
Cohesion: 0.16
Nodes (10): ref_lib_persons, table(), FR12_TOPICS, pcTable(), reflexiveTable(), etreTable(), FR21_TOPICS, FR12_SOURCES (+2 more)

### Community 125 - "u5-loisirs.ts"
Cohesion: 0.22
Nodes (8): activities, likes, loisirs, phrases, pictureQuiz, SORT_CARDS, sports, vocab

### Community 126 - "b2-1.ts"
Cohesion: 0.29
Nodes (4): B21_TOPICS, sein, werden, B2_SOURCES

### Community 127 - "compare"
Cohesion: 0.27
Nodes (7): compare(), frConjugationTable(), FR11_TOPICS_B, FR11_TOPICS, conj(), FR_SOURCES, wiktionary()

### Community 128 - "u2-fetes.ts"
Cohesion: 0.15
Nodes (12): pcTable(), events, family, fetes, heard, looks, markers, PARTICIPLE_CARDS (+4 more)

### Community 131 - "French A2.1 – syllabus research and plan"
Cohesion: 0.40
Nodes (4): Build plan, French A2.1 – syllabus research and plan, Sources (what was actually read), Units

### Community 134 - "main"
Cohesion: 0.14
Nodes (15): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources, Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify) (+7 more)

### Community 135 - "Grammar lesson sources"
Cohesion: 0.15
Nodes (12): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), French A1.1 (25 topics), French A1.2 (5 topics so far) (+4 more)

## Knowledge Gaps
- **1726 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1721 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1968 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Gapfill.test.tsx`, `router.tsx`, `package.json`, `PlayPage.tsx`, `ActivityCard.tsx`, `ref_lib_rng`, `Sentence.tsx`, `levels.ts`, `AppLayout.tsx`, `Icon.tsx`, `grammar/grammar.test.tsx`, `controls.test.tsx`, `Memory.tsx`, `Conjugation.tsx`, `WordImage.tsx`, `Button.tsx`, `@testing-library/react`, `ui.test.tsx`, `ReportButton.tsx`, `Tabs.tsx`, `Toast.tsx`, `FeedbackBanner.tsx`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `zod` connect `progressTransfer.ts` to `content/schema.ts`, `@testing-library/react`, `package.json`, `grammar/index.ts`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `README (lingoat)` connect `README (lingoat)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `main`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `C2.1 – syllabus research, coverage and overlap with A1.1–C1.2`, `C2.2 – syllabus research, coverage and overlap with A1.1–C2.1`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1726 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gapfill.test.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11174242424242424 - nodes in this community are weakly interconnected._
- **Should `gap` be split into smaller, more focused modules?**
  _Cohesion score 0.0345203488372093 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._