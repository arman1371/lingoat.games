import { getItems } from '@/content/items';
import { TAGS } from '@/content/tags';
import { describeLevelContent } from '@/test/contentSuite';
import fr11 from '../fr-a1-1';
import { label } from '../builders';
import content from './index';

describeLevelContent('French B2.1', content, 'fr-b2-1');

describe('French B2.1 specifics', () => {
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

  it('gives most grammar gap-fill items a “why” for their wrong options', () => {
    const gaps = content.activities.flatMap((a) =>
      a.gameType === 'gapfill' && a.tags.includes('grammar') ? a.config.items : [],
    );
    const withWhy = gaps.filter((i) => i.why && Object.keys(i.why).length > 0);
    expect(withWhy.length / gaps.length).toBeGreaterThan(0.6);
  });
});

/** Words B2.1 deliberately revisits in a new function; everything else must be new vocabulary. */
const REVIEW_WORDS = new Set<string>([]);
const key = (v: Parameters<typeof label>[0]) => label(v).toLowerCase();

describe('French B2.1 vocabulary integrity', () => {
  it('does not repeat vocabulary from the earlier French levels', () => {
    const earlier = new Set(fr11.vocab.map(key));
    const repeated = content.vocab.map(key).filter((k) => earlier.has(k) && !REVIEW_WORDS.has(k));
    expect(repeated).toEqual([]);
  });

  it('does not teach a word twice inside B2.1', () => {
    const all = content.vocab.map(key);
    const dup = all.filter((k, i) => all.indexOf(k) !== i && !REVIEW_WORDS.has(k));
    expect(dup).toEqual([]);
  });
});
