import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { useAutoSpeak } from '../shared/useAutoSpeak';
import { useSequence } from '../shared/useSequence';
import { GameFrame } from '../shared/GameFrame';
import type { GameProps } from '../types';

export function Flashcards({ config, seed, onFinish }: GameProps<'flashcards'>) {
  const seq = useSequence(config.cards, seed, onFinish, { sounds: false });
  const [flipped, setFlipped] = useState(false);
  const card = seq.item;
  useAutoSpeak(card.speak, !flipped);

  const rate = (knew: boolean) => {
    setFlipped(false);
    seq.answerAndAdvance(knew);
  };

  return (
    <GameFrame index={seq.index} total={seq.total} title="Flashcards">
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        data-testid="card"
        className={`press flex min-h-64 w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-line p-6 text-center shadow-[0_6px_0_var(--border)] ${
          flipped ? 'bg-primary-soft' : 'bg-surface'
        }`}
      >
        {card.emoji ? (
          <span aria-hidden="true" className="text-6xl">
            {card.emoji}
          </span>
        ) : null}
        <span className="font-display text-4xl font-bold text-ink" data-testid="card-text">
          {flipped ? card.back : card.front}
        </span>
        {flipped && card.note ? <span className="text-base text-muted">{card.note}</span> : null}
        {!flipped ? <span className="text-sm font-bold text-muted">Tap to flip</span> : null}
        <span className="sr-only">
          {flipped
            ? ' (card back, press to flip to the front)'
            : ' (card front, press to flip to the answer)'}
        </span>
      </button>

      <div className="flex items-center justify-center gap-3">
        {card.speak ? <SpeakButton text={card.speak} /> : null}
      </div>

      {flipped ? (
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="secondary"
            size="lg"
            icon={<Icon name="refresh" size={18} />}
            onClick={() => rate(false)}
          >
            Again
          </Button>
          <Button
            variant="success"
            size="lg"
            icon={<Icon name="check" size={18} />}
            onClick={() => rate(true)}
          >
            Got it
          </Button>
        </div>
      ) : null}
    </GameFrame>
  );
}

export default Flashcards;
