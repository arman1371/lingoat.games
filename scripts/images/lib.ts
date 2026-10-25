/**
 * Pure helpers of the image pipeline (no network, no file system): which vocabulary gets a photo,
 * which Pixabay query to send, which hit to take. Tested in `lib.test.ts`.
 */

import { PIXABAY_PHOTO_PREFIX, type Manifest, type ManifestEntry } from '../../src/content/images';

export interface VocabLike {
  id: string;
  de: string;
  en: string;
  article?: string;
  emoji?: string;
}

/** Subset of a Pixabay image search hit that the pipeline reads. */
export interface PixabayHit {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  webformatURL: string;
  imageWidth: number;
  imageHeight: number;
  user: string;
  user_id: number;
}

/** Per-word overrides kept in `scripts/images/overrides.json`: a better query, or `skip` to keep the emoji. */
export type Overrides = Record<string, { query?: string; skip?: true }>;

/** German abstract-noun endings: a photo of "Freiheit" says nothing, so the emoji stays. */
const ABSTRACT_SUFFIX = /(heit|keit|schaft|ismus|ität|tät)$/i;
/** Tags that mean the photo is about a person, a brand or a graphic, not about the thing itself. */
const BLOCKED_TAGS =
  /\b(woman|women|man|men|girl|boy|people|person|persons|child|children|kid|kids|baby|couple|family|portrait|face|faces|selfie|model|logo|logos|brand|brands|icon|icons|symbol|sign|signs|text|nude|naked|sexy|bikini)\b/i;

const LEADING = /^(the|a|an)\s+/;

/** English meaning → search phrase, or null when it is not a single concrete thing. */
export function cleanQuery(en: string): string | null {
  const first = en
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .split(/\s*(?:\/|,|;|\bor\b)\s*/)[0]!
    .replace(LEADING, '')
    .replace(/[^a-z' -]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!first) return null;
  return first.split(' ').length > 3 ? null : first;
}

/** Concrete noun with an emoji today: the only words that get a photo. */
export function isCandidate(v: VocabLike): boolean {
  if (!v.article || !v.emoji) return false;
  if (ABSTRACT_SUFFIX.test(v.de)) return false;
  if (v.de.trim().split(/\s+/).length > 3) return false;
  return cleanQuery(v.en) !== null;
}

export function queryFor(v: VocabLike, overrides: Overrides = {}): string | null {
  const o = overrides[v.id];
  if (o?.skip) return null;
  return o?.query ?? cleanQuery(v.en);
}

const stem = (w: string): string =>
  w
    .replace(/ies$/, 'y')
    .replace(/(ches|shes|sses|xes)$/, (m) => m.slice(0, -2))
    .replace(/s$/, '');

const words = (s: string): string[] =>
  s
    .toLowerCase()
    .split(/[^a-z']+/)
    .filter(Boolean)
    .map(stem);

/**
 * A tag names the query when it is the query: "apples" names "apple", but "beer barrel" does not name
 * "beer" and "cherry tomato" does not name "tomato" (those photos show the barrel and a seedling).
 */
export function tagNames(tag: string, query: string): boolean {
  const have = words(tag);
  const want = words(query);
  return have.length === want.length && have.every((w, i) => w === want[i]);
}

/** How many of the leading tags (Pixabay lists the main subject first) may name the query. */
const LEADING_TAGS = 3;

/** Pixabay sorts tags by relevance, so the first few say what the photo shows. */
const BLOCK_CHECKED_TAGS = 8;

export function isBlocked(hit: PixabayHit): boolean {
  return BLOCKED_TAGS.test(hit.tags.split(',').slice(0, BLOCK_CHECKED_TAGS).join(','));
}

/** Squares crop well from about 3:4 to 4:3 sources; extreme panoramas lose the subject. */
export function cropsWell(hit: PixabayHit): boolean {
  const ratio = hit.imageWidth / hit.imageHeight;
  return ratio >= 0.7 && ratio <= 1.5;
}

export type Pick =
  { hit: PixabayHit } | { reason: 'no-results' | 'no-subject-match' | 'only-people' };

/** First hit (Pixabay order = popularity) whose leading tags name the query and that is safe to show. */
export function pickHit(hits: readonly PixabayHit[], query: string): Pick {
  if (hits.length === 0) return { reason: 'no-results' };
  const named = hits.filter(
    (h) =>
      h.type === 'photo' &&
      h.tags
        .split(',')
        .slice(0, LEADING_TAGS)
        .some((t) => tagNames(t, query)),
  );
  if (named.length === 0) return { reason: 'no-subject-match' };
  const safe = named.filter((h) => !isBlocked(h) && cropsWell(h));
  const hit = safe[0];
  return hit ? { hit } : { reason: 'only-people' };
}

// ---- manifest ---------------------------------------------------------------------------------

export function toEntry(hit: PixabayHit): ManifestEntry {
  return [hit.pageURL.replace(PIXABAY_PHOTO_PREFIX, ''), hit.user, hit.user_id];
}

/** Stable key order so reruns do not churn the diff. */
export function sortManifest(m: Manifest): Manifest {
  return Object.fromEntries(Object.entries(m).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
}
