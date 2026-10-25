import { spokenWithoutGap } from './logic';

describe('spokenWithoutGap', () => {
  it('reads the text around the blank with a pause where the gap is', () => {
    expect(spokenWithoutGap('Ich ', ' gern Kaffee.')).toBe('Ich, gern Kaffee.');
  });

  it('drops a part that only holds punctuation or nothing', () => {
    expect(spokenWithoutGap('Guten ', '!')).toBe('Guten');
    expect(spokenWithoutGap('', ' ist mein Name.')).toBe('ist mein Name.');
    expect(spokenWithoutGap('Das ist ', '…')).toBe('Das ist');
  });

  it('never contains the missing word', () => {
    expect(spokenWithoutGap('Wir ', ' nach Hause.')).not.toContain('gehen');
  });
});
