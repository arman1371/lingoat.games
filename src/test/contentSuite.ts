import { getItems } from '@/content/items';
import { LevelContentSchema, type Activity, type LevelContent } from '@/content/schema';
import { TAGS } from '@/content/tags';

/** Structural checks every level content pack must pass. */
export function describeLevelContent(name: string, content: LevelContent, levelId: string) {
  describe(`${name} content`, () => {
    it('passes schema validation', () => {
      const parsed = LevelContentSchema.safeParse(content);
      if (!parsed.success) console.error(JSON.stringify(parsed.error.issues.slice(0, 5), null, 2));
      expect(parsed.success).toBe(true);
    });

    it('has unique ids', () => {
      const dup = (ids: string[]) => ids.filter((id, i) => ids.indexOf(id) !== i);
      expect(dup(content.activities.map((a) => a.id))).toEqual([]);
      expect(dup(content.units.map((u) => u.id))).toEqual([]);
      expect(dup(content.vocab.map((v) => v.id))).toEqual([]);
    });

    it('has unique item ids inside each activity', () => {
      for (const a of content.activities) {
        const ids = getItems(a).map((i) => i.id);
        expect(new Set(ids).size, `${a.id} has duplicate item ids`).toBe(ids.length);
      }
    });

    it('links every activity to a unit and uses canonical tags', () => {
      const unitIds = new Set(content.units.map((u) => u.id));
      for (const a of content.activities) {
        expect(unitIds.has(a.unitId), a.id).toBe(true);
        for (const tag of a.tags) expect(Object.hasOwn(TAGS, tag), `${a.id}: ${tag}`).toBe(true);
      }
    });

    it('numbers units 1..n in order and prefixes ids with the unit id', () => {
      expect(content.units.map((u) => u.order)).toEqual(content.units.map((_, i) => i + 1));
      for (const a of content.activities) expect(a.id.startsWith(a.unitId)).toBe(true);
    });

    it('gives grammar hints (lesson / why) only to grammar activities', () => {
      for (const a of content.activities) {
        if (a.tags.includes('grammar')) continue;
        expect(a.lesson, a.id).toBeUndefined();
        for (const i of getItems(a) as { id: string; lesson?: string; why?: object }[]) {
          expect(i.lesson ?? i.why, `${a.id}/${i.id}`).toBeUndefined();
        }
      }
    });

    describe.each(content.units.map((u) => [u.title, u.id] as const))('%s', (_title, unitId) => {
      const acts: Activity[] = content.activities.filter((a) => a.unitId === unitId);

      it('has 10–16 activities covering at least 6 game types', () => {
        expect(acts.length).toBeGreaterThanOrEqual(10);
        expect(acts.length).toBeLessThanOrEqual(16);
        expect(new Set(acts.map((a) => a.gameType)).size).toBeGreaterThanOrEqual(6);
      });

      it('starts with an easy activity and ends with a challenge', () => {
        expect(acts[0]!.difficulty).toBe(1);
        expect(acts.at(-1)!.title.toLowerCase()).toContain('challenge');
      });

      it('keeps items distinguishable so the engines (and learners) can tell them apart', () => {
        const dup = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i);
        const suffixClash = (xs: string[]) =>
          xs.filter((a) => xs.some((b) => a !== b && b.endsWith(a)));
        for (const a of acts) {
          const where = a.id;
          switch (a.gameType) {
            case 'quiz':
              expect(
                dup(a.config.questions.map((x) => `${x.prompt}|${x.emoji ?? ''}`)),
                where,
              ).toEqual([]);
              break;
            case 'listen':
              expect(suffixClash(a.config.items.map((x) => x.speak)), where).toEqual([]);
              break;
            case 'spell':
              expect(
                suffixClash(
                  a.config.items
                    .filter((x) => x.mode === 'dictation')
                    .map((x) => x.speak ?? x.answer),
                ),
                where,
              ).toEqual([]);
              expect(
                dup(a.config.items.filter((x) => x.mode !== 'dictation').map((x) => x.hint)),
                where,
              ).toEqual([]);
              break;
            case 'sentence':
              expect(dup(a.config.items.map((x) => x.translation)), where).toEqual([]);
              break;
            case 'gapfill':
              expect(dup(a.config.items.map((x) => x.text)), where).toEqual([]);
              break;
            case 'sortit':
              expect(dup(a.config.items.map((x) => x.text)), where).toEqual([]);
              break;
            case 'blitz':
              expect(dup(a.config.statements.map((x) => x.text)), where).toEqual([]);
              break;
          }
        }
      });

      it('gives every Sort it card an English meaning for the verdict', () => {
        const bare = acts.flatMap((a) =>
          a.gameType === 'sortit'
            ? a.config.items.filter((i) => !i.translation).map((i) => `${a.id}: ${i.text}`)
            : [],
        );
        expect(bare).toEqual([]);
      });

      it('has at least one vocabulary and one grammar-or-conversation activity', () => {
        const tags = new Set(acts.flatMap((a) => a.tags));
        expect(tags.has('vocabulary')).toBe(true);
        expect(tags.has('grammar') || tags.has('communication')).toBe(true);
      });
    });

    it('keeps German answers consistent: quiz/gap options never repeat the prompt', () => {
      for (const a of content.activities) {
        if (a.gameType !== 'quiz') continue;
        for (const q of a.config.questions) {
          expect(
            q.options.filter((o) => o === q.answer),
            `${a.id}/${q.id}`,
          ).toHaveLength(1);
        }
      }
    });

    it('belongs to the right level and prefixes ids with the level id', () => {
      for (const u of content.units) {
        expect(u.levelId, u.id).toBe(levelId);
        expect(u.id.startsWith(`${levelId}-`), u.id).toBe(true);
      }
      for (const v of content.vocab) expect(v.id.startsWith(`${levelId}-`), v.id).toBe(true);
    });
  });
}
