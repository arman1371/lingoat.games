import { FRENCH_PRONOUNS } from '../persons';
import {
  conditionnelPasse,
  futurAnterieur,
  gerondif,
  participePresent,
  plusQueParfait,
} from './compound';

const row = (f: Record<string, string>) => FRENCH_PRONOUNS.map((p) => f[p]);

describe('compound tenses', () => {
  it('builds the plus-que-parfait with avoir and être', () => {
    expect(row(plusQueParfait('finir'))).toEqual([
      'avais fini',
      'avais fini',
      'avait fini',
      'avions fini',
      'aviez fini',
      'avaient fini',
    ]);
    expect(plusQueParfait('partir')['nous']).toBe('étions partis');
    expect(plusQueParfait('partir', { feminine: true })['il/elle/on']).toBe('était partie');
  });

  it('builds the conditionnel passé', () => {
    expect(conditionnelPasse('prendre')['je']).toBe('aurais pris');
    expect(conditionnelPasse('aller')['vous']).toBe('seriez allés');
    expect(conditionnelPasse('venir', { feminine: true })['tu']).toBe('serais venue');
  });

  it('builds the futur antérieur', () => {
    expect(futurAnterieur('finir')['nous']).toBe('aurons fini');
    expect(futurAnterieur('arriver')['ils/elles']).toBe('seront arrivés');
  });

  it('builds the participe présent and the gérondif', () => {
    expect(participePresent('finir')).toBe('finissant');
    expect(participePresent('manger')).toBe('mangeant');
    expect(participePresent('faire')).toBe('faisant');
    expect(participePresent('être')).toBe('étant');
    expect(participePresent('avoir')).toBe('ayant');
    expect(participePresent('savoir')).toBe('sachant');
    expect(gerondif('prendre')).toBe('en prenant');
  });
});
