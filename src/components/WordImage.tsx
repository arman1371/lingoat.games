import { useState } from 'react';
import { imageUrl } from '@/content/images';
import { useImageManifest } from '@/lib/useImageManifest';

interface Props {
  /** Vocabulary id; items whose id is in the photo manifest get a photo. */
  id: string;
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
export function WordImage({ id, emoji, alt = '' }: Props) {
  const manifest = useImageManifest();
  return (
    <WordTile
      key={id}
      id={id}
      emoji={emoji}
      alt={alt}
      hasPhoto={Boolean(manifest?.[id])}
      manifestReady={manifest !== null}
    />
  );
}

interface TileProps extends Props {
  alt: string;
  hasPhoto: boolean;
  manifestReady: boolean;
}

function WordTile({ id, emoji, alt, hasPhoto, manifestReady }: TileProps) {
  const [state, setState] = useState<'pending' | 'loaded' | 'failed'>('pending');
  const photo = hasPhoto && state !== 'failed';
  if (!emoji && !photo) return null;
  const showEmoji = manifestReady && !photo;
  return (
    <div className="relative grid size-40 shrink-0 place-items-center overflow-hidden rounded-3xl border-2 border-line bg-primary-soft">
      {emoji ? (
        <span
          aria-hidden="true"
          className={`text-7xl ${showEmoji ? 'opacity-100' : 'opacity-0'}`}
          data-testid="emoji"
        >
          {emoji}
        </span>
      ) : null}
      {photo ? (
        <img
          src={imageUrl(id)}
          alt={alt}
          width={160}
          height={160}
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
