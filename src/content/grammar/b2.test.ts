import { konjunktiv1 } from '@/lib/german/konjunktiv1';
import { B21_TOPICS } from './b2-1';
import { B22_TOPICS } from './b2-2';
import { GRAMMAR_TOPIC_BY_ID, topicsOfUnit } from './index';
import type { Block } from './schema';

const tables = (id: string): Extract<Block, { type: 'table' }>[] =>
  GRAMMAR_TOPIC_BY_ID.get(id)!.sections.flatMap((s) =>
    s.blocks.filter((b): b is Extract<Block, { type: 'table' }> => b.type === 'table'),
  );

describe('B2 grammar lessons', () => {
  it('cover every grammar tag of B2.1 and B2.2 with their own level', () => {
    expect(B21_TOPICS).toHaveLength(16);
    expect(B22_TOPICS).toHaveLength(12);
    expect(B21_TOPICS.every((t) => t.level === 'b2-1')).toBe(true);
    expect(B22_TOPICS.every((t) => t.level === 'b2-2')).toBe(true);
  });

  it('write the topics later levels link to (C1 builds on konjunktiv-1 and noun-verb-phrases)', () => {
    for (const id of ['konjunktiv-1', 'noun-verb-phrases']) {
      expect(GRAMMAR_TOPIC_BY_ID.get(id)?.level, id).toBe('b2-1');
    }
  });

  it('show a topic shared by two units in both', () => {
    expect(topicsOfUnit('b2-1-besitz').map((t) => t.topic.id)).toContain('konjunktiv-1');
    expect(topicsOfUnit('b2-2-druck').map((t) => t.topic.id)).toContain('konjunktiv-1');
    expect(topicsOfUnit('b2-2-kunst').map((t) => t.topic.id)).toEqual(
      expect.arrayContaining(['relative-wer', 'state-passive']),
    );
  });

  it('generate the Konjunktiv I table from the verb helper', () => {
    const forms = tables('konjunktiv-1').find((t) => /four important verbs/.test(t.caption))!;
    expect(forms.headers).toEqual(['Person', 'sein', 'haben', 'kommen', 'können']);
    const er = forms.rows.find((r) => r[0] === 'er/sie/es')!;
    expect(er.slice(1)).toEqual(
      ['sein', 'haben', 'kommen', 'können'].map((v) => konjunktiv1(v)['er/sie/es']),
    );
    expect(er.slice(1)).toEqual(['sei', 'habe', 'komme', 'könne']);
  });

  it('build the Futur II table with the conjugated werden', () => {
    const futur = tables('assumptions').find((t) => t.headers.includes('abreisen'))!;
    expect(futur.rows[0]).toEqual(['ich', 'werde gemacht haben', 'werde abgereist sein']);
    expect(futur.rows[5]).toEqual(['sie/Sie', 'werden gemacht haben', 'werden abgereist sein']);
  });
});
