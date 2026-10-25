import type { Activity, Vocab } from './schema';

/** German card text → English meaning, for Sort it cards that are not a vocabulary entry. */
export type SortitGlossary = Record<string, string>;

const norm = (s: string) => s.toLowerCase();

/** Vocabulary entries by "Apfel" and "der Apfel", so a card can borrow its meaning from the word list. */
function vocabMeanings(vocab: readonly Vocab[]): Map<string, string> {
  const m = new Map<string, string>();
  for (const v of vocab) {
    if (v.article) m.set(norm(`${v.article} ${v.de}`), v.en);
    if (!m.has(norm(v.de))) m.set(norm(v.de), v.en);
  }
  return m;
}

/**
 * Give every Sort it card its English meaning (shown with the verdict). Order: a `translation`
 * written on the item, then the level's glossary, then the vocabulary list. Glossary entries that
 * no card uses throw, so typos and stale entries are caught by the content tests.
 */
export function withSortitTranslations(
  activities: Activity[],
  vocab: readonly Vocab[],
  glossary: SortitGlossary,
): Activity[] {
  const meanings = vocabMeanings(vocab);
  const used = new Set<string>();
  const out = activities.map((a) => {
    if (a.gameType !== 'sortit') return a;
    const items = a.config.items.map((item) => {
      if (item.translation) return item;
      const own = glossary[item.text];
      if (own) used.add(item.text);
      const translation = own ?? meanings.get(norm(item.text));
      return translation ? { ...item, translation } : item;
    });
    return { ...a, config: { ...a.config, items } };
  });
  const stale = Object.keys(glossary).filter((k) => !used.has(k));
  if (stale.length) throw new Error(`sort it glossary: no card uses ${stale.join(' | ')}`);
  return out;
}
