# Legal pages (Germany)

Not legal advice: a careful baseline. German text is binding, English is a courtesy translation.

- **Operator details are build variables, never source**: `VITE_OPERATOR_NAME`, `VITE_OPERATOR_STREET`,
  `VITE_OPERATOR_CITY`, `VITE_OPERATOR_EMAIL` (see `.env.example`). The real ones live in the Cloudflare project
  (Settings, Build, Variables). Without them the legal pages show a "not configured" notice, so a clone never
  shows anyone else's name or address. Tests and CI use a fake operator (`vite.config.ts`, `playwright.config.ts`,
  `ci.yml`). Never commit real details. **A fork must set its own and review the texts for its own setup** (hosting,
  report flow, any tracking it adds); the texts describe the original deployment on Cloudflare.
- Texts: `src/legal/legal.ts`. Pages: `src/pages/LegalPage.tsx` at `/impressum` and `/datenschutz` (also under `/fr`).
- Links: footer on every screen except `/play` (`LegalFooter` in `src/app/AppLayout.tsx`), two rows on the profile,
  and a link in the "Report a problem" dialog. The game screen stays free of legal links.
- Search engines: only the two legal pages are `noindex` (a `<meta name="robots">` rendered by the page, plus
  `X-Robots-Tag` in `public/_headers`). Never add them to `robots.txt`: a blocked crawler cannot see the noindex.
- No cookie banner: only strictly necessary localStorage, no analytics, no external fonts (self-hosted).

Update the texts **before** adding any of: analytics or error tracking, ads, donations or payments, accounts or
newsletters, embedded third-party content (videos, maps, fonts from a CDN), or new data sent to a server.
Also keep the operator email monitored (the Impressum requires fast contact).
