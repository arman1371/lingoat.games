# Deployment

## Recommendation: Cloudflare Pages

The app is a static single-page app (Vite build in `dist/`), so any static host works. For _personal use
on a free plan, with room to grow_, Cloudflare Pages is the best fit:

|                       | Cloudflare Pages                                                                           | Vercel (Hobby)                            | Netlify (Free)              | Render (Static)                 |
| --------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------- | --------------------------- | ------------------------------- |
| Static hosting        | ✅ unlimited bandwidth                                                                     | ✅ 100 GB/mo                              | ✅ 100 GB/mo, 300 build min | ✅ 100 GB/mo                    |
| Preview per branch/PR | ✅                                                                                         | ✅                                        | ✅                          | ✅                              |
| Terms                 | personal & commercial                                                                      | **non-commercial only**                   | personal & commercial       | personal & commercial           |
| Free back-end later   | ✅ Pages Functions/Workers, **D1** (SQL), **KV**, **R2** (audio files) in the same account | serverless functions, KV/Postgres add-ons | functions, blobs            | separate paid/sleeping services |
| Cold starts           | none for static                                                                            | none                                      | none                        | free web services sleep         |

Why it matters for the roadmap: when progress should sync across devices, or pre-generated audio is
wanted, Cloudflare offers D1/KV/R2 on the free tier without changing host or domain. The app already
isolates storage behind `src/store/repository.ts`, so a D1-backed implementation can replace
`localStorage` without touching the stores or UI.

## Steps (Workers Builds – the current "Create" flow)

1. Push the repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Import a repository**, select the repo.
3. Project name: `lingoat-games` (must match `name` in `wrangler.jsonc`).
4. Build settings
   - Build command: `npm run build`
   - **Deploy command: `npx wrangler deploy`**
   - Root directory: `/`
   - No `NODE_VERSION` variable needed: Cloudflare reads the Node version from `.nvmrc` (`22`)
5. Save and deploy. The production branch deploys to your `*.workers.dev` URL; other branches get preview URLs.
   Non-production branches run `npx wrangler preview`, which requires the (empty) `"previews": {}` block in `wrangler.jsonc`.

`wrangler.jsonc` points Wrangler at `dist/` and sets `not_found_handling: "single-page-application"`, so deep links
(`/levels/a1-1/units/a1-1-hallo`) serve `index.html`. Manual deploy from your machine: `npm run deploy`.

### Alternative: classic Cloudflare Pages

Pages has no deploy command: build `npm run build`, output `dist`; Node comes from `.nvmrc`. Do **not** add a
`/* /index.html 200` rule to `_redirects` there (flagged as an infinite loop; Pages falls back to `index.html` itself).

Notes

- `public/_headers` sets long-lived caching for hashed assets and `no-cache` for `index.html` and the
  service worker, so new releases reach installed PWAs quickly.
- `wrangler.jsonc` also has a `main` Worker (`worker/`) that serves `/img/*` from the R2 bucket `lingoat-images`; the
  bucket must exist before deploying (`npx wrangler r2 bucket create lingoat-images`). See [images.md](images.md).
- The service worker (vite-plugin-pwa, `autoUpdate`) precaches the shell and every level chunk for offline play.

## Other hosts

- **Netlify**: build `npm run build`, publish `dist`, and add `public/_redirects` with `/*  /index.html  200`.
- **Vercel**: framework preset Vite; add a `vercel.json` with `{"rewrites":[{"source":"/(.*)","destination":"/index.html"}]}`.
- **Render**: Static Site, build `npm ci && npm run build`, publish `dist`, rewrite rule `/*` → `/index.html`.

## CI

`.github/workflows/ci.yml` runs on every push and pull request. Independent jobs run in parallel: lint and
typecheck, unit tests with coverage thresholds, one production build, and the Playwright suite (desktop +
mobile) split into 4 shards that serve the shared build. The `verify` job is green only when all of them
are, so branch protection needs just `verify` (and `SonarCloud`). SonarCloud reuses the coverage report of
the unit job. Superseded pull request runs are cancelled. Cloudflare builds only when you push; keep CI as the
gate by enabling branch protection on the default branch.
