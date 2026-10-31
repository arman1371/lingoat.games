import { ConjugationConfig } from '@/content/schema';
import { conjugateFr } from './french/conjugation';
import { conjugate } from './german/conjugation';
import { personLabel, personsOf } from './persons';

describe('personsOf', () => {
  it('finds the full set a table is written with', () => {
    expect(personsOf(conjugate('sein'))).toEqual([
      'ich',
      'du',
      'er/sie/es',
      'wir',
      'ihr',
      'sie/Sie',
    ]);
    expect(personsOf(conjugateFr('être'))).toEqual([
      'je',
      'tu',
      'il/elle/on',
      'nous',
      'vous',
      'ils/elles',
    ]);
  });

  it('refuses incomplete or mixed tables', () => {
    expect(personsOf({ je: 'suis', tu: 'es' })).toBeUndefined();
    expect(personsOf({ ...conjugateFr('être'), ich: 'bin' })).toBeUndefined();
  });
});

describe('personLabel', () => {
  it('elides je before a vowel or mute h only', () => {
    expect(personLabel('je', 'ai')).toBe('j’');
    expect(personLabel('je', 'habite')).toBe('j’');
    expect(personLabel('je', 'parle')).toBe('je');
    expect(personLabel('tu', 'as')).toBe('tu');
  });
});

describe('conjugation config', () => {
  const table = (forms: object, blanks: string[]) => ({
    tables: [{ id: 't', verb: 'v', meaning: 'm', forms, blanks }],
  });

  it('accepts German and French tables', () => {
    expect(ConjugationConfig.safeParse(table(conjugate('sein'), ['ich'])).success).toBe(true);
    expect(ConjugationConfig.safeParse(table(conjugateFr('être'), ['je'])).success).toBe(true);
  });

  it('rejects a blank that is not in the table and half-filled tables', () => {
    expect(ConjugationConfig.safeParse(table(conjugateFr('être'), ['ich'])).success).toBe(false);
    expect(ConjugationConfig.safeParse(table({ je: 'suis' }, ['je'])).success).toBe(false);
  });
});
