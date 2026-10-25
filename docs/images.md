# Word photos

Words that name a concrete thing show a photo next to the German word in flashcards, the "What is this?"
quiz and spelling. **Every word keeps its emoji**: the photo is drawn on top of it and only stays when it loads,
so a word without a photo, a failed download or being offline all look like before (Penpot component
"Word Image": Photo / Emoji fallback / Loading).

## Where the photos come from

[Pixabay](https://pixabay.com/api/docs/), free under the [Pixabay Content License](https://pixabay.com/service/license-summary/)
(free for commercial use, no attribution required). We show attribution anyway on the in-app **Image credits**
page (Profile → Image credits), generated from the manifest, and in the README.

Pixabay's API terms, which the pipeline is built around:

- 100 requests per 60 seconds per key (the script defaults to 50 a minute) and every answer is cached on disk.
- Permanent hotlinking is not allowed: images are downloaded once and served from our own storage.
- "Systematic mass downloads are not allowed" and the API is meant for human requests: the script fetches one
  photo (the 640 px preview) per word, only for concrete nouns, and throttles itself. Run it level by level,
  not in a loop. If Pixabay objects, ask them for permission before running more.

## The pipeline (`scripts/images/`)

```bash
export PIXABAY_API_KEY=…                       # never commit or print it
npm run images:fetch -- --level a1-1           # or --unit a1-1-einkaufen, --limit 50, --dry-run
```

Deterministic, no human or LLM review of single images, resumable (stop it any time and run it again).

1. **Which words** (`isCandidate`): nouns that have an article and an emoji today; abstract endings (-heit,
   -keit, -schaft, -ismus, -ität, -tät) and long phrases are skipped. Verbs, adjectives, greetings and
   numbers keep their emoji.
2. **Query**: the English meaning (`cleanQuery`: first alternative, no "the", no brackets), `image_type=photo`,
   `safesearch=true`, at least 400 × 400 px, ordered by popularity. `overrides.json` can give a word a different
   `query` or `skip` it.
3. **Pick** (`pickHit`): the first hit whose leading tags are exactly the query ("apples" for "apple", but
   not "beer barrel" for "beer"), that is a photo, roughly square-croppable, and has no people, faces,
   logos or brands in its leading tags. Otherwise the word is recorded in `misses.json` (`no-results`,
   `no-subject-match`, `only-people`) and keeps its emoji.
4. **Download and shrink**: the 640 px preview, cropped square around the interesting part (sharp's
   `attention` strategy), 400 × 400 WebP, about 20 KiB.
5. **Record**: `src/content/images/manifest.json` maps the vocabulary id to
   `[Pixabay page, author, author id]`; the file name is always `/img/<id>.webp`.

Files: the manifest and `misses.json` are committed. Images, cached API answers and downloads live in
`.image-cache/` (git-ignored). `npm run dev` and `npm run preview` serve `.image-cache/images/` at `/img/`
so you see the photos locally.

Fixing a wrong photo: add the id to `overrides.json` with a better `query` (or `skip`), delete its
manifest entry, run the script again.

## Storage and delivery

Not in git (about 20 KiB per photo, roughly 40 MB for the catalogue). The photos are objects in the Cloudflare R2
bucket `lingoat-images` (free tier: 10 GB, no egress fees). `worker/index.ts` is the Worker in front of the static
assets: only `/img/*` runs it (`run_worker_first` in `wrangler.jsonc`), it answers from R2 with a one-year
`immutable` cache header and stores the answer in Cloudflare's cache, so the bucket is read about once per photo
and data centre. A photo that is not in the bucket answers 404 and the word keeps its emoji. The service worker keeps
viewed photos for offline play (`word-photos` cache).

Upload (after `images:fetch`, from the machine that holds `.image-cache/`):

```bash
# keys of an R2 API token with "Object Read & Write" on the bucket lingoat-images only
export R2_ACCESS_KEY_ID=… R2_SECRET_ACCESS_KEY=… CLOUDFLARE_ACCOUNT_ID=…
npm run images:upload             # skips what was uploaded before; --dir to upload from another folder
```

The Workers free plan allows 100,000 Worker requests a day; every photo view is one (cache hits included).
At roughly 10 photos per game that is about 10,000 games a day. Beyond that, serve the bucket from a custom domain
instead.

## In the app

- `WordImage` (`src/components/WordImage.tsx`) renders the tile; `useImageManifest` loads the manifest
  lazily (own chunk) the first time a tile renders.
- Photos are decorative (`alt=""`), like the emoji they replace: in "What is this?" an alt text would give the
  answer away.
- Engines that show it: flashcards, quiz, spell (their item ids are vocabulary ids). Sort-it, market and
  memory still show emoji only.
