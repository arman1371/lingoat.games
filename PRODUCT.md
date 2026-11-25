# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Adult self-learners of a foreign language (German and French today) who follow the CEFR levels A1 to C2. They open Lingoat mostly on a phone, in short sessions, often next to a course book or while preparing for an exam. They have no account and do not want one. The UI is in English.

## Product Purpose

Lingoat teaches a language through short, focused games that follow the CEFR unit by unit. Success is a learner who comes back to play one more round, gets the answer or the explanation, and moves up a level without signing up for anything.

## Positioning

- CEFR-true content: unit lists are researched from course books and the CEFR, not invented, and cover A1.1 to C2.2.
- Game variety: 13 engines (flashcards, quiz, memory, listen and pick, spell it, sentence builder, gap fill, sort it, conjugation grid, blitz, dialogue, clock master, market stand) instead of one exercise format.
- No account, private: local-first, progress in the browser, installable and offline as a PWA.
- Mistakes explain themselves: grammar hints and mini lessons after a wrong answer, plus a Leitner mistake box for spaced review.

## Operating Context

- Guided path (follow a unit step by step) or free play (filter the library by level, unit, skill, topic, grammar point, game type, difficulty, length and play the list as a queue).
- Speech uses the browser's text-to-speech voice; short right/wrong sounds can be muted.
- Phones are the primary screen; desktop is secondary.
- Open-source repo, hosted as a static build on Cloudflare Workers at lingoat.games.

## Capabilities and Constraints

- Languages: German (A1.1 to C2.2) and French (A1.1 to C2.2) content packs ship today. README still says German-only; it is stale.
- Course content is data validated by zod; engines are generic. A new level or language is a content pack, not new engine code.
- All randomness is seeded (`?seed=`) so bugs and e2e runs are reproducible.
- UI strings go through `t()` (English only); the language-learning content stays in `src/content`.
- Word photos come only from Pixabay via `scripts/images`; every photo needs a credit; every word keeps its emoji as fallback.
- Native-speaker review of the German content is still pending (open roadmap item). Optional cross-device progress sync is planned, not built.
- Licence of the code is undecided (all rights reserved for now).

## Brand Commitments

- Name: Lingoat; the mascot is Goaty.
- Existing design system in `DESIGN/` (teal brand, chunky tactile buttons, Fredoka and Plus Jakarta Sans) is binding per the repo's CLAUDE.md; `DESIGN/USAGE.md` and `DESIGN/DESIGN.md` are read before any UI work.

## Evidence on Hand

- Real content: about 1,850 German games (README table) plus the French packs under `src/content/fr-*`, with coverage research in `docs/*-coverage.md`.
- Image credits manifest at `src/content/images/manifest.json`, legal pages (Impressum, privacy) in `src/legal/legal.ts`.
- No testimonials, user numbers or learning-outcome studies exist in the repo; do not invent any.

## Product Principles

1. Play first: a learner should be inside a game within a couple of taps, with no signup or setup in the way.
2. Content is truthful: units follow real course and exam structures; accuracy of the language beats volume.
3. A mistake is a lesson: every wrong answer should explain itself and feed spaced review.
4. Private by default: no account, no tracking of learners, local storage first.
5. Everyone can play: every game has a keyboard path and passes accessibility checks.

## Accessibility & Inclusion

Accessibility is a hard requirement: axe checks stay green in CI, every game is keyboard-playable, no nested interactive elements, screen-reader labels and live regions, reduced-motion support, dark mode, and contrast at 4.5:1 for text on fills. Touch targets are at least 44px (48px in games).
