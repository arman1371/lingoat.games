import { createContext, useContext, useState } from 'react';
import { imageUrl } from '@/content/images';
import { photoIdFor, type WordPhotoIndex } from '@/lib/wordPhotos';
import { useImageManifest } from '@/lib/useImageManifest';

/**
 * Vocabulary of the loaded levels by German spelling. PlayPage provides it; games whose items are
 * not vocabulary entries (sort it, market) use it to find the photo of a word. Without it only
 * items whose own id has a photo show one.
 */
export const WordPhotoIndexContext = createContext<WordPhotoIndex | undefined>(undefined);

/** Penpot "Word Image" at 160 px, plus the small tiles of the memory board, sort-it card and market row. */
const SIZES = {
  lg: { box: 'size-40 rounded-3xl border-2', emoji: 'text-7xl', px: 160 },
  md: { box: 'size-22 rounded-2xl border-2', emoji: 'text-5xl', px: 88 },
  sm: { box: 'size-13 rounded-xl border', emoji: 'text-3xl', px: 52 },
  xs: { box: 'size-10 rounded-xl border', emoji: 'text-2xl', px: 40 },
} as const;
export type WordImageSize = keyof typeof SIZES;

interface Props {
  /** Vocabulary id; items whose id is in the photo manifest get a photo. */
  id: string;
  /** German spelling, for items that are not vocabulary entries: finds the photo of the same word. */
  text?: string;
  /** `lg` (default) for flashcards, quiz and spelling; smaller tiles sit beside other content. */
  size?: WordImageSize;
  /** Shown while the photo loads and whenever there is no photo or it fails to load. */
  emoji?: string;
  /**
   * Photos are decorative by default, like the emoji they replace: in "What is this?" the alt text
   * would give the answer away. Pass one only where the word is not part of the question.
   */
  alt?: string;
}

/**
 * Square word picture: the Pixabay photo when we have one, the emoji otherwise (Penpot "Word Image").
 * The tile stays empty until it is known which of the two shows, so the emoji never flashes before a photo.
 * The emoji is always in the DOM (hidden with opacity, not removed) so the fallback needs no re-render.
 */
export function WordImage({ id, text, size = 'lg', emoji, alt = '' }: Props) {
  const manifest = useImageManifest();
  const index = useContext(WordPhotoIndexContext);
  const photoId = photoIdFor(manifest, id, text, index);
  return (
    <WordTile
      key={photoId ?? id}
      id={photoId ?? id}
      size={size}
      emoji={emoji}
      alt={alt}
      hasPhoto={photoId !== undefined}
      manifestReady={manifest !== null}
    />
  );
}

interface TileProps {
  id: string;
  size: WordImageSize;
  emoji?: string;
  alt: string;
  hasPhoto: boolean;
  manifestReady: boolean;
}

function WordTile({ id, size, emoji, alt, hasPhoto, manifestReady }: TileProps) {
  const [state, setState] = useState<'pending' | 'loaded' | 'failed'>('pending');
  const photo = hasPhoto && state !== 'failed';
  if (!emoji && !photo) return null;
  const showEmoji = manifestReady && !photo;
  const { box, emoji: emojiSize, px } = SIZES[size];
  return (
    <div
      className={`relative grid shrink-0 place-items-center overflow-hidden border-line bg-primary-soft ${box}`}
    >
      {emoji ? (
        <span
          aria-hidden="true"
          className={`${emojiSize} ${showEmoji ? 'opacity-100' : 'opacity-0'}`}
          data-testid="emoji"
        >
          {emoji}
        </span>
      ) : null}
      {photo ? (
        <img
          src={imageUrl(id)}
          alt={alt}
          width={px}
          height={px}
          loading="lazy"
          decoding="async"
          draggable={false}
          data-testid="word-photo"
          onLoad={() => setState('loaded')}
          onError={() => setState('failed')}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-200 motion-reduce:transition-none ${
            state === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}
    </div>
  );
}
