import { definiteArticle, indefiniteArticle, type Case, type Gender } from '@/lib/german/articles';
import { conjugate, PRONOUNS, type Forms } from '@/lib/german/conjugation';
import type { Block, Section } from './schema';

export const p = (text: string): Block => ({ type: 'p', text });
export const list = (...items: string[]): Block => ({ type: 'list', items });
export const examples = (...items: [de: string, en: string][]): Block => ({
  type: 'examples',
  items: items.map(([de, en]) => ({ de, en })),
});
export const mistake = (title: string, ...items: string[]): Block => ({
  type: 'callout',
  kind: 'mistake',
  title,
  items,
});
export const tip = (title: string, ...items: string[]): Block => ({
  type: 'callout',
  kind: 'tip',
  title,
  items,
});
export const compare = (
  ...items: { title: string; question: string; example: string }[]
): Block => ({
  type: 'compare',
  items,
});
export const table = (
  caption: string,
  headers: string[],
  rows: string[][],
  highlightRow?: number,
): Block => ({ type: 'table', caption, headers, rows, highlightRow });
export const section = (id: string, heading: string, ...blocks: Block[]): Section => ({
  id,
  heading,
  blocks,
});

/** Dative plural nouns end in -n unless the plural already does: Lieder → Liedern, Autos stays. */
export const datPlural = (noun: string, gender: Gender, c: Case): string =>
  c === 'dat' && gender === 'pl' && !/[ns]$/.test(noun) ? `${noun}n` : noun;

const GENDERS: Gender[] = ['m', 'f', 'n', 'pl'];
const CASES: [Case, string][] = [
  ['nom', 'Nominative'],
  ['acc', 'Accusative'],
  ['dat', 'Dative'],
];

/** Case × gender table of the definite articles, generated from `src/lib/german/articles.ts`. */
export function articleTable(caption: string, highlight?: Case, noun?: 'dative-n'): Block {
  const rows = CASES.map(([c, label]) => [
    label,
    ...GENDERS.map((g) => {
      const art = definiteArticle(g, c);
      return c === 'dat' && g === 'pl' && noun ? `${art} + -n` : art;
    }),
  ]);
  return table(
    caption,
    ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
    rows,
    highlight ? CASES.findIndex(([c]) => c === highlight) : undefined,
  );
}

/** Same for the indefinite article (no plural form). */
export function indefiniteTable(caption: string, highlight?: Case): Block {
  const rows = CASES.map(([c, label]) => [
    label,
    ...GENDERS.map((g) => indefiniteArticle(g, c) || '–'),
  ]);
  return table(
    caption,
    ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
    rows,
    highlight ? CASES.findIndex(([c]) => c === highlight) : undefined,
  );
}

/** Persons down, verbs across, forms from `conjugate()`; pass `forms` to override a verb. */
export function conjugationTable(
  caption: string,
  verbs: readonly string[],
  forms: Record<string, Forms> = {},
): Block {
  const all = verbs.map((v) => forms[v] ?? conjugate(v));
  return table(
    caption,
    ['Person', ...verbs],
    PRONOUNS.map((pr) => [pr, ...all.map((f) => f[pr])]),
  );
}
