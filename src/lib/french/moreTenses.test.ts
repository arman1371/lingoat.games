import { conditionnel, plusQueParfait } from './moreTenses';

describe('plusQueParfait', () => {
  it('uses the imparfait of avoir or être', () => {
    expect(plusQueParfait('finir')['je']).toBe('avais fini');
    expect(plusQueParfait('prendre')['ils/elles']).toBe('avaient pris');
    expect(plusQueParfait('aller')['nous']).toBe('étions allés');
    expect(plusQueParfait('partir', { feminine: true })['il/elle/on']).toBe('était partie');
  });
});

describe('conditionnel', () => {
  it('adds the imparfait endings to the future stem', () => {
    expect(conditionnel('parler').je).toBe('parlerais');
    expect(conditionnel('venir').nous).toBe('viendrions');
    expect(conditionnel('être')['ils/elles']).toBe('seraient');
    expect(conditionnel('prendre').vous).toBe('prendriez');
    expect(conditionnel('faire')['il/elle/on']).toBe('ferait');
  });
});
