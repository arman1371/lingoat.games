import { formalTimeFr, informalTimeFr, timeToFrench } from './time';

const at = (h: number, m: number) => ({ hour: h, minute: m });

describe('formalTimeFr (24-hour reading)', () => {
  it.each([
    [at(9, 0), 'neuf heures'],
    [at(1, 0), 'une heure'],
    [at(13, 0), 'treize heures'],
    [at(14, 30), 'quatorze heures trente'],
    [at(8, 15), 'huit heures quinze'],
    [at(20, 45), 'vingt heures quarante-cinq'],
    [at(12, 0), 'midi'],
    [at(0, 0), 'minuit'],
    [at(0, 10), 'zéro heure dix'],
    [at(12, 5), 'midi cinq'],
    [at(7, 21), 'sept heures vingt et une'],
    [at(7, 1), 'sept heures une'],
  ])('%j → %s', (clock, expected) => {
    expect(formalTimeFr(clock)).toBe(expected);
  });
});

describe('informalTimeFr (everyday 12-hour reading)', () => {
  it.each([
    [at(14, 0), 'deux heures'],
    [at(2, 0), 'deux heures'],
    [at(1, 0), 'une heure'],
    [at(14, 5), 'deux heures cinq'],
    [at(14, 10), 'deux heures dix'],
    [at(14, 15), 'deux heures et quart'],
    [at(14, 20), 'deux heures vingt'],
    [at(14, 25), 'deux heures vingt-cinq'],
    [at(14, 30), 'deux heures et demie'],
    [at(14, 35), 'trois heures moins vingt-cinq'],
    [at(14, 40), 'trois heures moins vingt'],
    [at(14, 45), 'trois heures moins le quart'],
    [at(14, 50), 'trois heures moins dix'],
    [at(14, 55), 'trois heures moins cinq'],
    [at(12, 0), 'midi'],
    [at(12, 30), 'midi et demi'],
    [at(0, 30), 'minuit et demi'],
    [at(11, 45), 'midi moins le quart'],
    [at(23, 55), 'minuit moins cinq'],
    [at(12, 45), 'une heure moins le quart'],
    [at(0, 15), 'minuit et quart'],
  ])('%j → %s', (clock, expected) => {
    expect(informalTimeFr(clock)).toBe(expected);
  });

  it('falls back to the official reading for minutes that are no multiple of five', () => {
    expect(informalTimeFr(at(14, 7))).toBe('quatorze heures sept');
  });
});

describe('timeToFrench', () => {
  it('picks the style', () => {
    expect(timeToFrench(at(14, 30), 'formal')).toBe('quatorze heures trente');
    expect(timeToFrench(at(14, 30), 'informal')).toBe('deux heures et demie');
  });
});
