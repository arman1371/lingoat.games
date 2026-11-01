import { getItems } from '@/content/items';
import { TAGS } from '@/content/tags';
import { describeLevelContent } from '@/test/contentSuite';
import { label } from '../builders';
import type { LevelContent } from '../schema';
import content from './index';

describeLevelContent('French B1.1', content, 'fr-b1-1');

describe('French B1.1 specifics', () => {
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

/**
 * Words that B1.1 deliberately revisits in a new function. Everything else must be new vocabulary:
 * a word card is never taught twice in French.
 */
const REVIEW_WORDS = new Set<string>([]);

/** Compare words by their bare lemma, so "le voisin" and "voisin" count as the same word. */
const key = (v: Parameters<typeof label>[0]) =>
  label(v)
    .toLowerCase()
    .replace(/^(le |la |l’|les |un |une |des )/, '');

/** The French levels below B1.1 (A1.1 to A2.2), picked up automatically. */
const EARLIER = ['fr-a1-1', 'fr-a1-2', 'fr-a2-1', 'fr-a2-2'];
const earlierVocab = Object.entries(
  import.meta.glob<{ default: LevelContent }>('../fr-*/index.ts', { eager: true }),
)
  .filter(([path]) => EARLIER.some((id) => path.includes(`/${id}/`)))
  .flatMap(([, m]) => m.default.vocab);

describe('French B1.1 vocabulary integrity', () => {
  it('does not repeat vocabulary from French A1.1 to A2.2', () => {
    expect(earlierVocab.length).toBeGreaterThan(0);
    const earlier = new Set(earlierVocab.map(key));
    const repeated = content.vocab.map(key).filter((k) => earlier.has(k) && !REVIEW_WORDS.has(k));
    expect(repeated).toEqual([]);
  });

  it('does not teach a word twice inside B1.1', () => {
    const all = content.vocab.map(key);
    const dup = all.filter((k, i) => all.indexOf(k) !== i && !REVIEW_WORDS.has(k));
    expect(dup).toEqual([]);
  });
});
