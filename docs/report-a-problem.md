# Report a problem

A flag button in the play header lets a player report a wrong image, a wrong translation, a German mistake,
bad audio, a game bug or anything else. The report becomes a GitHub issue automatically. The player needs no
GitHub account, is never sent to GitHub, and sees a thank-you in the app.

Design: Penpot file "LingoatGames", page **Screens**, bottom row (`Game / Report 1` to `Report / 6 Error`).

## What the player sees

1. The flag button (`ReportButton`, `src/components/ReportButton.tsx`) appears in the play header once a game has
   started. It stays hidden when no Turnstile site key is configured.
2. The dialog has a **Problem type** select (required), an optional **note** of up to 200 characters and a
   reminder not to write personal details. **Send report** stays disabled until a type is chosen and the
   bot check has produced a token.
3. Success shows "Thank you!". A busy server or a failure shows a message and the form stays filled, so the
   player can send it again.

## What the issue contains

| Type (select)                | Id            | Title prefix    | Labels                              |
| ---------------------------- | ------------- | --------------- | ----------------------------------- |
| Wrong image                  | `image`       | `[Image]`       | `user-report`, `report:image`       |
| Wrong or unclear translation | `translation` | `[Translation]` | `user-report`, `report:translation` |
| German mistake               | `german`      | `[German]`      | `user-report`, `report:german`      |
| Audio or pronunciation       | `audio`       | `[Audio]`       | `user-report`, `report:audio`       |
| Game bug                     | `bug`         | `[Bug]`         | `user-report`, `report:bug`         |
| Something else               | `other`       | `[Other]`       | `user-report`, `report:other`       |

Title: `[Image] a1-1-food-flashcards · a1-1-apfel` (activity id, then the id of the word or question on screen
when the game reports one). The body lists type, level, unit, activity (with a link that opens it), game, item, app
version and the note. The ids come from the page itself: `PlayPage` knows the activity, and every engine that uses
`useSequence` tells it the item on screen through `useReportItem`. Blitz and memory report the activity only.

Labels that do not exist yet are created by GitHub on the first issue. If GitHub refuses a label, the Worker
retries without labels so the report is not lost; the title prefix still says what it is.

No personal data is collected: no account, no IP address (it is only the rate limiter's key and Turnstile's
`remoteip`), no user agent. The only free text is the optional note, which is written into a code fence.

## How it is protected

`POST /api/report` runs in the Worker (`worker/report.ts`). Each request must pass these gates in order, and the
cheap ones come first:

1. **Same-origin POST with a small JSON body.** A missing or foreign `Origin` is refused, and bodies over 4 KB are
   cut off while they are read.
2. **Per-visitor rate limit** (Workers Rate Limiting binding `REPORT_LIMITER`): 3 reports per minute per visitor
   and Cloudflare location. It is approximate by design; it only has to stop floods cheaply.
3. **Validation** (`src/lib/report.ts`, shared with the app): the type must be on the list, ids must be
   lower-case kebab-case, the version a plain version string, the note at most 200 characters with control
   characters and line breaks removed. Unknown fields are dropped.
4. **Cloudflare Turnstile** (`appearance: interaction-only`, so players normally see nothing). The Worker
   verifies the token with `siteverify` before any GitHub call.
5. **The guard** (`worker/guard.ts`, one Durable Object): the same problem on the same item (type + activity +
   item) opens one issue; repeats only add a "+1" comment, at most once a day per problem and 100 a day in total. At
   most **30 new issues a day** are opened for the whole app, so even a distributed attack cannot flood the
   repository. A failed GitHub call gives the slot back. Records older than 30 days are dropped.

The Durable Object needs nothing created by hand: `wrangler.jsonc` declares the class and its migration, and
SQLite-backed Durable Objects are available on the free plan. Change the numbers in `DEFAULT_LIMITS`
(`worker/guard.ts`) or in the `ratelimits` entry of `wrangler.jsonc`.

Cloudflare's WAF rate-limiting rules are a further optional layer on a zone with a custom domain; they do not
apply to `workers.dev` addresses, which is why the limiter lives in the Worker.

## Setup (once, in the Cloudflare and GitHub dashboards)

Never commit these and never paste them into chats or issues.

1. **GitHub token.** github.com/settings/personal-access-tokens/new: resource owner `arman1371`, repository
   access "Only select repositories" with `lingoat.games`, repository permission **Issues: Read and write** (no
   other permission), and an expiry you will remember. Cloudflare dashboard, Workers & Pages,
   `lingoat-games`, Settings, Variables and Secrets: add a **Secret** `GITHUB_TOKEN`.
2. **Turnstile.** Cloudflare dashboard, Turnstile, Add widget: mode **Managed**, hostnames of the production site.
   Add the widget's **secret key** as the Worker secret `TURNSTILE_SECRET`. Add its **site key** (public) as
   a build variable `VITE_TURNSTILE_SITE_KEY` under Settings, Build, Variables, then redeploy: the button
   appears only in builds that have it.
3. `GITHUB_REPO` (`owner/name`, default `arman1371/lingoat.games`) is a plain variable in `wrangler.jsonc`.

Until the secrets and the site key exist, the button is hidden, and `/api/report` answers 503.
Preview deployments do not inherit bindings or variables (same as the image bucket), so reports only work in
production.

CI builds with Cloudflare's always-passing test key `1x00000000000000000000AA`; the e2e tests answer
`/api/report` and the Turnstile script themselves (`e2e/report.spec.ts`).

## Tests

- `src/lib/report.test.ts`: validation and cleaning.
- `worker/report.test.ts`, `worker/guard.test.ts`: every gate, labels fallback, duplicates, caps, failures.
- `src/components/ReportButton.test.tsx`, `src/pages/ReportInPlay.test.tsx`: the dialog and the context it sends.
- `e2e/report.spec.ts`: the flow on desktop and mobile, keyboard only, errors, axe on the open dialog.
