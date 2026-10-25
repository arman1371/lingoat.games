import { Icon } from '@/components/ui/Icon';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { GameResult } from '@/lib/scoring';
import { useAnswerSound } from '../shared/useAnswerSound';
import type { GameProps } from '../types';
import { buildDeck, isMatch } from './logic';

const MISMATCH_DELAY_MS = 800;

export function Memory({ config, seed, onFinish }: GameProps<'memory'>) {
  const deck = useMemo(() => buildDeck(config.pairs, seed), [config.pairs, seed]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<ReadonlySet<string>>(new Set());
  const [moves, setMoves] = useState(0);
  const [note, setNote] = useState('Find the matching pairs.');
  const mistakes = useRef(new Set<string>());
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finished = useRef(false);
  const playAnswerSound = useAnswerSound();

  useEffect(() => () => void (timer.current && clearTimeout(timer.current)), []);

  useEffect(() => {
    if (matched.size !== config.pairs.length || finished.current) return;
    finished.current = true;
    const played = config.pairs.map((p) => p.id);
    const bad = played.filter((id) => mistakes.current.has(id));
    const result: GameResult = {
      correct: played.length - bad.length,
      total: played.length,
      played,
      mistakes: bad,
    };
    const id = setTimeout(() => onFinish(result), 600);
    return () => clearTimeout(id);
  }, [matched, config.pairs, onFinish]);

  const flip = (uid: string) => {
    const card = deck.find((c) => c.uid === uid)!;
    if (matched.has(card.pairId) || flipped.includes(uid) || flipped.length >= 2) return;
    const next = [...flipped, uid];
    setFlipped(next);
    if (next.length < 2) return;

    setMoves((m) => m + 1);
    const [first, second] = next.map((u) => deck.find((c) => c.uid === u)!) as [
      typeof card,
      typeof card,
    ];
    const matchFound = isMatch(first, second);
    playAnswerSound(matchFound);
    if (matchFound) {
      setMatched((m) => new Set(m).add(first.pairId));
      setFlipped([]);
      setNote(
        `Match! ${first.side === 'a' ? first.text : second.text} = ${first.side === 'a' ? second.text : first.text}`,
      );
    } else {
      mistakes.current.add(first.pairId).add(second.pairId);
      setNote('Not a pair – try again.');
      timer.current = setTimeout(() => setFlipped([]), MISMATCH_DELAY_MS);
    }
  };

  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col gap-4" aria-label="Memory">
      <div className="flex items-center justify-between text-sm font-bold text-muted">
        <span data-testid="pairs-found">
          {matched.size} / {config.pairs.length} pairs
        </span>
        <span data-testid="moves">{moves} moves</span>
      </div>
      <p role="status" aria-live="polite" className="min-h-6 text-center font-bold text-ink">
        {note}
      </p>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {deck.map((card, i) => {
          const isMatched = matched.has(card.pairId);
          const faceUp = isMatched || flipped.includes(card.uid);
          return (
            <button
              key={card.uid}
              type="button"
              data-testid="memory-card"
              data-state={isMatched ? 'matched' : faceUp ? 'up' : 'down'}
              aria-label={
                faceUp
                  ? `Card ${i + 1}: ${card.text}${isMatched ? ' (matched)' : ''}`
                  : `Card ${i + 1}, face down`
              }
              aria-disabled={isMatched}
              onClick={() => flip(card.uid)}
              className={`press flex min-h-24 flex-col items-center justify-center gap-1 rounded-2xl border-2 p-2 text-center text-base font-bold ${
                isMatched
                  ? 'border-success bg-success-soft text-on-success-soft shadow-[0_3px_0_var(--success-soft-border)]'
                  : faceUp
                    ? 'border-line bg-surface text-ink shadow-[0_4px_0_var(--border)]'
                    : 'border-primary bg-primary text-on-primary shadow-[0_4px_0_var(--primary-edge)]'
              }`}
            >
              {isMatched ? <Icon name="check-circle" size={24} /> : null}
              {faceUp ? card.text : <Icon name="lightbulb" size={28} />}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Memory;
