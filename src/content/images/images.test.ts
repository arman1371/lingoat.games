import { LEVELS } from '../levels';
import { authorPageUrl, imageUrl, loadManifest, photoPageUrl, PIXABAY_PHOTO_PREFIX } from '.';

describe('word photo manifest', () => {
  it('only names vocabulary that exists and has an article and an emoji', async () => {
    const manifest = await loadManifest();
    const vocab = new Map(
      (await Promise.all(LEVELS.filter((l) => l.load).map((l) => l.load!()))).flatMap((m) =>
        m.default.vocab.map((v) => [v.id, v] as const),
      ),
    );
    for (const id of Object.keys(manifest)) {
      const v = vocab.get(id);
      expect(v, `${id} is not a vocabulary id`).toBeDefined();
      expect(v?.article && v.emoji, `${id} should be a noun with an emoji`).toBeTruthy();
    }
  });

  it('stores a Pixabay page path, an author and an author id for every photo', async () => {
    for (const [id, [page, author, authorId]] of Object.entries(await loadManifest())) {
      expect(page, id).toMatch(/^[\w%.-]+-\d+\/$/);
      expect(author, id).not.toBe('');
      expect(authorId, id).toBeGreaterThan(0);
    }
  });

  it('builds our own image URL and the Pixabay links', () => {
    expect(imageUrl('a1-1-hallo-x')).toBe('/img/a1-1-hallo-x.webp');
    expect(photoPageUrl(['apples-1/', 'Jane Doe', 5])).toBe(`${PIXABAY_PHOTO_PREFIX}apples-1/`);
    expect(authorPageUrl(['apples-1/', 'Jane Doe', 5])).toBe(
      'https://pixabay.com/users/Jane%20Doe-5/',
    );
  });
});
