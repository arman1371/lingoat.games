import { subjunctiveFr } from './subjunctive';

const list = (verb: string) => Object.values(subjunctiveFr(verb));

describe('subjunctiveFr', () => {
  it('takes the ils-stem for regular verbs and the nous-stem for nous and vous', () => {
    expect(list('parler')).toEqual(['parle', 'parles', 'parle', 'parlions', 'parliez', 'parlent']);
    expect(list('finir')).toEqual([
      'finisse',
      'finisses',
      'finisse',
      'finissions',
      'finissiez',
      'finissent',
    ]);
    expect(list('prendre')).toEqual([
      'prenne',
      'prennes',
      'prenne',
      'prenions',
      'preniez',
      'prennent',
    ]);
    expect(list('venir')).toEqual(['vienne', 'viennes', 'vienne', 'venions', 'veniez', 'viennent']);
    expect(list('boire')).toEqual(['boive', 'boives', 'boive', 'buvions', 'buviez', 'boivent']);
  });

  it('keeps the sound of the stem before -ions', () => {
    expect(subjunctiveFr('manger')['nous']).toBe('mangions');
    expect(subjunctiveFr('commencer' as string)['nous']).toBe('commencions');
    expect(subjunctiveFr('payer')['nous']).toBe('payions');
    expect(subjunctiveFr('payer')['je']).toBe('paie');
  });

  it('knows the irregular stems', () => {
    expect(list('être')).toEqual(['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient']);
    expect(list('avoir')).toEqual(['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient']);
    expect(list('aller')).toEqual(['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent']);
    expect(list('faire')[0]).toBe('fasse');
    expect(list('pouvoir')[3]).toBe('puissions');
    expect(list('savoir')[0]).toBe('sache');
    expect(list('vouloir')[0]).toBe('veuille');
  });

  it('says so for a verb it cannot derive', () => {
    expect(() => subjunctiveFr('dormir')).toThrow();
  });
});
