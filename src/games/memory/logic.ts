import { createRng, shuffle } from '@/lib/rng';

export interface MemoryCard {
  uid: string;
  pairId: string;
  text: string;
  side: 'a' | 'b';
}

export interface MemoryColumns {
  /** the `a` side of every pair (the German word), shuffled */
  left: MemoryCard[];
  /** the `b` side of every pair (its match), shuffled independently of `left` */
  right: MemoryCard[];
}

/** Both columns are always fully visible; each is shuffled on its own so rows never give the answer away. */
export function buildColumns(
  pairs: readonly { id: string; a: string; b: string }[],
  seed: number,
): MemoryColumns {
  const rng = createRng(seed);
  const card = (p: (typeof pairs)[number], side: 'a' | 'b'): MemoryCard => ({
    uid: `${p.id}:${side}`,
    pairId: p.id,
    text: p[side],
    side,
  });
  const left = shuffle(
    pairs.map((p) => card(p, 'a')),
    rng,
  );
  let right = shuffle(
    pairs.map((p) => card(p, 'b')),
    rng,
  );
  // never hand out a board whose rows already line up
  if (right.every((c, i) => c.pairId === left[i]!.pairId)) right = [...right.slice(1), right[0]!];
  return { left, right };
}

export function isMatch(a: MemoryCard, b: MemoryCard): boolean {
  return a.uid !== b.uid && a.pairId === b.pairId;
}
