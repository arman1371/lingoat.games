import { FRENCH_PRONOUNS } from '../persons';
import { conjugateFr, reflexiveFr } from './conjugation';

const row = (verb: string) => FRENCH_PRONOUNS.map((p) => conjugateFr(verb)[p]);

describe('conjugateFr', () => {
  it('knows the irregular verbs of A1.1', () => {
    expect(row('être')).toEqual(['suis', 'es', 'est', 'sommes', 'êtes', 'sont']);
    expect(row('avoir')).toEqual(['ai', 'as', 'a', 'avons', 'avez', 'ont']);
    expect(row('aller')).toEqual(['vais', 'vas', 'va', 'allons', 'allez', 'vont']);
    expect(row('prendre')).toEqual(['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent']);
    expect(row('vouloir')).toEqual(['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent']);
    expect(row('boire')).toEqual(['bois', 'bois', 'boit', 'buvons', 'buvez', 'boivent']);
  });

  it('builds regular -er verbs', () => {
    expect(row('parler')).toEqual(['parle', 'parles', 'parle', 'parlons', 'parlez', 'parlent']);
    expect(row('habiter')).toEqual([
      'habite',
      'habites',
      'habite',
      'habitons',
      'habitez',
      'habitent',
    ]);
  });

  it('keeps the sound of the stem: nous mangeons, nous commençons', () => {
    expect(conjugateFr('manger')['nous']).toBe('mangeons');
    expect(conjugateFr('commencer')['nous']).toBe('commençons');
    expect(conjugateFr('manger')['vous']).toBe('mangez');
  });

  it('applies the stem changes of acheter, appeler and payer', () => {
    expect(row('acheter')).toEqual([
      'achète',
      'achètes',
      'achète',
      'achetons',
      'achetez',
      'achètent',
    ]);
    expect(row('appeler')).toEqual([
      'appelle',
      'appelles',
      'appelle',
      'appelons',
      'appelez',
      'appellent',
    ]);
    expect(conjugateFr('préférer')['ils/elles']).toBe('préfèrent');
    expect(conjugateFr('payer')['je']).toBe('paie');
  });

  it('builds regular -ir verbs', () => {
    expect(row('choisir')).toEqual([
      'choisis',
      'choisis',
      'choisit',
      'choisissons',
      'choisissez',
      'choisissent',
    ]);
  });

  it('rejects verbs it has no rule for', () => {
    expect(() => conjugateFr('recevoir')).toThrow(/No French conjugation rule/);
    expect(() => conjugateFr('partir')).toThrow(/No French conjugation rule/);
  });
});

describe('reflexiveFr', () => {
  it('adds me / te / se and elides before a vowel', () => {
    expect(FRENCH_PRONOUNS.map((p) => reflexiveFr('appeler')[p])).toEqual([
      'm’appelle',
      't’appelles',
      's’appelle',
      'nous appelons',
      'vous appelez',
      's’appellent',
    ]);
    expect(reflexiveFr('lever')['je']).toBe('me lève');
    expect(reflexiveFr('habiller')['je']).toBe('m’habille');
  });
});
