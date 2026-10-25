# Graph Report - lingoat.games  (2026-10-25)

## Corpus Check
- 443 files · ~465,404 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 5, .ico 1, .properties 1)

## Summary
- 2270 nodes · 7381 edges · 105 communities (96 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 95 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `237db972`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- a1-1/index.ts
- UnitContent
- tf
- conjugation.ts
- heard
- B1.1 coverage and research doc
- playability.tsx
- numbers.ts
- schema.ts
- @testing-library/react
- a1-2/index.ts
- package.json
- progressStore.ts
- say
- devDependencies
- PlayPage.tsx
- ref_test_render
- react
- content/hints.ts
- build.mjs
- e2e/helpers.ts
- compilerOptions
- a2-2/helpers.ts
- lessons.ts
- Clock.tsx
- label
- b2-1/index.ts
- compilerOptions
- adjectives.ts
- rng.ts
- u6-aemter.ts
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- Market.tsx
- scripts
- u8-nuancen.ts
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- controls.test.tsx
- b2-2/index.ts
- AppLayout.tsx
- c2-1/index.ts
- Code graph (Graphify)
- meta
- dependencies
- q
- c1-2/index.ts
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
- u5-familie.ts
- e2e/tsconfig.json
- vite.config.ts
- graphify reference: add a URL and watch a folder
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- README (lingoat)
- Deployment doc
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- b1-1/index.ts
- Architecture doc
- vocabList
- ref_lib_german_conjugation
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- forms.ts
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- a1-2/helpers.ts
- unit
- a2-2/index.ts
- typed
- b1-2/index.ts
- u8-schule.ts
- c2-1/helpers.ts
- nouns.ts
- a2-1/index.ts
- ui.test.tsx
- articles.ts
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- u2-literatur.ts
- c2-2/index.ts
- vitest
- u1-kunst.ts
- u5-staat.ts
- u7-klima.ts
- konjunktiv1.ts
- c2-2/u6-engagement.ts
- builders.ts

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
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
- `Grammar` --references--> `statePassiveTable()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `13 game engines` --implements--> `Game engine contract (GameProps, useSequence, GameFrame)`  [INFERRED]
  README.md → docs/architecture.md
- `index.html app shell` --references--> `Favicon: white umlaut A on blue rounded square`  [EXTRACTED]
  index.html → public/favicon.svg
- `graphify trigger instructions (.claude/CLAUDE.md)` --conceptually_related_to--> `CLAUDE.md project notes`  [INFERRED]
  .claude/CLAUDE.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B1.1 research sources** — docs_b1_1_coverage_schritte, docs_b1_1_coverage_menschen, docs_b1_1_coverage_netzwerk, docs_b1_1_coverage_ziel, docs_b1_1_coverage_goethe_b1, docs_b1_1_coverage_cefr [EXTRACTED 1.00]
- **Level authoring knowledge (procedure, coverage rules, level docs)** — docs_adding_content_new_level, docs_a2_2_coverage, docs_b1_1_coverage [INFERRED 0.85]

## Communities (105 total, 9 thin omitted)

### Community 0 - "a1-1/index.ts"
Cohesion: 0.10
Nodes (23): units, vocab, sortitTranslations, sortitTranslations, units, vocab, sortitTranslations, wirtschaft (+15 more)

### Community 1 - "UnitContent"
Cohesion: 0.07
Nodes (37): UnitContent, ads, jobs, reflexive, vocab, spell(), sw(), unitC21() (+29 more)

### Community 2 - "tf"
Cohesion: 0.08
Nodes (33): tf(), you(), colours, phrases, seasons, vocab, weather, unitB11() (+25 more)

### Community 3 - "conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "heard"
Cohesion: 0.05
Nodes (49): ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), unit12(), chores, people, rules, vocab (+41 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "playability.tsx"
Cohesion: 0.15
Nodes (14): ref_content_items, ref_content_schema, ref_content_tags, ref_games_market_logic, ref_games_memory_logic, ref_games_registry, levelFixture(), quizActivity() (+6 more)

### Community 7 - "numbers.ts"
Cohesion: 0.11
Nodes (30): year(), below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES (+22 more)

### Community 8 - "schema.ts"
Cohesion: 0.05
Nodes (50): VocabList, ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent() (+42 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.06
Nodes (33): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+25 more)

### Community 10 - "a1-2/index.ts"
Cohesion: 0.14
Nodes (13): units, vocab, sortitTranslations, alltag, stadt, wohnen, arbeit, gesundheit (+5 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.11
Nodes (22): zustand, ref_zustand_middleware, ActivityProgress, dailyXp, initialProgress(), nextStreak(), ProgressActions, ProgressData (+14 more)

### Community 13 - "say"
Cohesion: 0.08
Nodes (40): ref_lib_german_konjunktiv1, say(), sent(), Blanks, lx(), unitC11(), economy, finance (+32 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.07
Nodes (42): ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_dialog (+34 more)

### Community 16 - "ref_test_render"
Cohesion: 0.11
Nodes (16): ref_test_render, answerRight(), answerWrong(), config, prompt(), statements, truth(), BACK (+8 more)

### Community 17 - "react"
Cohesion: 0.07
Nodes (61): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_content_lessons, @dnd-kit/core, ref_lib_answer_check, ref_lib_scoring, ref_lib_sfx, ref_lib_tts (+53 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.05
Nodes (43): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_forms, ref_test_factories, nextActivity(), pathStates(), playUrl(), queueAfter() (+35 more)

### Community 19 - "build.mjs"
Cohesion: 0.15
Nodes (9): ref_node_fs_promises, ref_node_path, ICO_SIZES, PNGS, publicDir, BRAND, BRAND_LIGHT, glyphs (+1 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.07
Nodes (41): PAGES, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+33 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "a2-2/helpers.ts"
Cohesion: 0.13
Nodes (25): Grammar, customTable(), Blanks, ENDING_ORDER, k2Table(), passiveTable(), reflexiveAccTable(), reflexiveDativeTable() (+17 more)

### Community 23 - "lessons.ts"
Cohesion: 0.13
Nodes (18): Meta, VocabPathOptions, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS (+10 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "label"
Cohesion: 0.09
Nodes (33): ref_test_contentsuite, ref_test_playability, content, content, content, key(), REVIEW_WORDS, content (+25 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, wissenschaft, unterwegs, klima, beziehungen, besitz (+7 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "adjectives.ts"
Cohesion: 0.36
Nodes (8): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "u6-aemter.ts"
Cohesion: 0.29
Nodes (6): aemter, authorities, countries, forms, nat(), vocab

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
Cohesion: 0.24
Nodes (10): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market() (+2 more)

### Community 35 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, check, deploy, dev, format, format:check, icons (+7 more)

### Community 36 - "u8-nuancen.ts"
Cohesion: 0.29
Nodes (6): grammarTags, LESSON, nuancen, redewendungen, stil, vocab

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "controls.test.tsx"
Cohesion: 0.07
Nodes (27): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+19 more)

### Community 40 - "b2-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, stadt, druck, netz, beziehungen, ernaehrung (+7 more)

### Community 41 - "AppLayout.tsx"
Cohesion: 0.06
Nodes (18): ref_components_ui_logo, ref_components_ui_skeleton, ref_components_ui_statpill, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, ref_test_speech, AppLayout() (+10 more)

### Community 42 - "c2-1/index.ts"
Cohesion: 0.14
Nodes (13): content, units, vocab, sortitTranslations, sprache, arbeit, wirtschaft, digitalUnit (+5 more)

### Community 43 - "Code graph (Graphify)"
Cohesion: 0.40
Nodes (4): Code graph (Graphify), Locally, Repo settings, The workflow

### Community 44 - "meta"
Cohesion: 0.06
Nodes (57): gap(), meta(), table(), actions, devices, vocab, web, adjGap() (+49 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "q"
Cohesion: 0.04
Nodes (55): q(), sortItems(), unit22(), bank, insurance, money, vocab, memories (+47 more)

### Community 47 - "c1-2/index.ts"
Cohesion: 0.12
Nodes (16): content, units, vocab, sortitTranslations, team10, nachhaltigkeit, vortrag, finanzen (+8 more)

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
Cohesion: 0.18
Nodes (6): dayParts, days, routine, tag, timeWords, vocab

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "c2-2/helpers.ts"
Cohesion: 0.20
Nodes (14): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+6 more)

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 59 - "u5-familie.ts"
Cohesion: 0.12
Nodes (12): people, phrases, vocab, wer, familie, female, male, relatives (+4 more)

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "vite.config.ts"
Cohesion: 0.33
Nodes (5): ref_node_url, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 65 - ".prettierrc.json"
Cohesion: 0.40
Nodes (4): printWidth, semi, singleQuote, trailingComma

### Community 68 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 69 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 73 - "README (lingoat)"
Cohesion: 0.16
Nodes (12): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts), Leitner SRS review (srs.ts), Code quality: SonarQube Cloud (+4 more)

### Community 74 - "Deployment doc"
Cohesion: 0.29
Nodes (8): ProgressRepository (local-first storage seam), Deployment doc, Cloudflare Pages / Workers hosting, Alternative hosts (Vercel, Netlify, Render), PWA service worker and caching headers, wrangler.jsonc SPA config, index.html app shell, Favicon: white umlaut A on blue rounded square

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.20
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "b1-1/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, feiern, umwelt, pannen, glueck, unterhaltung (+7 more)

### Community 79 - "Architecture doc"
Cohesion: 0.21
Nodes (13): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Procedure: add a new unit (builders.ts), Architecture doc, Accessible by default, Content is data, engines are generic (+5 more)

### Community 80 - "vocabList"
Cohesion: 0.06
Nodes (41): unitB22(), green, mobility, vocab, decide, stress, vocab, law (+33 more)

### Community 82 - "ref_lib_german_conjugation"
Cohesion: 0.35
Nodes (9): ref_components_ui_umlautkeyboard, ref_lib_german_conjugation, Conjugation(), config, forms, CellVerdicts, conjugationWhy(), gradeTable() (+1 more)

### Community 83 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "forms.ts"
Cohesion: 0.17
Nodes (14): adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms(), DEFINITE, describeForm() (+6 more)

### Community 86 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.25
Nodes (7): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 87 - "a1-2/helpers.ts"
Cohesion: 0.13
Nodes (18): pastTable(), Pronoun, Question, readRound(), sepTable(), setRound(), Turn, Blanks (+10 more)

### Community 89 - "unit"
Cohesion: 0.09
Nodes (17): byes, feelings, hallo, hellos, polite, vocab, countries, country() (+9 more)

### Community 90 - "a2-2/index.ts"
Cohesion: 0.13
Nodes (14): units, vocab, sortitTranslations, bankUnit, leben, arbeit, lernen, sportUnit (+6 more)

### Community 92 - "typed"
Cohesion: 0.08
Nodes (41): dictation(), typed(), memory(), quizDeEn(), unitC12(), conflict, team, vocab (+33 more)

### Community 93 - "b1-2/index.ts"
Cohesion: 0.12
Nodes (15): units, vocab, sortitTranslations, heimat, kunst, diskussion, kollegen, digital (+7 more)

### Community 94 - "u8-schule.ts"
Cohesion: 0.12
Nodes (12): ref_lib_german_numbers, einkaufen, food, genderItems, shopping, vocab, reflexiveTable(), learning (+4 more)

### Community 96 - "c2-1/helpers.ts"
Cohesion: 0.31
Nodes (9): Blanks, compound(), futur2Table(), k1PerfectTable(), k1Table(), k2ModalPastTable(), konjunktiv1(), SixForms (+1 more)

### Community 98 - "nouns.ts"
Cohesion: 0.22
Nodes (16): Gender, bareNoun(), buildNounIndex(), findGapNoun(), GapNoun, GENDER, isCapitalised(), isDeterminer() (+8 more)

### Community 100 - "a2-1/index.ts"
Cohesion: 0.08
Nodes (22): unit21(), units, vocab, beruf, cv, PERFEKT, verbs, vocab (+14 more)

### Community 101 - "ui.test.tsx"
Cohesion: 0.04
Nodes (63): ref_content_gametypes, ref_games_shared_gameframe, ActivityCard(), Props, DailyGoalCard(), Card(), Props, Chip() (+55 more)

### Community 104 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 113 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 115 - "u2-literatur.ts"
Cohesion: 0.29
Nodes (6): buch, grammarTags, kritik, LESSON, literatur, vocab

### Community 116 - "c2-2/index.ts"
Cohesion: 0.14
Nodes (14): vocabPath(), units, vocab, gericht, grammarTags, LESSON, recht, verfahren (+6 more)

### Community 117 - "vitest"
Cohesion: 0.29
Nodes (3): ref_testing_library_jest_dom_vitest, vitest, Utterance

### Community 118 - "u1-kunst.ts"
Cohesion: 0.25
Nodes (7): unitC22(), betrieb, grammarTags, kunst, LESSON, urteil, vocab

### Community 119 - "u5-staat.ts"
Cohesion: 0.25
Nodes (7): withWhy(), debatte, grammarTags, LESSON, staat, staatPolitik, vocab

### Community 120 - "u7-klima.ts"
Cohesion: 0.29
Nodes (6): grammarTags, handeln, klima, LESSON, vocab, welt

### Community 121 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

### Community 125 - "c2-2/u6-engagement.ts"
Cohesion: 0.25
Nodes (7): withLesson(), engagement, gesellschaft, grammarTags, LESSON, verben, vocab

### Community 129 - "builders.ts"
Cohesion: 0.05
Nodes (64): events, phrases, vocab, luck, news, vocab, phrases, service (+56 more)

## Knowledge Gaps
- **974 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+969 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1120 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Market.tsx`, `ui.test.tsx`, `playability.tsx`, `controls.test.tsx`, `schema.ts`, `AppLayout.tsx`, `@testing-library/react`, `package.json`, `PlayPage.tsx`, `ref_lib_german_conjugation`, `Clock.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Why does `README (lingoat)` connect `README (lingoat)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Deployment doc`, `Code graph (Graphify)`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `Architecture doc`, `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `C2.2 – syllabus research, coverage and overlap with A1.1–C2.1`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `@playwright/test` connect `e2e/helpers.ts` to `build.mjs`, `package.json`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _974 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `a1-1/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09655172413793103 - nodes in this community are weakly interconnected._
- **Should `UnitContent` be split into smaller, more focused modules?**
  _Cohesion score 0.06972789115646258 - nodes in this community are weakly interconnected._
- **Should `tf` be split into smaller, more focused modules?**
  _Cohesion score 0.07973421926910298 - nodes in this community are weakly interconnected._