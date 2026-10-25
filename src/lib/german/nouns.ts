import type { Gender } from './articles';

export type NounArticle = 'der' | 'die' | 'das';

/** The part of a vocabulary entry the noun lookup needs (matches `Vocab`). */
export interface NounSource {
  de: string;
  article?: NounArticle;
  plural?: string;
}

export interface NounEntry {
  article: NounArticle;
  /** only set when the article says the gender: "die" without a known plural may be a plural-only noun */
  gender?: Exclude<Gender, 'pl'>;
}

/** Bare singular → entry; `null` marks a spelling that two nouns share with different articles. */
export type NounIndex = ReadonlyMap<string, NounEntry | null>;

const GENDER: Record<NounArticle, Exclude<Gender, 'pl'>> = { der: 'm', die: 'f', das: 'n' };

/** "der Name" → "Name": A1.1 spells some nouns with the article already. */
export const bareNoun = (de: string): string => de.replace(/^(?:der|die|das)\s+/, '');

/**
 * Index the nouns of the vocabulary by their bare singular. A spelling with conflicting articles
 * (der See / die See) or one that is also another noun's plural (Kinder) is left out: a wrong
 * article would teach the wrong thing.
 */
export function buildNounIndex(vocab: readonly NounSource[]): NounIndex {
  const index = new Map<string, NounEntry | null>();
  const plurals = new Set<string>();
  for (const v of vocab) {
    if (!v.article) continue;
    if (v.plural) plurals.add(v.plural);
    const noun = bareNoun(v.de);
    const entry: NounEntry = {
      article: v.article,
      ...(v.article !== 'die' || v.plural ? { gender: GENDER[v.article] } : {}),
    };
    const known = index.get(noun);
    index.set(noun, known === undefined || known?.article === entry.article ? entry : null);
  }
  for (const p of plurals) if (!index.has(p)) index.set(p, null);
  return index;
}

const DETERMINER =
  /^(?:der|die|das|den|dem|des|denen|dessen|deren|(?:ein|kein|mein|dein|sein|ihr|unser|euer|eur|dies|jed|welch)(?:e|en|em|er|es)?|zum|zur|im|ins|am|ans|beim|vom|aufs|fürs|ums|übers|vorm|hinterm|überm|unterm)$/;

/** Articles, possessives, dieser/jeder/welcher and the preposition contractions (zum = zu + dem). */
export const isDeterminer = (word: string): boolean => DETERMINER.test(word.toLowerCase());

const RELATIVE = /^(?:der|die|das|den|dem|denen|dessen|deren|welche[mnrs]?)$/;
const CONJUNCTION =
  /^(?:und|oder|aber|sondern|denn|dass|weil|wenn|obwohl|ob|als|wie|während|damit)$/;
const words = (s: string) => s.match(/[\p{L}-]+/gu) ?? [];
const isCapitalised = (w: string) => /^\p{Lu}/u.test(w);
const MAX_GAP_BETWEEN = 3;

const lookup = (w: string | undefined, index: NounIndex): GapNoun | null => {
  const entry = w && isCapitalised(w) ? index.get(w) : null;
  return entry ? { noun: w!, ...entry } : null;
};

/** A relative pronoun opens its clause (", ___ ich" / ", auf ___ wir"); its noun stands before the comma. */
function relativeAntecedent(
  before: string,
  answer: string,
  index: NounIndex,
): GapNoun | null | undefined {
  if (!RELATIVE.test(answer.toLowerCase())) return undefined;
  const parts = (before.split(/[.!?–—;:]/).pop() ?? '').split(',');
  if (parts.length < 2) return undefined;
  const lead = words(parts.pop()!);
  if (lead.length > 1 || lead.some((w) => isCapitalised(w) || CONJUNCTION.test(w)))
    return undefined;
  return lookup(words(parts.pop()!).pop(), index);
}

export interface GapNoun {
  noun: string;
  article: NounArticle;
  gender?: Exclude<Gender, 'pl'>;
}

/**
 * The noun that the gap in `text` belongs to, when the answer depends on its article: the gap is
 * an article-like word, or an adjective ending behind one ("ein ___ Mann"). Looks right of the gap
 * for the first capitalised word of the same clause; null when it is not in the index.
 */
export function findGapNoun(text: string, answer: string, index: NounIndex): GapNoun | null {
  const clean = text.replace(/\([^)]*\)/g, ' ');
  const [before, after] = clean.split('___');
  if (after === undefined) return null;
  const answerWord = words(answer)[0];
  const previous = words(before!.split(/[.,;:!?–—]/).pop() ?? '').pop();
  if (!answerWord) return null;
  if (!isDeterminer(answerWord) && !(previous && isDeterminer(previous))) return null;
  const relative = relativeAntecedent(before!, answerWord, index);
  if (relative !== undefined) return relative;

  const clause = after.split(/[.,;:!?–—]/)[0] ?? '';
  let skipped = 0;
  for (const w of words(clause)) {
    if (isCapitalised(w)) return lookup(w, index);
    if (isDeterminer(w) || ++skipped > MAX_GAP_BETWEEN) return null;
  }
  return null;
}
