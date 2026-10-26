import a11 from '../a1-1';
import a12 from '../a1-2';
import c11 from '../c1-1';
import c12 from '../c1-2';
import { LESSONS } from '../lessons';
import { articleTable } from './build';
import {
  GRAMMAR_TOPICS,
  GRAMMAR_TOPIC_BY_ID,
  UNIT_TOPICS,
  topicsOfUnit,
  unitsOfTopic,
} from './index';
import { GrammarTopicSchema, UnitTopicRefSchema, type Block } from './schema';

const units = [...a11.units, ...a12.units, ...c11.units, ...c12.units];
const unitIds = new Set(units.map((u) => u.id));

const strings = (b: Block): string[] => {
  switch (b.type) {
    case 'p':
      return [b.text];
    case 'list':
      return b.items;
    case 'table':
      return [b.caption, ...b.headers, ...b.rows.flat()];
    case 'examples':
      return b.items.flatMap((i) => [i.de, i.en]);
    case 'compare':
      return b.items.flatMap((i) => [i.title, i.question, i.example]);
    case 'callout':
      return [b.title, ...b.items];
  }
};

describe('grammar topics', () => {
  it('are valid and unique', () => {
    expect(GRAMMAR_TOPICS.length).toBeGreaterThan(0);
    for (const t of GRAMMAR_TOPICS) {
      const parsed = GrammarTopicSchema.safeParse(t);
      expect(parsed.success ? [] : parsed.error.issues, t.id).toEqual([]);
    }
    expect(new Set(GRAMMAR_TOPICS.map((t) => t.id)).size).toBe(GRAMMAR_TOPICS.length);
  });

  it('extend the mini lesson of the same id and keep section ids unique', () => {
    for (const t of GRAMMAR_TOPICS) {
      expect(LESSONS[t.id], t.id).toBeDefined();
      const ids = t.sections.map((s) => s.id);
      expect(new Set(ids).size, t.id).toBe(ids.length);
    }
  });

  it('only point at topics that exist', () => {
    for (const t of GRAMMAR_TOPICS) {
      expect(t.related, t.id).not.toContain(t.id);
      for (const r of t.related) expect(GRAMMAR_TOPIC_BY_ID.has(r), `${t.id} → ${r}`).toBe(true);
    }
  });

  it('have balanced bold markers and no stray whitespace', () => {
    for (const t of GRAMMAR_TOPICS) {
      const all = [
        t.title,
        t.tagline,
        t.summary,
        ...t.sections.flatMap((s) => s.blocks.flatMap(strings)),
      ];
      for (const s of all) {
        expect((s.match(/\*\*/g) ?? []).length % 2, `${t.id}: ${s}`).toBe(0);
        expect(s, t.id).toBe(s.trim());
      }
    }
  });

  it('use generated article tables', () => {
    const dative = articleTable('x', 'dat', 'dative-n');
    expect(dative).toMatchObject({
      type: 'table',
      highlightRow: 2,
      rows: [
        ['Nominative', 'der', 'die', 'das', 'die'],
        ['Accusative', 'den', 'die', 'das', 'die'],
        ['Dative', 'dem', 'der', 'dem', 'den + -n'],
      ],
    });
  });
});

describe('unit → topic links', () => {
  it('are well formed and point at real units', () => {
    for (const [unitId, refs] of Object.entries(UNIT_TOPICS)) {
      expect(unitIds.has(unitId), unitId).toBe(true);
      expect(refs.length, unitId).toBeGreaterThan(0);
      for (const r of refs) expect(UnitTopicRefSchema.safeParse(r).success, unitId).toBe(true);
      expect(new Set(refs.map((r) => r.topic)).size, `${unitId} lists a topic twice`).toBe(
        refs.length,
      );
    }
  });

  it('cover every unit of the levels that have lessons, with every topic written', () => {
    for (const u of units) {
      const refs = UNIT_TOPICS[u.id] ?? [];
      expect(refs.length, `${u.id} has no grammar topics`).toBeGreaterThan(0);
      expect(topicsOfUnit(u.id).length, `${u.id} links a topic that is not written`).toBe(
        refs.length,
      );
    }
  });

  it('use every topic at least once, and a topic is first taught at its own level', () => {
    for (const t of GRAMMAR_TOPICS) {
      const levels = unitsOfTopic(t.id).map((id) => id.split('-').slice(0, 2).join('-'));
      expect(levels.length, `${t.id} is not used by any unit`).toBeGreaterThan(0);
      expect(t.level, t.id).toBe([...levels].sort()[0]);
    }
  });
});
