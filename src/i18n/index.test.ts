import { t } from './index';

describe('t', () => {
  it('looks up nested keys and fills placeholders', () => {
    expect(t('nav.home')).toBe('Learn');
    expect(t('home.streak', { n: 3 })).toBe('3-day streak');
  });
  it('falls back to the key', () => {
    expect(t('nope.missing' as never)).toBe('nope.missing');
  });
});
