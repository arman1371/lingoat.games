import { getItems } from '@/content/items';
import { TAGS } from '@/content/tags';
import { describeLevelContent } from '@/test/contentSuite';
import type { LevelContent } from '../schema';
import content from './index';

describeLevelContent('French A2.1', content, 'fr-a2-1');

/** Earlier French levels, found by id so that a level merged later is picked up without editing this file. */
const EARLIER = ['fr-a1-1', 'fr-a1-2'];
const packs = import.meta.glob<{ default: LevelContent }>('../fr-a*/index.ts', { eager: true });
const earlierVocab = Object.entries(packs)
  .filter(([path]) => EARLIER.some((id) => path === `../${id}/index.ts`))
  .flatMap(([, m]) => m.default.vocab);

/** Words that A2.1 deliberately revisits in a new function. Everything else must be new vocabulary. */
const REVIEW_WORDS = new Set<string>([]);

/** Compare by the bare word, so "le stage" and "stage" count as the same card. */
const key = (de: string) => de.replace(/^(le|la|l’|les|un|une|des) ?/i, '').toLowerCase();

describe('French A2.1 specifics', () => {
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
    const earlier = new Set(earlierVocab.map((v) => key(v.de)));
    const repeated = content.vocab
      .map((v) => key(v.de))
      .filter((k) => earlier.has(k) && !REVIEW_WORDS.has(k));
    expect(repeated).toEqual([]);
  });

  it('does not teach a word twice inside A2.1', () => {
    const all = content.vocab.map((v) => key(v.de));
    expect(all.filter((k, i) => all.indexOf(k) !== i && !REVIEW_WORDS.has(k))).toEqual([]);
  });
});
