# Graph Report - lingoat.games  (2026-11-01)

## Corpus Check
- 580 files · ~622,468 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 3539 nodes · 9770 edges · 124 communities (114 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 165 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d479a30c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Quiz.tsx
- vocabList
- manifest.json
- german/conjugation.ts
- gap
- B1.1 coverage and research doc
- byDe
- german/numbers.ts
- content/schema.ts
- router.tsx
- a2-2/helpers.ts
- package.json
- progressStore.ts
- grammar/index.ts
- devDependencies
- PlayPage.tsx
- content/hints.ts
- react
- say
- build.mjs
- e2e/helpers.ts
- compilerOptions
- ActivityCard.tsx
- lessons.ts
- Clock.tsx
- a1-2/index.ts
- b1-1/index.ts
- compilerOptions
- AppLayout.tsx
- rng.ts
- activity
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- meta
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- Memory.tsx
- levels.ts
- b2-1/index.ts
- Icon.tsx
- u4-famille.ts
- heard
- dependencies
- builders.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- q
- appIcons.test.ts
- app-icons.md
- srs.ts
- fr-a1-1/index.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- u3-nombres.ts
- e2e/tsconfig.json
- grammar.test.ts
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
- c1-1/index.ts
- WordImage.tsx
- worker/index.ts
- Gapfill.tsx
- fr-a1-2/content.test.ts
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- a2-1/index.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- b2-2/index.ts
- Button.tsx
- README (lingoat)
- @testing-library/react
- u7-tag.ts
- scoring.test.ts
- french/conjugation.ts
- a2-2/index.ts
- fetch.ts
- Vocab
- lib/report.ts
- nouns.ts
- French A1.2 – syllabus research and plan
- u3-woher.ts
- ui.test.tsx
- path.ts
- turnstile.ts
- b1-2/index.ts
- ReportButton.tsx
- images/index.ts
- forms.ts
- UnitContent
- u8-einkaufen.ts
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- Tabs.tsx
- a11y.spec.ts
- Toast.tsx
- u2-presenter.ts
- vitest
- articles.ts
- vite.config.ts
- FeedbackBanner.tsx
- u2-fetes.ts
- main
- Grammar lesson sources

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 168 edges
2. `activity()` - 153 edges
3. `vocabList()` - 142 edges
4. `byDe()` - 138 edges
5. `heard()` - 136 edges
6. `meta()` - 134 edges
7. `flashcards()` - 134 edges
8. `gap()` - 133 edges
9. `q()` - 132 edges
10. `tf()` - 132 edges

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

## Communities (124 total, 10 thin omitted)

### Community 0 - "Quiz.tsx"
Cohesion: 0.11
Nodes (23): ref_lib_german_nouns, pick(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+15 more)

### Community 1 - "vocabList"
Cohesion: 0.03
Nodes (97): freizeit, hobbies, vocab, readRound(), sepTable(), setRound(), Blanks, reflexiveTable() (+89 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "german/conjugation.ts"
Cohesion: 0.13
Nodes (23): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), Forms, IRREGULAR, konjunktiv2, MIXED_PRETERITE (+15 more)

### Community 4 - "gap"
Cohesion: 0.06
Nodes (39): gap(), you(), unitB11(), events, phrases, vocab, environment, materials (+31 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "byDe"
Cohesion: 0.05
Nodes (81): dictation(), sent(), unitB22(), green, mobility, vocab, decide, stress (+73 more)

### Community 7 - "german/numbers.ts"
Cohesion: 0.07
Nodes (48): year(), below100(), below1000(), digitsToFrench(), LETTER_NAMES_FR, numberToFrench(), ONES, priceToFrench() (+40 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.07
Nodes (29): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConjugationConfig, DialogueConfig (+21 more)

### Community 9 - "router.tsx"
Cohesion: 0.11
Nodes (9): ref_react_dom_client, ref_react_router_dom, createAppRouter(), createRoutes(), createTestRouter(), pages, routerOptions(), src_index (+1 more)

### Community 10 - "a2-2/helpers.ts"
Cohesion: 0.07
Nodes (55): customTable(), pastTable(), Pronoun, Question, table(), Turn, unit12(), chores (+47 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.10
Nodes (27): zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress(), nextStreak() (+19 more)

### Community 13 - "grammar/index.ts"
Cohesion: 0.05
Nodes (77): ref_lib_french_conjugation, ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, ref_lib_german_konjunktiv1, A11_TOPICS, CASES, GENDERS (+69 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.05
Nodes (60): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar, ref_components_grammar_usegrammar (+52 more)

### Community 16 - "content/hints.ts"
Cohesion: 0.12
Nodes (20): ref_lib_german_forms, hints, hints, hints, adjectiveHint(), ENDINGS, HintableItem, HintEntry (+12 more)

### Community 17 - "react"
Cohesion: 0.07
Nodes (52): What the issue contains, ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, @dnd-kit/core, ref_lib_tts, react, ref_test_speech, collectNpcLines() (+44 more)

### Community 18 - "say"
Cohesion: 0.04
Nodes (59): say(), typed(), authorities, countries, forms, nat(), vocab, unitB21() (+51 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.06
Nodes (49): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+41 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "ActivityCard.tsx"
Cohesion: 0.13
Nodes (14): ref_content_gametypes, ActivityCard(), Props, Chip(), ChipProps, Tag(), GameTile(), SIZES (+6 more)

### Community 23 - "lessons.ts"
Cohesion: 0.15
Nodes (15): VocabPathOptions, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags(), LESSONS (+7 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.15
Nodes (18): ref_lib_french_time, ref_lib_german_time, ref_lib_rng, ref_lib_spoken, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime() (+10 more)

### Community 25 - "a1-2/index.ts"
Cohesion: 0.05
Nodes (56): ref_test_contentsuite, ref_test_playability, content, units, vocab, alltag, stadt, wohnen (+48 more)

### Community 26 - "b1-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, feiern, umwelt, pannen, glueck, unterhaltung (+7 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "AppLayout.tsx"
Cohesion: 0.09
Nodes (24): ref_components_languageswitcher, ref_components_ui_logo, ref_components_ui_segment, ref_components_ui_statpill, ref_components_ui_toast, ref_components_ui_toggle, ref_content_languages, ref_lib_progresstransfer (+16 more)

### Community 29 - "rng.ts"
Cohesion: 0.40
Nodes (8): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle()

### Community 30 - "activity"
Cohesion: 0.06
Nodes (58): sortItems(), activity(), Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable() (+50 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.24
Nodes (9): buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT, config (+1 more)

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

### Community 36 - "meta"
Cohesion: 0.06
Nodes (44): meta(), balance, tempo, vocab, Blanks, compound(), futur2Table(), k1PerfectTable() (+36 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "Memory.tsx"
Cohesion: 0.18
Nodes (14): ref_lib_sfx, ref_test_render, Blitz(), buildColumns(), isMatch(), MemoryCard, MemoryColumns, ColumnProps (+6 more)

### Community 40 - "levels.ts"
Cohesion: 0.12
Nodes (26): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+18 more)

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
Nodes (46): ref_lib_german_numbers, ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), places, vocab, ways, ads (+38 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "builders.ts"
Cohesion: 0.09
Nodes (21): people, phrases, vocab, wer, familie, female, male, relatives (+13 more)

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

### Community 51 - "q"
Cohesion: 0.09
Nodes (25): q(), tf(), lx(), economy, finance, vocab, society, vocab (+17 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "fr-a1-1/index.ts"
Cohesion: 0.06
Nodes (27): content, units, bonjour, byes, feelings, hellos, manners, polite (+19 more)

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
Cohesion: 0.08
Nodes (16): ref_lib_french_numbers, nombres, num(), NUMBERS, numberVocab, numCard(), vocab, words (+8 more)

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "grammar.test.ts"
Cohesion: 0.08
Nodes (22): content, units, vocab, sortitTranslations, sprache, arbeit, wirtschaft, digitalUnit (+14 more)

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
Cohesion: 0.13
Nodes (16): ref_components_ui_iconbutton, ref_content_grammar, ref_content_lessons, ref_games_shared_hints, ref_games_shared_mistakehint, FullLessonLink(), GrammarLesson(), LessonMeta() (+8 more)

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
Cohesion: 0.09
Nodes (30): zod, applyImport(), applyImportAll(), buildExport(), count, day, exportFileName(), id (+22 more)

### Community 79 - "c1-1/index.ts"
Cohesion: 0.12
Nodes (15): content, units, vocab, sortitTranslations, wirtschaft, gesellschaft, zeit, digital (+7 more)

### Community 80 - "WordImage.tsx"
Cohesion: 0.07
Nodes (25): In the app, ref_components_wordimage, ref_content_images, ref_lib_useimagemanifest, ref_lib_wordphotos, Props, SIZES, manifest (+17 more)

### Community 81 - "worker/index.ts"
Cohesion: 0.22
Nodes (9): CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env(), run() (+1 more)

### Community 82 - "Gapfill.tsx"
Cohesion: 0.16
Nodes (18): ref_components_grammar_fulllessonlink, ref_components_ui_umlautkeyboard, ref_lib_answer_check, Conjugation(), config, forms, CellVerdicts, conjugationWhy() (+10 more)

### Community 83 - "fr-a1-2/content.test.ts"
Cohesion: 0.28
Nodes (5): ref_content_items, ref_content_tags, earlierLevels, key(), REVIEW_WORDS

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "a2-1/index.ts"
Cohesion: 0.13
Nodes (14): hints, units, vocab, sortitTranslations, beruf, online, freizeit, wetter (+6 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources (+2 more)

### Community 87 - "b2-2/index.ts"
Cohesion: 0.06
Nodes (35): sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, stadt, druck, netz (+27 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "README (lingoat)"
Cohesion: 0.07
Nodes (38): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine (+30 more)

### Community 90 - "@testing-library/react"
Cohesion: 0.06
Nodes (35): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+27 more)

### Community 91 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 92 - "scoring.test.ts"
Cohesion: 0.73
Nodes (4): accuracy(), GameResult, starsFor(), xpFor()

### Community 93 - "french/conjugation.ts"
Cohesion: 0.14
Nodes (21): conjugateFr(), ER_ENDINGS, ER_STRONG_STEM, forms(), FrenchForms, IR_ENDINGS, IRREGULAR, nousStem() (+13 more)

### Community 94 - "a2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, bankUnit, leben, arbeit, lernen, sportUnit (+7 more)

### Community 95 - "fetch.ts"
Cohesion: 0.13
Nodes (21): ref_node_crypto, sharp, apiTurn, byId(), CACHE, download(), downloadTurn, downloadWithRetry() (+13 more)

### Community 96 - "Vocab"
Cohesion: 0.22
Nodes (8): VocabList, buildIndex(), ContentIndex, EMPTY_INDEX, Activity, ActivitySchema, Vocab, vocab

### Community 97 - "lib/report.ts"
Cohesion: 0.17
Nodes (16): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_PATH, REPORT_TYPE_META (+8 more)

### Community 98 - "nouns.ts"
Cohesion: 0.20
Nodes (19): Gender, bareNoun(), buildNounIndex(), CASE_TAGS, drillsCase(), findGapNoun(), GapNoun, GENDER (+11 more)

### Community 99 - "French A1.2 – syllabus research and plan"
Cohesion: 0.17
Nodes (10): Build plan, French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read), Build plan, French A1.2 – syllabus research and plan, How the units were chosen, Sources (what was actually read) (+2 more)

### Community 100 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 101 - "ui.test.tsx"
Cohesion: 0.10
Nodes (16): ref_games_shared_gameframe, DailyGoalCard(), Card(), Props, COLORS, Confetti(), Logo(), MARK (+8 more)

### Community 102 - "path.ts"
Cohesion: 0.25
Nodes (7): ref_test_factories, nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen, digital (+7 more)

### Community 105 - "ReportButton.tsx"
Cohesion: 0.15
Nodes (10): What the player sees, ref_components_ui_dialog, ref_lib_report, ref_lib_turnstile, ReportButton(), ReportContext, ReportDialog(), Status (+2 more)

### Community 106 - "images/index.ts"
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 107 - "forms.ts"
Cohesion: 0.13
Nodes (22): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+14 more)

### Community 108 - "UnitContent"
Cohesion: 0.05
Nodes (45): UnitContent, byes, feelings, hallo, hellos, polite, vocab, unitB12() (+37 more)

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

### Community 115 - "u2-presenter.ts"
Cohesion: 0.09
Nodes (23): ref_lib_french_passecompose, ref_lib_persons, frTable(), Table, unitFr(), countries, GENDER_CARDS, jobs (+15 more)

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 119 - "vite.config.ts"
Cohesion: 0.25
Nodes (5): ref_node_fs, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 120 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FEEDBACK_TINT, FeedbackBanner(), FeedbackKind, Props, STYLE

### Community 128 - "u2-fetes.ts"
Cohesion: 0.09
Nodes (22): unitFr(), content, units, chores, heard, journee, morning, order (+14 more)

### Community 134 - "main"
Cohesion: 0.14
Nodes (15): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources, Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify) (+7 more)

### Community 135 - "Grammar lesson sources"
Cohesion: 0.18
Nodes (10): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), French A1.1 (25 topics), French A1.2 (5 topics so far) (+2 more)

## Knowledge Gaps
- **1684 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+1679 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1919 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Quiz.tsx`, `router.tsx`, `package.json`, `PlayPage.tsx`, `ActivityCard.tsx`, `Clock.tsx`, `AppLayout.tsx`, `Sentence.tsx`, `Memory.tsx`, `levels.ts`, `Icon.tsx`, `grammar/grammar.test.tsx`, `controls.test.tsx`, `WordImage.tsx`, `Gapfill.tsx`, `Button.tsx`, `@testing-library/react`, `ui.test.tsx`, `ReportButton.tsx`, `Tabs.tsx`, `Toast.tsx`, `FeedbackBanner.tsx`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `Quiz.tsx`, `ui.test.tsx`, `Memory.tsx`, `levels.ts`, `grammar/grammar.test.tsx`, `ReportButton.tsx`, `package.json`, `controls.test.tsx`, `PlayPage.tsx`, `WordImage.tsx`, `react`, `Gapfill.tsx`, `vitest`, `Clock.tsx`, `AppLayout.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Why does `zod` connect `progressTransfer.ts` to `content/schema.ts`, `@testing-library/react`, `package.json`, `grammar/index.ts`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _1684 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11092436974789915 - nodes in this community are weakly interconnected._
- **Should `vocabList` be split into smaller, more focused modules?**
  _Cohesion score 0.029535293320688254 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._