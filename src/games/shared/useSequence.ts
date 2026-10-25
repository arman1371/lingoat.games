import { useCallback, useMemo, useRef, useState } from 'react';
import { createRng, shuffle } from '@/lib/rng';
import type { GameResult } from '@/lib/scoring';
import { useAnswerSound } from './useAnswerSound';
import { useReportItem } from './useReportItem';

export type Phase = 'answering' | 'feedback';

/**
 * Drives "one item after another" games: shuffles items by seed, records the first verdict per item
 * and reports a GameResult when the last item is done. Every verdict plays the right/wrong sound
 * unless `sounds: false` (games that judge differently play their own cues).
 */
export function useSequence<T extends { id: string }>(
  items: readonly T[],
  seed: number,
  onFinish: (result: GameResult) => void,
  { shuffleItems = true, sounds = true }: { shuffleItems?: boolean; sounds?: boolean } = {},
) {
  const playAnswerSound = useAnswerSound();
  const order = useMemo(
    () => (shuffleItems ? shuffle(items, createRng(seed)) : [...items]),
    [items, seed, shuffleItems],
  );
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('answering');
  const verdicts = useRef(new Map<string, boolean>());
  const finished = useRef(false);

  const item = order[Math.min(index, order.length - 1)] as T;
  const isLast = index >= order.length - 1;
  useReportItem(item.id);

  const record = useCallback(
    (correct: boolean) => {
      if (!verdicts.current.has(item.id)) verdicts.current.set(item.id, correct);
    },
    [item.id],
  );

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    const played = [...verdicts.current.keys()];
    const mistakes = played.filter((id) => !verdicts.current.get(id));
    onFinish({ correct: played.length - mistakes.length, total: order.length, played, mistakes });
  }, [onFinish, order.length]);

  const advance = useCallback(() => {
    if (isLast) finish();
    else {
      setIndex((i) => i + 1);
      setPhase('answering');
    }
  }, [isLast, finish]);

  /** Record a verdict and show feedback (the player presses Continue). */
  const answer = useCallback(
    (correct: boolean) => {
      if (phase !== 'answering') return;
      if (sounds) playAnswerSound(correct);
      record(correct);
      setPhase('feedback');
    },
    [phase, record, sounds, playAnswerSound],
  );

  /** Record a verdict and move straight on (flashcards, sorting, blitz-style games). */
  const answerAndAdvance = useCallback(
    (correct: boolean) => {
      if (sounds) playAnswerSound(correct);
      record(correct);
      advance();
    },
    [record, advance, sounds, playAnswerSound],
  );

  return { item, index, total: order.length, phase, isLast, answer, advance, answerAndAdvance };
}
