import { buildWordPhotoIndex, photoIdFor } from './wordPhotos';

const vocab = [
  { id: 'u1-apfel', de: 'Apfel', en: 'apple', article: 'der' as const },
  { id: 'u2-apfel', de: 'Apfel', en: 'apple', article: 'der' as const },
  { id: 'u1-bank', de: 'Bank', en: 'bench', article: 'die' as const },
  { id: 'u2-bank', de: 'Bank', en: 'bank', article: 'die' as const },
  { id: 'u1-name', de: 'der Name', en: 'name', article: 'der' as const },
];
const index = buildWordPhotoIndex(vocab);
const manifest = { 'u2-apfel': ['a/', 'x', 1], 'u1-bank': ['b/', 'y', 2] } as const;

describe('buildWordPhotoIndex', () => {
  it('maps the bare and the article spelling, in any case, to every entry of the word', () => {
    expect(index.get('apfel')).toEqual(['u1-apfel', 'u2-apfel']);
    expect(index.get('der apfel')).toEqual(['u1-apfel', 'u2-apfel']);
    expect(index.get('der name')).toEqual(['u1-name']);
  });

  it('leaves out a spelling that means different things', () => {
    expect(index.get('bank')).toBeNull();
    expect(index.get('die bank')).toBeNull();
  });
});

describe('photoIdFor', () => {
  it('prefers the id of the item itself', () => {
    expect(photoIdFor(manifest, 'u2-apfel', 'Birne', index)).toBe('u2-apfel');
  });

  it('finds the photo of the same word in another unit', () => {
    expect(photoIdFor(manifest, 'sh6', 'Apfel', index)).toBe('u2-apfel');
    expect(photoIdFor(manifest, 'sh6', ' der APFEL ', index)).toBe('u2-apfel');
  });

  it('gives no photo to an ambiguous word, an unknown word or while the manifest loads', () => {
    expect(photoIdFor(manifest, 'x', 'Bank', index)).toBeUndefined();
    expect(photoIdFor(manifest, 'x', 'Birne', index)).toBeUndefined();
    expect(photoIdFor(manifest, 'x', 'Apfel')).toBeUndefined();
    expect(photoIdFor(null, 'u2-apfel', 'Apfel', index)).toBeUndefined();
  });
});
