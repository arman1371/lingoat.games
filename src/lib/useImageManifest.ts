import { createContext, useContext, useEffect, useState } from 'react';
import { loadManifest, type Manifest } from '@/content/images';

/** Tests and previews can provide a manifest directly instead of loading the generated one. */
export const ImageManifestContext = createContext<Manifest | undefined>(undefined);

let loading: Promise<Manifest> | undefined;
let loaded: Manifest | undefined;

/** Starts loading the manifest (once); the play page calls it so it is ready before the first card. */
export function preloadImageManifest(): Promise<Manifest> {
  loading ??= loadManifest().then(
    (m) => (loaded = m),
    () => {
      loading = undefined; // try again on the next use
      return {}; // no photos: every word keeps its emoji
    },
  );
  return loading;
}

/** The word photo manifest, or null while it loads. */
export function useImageManifest(): Manifest | null {
  const provided = useContext(ImageManifestContext);
  const [manifest, setManifest] = useState<Manifest | null>(loaded ?? null);
  useEffect(() => {
    if (provided || loaded) return;
    let cancelled = false;
    void preloadImageManifest().then((m) => {
      if (!cancelled) setManifest(m);
    });
    return () => {
      cancelled = true;
    };
  }, [provided]);
  return provided ?? manifest;
}
