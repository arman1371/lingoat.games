import { useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { UmlautKeyboard } from '@/components/ui/UmlautKeyboard';
import { WordImage } from '@/components/WordImage';
import { checkAnswer, checkNumeric, type AnswerVerdict } from '@/lib/answer-check';
import { ttsSupported } from '@/lib/tts';
import { t } from '@/i18n';
import { FeedbackFooter, GameFrame, verdictTitle } from '../shared/GameFrame';
import { useAutoSpeak } from '../shared/useAutoSpeak';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';
import { scrambleForItem } from './logic';

export function Spell({ config, seed, onFinish }: GameProps<'spell'>) {
  const seq = useSequence(config.items, seed, onFinish);
  const item = seq.item;
  const [typed, setTyped] = useState('');
  const [picked, setPicked] = useState<number[]>([]); // tile ids in the order chosen
  const [verdict, setVerdict] = useState<AnswerVerdict | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const tiles = useMemo(
    () => scrambleForItem(item.answer, seed, item.id),
    [item.answer, item.id, seed],
  );
  useAutoSpeak(item.speak, item.mode === 'dictation');

  const current =
    item.mode === 'unscramble'
      ? picked.map((id) => tiles.find((t) => t.id === id)!.ch).join('')
      : typed;

  const check = () => {
    if (verdict) return;
    const v = item.numeric ? checkNumeric(current, item.answer) : checkAnswer(current, item.answer);
    setVerdict(v);
    seq.answer(v !== 'wrong');
  };
  const next = () => {
    setTyped('');
    setPicked([]);
    setVerdict(null);
    seq.advance();
  };
  const insert = (ch: string) => {
    setTyped((v) => v + ch);
    inputRef.current?.focus();
  };

  const canSpeak = ttsSupported();

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title="Spell it"
      footer={
        verdict ? (
          <FeedbackFooter
            kind={verdict}
            title={verdictTitle(verdict)}
            detail={
              verdict !== 'correct' ? (
                <p>
                  Correct spelling: <strong>{item.answer}</strong>
                </p>
              ) : null
            }
            isLast={seq.isLast}
            onNext={next}
          />
        ) : (
          <Button size="lg" block onClick={check} disabled={current.length === 0}>
            {t('common.check')}
          </Button>
        )
      }
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <WordImage id={item.id} emoji={item.emoji} />
        <h2 className="text-2xl font-extrabold text-ink" data-testid="prompt">
          {item.mode === 'dictation' && canSpeak ? 'Type what you hear' : item.hint}
        </h2>
        {item.mode === 'dictation' && item.speak ? (
          <SpeakButton text={item.speak} size="lg" label="Play the audio again" />
        ) : null}
        {item.mode === 'dictation' && !canSpeak ? (
          <p className="rounded-xl bg-warning-soft p-3 text-ink" data-testid="tts-fallback">
            {t('common.audioUnavailable')} <strong>{item.speak}</strong>
          </p>
        ) : null}
      </div>

      {item.mode === 'unscramble' ? (
        <div className="flex flex-col items-center gap-4">
          <div
            aria-label="Your word"
            data-testid="answer-line"
            className="flex min-h-16 w-full flex-wrap items-center justify-center gap-2 rounded-2xl bg-sunken p-3"
          >
            {picked.map((id) => {
              const tile = tiles.find((t) => t.id === id)!;
              return (
                <button
                  key={id}
                  type="button"
                  disabled={verdict !== null}
                  aria-label={`Remove ${tile.ch}`}
                  onClick={() => setPicked((p) => p.filter((x) => x !== id))}
                  className="press h-12 min-w-12 rounded-xl px-3 font-display text-xl font-bold border-2 border-line bg-surface text-ink shadow-[0_3px_0_var(--border)]"
                >
                  {tile.ch}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Letters">
            {tiles.map((tile) => (
              <button
                key={tile.id}
                type="button"
                disabled={picked.includes(tile.id) || verdict !== null}
                onClick={() => setPicked((p) => [...p, tile.id])}
                className="press h-12 min-w-12 rounded-xl px-3 font-display text-xl font-bold border-2 border-line bg-surface text-ink shadow-[0_3px_0_var(--border)] disabled:opacity-30"
              >
                {tile.ch}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (current.length > 0) check();
          }}
        >
          <input
            ref={inputRef}
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            disabled={verdict !== null}
            aria-label="Your answer"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            inputMode={item.numeric ? 'numeric' : 'text'}
            className="min-h-14 w-full max-w-md rounded-2xl border-2 border-line bg-surface px-4 text-center text-2xl font-bold text-ink"
          />
          {!item.numeric ? <UmlautKeyboard onInsert={insert} /> : null}
        </form>
      )}
    </GameFrame>
  );
}

export default Spell;
