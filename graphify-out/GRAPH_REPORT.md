# Graph Report - lingoat.games  (2026-10-31)

## Corpus Check
- 555 files · ~586,677 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 3403 nodes · 9403 edges · 135 communities (123 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 157 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `72752b75`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Gapfill.test.tsx
- tf
- manifest.json
- german/conjugation.ts
- a2-2/helpers.ts
- B1.1 coverage and research doc
- meta
- german/numbers.ts
- content/schema.ts
- router.tsx
- flashcards
- package.json
- progressStore.ts
- AppLayout.tsx
- devDependencies
- PlayPage.tsx
- content/hints.ts
- react
- gap
- build.mjs
- e2e/helpers.ts
- compilerOptions
- b1-1/index.ts
- lessons.ts
- Clock.tsx
- a2-1/index.ts
- b2-1/index.ts
- compilerOptions
- levels.ts
- rng.ts
- WordImage.tsx
- sentence/logic.ts
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- Memory.tsx
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- grammar/grammar.test.tsx
- c1-2/index.ts
- c2-1/index.ts
- Icon.tsx
- u1-bonjour.ts
- heard
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
- u7-klima.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- u3-nombres.ts
- e2e/tsconfig.json
- u9-jobsuche.ts
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
- vite.config.ts
- filters.ts
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- progressTransfer.ts
- Deployment doc
- u3-woher.ts
- worker/index.ts
- Conjugation.tsx
- ref_content_tags
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- c2-2/helpers.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- builders.ts
- Button.tsx
- main
- @testing-library/react
- u7-tag.ts
- grammar/index.ts
- french/conjugation.ts
- StatePanel.tsx
- fetch.ts
- languages.ts
- lib/report.ts
- nouns.ts
- images/index.ts
- ActivityCard.tsx
- ui.test.tsx
- Vocab
- turnstile.ts
- b1-2/index.ts
- ReportButton.tsx
- scoring.test.ts
- forms.ts
- UnitContent
- README (lingoat)
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- french/numbers.ts
- path.ts
- market/logic.ts
- konjunktiv1.ts
- u2-presenter.ts
- u10-bank.ts
- vitest
- articles.ts
- memory.spec.ts
- FeedbackBanner.tsx
- Toast.tsx
- a11y.spec.ts
- items.ts
- u8-nuancen.ts
- u5-staat.ts
- u4-recht.ts
- u1-kunst.ts
- u2-literatur.ts
- c2-2/u6-engagement.ts
- u4-kunst.ts
- French A1.1 – syllabus research and plan
- Grammar lesson sources

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 159 edges
2. `activity()` - 146 edges
3. `heard()` - 136 edges
4. `vocabList()` - 135 edges
5. `meta()` - 134 edges
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

## Communities (135 total, 12 thin omitted)

### Community 0 - "Gapfill.test.tsx"
Cohesion: 0.11
Nodes (22): ref_lib_german_nouns, pick(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+14 more)

### Community 1 - "tf"
Cohesion: 0.07
Nodes (33): sortItems(), tf(), unitB11(), events, phrases, vocab, mishaps, reactions (+25 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "german/conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "a2-2/helpers.ts"
Cohesion: 0.04
Nodes (98): customTable(), pastTable(), Pronoun, Question, readRound(), sepTable(), setRound(), table() (+90 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "meta"
Cohesion: 0.05
Nodes (58): meta(), say(), typed(), you(), authorities, countries, forms, nat() (+50 more)

### Community 7 - "german/numbers.ts"
Cohesion: 0.11
Nodes (30): year(), below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES (+22 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.07
Nodes (29): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConjugationConfig, DialogueConfig (+21 more)

### Community 9 - "router.tsx"
Cohesion: 0.11
Nodes (10): ref_react_dom_client, ref_react_router_dom, ErrorPage(), createAppRouter(), createRoutes(), createTestRouter(), pages, routerOptions() (+2 more)

### Community 10 - "flashcards"
Cohesion: 0.06
Nodes (43): Engines, flashcards(), inOtherLanguage(), Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table() (+35 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.10
Nodes (27): zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress(), nextStreak() (+19 more)

### Community 13 - "AppLayout.tsx"
Cohesion: 0.08
Nodes (25): ref_components_languageswitcher, ref_components_ui_logo, ref_components_ui_segment, ref_components_ui_statpill, ref_components_ui_toast, ref_components_ui_toggle, ref_content_languages, ref_lib_progresstransfer (+17 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.05
Nodes (55): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar, ref_components_grammar_usegrammar (+47 more)

### Community 16 - "content/hints.ts"
Cohesion: 0.16
Nodes (12): hints, hints, hints, hints, adjectiveHint(), ENDINGS, HintableItem, HintEntry (+4 more)

### Community 17 - "react"
Cohesion: 0.09
Nodes (48): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_components_wordimage, ref_content_gametypes, @dnd-kit/core, ref_lib_answer_check, ref_lib_tts (+40 more)

### Community 18 - "gap"
Cohesion: 0.04
Nodes (106): dictation(), gap(), q(), sent(), adjGap(), environment, materials, vocab (+98 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.06
Nodes (45): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+37 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "b1-1/index.ts"
Cohesion: 0.05
Nodes (45): sortitTranslations, sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, feiern, umwelt (+37 more)

### Community 23 - "lessons.ts"
Cohesion: 0.13
Nodes (18): Meta, VocabPathOptions, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS (+10 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.06
Nodes (48): ref_test_contentsuite, content, units, vocab, alltag, stadt, wohnen, arbeit (+40 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.12
Nodes (16): content, units, vocab, sortitTranslations, wissenschaft, unterwegs, klima, beziehungen (+8 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "levels.ts"
Cohesion: 0.18
Nodes (15): ContentContext, Props, State, Probe(), Strict(), useContent(), useContentState(), LanguageId (+7 more)

### Community 29 - "rng.ts"
Cohesion: 0.40
Nodes (8): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle()

### Community 30 - "WordImage.tsx"
Cohesion: 0.08
Nodes (21): In the app, What the issue contains, ref_lib_useimagemanifest, ref_lib_wordphotos, Props, SIZES, manifest, TileProps (+13 more)

### Community 31 - "sentence/logic.ts"
Cohesion: 0.54
Nodes (6): buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence()

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
Cohesion: 0.09
Nodes (23): ref_lib_sfx, ref_test_render, ref_test_speech, Blitz(), Dialogue(), config, BACK, config (+15 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "grammar/grammar.test.tsx"
Cohesion: 0.09
Nodes (21): ref_components_ui_iconbutton, ref_content_grammar, ref_content_grammar_load, ref_content_lessons, ref_games_shared_hints, ref_games_shared_mistakehint, FullLessonLink(), GrammarIndex() (+13 more)

### Community 40 - "c1-2/index.ts"
Cohesion: 0.10
Nodes (20): earlierLevels, key(), REVIEW_WORDS, content, units, vocab, sortitTranslations, team10 (+12 more)

### Community 41 - "c2-1/index.ts"
Cohesion: 0.13
Nodes (14): REVIEW_WORDS, content, units, vocab, sortitTranslations, sprache, arbeit, wirtschaft (+6 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.12
Nodes (19): SIZES, TILE, src_components_ui_icon_iconname, Props, IconButton(), Props, Size, SIZES (+11 more)

### Community 43 - "u1-bonjour.ts"
Cohesion: 0.17
Nodes (10): units, bonjour, byes, feelings, hellos, manners, polite, vocab (+2 more)

### Community 44 - "heard"
Cohesion: 0.04
Nodes (59): ref_lib_german_numbers, ref_lib_german_ordinals, einkaufen, food, genderItems, shopping, vocab, src_content_a1_2_helpers_activity (+51 more)

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
Cohesion: 0.39
Nodes (10): AnswerVerdict, checkAnswer(), checkNumeric(), foldUmlauts(), normalize(), normalizeDigits(), parsePriceToCents(), stripAccents() (+2 more)

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

### Community 55 - "u7-klima.ts"
Cohesion: 0.25
Nodes (7): unitC22(), grammarTags, handeln, klima, LESSON, vocab, welt

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
Cohesion: 0.14
Nodes (7): ref_lib_french_numbers, num(), NUMBERS, numberVocab, numCard(), vocab, words

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "u9-jobsuche.ts"
Cohesion: 0.16
Nodes (8): ads, jobs, reflexive, vocab, memories, stages, story, vocab

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

### Community 73 - "vite.config.ts"
Cohesion: 0.25
Nodes (5): ref_node_fs, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 74 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 75 - "controls.test.tsx"
Cohesion: 0.13
Nodes (15): ChoiceCards(), Props, Props, Segment(), Skeleton(), panelId(), Props, Tab (+7 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.20
Nodes (9): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1, Sources (+1 more)

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
Cohesion: 0.20
Nodes (14): ref_components_grammar_fulllessonlink, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), Forms (+6 more)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "c2-2/helpers.ts"
Cohesion: 0.20
Nodes (14): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+6 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.22
Nodes (8): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 87 - "builders.ts"
Cohesion: 0.05
Nodes (55): byes, feelings, hallo, hellos, polite, vocab, familie, female (+47 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "main"
Cohesion: 0.14
Nodes (15): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources, Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify) (+7 more)

### Community 90 - "@testing-library/react"
Cohesion: 0.06
Nodes (35): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+27 more)

### Community 91 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 92 - "grammar/index.ts"
Cohesion: 0.06
Nodes (70): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, ref_lib_german_konjunktiv1, A11_TOPICS, CASES, GENDERS, A12_TOPICS (+62 more)

### Community 93 - "french/conjugation.ts"
Cohesion: 0.14
Nodes (20): conjugateFr(), ER_ENDINGS, ER_STRONG_STEM, forms(), FrenchForms, IR_ENDINGS, IRREGULAR, nousStem() (+12 more)

### Community 94 - "StatePanel.tsx"
Cohesion: 0.21
Nodes (11): Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood, MascotShape, Kind (+3 more)

### Community 95 - "fetch.ts"
Cohesion: 0.13
Nodes (21): ref_node_crypto, sharp, apiTurn, byId(), CACHE, download(), downloadTurn, downloadWithRetry() (+13 more)

### Community 96 - "languages.ts"
Cohesion: 0.33
Nodes (9): DEFAULT_LANGUAGE, getLanguage(), isLanguageId(), LANGUAGE_IDS, LanguageMeta, languageOfPath(), LANGUAGES, pathInLanguage() (+1 more)

### Community 97 - "lib/report.ts"
Cohesion: 0.17
Nodes (16): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_PATH, REPORT_TYPE_META (+8 more)

### Community 98 - "nouns.ts"
Cohesion: 0.20
Nodes (19): Gender, bareNoun(), buildNounIndex(), CASE_TAGS, drillsCase(), findGapNoun(), GapNoun, GENDER (+11 more)

### Community 99 - "images/index.ts"
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 100 - "ActivityCard.tsx"
Cohesion: 0.21
Nodes (9): ActivityCard(), Props, Chip(), ChipProps, Tag(), GameTile(), Icon(), PX (+1 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (17): ref_games_shared_gameframe, DailyGoalCard(), Card(), Props, COLORS, Confetti(), Logo(), MARK (+9 more)

### Community 102 - "Vocab"
Cohesion: 0.20
Nodes (9): VocabList, ContentProvider(), buildIndex(), ContentIndex, EMPTY_INDEX, Activity, ActivitySchema, Vocab (+1 more)

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "b1-2/index.ts"
Cohesion: 0.09
Nodes (17): ref_test_playability, units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen (+9 more)

### Community 105 - "ReportButton.tsx"
Cohesion: 0.15
Nodes (10): What the player sees, ref_components_ui_dialog, ref_lib_report, ref_lib_turnstile, ReportButton(), ReportContext, ReportDialog(), Status (+2 more)

### Community 106 - "scoring.test.ts"
Cohesion: 0.73
Nodes (4): accuracy(), GameResult, starsFor(), xpFor()

### Community 107 - "forms.ts"
Cohesion: 0.13
Nodes (22): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+14 more)

### Community 108 - "UnitContent"
Cohesion: 0.05
Nodes (51): UnitContent, people, phrases, vocab, wer, freizeit, hobbies, vocab (+43 more)

### Community 109 - "README (lingoat)"
Cohesion: 0.12
Nodes (23): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine (+15 more)

### Community 110 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 111 - "french/numbers.ts"
Cohesion: 0.29
Nodes (9): below100(), below1000(), digitsToFrench(), LETTER_NAMES_FR, numberToFrench(), ONES, spellOutFr(), TENS (+1 more)

### Community 112 - "path.ts"
Cohesion: 0.29
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 113 - "market/logic.ts"
Cohesion: 0.31
Nodes (8): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market()

### Community 114 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 115 - "u2-presenter.ts"
Cohesion: 0.14
Nodes (14): Build plan, ref_lib_french_conjugation, ref_lib_persons, frTable(), Table, unitFr(), countries, GENDER_CARDS (+6 more)

### Community 116 - "u10-bank.ts"
Cohesion: 0.15
Nodes (9): ads, furniture, money, verbs, vocab, bank, insurance, money (+1 more)

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 120 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FEEDBACK_TINT, FeedbackBanner(), FeedbackKind, Props, STYLE

### Community 121 - "Toast.tsx"
Cohesion: 0.33
Nodes (5): ICON, Props, STYLE, Toast(), Tone

### Community 123 - "items.ts"
Cohesion: 0.33
Nodes (7): ref_test_factories, getItems(), itemCount(), ITEMS_KEY, ItemsKey, mapItems(), withItems()

### Community 124 - "u8-nuancen.ts"
Cohesion: 0.25
Nodes (7): withLesson(), grammarTags, LESSON, nuancen, redewendungen, stil, vocab

### Community 125 - "u5-staat.ts"
Cohesion: 0.25
Nodes (7): withWhy(), debatte, grammarTags, LESSON, staat, staatPolitik, vocab

### Community 126 - "u4-recht.ts"
Cohesion: 0.25
Nodes (6): gericht, grammarTags, LESSON, recht, verfahren, vocab

### Community 127 - "u1-kunst.ts"
Cohesion: 0.29
Nodes (6): betrieb, grammarTags, kunst, LESSON, urteil, vocab

### Community 128 - "u2-literatur.ts"
Cohesion: 0.29
Nodes (6): buch, grammarTags, kritik, LESSON, literatur, vocab

### Community 129 - "c2-2/u6-engagement.ts"
Cohesion: 0.29
Nodes (6): engagement, gesellschaft, grammarTags, LESSON, verben, vocab

### Community 130 - "u4-kunst.ts"
Cohesion: 0.33
Nodes (5): adjectives, art, music, tickets, vocab

### Community 131 - "French A1.1 – syllabus research and plan"
Cohesion: 0.50
Nodes (3): French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read)

### Community 135 - "Grammar lesson sources"
Cohesion: 0.22
Nodes (8): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), Grammar lesson sources, Limits of the research

## Knowledge Gaps
- **1623 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1618 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1853 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Gapfill.test.tsx`, `router.tsx`, `package.json`, `AppLayout.tsx`, `PlayPage.tsx`, `Clock.tsx`, `levels.ts`, `WordImage.tsx`, `Memory.tsx`, `grammar/grammar.test.tsx`, `Icon.tsx`, `wordPhotos.ts`, `controls.test.tsx`, `Conjugation.tsx`, `Button.tsx`, `@testing-library/react`, `StatePanel.tsx`, `ActivityCard.tsx`, `ui.test.tsx`, `ReportButton.tsx`, `FeedbackBanner.tsx`, `Toast.tsx`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `Gapfill.test.tsx`, `Memory.tsx`, `ui.test.tsx`, `grammar/grammar.test.tsx`, `router.tsx`, `ReportButton.tsx`, `package.json`, `controls.test.tsx`, `AppLayout.tsx`, `react`, `Conjugation.tsx`, `vitest`, `Clock.tsx`, `levels.ts`, `WordImage.tsx`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Why does `zod` connect `progressTransfer.ts` to `content/schema.ts`, `@testing-library/react`, `package.json`, `grammar/index.ts`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1623 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gapfill.test.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11174242424242424 - nodes in this community are weakly interconnected._
- **Should `tf` be split into smaller, more focused modules?**
  _Cohesion score 0.0664451827242525 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._