import { digitsToFrench, numberToFrench, priceToFrench, spellOutFr } from './numbers';

const cases: [number, string][] = [
  [0, 'zéro'],
  [1, 'un'],
  [16, 'seize'],
  [17, 'dix-sept'],
  [20, 'vingt'],
  [21, 'vingt et un'],
  [22, 'vingt-deux'],
  [31, 'trente et un'],
  [61, 'soixante et un'],
  [70, 'soixante-dix'],
  [71, 'soixante et onze'],
  [72, 'soixante-douze'],
  [79, 'soixante-dix-neuf'],
  [80, 'quatre-vingts'],
  [81, 'quatre-vingt-un'],
  [91, 'quatre-vingt-onze'],
  [90, 'quatre-vingt-dix'],
  [99, 'quatre-vingt-dix-neuf'],
  [100, 'cent'],
  [101, 'cent un'],
  [200, 'deux cents'],
  [201, 'deux cent un'],
  [280, 'deux cent quatre-vingts'],
  [281, 'deux cent quatre-vingt-un'],
  [1000, 'mille'],
  [1980, 'mille neuf cent quatre-vingts'],
  [2000, 'deux mille'],
  [80_000, 'quatre-vingt mille'],
  [200_000, 'deux cent mille'],
];

describe('numberToFrench', () => {
  it.each(cases)('%i → %s', (n, words) => {
    expect(numberToFrench(n)).toBe(words);
  });

  it('rejects numbers it cannot write', () => {
    expect(() => numberToFrench(-1)).toThrow(RangeError);
    expect(() => numberToFrench(1.5)).toThrow(RangeError);
    expect(() => numberToFrench(1_000_000)).toThrow(RangeError);
  });
});

describe('digitsToFrench', () => {
  it('reads a phone number in pairs', () => {
    expect(digitsToFrench('0612345678')).toBe(
      'zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit',
    );
    expect(digitsToFrench('01 45 67 89 01')).toBe(
      'zéro un, quarante-cinq, soixante-sept, quatre-vingt-neuf, zéro un',
    );
    expect(digitsToFrench('0700')).toBe('zéro sept, zéro zéro');
  });
});

describe('spellOutFr', () => {
  it('names the letters and accents', () => {
    expect(spellOutFr('Léa')).toBe('elle, e accent aigu, a');
    expect(spellOutFr('Marc')).toBe('emme, a, erre, cé');
    expect(spellOutFr('a-b')).toBe('a, trait d’union, bé');
  });
});

describe('priceToFrench', () => {
  it.each([
    [250, 'deux euros cinquante'],
    [100, 'un euro'],
    [200, 'deux euros'],
    [101, 'un euro un'],
    [80, 'quatre-vingts centimes'],
    [1, 'un centime'],
    [35, 'trente-cinq centimes'],
    [1295, 'douze euros quatre-vingt-quinze'],
    [8000, 'quatre-vingts euros'],
  ])('%i cents → %s', (cents, expected) => {
    expect(priceToFrench(cents)).toBe(expected);
  });
});
