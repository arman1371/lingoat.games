import {
  bareNoun,
  buildNounIndex,
  drillsCase,
  findGapNoun,
  isDeterminer,
  sentenceNouns,
} from './nouns';

const index = buildNounIndex([
  { de: 'Käse', article: 'der' },
  { de: 'die Mutter', article: 'die', plural: 'Mütter' },
  { de: 'Kind', article: 'das', plural: 'Kinder' },
  { de: 'Eltern', article: 'die' },
  { de: 'Milch', article: 'die' },
  { de: 'See', article: 'der' },
  { de: 'See', article: 'die' },
  { de: 'Lehrer', article: 'der', plural: 'Lehrer' },
  { de: 'Mann', article: 'der', plural: 'Männer' },
  { de: 'Frau', article: 'die', plural: 'Frauen' },
  { de: 'Haus', article: 'das', plural: 'Häuser' },
  { de: 'danke' },
]);

describe('bareNoun', () => {
  it('drops an article that is part of the entry', () => {
    expect(bareNoun('der Name')).toBe('Name');
    expect(bareNoun('Name')).toBe('Name');
  });
});

describe('buildNounIndex', () => {
  it('indexes nouns by their bare singular and skips words without an article', () => {
    expect(index.get('Käse')).toEqual({ article: 'der', gender: 'm' });
    expect(index.get('Mutter')).toEqual({ article: 'die', gender: 'f' });
    expect(index.has('danke')).toBe(false);
  });

  it('gives no gender for "die" without a plural: it may be a plural-only noun', () => {
    expect(index.get('Eltern')).toEqual({ article: 'die' });
  });

  it('leaves out conflicting articles and plurals of other nouns', () => {
    expect(index.get('See')).toBeNull();
    expect(index.get('Kinder')).toBeNull();
    expect(index.get('Lehrer')).toEqual({ article: 'der', gender: 'm' });
  });
});

describe('isDeterminer', () => {
  it.each(['der', 'Den', 'einem', 'keine', 'Meine', 'unserem', 'Ihre', 'zum', 'ins', 'welches'])(
    '%s is one',
    (w) => expect(isDeterminer(w)).toBe(true),
  );
  it.each(['Haus', 'ich', 'heiße', 'groß'])('%s is not', (w) =>
    expect(isDeterminer(w)).toBe(false),
  );
});

describe('findGapNoun', () => {
  it('finds the noun after an article gap', () => {
    expect(findGapNoun('Ich nehme ___ Käse.', 'den', index)).toEqual({
      noun: 'Käse',
      article: 'der',
      gender: 'm',
    });
  });

  it('works for contractions, possessives and capitalised answers', () => {
    expect(findGapNoun('Wir gehen ___ Haus.', 'zum', index)?.noun).toBe('Haus');
    expect(findGapNoun('Das ist ___ Mutter. (my)', 'meine', index)?.article).toBe('die');
    expect(findGapNoun('___ Kind schläft.', 'Das', index)?.article).toBe('das');
  });

  it('ignores the hint in brackets', () => {
    expect(findGapNoun('Ich nehme ___ Käse. (der Käse)', 'den', index)?.noun).toBe('Käse');
  });

  it('finds the noun behind an adjective ending gap', () => {
    expect(findGapNoun('Ich sehe den ___ Mann. (jung)', 'jungen', index)?.noun).toBe('Mann');
    expect(findGapNoun('Das ist ein ___ Haus. (groß)', 'großes', index)?.article).toBe('das');
  });

  it('skips adjectives between the article and the noun', () => {
    expect(findGapNoun('Ich sehe ___ junge Frau.', 'die', index)?.noun).toBe('Frau');
  });

  it('finds the antecedent of a relative pronoun', () => {
    expect(findGapNoun('Der Mann, ___ ich kenne, ist nett.', 'den', index)?.noun).toBe('Mann');
    expect(findGapNoun('Das ist die Frau, von ___ ich erzählt habe.', 'der', index)?.noun).toBe(
      'Frau',
    );
    expect(findGapNoun('Das Kind, ___ im Haus wohnt, lacht.', 'das', index)?.noun).toBe('Kind');
  });

  it('prefers the noun after the gap when a conjunction opens the clause', () => {
    expect(findGapNoun('Ich weiß, dass ___ Mann kommt.', 'der', index)?.noun).toBe('Mann');
  });

  it('shows nothing when the answer does not depend on an article', () => {
    expect(findGapNoun('Ich ___ Käse.', 'mag', index)).toBeNull();
    expect(findGapNoun('Guten ___!', 'Morgen', index)).toBeNull();
  });

  it('shows nothing when the noun is unknown, ambiguous or plural', () => {
    expect(findGapNoun('Ich nehme ___ Tisch.', 'den', index)).toBeNull();
    expect(findGapNoun('Wir fahren an ___ See.', 'den', index)).toBeNull();
    expect(findGapNoun('Wir haben ___ Kinder.', 'zwei', index)).toBeNull();
    expect(findGapNoun('Ich sehe ___ Kinder.', 'die', index)).toBeNull();
  });

  it('does not take a noun from another article, clause or sentence', () => {
    expect(findGapNoun('Ich schreibe ___ einen Käse.', 'ihr', index)).toBeNull();
    expect(findGapNoun('Das ist ___. Der Käse ist gut.', 'es', index)).toBeNull();
    expect(findGapNoun('Das habe ich ___, weil Käse fehlt.', 'dem', index)).toBeNull();
  });

  it('needs a blank', () => {
    expect(findGapNoun('Der Käse', 'der', index)).toBeNull();
  });
});

describe('drillsCase', () => {
  it('is true for a case or case-ending grammar tag', () => {
    expect(drillsCase(['grammar', 'accusative'])).toBe(true);
    expect(drillsCase(['dative-prepositions'])).toBe(true);
    expect(drillsCase(['adjective-endings', 'food-drinks'])).toBe(true);
  });

  it('is false when the article itself is practised or no case is', () => {
    expect(drillsCase(['accusative', 'articles'])).toBe(false);
    expect(drillsCase(['articles'])).toBe(false);
    expect(drillsCase(['perfekt', 'food-drinks'])).toBe(false);
  });
});

describe('sentenceNouns', () => {
  it('lists every known noun of the sentence once, in reading order', () => {
    expect(sentenceNouns('Ich gebe dem Mann einen Käse für die Frau von dem Mann.', index)).toEqual(
      [
        { noun: 'Mann', article: 'der', gender: 'm' },
        { noun: 'Käse', article: 'der', gender: 'm' },
      ],
    );
  });

  it('ignores the blank, unknown words and ambiguous spellings', () => {
    expect(sentenceNouns('Ich gebe ___ Lehrer am See ein Geschenk.', index)).toEqual([
      { noun: 'Lehrer', article: 'der', gender: 'm' },
    ]);
  });

  it('skips a noun whose dictionary article already stands in front of it', () => {
    expect(sentenceNouns('Ich sehe die Frau und dem Mann.', index)).toEqual([
      { noun: 'Mann', article: 'der', gender: 'm' },
    ]);
  });

  it('skips a bracketed hint', () => {
    expect(sentenceNouns('Ich nehme ___ Käse. (der Käse)', index)).toEqual([
      { noun: 'Käse', article: 'der', gender: 'm' },
    ]);
  });

  it('returns nothing for a sentence without known nouns', () => {
    expect(sentenceNouns('Wie geht es dir?', index)).toEqual([]);
  });
});
