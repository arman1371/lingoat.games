# Graph Report - lingoat.games  (2026-10-31)

## Corpus Check
- 552 files · ~583,619 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 3375 nodes · 9359 edges · 126 communities (115 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 156 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `48026f01`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Gapfill.test.tsx
- tf
- manifest.json
- german/conjugation.ts
- typed
- B1.1 coverage and research doc
- q
- numbers.ts
- content/schema.ts
- AppLayout.tsx
- gap
- package.json
- progressStore.ts
- grammar/index.ts
- devDependencies
- PlayPage.tsx
- ref_lib_german_conjugation
- react
- activity
- build.mjs
- e2e/helpers.ts
- compilerOptions
- grammar.test.ts
- lessons.ts
- Clock.tsx
- a2-1/index.ts
- b2-1/index.ts
- compilerOptions
- levels.ts
- rng.ts
- sources.ts
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- Memory.tsx
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- grammar/grammar.test.tsx
- c1-2/index.ts
- grammar/schema.ts
- Icon.tsx
- ref_test_playability
- UnitContent
- dependencies
- a2-2/index.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- b2-2/index.ts
- appIcons.test.ts
- app-icons.md
- srs.ts
- c2-2/index.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- a2-2.ts
- e2e/tsconfig.json
- builders.ts
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
- vite.config.ts
- filters.ts
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- README (lingoat)
- progressTransfer.ts
- Deployment doc
- u3-woher.ts
- worker/index.ts
- Conjugation.tsx
- ref_content_schema
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- c2-2/helpers.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- meta
- Button.tsx
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- @testing-library/react
- u7-tag.ts
- build.ts
- french/conjugation.ts
- b1-1/index.ts
- fetch.ts
- Tabs.tsx
- lib/report.ts
- nouns.ts
- images/index.ts
- ActivityCard.tsx
- ui.test.tsx
- a1-1/types.ts
- turnstile.ts
- b1-2/index.ts
- SettingsPage.tsx
- scoring.test.ts
- forms.ts
- sent
- Architecture doc
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- b2-1.ts
- u8-einkaufen.ts
- u5-familie.ts
- konjunktiv1.ts
- u2-presenter.ts
- u5-wohnung.ts
- vitest
- articles.ts
- memory.spec.ts
- FeedbackBanner.tsx
- Toast.tsx
- a11y.spec.ts
- Grammar lesson sources

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 158 edges
2. `activity()` - 145 edges
3. `heard()` - 136 edges
4. `meta()` - 134 edges
5. `vocabList()` - 134 edges
6. `gap()` - 133 edges
7. `q()` - 132 edges
8. `tf()` - 132 edges
9. `say()` - 132 edges
10. `you()` - 132 edges

## Surprising Connections (you probably didn't know these)
- `Grammar hints` --references--> `main()`  [INFERRED]
  docs/b1-2-coverage.md → scripts/images/fetch.ts
- `Grammar` --references--> `statePassiveTable()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1` --references--> `main()`  [INFERRED]
  docs/c1-2-coverage.md → scripts/images/fetch.ts
- `One-time setup (by hand)` --references--> `main()`  [INFERRED]
  docs/code-quality.md → scripts/images/fetch.ts
- `Pinned install` --references--> `main()`  [INFERRED]
  docs/graphify.md → scripts/images/fetch.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (126 total, 11 thin omitted)

### Community 0 - "Gapfill.test.tsx"
Cohesion: 0.06
Nodes (38): ref_lib_german_nouns, ref_lib_useimagemanifest, ref_lib_wordphotos, ref_test_render, @testing-library/user-event, pick(), answerRight(), answerWrong() (+30 more)

### Community 1 - "tf"
Cohesion: 0.06
Nodes (39): tf(), unitB11(), events, phrases, vocab, environment, materials, vocab (+31 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "german/conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "typed"
Cohesion: 0.03
Nodes (115): customTable(), pastTable(), Pronoun, Question, readRound(), sepTable(), setRound(), table() (+107 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.12
Nodes (19): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Lazy level content packs (levels.ts), Tags and filters (+11 more)

### Community 6 - "q"
Cohesion: 0.07
Nodes (39): q(), sortItems(), unitC12(), conflict, team, vocab, farming, sustain (+31 more)

### Community 7 - "numbers.ts"
Cohesion: 0.11
Nodes (30): year(), below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES (+22 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.07
Nodes (29): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConjugationConfig, DialogueConfig (+21 more)

### Community 9 - "AppLayout.tsx"
Cohesion: 0.07
Nodes (19): ref_components_ui_logo, ref_components_ui_statpill, ref_content_languages, ref_react_dom_client, ref_react_router_dom, AppLayout(), NAV, Shell() (+11 more)

### Community 10 - "gap"
Cohesion: 0.08
Nodes (43): Engines, gap(), you(), Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table() (+35 more)

### Community 11 - "package.json"
Cohesion: 0.07
Nodes (29): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+21 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.10
Nodes (27): zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress(), nextStreak() (+19 more)

### Community 13 - "grammar/index.ts"
Cohesion: 0.11
Nodes (19): A11_TOPICS, A12_TOPICS, B11_TOPICS, B12_TOPICS, B21_TOPICS, B22_TOPICS, C11_TOPICS, C12_TOPICS (+11 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.04
Nodes (64): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_fulllessonlink, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar (+56 more)

### Community 16 - "ref_lib_german_conjugation"
Cohesion: 0.14
Nodes (17): ref_lib_german_adjectives, ref_lib_german_conjugation, hints, hints, hints, hints, Meta, adjectiveHint() (+9 more)

### Community 17 - "react"
Cohesion: 0.07
Nodes (58): What the issue contains, ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_components_wordimage, ref_lib_answer_check, ref_lib_tts, react (+50 more)

### Community 18 - "activity"
Cohesion: 0.04
Nodes (63): byes, feelings, hallo, hellos, polite, vocab, Blanks, compound() (+55 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.06
Nodes (45): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+37 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "grammar.test.ts"
Cohesion: 0.10
Nodes (18): content, units, vocab, sortitTranslations, wirtschaft, gesellschaft, zeit, digital (+10 more)

### Community 23 - "lessons.ts"
Cohesion: 0.15
Nodes (15): VocabPathOptions, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags(), LESSONS (+7 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.06
Nodes (50): ref_test_contentsuite, content, units, vocab, alltag, stadt, wohnen, arbeit (+42 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.06
Nodes (35): sortitTranslations, sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, wissenschaft, unterwegs (+27 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "levels.ts"
Cohesion: 0.12
Nodes (25): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+17 more)

### Community 29 - "rng.ts"
Cohesion: 0.40
Nodes (8): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle()

### Community 30 - "sources.ts"
Cohesion: 0.15
Nodes (5): B1_SOURCES, C1_SOURCES, Source, SOURCES, C2_SOURCES

### Community 31 - "Sentence.tsx"
Cohesion: 0.42
Nodes (7): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence()

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

### Community 36 - "Memory.tsx"
Cohesion: 0.19
Nodes (13): ref_lib_sfx, Blitz(), buildColumns(), isMatch(), MemoryCard, MemoryColumns, ColumnProps, Memory() (+5 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "grammar/grammar.test.tsx"
Cohesion: 0.14
Nodes (15): ref_content_grammar, ref_content_lessons, ref_games_shared_hints, ref_games_shared_mistakehint, FullLessonLink(), GrammarLesson(), LessonMeta(), Props (+7 more)

### Community 40 - "c1-2/index.ts"
Cohesion: 0.10
Nodes (20): earlierLevels, key(), REVIEW_WORDS, content, units, vocab, sortitTranslations, team10 (+12 more)

### Community 41 - "grammar/schema.ts"
Cohesion: 0.14
Nodes (13): BlockSchema, Callout, Compare, Examples, GrammarTopicSchema, lessonId, List, Paragraph (+5 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.14
Nodes (17): src_components_ui_icon_iconname, Props, IconButton(), Props, Size, SIZES, Variant, VARIANTS (+9 more)

### Community 43 - "ref_test_playability"
Cohesion: 0.24
Nodes (4): ref_test_playability, content, content, units

### Community 44 - "UnitContent"
Cohesion: 0.05
Nodes (51): ref_lib_german_numbers, ref_lib_german_ordinals, UnitContent, src_content_a1_2_helpers_activity, heard(), chores, people, rules (+43 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "a2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, bankUnit, leben, arbeit, lernen, sportUnit (+7 more)

### Community 47 - "guard.ts"
Cohesion: 0.13
Nodes (10): Claim, dayOf(), DEFAULT_LIMITS, Entry, GuardCore, GuardLimits, ReportGuard, StateLike (+2 more)

### Community 48 - "answer-check.ts"
Cohesion: 0.44
Nodes (9): AnswerVerdict, checkAnswer(), checkNumeric(), foldUmlauts(), normalize(), normalizeDigits(), parsePriceToCents(), stripAccents() (+1 more)

### Community 49 - "sfx.ts"
Cohesion: 0.29
Nodes (7): AudioContextCtor, Note, playSfx(), resetSfx(), SFX, SfxKind, sfxSupported()

### Community 50 - "tts.test.ts"
Cohesion: 0.32
Nodes (8): pickGermanVoice(), pickVoice(), setSpeechLanguage(), speak(), SpeakOptions, stopSpeaking(), Utterance, ttsSupported()

### Community 51 - "b2-2/index.ts"
Cohesion: 0.12
Nodes (16): content, units, vocab, sortitTranslations, stadt, druck, netz, beziehungen (+8 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "c2-2/index.ts"
Cohesion: 0.05
Nodes (54): unitC22(), vocabPath(), withLesson(), withWhy(), units, vocab, sortitTranslations, betrieb (+46 more)

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "worker/report.ts"
Cohesion: 0.17
Nodes (18): addPlusOne(), createIssue(), fail(), get(), githubHeaders(), GuardStub, handleReport(), issueBody() (+10 more)

### Community 59 - "a2-2.ts"
Cohesion: 0.24
Nodes (9): ref_lib_german_articles, A21_TOPICS, superlativeRows(), A22_TOPICS, adjectivePhrases(), CASES, GENDERS, K2_VERBS (+1 more)

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "builders.ts"
Cohesion: 0.05
Nodes (70): people, phrases, vocab, wer, freizeit, hobbies, vocab, family (+62 more)

### Community 62 - "upload.ts"
Cohesion: 0.16
Nodes (18): aws4fetch, ref_node_util, bucketUrl(), CACHE_CONTROL, CONTENT_TYPE, decodeXml(), OBJECT_NAME, parseList() (+10 more)

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "WordImage.tsx"
Cohesion: 0.10
Nodes (21): In the app, ref_content_images, Props, SIZES, manifest, TileProps, WordImage(), WordImageSize (+13 more)

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 73 - "vite.config.ts"
Cohesion: 0.25
Nodes (5): ref_node_fs, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 74 - "filters.ts"
Cohesion: 0.08
Nodes (27): ref_test_factories, nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path, getItems() (+19 more)

### Community 75 - "controls.test.tsx"
Cohesion: 0.10
Nodes (20): ChoiceCards(), Props, Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood (+12 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "README (lingoat)"
Cohesion: 0.12
Nodes (16): Procedure: add a new game engine, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts), Leitner SRS review (srs.ts), C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Grammar, Grammar hints (+8 more)

### Community 78 - "progressTransfer.ts"
Cohesion: 0.09
Nodes (30): zod, applyImport(), applyImportAll(), buildExport(), count, day, exportFileName(), id (+22 more)

### Community 79 - "Deployment doc"
Cohesion: 0.12
Nodes (15): ProgressRepository (local-first storage seam), Deployment doc, Cloudflare Pages / Workers hosting, Alternative hosts (Vercel, Netlify, Render), PWA service worker and caching headers, wrangler.jsonc SPA config, Storage and delivery, Where the photos come from (+7 more)

### Community 80 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 81 - "worker/index.ts"
Cohesion: 0.22
Nodes (9): CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env(), run() (+1 more)

### Community 82 - "Conjugation.tsx"
Cohesion: 0.32
Nodes (10): ref_lib_german_forms, ref_lib_persons, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), Forms (+2 more)

### Community 83 - "ref_content_schema"
Cohesion: 0.11
Nodes (17): ref_content_items, ref_content_schema, ref_content_tags, ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_games_types, ref_lib_scoring (+9 more)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "c2-2/helpers.ts"
Cohesion: 0.20
Nodes (14): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+6 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.22
Nodes (8): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 87 - "meta"
Cohesion: 0.08
Nodes (43): dictation(), meta(), say(), Blanks, k1PerfectTable(), k1Table(), lx(), sixForms() (+35 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 90 - "@testing-library/react"
Cohesion: 0.06
Nodes (29): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+21 more)

### Community 91 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 92 - "build.ts"
Cohesion: 0.31
Nodes (18): CASES, GENDERS, articleTable(), CASES, compare(), conjugationTable(), examples(), GENDERS (+10 more)

### Community 93 - "french/conjugation.ts"
Cohesion: 0.14
Nodes (20): conjugateFr(), ER_ENDINGS, ER_STRONG_STEM, forms(), FrenchForms, IR_ENDINGS, IRREGULAR, nousStem() (+12 more)

### Community 94 - "b1-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, feiern, umwelt, pannen, glueck, unterhaltung (+7 more)

### Community 95 - "fetch.ts"
Cohesion: 0.10
Nodes (30): Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify), Locally, Pinned install, Repo settings, The workflow, ref_node_crypto (+22 more)

### Community 96 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 97 - "lib/report.ts"
Cohesion: 0.17
Nodes (16): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_PATH, REPORT_TYPE_META (+8 more)

### Community 98 - "nouns.ts"
Cohesion: 0.24
Nodes (16): bareNoun(), buildNounIndex(), CASE_TAGS, drillsCase(), findGapNoun(), GENDER, isCapitalised(), isDeterminer() (+8 more)

### Community 99 - "images/index.ts"
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 100 - "ActivityCard.tsx"
Cohesion: 0.17
Nodes (12): ref_content_gametypes, ActivityCard(), Props, Chip(), ChipProps, Tag(), GameTile(), SIZES (+4 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (17): ref_games_shared_gameframe, DailyGoalCard(), Card(), Props, COLORS, Confetti(), Logo(), MARK (+9 more)

### Community 102 - "a1-1/types.ts"
Cohesion: 0.21
Nodes (8): VocabList, buildIndex(), ContentIndex, EMPTY_INDEX, Activity, ActivitySchema, Vocab, vocab

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen, digital (+7 more)

### Community 105 - "SettingsPage.tsx"
Cohesion: 0.09
Nodes (22): What the player sees, ref_components_ui_choicecards, ref_components_ui_dialog, ref_components_ui_iconbutton, ref_components_ui_segment, ref_components_ui_toast, ref_components_ui_toggle, ref_lib_progresstransfer (+14 more)

### Community 106 - "scoring.test.ts"
Cohesion: 0.73
Nodes (4): accuracy(), GameResult, starsFor(), xpFor()

### Community 107 - "forms.ts"
Cohesion: 0.16
Nodes (16): adjectiveEnding(), row(), adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms() (+8 more)

### Community 108 - "sent"
Cohesion: 0.09
Nodes (42): sent(), hint(), unitB22(), green, mobility, vocab, decide, stress (+34 more)

### Community 109 - "Architecture doc"
Cohesion: 0.20
Nodes (14): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new unit (builders.ts) (+6 more)

### Community 110 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 111 - "b2-1.ts"
Cohesion: 0.29
Nodes (4): ref_lib_german_konjunktiv1, sein, werden, B2_SOURCES

### Community 112 - "u8-einkaufen.ts"
Cohesion: 0.25
Nodes (5): einkaufen, food, genderItems, shopping, vocab

### Community 113 - "u5-familie.ts"
Cohesion: 0.29
Nodes (5): familie, female, male, relatives, vocab

### Community 114 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 115 - "u2-presenter.ts"
Cohesion: 0.07
Nodes (24): Build plan, French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read), ref_lib_french_conjugation, frTable(), Table, unitFr() (+16 more)

### Community 116 - "u5-wohnung.ts"
Cohesion: 0.29
Nodes (5): ads, furniture, money, verbs, vocab

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "articles.ts"
Cohesion: 0.16
Nodes (17): DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, Case, DEFINITE, definiteArticle() (+9 more)

### Community 120 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FEEDBACK_TINT, FeedbackBanner(), FeedbackKind, Props, STYLE

### Community 121 - "Toast.tsx"
Cohesion: 0.33
Nodes (5): ICON, Props, STYLE, Toast(), Tone

### Community 135 - "Grammar lesson sources"
Cohesion: 0.22
Nodes (8): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), Grammar lesson sources, Limits of the research

## Knowledge Gaps
- **1615 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1610 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1837 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Gapfill.test.tsx`, `AppLayout.tsx`, `package.json`, `PlayPage.tsx`, `Clock.tsx`, `levels.ts`, `Sentence.tsx`, `Memory.tsx`, `grammar/grammar.test.tsx`, `Icon.tsx`, `WordImage.tsx`, `controls.test.tsx`, `Conjugation.tsx`, `ref_content_schema`, `Button.tsx`, `@testing-library/react`, `Tabs.tsx`, `ActivityCard.tsx`, `ui.test.tsx`, `SettingsPage.tsx`, `FeedbackBanner.tsx`, `Toast.tsx`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `WordImage.tsx`, `Gapfill.test.tsx`, `Memory.tsx`, `ui.test.tsx`, `grammar/grammar.test.tsx`, `SettingsPage.tsx`, `controls.test.tsx`, `package.json`, `PlayPage.tsx`, `react`, `Conjugation.tsx`, `ref_content_schema`, `vitest`, `Clock.tsx`, `levels.ts`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Why does `vitest` connect `vitest` to `lib.ts`, `package.json`, `guard.ts`, `worker/index.ts`, `worker/report.ts`, `upload.ts`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1615 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gapfill.test.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05844155844155844 - nodes in this community are weakly interconnected._
- **Should `tf` be split into smaller, more focused modules?**
  _Cohesion score 0.06334841628959276 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._