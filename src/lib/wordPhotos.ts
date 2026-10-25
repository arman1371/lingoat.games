import type { Manifest } from '@/content/images';

/** The part of a vocabulary entry the photo lookup needs (matches `Vocab`). */
export interface PhotoSource {
  id: string;
  de: string;
  en: string;
  article?: 'der' | 'die' | 'das';
}

/**
 * Lower-cased German spelling ("apfel", "der apfel") → ids of the vocabulary entries that spell it.
 * `null` marks a spelling that means different things in different entries (die Bank / die Bank):
 * a wrong photo would teach the wrong word, so those get none.
 */
export type WordPhotoIndex = ReadonlyMap<string, readonly string[] | null>;

const key = (s: string): string => s.trim().toLowerCase();

/** "der Name" for nouns, as authored otherwise (same as `label` in the content builders). */
const withArticle = (v: PhotoSource): string =>
  v.article && !v.de.startsWith(`${v.article} `) ? `${v.article} ${v.de}` : v.de;

/**
 * Games whose items are not vocabulary entries (sort it, market) name a word by its German text.
 * The same word recurs in several units with a photo for each, so one spelling maps to all its ids.
 */
export function buildWordPhotoIndex(vocab: readonly PhotoSource[]): WordPhotoIndex {
  const meaning = new Map<string, string>();
  const index = new Map<string, string[] | null>();
  for (const v of vocab) {
    for (const k of new Set([key(v.de), key(withArticle(v))])) {
      const known = meaning.get(k);
      if (known !== undefined && known !== key(v.en)) {
        index.set(k, null);
        continue;
      }
      meaning.set(k, key(v.en));
      const ids = index.get(k);
      if (ids !== null) index.set(k, [...(ids ?? []), v.id]);
    }
  }
  return index;
}

/**
 * The id whose photo shows a word: the item's own id when it has one, otherwise a vocabulary entry
 * with the same German spelling. `undefined` when the word has no photo.
 */
export function photoIdFor(
  manifest: Manifest | null,
  id: string,
  text?: string,
  index?: WordPhotoIndex,
): string | undefined {
  if (!manifest) return undefined;
  if (manifest[id]) return id;
  if (!text || !index) return undefined;
  return index.get(key(text))?.find((candidate) => manifest[candidate]);
}
