import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { WordImage } from '@/components/WordImage';
import type { GameResult } from '@/lib/scoring';
import { t } from '@/i18n';
import { mistakeWhy } from '../shared/hints';
import { MistakeHint } from '../shared/MistakeHint';
import { useAnswerSound } from '../shared/useAnswerSound';
import type { GameProps } from '../types';
import { buildColumns, isMatch, type MemoryCard } from './logic';

const PICTOGRAPH = /\p{Extended_Pictographic}/u;

/** A wrong attempt stays on screen (with its hint) until the learner taps again. */
interface Miss {
  uids: readonly [string, string];
  why?: string;
}

export function Memory({ config, seed, onFinish }: GameProps<'memory'>) {
  const columns = useMemo(() => buildColumns(config.pairs, seed), [config.pairs, seed]);
  // pairs whose match is a picture (an emoji) by their German word: that picture becomes the photo
  const pictured = useMemo(
    () => new Map(config.pairs.filter((p) => PICTOGRAPH.test(p.b)).map((p) => [p.id, p.a])),
    [config.pairs],
  );
  const [selected, setSelected] = useState<MemoryCard | null>(null);
  const [matched, setMatched] = useState<ReadonlySet<string>>(new Set());
  const [miss, setMiss] = useState<Miss | null>(null);
  const [moves, setMoves] = useState(0);
  const [note, setNote] = useState(t('memory.start'));
  const mistakes = useRef(new Set<string>());
  const finished = useRef(false);
  const playAnswerSound = useAnswerSound();

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

  const pick = (card: MemoryCard) => {
    if (matched.has(card.pairId)) return;
    setMiss(null);
    // first tap, a tap on the same column (change of mind) or on the selected card (deselect)
    if (!selected || selected.side === card.side) {
      const next = selected?.uid === card.uid ? null : card;
      setSelected(next);
      setNote(next ? t('memory.pickMatch', { word: next.text }) : t('memory.start'));
      return;
    }

    setMoves((m) => m + 1);
    setSelected(null);
    const correct = isMatch(selected, card);
    playAnswerSound(correct);
    if (correct) {
      const [a, b] = selected.side === 'a' ? [selected, card] : [card, selected];
      setMatched((m) => new Set(m).add(card.pairId));
      setNote(t('memory.match', { a: a.text, b: b.text }));
      return;
    }
    mistakes.current.add(selected.pairId).add(card.pairId);
    const expected = [...columns.left, ...columns.right].find(
      (c) => c.pairId === selected.pairId && c.side !== selected.side,
    )!;
    setMiss({
      uids: [selected.uid, card.uid],
      why: mistakeWhy({ answer: expected.text }, card.text),
    });
    setNote(t('memory.miss'));
  };

  return (
    <section
      className="mx-auto flex w-full max-w-2xl flex-col gap-4"
      aria-label={t('memory.label')}
    >
      <div className="flex items-center justify-between text-sm font-bold text-muted">
        <span data-testid="pairs-found">
          {matched.size} / {config.pairs.length} pairs
        </span>
        <span data-testid="moves">{moves} moves</span>
      </div>
      <p role="status" aria-live="polite" className="min-h-6 text-center font-bold text-ink">
        {note}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:gap-6">
        <Column
          title={t('memory.words')}
          cards={columns.left}
          selected={selected}
          matched={matched}
          miss={miss}
          pictured={pictured}
          onPick={pick}
        />
        <Column
          title={t('memory.matches')}
          cards={columns.right}
          selected={selected}
          matched={matched}
          miss={miss}
          pictured={pictured}
          onPick={pick}
        />
      </div>
      {miss ? <MistakeHint why={miss.why} /> : null}
    </section>
  );
}

interface ColumnProps {
  title: string;
  cards: readonly MemoryCard[];
  selected: MemoryCard | null;
  matched: ReadonlySet<string>;
  miss: Miss | null;
  /** pair id → German word, for pairs whose match is a picture */
  pictured: ReadonlyMap<string, string>;
  onPick: (card: MemoryCard) => void;
}

function Column({ title, cards, selected, matched, miss, pictured, onPick }: ColumnProps) {
  const headingId = useId();
  return (
    <div role="group" aria-labelledby={headingId} className="flex flex-col gap-3">
      <p
        id={headingId}
        className="text-center text-xs font-extrabold uppercase tracking-wide text-muted"
      >
        {title}
      </p>
      {cards.map((card) => {
        const isMatched = matched.has(card.pairId);
        const isSelected = selected?.uid === card.uid;
        const isMiss = miss?.uids.includes(card.uid) ?? false;
        const state = isMatched ? 'matched' : isSelected ? 'selected' : isMiss ? 'wrong' : 'idle';
        // a word gets the photo of its thing; a picture (emoji) match is swapped for that photo
        const word = card.side === 'a' ? card.text : pictured.get(card.pairId);
        const swapped = card.side === 'b' && word !== undefined;
        const wordPhoto = card.side === 'a' && !pictured.has(card.pairId);
        return (
          <button
            key={card.uid}
            type="button"
            data-testid="memory-card"
            data-state={state}
            aria-pressed={isMatched ? undefined : isSelected}
            aria-disabled={isMatched}
            // the photo has no text of its own: the emoji it replaces names the card
            aria-label={
              swapped
                ? `${card.text}${isMatched ? ', matched' : ''}${isMiss ? ', not a pair' : ''}`
                : undefined
            }
            onClick={() => onPick(card)}
            className={`press flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl border-2 p-2 text-center text-base font-bold wrap-anywhere ${
              isMatched
                ? 'border-success bg-success-soft text-on-success-soft shadow-[0_3px_0_var(--success-soft-border)]'
                : isSelected
                  ? 'border-primary bg-primary-soft text-on-primary-soft shadow-[0_4px_0_var(--primary-soft-border)]'
                  : isMiss
                    ? 'anim-shake border-danger bg-danger-soft text-on-danger-soft shadow-[0_4px_0_var(--danger-soft-border)]'
                    : 'border-line bg-surface text-ink shadow-[0_4px_0_var(--border)] hover:bg-surface-2'
            }`}
          >
            {isMatched ? <Icon name="check-circle" size={22} /> : null}
            {isMiss ? <Icon name="x-circle" size={22} /> : null}
            {wordPhoto ? <WordImage id={card.pairId} text={card.text} size="xs" /> : null}
            {swapped ? (
              <WordImage id={card.pairId} text={word} emoji={card.text} size="sm" />
            ) : (
              <span>{card.text}</span>
            )}
            {isMatched && !swapped ? <span className="sr-only">, matched</span> : null}
            {isMiss && !swapped ? <span className="sr-only">, not a pair</span> : null}
          </button>
        );
      })}
    </div>
  );
}

export default Memory;
