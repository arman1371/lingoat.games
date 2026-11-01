import { getItems } from '@/content/items';
import { TAGS } from '@/content/tags';
import { describeLevelContent } from '@/test/contentSuite';
import { label } from '../builders';
import frA11 from '../fr-a1-1';
import content from './index';

describeLevelContent('French C2.1', content, 'fr-c2-1');

/**
 * Words that C2.1 deliberately revisits in a new function.
 * Everything else must be new vocabulary: C2.1 never re-teaches a word card of an earlier French level.
 */
const REVIEW_WORDS = new Set<string>([]);

/** Earlier French levels. Add each level here when it lands on main, so the overlap test keeps its promise. */
const EARLIER_FRENCH = [frA11];

const key = (v: Parameters<typeof label>[0]) => label(v).toLowerCase();

describe('French C2.1 specifics', () => {
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

  it('does not repeat vocabulary from the earlier French levels', () => {
    const earlier = new Set(EARLIER_FRENCH.flatMap((l) => l.vocab).map(key));
    const repeated = content.vocab.map(key).filter((k) => earlier.has(k) && !REVIEW_WORDS.has(k));
    expect(repeated).toEqual([]);
  });

  it('does not teach a word twice inside C2.1', () => {
    const all = content.vocab.map(key);
    expect(all.filter((k, i) => all.indexOf(k) !== i && !REVIEW_WORDS.has(k))).toEqual([]);
  });
});
