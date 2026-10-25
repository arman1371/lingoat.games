# Graph Report - lingoat.games  (2026-10-25)

## Corpus Check
- 414 files · ~444,773 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .properties 1, .css 1)

## Summary
- 2143 nodes · 7071 edges · 149 communities (139 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 77 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8c2e31f8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- c1-1/index.ts
- c2-1/helpers.ts
- UnitContent
- conjugation.ts
- heard
- B1.1 coverage and research doc
- forms.ts
- numbers.ts
- schema.ts
- @testing-library/react
- a2-2/index.ts
- package.json
- progressStore.ts
- you
- devDependencies
- PlayPage.tsx
- sounds.test.tsx
- react
- content/hints.ts
- b1-1/helpers.ts
- e2e/helpers.ts
- compilerOptions
- c2-2/helpers.ts
- lessons.ts
- Clock.tsx
- a2-1/index.ts
- b2-1/index.ts
- compilerOptions
- filters.ts
- rng.ts
- items.ts
- Sentence.tsx
- C1.1 – syllabus research, coverage and overlap with A1.1–B1.2
- u4-zahlen.ts
- Market.tsx
- scripts
- Toast.tsx
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- ActivityCard.tsx
- b2-2/index.ts
- Conjugation.tsx
- u5-familie.ts
- ContentProvider.tsx
- builders.ts
- dependencies
- a2-2/helpers.ts
- AppLayout.tsx
- answer-check.ts
- sfx.ts
- tts.test.ts
- u7-tag.ts
- u8-schule.ts
- adjectives.ts
- srs.ts
- articles.ts
- i18n/index.ts
- graphify reference: query, path, explain
- Icon.tsx
- B2.1 – syllabus research, coverage and overlap with A1.1–B1.2
- e2e/tsconfig.json
- vite.config.ts
- Tabs.tsx
- graphify reference: add a URL and watch a folder
- konjunktiv1.ts
- .prettierrc.json
- tsconfig.json
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- README (lingoat)
- Deployment doc
- Button.tsx
- B2.2 – syllabus research, coverage and overlap with A1.1–B2.1
- C2.1 – syllabus research, coverage and overlap with A1.1–C1.2
- b1-1/index.ts
- Architecture doc
- Code graph (Graphify)
- b1-2/index.ts
- gap
- C2.2 – syllabus research, coverage and overlap with A1.1–C2.1
- B1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- c1-2/index.ts
- a1-1/types.ts
- a2-1/helpers.ts
- a11y.spec.ts
- IconButton.tsx
- byDe
- u2-sport.ts
- c1-2/helpers.ts
- u1-glueck.ts
- u10-beruf.ts
- b2-1/helpers.ts
- c2-2/index.ts
- u1-lernen.ts
- quizDeEn
- u7-post.ts
- u5-wohnung.ts
- ui.test.tsx
- path.ts
- c2-2/u6-engagement.ts
- say
- dictation
- sent
- u7-familie.ts
- u3-woher.ts
- u1-online.ts
- u1-kunst.ts
- u3-wetter.ts
- typed
- C1.2 – syllabus research, coverage and overlap with A1.1–B1.1
- u9-jobsuche.ts
- u2-literatur.ts
- u4-recht.ts
- setup.ts
- FeedbackBanner.tsx
- u5-staat.ts
- u7-klima.ts
- q
- u8-nuancen.ts
- tf
- u5-wuensche.ts
- hint
- spell
- Logo.tsx
- u12-klima.ts
- u10-wissenschaft.ts
- u11-unterwegs.ts
- u10-team.ts
- u12-vortrag.ts
- u3-recht.ts
- memory
- u6-literatur.ts
- u9-forschung.ts
- b2-1/u1-beziehungen.ts
- u3-wohlbefinden.ts
- u4-kommunikation.ts
- u5-teamgeist.ts
- u6-lebenswege.ts
- u7-gesellschaft.ts
- u8-wohnen.ts
- u9-medien.ts
- u1-finanzen.ts
- u5-stadt.ts

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
- `Grammar` --references--> `statePassiveTable()`  [INFERRED]
  docs/b2-1-coverage.md → src/content/b2-1/helpers.ts
- `Engines` --references--> `k2ModalPastTable()`  [INFERRED]
  docs/c2-1-coverage.md → src/content/c2-1/helpers.ts
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

## Communities (149 total, 10 thin omitted)

### Community 0 - "c1-1/index.ts"
Cohesion: 0.08
Nodes (22): content, units, wirtschaft, gesellschaft, zeit, digital, sprache, manieren (+14 more)

### Community 1 - "c2-1/helpers.ts"
Cohesion: 0.05
Nodes (47): Mascot(), src_components_ui_mascot_mascotmood, Props, MASCOT_MOODS, MASCOT_SHAPES, MascotMood, MascotShape, Props (+39 more)

### Community 2 - "UnitContent"
Cohesion: 0.07
Nodes (29): UnitContent, meta(), environment, materials, vocab, mishaps, reactions, vocab (+21 more)

### Community 3 - "conjugation.ts"
Cohesion: 0.18
Nodes (18): conjugate(), conjugatePreterite(), DATIVE_REFLEXIVE_PRONOUNS, f(), IRREGULAR, konjunktiv2, MIXED_PRETERITE, needsE() (+10 more)

### Community 4 - "heard"
Cohesion: 0.06
Nodes (55): ref_lib_german_ordinals, src_content_a1_2_helpers_activity, heard(), Pronoun, Question, table(), Turn, unit12() (+47 more)

### Community 5 - "B1.1 coverage and research doc"
Cohesion: 0.14
Nodes (17): A2.2 coverage doc, A2.2 communication goals, A2.2 grammar coverage (Konjunktiv II, Passiv, adjective endings, relative clauses), Rule: teach new, extend, only review inside activities, Integrity between levels (no repeated vocab), Procedure: add a new level, Tags and filters, B1.1 coverage and research doc (+9 more)

### Community 6 - "forms.ts"
Cohesion: 0.17
Nodes (14): adjectiveEndingWhy(), adjectiveRule(), AFTER, CASE_NAME, CASES, contrastForms(), DEFINITE, describeForm() (+6 more)

### Community 7 - "numbers.ts"
Cohesion: 0.12
Nodes (29): below100(), below1000(), digitsToGerman(), formatPrice(), LETTER_NAMES, numberToGerman(), ONES, priceToGerman() (+21 more)

### Community 8 - "schema.ts"
Cohesion: 0.06
Nodes (30): GAME_TYPES, GameType, base, BlitzConfig, choiceBase, ClockConfig, ConfigOf, ConjugationConfig (+22 more)

### Community 9 - "@testing-library/react"
Cohesion: 0.04
Nodes (41): ref_app_router, ref_content_a1_1, ref_content_a1_2, ref_content_a2_1, ref_content_a2_2, ref_content_b1_1, ref_content_b1_2, ref_content_b2_1 (+33 more)

### Community 10 - "a2-2/index.ts"
Cohesion: 0.14
Nodes (13): units, bankUnit, leben, arbeit, lernen, sportUnit, nachbarn, kunst (+5 more)

### Community 11 - "package.json"
Cohesion: 0.08
Nodes (28): description, name, private, type, version, @dnd-kit/sortable, @dnd-kit/utilities, eslint (+20 more)

### Community 12 - "progressStore.ts"
Cohesion: 0.11
Nodes (22): zustand, ref_zustand_middleware, ActivityProgress, dailyXp, initialProgress(), nextStreak(), ProgressActions, ProgressData (+14 more)

### Community 13 - "you"
Cohesion: 0.08
Nodes (40): ref_lib_german_konjunktiv1, sortItems(), you(), Blanks, k1PerfectTable(), k1Table(), lx(), sixForms() (+32 more)

### Community 14 - "devDependencies"
Cohesion: 0.08
Nodes (26): devDependencies, @axe-core/playwright, eslint, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, globals, jsdom (+18 more)

### Community 15 - "PlayPage.tsx"
Cohesion: 0.07
Nodes (44): ref_app_path, ref_components_activitycard, ref_components_dailygoalcard, ref_components_ui_button, ref_components_ui_card, ref_components_ui_chip, ref_components_ui_confetti, ref_components_ui_dialog (+36 more)

### Community 16 - "sounds.test.tsx"
Cohesion: 0.14
Nodes (16): ref_lib_sfx, Blitz(), answerRight(), answerWrong(), config, prompt(), statements, truth() (+8 more)

### Community 17 - "react"
Cohesion: 0.12
Nodes (37): ref_components_ui_feedbackbanner, ref_components_ui_speakbutton, ref_components_ui_umlautkeyboard, ref_lib_tts, react, collectNpcLines(), Line, Scene (+29 more)

### Community 18 - "content/hints.ts"
Cohesion: 0.13
Nodes (17): ref_lib_german_adjectives, ref_lib_german_articles, ref_lib_german_conjugation, ref_test_factories, hints, hints, hints, hints (+9 more)

### Community 19 - "b1-1/helpers.ts"
Cohesion: 0.20
Nodes (20): customTable(), k2Table(), passiveTable(), reflexiveAccTable(), Blanks, compound(), futurTable(), k2PastTable() (+12 more)

### Community 20 - "e2e/helpers.ts"
Cohesion: 0.13
Nodes (30): PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED, PLAYED (+22 more)

### Community 21 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 22 - "c2-2/helpers.ts"
Cohesion: 0.20
Nodes (14): Blanks, compound(), modalPerfectTable(), passiveFutureTable(), passivePerfectTable(), passivePreteriteTable(), SixForms, stateTable() (+6 more)

### Community 23 - "lessons.ts"
Cohesion: 0.13
Nodes (18): Meta, VocabPathOptions, ItemHint, BROAD, COVERS, isLessonId(), Lesson, LESSON_IDS (+10 more)

### Community 24 - "Clock.tsx"
Cohesion: 0.23
Nodes (12): ref_lib_german_time, ref_lib_rng, AnalogClock(), ClockMaster(), buildClockOptions(), sameTime(), TimeStyle, wrapHour() (+4 more)

### Community 25 - "a2-1/index.ts"
Cohesion: 0.07
Nodes (41): ref_test_contentsuite, content, units, alltag, stadt, wohnen, arbeit, gesundheit (+33 more)

### Community 26 - "b2-1/index.ts"
Cohesion: 0.13
Nodes (14): content, units, wissenschaft, unterwegs, klima, beziehungen, besitz, wohlbefinden (+6 more)

### Community 27 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noUncheckedIndexedAccess (+10 more)

### Community 28 - "filters.ts"
Cohesion: 0.19
Nodes (14): activeFilterCount(), DIFFICULTY_LABELS, DURATION_LABELS, durationBucket, EMPTY_FILTERS, filterActivities(), filtersFromParams(), FilterState (+6 more)

### Community 29 - "rng.ts"
Cohesion: 0.23
Nodes (13): createRng(), hashString(), parseSeed(), pickMany(), pickOne(), randomSeed(), Rng, shuffle() (+5 more)

### Community 30 - "items.ts"
Cohesion: 0.39
Nodes (6): getItems(), itemCount(), ITEMS_KEY, ItemsKey, mapItems(), withItems()

### Community 31 - "Sentence.tsx"
Cohesion: 0.22
Nodes (10): @dnd-kit/core, buildTiles(), isCorrectSentence(), moveItem(), sentenceOf(), WordTile, Sentence(), ALT (+2 more)

### Community 32 - "C1.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.18
Nodes (10): C1.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 and B2.2 (+2 more)

### Community 33 - "u4-zahlen.ts"
Cohesion: 0.07
Nodes (22): ref_games_market_logic, ref_games_memory_logic, ref_games_registry, ref_lib_german_numbers, num(), NUMBERS, numberVocab, numCard() (+14 more)

### Community 34 - "Market.tsx"
Cohesion: 0.24
Nodes (10): adjust(), Basket, basketMatches(), OrderItem, Product, products, totalCents(), Market() (+2 more)

### Community 35 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, check, deploy, dev, format, format:check, lint (+6 more)

### Community 36 - "Toast.tsx"
Cohesion: 0.20
Nodes (8): SIZES, TILE, src_components_ui_icon_iconname, ICON, Props, STYLE, Toast(), Tone

### Community 37 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 38 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 39 - "ActivityCard.tsx"
Cohesion: 0.21
Nodes (9): ActivityCard(), Props, Chip(), ChipProps, Tag(), GameTile(), Icon(), PX (+1 more)

### Community 40 - "b2-2/index.ts"
Cohesion: 0.13
Nodes (14): content, units, stadt, druck, netz, beziehungen, ernaehrung, studium (+6 more)

### Community 41 - "Conjugation.tsx"
Cohesion: 0.20
Nodes (14): ref_content_lessons, ref_lib_answer_check, ref_lib_german_forms, Conjugation(), config, forms, CellVerdicts, conjugationWhy() (+6 more)

### Community 42 - "u5-familie.ts"
Cohesion: 0.12
Nodes (12): people, phrases, vocab, wer, familie, female, male, relatives (+4 more)

### Community 43 - "ContentProvider.tsx"
Cohesion: 0.19
Nodes (15): ContentContext, ContentProvider(), Props, State, Probe(), Strict(), useContent(), useContentState() (+7 more)

### Community 44 - "builders.ts"
Cohesion: 0.06
Nodes (52): europe, home, vocab, debate, phrases, vocab, office, phrases (+44 more)

### Community 45 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @fontsource-variable/fredoka, @fontsource-variable/plus-jakarta-sans, motion, react (+4 more)

### Community 46 - "a2-2/helpers.ts"
Cohesion: 0.20
Nodes (9): Blanks, ENDING_ORDER, reflexiveDativeTable(), SixForms, career, emergency, hospital, office (+1 more)

### Community 47 - "AppLayout.tsx"
Cohesion: 0.07
Nodes (16): ref_components_ui_logo, ref_components_ui_skeleton, ref_components_ui_statpill, ref_react_dom_client, ref_react_router_dom, ref_store_settingsstore, AppLayout(), NAV (+8 more)

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

### Community 52 - "u8-schule.ts"
Cohesion: 0.18
Nodes (10): sepTable(), reflexiveTable(), learning, school, subjects, vocab, moving, neighbours (+2 more)

### Community 53 - "adjectives.ts"
Cohesion: 0.33
Nodes (9): adjectiveEnding(), DeclensionKind, declineAdjective(), ENDINGS, stemBeforeEnding(), GENDERS, row(), Case (+1 more)

### Community 54 - "srs.ts"
Cohesion: 0.39
Nodes (7): addMistake(), dayNumber(), INTERVAL_DAYS, isDue(), Mistake, mistakeKey(), reviewMistake()

### Community 55 - "articles.ts"
Cohesion: 0.31
Nodes (8): DEFINITE, definiteArticle(), genderOfArticle(), INDEFINITE, indefiniteArticle(), negativeArticle(), possessive(), PossessiveStem

### Community 56 - "i18n/index.ts"
Cohesion: 0.32
Nodes (5): en, Strings, Leaves, StringKey, t()

### Community 57 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 58 - "Icon.tsx"
Cohesion: 0.22
Nodes (10): Props, ICON_PATHS, IconName, Props, StatCard(), Tone, ICON_TONE, Props (+2 more)

### Community 59 - "B2.1 – syllabus research, coverage and overlap with A1.1–B1.2"
Cohesion: 0.22
Nodes (8): B2.1 – syllabus research, coverage and overlap with A1.1–B1.2, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Sources

### Community 60 - "e2e/tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, paths, extends, include, ../tsconfig.node.json

### Community 61 - "vite.config.ts"
Cohesion: 0.33
Nodes (5): ref_node_url, @tailwindcss/vite, vite, vite-plugin-pwa, @vitejs/plugin-react

### Community 62 - "Tabs.tsx"
Cohesion: 0.48
Nodes (6): panelId(), Props, Tab, tabId(), TabPanel(), Tabs()

### Community 63 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 64 - "konjunktiv1.ts"
Cohesion: 0.39
Nodes (5): Forms, PRONOUNS, konjunktiv1(), konjunktiv1Perfect(), SEIN

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
Cohesion: 0.18
Nodes (12): Adding content guide, Authoring helpers and german grammar generators, Grammar hints: mini lessons and why, Procedure: add a new game engine, Game engine contract (GameProps, useSequence, GameFrame), Answer sounds (sfx.ts), Leitner SRS review (srs.ts), Code quality: SonarQube Cloud (+4 more)

### Community 74 - "Deployment doc"
Cohesion: 0.29
Nodes (8): ProgressRepository (local-first storage seam), Deployment doc, Cloudflare Pages / Workers hosting, Alternative hosts (Vercel, Netlify, Render), PWA service worker and caching headers, wrangler.jsonc SPA config, index.html app shell, Favicon: white umlaut A on blue rounded square

### Community 75 - "Button.tsx"
Cohesion: 0.18
Nodes (9): Button(), Props, Size, SIZES, Variant, VARIANTS, ConfirmDialog(), ConfirmProps (+1 more)

### Community 76 - "B2.2 – syllabus research, coverage and overlap with A1.1–B2.1"
Cohesion: 0.20
Nodes (9): B2.2 – syllabus research, coverage and overlap with A1.1–B2.1, Communication goals, Engines used, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Overlap with B2.1 (+1 more)

### Community 77 - "C2.1 – syllabus research, coverage and overlap with A1.1–C1.2"
Cohesion: 0.18
Nodes (10): C2.1 – syllabus research, coverage and overlap with A1.1–C1.2, Communication goals, Engines, Grammar, Grammar hints, How C2 was split into C2.1 and C2.2, How the units were chosen, Overlap with B2.1, B2.2 and C1.1 (+2 more)

### Community 78 - "b1-1/index.ts"
Cohesion: 0.10
Nodes (15): ref_test_playability, units, feiern, umwelt, pannen, glueck, unterhaltung, gesundheit (+7 more)

### Community 79 - "Architecture doc"
Cohesion: 0.21
Nodes (13): CLAUDE.md project notes, graphify trigger instructions (.claude/CLAUDE.md), npm run check, Repo rules (tests, zod content, seeded rng, i18n, a11y), Procedure: add a new unit (builders.ts), Architecture doc, Accessible by default, Content is data, engines are generic (+5 more)

### Community 80 - "Code graph (Graphify)"
Cohesion: 0.40
Nodes (4): Code graph (Graphify), Locally, Repo settings, The workflow

### Community 81 - "b1-2/index.ts"
Cohesion: 0.14
Nodes (13): units, heimat, kunst, diskussion, kollegen, digital, konsum, weiterbildung (+5 more)

### Community 82 - "gap"
Cohesion: 0.16
Nodes (12): gap(), adjGap(), adjectives, art, music, tickets, vocab, ads (+4 more)

### Community 83 - "C2.2 – syllabus research, coverage and overlap with A1.1–C2.1"
Cohesion: 0.25
Nodes (7): C2.2 – syllabus research, coverage and overlap with A1.1–C2.1, Game types, Grammar overlap with A1.1–C2.1, How the units were chosen, How the work was split with C2.1, Topics and grammar left out, What C2 material exists (and what does not)

### Community 84 - "B1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.20
Nodes (9): B1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Communication goals, Engines, Grammar, Grammar hints, How the units were chosen, Left out on purpose, Pronunciation (+1 more)

### Community 85 - "c1-2/index.ts"
Cohesion: 0.11
Nodes (18): earlierLevels, key(), REVIEW_WORDS, content, units, team10, nachhaltigkeit, vortrag (+10 more)

### Community 86 - "a1-1/types.ts"
Cohesion: 0.13
Nodes (11): byes, feelings, hallo, hellos, polite, vocab, freizeit, hobbies (+3 more)

### Community 87 - "a2-1/helpers.ts"
Cohesion: 0.19
Nodes (11): readRound(), setRound(), Blanks, events, plans, times, vocab, adjectives (+3 more)

### Community 89 - "IconButton.tsx"
Cohesion: 0.29
Nodes (6): IconButton(), Props, Size, SIZES, Variant, VARIANTS

### Community 90 - "byDe"
Cohesion: 0.22
Nodes (7): claims, service, vocab, byDe(), hindsight, mind, vocab

### Community 91 - "u2-sport.ts"
Cohesion: 0.09
Nodes (19): unit22(), bank, insurance, money, vocab, feelings, sport, verbs (+11 more)

### Community 92 - "c1-2/helpers.ts"
Cohesion: 0.12
Nodes (16): unitC12(), farming, sustain, vocab, food, medicine, vocab, claims (+8 more)

### Community 93 - "u1-glueck.ts"
Cohesion: 0.13
Nodes (12): pastTable(), memories, stages, story, vocab, unitB11(), events, phrases (+4 more)

### Community 94 - "u10-beruf.ts"
Cohesion: 0.25
Nodes (6): beruf, cv, PERFEKT, verbs, vocab, year()

### Community 95 - "b2-1/helpers.ts"
Cohesion: 0.21
Nodes (11): Blanks, compound(), futur2Table(), k1Table(), konjunktiv1(), SixForms, statePassiveTable(), diet (+3 more)

### Community 96 - "c2-2/index.ts"
Cohesion: 0.20
Nodes (9): units, literatur, recht, engagement, argument, communicationTags, redemittel, stellung (+1 more)

### Community 97 - "u1-lernen.ts"
Cohesion: 0.40
Nodes (4): exams, problems, tips, vocab

### Community 98 - "quizDeEn"
Cohesion: 0.22
Nodes (7): decide, stress, vocab, skills, varieties, vocab, quizDeEn()

### Community 99 - "u7-post.ts"
Cohesion: 0.40
Nodes (4): mobile, phone, post, vocab

### Community 100 - "u5-wohnung.ts"
Cohesion: 0.25
Nodes (6): ads, furniture, money, verbs, vocab, wohnung

### Community 101 - "ui.test.tsx"
Cohesion: 0.11
Nodes (16): ref_games_shared_gameframe, DailyGoalCard(), Card(), Props, COLORS, Confetti(), FILL, ProgressBar() (+8 more)

### Community 102 - "path.ts"
Cohesion: 0.33
Nodes (6): nextActivity(), pathStates(), playUrl(), queueAfter(), StepState, path

### Community 103 - "c2-2/u6-engagement.ts"
Cohesion: 0.29
Nodes (6): withWhy(), gesellschaft, grammarTags, LESSON, verben, vocab

### Community 104 - "say"
Cohesion: 0.22
Nodes (7): say(), eras, resistance, vocab, balance, tempo, vocab

### Community 105 - "dictation"
Cohesion: 0.13
Nodes (13): dictation(), green, mobility, vocab, eating, shopping, vocab, money (+5 more)

### Community 106 - "sent"
Cohesion: 0.40
Nodes (4): sent(), law, media, vocab

### Community 107 - "u7-familie.ts"
Cohesion: 0.33
Nodes (5): unit21(), family, givers, status, vocab

### Community 108 - "u3-woher.ts"
Cohesion: 0.25
Nodes (6): countries, country(), languages, vocab, woher, words

### Community 109 - "u1-online.ts"
Cohesion: 0.33
Nodes (4): actions, devices, vocab, web

### Community 110 - "u1-kunst.ts"
Cohesion: 0.25
Nodes (7): withLesson(), betrieb, grammarTags, kunst, LESSON, urteil, vocab

### Community 111 - "u3-wetter.ts"
Cohesion: 0.33
Nodes (5): colours, phrases, seasons, vocab, weather

### Community 112 - "typed"
Cohesion: 0.33
Nodes (6): typed(), authorities, countries, forms, nat(), vocab

### Community 113 - "C1.2 – syllabus research, coverage and overlap with A1.1–B1.1"
Cohesion: 0.33
Nodes (5): C1.2 – syllabus research, coverage and overlap with A1.1–B1.1, Grammar, How the units were chosen, Overlap with earlier levels, Sources

### Community 114 - "u9-jobsuche.ts"
Cohesion: 0.33
Nodes (4): ads, jobs, reflexive, vocab

### Community 115 - "u2-literatur.ts"
Cohesion: 0.29
Nodes (6): unitC22(), buch, grammarTags, kritik, LESSON, vocab

### Community 116 - "u4-recht.ts"
Cohesion: 0.29
Nodes (6): vocabPath(), gericht, grammarTags, LESSON, verfahren, vocab

### Community 118 - "FeedbackBanner.tsx"
Cohesion: 0.40
Nodes (4): FeedbackBanner(), FeedbackKind, Props, STYLE

### Community 119 - "u5-staat.ts"
Cohesion: 0.29
Nodes (6): debatte, grammarTags, LESSON, staat, staatPolitik, vocab

### Community 120 - "u7-klima.ts"
Cohesion: 0.29
Nodes (6): grammarTags, handeln, klima, LESSON, vocab, welt

### Community 121 - "q"
Cohesion: 0.40
Nodes (4): q(), style, talk, vocab

### Community 122 - "u8-nuancen.ts"
Cohesion: 0.29
Nodes (6): grammarTags, LESSON, nuancen, redewendungen, stil, vocab

### Community 123 - "tf"
Cohesion: 0.40
Nodes (4): tf(), phrases, service, vocab

### Community 124 - "u5-wuensche.ts"
Cohesion: 0.40
Nodes (4): proverbs, time, vocab, wishes

### Community 125 - "hint"
Cohesion: 0.40
Nodes (4): hint(), reviews, theatre, vocab

### Community 126 - "spell"
Cohesion: 0.40
Nodes (4): bonds, diversity, vocab, spell()

### Community 128 - "u12-klima.ts"
Cohesion: 0.40
Nodes (4): climate, globalisation, nominal, vocab

### Community 129 - "u10-wissenschaft.ts"
Cohesion: 0.33
Nodes (4): alternatives, progress, research, vocab

### Community 130 - "u11-unterwegs.ts"
Cohesion: 0.33
Nodes (5): unitB21(), concession, mobility, travel, vocab

### Community 131 - "u10-team.ts"
Cohesion: 0.50
Nodes (3): conflict, team, vocab

### Community 132 - "u12-vortrag.ts"
Cohesion: 0.50
Nodes (3): discuss, present, vocab

### Community 133 - "u3-recht.ts"
Cohesion: 0.50
Nodes (3): court, rules, vocab

### Community 134 - "memory"
Cohesion: 0.22
Nodes (7): campus, money, vocab, fitness, medicine, vocab, memory()

### Community 135 - "u6-literatur.ts"
Cohesion: 0.50
Nodes (3): books, vocab, writing

### Community 136 - "u9-forschung.ts"
Cohesion: 0.50
Nodes (3): research, tech, vocab

### Community 144 - "b2-1/u1-beziehungen.ts"
Cohesion: 0.40
Nodes (4): bonds, phrases, traits, vocab

### Community 145 - "u3-wohlbefinden.ts"
Cohesion: 0.40
Nodes (4): fitness, reasons, stress, vocab

### Community 146 - "u4-kommunikation.ts"
Cohesion: 0.40
Nodes (4): body, guesses, talk, vocab

### Community 147 - "u5-teamgeist.ts"
Cohesion: 0.40
Nodes (4): office, states, team, vocab

### Community 148 - "u6-lebenswege.ts"
Cohesion: 0.40
Nodes (4): education, timing, turns, vocab

### Community 149 - "u7-gesellschaft.ts"
Cohesion: 0.40
Nodes (4): phrases, politics, social, vocab

### Community 150 - "u8-wohnen.ts"
Cohesion: 0.40
Nodes (4): defects, market, rules, vocab

### Community 151 - "u9-medien.ts"
Cohesion: 0.40
Nodes (4): digital, links, news, vocab

### Community 163 - "u1-finanzen.ts"
Cohesion: 0.50
Nodes (3): debts, payments, vocab

### Community 165 - "u5-stadt.ts"
Cohesion: 0.50
Nodes (3): city, village, vocab

## Knowledge Gaps
- **936 isolated node(s):** `singleQuote`, `semi`, `trailingComma`, `printWidth`, `PLAYED` (+931 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1065 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `c2-1/helpers.ts`, `@testing-library/react`, `package.json`, `PlayPage.tsx`, `sounds.test.tsx`, `Clock.tsx`, `Sentence.tsx`, `u4-zahlen.ts`, `Market.tsx`, `Toast.tsx`, `ActivityCard.tsx`, `Conjugation.tsx`, `ContentProvider.tsx`, `AppLayout.tsx`, `Icon.tsx`, `Tabs.tsx`, `Button.tsx`, `IconButton.tsx`, `ui.test.tsx`, `FeedbackBanner.tsx`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `README (lingoat)` connect `README (lingoat)` to `C1.1 – syllabus research, coverage and overlap with A1.1–B1.2`, `B1.1 coverage and research doc`, `Deployment doc`, `B2.2 – syllabus research, coverage and overlap with A1.1–B2.1`, `C2.1 – syllabus research, coverage and overlap with A1.1–C1.2`, `Architecture doc`, `Code graph (Graphify)`, `C1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `C2.2 – syllabus research, coverage and overlap with A1.1–C2.1`, `B1.2 – syllabus research, coverage and overlap with A1.1–B1.1`, `B2.1 – syllabus research, coverage and overlap with A1.1–B1.2`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `@testing-library/react` connect `@testing-library/react` to `c2-1/helpers.ts`, `Market.tsx`, `u4-zahlen.ts`, `ui.test.tsx`, `Conjugation.tsx`, `package.json`, `ContentProvider.tsx`, `AppLayout.tsx`, `PlayPage.tsx`, `sounds.test.tsx`, `react`, `setup.ts`, `Clock.tsx`, `Sentence.tsx`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **What connects `singleQuote`, `semi`, `trailingComma` to the rest of the system?**
  _936 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `c1-1/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08465608465608465 - nodes in this community are weakly interconnected._
- **Should `c2-1/helpers.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05076679005817028 - nodes in this community are weakly interconnected._
- **Should `UnitContent` be split into smaller, more focused modules?**
  _Cohesion score 0.07422402159244265 - nodes in this community are weakly interconnected._