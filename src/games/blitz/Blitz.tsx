import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLanguageMeta } from '@/app/language';
import { Button } from '@/components/ui/Button';
import { createRng, shuffle } from '@/lib/rng';
import { SentenceNouns } from '../shared/SentenceNouns';
import { useAnswerSound } from '../shared/useAnswerSound';
import type { GameProps } from '../types';

export function Blitz({ config, seed, onFinish }: GameProps<'blitz'>) {
  const order = useMemo(
    () => shuffle(config.statements, createRng(seed)),
    [config.statements, seed],
  );
  const language = useLanguageMeta();
  const [started, setStarted] = useState(false);
  const [relaxed, setRelaxed] = useState(false);
  const [index, setIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(config.seconds);
  const [combo, setCombo] = useState(0);
  const [flash, setFlash] = useState<{ ok: boolean; text: string } | null>(null);
  const verdicts = useRef(new Map<string, boolean>());
  const bestCombo = useRef(0);
  const finished = useRef(false);
  const playAnswerSound = useAnswerSound();

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    const played = [...verdicts.current.keys()];
    const mistakes = played.filter((id) => !verdicts.current.get(id));
    onFinish({
      correct: played.length - mistakes.length,
      total: played.length || order.length,
      played,
      mistakes,
      bonusXp: bestCombo.current * 2,
    });
  }, [onFinish, order.length]);

  useEffect(() => {
    if (!started || relaxed) return;
    if (secondsLeft <= 0) {
      finish();
      return;
    }
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [started, relaxed, secondsLeft, finish]);

  if (!started) {
    return (
      <section
        className="mx-auto flex max-w-md flex-col items-center gap-5 text-center"
        aria-label="Blitz"
      >
        <span aria-hidden="true" className="text-6xl">
          ⚡
        </span>
        <h2 className="text-3xl font-extrabold text-ink">Ready for a speed round?</h2>
        <p className="text-muted">
          Is the {language.name} sentence correct? Answer as many as you can in {config.seconds}{' '}
          seconds. Keep a combo going for bonus XP!
        </p>
        <label className="flex min-h-11 items-center gap-3 font-bold text-ink">
          <input
            type="checkbox"
            checked={relaxed}
            onChange={(e) => setRelaxed(e.target.checked)}
            className="h-5 w-5"
          />
          Relaxed mode (no timer)
        </label>
        <Button size="lg" onClick={() => setStarted(true)} data-testid="blitz-start">
          Start
        </Button>
      </section>
    );
  }

  const statement = order[index]!;
  const answer = (said: boolean) => {
    if (finished.current) return;
    const ok = said === statement.isTrue;
    playAnswerSound(ok);
    verdicts.current.set(statement.id, ok);
    const newCombo = ok ? combo + 1 : 0;
    bestCombo.current = Math.max(bestCombo.current, newCombo);
    setCombo(newCombo);
    setFlash({
      ok,
      text: ok
        ? 'Richtig!'
        : `${statement.isTrue ? 'It was correct' : 'It was wrong'}${statement.explanation ? ` – ${statement.explanation}` : ''}`,
    });
    if (index + 1 >= order.length) finish();
    else setIndex(index + 1);
  };

  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col gap-5" aria-label="Blitz">
      <div className="flex items-center justify-between font-extrabold text-ink">
        <span data-testid="timer" aria-live="off">
          {relaxed ? '∞' : `⏱ ${secondsLeft}s`}
        </span>
        <span data-testid="combo">🔥 Combo {combo}</span>
        <span data-testid="counter">
          {index + 1} / {order.length}
        </span>
      </div>
      <div className="flex min-h-48 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-line bg-surface p-6 text-center shadow-[0_6px_0_var(--border)]">
        <p className="text-3xl font-extrabold text-ink" data-testid="prompt">
          {statement.text}
        </p>
        <SentenceNouns text={statement.text} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="danger" size="lg" icon="✗" onClick={() => answer(false)}>
          Wrong
        </Button>
        <Button variant="success" size="lg" icon="✓" onClick={() => answer(true)}>
          Correct
        </Button>
      </div>
      <p
        role="status"
        aria-live="polite"
        data-testid="flash"
        className={`min-h-12 text-center font-bold ${flash?.ok ? 'text-success' : 'text-danger'}`}
      >
        {flash?.text}
      </p>
    </section>
  );
}

export default Blitz;
