import { getItems } from '@/content/items';
import { TAGS } from '@/content/tags';
import { describeLevelContent } from '@/test/contentSuite';
import { label } from '../builders';
import type { LevelContent } from '../schema';
import content from './index';

describeLevelContent('French C1.1', content, 'fr-c1-1');

/** Every French level before C1.1 (fr-a1-1 … fr-b2-2), found by folder name so new levels are picked up. */
const earlierLevels = Object.entries(
  import.meta.glob<{ default: LevelContent }>('../fr-*/index.ts', { eager: true }),
)
  .filter(([path]) => path.split('/')[1]! < 'fr-c1-1')
  .map(([, module]) => module.default);

/**
 * Words C1.1 deliberately revisits in a new function. Everything else must be new vocabulary: a word card
 * of an earlier French level is never taught again.
 */
const REVIEW_WORDS = new Set<string>([]);

describe('French C1.1 specifics', () => {
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

  it('does not repeat the word cards of the earlier French levels', () => {
    expect(earlierLevels.length).toBeGreaterThan(0);
    const earlier = new Set(
      earlierLevels.flatMap((l) => l.vocab).map((v) => label(v).toLowerCase()),
    );
    const repeated = content.vocab
      .map((v) => label(v).toLowerCase())
      .filter((w) => earlier.has(w) && !REVIEW_WORDS.has(w));
    expect(repeated).toEqual([]);
  });

  it('keeps each word card in one unit only', () => {
    const words = content.vocab.map((v) => label(v).toLowerCase());
    expect(words.filter((w, i) => words.indexOf(w) !== i)).toEqual([]);
  });
});
