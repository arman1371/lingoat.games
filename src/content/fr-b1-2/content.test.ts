import { getItems } from '@/content/items';
import { TAGS } from '@/content/tags';
import { describeLevelContent } from '@/test/contentSuite';
import { label } from '../builders';
import type { LevelContent } from '../schema';
import content from './index';

describeLevelContent('French B1.2', content, 'fr-b1-2');

/** Words that B1.2 deliberately revisits in a new function; everything else must be new vocabulary. */
const REVIEW_WORDS = new Set<string>([]);

const key = (v: Parameters<typeof label>[0]) =>
  label(v)
    .replace(/^(le |la |l’|les |un |une |des )/i, '')
    .toLowerCase();

/** Every French level that comes before B1.2 and has content (found by name, so new levels join in). */
const earlierLevels = Object.entries(
  import.meta.glob<{ default: LevelContent }>('../fr-*/index.ts', { eager: true }),
)
  .filter(([path, mod]) => mod.default !== content && !/fr-(b2|c)/.test(path))
  .map(([, mod]) => mod.default);

describe('French B1.2 specifics', () => {
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
});

describe('French B1.2 vocabulary integrity', () => {
  it('does not repeat vocabulary from the earlier French levels', () => {
    const earlier = new Set(earlierLevels.flatMap((l) => l.vocab).map(key));
    const repeated = content.vocab.map(key).filter((k) => earlier.has(k) && !REVIEW_WORDS.has(k));
    expect(repeated).toEqual([]);
  });

  it('does not teach a word twice inside B1.2', () => {
    const all = content.vocab.map(key);
    const dup = all.filter((k, i) => all.indexOf(k) !== i && !REVIEW_WORDS.has(k));
    expect(dup).toEqual([]);
  });
});
