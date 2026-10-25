/**
 * Word photos (Pixabay, downloaded by `scripts/images`). The manifest in git maps a vocabulary id to
 * `[page, author, authorId]`; the image itself is `/img/<id>.webp`, served from our own storage.
 * No React or browser APIs here (see CLAUDE.md).
 */
export type ManifestEntry = readonly [page: string, author: string, authorId: number];
export type Manifest = Readonly<Record<string, ManifestEntry>>;

export const PIXABAY_PHOTO_PREFIX = 'https://pixabay.com/photos/';

export const imageUrl = (id: string): string => `/img/${id}.webp`;
export const photoPageUrl = (entry: ManifestEntry): string => `${PIXABAY_PHOTO_PREFIX}${entry[0]}`;
export const authorPageUrl = (entry: ManifestEntry): string =>
  `https://pixabay.com/users/${encodeURIComponent(entry[1])}-${entry[2]}/`;

/** Loaded on first use so the 20-odd KB of credits never sit in the main bundle. */
export const loadManifest = async (): Promise<Manifest> =>
  (await import('./manifest.json')).default as unknown as Manifest;
