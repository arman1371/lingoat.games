# Lingoat – notes for Claude

Vite + React 19 + TypeScript + Tailwind 4 SPA with games for learning German (A1.1, A1.2, A2.1, A2.2, B1.1, B1.2, B2.1 and B2.2 done; later levels are
content packs). Read `docs/architecture.md` and `docs/adding-content.md` before changing structure.

## Rules of this repo

- Every feature needs unit tests **and** e2e coverage (Vitest + Playwright). New game engine ⇒ logic test,
  component test, playability solver, e2e entry.
- Content is data validated by zod (`src/content/schema.ts`); only tags from `src/content/tags.ts`.
- Randomness only through `src/lib/rng.ts` (seeded) – never `Math.random()` inside a game.
- UI strings go through `t()` (`src/i18n`); German learning content stays in `src/content`.
- Accessibility is a hard requirement: axe must stay green (`e2e/a11y.spec.ts`), no nested interactive
  elements, no `autoFocus`, keyboard path for every game.
- `src/content/**` must not import React or browser APIs (e2e imports it in Node).
- Word photos: only through `scripts/images` (Pixabay, see `docs/images.md`); never commit image files or the
  `PIXABAY_API_KEY`; every word keeps its emoji as fallback (`WordImage`).

## Commands

`npm run check` = lint + typecheck + unit tests + build + e2e. In the sandbox set
`PW_CHROMIUM_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome` for Playwright.
Never run `pkill -f "vite preview"` from a shell whose command line contains that text.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
