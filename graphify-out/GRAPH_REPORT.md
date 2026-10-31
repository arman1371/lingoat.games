# Graph Report - lingoat.games  (2026-10-31)

## Corpus Check
- 563 files · ~601,740 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 3459 nodes · 9555 edges · 133 communities (122 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 159 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2747dee8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Quiz.tsx
- builders.ts
- manifest.json
- german/conjugation.ts
- gap
- B1.1 coverage and research doc
- q
- german/numbers.ts
- content/schema.ts
- AppLayout.tsx
- activity
- package.json
- progressStore.ts
- grammar/index.ts
- devDependencies
- PlayPage.tsx
- ref_lib_german_conjugation
- react
- you
- build.mjs
- e2e/helpers.ts
- compilerOptions
- c1-1/index.ts
- lessons.ts
- Clock.tsx
- a1-2/index.ts
- b2-1/index.ts
- compilerOptions
- ContentProvider.tsx
- rng.ts
- WordImage.tsx
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- c2-2/helpers.ts
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- useSequence
- c1-2/index.ts
- grammar.test.ts
- Icon.tsx
- u4-famille.ts
- heard
- dependencies
- a1-1/index.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- meta
- appIcons.test.ts
- app-icons.md
- srs.ts
- b2-2/index.ts
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
- grammar/grammar.test.tsx
- filters.ts
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- progressTransfer.ts
- Architecture doc
- u3-woher.ts
- worker/index.ts
- Conjugation.tsx
- ref_content_tags
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- c2-2/index.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- SettingsPage.tsx
- Button.tsx
- README (lingoat)
- @testing-library/react
- u7-tag.ts
- build.ts
- french/conjugation.ts
- u7-ville.ts
- fetch.ts
- levels.ts
- lib/report.ts
- nouns.ts
- images/index.ts
- grammar/schema.ts
- ui.test.tsx
- a2-2.ts
- turnstile.ts
- b1-2/index.ts
- ReportButton.tsx
- scoring.test.ts
- forms.ts
- UnitContent
- u6-table.ts
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- items.ts
- path.ts
- konjunktiv1.ts
- sources.ts
- u2-presenter.ts
- fr-a1-1/index.ts
- vitest
- articles.ts
- vite.config.ts
- FeedbackBanner.tsx
- IconButton.tsx
- a11y.spec.ts
- worker/report.test.ts
- u1-bonjour.ts
- Toast.tsx
- French A1.1 – syllabus research and plan
- b2-1.ts
- c2-1.ts
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- Grammar lesson sources

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 163 edges
2. `activity()` - 150 edges
3. `vocabList()` - 139 edges
4. `heard()` - 136 edges
5. `byDe()` - 135 edges
6. `meta()` - 134 edges
7. `gap()` - 133 edges
8. `q()` - 132 edges
9. `tf()` - 132 edges
10. `say()` - 132 edges

## Surprising Connections (you probably didn't know these)
- `Grammar hints` --references--> `main()`  [INFERRED]
  docs/b1-2-coverage.md → scripts/images/fetch.ts
- `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1` --references--> `main()`  [INFERRED]
  docs/c1-2-coverage.md → scripts/images/fetch.ts
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

## Communities (133 total, 11 thin omitted)

### Community 0 - "Quiz.tsx"
Cohesion: 0.11
Nodes (22): ref_lib_german_nouns, pick(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+14 more)

### Community 1 - "builders.ts"
Cohesion: 0.06
Nodes (33): people, phrases, vocab, wer, familie, female, male, relatives (+25 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "german/conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "gap"
Cohesion: 0.04
Nodes (107): gap(), pastTable(), Pronoun, Question, readRound(), sent(), sepTable(), setRound() (+99 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.12
Nodes (19): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Lazy level content packs (levels.ts), Tags and filters (+11 more)

### Community 6 - "q"
Cohesion: 0.05
Nodes (81): q(), say(), tf(), memory(), quizDeEn(), unitC12(), conflict, team (+73 more)

### Community 7 - "german/numbers.ts"
Cohesion: 0.07
Nodes (49): year(), below100(), below1000(), digitsToFrench(), LETTER_NAMES_FR, numberToFrench(), ONES, priceToFrench() (+41 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.07
Nodes (29): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConjugationConfig, DialogueConfig (+21 more)

### Community 9 - "AppLayout.tsx"
Cohesion: 0.06
Nodes (22): ref_components_ui_logo, ref_components_ui_statpill, ref_content_languages, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout(), NAV (+14 more)

### Community 10 - "activity"
Cohesion: 0.04
Nodes (54): byes, feelings, hallo, hellos, polite, vocab, freizeit, hobbies (+46 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.10
Nodes (27): zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress(), nextStreak() (+19 more)

### Community 13 - "grammar/index.ts"
Cohesion: 0.11
Nodes (19): A11_TOPICS, A12_TOPICS, A21_TOPICS, B11_TOPICS, B12_TOPICS, B21_TOPICS, B22_TOPICS, C11_TOPICS (+11 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.05
Nodes (61): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_fulllessonlink, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar (+53 more)

### Community 16 - "ref_lib_german_conjugation"
Cohesion: 0.14
Nodes (16): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, hints, hints, hints, hints, adjectiveHint() (+8 more)

### Community 17 - "react"
Cohesion: 0.07
Nodes (43): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_components_wordimage, @dnd-kit/core, ref_lib_tts, react, Props (+35 more)

### Community 18 - "you"
Cohesion: 0.04
Nodes (95): dictation(), you(), Blanks, hint(), SixForms, unitB12(), europe, home (+87 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.06
Nodes (46): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+38 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "c1-1/index.ts"
Cohesion: 0.12
Nodes (15): content, units, vocab, sortitTranslations, wirtschaft, gesellschaft, zeit, digital (+7 more)

### Community 23 - "lessons.ts"
Cohesion: 0.13
Nodes (18): Meta, VocabPathOptions, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS (+10 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.20
Nodes (14): ref_lib_french_time, ref_lib_german_time, ref_lib_rng, ref_lib_spoken, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime() (+6 more)

### Community 25 - "a1-2/index.ts"
Cohesion: 0.07
Nodes (38): ref_test_contentsuite, ref_test_playability, content, units, vocab, alltag, stadt, wohnen (+30 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, wissenschaft, unterwegs, klima, beziehungen, besitz (+7 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "ContentProvider.tsx"
Cohesion: 0.13
Nodes (19): ref_test_factories, VocabList, ContentContext, ContentProvider(), Props, State, Probe(), Strict() (+11 more)

### Community 29 - "rng.ts"
Cohesion: 0.40
Nodes (8): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle()

### Community 30 - "WordImage.tsx"
Cohesion: 0.08
Nodes (23): In the app, ref_content_images, ref_lib_useimagemanifest, ref_lib_wordphotos, Props, SIZES, manifest, TileProps (+15 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.22
Nodes (10): ref_test_speech, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT (+2 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.14
Nodes (7): num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen

### Community 34 - "lib.ts"
Cohesion: 0.19
Nodes (19): The pipeline (`scripts/images/`), cleanQuery(), cropsWell(), isBlocked(), isCandidate(), Overrides, pagePath(), Pick (+11 more)

### Community 35 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, check, deploy, dev, format, format:check, icons (+9 more)

### Community 36 - "c2-2/helpers.ts"
Cohesion: 0.09
Nodes (34): Grammar, Engines, customTable(), reflexiveAccTable(), reflexiveDativeTable(), compound(), passivePastTable(), passivePerfektTable() (+26 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "useSequence"
Cohesion: 0.08
Nodes (34): What the issue contains, ref_lib_scoring, ref_lib_sfx, ref_test_render, Blitz(), collectNpcLines(), Dialogue(), latestNpcText() (+26 more)

### Community 40 - "c1-2/index.ts"
Cohesion: 0.10
Nodes (20): earlierLevels, key(), REVIEW_WORDS, content, units, vocab, sortitTranslations, team10 (+12 more)

### Community 41 - "grammar.test.ts"
Cohesion: 0.10
Nodes (17): content, units, vocab, sortitTranslations, sprache, arbeit, wirtschaft, digitalUnit (+9 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.12
Nodes (23): GameTile(), SIZES, TILE, Icon(), src_components_ui_icon_iconname, Props, ICON_PATHS, IconName (+15 more)

### Community 43 - "u4-famille.ts"
Cohesion: 0.18
Nodes (10): adjectives, CEST_CARDS, emojiFamily, famille, family, meaning(), PAIRS, phrases (+2 more)

### Community 44 - "heard"
Cohesion: 0.04
Nodes (54): ref_lib_german_numbers, ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), unit12(), chores, people, rules (+46 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "a1-1/index.ts"
Cohesion: 0.06
Nodes (37): units, vocab, sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, beruf (+29 more)

### Community 47 - "guard.ts"
Cohesion: 0.14
Nodes (10): Claim, dayOf(), DEFAULT_LIMITS, Entry, GuardCore, GuardLimits, ReportGuard, StateLike (+2 more)

### Community 48 - "answer-check.ts"
Cohesion: 0.39
Nodes (10): AnswerVerdict, checkAnswer(), checkNumeric(), foldUmlauts(), normalize(), normalizeDigits(), parsePriceToCents(), stripAccents() (+2 more)

### Community 49 - "sfx.ts"
Cohesion: 0.29
Nodes (7): AudioContextCtor, Note, playSfx(), resetSfx(), SFX, SfxKind, sfxSupported()

### Community 50 - "tts.test.ts"
Cohesion: 0.32
Nodes (8): pickGermanVoice(), pickVoice(), setSpeechLanguage(), speak(), SpeakOptions, stopSpeaking(), Utterance, ttsSupported()

### Community 51 - "meta"
Cohesion: 0.05
Nodes (54): meta(), sortItems(), typed(), authorities, countries, forms, nat(), vocab (+46 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "b2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, stadt, druck, netz, beziehungen, ernaehrung (+7 more)

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
Nodes (15): ref_content_grammar, ref_content_lessons, ref_games_shared_hints, ref_games_shared_mistakehint, FullLessonLink(), GrammarLesson(), LessonMeta(), Props (+7 more)

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
Nodes (9): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1, Sources (+1 more)

### Community 78 - "progressTransfer.ts"
Cohesion: 0.09
Nodes (30): zod, applyImport(), applyImportAll(), buildExport(), count, day, exportFileName(), id (+22 more)

### Community 79 - "Architecture doc"
Cohesion: 0.12
Nodes (21): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Architecture doc, Accessible by default, ProgressRepository (local-first storage seam), Seeded determinism (rng.ts) (+13 more)

### Community 80 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 81 - "worker/index.ts"
Cohesion: 0.22
Nodes (9): CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env(), run() (+1 more)

### Community 82 - "Conjugation.tsx"
Cohesion: 0.19
Nodes (15): ref_lib_answer_check, ref_lib_german_forms, ref_lib_persons, Conjugation(), config, forms, CellVerdicts, conjugationWhy() (+7 more)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "c2-2/index.ts"
Cohesion: 0.06
Nodes (39): unitC22(), withLesson(), withWhy(), units, vocab, sortitTranslations, betrieb, grammarTags (+31 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.25
Nodes (7): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 87 - "SettingsPage.tsx"
Cohesion: 0.13
Nodes (14): ref_components_ui_choicecards, ref_components_ui_segment, ref_components_ui_toast, ref_components_ui_toggle, ref_lib_progresstransfer, SheetProps, TRIGGER, Variant (+6 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "README (lingoat)"
Cohesion: 0.13
Nodes (15): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine, Procedure: add a new unit (builders.ts), Content is data, engines are generic, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts) (+7 more)

### Community 90 - "@testing-library/react"
Cohesion: 0.06
Nodes (34): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+26 more)

### Community 91 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 92 - "build.ts"
Cohesion: 0.35
Nodes (16): CASES, GENDERS, articleTable(), CASES, compare(), conjugationTable(), examples(), GENDERS (+8 more)

### Community 93 - "french/conjugation.ts"
Cohesion: 0.14
Nodes (20): conjugateFr(), ER_ENDINGS, ER_STRONG_STEM, forms(), FrenchForms, IR_ENDINGS, IRREGULAR, nousStem() (+12 more)

### Community 94 - "u7-ville.ts"
Cohesion: 0.20
Nodes (9): phrases, pictureQuiz, places, route, SORT_CARDS, ville, vocab, where (+1 more)

### Community 95 - "fetch.ts"
Cohesion: 0.10
Nodes (31): Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify), Locally, Pinned install, Repo settings, The workflow, ref_node_crypto (+23 more)

### Community 96 - "levels.ts"
Cohesion: 0.19
Nodes (14): DEFAULT_LANGUAGE, getLanguage(), isLanguageId(), LANGUAGE_IDS, LanguageId, LanguageMeta, languageOfPath(), LANGUAGES (+6 more)

### Community 97 - "lib/report.ts"
Cohesion: 0.17
Nodes (16): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_PATH, REPORT_TYPE_META (+8 more)

### Community 98 - "nouns.ts"
Cohesion: 0.24
Nodes (16): bareNoun(), buildNounIndex(), CASE_TAGS, drillsCase(), findGapNoun(), GENDER, isCapitalised(), isDeterminer() (+8 more)

### Community 99 - "images/index.ts"
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 100 - "grammar/schema.ts"
Cohesion: 0.14
Nodes (13): BlockSchema, Callout, Compare, Examples, GrammarTopicSchema, lessonId, List, Paragraph (+5 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.08
Nodes (21): ref_games_shared_gameframe, ActivityCard(), DailyGoalCard(), Card(), Props, Chip(), ChipProps, Tag() (+13 more)

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
Cohesion: 0.14
Nodes (11): What the player sees, ref_components_ui_dialog, ref_components_ui_iconbutton, ref_lib_report, ref_lib_turnstile, ReportButton(), ReportContext, ReportDialog() (+3 more)

### Community 106 - "scoring.test.ts"
Cohesion: 0.73
Nodes (4): accuracy(), GameResult, starsFor(), xpFor()

### Community 107 - "forms.ts"
Cohesion: 0.16
Nodes (16): adjectiveEnding(), row(), adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms() (+8 more)

### Community 108 - "UnitContent"
Cohesion: 0.05
Nodes (38): UnitContent, unitB22(), green, mobility, vocab, decide, stress, vocab (+30 more)

### Community 109 - "u6-table.ts"
Cohesion: 0.20
Nodes (8): ref_lib_french_numbers, drinksMeals, foods, phrases, pictureQuiz, quantities, SORT_CARDS, vocab

### Community 110 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 111 - "items.ts"
Cohesion: 0.39
Nodes (6): getItems(), itemCount(), ITEMS_KEY, ItemsKey, mapItems(), withItems()

### Community 112 - "path.ts"
Cohesion: 0.29
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 113 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 114 - "sources.ts"
Cohesion: 0.20
Nodes (4): B1_SOURCES, C1_SOURCES, Source, SOURCES

### Community 115 - "u2-presenter.ts"
Cohesion: 0.14
Nodes (14): Build plan, ref_lib_french_conjugation, frTable(), Table, unitFr(), countries, GENDER_CARDS, jobs (+6 more)

### Community 116 - "fr-a1-1/index.ts"
Cohesion: 0.15
Nodes (12): content, units, nombres, activities, likes, loisirs, phrases, pictureQuiz (+4 more)

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

### Community 121 - "IconButton.tsx"
Cohesion: 0.29
Nodes (6): IconButton(), Props, Size, SIZES, Variant, VARIANTS

### Community 123 - "worker/report.test.ts"
Cohesion: 0.29
Nodes (3): Call, goodBody, setup()

### Community 125 - "u1-bonjour.ts"
Cohesion: 0.22
Nodes (7): bonjour, byes, feelings, hellos, manners, polite, vocab

### Community 126 - "Toast.tsx"
Cohesion: 0.33
Nodes (5): ICON, Props, STYLE, Toast(), Tone

### Community 128 - "French A1.1 – syllabus research and plan"
Cohesion: 0.50
Nodes (3): French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read)

### Community 130 - "b2-1.ts"
Cohesion: 0.29
Nodes (4): ref_lib_german_konjunktiv1, sein, werden, B2_SOURCES

### Community 131 - "c2-1.ts"
Cohesion: 0.29
Nodes (4): C21_TOPICS, futur2Rows, WERDEN, C2_SOURCES

### Community 134 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 135 - "Grammar lesson sources"
Cohesion: 0.22
Nodes (8): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), Grammar lesson sources, Limits of the research

## Knowledge Gaps
- **1651 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1646 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1882 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Quiz.tsx`, `AppLayout.tsx`, `package.json`, `PlayPage.tsx`, `Clock.tsx`, `ContentProvider.tsx`, `WordImage.tsx`, `Sentence.tsx`, `useSequence`, `Icon.tsx`, `grammar/grammar.test.tsx`, `controls.test.tsx`, `Conjugation.tsx`, `SettingsPage.tsx`, `Button.tsx`, `@testing-library/react`, `ui.test.tsx`, `ReportButton.tsx`, `FeedbackBanner.tsx`, `IconButton.tsx`, `Toast.tsx`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `Quiz.tsx`, `ui.test.tsx`, `useSequence`, `grammar/grammar.test.tsx`, `AppLayout.tsx`, `package.json`, `ReportButton.tsx`, `controls.test.tsx`, `PlayPage.tsx`, `react`, `Conjugation.tsx`, `vitest`, `Clock.tsx`, `ContentProvider.tsx`, `WordImage.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `zod` connect `progressTransfer.ts` to `content/schema.ts`, `@testing-library/react`, `package.json`, `grammar/schema.ts`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1651 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1140819964349376 - nodes in this community are weakly interconnected._
- **Should `builders.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05919661733615222 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._