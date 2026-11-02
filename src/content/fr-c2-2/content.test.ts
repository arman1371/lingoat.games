import { getItems } from '@/content/items';
import { TAGS } from '@/content/tags';
import { describeLevelContent } from '@/test/contentSuite';
import { label } from '../builders';
import type { LevelContent } from '../schema';
import content from './index';

describeLevelContent('French C2.2', content, 'fr-c2-2');

describe('French C2.2 specifics', () => {
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

  it('tags its grammar with its own fr-c22- points', () => {
    for (const a of content.activities) {
      const grammar = a.tags.filter((t) => TAGS[t].group === 'grammar');
      for (const t of grammar) expect(t.startsWith('fr-c22-'), `${a.id}: ${t}`).toBe(true);
    }
  });
});

/**
 * French levels that come before C2.2. C2.2 never re-teaches a word card of an earlier level;
 * `REVIEW_WORDS` lists deliberate exceptions. Level packs are found by glob so that a level merged
 * later is checked as well (add it to `EARLIER` when it is not yet listed).
 */
const EARLIER = [
  'fr-a1-1',
  'fr-a1-2',
  'fr-a2-1',
  'fr-a2-2',
  'fr-b1-1',
  'fr-b1-2',
  'fr-b2-1',
  'fr-b2-2',
  'fr-c1-1',
  'fr-c1-2',
  'fr-c2-1',
];
const REVIEW_WORDS = new Set<string>([]);

const packs = import.meta.glob<{ default: LevelContent }>('../fr-*/index.ts', { eager: true });

/** Compare words by their bare lemma, so "le pain" and "pain" count as the same word. */
const key = (v: Parameters<typeof label>[0]) =>
  label(v)
    .toLowerCase()
    .replace(/^(le |la |les |l’|un |une |des )/, '');

describe('French C2.2 vocabulary integrity', () => {
  it('does not repeat vocabulary from the earlier French levels', () => {
    const earlier = new Set(
      Object.entries(packs)
        .filter(([path]) => EARLIER.some((id) => path === `../${id}/index.ts`))
        .flatMap(([, m]) => m.default.vocab)
        .map(key),
    );
    const repeated = content.vocab.map(key).filter((k) => earlier.has(k) && !REVIEW_WORDS.has(k));
    expect(repeated).toEqual([]);
  });

  it('does not teach a word twice inside C2.2', () => {
    const all = content.vocab.map(key);
    const dup = all.filter((k, i) => all.indexOf(k) !== i && !REVIEW_WORDS.has(k));
    expect(dup).toEqual([]);
  });
});
