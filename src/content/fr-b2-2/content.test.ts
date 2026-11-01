import { getItems } from '@/content/items';
import { TAGS } from '@/content/tags';
import { describeLevelContent } from '@/test/contentSuite';
import fr11 from '../fr-a1-1';
import content from './index';

describeLevelContent('French B2.2', content, 'fr-b2-2');

describe('French B2.2 specifics', () => {
  it('uses ascii ids, so accents never end up in a URL', () => {
    const ids = [...content.vocab.map((v) => v.id), ...content.activities.map((a) => a.id)];
    expect(ids.filter((id) => !/^[a-z0-9-]+$/.test(id))).toEqual([]);
  });

  it('never borrows a German grammar point: its lessons would explain German', () => {
    for (const a of content.activities) {
      const german = a.tags.filter((t) => TAGS[t].group === 'grammar' && !t.startsWith('fr-'));
      expect(german, a.id).toEqual([]);
      for (const item of getItems(a) as { id: string; lesson?: string }[]) {
        if (item.lesson) expect(item.lesson.startsWith('fr-'), `${a.id}/${item.id}`).toBe(true);
      }
    }
  });

  it('writes French nouns and phrases without a German article field', () => {
    expect(content.vocab.filter((v) => v.article)).toEqual([]);
  });

  it('owns its tags: topic and grammar tags of this level start with fr-b22-', () => {
    const own = content.activities.flatMap((a) => a.tags).filter((t) => t.startsWith('fr-b22-'));
    expect(own.length).toBeGreaterThan(0);
  });
});

/** Compare words by their bare form, so "un quotidien" and "quotidien" count as the same word. */
const key = (de: string) => de.replace(/^(un|une|le|la|l’|les|des) ?/i, '').toLowerCase();

describe('French B2.2 vocabulary integrity', () => {
  it('does not repeat vocabulary from earlier French levels', () => {
    const earlier = new Set(fr11.vocab.map((v) => key(v.de)));
    expect(content.vocab.map((v) => key(v.de)).filter((k) => earlier.has(k))).toEqual([]);
  });

  it('does not teach a word twice inside B2.2', () => {
    const all = content.vocab.map((v) => key(v.de));
    expect(all.filter((k, i) => all.indexOf(k) !== i)).toEqual([]);
  });

  it('gives most grammar gap-fill items a “why” for their wrong options', () => {
    const gaps = content.activities.flatMap((a) =>
      a.gameType === 'gapfill' && a.tags.includes('grammar') ? a.config.items : [],
    );
    const withWhy = gaps.filter((i) => i.why && Object.keys(i.why).length > 0);
    expect(withWhy.length / gaps.length).toBeGreaterThan(0.6);
  });
});
