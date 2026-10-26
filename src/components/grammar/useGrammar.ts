import { useEffect, useState } from 'react';
import { loadGrammar, type GrammarModule } from '@/content/grammar/load';

let loaded: GrammarModule | undefined;

/** The grammar lessons once their chunk has loaded (`undefined` until then). */
export function useGrammar(): GrammarModule | undefined {
  const [grammar, setGrammar] = useState(loaded);
  useEffect(() => {
    if (loaded) return;
    let live = true;
    void loadGrammar().then((m) => {
      loaded = m;
      if (live) setGrammar(m);
    });
    return () => {
      live = false;
    };
  }, []);
  return grammar;
}
