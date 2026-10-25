import { useMemo, useState } from 'react';
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/Button';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { t } from '@/i18n';
import { FeedbackFooter, GameFrame, verdictTitle } from '../shared/GameFrame';
import { MistakeHint } from '../shared/MistakeHint';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';
import { buildTiles, isCorrectSentence, moveItem, sentenceOf } from './logic';

function AnswerTile({
  id,
  text,
  disabled,
  onRemove,
}: {
  id: string;
  text: string;
  disabled: boolean;
  onRemove: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
    disabled,
  });
  return (
    <button
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      type="button"
      disabled={disabled}
      aria-label={`Remove ${text}`}
      onClick={onRemove}
      style={{ transform: CSS.Transform.toString(transform), transition, touchAction: 'none' }}
      className={`press min-h-12 rounded-xl px-4 text-lg font-bold border-2 border-line bg-surface text-ink shadow-[0_3px_0_var(--border)] ${
        isDragging ? 'z-10 opacity-80' : ''
      }`}
    >
      {text}
    </button>
  );
}

export function Sentence({ config, seed, onFinish }: GameProps<'sentence'>) {
  const seq = useSequence(config.items, seed, onFinish);
  const item = seq.item;
  const tiles = useMemo(() => buildTiles(item.words, item.extra, seed, item.id), [item, seed]);
  const [placed, setPlaced] = useState<string[]>([]);
  const [verdict, setVerdict] = useState<'correct' | 'wrong' | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));

  const textOf = (id: string) => tiles.find((x) => x.id === id)!.text;
  const bank = tiles.filter((x) => !placed.includes(x.id));
  const locked = verdict !== null;

  const check = () => {
    const ok = isCorrectSentence(placed.map(textOf), item.words, item.alsoAccept);
    setVerdict(ok ? 'correct' : 'wrong');
    seq.answer(ok);
  };
  const next = () => {
    setPlaced([]);
    setVerdict(null);
    seq.advance();
  };
  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;
    setPlaced((p) => moveItem(p, p.indexOf(String(active.id)), p.indexOf(String(over.id))));
  };
  const correctSentence = sentenceOf(item.words);

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title="Sentence builder"
      footer={
        verdict ? (
          <FeedbackFooter
            kind={verdict}
            title={verdictTitle(verdict)}
            detail={
              <>
                <p>
                  <strong>{correctSentence}</strong>
                </p>
                {item.explanation ? <p>{item.explanation}</p> : null}
                {verdict === 'wrong' ? <MistakeHint lesson={item.lesson} /> : null}
              </>
            }
            isLast={seq.isLast}
            onNext={next}
          />
        ) : (
          <Button size="lg" block onClick={check} disabled={placed.length === 0}>
            {t('common.check')}
          </Button>
        )
      }
    >
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-muted">Build this sentence</p>
        <h2 className="mt-1 text-2xl font-extrabold text-ink" data-testid="prompt">
          {item.translation}
        </h2>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={placed} strategy={horizontalListSortingStrategy}>
          <div
            data-testid="answer-line"
            aria-label="Your sentence"
            className="flex min-h-20 flex-wrap items-center gap-2 rounded-2xl bg-sunken p-3"
          >
            {placed.length === 0 ? <span className="text-muted">Tap the words below…</span> : null}
            {placed.map((id) => (
              <AnswerTile
                key={id}
                id={id}
                text={textOf(id)}
                disabled={locked}
                onRemove={() => !locked && setPlaced((p) => p.filter((x) => x !== id))}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <div role="group" aria-label="Word bank" className="flex flex-wrap justify-center gap-2">
        {bank.map((tile) => (
          <button
            key={tile.id}
            type="button"
            disabled={locked}
            onClick={() => setPlaced((p) => [...p, tile.id])}
            className="press min-h-12 rounded-xl px-4 text-lg font-bold border-2 border-line bg-surface text-ink shadow-[0_3px_0_var(--border)]"
          >
            {tile.text}
          </button>
        ))}
      </div>
      {locked ? (
        <div className="flex justify-center">
          <SpeakButton text={correctSentence} label="Hear the sentence" />
        </div>
      ) : null}
    </GameFrame>
  );
}

export default Sentence;
