import { FRENCH_PRONOUNS } from '../persons';
import { conditionalFr, futureFr, futureStem } from './future';

const row = (forms: Record<string, string>) => FRENCH_PRONOUNS.map((p) => forms[p]);

describe('futureFr', () => {
  it('adds the endings to the infinitive of regular verbs', () => {
    expect(row(futureFr('parler'))).toEqual([
      'parlerai',
      'parleras',
      'parlera',
      'parlerons',
      'parlerez',
      'parleront',
    ]);
    expect(futureFr('finir')['nous']).toBe('finirons');
    expect(futureFr('partir')['je']).toBe('partirai');
  });

  it('drops the final e of -re verbs', () => {
    expect(futureFr('prendre')['il/elle/on']).toBe('prendra');
    expect(futureFr('mettre')['vous']).toBe('mettrez');
    expect(futureFr('boire')['tu']).toBe('boiras');
  });

  it('knows the irregular stems', () => {
    expect(futureFr('être')['je']).toBe('serai');
    expect(futureFr('avoir')['nous']).toBe('aurons');
    expect(futureFr('aller')['ils/elles']).toBe('iront');
    expect(futureFr('faire')['vous']).toBe('ferez');
    expect(futureFr('venir')['tu']).toBe('viendras');
    expect(futureFr('voir')['je']).toBe('verrai');
    expect(futureFr('pouvoir')['il/elle/on']).toBe('pourra');
    expect(futureFr('vouloir')['nous']).toBe('voudrons');
    expect(futureFr('savoir')['ils/elles']).toBe('sauront');
    expect(futureFr('envoyer')['je']).toBe('enverrai');
    expect(futureFr('recevoir')['vous']).toBe('recevrez');
  });

  it('follows the spelling of verbs like acheter, appeler and payer', () => {
    expect(futureFr('acheter')['je']).toBe('achèterai');
    expect(futureFr('appeler')['nous']).toBe('appellerons');
    expect(futureFr('payer')['tu']).toBe('paieras');
    expect(futureFr('préférer')['il/elle/on']).toBe('préférera');
  });
});

describe('conditionalFr', () => {
  it('uses the future stem with the endings of the imperfect', () => {
    expect(row(conditionalFr('aller'))).toEqual([
      'irais',
      'irais',
      'irait',
      'irions',
      'iriez',
      'iraient',
    ]);
    expect(conditionalFr('prendre')['vous']).toBe('prendriez');
    expect(conditionalFr('pouvoir')['je']).toBe('pourrais');
  });
});

describe('futureStem', () => {
  it('is shared by both tenses', () => {
    expect(futureStem('faire')).toBe('fer');
    expect(futureStem('voyager')).toBe('voyager');
  });
});
