# Lingoat 🐐🎮

[![Quality gate status](https://sonarcloud.io/api/project_badges/measure?project=lingoat.games&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=lingoat.games)
[![CI](https://github.com/arman1371/lingoat.games/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/arman1371/lingoat.games/actions/workflows/ci.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Flingoat.games&label=lingoat.games)](https://lingoat.games)

**Learn a language by playing games.** This repository is the open-source code of
**[lingoat.games](https://lingoat.games)**: short, focused games that follow the CEFR levels unit by
unit, run entirely in the browser and need no account.

The first language is **German** (the app currently ships as _lingoat_). More languages are
planned; the engines and the content model are built so that a course is data, not code, but the app does
not support a second language yet (see [Roadmap](#roadmap)).

## What's in it today

| Level    | Units | Games | Topics (short)                                                               |
| -------- | ----: | ----: | ---------------------------------------------------------------------------- |
| **A1.1** |     8 |   114 | greetings, family, hobbies, time, shopping                                   |
| **A1.2** |    10 |   159 | town, housing, work, health, clothing, travel, appointments                  |
| **A2.1** |    10 |   158 | internet and apps, weather, transport, flat hunting, school, job search      |
| **A2.2** |    12 |   190 | learning and exams, sport, music and art, festivals, bank, emergencies       |
| **B1.1** |    12 |   173 | news stories, health, the world of work, environment, technology, regrets    |
| **B1.2** |    12 |   149 | colleagues, digital life, consumer rights, politics, history, home, theatre  |
| **B2.1** |    12 |   173 | relationships, minimalism, well-being, society, housing, media, climate      |
| **B2.2** |    12 |   173 | relationships, nutrition, university, art, sustainable cities, media and law |
| **C1.1** |    11 |   152 | time and pace, media, language, manners, work, study, economy, society       |
| **C1.2** |    12 |   156 | finance, medicine, law, psychology, literature, research, teamwork, talks    |
| **C2.1** |     9 |   122 | nuance and style, work, economy, digital life, AI, medicine, media, debate   |
| **C2.2** |     9 |   134 | art, literature, heritage, law, politics, civil society, climate, nuance     |

Unit lists are researched from course books, Goethe exam documents and the CEFR rather than invented; see
[docs/a2-2-coverage.md](docs/a2-2-coverage.md), [docs/b1-1-coverage.md](docs/b1-1-coverage.md),
[docs/b1-2-coverage.md](docs/b1-2-coverage.md), [docs/b2-1-coverage.md](docs/b2-1-coverage.md), [docs/b2-2-coverage.md](docs/b2-2-coverage.md),
[docs/c1-1-coverage.md](docs/c1-1-coverage.md), [docs/c1-2-coverage.md](docs/c1-2-coverage.md), [docs/c2-1-coverage.md](docs/c2-1-coverage.md) and [docs/c2-2-coverage.md](docs/c2-2-coverage.md).

### Features

- **13 game engines**: flashcards, quiz, memory, listen & pick, spell it, sentence builder, gap fill,
  sort it (drag & drop), conjugation grid, blitz, dialogue, clock master and market stand.
- **Guided path or free play**: follow a unit step by step, or filter the library by level, unit, skill,
  topic, grammar point, game type, difficulty and length, and play any filtered list as a queue.
- **Grammar hints and mini lessons** after a wrong answer, so a mistake explains itself.
- **Fehlerkiste (review box)**: wrong answers go into a Leitner box and come back for spaced review.
- **Listening and sound**: speech through the browser's text-to-speech voice, short right/wrong sounds
  (can be muted in Settings).
- **Local-first and private**: no back end and no account. Progress and settings stay in your browser
  (`localStorage`).
- **Installable PWA** that works offline, with dark mode and reduced motion.
- **Accessible**: keyboard path for every game, screen-reader labels and live regions, axe checks in CI.

## Tech stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org),
  styled with [Tailwind CSS 4](https://tailwindcss.com)
- React Router, [zustand](https://zustand.docs.pmnd.rs) (persisted state), [zod](https://zod.dev) (content
  validation), [dnd-kit](https://dndkit.com) (drag & drop), [Motion](https://motion.dev) (animation),
  vite-plugin-pwa
- Tests: [Vitest](https://vitest.dev) + Testing Library (unit, component, content) and
  [Playwright](https://playwright.dev) with axe (e2e on desktop and mobile viewports)
- Quality: ESLint (incl. jsx-a11y), Prettier, [SonarQube Cloud](https://sonarcloud.io/summary/new_code?id=lingoat.games)
  quality gate in CI
- Hosting: static build served by [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/)

## Getting started

You need Node.js 22 (see `.nvmrc`).

```bash
git clone https://github.com/arman1371/lingoat.games.git
cd lingoat.games
npm install
npm run dev          # http://localhost:5173
```

| Command                           | What it does                                                             |
| --------------------------------- | ------------------------------------------------------------------------ |
| `npm run dev`                     | Vite dev server                                                          |
| `npm run build`                   | type-check + production build into `dist/`                               |
| `npm run preview`                 | serve the build on :4173                                                 |
| `npm run lint` / `npm run format` | ESLint / Prettier                                                        |
| `npm run typecheck`               | `tsc -b --noEmit`                                                        |
| `npm test`                        | unit + component + content tests (Vitest, jsdom)                         |
| `npm run test:coverage`           | same with coverage (thresholds enforced)                                 |
| `npm run test:e2e`                | Playwright on desktop **and** mobile viewports (builds + previews first) |
| `npm run check`                   | everything above, as in CI                                               |
| `npm run deploy`                  | build and deploy with Wrangler (needs Cloudflare access)                 |

First e2e run on a fresh machine: `npx playwright install chromium`. In sandboxes that ship their own
Chromium, set `PW_CHROMIUM_PATH=/path/to/chrome` instead.

## How it works

The core idea is **content is data, engines are generic**. A game is a validated object such as
`{ gameType, config, tags, difficulty }`, and the engine for that `gameType` can render any config of
its type. Levels are lazy-loaded content packs, so adding a level never touches the engines.

```
src/
  app/          router, layout, theme, guided-path helpers
  pages/        Home, Level, Unit, Library, Play, Review, Settings, 404
  components/   UI kit (Button, Chip, Stars, SpeakButton, UmlautKeyboard …) + ActivityCard
  games/        one folder per engine, shared/ building blocks, registry.ts
  content/      zod schema, canonical tags, levels catalogue, mini lessons, one folder per level
                (a1-1/, a1-2/, a2-1/, a2-2/, b1-1/, b1-2/, c1-1/, c1-2/)
  lib/          seeded rng, answer checking, filters, spaced repetition, scoring, tts, sfx,
                german/ (numbers, time, conjugation, articles, adjective endings …)
  store/        progress + settings stores, storage repository seam
  i18n/         UI strings (English) + t()
  test/         shared test harnesses (content suite, playability solver)
e2e/            Playwright specs (engines, levels, flows, a11y, keyboard, hints, sounds)
docs/           architecture, adding content, coverage research, deployment, code quality
```

A few things worth knowing before you change code:

- Every shuffle and distractor goes through a seeded RNG (`?seed=` in the URL), so bugs are reproducible
  and e2e tests are stable.
- Content tests check every level automatically: schema validity, canonical tags, unique ids, and that
  **every activity can be completed perfectly** through its real engine.
- Storage sits behind `src/store/repository.ts`, so cloud sync can be added later without touching the UI.

More detail: [docs/architecture.md](docs/architecture.md).

## Contributing

Contributions are welcome, from fixing a German sentence to adding a level or a new game engine.

1. Read [docs/architecture.md](docs/architecture.md) and [docs/adding-content.md](docs/adding-content.md).
2. Create a branch, make your change and run `npm run check` (lint, typecheck, unit tests, build, e2e).
3. Open a pull request. CI must be green and the SonarQube Cloud quality gate must pass
   ([docs/code-quality.md](docs/code-quality.md)).

House rules:

- Every feature needs unit tests **and** e2e coverage. A new engine needs a logic test, a component test,
  a playability solver and an e2e entry.
- Content is data validated by zod (`src/content/schema.ts`) and uses only tags from `src/content/tags.ts`.
- No `Math.random()` in games; use `src/lib/rng.ts`.
- UI strings go through `t()` (`src/i18n`); learning content stays in `src/content`.
- Accessibility is a hard requirement: axe must stay green, no nested interactive elements, no
  `autoFocus`, and every game must be playable by keyboard.

**Content review is especially welcome.** The German content has not yet been reviewed by a native speaker,
so corrections to vocabulary, example sentences and grammar hints are very valuable.

### Adding a level

New German levels (B2.2 and up) plug in as content packs: create `src/content/<level>/`, register it in
`src/content/levels.ts` and add the two shared test files. The step-by-step guide, including how to check
overlap with earlier levels, is in [docs/adding-content.md](docs/adding-content.md).

### Adding a language

Not supported yet, and help shaping it is welcome. Today the app is German-only by design: there is no
language dimension in the content schema, routes or level catalogue, text-to-speech uses a German voice,
and grammar helpers live in `src/lib/german/`. Adding a second language means introducing that dimension
first; please open an issue to discuss the approach before writing content.

### Code graph

`graphify-out/` holds a [Graphify](https://github.com/Graphify-Labs/graphify) knowledge graph of the code.
A workflow refreshes it after every push to `main`; see [docs/graphify.md](docs/graphify.md).

## Roadmap

- German **B2.2** and later levels
- Native-speaker review of the German content
- Support for more languages
- Optional progress sync across devices (the storage seam is already there)

## Deployment

The production site [lingoat.games](https://lingoat.games) is a static build served by Cloudflare
Workers (config in `wrangler.jsonc`). Setup and reasoning are in [docs/deployment.md](docs/deployment.md).

## License

No license has been chosen yet, so all rights are reserved by the author for now. Please open an issue if
you would like to use the code outside this project.
