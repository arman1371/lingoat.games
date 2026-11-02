import {
  condPastTable,
  condTable,
  conditionnel,
  conditionnelPasse,
  plusQueParfait,
  subjonctif,
} from './helpers';

describe('French C1.1 tense helpers', () => {
  it('builds the conditionnel from the future stem', () => {
    expect(Object.values(conditionnel('voter'))).toEqual([
      'voterais',
      'voterais',
      'voterait',
      'voterions',
      'voteriez',
      'voteraient',
    ]);
    expect(conditionnel('pouvoir')['nous']).toBe('pourrions');
    expect(conditionnel('être')['je']).toBe('serais');
    expect(conditionnel('aller')['ils/elles']).toBe('iraient');
  });

  it('builds the subjonctif from the ils and nous stems, with irregular verbs listed', () => {
    expect(Object.values(subjonctif('finir'))).toEqual([
      'finisse',
      'finisses',
      'finisse',
      'finissions',
      'finissiez',
      'finissent',
    ]);
    expect(subjonctif('prendre')['je']).toBe('prenne');
    expect(subjonctif('prendre')['nous']).toBe('prenions');
    expect(subjonctif('parler')['vous']).toBe('parliez');
    expect(subjonctif('faire')['il/elle/on']).toBe('fasse');
    expect(subjonctif('être')['nous']).toBe('soyons');
    expect(subjonctif('pouvoir')['ils/elles']).toBe('puissent');
  });

  it('builds compound tenses with avoir', () => {
    expect(plusQueParfait('voter')['je']).toBe('avais voté');
    expect(plusQueParfait('prendre')['nous']).toBe('avions pris');
    expect(conditionnelPasse('voter')['tu']).toBe('aurais voté');
    expect(conditionnelPasse('faire')['ils/elles']).toBe('auraient fait');
  });

  it('wraps forms as conjugation tables', () => {
    expect(condTable('voter', 'to vote', ['je'])).toMatchObject({
      verb: 'voter (conditionnel)',
      blanks: ['je'],
    });
    expect(condPastTable('voter', 'to vote', ['nous']).forms.nous).toBe('aurions voté');
  });
});
