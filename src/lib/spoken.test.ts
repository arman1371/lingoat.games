import { priceToWords, timeToWords } from './spoken';

describe('spoken helpers pick the language', () => {
  it('says times in German and French', () => {
    expect(timeToWords({ hour: 14, minute: 30 }, 'informal', 'de')).toBe('halb drei');
    expect(timeToWords({ hour: 14, minute: 30 }, 'informal', 'fr')).toBe('deux heures et demie');
  });

  it('says prices in German and French', () => {
    expect(priceToWords(250, 'de')).toBe('zwei Euro fünfzig');
    expect(priceToWords(250, 'fr')).toBe('deux euros cinquante');
  });
});
