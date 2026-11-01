import { getItems } from '@/content/items';
import { TAGS } from '@/content/tags';
import { describeLevelContent } from '@/test/contentSuite';
import { label } from '../builders';
import type { LevelContent } from '../schema';
import content from './index';

describeLevelContent('French A2.2', content, 'fr-a2-2');

describe('French A2.2 specifics', () => {
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

/** The French levels that come before A2.2, as far as they exist in the repository. */
const EARLIER = ['fr-a1-1', 'fr-a1-2', 'fr-a2-1'];
const packs = import.meta.glob<{ default: LevelContent }>('../fr-*/index.ts', { eager: true });
const earlierVocab = Object.entries(packs)
  .filter(([path]) => EARLIER.some((id) => path === `../${id}/index.ts`))
  .flatMap(([, m]) => m.default.vocab);

/** The word without its article, so “le pain” and “pain” count as the same word. */
const key = (v: Parameters<typeof label>[0]) =>
  label(v)
    .replace(/^(le|la|les|l’|un|une|des) ?/i, '')
    .toLowerCase();

describe('French A2.2 vocabulary integrity', () => {
  it('does not repeat vocabulary from the earlier French levels', () => {
    const earlier = new Set(earlierVocab.map(key));
    expect(content.vocab.map(key).filter((k) => earlier.has(k))).toEqual([]);
  });

  it('does not teach a word twice inside A2.2', () => {
    const all = content.vocab.map(key);
    expect(all.filter((k, i) => all.indexOf(k) !== i)).toEqual([]);
  });
});
