import { describe, expect, it } from 'vitest';
import {
  cleanQuery,
  cropsWell,
  isBlocked,
  isCandidate,
  pickHit,
  queryFor,
  sortManifest,
  tagNames,
  toEntry,
  type PixabayHit,
  type VocabLike,
} from './lib';

const hit = (over: Partial<PixabayHit> = {}): PixabayHit => ({
  id: 1,
  pageURL: 'https://pixabay.com/photos/apples-red-1/',
  type: 'photo',
  tags: 'apples, fruit, red',
  webformatURL: 'https://cdn.pixabay.com/photo/a_640.jpg',
  imageWidth: 3000,
  imageHeight: 2000,
  user: 'someone',
  user_id: 7,
  ...over,
});
const noun = (over: Partial<VocabLike> = {}): VocabLike => ({
  id: 'u-apfel',
  de: 'Apfel',
  en: 'apple',
  article: 'der',
  emoji: '🍎',
  ...over,
});

describe('cleanQuery', () => {
  it.each([
    ['apple', 'apple'],
    ['the apple', 'apple'],
    ['bread roll', 'bread roll'],
    ['wardrobe / closet', 'wardrobe'],
    ['sofa (couch)', 'sofa'],
    ['tea, black', 'tea'],
    ['a very long meaning here', null],
    ['', null],
  ])('%s → %s', (en, expected) => {
    expect(cleanQuery(en)).toBe(expected);
  });
});

describe('isCandidate', () => {
  it('accepts a concrete noun with an emoji', () => {
    expect(isCandidate(noun())).toBe(true);
  });
  it('skips words without an article (verbs, adjectives, phrases) or without an emoji', () => {
    expect(isCandidate(noun({ article: undefined }))).toBe(false);
    expect(isCandidate(noun({ emoji: undefined }))).toBe(false);
  });
  it('skips abstract nouns and long phrases', () => {
    expect(isCandidate(noun({ de: 'Freiheit', en: 'freedom' }))).toBe(false);
    expect(isCandidate(noun({ de: 'Gesundheit', en: 'health' }))).toBe(false);
    expect(isCandidate(noun({ de: 'der große rote runde Ball', en: 'ball' }))).toBe(false);
  });
});

describe('queryFor', () => {
  it('uses the English meaning, an override query, or nothing for a skipped word', () => {
    expect(queryFor(noun())).toBe('apple');
    expect(queryFor(noun(), { 'u-apfel': { query: 'red apple' } })).toBe('red apple');
    expect(queryFor(noun(), { 'u-apfel': { skip: true } })).toBeNull();
  });
});

describe('tagNames', () => {
  it('matches the whole tag, singular or plural, and nothing that merely contains the word', () => {
    expect(tagNames('apples', 'apple')).toBe(true);
    expect(tagNames('strawberries', 'strawberry')).toBe(true);
    expect(tagNames('train station', 'train station')).toBe(true);
    expect(tagNames('beer barrel', 'beer')).toBe(false);
    expect(tagNames('cherry tomato', 'tomato')).toBe(false);
  });
});

describe('pickHit', () => {
  it('takes the first popular photo whose leading tags name the word', () => {
    const first = hit({ id: 1, tags: 'apples, fruit' });
    const second = hit({ id: 2, tags: 'apple, tree' });
    expect(pickHit([first, second], 'apple')).toEqual({ hit: first });
  });
  it('reports why nothing was taken', () => {
    expect(pickHit([], 'apple')).toEqual({ reason: 'no-results' });
    expect(pickHit([hit({ tags: 'tree, garden, fruit, apple' })], 'apple')).toEqual({
      reason: 'no-subject-match',
    });
    expect(pickHit([hit({ type: 'illustration' })], 'apple')).toEqual({
      reason: 'no-subject-match',
    });
    expect(pickHit([hit({ tags: 'apple, woman, smile' })], 'apple')).toEqual({
      reason: 'only-people',
    });
  });
  it('skips people and panoramas but keeps looking', () => {
    const people = hit({ id: 1, tags: 'apple, girl' });
    const panorama = hit({ id: 2, imageWidth: 6000, imageHeight: 1000 });
    const good = hit({ id: 3 });
    expect(pickHit([people, panorama, good], 'apple')).toEqual({ hit: good });
  });
});

describe('filters', () => {
  it('blocks people, brands and graphics only among the leading tags', () => {
    expect(isBlocked(hit({ tags: 'apple, logo' }))).toBe(true);
    expect(isBlocked(hit({ tags: 'apple, fruit, red, a, b, c, d, e, people' }))).toBe(false);
  });
  it('accepts roughly square crops', () => {
    expect(cropsWell(hit({ imageWidth: 4000, imageHeight: 3000 }))).toBe(true);
    expect(cropsWell(hit({ imageWidth: 4000, imageHeight: 1000 }))).toBe(false);
    expect(cropsWell(hit({ imageWidth: 1000, imageHeight: 4000 }))).toBe(false);
  });
});

describe('manifest', () => {
  it('stores the page path, the author and the author id', () => {
    expect(toEntry(hit())).toEqual(['apples-red-1/', 'someone', 7]);
  });
  it('is written in a stable order', () => {
    const m = sortManifest({ b: ['x/', 'u', 1], a: ['y/', 'v', 2] });
    expect(Object.keys(m)).toEqual(['a', 'b']);
  });
});
