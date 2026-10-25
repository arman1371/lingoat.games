import type { Activity, Vocab } from './schema';
import { withSortitTranslations } from './translations';
import { ActivitySchema } from './schema';

const sortit = (): Activity =>
  ActivitySchema.parse({
    id: 'act-1',
    unitId: 'unit-1',
    gameType: 'sortit',
    title: 'Sort',
    description: 'Sort things',
    tags: ['vocabulary', 'family'],
    difficulty: 1,
    estMinutes: 2,
    config: {
      buckets: [
        { id: 'a', label: 'A' },
        { id: 'b', label: 'B' },
      ],
      items: [
        { id: 'i1', text: 'der Apfel', bucket: 'a' },
        { id: 'i2', text: 'Ich lese ein Buch.', bucket: 'b' },
        { id: 'i3', text: 'Brot', bucket: 'a' },
        { id: 'i4', text: 'Milch', bucket: 'b', translation: 'dairy' },
        { id: 'i5', text: 'Unbekannt', bucket: 'a' },
      ],
    },
  });

const vocab: Vocab[] = [
  { id: 'v1', de: 'Apfel', en: 'apple', article: 'der', field: 'food' },
  { id: 'v2', de: 'Brot', en: 'bread', article: 'das', field: 'food' },
  { id: 'v3', de: 'Milch', en: 'milk', article: 'die', field: 'food' },
];

const meaning = (a: Activity, id: string) =>
  a.gameType === 'sortit' ? a.config.items.find((i) => i.id === id)?.translation : undefined;

describe('withSortitTranslations', () => {
  const [a] = withSortitTranslations([sortit()], vocab, {
    'Ich lese ein Buch.': 'I am reading a book.',
  });
  it('takes the meaning from the glossary, the vocabulary (with or without article) or the item', () => {
    expect(meaning(a!, 'i1')).toBe('apple');
    expect(meaning(a!, 'i2')).toBe('I am reading a book.');
    expect(meaning(a!, 'i3')).toBe('bread');
    expect(meaning(a!, 'i4')).toBe('dairy');
  });
  it('leaves cards without any source untranslated', () => {
    expect(meaning(a!, 'i5')).toBeUndefined();
  });
  it('keeps other game types as they are', () => {
    const quiz = { ...sortit(), gameType: 'quiz' } as unknown as Activity;
    expect(withSortitTranslations([quiz], vocab, {})[0]).toBe(quiz);
  });
  it('throws for a glossary entry that no card uses', () => {
    expect(() => withSortitTranslations([sortit()], vocab, { Nope: 'x' })).toThrow(
      /no card uses Nope/,
    );
  });
});
