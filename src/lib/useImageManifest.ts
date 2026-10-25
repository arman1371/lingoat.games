import { createContext, useContext, useEffect, useState } from 'react';
import { loadManifest, type Manifest } from '@/content/images';

/** Tests and previews can provide a manifest directly instead of loading the generated one. */
export const ImageManifestContext = createContext<Manifest | undefined>(undefined);

let loading: Promise<Manifest> | undefined;
let loaded: Manifest | undefined;

/** The word photo manifest, or null while it loads (or if it cannot be loaded: the emoji then stays). */
export function useImageManifest(): Manifest | null {
  const provided = useContext(ImageManifestContext);
  const [manifest, setManifest] = useState<Manifest | null>(loaded ?? null);
  useEffect(() => {
    if (provided || loaded) return;
    let cancelled = false;
    loading ??= loadManifest();
    loading
      .then((m) => {
        loaded = m;
        if (!cancelled) setManifest(m);
      })
      .catch(() => {
        loading = undefined; // try again on the next mount
      });
    return () => {
      cancelled = true;
    };
  }, [provided]);
  return provided ?? manifest;
}
