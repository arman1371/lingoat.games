# Graph Report - lingoat.games  (2026-11-02)

## Corpus Check
- 677 files · ~803,087 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 4182 nodes · 11710 edges · 164 communities (152 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 184 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2edd2724`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Gapfill.test.tsx
- you
- manifest.json
- german/conjugation.ts
- vocabList
- B1.1 coverage and research doc
- builders.ts
- german/numbers.ts
- content/schema.ts
- router.tsx
- a2-2/index.ts
- package.json
- progressStore.ts
- p
- devDependencies
- ref_i18n
- content/hints.ts
- react
- gap
- build.mjs
- e2e/helpers.ts
- compilerOptions
- AppLayout.tsx
- lessons.ts
- ref_lib_rng
- a2-1/index.ts
- a1-2/index.ts
- compilerOptions
- grammar/grammar.test.tsx
- rng.ts
- meta
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- UnitContent
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- b1-2/index.ts
- label
- filters.ts
- Icon.tsx
- fr-a1-1/index.ts
- heard
- dependencies
- nouns.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- activity
- appIcons.test.ts
- app-icons.md
- srs.ts
- fr-a2-1-b.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- u3-nombres.ts
- e2e/tsconfig.json
- persons.ts
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
- Memory.tsx
- u1-voyage.ts
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- README (lingoat)
- progressTransfer.ts
- u2-medias.ts
- ref_test_render
- worker/index.ts
- Conjugation.tsx
- u11-sport.ts
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- build.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u12-culture.ts
- Button.tsx
- Architecture doc
- @testing-library/react
- u7-tag.ts
- scoring.test.ts
- french/conjugation.ts
- grammar.test.ts
- fetch.ts
- market/logic.ts
- lib/report.ts
- adjectives.ts
- tenses.ts
- u3-woher.ts
- ui.test.tsx
- fr-b1-2/u7-ville.ts
- turnstile.ts
- unit
- PlayPage.tsx
- images/index.ts
- forms.ts
- u10-cause.ts
- Deployment doc
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- Tabs.tsx
- French A2.2 – syllabus research and plan
- path.ts
- ref_lib_german_conjugation
- grammar/schema.ts
- u6-convaincre.ts
- vitest
- compound.ts
- vite.config.ts
- playability.tsx
- u8-temps.ts
- konjunktiv1.ts
- French B1.1 – syllabus research and plan
- u1-hallo.ts
- u5-familie.ts
- table
- fr-b1-2/helpers.ts
- u5-wohnung.ts
- grammar/index.ts
- fr-a2-1/helpers.ts
- French A2.1 – syllabus research and plan
- u8-rapporter.ts
- fr-b1-1/helpers.ts
- subjunctive.ts
- Grammar lesson sources
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- u2-wer.ts
- u1-registres.ts
- u6-subjonctif.ts
- fr-b1-2/index.ts
- fr-a2-1/content.test.ts
- u2-humour.ts
- u3-recit.ts
- u9-etudes.ts
- u6-freizeit.ts
- French C2.1 – syllabus research and plan
- u8-einkaufen.ts
- a11y.spec.ts
- u8-institutions.ts
- u4-cause.ts
- u5-concession.ts
- u7-relief.ts
- u9-debat.ts
- u4-regrets.ts
- u2-paysages.ts
- articles.ts
- u5-planete.ts
- ProgressBar.tsx
- French B1.2 – syllabus research and plan
- fr-c2-1/index.ts

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 221 edges
2. `activity()` - 201 edges
3. `byDe()` - 195 edges
4. `vocabList()` - 187 edges
5. `flashcards()` - 179 edges
6. `meta()` - 165 edges
7. `say()` - 163 edges
8. `you()` - 163 edges
9. `gap()` - 159 edges
10. `tf()` - 158 edges

## Surprising Connections (you probably didn't know these)
- `Grammar hints` --references--> `main()`  [INFERRED]
  docs/b1-2-coverage.md → scripts/images/fetch.ts
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `French A1.1 (25 topics)` --references--> `frConjugationTable()`  [INFERRED]
  docs/grammar-sources.md → src/content/grammar/build.ts
- `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1` --references--> `main()`  [INFERRED]
  docs/c1-2-coverage.md → scripts/images/fetch.ts
- `One-time setup (by hand)` --references--> `main()`  [INFERRED]
  docs/code-quality.md → scripts/images/fetch.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (164 total, 12 thin omitted)

### Community 0 - "Gapfill.test.tsx"
Cohesion: 0.11
Nodes (22): ref_lib_german_nouns, pick(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+14 more)

### Community 1 - "you"
Cohesion: 0.03
Nodes (125): customTable(), pastTable(), Pronoun, Question, readRound(), sepTable(), setRound(), table() (+117 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "german/conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "vocabList"
Cohesion: 0.06
Nodes (39): sortItems(), unitB11(), events, phrases, vocab, environment, materials, vocab (+31 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.12
Nodes (19): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Lazy level content packs (levels.ts), Tags and filters (+11 more)

### Community 6 - "builders.ts"
Cohesion: 0.04
Nodes (91): q(), tf(), unitB22(), green, mobility, vocab, law, media (+83 more)

### Community 7 - "german/numbers.ts"
Cohesion: 0.05
Nodes (58): Build plan, French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read), Build plan, French A1.2 – syllabus research and plan, How the units were chosen, Sources (what was actually read) (+50 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.04
Nodes (61): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+53 more)

### Community 9 - "router.tsx"
Cohesion: 0.11
Nodes (9): ref_react_dom_client, ref_react_router_dom, createAppRouter(), createRoutes(), createTestRouter(), pages, routerOptions(), src_index (+1 more)

### Community 10 - "a2-2/index.ts"
Cohesion: 0.05
Nodes (36): content, units, vocab, sortitTranslations, bankUnit, leben, arbeit, lernen (+28 more)

### Community 11 - "package.json"
Cohesion: 0.07
Nodes (29): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+21 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.10
Nodes (27): zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress(), nextStreak() (+19 more)

### Community 13 - "p"
Cohesion: 0.33
Nodes (3): p(), FR22_TOPICS, FR22_SOURCES

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "ref_i18n"
Cohesion: 0.06
Nodes (45): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar, ref_components_grammar_usegrammar (+37 more)

### Community 16 - "content/hints.ts"
Cohesion: 0.10
Nodes (23): ref_lib_german_forms, hints, hints, hints, hints, Meta, adjectiveHint(), ENDINGS (+15 more)

### Community 17 - "react"
Cohesion: 0.10
Nodes (44): What the issue contains, ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_components_wordimage, ref_lib_answer_check, ref_lib_spoken, ref_lib_tts (+36 more)

### Community 18 - "gap"
Cohesion: 0.04
Nodes (110): Grammar, dictation(), gap(), sent(), adjGap(), Blanks, compound(), hint() (+102 more)

### Community 19 - "build.mjs"
Cohesion: 0.14
Nodes (10): ref_node_fs_promises, ref_node_path, ref_node_url, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT (+2 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.05
Nodes (54): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+46 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "AppLayout.tsx"
Cohesion: 0.07
Nodes (27): ref_components_ui_choicecards, ref_components_ui_logo, ref_components_ui_segment, ref_components_ui_statpill, ref_components_ui_toast, ref_components_ui_toggle, ref_content_languages, ref_lib_progresstransfer (+19 more)

### Community 23 - "lessons.ts"
Cohesion: 0.17
Nodes (13): BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS, lessonForTags(), LESSONS, GROUP_LABELS (+5 more)

### Community 24 - "ref_lib_rng"
Cohesion: 0.19
Nodes (13): ref_lib_french_time, ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle (+5 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.04
Nodes (53): content, units, vocab, sortitTranslations, beruf, online, freizeit, wetter (+45 more)

### Community 26 - "a1-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, vocab, sortitTranslations, alltag, stadt, wohnen, arbeit (+6 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "grammar/grammar.test.tsx"
Cohesion: 0.14
Nodes (14): ref_content_grammar, ref_content_lessons, ref_games_shared_mistakehint, FullLessonLink(), GrammarLesson(), LessonMeta(), Props, GrammarSheet() (+6 more)

### Community 29 - "rng.ts"
Cohesion: 0.40
Nodes (8): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle()

### Community 30 - "meta"
Cohesion: 0.05
Nodes (72): meta(), Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms (+64 more)

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
Nodes (19): The pipeline (`scripts/images/`), cleanQuery(), cropsWell(), isBlocked(), isCandidate(), Overrides, pagePath(), Pick (+11 more)

### Community 35 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, check, deploy, dev, format, format:check, icons (+9 more)

### Community 36 - "UnitContent"
Cohesion: 0.07
Nodes (41): UnitContent, Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table(), k2ModalPastTable(), konjunktiv1() (+33 more)

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen, digital (+7 more)

### Community 40 - "label"
Cohesion: 0.07
Nodes (34): ref_content_items, ref_content_tags, ref_test_contentsuite, ref_test_playability, key(), REVIEW_WORDS, label(), earlierLevels (+26 more)

### Community 41 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.08
Nodes (30): FEEDBACK_TINT, FeedbackBanner(), FeedbackKind, Props, STYLE, Icon(), src_components_ui_icon_iconname, Props (+22 more)

### Community 43 - "fr-a1-1/index.ts"
Cohesion: 0.07
Nodes (27): units, bonjour, byes, feelings, hellos, manners, polite, vocab (+19 more)

### Community 44 - "heard"
Cohesion: 0.05
Nodes (50): ref_lib_german_numbers, ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), chores, people, rules, vocab (+42 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "nouns.ts"
Cohesion: 0.24
Nodes (16): bareNoun(), buildNounIndex(), CASE_TAGS, drillsCase(), findGapNoun(), GENDER, isCapitalised(), isDeterminer() (+8 more)

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

### Community 51 - "activity"
Cohesion: 0.05
Nodes (54): say(), activity(), byDe(), lx(), unitC11(), economy, finance, vocab (+46 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "fr-a2-1-b.ts"
Cohesion: 0.18
Nodes (7): formsTable(), FR21_TOPICS_B, futurTable(), imparfaitTable(), FR12_SOURCES, FR21_SOURCES, Source

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

### Community 61 - "persons.ts"
Cohesion: 0.22
Nodes (10): CONDITIONAL_ENDINGS, conditionnel(), row(), ALL_PERSONS, FRENCH_PRONOUNS, FrenchPronoun, Person, PERSON_SETS (+2 more)

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

### Community 73 - "Memory.tsx"
Cohesion: 0.14
Nodes (19): ref_lib_sfx, @testing-library/user-event, Blitz(), buildColumns(), isMatch(), MemoryCard, MemoryColumns, ColumnProps (+11 more)

### Community 74 - "u1-voyage.ts"
Cohesion: 0.14
Nodes (13): emojiWords, Gap, GAPS, LESSON, lodging, meaning(), PAIRS, phrases (+5 more)

### Community 75 - "controls.test.tsx"
Cohesion: 0.10
Nodes (20): ChoiceCards(), Props, Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood (+12 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "README (lingoat)"
Cohesion: 0.11
Nodes (17): Procedure: add a new game engine, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts), Leitner SRS review (srs.ts), C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar (+9 more)

### Community 78 - "progressTransfer.ts"
Cohesion: 0.10
Nodes (29): applyImport(), applyImportAll(), buildExport(), count, day, exportFileName(), id, ImportErrorCode (+21 more)

### Community 79 - "u2-medias.ts"
Cohesion: 0.06
Nodes (53): DialogueScene, gap(), GapItem, mc(), npc(), QuizQuestion, Turn, unitFr() (+45 more)

### Community 80 - "ref_test_render"
Cohesion: 0.05
Nodes (32): In the app, ref_content_images, ref_lib_useimagemanifest, ref_lib_wordphotos, ref_test_render, ref_test_speech, Props, SIZES (+24 more)

### Community 81 - "worker/index.ts"
Cohesion: 0.22
Nodes (9): CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env(), run() (+1 more)

### Community 82 - "Conjugation.tsx"
Cohesion: 0.40
Nodes (8): Conjugation(), config, forms, CellVerdicts, conjugationWhy(), Forms, gradeTable(), pronounOrder()

### Community 83 - "u11-sport.ts"
Cohesion: 0.15
Nodes (12): DBL, EMP, events, FA, mean(), ORDER, phrases, sport (+4 more)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "build.ts"
Cohesion: 0.12
Nodes (20): ref_lib_german_adjectives, ref_lib_german_articles, A11_TOPICS, CASES, GENDERS, A12_TOPICS, A21_TOPICS, superlativeRows() (+12 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.25
Nodes (7): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 87 - "u12-culture.ts"
Cohesion: 0.15
Nodes (12): arts, culture, KIND, mean(), OPP, opposition, phrases, PS (+4 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "Architecture doc"
Cohesion: 0.20
Nodes (14): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new unit (builders.ts) (+6 more)

### Community 90 - "@testing-library/react"
Cohesion: 0.08
Nodes (24): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+16 more)

### Community 91 - "u7-tag.ts"
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 92 - "scoring.test.ts"
Cohesion: 0.73
Nodes (4): accuracy(), GameResult, starsFor(), xpFor()

### Community 93 - "french/conjugation.ts"
Cohesion: 0.20
Nodes (14): conjugateFr(), ER_ENDINGS, ER_STRONG_STEM, forms(), FrenchForms, IR_ENDINGS, IRREGULAR, nousStem() (+6 more)

### Community 94 - "grammar.test.ts"
Cohesion: 0.04
Nodes (64): sortitTranslations, content, units, vocab, sortitTranslations, wirtschaft, gesellschaft, zeit (+56 more)

### Community 95 - "fetch.ts"
Cohesion: 0.10
Nodes (30): Code quality: SonarQube Cloud, One-time setup (by hand), Code graph (Graphify), Locally, Pinned install, Repo settings, The workflow, ref_node_crypto (+22 more)

### Community 96 - "market/logic.ts"
Cohesion: 0.31
Nodes (8): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market()

### Community 97 - "lib/report.ts"
Cohesion: 0.17
Nodes (16): cleanNote(), isId(), isType(), NOTE_MAX, REPORT_BASE_LABEL, REPORT_BODY_MAX, REPORT_PATH, REPORT_TYPE_META (+8 more)

### Community 98 - "adjectives.ts"
Cohesion: 0.26
Nodes (11): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+3 more)

### Community 99 - "tenses.ts"
Cohesion: 0.14
Nodes (20): COND_ENDINGS, conditionnel(), PLURAL, plusQueParfait(), beforeI(), ETRE_VERBS, EXTRA_PRESENT, forms() (+12 more)

### Community 100 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 101 - "ui.test.tsx"
Cohesion: 0.08
Nodes (24): ref_content_gametypes, ref_games_shared_gameframe, ActivityCard(), Props, DailyGoalCard(), Card(), Props, Chip() (+16 more)

### Community 102 - "fr-b1-2/u7-ville.ts"
Cohesion: 0.17
Nodes (11): manualTable(), actions, IND, KIND, mean(), phrases, pronouns, street (+3 more)

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "unit"
Cohesion: 0.05
Nodes (42): ref_lib_french_passecompose, unit(), frTable(), Table, unitFr(), countries, GENDER_CARDS, jobs (+34 more)

### Community 105 - "PlayPage.tsx"
Cohesion: 0.06
Nodes (29): What the player sees, ref_components_grammar_fulllessonlink, ref_components_reportbutton, ref_components_ui_button, ref_components_ui_confetti, ref_components_ui_dialog, ref_components_ui_iconbutton, ref_components_ui_mascot (+21 more)

### Community 106 - "images/index.ts"
Cohesion: 0.36
Nodes (7): authorPageUrl(), imageUrl(), loadManifest(), Manifest, ManifestEntry, photoPageUrl(), PIXABAY_PHOTO_PREFIX

### Community 107 - "forms.ts"
Cohesion: 0.17
Nodes (14): adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms(), DEFINITE, describeForm() (+6 more)

### Community 108 - "u10-cause.ts"
Cohesion: 0.17
Nodes (11): presentTable(), cause, causes, connectors, events, mean(), PART, ROLE (+3 more)

### Community 109 - "Deployment doc"
Cohesion: 0.12
Nodes (15): ProgressRepository (local-first storage seam), Deployment doc, Cloudflare Pages / Workers hosting, Alternative hosts (Vercel, Netlify, Render), PWA service worker and caching headers, wrangler.jsonc SPA config, Storage and delivery, Where the photos come from (+7 more)

### Community 110 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 111 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 112 - "French A2.2 – syllabus research and plan"
Cohesion: 0.33
Nodes (5): Build status, French A2.2 – syllabus research and plan, Grammar added per unit, Sources (what was actually read), Units

### Community 113 - "path.ts"
Cohesion: 0.25
Nodes (7): ref_test_factories, nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 114 - "ref_lib_german_conjugation"
Cohesion: 0.15
Nodes (15): ref_lib_german_conjugation, B11_TOPICS, B12_TOPICS, compare(), examples(), list(), section(), C21_TOPICS (+7 more)

### Community 115 - "grammar/schema.ts"
Cohesion: 0.18
Nodes (10): BlockSchema, Callout, Compare, Examples, lessonId, List, Paragraph, SectionSchema (+2 more)

### Community 116 - "u6-convaincre.ts"
Cohesion: 0.17
Nodes (11): CON, connectors, convaincre, GER, ideas, mean(), MEANING, phrases (+3 more)

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "compound.ts"
Cohesion: 0.35
Nodes (8): conditionnelPasse(), futurAnterieur(), gerondif(), PARTICIPE_PRESENT, participePresent(), PLURAL, plusQueParfait(), withAuxiliary()

### Community 119 - "vite.config.ts"
Cohesion: 0.25
Nodes (5): ref_node_fs, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 120 - "playability.tsx"
Cohesion: 0.31
Nodes (9): ref_games_market_logic, ref_games_memory_logic, ref_games_registry, cont(), describePlayability(), prompt(), solve(), text() (+1 more)

### Community 121 - "u8-temps.ts"
Cohesion: 0.17
Nodes (9): clothes, days, months, pictureQuiz, POSITION_CARDS, SORT_CARDS, temps, vocab (+1 more)

### Community 122 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 123 - "French B1.1 – syllabus research and plan"
Cohesion: 0.29
Nodes (6): Build plan, French B1.1 – syllabus research and plan, How the units were chosen, Limits of the research, Sources (what was actually read), condTable()

### Community 124 - "u1-hallo.ts"
Cohesion: 0.29
Nodes (6): byes, feelings, hallo, hellos, polite, vocab

### Community 125 - "u5-familie.ts"
Cohesion: 0.29
Nodes (5): familie, female, male, relatives, vocab

### Community 126 - "table"
Cohesion: 0.13
Nodes (25): ref_lib_french_conjugation, ref_lib_french_tenses, ref_lib_persons, frConjugationTable(), mistake(), table(), tip(), FR11_TOPICS_B (+17 more)

### Community 127 - "fr-b1-2/helpers.ts"
Cohesion: 0.29
Nodes (10): ref_lib_french_compound, ref_lib_french_conditional, conditionnelTable(), condPasseTable(), futAnterieurTable(), futurTable(), imparfaitTable(), pqpTable() (+2 more)

### Community 128 - "u5-wohnung.ts"
Cohesion: 0.29
Nodes (5): ads, furniture, money, verbs, vocab

### Community 129 - "grammar/index.ts"
Cohesion: 0.12
Nodes (16): ref_lib_german_konjunktiv1, B21_TOPICS, sein, werden, B22_TOPICS, conjugationTable(), C11_TOPICS, C12_TOPICS (+8 more)

### Community 130 - "fr-a2-1/helpers.ts"
Cohesion: 0.04
Nodes (86): GapRow, gaps(), pcTable(), presentTable(), QuizRow, quizRows(), SentRow, sentRows() (+78 more)

### Community 131 - "French A2.1 – syllabus research and plan"
Cohesion: 0.40
Nodes (4): Build plan, French A2.1 – syllabus research and plan, Sources (what was actually read), Units

### Community 132 - "u8-rapporter.ts"
Cohesion: 0.18
Nodes (10): sp(), formal, INV, mean(), messages, phrases, REP, STYLE (+2 more)

### Community 133 - "fr-b1-1/helpers.ts"
Cohesion: 0.04
Nodes (56): ref_lib_french_moretenses, ref_lib_french_subjunctive, futurTable(), imparfaitTable(), pcReflexiveTable(), sortCards(), pqpTable(), subjTable() (+48 more)

### Community 134 - "subjunctive.ts"
Cohesion: 0.48
Nodes (5): forms(), IRREGULAR, nousStem(), subjunctiveFr(), list()

### Community 135 - "Grammar lesson sources"
Cohesion: 0.13
Nodes (14): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), French A1.1 (25 topics), French A1.2 (5 topics so far) (+6 more)

### Community 136 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 137 - "u2-wer.ts"
Cohesion: 0.33
Nodes (4): people, phrases, vocab, wer

### Community 138 - "u1-registres.ts"
Cohesion: 0.18
Nodes (10): derived, familiar, formal, nuance, registres, seeing, speaking, verbsOfSightAndSpeech (+2 more)

### Community 141 - "u6-subjonctif.ts"
Cohesion: 0.18
Nodes (9): moodItems, quizWords, reporting, Six, subjonctif, Table, timeShift, triggers (+1 more)

### Community 142 - "fr-b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, paysages, COND, dreams, hypotheses, KIND, links, mean() (+7 more)

### Community 143 - "fr-a2-1/content.test.ts"
Cohesion: 0.33
Nodes (4): EARLIER, earlierVocab, packs, REVIEW_WORDS

### Community 145 - "u2-humour.ts"
Cohesion: 0.25
Nodes (6): humour, humourUnit, irony, kinds, paronyms, vocab

### Community 146 - "u3-recit.ts"
Cohesion: 0.20
Nodes (8): events, recit, registerItems, Six, Table, tenseItems, times, vocab

### Community 147 - "u9-etudes.ts"
Cohesion: 0.18
Nodes (10): etudes, feelings, FORM, mean(), phrases, REL, studies, TOPIC (+2 more)

### Community 148 - "u6-freizeit.ts"
Cohesion: 0.40
Nodes (3): freizeit, hobbies, vocab

### Community 149 - "French C2.1 – syllabus research and plan"
Cohesion: 0.25
Nodes (7): French C2.1 – syllabus research and plan, How C2 was split into C2.1 and C2.2, Result, Sources (what was actually read), Units, What the research could and could not find, What was checked in units 4 to 9, and what was not

### Community 150 - "u8-einkaufen.ts"
Cohesion: 0.25
Nodes (5): einkaufen, food, genderItems, shopping, vocab

### Community 152 - "u8-institutions.ts"
Cohesion: 0.25
Nodes (7): europe, france, institutions, powers, quizWords, vocab, whereItems

### Community 153 - "u4-cause.ts"
Cohesion: 0.25
Nodes (7): cause, causes, effects, quizWords, roleItems, verbs, vocab

### Community 154 - "u5-concession.ts"
Cohesion: 0.25
Nodes (7): concession, concessionUnit, hypothesis, moodItems, opposition, quizWords, vocab

### Community 155 - "u7-relief.ts"
Cohesion: 0.25
Nodes (7): markers, nouns, press, quizWords, relief, structureItems, vocab

### Community 156 - "u9-debat.ts"
Cohesion: 0.25
Nodes (7): debat, debate, linkItems, positions, quizWords, structure, vocab

### Community 157 - "u4-regrets.ts"
Cohesion: 0.20
Nodes (9): scene(), feelings, links, mean(), phrases, PQP, TIME, verbs (+1 more)

### Community 158 - "u2-paysages.ts"
Cohesion: 0.20
Nodes (9): sortCards(), FORMS, L, landscapes, mean(), outdoors, phrases, vocab (+1 more)

### Community 159 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 160 - "u5-planete.ts"
Cohesion: 0.22
Nodes (8): unitFr(), actions, mean(), phrases, planet, PREP, prepositions, vocab

### Community 161 - "ProgressBar.tsx"
Cohesion: 0.50
Nodes (3): FILL, ProgressBar(), Props

### Community 162 - "French B1.2 – syllabus research and plan"
Cohesion: 0.33
Nodes (5): French B1.2 – syllabus research and plan, How the units were chosen, Open points, Sources (what was actually read), Status

## Knowledge Gaps
- **2067 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+2062 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 2316 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Gapfill.test.tsx`, `content/schema.ts`, `router.tsx`, `package.json`, `ref_i18n`, `AppLayout.tsx`, `ref_lib_rng`, `grammar/grammar.test.tsx`, `Sentence.tsx`, `Icon.tsx`, `Memory.tsx`, `controls.test.tsx`, `ref_test_render`, `Conjugation.tsx`, `Button.tsx`, `@testing-library/react`, `ui.test.tsx`, `PlayPage.tsx`, `Tabs.tsx`, `playability.tsx`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `zod` connect `@testing-library/react` to `grammar/schema.ts`, `content/schema.ts`, `package.json`, `progressTransfer.ts`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `UnitContent` connect `UnitContent` to `u5-wohnung.ts`, `you`, `fr-a2-1/helpers.ts`, `vocabList`, `fr-b1-1/helpers.ts`, `builders.ts`, `u8-rapporter.ts`, `content/schema.ts`, `u2-wer.ts`, `a2-2/index.ts`, `u1-registres.ts`, `u6-subjonctif.ts`, `fr-b1-2/index.ts`, `a1-1/types.ts`, `u2-humour.ts`, `gap`, `u9-etudes.ts`, `u6-freizeit.ts`, `u3-recit.ts`, `u8-einkaufen.ts`, `u8-institutions.ts`, `a2-1/index.ts`, `u4-cause.ts`, `u5-concession.ts`, `u7-relief.ts`, `u4-regrets.ts`, `meta`, `u2-paysages.ts`, `u5-planete.ts`, `u4-zahlen.ts`, `u9-debat.ts`, `b1-2/index.ts`, `fr-a1-1/index.ts`, `heard`, `activity`, `u3-nombres.ts`, `u1-voyage.ts`, `u2-medias.ts`, `u11-sport.ts`, `u12-culture.ts`, `u7-tag.ts`, `grammar.test.ts`, `u3-woher.ts`, `fr-b1-2/u7-ville.ts`, `unit`, `u10-cause.ts`, `u6-convaincre.ts`, `u8-temps.ts`, `u1-hallo.ts`, `u5-familie.ts`, `fr-b1-2/helpers.ts`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _2067 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gapfill.test.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11174242424242424 - nodes in this community are weakly interconnected._
- **Should `you` be split into smaller, more focused modules?**
  _Cohesion score 0.030079597821533306 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._