import { FRENCH_PRONOUNS } from '../persons';
import { conditionnel } from './conditional';

const row = (verb: string) => FRENCH_PRONOUNS.map((p) => conditionnel(verb)[p]);

describe('conditionnel', () => {
  it('uses the future stem with the endings of the imperfect', () => {
    expect(row('aller')).toEqual(['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient']);
    expect(row('parler')).toEqual([
      'parlerais',
      'parlerais',
      'parlerait',
      'parlerions',
      'parleriez',
      'parleraient',
    ]);
  });

  it('drops the e of -re verbs and keeps irregular stems', () => {
    expect(conditionnel('prendre')['vous']).toBe('prendriez');
    expect(conditionnel('pouvoir')['je']).toBe('pourrais');
    expect(conditionnel('faire')['il/elle/on']).toBe('ferait');
    expect(conditionnel('être')['nous']).toBe('serions');
    expect(conditionnel('acheter')['tu']).toBe('achèterais');
  });
});
