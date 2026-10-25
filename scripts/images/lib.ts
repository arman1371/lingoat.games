/**
 * Pure helpers of the image pipeline (no network, no file system): which vocabulary gets a photo,
 * which Pixabay query to send, which hit to take. Tested in `lib.test.ts`.
 */

import { type Manifest, type ManifestEntry } from '../../src/content/images';

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

/**
 * Per-word overrides kept in `scripts/images/overrides.json`: a better query, the Pixabay id of the exact
 * photo to use (when no query finds the right one), or `skip` to keep the emoji.
 */
export type Overrides = Record<string, { query?: string; photo?: number; skip?: true }>;

/** German abstract-noun endings: a photo of "Freiheit" says nothing, so the emoji stays. */
const ABSTRACT_SUFFIX = /(heit|keit|schaft|ismus|ität|tät)$/i;
/** Tags that mean the photo is about a person, a brand or a graphic, not about the thing itself. */
const BLOCKED_TAGS =
  /\b(woman|women|man|men|girl|boy|people|person|persons|child|children|kid|kids|baby|couple|family|portrait|face|faces|selfie|model|logo|logos|brand|brands|icon|icons|symbol|sign|signs|text|nude|naked|sexy|bikini)\b/i;

/** Calendar and clock words: Pixabay has no photo of "Tuesday", only random pictures that carry the tag. */
const NOT_PHOTOGRAPHABLE =
  /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|march|april|may|june|july|august|september|october|november|december|morning|noon|afternoon|evening|night|midnight|today|tomorrow|yesterday|second|minute|hour|week|weekend|month|year|day|time)$/;

/** English meanings that find the wrong thing: "turkey" is the bird. */
const QUERY_BY_GERMAN: Record<string, string> = { Türkei: 'istanbul' };

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
  const query = cleanQuery(v.en);
  return query !== null && !NOT_PHOTOGRAPHABLE.test(query);
}

/** The German word itself ("Brötchen"): second try for words whose English meaning finds nothing. */
export function germanQuery(v: VocabLike): string | null {
  const de = v.de
    .toLowerCase()
    .replace(/^(der|die|das)\s+/, '')
    .replace(/\([^)]*\)/g, ' ')
    .split(/\s*[,/;]\s*/)[0]!
    .trim();
  return de && de.split(/\s+/).length <= 2 ? de : null;
}

export function queryFor(v: VocabLike, overrides: Overrides = {}): string | null {
  const o = overrides[v.id];
  if (o?.skip) return null;
  return o?.query ?? QUERY_BY_GERMAN[v.de] ?? cleanQuery(v.en);
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
const LEADING_TAGS = 5;

/** Pixabay sorts tags by relevance, so the first few say what the photo shows. */
const BLOCK_CHECKED_TAGS = 5;

export function isBlocked(hit: PixabayHit): boolean {
  return BLOCKED_TAGS.test(hit.tags.split(',').slice(0, BLOCK_CHECKED_TAGS).join(','));
}

/** The crop follows the interesting part, so only extreme panoramas and strips are refused. */
export function cropsWell(hit: PixabayHit): boolean {
  const ratio = hit.imageWidth / hit.imageHeight;
  return ratio >= 0.5 && ratio <= 2;
}

export type Pick =
  { hit: PixabayHit } | { reason: 'no-results' | 'no-subject-match' | 'only-people' };

/**
 * How well the leading tags name the query, best first: 1 a tag is the query ("apples"), 2 a tag is a
 * compound ending in the query ("cherry tomato", the head noun is ours), 3 a tag contains every query word
 * ("beer barrel": the subject may be something else, but the photo is on topic). 0 = not named.
 */
export function subjectTier(hit: PixabayHit, query: string): 0 | 1 | 2 | 3 {
  const tags = hit.tags.split(',').slice(0, LEADING_TAGS);
  if (tags.some((t) => tagNames(t, query))) return 1;
  const head = words(query).at(-1)!;
  if (tags.some((t) => words(t).at(-1) === head && tagContains(t, query))) return 2;
  return tags.some((t) => tagContains(t, query)) ? 3 : 0;
}

const tagContains = (tag: string, query: string): boolean => {
  const have = new Set(words(tag));
  return words(query).every((w) => have.has(w));
};

/** Best tier first, then Pixabay's order (popularity) among hits that are safe to show. */
export function pickHit(hits: readonly PixabayHit[], query: string): Pick {
  if (hits.length === 0) return { reason: 'no-results' };
  const named = hits
    .filter((h) => h.type === 'photo')
    .map((hit, order) => ({ hit, order, tier: subjectTier(hit, query) }))
    .filter((c) => c.tier > 0);
  if (named.length === 0) return { reason: 'no-subject-match' };
  const safe = named
    .filter((c) => !isBlocked(c.hit) && cropsWell(c.hit))
    .sort((a, b) => a.tier - b.tier || a.order - b.order);
  const best = safe[0];
  return best ? { hit: best.hit } : { reason: 'only-people' };
}

// ---- manifest ---------------------------------------------------------------------------------

/** Page URL without host; German searches answer with `/de/photos/…`, the plain path works for everyone. */
export const pagePath = (pageURL: string): string =>
  pageURL.replace(/^https:\/\/pixabay\.com\/(?:[a-z]{2}\/)?photos\//, '');

export function toEntry(hit: PixabayHit): ManifestEntry {
  return [pagePath(hit.pageURL), hit.user, hit.user_id];
}

/** Stable key order so reruns do not churn the diff. */
export function sortManifest(m: Manifest): Manifest {
  return Object.fromEntries(Object.entries(m).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
}
