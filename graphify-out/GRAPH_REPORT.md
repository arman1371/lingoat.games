# Graph Report - lingoat.games  (2026-11-02)

## Corpus Check
- 773 files · ~985,606 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 5, .in 1, .ico 1)

## Summary
- 4618 nodes · 13482 edges · 173 communities (163 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 197 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `25ba58ef`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Gapfill.test.tsx
- say
- manifest.json
- german/conjugation.ts
- flashcards
- B1.1 coverage and research doc
- you
- german/numbers.ts
- content/schema.ts
- router.tsx
- a1-1/index.ts
- package.json
- progressStore.ts
- tf
- devDependencies
- PlayPage.tsx
- a2-2/index.ts
- react
- UnitContent
- build.mjs
- e2e/helpers.ts
- compilerOptions
- GrammarTopic
- kit.ts
- Clock.tsx
- b1-1/index.ts
- u8-etudes.ts
- compilerOptions
- grammar/grammar.test.tsx
- rng.ts
- q
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- lib.ts
- scripts
- meta
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- b1-2/index.ts
- label
- filters.ts
- Icon.tsx
- fr-a1-1/helpers.ts
- heard
- dependencies
- nouns.ts
- guard.ts
- answer-check.ts
- sfx.ts
- tts.test.ts
- builders.ts
- appIcons.test.ts
- app-icons.md
- srs.ts
- fr-b1-1/helpers.ts
- i18n/index.ts
- graphify reference: query, path, explain
- worker/report.ts
- u3-nombres.ts
- e2e/tsconfig.json
- AppLayout.tsx
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
- fr-c1-2/helpers.ts
- u1-voyage.ts
- controls.test.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- progressTransfer.ts
- u2-medias.ts
- Memory.tsx
- worker/index.ts
- Conjugation.tsx
- u11-sport.ts
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- build.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- c2-1.ts
- Button.tsx
- French C2.1 – syllabus research and plan
- @testing-library/react
- u7-tag.ts
- scoring.test.ts
- french/conjugation.ts
- b2-1/index.ts
- fetch.ts
- market/logic.ts
- lib/report.ts
- c1-2/index.ts
- tenses.ts
- fr-b2-1/helpers.ts
- ui.test.tsx
- b2-2/index.ts
- turnstile.ts
- u2-fetes.ts
- ReportButton.tsx
- articles.ts
- fr-c1-1/index.ts
- fr-a2-2.ts
- u9-recit.ts
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- forms.ts
- French A2.2 – syllabus research and plan
- Deployment doc
- u12-culture.ts
- grammar/schema.ts
- README (lingoat)
- vitest
- compound.ts
- vite.config.ts
- main
- u8-temps.ts
- u2-presenter.ts
- fr-b1-2/u7-ville.ts
- u10-cause.ts
- u4-logement.ts
- table
- u6-convaincre.ts
- fr-b1-2/helpers.ts
- grammar/index.ts
- u7-cuisine.ts
- French A2.1 – syllabus research and plan
- persons.ts
- fr-b1-1/index.ts
- subjunctive.ts
- Grammar lesson sources
- u8-rapporter.ts
- u3-souvenirs.ts
- u9-etudes.ts
- u6-subjonctif.ts
- u3-hypotheses.ts
- fr-a2-1/helpers.ts
- u6-table.ts
- u4-regrets.ts
- u3-recit.ts
- u4-famille.ts
- ref_lib_german_conjugation
- fr-a1-1/u7-ville.ts
- u2-paysages.ts
- u1-journee.ts
- French A1.2 – syllabus research and plan
- u6-medias.ts
- u4-consommer.ts
- u4-doute.ts
- u5-planete.ts
- konjunktiv1.ts
- FeedbackBanner.tsx
- IconButton.tsx
- fr-b1-2/index.ts
- Toast.tsx
- French B1.2 – syllabus research and plan
- u8-cause.ts
- u12-ville.ts
- u1-identite.ts
- u5-sentiments.ts
- u2-parcours.ts
- fr-b2-1/index.ts
- u11-logement.ts
- u10-cites.ts
- u3-sante.ts
- French B2.2 – syllabus research and plan

## God Nodes (most connected - your core abstractions)
1. `UnitContent` - 266 edges
2. `activity()` - 237 edges
3. `vocabList()` - 225 edges
4. `byDe()` - 213 edges
5. `flashcards()` - 199 edges
6. `meta()` - 176 edges
7. `say()` - 175 edges
8. `you()` - 175 edges
9. `q()` - 170 edges
10. `tf()` - 170 edges

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

## Communities (173 total, 10 thin omitted)

### Community 0 - "Gapfill.test.tsx"
Cohesion: 0.11
Nodes (22): ref_lib_german_nouns, pick(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+14 more)

### Community 1 - "say"
Cohesion: 0.03
Nodes (108): pastTable(), Pronoun, Question, readRound(), say(), sepTable(), setRound(), table() (+100 more)

### Community 2 - "manifest.json"
Cohesion: 0.00
Nodes (500): a1-1-einkaufen-apfel, a1-1-einkaufen-banane, a1-1-einkaufen-bier, a1-1-einkaufen-broetchen, a1-1-einkaufen-brot, a1-1-einkaufen-butter, a1-1-einkaufen-das-kilo, a1-1-einkaufen-das-stueck (+492 more)

### Community 3 - "german/conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "flashcards"
Cohesion: 0.04
Nodes (64): typed(), authorities, countries, forms, nat(), vocab, Blanks, compound() (+56 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.16
Nodes (14): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, B1.1 coverage and research doc, CEFR B1 global scale (Council of Europe), Goethe-Zertifikat B1 and word list, Menschen B1 (Hueber) (+6 more)

### Community 6 - "you"
Cohesion: 0.05
Nodes (67): sent(), you(), quizDeEn(), nature, POSSESSIVE_CARDS, rhythm, vocab, wishes (+59 more)

### Community 7 - "german/numbers.ts"
Cohesion: 0.07
Nodes (48): year(), below100(), below1000(), digitsToFrench(), LETTER_NAMES_FR, numberToFrench(), ONES, priceToFrench() (+40 more)

### Community 8 - "content/schema.ts"
Cohesion: 0.04
Nodes (60): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+52 more)

### Community 9 - "router.tsx"
Cohesion: 0.11
Nodes (9): ref_react_dom_client, ref_react_router_dom, createAppRouter(), createRoutes(), createTestRouter(), pages, routerOptions(), src_index (+1 more)

### Community 10 - "a1-1/index.ts"
Cohesion: 0.04
Nodes (60): ref_test_playability, units, vocab, sortitTranslations, freizeit, content, units, vocab (+52 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.10
Nodes (27): zustand, ref_zustand_middleware, ActivityProgress, createProgressStore(), dailyXp, getProgressStore(), initialProgress(), nextStreak() (+19 more)

### Community 13 - "tf"
Cohesion: 0.04
Nodes (92): gap(), tf(), adjGap(), Blanks, compound(), futurTable(), k2PastTable(), passiveModalTable() (+84 more)

### Community 14 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, aws4fetch, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals (+21 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.05
Nodes (60): ref_app_language, ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_grammar_fulllessonlink, ref_components_grammar_grammarindex, ref_components_grammar_grammarlesson, ref_components_grammar_unitgrammar (+52 more)

### Community 16 - "a2-2/index.ts"
Cohesion: 0.07
Nodes (29): hints, hints, hints, hints, units, vocab, sortitTranslations, bankUnit (+21 more)

### Community 17 - "react"
Cohesion: 0.09
Nodes (48): What the issue contains, ref_components_ui_button, ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_wordimage, ref_lib_answer_check, ref_lib_tts, react (+40 more)

### Community 18 - "UnitContent"
Cohesion: 0.02
Nodes (107): UnitContent, byes, feelings, hallo, hellos, polite, vocab, countries (+99 more)

### Community 19 - "build.mjs"
Cohesion: 0.15
Nodes (9): ref_node_fs_promises, ref_node_path, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT, glyphs (+1 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.05
Nodes (54): PAGES, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+46 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "GrammarTopic"
Cohesion: 0.22
Nodes (22): compare(), examples(), frConjugationTable(), mistake(), p(), section(), tip(), FR11_TOPICS (+14 more)

### Community 23 - "kit.ts"
Cohesion: 0.09
Nodes (47): VocabRow, unitFr(), AVOIR, buildUnit(), conditionnel(), conditionnelPasse(), ETRE, futurAnterieur() (+39 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.20
Nodes (14): ref_lib_french_time, ref_lib_german_time, ref_lib_rng, ref_lib_spoken, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime() (+6 more)

### Community 25 - "b1-1/index.ts"
Cohesion: 0.04
Nodes (60): sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, feiern, umwelt, pannen (+52 more)

### Community 26 - "u8-etudes.ts"
Cohesion: 0.11
Nodes (16): pcReflexiveTable(), pcTable(), events, jobs, lifeVerbs, linkers, parcours, vocab (+8 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "grammar/grammar.test.tsx"
Cohesion: 0.13
Nodes (15): ref_components_ui_iconbutton, ref_content_grammar, ref_content_levels, ref_games_shared_hints, ref_games_shared_mistakehint, GrammarLesson(), LessonMeta(), Props (+7 more)

### Community 29 - "rng.ts"
Cohesion: 0.40
Nodes (8): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle()

### Community 30 - "q"
Cohesion: 0.06
Nodes (59): customTable(), q(), reflexiveAccTable(), Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable() (+51 more)

### Community 31 - "Sentence.tsx"
Cohesion: 0.16
Nodes (12): @dnd-kit/core, ref_test_speech, config, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile (+4 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.14
Nodes (7): num(), NUMBERS, numberVocab, numCard(), vocab, words, zahlen

### Community 34 - "lib.ts"
Cohesion: 0.13
Nodes (25): The pipeline (`scripts/images/`), cleanQuery(), cropsWell(), isBlocked(), isCandidate(), pagePath(), Pick, pickHit() (+17 more)

### Community 35 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, check, deploy, dev, format, format:check, icons (+9 more)

### Community 36 - "meta"
Cohesion: 0.04
Nodes (84): dictation(), meta(), sortItems(), campus, money, vocab, memory(), unitC12() (+76 more)

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
Cohesion: 0.05
Nodes (54): ref_content_items, ref_content_tags, ref_test_contentsuite, label(), earlierLevels, key(), REVIEW_WORDS, content (+46 more)

### Community 41 - "filters.ts"
Cohesion: 0.08
Nodes (27): ref_test_factories, nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path, getItems() (+19 more)

### Community 42 - "Icon.tsx"
Cohesion: 0.12
Nodes (23): GameTile(), SIZES, TILE, Icon(), src_components_ui_icon_iconname, Props, ICON_PATHS, IconName (+15 more)

### Community 43 - "fr-a1-1/helpers.ts"
Cohesion: 0.18
Nodes (10): Table, unitFr(), activities, likes, loisirs, phrases, pictureQuiz, SORT_CARDS (+2 more)

### Community 44 - "heard"
Cohesion: 0.04
Nodes (55): ref_lib_german_numbers, ref_lib_german_ordinals, einkaufen, food, genderItems, shopping, vocab, src_content_a1_2_helpers_activity (+47 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "nouns.ts"
Cohesion: 0.16
Nodes (23): allVocab, nouns, play(), squash(), Gender, bareNoun(), buildNounIndex(), CASE_TAGS (+15 more)

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

### Community 51 - "builders.ts"
Cohesion: 0.04
Nodes (65): people, phrases, vocab, wer, familie, female, male, relatives (+57 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "fr-b1-1/helpers.ts"
Cohesion: 0.10
Nodes (19): ref_lib_french_moretenses, ref_lib_french_subjunctive, futurTable(), imparfaitTable(), condTable(), pqpTable(), Table, family (+11 more)

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
Nodes (7): nombres, num(), NUMBERS, numberVocab, numCard(), vocab, words

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "AppLayout.tsx"
Cohesion: 0.07
Nodes (28): ref_components_languageswitcher, ref_components_ui_choicecards, ref_components_ui_logo, ref_components_ui_segment, ref_components_ui_statpill, ref_components_ui_toast, ref_components_ui_toggle, ref_content_languages (+20 more)

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

### Community 73 - "fr-c1-2/helpers.ts"
Cohesion: 0.12
Nodes (54): act(), blitz(), cards(), challenge(), conj(), definitions(), dictated(), Extra (+46 more)

### Community 74 - "u1-voyage.ts"
Cohesion: 0.14
Nodes (13): emojiWords, Gap, GAPS, LESSON, lodging, meaning(), PAIRS, phrases (+5 more)

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

### Community 79 - "u2-medias.ts"
Cohesion: 0.05
Nodes (52): DialogueScene, gap(), GapItem, mc(), npc(), QuizQuestion, Turn, unitFr() (+44 more)

### Community 80 - "Memory.tsx"
Cohesion: 0.06
Nodes (37): In the app, ref_lib_sfx, ref_lib_useimagemanifest, ref_lib_wordphotos, ref_test_render, Props, SIZES, manifest (+29 more)

### Community 81 - "worker/index.ts"
Cohesion: 0.22
Nodes (9): CacheLike, Env, fetch(), get(), R2ObjectLike, serveImage(), env(), run() (+1 more)

### Community 82 - "Conjugation.tsx"
Cohesion: 0.19
Nodes (15): ref_components_ui_umlautkeyboard, ref_content_lessons, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy() (+7 more)

### Community 83 - "u11-sport.ts"
Cohesion: 0.15
Nodes (12): DBL, EMP, events, FA, mean(), ORDER, phrases, sport (+4 more)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "build.ts"
Cohesion: 0.13
Nodes (21): ref_lib_german_adjectives, ref_lib_german_articles, A11_TOPICS, CASES, GENDERS, A12_TOPICS, A21_TOPICS, superlativeRows() (+13 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.22
Nodes (8): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 87 - "c2-1.ts"
Cohesion: 0.15
Nodes (9): list(), C11_TOPICS, C12_TOPICS, C21_TOPICS, futur2Rows, WERDEN, C22_TOPICS, C1_SOURCES (+1 more)

### Community 88 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 89 - "French C2.1 – syllabus research and plan"
Cohesion: 0.09
Nodes (27): French C1.1 – syllabus research and plan, How the units were chosen, Known limits, Left out on purpose, Sources (what was actually read), Unit 1 – Les médias et l'information, Units 2 to 11, Vocabulary integrity (+19 more)

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
Cohesion: 0.18
Nodes (15): French A1.2 (5 topics so far), conjugateFr(), ER_ENDINGS, ER_STRONG_STEM, forms(), FrenchForms, IR_ENDINGS, IRREGULAR (+7 more)

### Community 94 - "b2-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, wissenschaft, unterwegs, klima, beziehungen, besitz (+7 more)

### Community 95 - "fetch.ts"
Cohesion: 0.13
Nodes (21): ref_node_crypto, sharp, apiTurn, byId(), CACHE, download(), downloadTurn, downloadWithRetry() (+13 more)

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
Cohesion: 0.14
Nodes (20): COND_ENDINGS, conditionnel(), PLURAL, plusQueParfait(), beforeI(), ETRE_VERBS, EXTRA_PRESENT, forms() (+12 more)

### Community 100 - "fr-b2-1/helpers.ts"
Cohesion: 0.09
Nodes (26): Meta, VocabList, VocabPathOptions, Question, SixForms, SpellRow, Turn, VocabGroup (+18 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.08
Nodes (21): ref_games_shared_gameframe, ActivityCard(), DailyGoalCard(), Card(), Props, Chip(), ChipProps, Tag() (+13 more)

### Community 102 - "b2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, stadt, druck, netz, beziehungen, ernaehrung (+7 more)

### Community 103 - "turnstile.ts"
Cohesion: 0.22
Nodes (4): TURNSTILE_SITE_KEY, TurnstileApi, TurnstileOptions, Window

### Community 104 - "u2-fetes.ts"
Cohesion: 0.12
Nodes (15): ref_lib_french_passecompose, pcTable(), unitFr(), events, family, fetes, heard, looks (+7 more)

### Community 105 - "ReportButton.tsx"
Cohesion: 0.15
Nodes (10): What the player sees, ref_components_ui_dialog, ref_lib_report, ref_lib_turnstile, ReportButton(), ReportContext, ReportDialog(), Status (+2 more)

### Community 106 - "articles.ts"
Cohesion: 0.18
Nodes (14): DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, Case, DEFINITE, definiteArticle() (+6 more)

### Community 107 - "fr-c1-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, travail, numeriqueUnit, medias, societe, egalite, alimentation (+5 more)

### Community 109 - "u9-recit.ts"
Cohesion: 0.14
Nodes (12): Build plan, Checks done and not done, French B2.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read), frForms(), phrases, recit (+4 more)

### Community 110 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 111 - "forms.ts"
Cohesion: 0.16
Nodes (16): adjectiveEnding(), row(), adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms() (+8 more)

### Community 112 - "French A2.2 – syllabus research and plan"
Cohesion: 0.33
Nodes (5): Build status, French A2.2 – syllabus research and plan, Grammar added per unit, Sources (what was actually read), Units

### Community 113 - "Deployment doc"
Cohesion: 0.12
Nodes (15): ProgressRepository (local-first storage seam), Deployment doc, Cloudflare Pages / Workers hosting, Alternative hosts (Vercel, Netlify, Render), PWA service worker and caching headers, wrangler.jsonc SPA config, Storage and delivery, Where the photos come from (+7 more)

### Community 114 - "u12-culture.ts"
Cohesion: 0.15
Nodes (12): arts, culture, KIND, mean(), OPP, opposition, phrases, PS (+4 more)

### Community 115 - "grammar/schema.ts"
Cohesion: 0.15
Nodes (12): BlockSchema, Callout, Compare, Examples, GrammarTopicSchema, lessonId, List, Paragraph (+4 more)

### Community 116 - "README (lingoat)"
Cohesion: 0.11
Nodes (26): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Integrity between levels (no repeated vocab) (+18 more)

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "compound.ts"
Cohesion: 0.35
Nodes (8): conditionnelPasse(), futurAnterieur(), gerondif(), PARTICIPE_PRESENT, participePresent(), PLURAL, plusQueParfait(), withAuxiliary()

### Community 119 - "vite.config.ts"
Cohesion: 0.22
Nodes (6): ref_node_fs, ref_node_url, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 120 - "main"
Cohesion: 0.09
Nodes (20): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources, Code quality: SonarQube Cloud, One-time setup (by hand), Build plan (+12 more)

### Community 121 - "u8-temps.ts"
Cohesion: 0.17
Nodes (9): clothes, days, months, pictureQuiz, POSITION_CARDS, SORT_CARDS, temps, vocab (+1 more)

### Community 122 - "u2-presenter.ts"
Cohesion: 0.14
Nodes (13): Build plan, French A1.1 – syllabus research and plan, How the units were chosen, Sources (what was actually read), frTable(), countries, GENDER_CARDS, jobs (+5 more)

### Community 123 - "fr-b1-2/u7-ville.ts"
Cohesion: 0.17
Nodes (11): manualTable(), actions, IND, KIND, mean(), phrases, pronouns, street (+3 more)

### Community 124 - "u10-cause.ts"
Cohesion: 0.17
Nodes (11): presentTable(), cause, causes, connectors, events, mean(), PART, ROLE (+3 more)

### Community 125 - "u4-logement.ts"
Cohesion: 0.08
Nodes (24): presentTable(), unitFr21(), units, phrases, places, sorties, things, verbs (+16 more)

### Community 126 - "table"
Cohesion: 0.09
Nodes (25): ref_lib_french_conjugation, ref_lib_french_tenses, ref_lib_persons, table(), FR12_TOPICS, pcTable(), reflexiveTable(), formsTable() (+17 more)

### Community 127 - "u6-convaincre.ts"
Cohesion: 0.17
Nodes (11): CON, connectors, convaincre, GER, ideas, mean(), MEANING, phrases (+3 more)

### Community 128 - "fr-b1-2/helpers.ts"
Cohesion: 0.29
Nodes (10): ref_lib_french_compound, ref_lib_french_conditional, conditionnelTable(), condPasseTable(), futAnterieurTable(), futurTable(), imparfaitTable(), pqpTable() (+2 more)

### Community 129 - "grammar/index.ts"
Cohesion: 0.08
Nodes (24): ref_lib_german_konjunktiv1, B21_TOPICS, sein, werden, B22_TOPICS, FR11_TOPICS_B, FRB21_TOPICS, FR22B_TOPICS_B (+16 more)

### Community 130 - "u7-cuisine.ts"
Cohesion: 0.18
Nodes (10): spellRows(), actions, kitchen, measures, MS, NQ, OB, phrases (+2 more)

### Community 131 - "French A2.1 – syllabus research and plan"
Cohesion: 0.40
Nodes (4): Build plan, French A2.1 – syllabus research and plan, Sources (what was actually read), Units

### Community 132 - "persons.ts"
Cohesion: 0.22
Nodes (10): CONDITIONAL_ENDINGS, conditionnel(), row(), ALL_PERSONS, FRENCH_PRONOUNS, FrenchPronoun, Person, PERSON_SETS (+2 more)

### Community 133 - "fr-b1-1/index.ts"
Cohesion: 0.07
Nodes (32): subjTable(), unitFr(), units, character, FEELING_CARDS, feelings, regrets, sentiments (+24 more)

### Community 134 - "subjunctive.ts"
Cohesion: 0.21
Nodes (10): Build plan, French B1.1 – syllabus research and plan, How the units were chosen, Limits of the research, Sources (what was actually read), forms(), IRREGULAR, nousStem() (+2 more)

### Community 135 - "Grammar lesson sources"
Cohesion: 0.11
Nodes (17): A1.1 and A1.2 (22 topics), A2.1 and A2.2 (19 topics), B1.1 and B1.2 (17 topics), B2.1 and B2.2 (28 topics), C1.1 and C1.2 (19 topics), C2.1 and C2.2 (18 topics), French A1.1 (25 topics), French A2.1 (21 topics) (+9 more)

### Community 136 - "u8-rapporter.ts"
Cohesion: 0.18
Nodes (10): sp(), formal, INV, mean(), messages, phrases, REP, STYLE (+2 more)

### Community 137 - "u3-souvenirs.ts"
Cohesion: 0.20
Nodes (9): EN, IMP, landscapes, memories, phrases, USE, verbs, vocab (+1 more)

### Community 138 - "u9-etudes.ts"
Cohesion: 0.18
Nodes (10): etudes, feelings, FORM, mean(), phrases, REL, studies, TOPIC (+2 more)

### Community 141 - "u6-subjonctif.ts"
Cohesion: 0.18
Nodes (9): moodItems, quizWords, reporting, Six, subjonctif, Table, timeShift, triggers (+1 more)

### Community 142 - "u3-hypotheses.ts"
Cohesion: 0.18
Nodes (10): COND, dreams, hypotheses, KIND, links, mean(), phrases, SI (+2 more)

### Community 143 - "fr-a2-1/helpers.ts"
Cohesion: 0.09
Nodes (27): GapRow, gaps(), QuizRow, quizRows(), SentRow, sentRows(), SpellRow, Table (+19 more)

### Community 144 - "u6-table.ts"
Cohesion: 0.18
Nodes (9): ref_lib_french_numbers, drinksMeals, foods, phrases, pictureQuiz, quantities, SORT_CARDS, table (+1 more)

### Community 145 - "u4-regrets.ts"
Cohesion: 0.20
Nodes (9): scene(), feelings, links, mean(), phrases, PQP, TIME, verbs (+1 more)

### Community 146 - "u3-recit.ts"
Cohesion: 0.20
Nodes (8): events, recit, registerItems, Six, Table, tenseItems, times, vocab

### Community 147 - "u4-famille.ts"
Cohesion: 0.18
Nodes (10): adjectives, CEST_CARDS, emojiFamily, famille, family, meaning(), PAIRS, phrases (+2 more)

### Community 148 - "ref_lib_german_conjugation"
Cohesion: 0.31
Nodes (4): ref_lib_german_conjugation, B11_TOPICS, B12_TOPICS, B1_SOURCES

### Community 149 - "fr-a1-1/u7-ville.ts"
Cohesion: 0.20
Nodes (9): phrases, pictureQuiz, places, route, SORT_CARDS, ville, vocab, where (+1 more)

### Community 150 - "u2-paysages.ts"
Cohesion: 0.20
Nodes (9): sortCards(), FORMS, L, landscapes, mean(), outdoors, phrases, vocab (+1 more)

### Community 151 - "u1-journee.ts"
Cohesion: 0.22
Nodes (8): chores, heard, journee, morning, order, pictureQuiz, vocab, when

### Community 152 - "French A1.2 – syllabus research and plan"
Cohesion: 0.25
Nodes (6): Build plan, French A1.2 – syllabus research and plan, How the units were chosen, Sources (what was actually read), Unit 1 – Ma journée (`journee`), Unit 2 – Félicitations ! (`fetes`)

### Community 153 - "u6-medias.ts"
Cohesion: 0.25
Nodes (7): sortCards(), medias, press, reporting, social, vocab, VOICE_CARDS

### Community 154 - "u4-consommer.ts"
Cohesion: 0.25
Nodes (7): certainty, consommer, consumption, MOOD_CARDS, places, POSITION_CARDS, vocab

### Community 155 - "u4-doute.ts"
Cohesion: 0.25
Nodes (7): you(), attitudes, doute, ideas, MOOD, phrases, vocab

### Community 156 - "u5-planete.ts"
Cohesion: 0.22
Nodes (8): unitFr(), actions, mean(), phrases, planet, PREP, prepositions, vocab

### Community 157 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 158 - "FeedbackBanner.tsx"
Cohesion: 0.33
Nodes (5): FEEDBACK_TINT, FeedbackBanner(), FeedbackKind, Props, STYLE

### Community 159 - "IconButton.tsx"
Cohesion: 0.29
Nodes (6): IconButton(), Props, Size, SIZES, Variant, VARIANTS

### Community 160 - "fr-b1-2/index.ts"
Cohesion: 0.29
Nodes (5): units, paysages, regrets, planete, rapporter

### Community 161 - "Toast.tsx"
Cohesion: 0.33
Nodes (5): ICON, Props, STYLE, Toast(), Tone

### Community 162 - "French B1.2 – syllabus research and plan"
Cohesion: 0.33
Nodes (5): French B1.2 – syllabus research and plan, How the units were chosen, Open points, Sources (what was actually read), Status

### Community 163 - "u8-cause.ts"
Cohesion: 0.25
Nodes (7): cards(), cause, effects, judging, phrases, SIDE, vocab

### Community 165 - "u12-ville.ts"
Cohesion: 0.25
Nodes (7): sent(), citizens, green, KIND, phrases, ville, vocab

### Community 166 - "u1-identite.ts"
Cohesion: 0.25
Nodes (7): unitFr(), identite, identity, phrases, SORT, traits, vocab

### Community 167 - "u5-sentiments.ts"
Cohesion: 0.14
Nodes (16): g(), q(), qs(), split(), feelings, looks, phrases, sentiments (+8 more)

### Community 168 - "u2-parcours.ts"
Cohesion: 0.25
Nodes (7): say(), family, MOOD, parcours, phrases, stages, vocab

### Community 169 - "fr-b2-1/index.ts"
Cohesion: 0.22
Nodes (8): content, units, demarches, paperwork, phrases, SUBJ, travel, vocab

### Community 170 - "u11-logement.ts"
Cohesion: 0.25
Nodes (7): src_content_fr_b2_1_helpers_activity, describing, logement, phrases, PREP, renting, vocab

### Community 171 - "u10-cites.ts"
Cohesion: 0.25
Nodes (8): meta(), vocabGames(), cites, cityLife, oldNew, phrases, ROLE, vocab

### Community 181 - "u3-sante.ts"
Cohesion: 0.25
Nodes (7): tf(), ADVICE, care, phrases, sante, symptoms, vocab

### Community 183 - "French B2.2 – syllabus research and plan"
Cohesion: 0.40
Nodes (4): Build plan and status, French B2.2 – syllabus research and plan, How the units were chosen, Sources (what was actually read)

## Knowledge Gaps
- **2255 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+2250 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 2512 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `UnitContent` connect `UnitContent` to `fr-b1-2/helpers.ts`, `say`, `u7-cuisine.ts`, `flashcards`, `fr-b1-1/index.ts`, `you`, `content/schema.ts`, `u3-souvenirs.ts`, `a1-1/index.ts`, `u8-rapporter.ts`, `u9-etudes.ts`, `tf`, `u3-hypotheses.ts`, `fr-a2-1/helpers.ts`, `a2-2/index.ts`, `u6-table.ts`, `u4-regrets.ts`, `u4-famille.ts`, `u3-recit.ts`, `fr-a1-1/u7-ville.ts`, `u2-paysages.ts`, `u1-journee.ts`, `kit.ts`, `b1-1/index.ts`, `u8-etudes.ts`, `u4-consommer.ts`, `u6-medias.ts`, `u5-planete.ts`, `q`, `u4-doute.ts`, `u4-zahlen.ts`, `u8-cause.ts`, `meta`, `u12-ville.ts`, `u1-identite.ts`, `b1-2/index.ts`, `u2-parcours.ts`, `u5-sentiments.ts`, `u11-logement.ts`, `fr-a1-1/helpers.ts`, `heard`, `u10-cites.ts`, `fr-b2-1/index.ts`, `builders.ts`, `u3-sante.ts`, `fr-b1-1/helpers.ts`, `u3-nombres.ts`, `u6-subjonctif.ts`, `fr-c1-2/helpers.ts`, `u1-voyage.ts`, `u2-medias.ts`, `u11-sport.ts`, `u7-tag.ts`, `b2-1/index.ts`, `c1-2/index.ts`, `fr-b2-1/helpers.ts`, `b2-2/index.ts`, `u2-fetes.ts`, `u9-recit.ts`, `u12-culture.ts`, `u8-temps.ts`, `u2-presenter.ts`, `fr-b1-2/u7-ville.ts`, `u10-cause.ts`, `u4-logement.ts`, `u6-convaincre.ts`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `Gapfill.test.tsx`, `content/schema.ts`, `router.tsx`, `package.json`, `PlayPage.tsx`, `Clock.tsx`, `grammar/grammar.test.tsx`, `FeedbackBanner.tsx`, `Sentence.tsx`, `IconButton.tsx`, `Toast.tsx`, `Icon.tsx`, `AppLayout.tsx`, `wordPhotos.ts`, `controls.test.tsx`, `Memory.tsx`, `Conjugation.tsx`, `Button.tsx`, `@testing-library/react`, `ui.test.tsx`, `ReportButton.tsx`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `zod` connect `progressTransfer.ts` to `grammar/schema.ts`, `content/schema.ts`, `@testing-library/react`, `package.json`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _2255 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gapfill.test.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11174242424242424 - nodes in this community are weakly interconnected._
- **Should `say` be split into smaller, more focused modules?**
  _Cohesion score 0.02973852541802267 - nodes in this community are weakly interconnected._
- **Should `manifest.json` be split into smaller, more focused modules?**
  _Cohesion score 0.003992015968063872 - nodes in this community are weakly interconnected._