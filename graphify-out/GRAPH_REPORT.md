# Graph Report - lingoat.games  (2026-10-25)

## Corpus Check
- 478 files · ~492,827 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 5, .ico 1, .properties 1)

## Summary
- 3027 nodes · 8410 edges · 113 communities (103 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 131 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cfd3b714`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- c1-2/index.ts
- builders.ts
- manifest.json
- conjugation.ts
- heard
- B1.1 coverage and research doc
- ReportButton.tsx
- numbers.ts
- schema.ts
- @testing-library/react
- a1-2/index.ts
- package.json
- progressStore.ts
- UnitContent
- devDependencies
- PlayPage.tsx
- b1-1/index.ts
- react
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
- Memory.tsx
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- Market.tsx
- scripts
- tf
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- StatePanel.tsx
- meta
- router.tsx
- Icon.tsx
- fetch.ts
- gap
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
- c2-2/helpers.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- u5-familie.ts
- e2e/tsconfig.json
- lib.ts
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
- Gapfill.test.tsx
- Code graph (Graphify)
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- filters.ts
- Architecture doc
- you
- worker/index.ts
- Conjugation.test.tsx
- DailyGoalCard.tsx
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- forms.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- a2-1/index.ts
- Button.tsx
- u3-woher.ts
- a2-2/index.ts
- images/index.ts
- b2-2/index.ts
- b1-2/index.ts
- u1-hallo.ts
- a1-1/types.ts
- Tabs.tsx
- lib/report.ts
- nouns.ts
- UmlautKeyboard.tsx
- U
- ui.test.tsx
- turnstile.ts
- articles.ts
- README (lingoat)
- vite.config.ts
- items.ts
- scoring.test.ts
- vitest
- konjunktiv1.ts
- q

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
- `Repo settings` --references--> `main()`  [INFERRED]
  docs/graphify.md → scripts/images/fetch.ts
- `The workflow` --references--> `main()`  [INFERRED]
  docs/graphify.md → scripts/images/fetch.ts
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1` --references--> `main()`  [INFERRED]
  docs/c1-2-coverage.md → scripts/images/fetch.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (113 total, 10 thin omitted)

### Community 0 - "c1-2/index.ts"
Cohesion: 0.12
Nodes (16): content, units, vocab, sortitTranslations, team10, nachhaltigkeit, vortrag, finanzen (+8 more)

### Community 1 - "builders.ts"
Cohesion: 0.05
Nodes (91): dictation(), clarify, languages, vocab, green, mobility, vocab, decide (+83 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "heard"
Cohesion: 0.03
Nodes (93): ref_lib_german_numbers, ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), pastTable(), Pronoun, Question, readRound() (+85 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.12
Nodes (19): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Lazy level content packs (levels.ts), Tags and filters (+11 more)

### Community 6 - "ReportButton.tsx"
Cohesion: 0.15
Nodes (10): What the player sees, ref_components_ui_iconbutton, ref_lib_report, ref_lib_turnstile, ReportButton(), ReportContext, ReportDialog(), Status (+2 more)

### Community 7 - "numbers.ts"
Cohesion: 0.11
Nodes (30): year(), below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES (+22 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.06
Nodes (36): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+28 more)

### Community 10 - "a1-2/index.ts"
Cohesion: 0.07
Nodes (32): sortitTranslations, units, vocab, sortitTranslations, alltag, stadt, wohnen, arbeit (+24 more)

### Community 11 - "package.json"
Cohesion: 0.07
Nodes (29): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+21 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.11
Nodes (22): zustand, ref_zustand_middleware, ActivityProgress, dailyXp, initialProgress(), nextStreak(), ProgressActions, ProgressData (+14 more)

### Community 13 - "UnitContent"
Cohesion: 0.08
Nodes (44): ref_lib_german_konjunktiv1, UnitContent, say(), activity(), Blanks, k1PerfectTable(), k1Table(), lx() (+36 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.07
Nodes (44): ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_reportbutton, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti (+36 more)

### Community 16 - "b1-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, feiern, umwelt, pannen, glueck, unterhaltung (+7 more)

### Community 17 - "react"
Cohesion: 0.08
Nodes (52): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_content_lessons, @dnd-kit/core, ref_lib_answer_check, ref_lib_tts, react (+44 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.14
Nodes (17): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, hints, hints, hints, hints, adjectiveHint() (+9 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.07
Nodes (44): PAGES, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+36 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "c2-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, vocab, sortitTranslations, sprache, arbeit, wirtschaft, digitalUnit (+5 more)

### Community 23 - "lessons.ts"
Cohesion: 0.13
Nodes (18): Meta, VocabPathOptions, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS (+10 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.33
Nodes (9): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+1 more)

### Community 25 - "label"
Cohesion: 0.08
Nodes (32): ref_test_contentsuite, ref_test_playability, content, content, key(), REVIEW_WORDS, content, key() (+24 more)

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
Cohesion: 0.40
Nodes (8): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle()

### Community 30 - "Memory.tsx"
Cohesion: 0.11
Nodes (23): ref_lib_sfx, ref_test_render, ref_test_speech, Blitz(), answerRight(), answerWrong(), config, prompt() (+15 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.24
Nodes (9): buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT, config (+1 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.14
Nodes (7): num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen

### Community 34 - "Market.tsx"
Cohesion: 0.23
Nodes (11): ref_components_wordimage, adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents() (+3 more)

### Community 35 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, check, deploy, dev, format, format:check, icons (+9 more)

### Community 36 - "tf"
Cohesion: 0.06
Nodes (37): sortItems(), tf(), dream, together, vocab, europe, home, vocab (+29 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "StatePanel.tsx"
Cohesion: 0.21
Nodes (11): Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood, MascotShape, Kind (+3 more)

### Community 40 - "meta"
Cohesion: 0.07
Nodes (45): meta(), typed(), authorities, countries, forms, nat(), vocab, flashcards() (+37 more)

### Community 41 - "router.tsx"
Cohesion: 0.07
Nodes (16): ref_components_ui_logo, ref_components_ui_skeleton, ref_components_ui_statpill, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout(), NAV (+8 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.10
Nodes (24): FeedbackBanner(), FeedbackKind, Props, STYLE, Icon(), src_components_ui_icon_iconname, Props, IconButton() (+16 more)

### Community 43 - "fetch.ts"
Cohesion: 0.11
Nodes (28): Code quality: SonarQube Cloud, One-time setup (by hand), ref_node_crypto, sharp, apiTurn, byId(), CACHE, download() (+20 more)

### Community 44 - "gap"
Cohesion: 0.04
Nodes (71): gap(), sepTable(), table(), reflexiveTable(), learning, school, subjects, vocab (+63 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "levels.ts"
Cohesion: 0.24
Nodes (13): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+5 more)

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
Cohesion: 0.12
Nodes (9): freizeit, hobbies, vocab, dayParts, days, routine, tag, timeWords (+1 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "c2-2/helpers.ts"
Cohesion: 0.05
Nodes (58): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+50 more)

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "worker/report.ts"
Cohesion: 0.17
Nodes (18): addPlusOne(), createIssue(), fail(), get(), githubHeaders(), GuardStub, handleReport(), issueBody() (+10 more)

### Community 59 - "u5-familie.ts"
Cohesion: 0.12
Nodes (12): people, phrases, vocab, wer, familie, female, male, relatives (+4 more)

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "lib.ts"
Cohesion: 0.21
Nodes (17): The pipeline (`scripts/images/`), cleanQuery(), cropsWell(), isBlocked(), isCandidate(), pagePath(), pickHit(), PixabayHit (+9 more)

### Community 62 - "upload.ts"
Cohesion: 0.16
Nodes (18): aws4fetch, ref_node_util, bucketUrl(), CACHE_CONTROL, CONTENT_TYPE, decodeXml(), OBJECT_NAME, parseList() (+10 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "WordImage.tsx"
Cohesion: 0.07
Nodes (26): In the app, What the issue contains, ref_content_images, ref_lib_useimagemanifest, ref_lib_wordphotos, Props, SIZES, manifest (+18 more)

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

### Community 74 - "Code graph (Graphify)"
Cohesion: 0.40
Nodes (4): Code graph (Graphify), Locally, Repo settings, The workflow

### Community 75 - "controls.test.tsx"
Cohesion: 0.13
Nodes (12): Props, Segment(), Skeleton(), Props, TextField(), ICON, Props, STYLE (+4 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.20
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 79 - "Architecture doc"
Cohesion: 0.10
Nodes (24): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Architecture doc, Accessible by default, ProgressRepository (local-first storage seam), Seeded determinism (rng.ts) (+16 more)

### Community 80 - "you"
Cohesion: 0.07
Nodes (32): you(), events, phrases, vocab, environment, materials, vocab, mishaps (+24 more)

### Community 81 - "worker/index.ts"
Cohesion: 0.22
Nodes (9): CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env(), run() (+1 more)

### Community 82 - "Conjugation.test.tsx"
Cohesion: 0.29
Nodes (8): ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), gradeTable(), pronounOrder

### Community 83 - "DailyGoalCard.tsx"
Cohesion: 0.50
Nodes (3): DailyGoalCard(), ProgressRing(), Props

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "forms.ts"
Cohesion: 0.16
Nodes (16): adjectiveEnding(), row(), adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms() (+8 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.17
Nodes (11): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources (+3 more)

### Community 87 - "a2-1/index.ts"
Cohesion: 0.14
Nodes (13): units, vocab, sortitTranslations, beruf, online, freizeit, wetter, bahn (+5 more)

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
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 92 - "b2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, stadt, druck, netz, beziehungen, ernaehrung (+7 more)

### Community 93 - "b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen, digital (+7 more)

### Community 94 - "u1-hallo.ts"
Cohesion: 0.12
Nodes (11): byes, feelings, hallo, hellos, polite, vocab, einkaufen, food (+3 more)

### Community 95 - "a1-1/types.ts"
Cohesion: 0.12
Nodes (14): ref_test_factories, nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path, VocabList (+6 more)

### Community 96 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 97 - "lib/report.ts"
Cohesion: 0.17
Nodes (16): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_PATH, REPORT_TYPE_META (+8 more)

### Community 98 - "nouns.ts"
Cohesion: 0.22
Nodes (16): Gender, bareNoun(), buildNounIndex(), findGapNoun(), GapNoun, GENDER, isCapitalised(), isDeterminer() (+8 more)

### Community 99 - "UmlautKeyboard.tsx"
Cohesion: 0.50
Nodes (3): KEYS, Props, UmlautKeyboard()

### Community 101 - "ui.test.tsx"
Cohesion: 0.09
Nodes (22): ref_content_gametypes, ref_games_shared_gameframe, ActivityCard(), Props, Card(), Props, Chip(), ChipProps (+14 more)

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "articles.ts"
Cohesion: 0.18
Nodes (14): DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, Case, DEFINITE, definiteArticle() (+6 more)

### Community 105 - "README (lingoat)"
Cohesion: 0.08
Nodes (24): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine, Procedure: add a new unit (builders.ts), Content is data, engines are generic, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts) (+16 more)

### Community 106 - "vite.config.ts"
Cohesion: 0.25
Nodes (5): ref_node_fs, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 107 - "items.ts"
Cohesion: 0.48
Nodes (5): getItems(), itemCount(), ITEMS_KEY, ItemsKey, withItems()

### Community 108 - "scoring.test.ts"
Cohesion: 0.73
Nodes (4): accuracy(), GameResult, starsFor(), xpFor()

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 121 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 129 - "q"
Cohesion: 0.04
Nodes (86): customTable(), q(), k2Table(), passiveTable(), reflexiveAccTable(), Blanks, compound(), futurTable() (+78 more)

## Knowledge Gaps
- **1524 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1519 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1705 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Tabs.tsx`, `WordImage.tsx`, `Market.tsx`, `ui.test.tsx`, `ReportButton.tsx`, `StatePanel.tsx`, `router.tsx`, `Icon.tsx`, `package.json`, `controls.test.tsx`, `Gapfill.test.tsx`, `levels.ts`, `PlayPage.tsx`, `@testing-library/react`, `Button.tsx`, `Clock.tsx`, `Memory.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Why does `README (lingoat)` connect `README (lingoat)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Code graph (Graphify)`, `fetch.ts`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `Architecture doc`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `WordImage.tsx`, `Market.tsx`, `ui.test.tsx`, `ReportButton.tsx`, `router.tsx`, `Gapfill.test.tsx`, `controls.test.tsx`, `package.json`, `levels.ts`, `react`, `Conjugation.test.tsx`, `vitest`, `Clock.tsx`, `Memory.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1524 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `c1-2/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11695906432748537 - nodes in this community are weakly interconnected._
- **Should `builders.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.04505287556135014 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._