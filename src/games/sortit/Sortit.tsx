import { useState } from 'react';
import {
  DndContext,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { useNumberKeys } from '../shared/useNumberKeys';
import { FeedbackFooter, GameFrame, verdictTitle } from '../shared/GameFrame';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';

type Bucket = GameProps<'sortit'>['config']['buckets'][number];

function BucketTarget({
  bucket,
  index,
  disabled,
  state,
  onChoose,
}: {
  bucket: Bucket;
  index: number;
  disabled: boolean;
  state: 'idle' | 'right' | 'wrong';
  onChoose: () => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: bucket.id, disabled });
  const tone =
    state === 'right'
      ? 'border-success bg-success-soft'
      : state === 'wrong'
        ? 'border-danger bg-danger-soft'
        : isOver
          ? 'border-primary bg-primary-soft text-on-primary-soft'
          : 'border-primary-soft-line bg-primary-soft text-on-primary-soft';
  return (
    <button
      ref={setNodeRef}
      type="button"
      disabled={disabled}
      onClick={onChoose}
      data-testid={`bucket-${bucket.id}`}
      className={`press flex min-h-24 flex-col items-center justify-center gap-1 rounded-2xl border-2 p-3 text-center font-display text-lg font-bold shadow-[0_3px_0_var(--primary-soft-border)] ${tone}`}
    >
      {bucket.emoji ? (
        <span aria-hidden="true" className="text-3xl">
          {bucket.emoji}
        </span>
      ) : null}
      <span>{bucket.label}</span>
      <span aria-hidden="true" className="text-xs font-bold text-muted">
        [{index + 1}]
      </span>
    </button>
  );
}

function DraggableCard({
  id,
  disabled,
  children,
  aside,
}: {
  id: string;
  disabled: boolean;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    disabled,
  });
  // the audio button lives beside (not inside) the draggable element: no nested interactive controls
  return (
    <div className="relative">
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={{
          transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
          touchAction: 'none',
        }}
        className={`relative z-10 flex min-h-32 cursor-grab flex-col items-center justify-center gap-2 rounded-3xl border-2 border-line bg-surface p-5 text-center shadow-[0_4px_0_var(--border)] ${isDragging ? 'opacity-90' : ''}`}
      >
        {children}
      </div>
      {aside ? <div className="absolute right-2 top-2 z-20">{aside}</div> : null}
    </div>
  );
}

export function Sortit({ config, seed, onFinish }: GameProps<'sortit'>) {
  const seq = useSequence(config.items, seed, onFinish);
  const item = seq.item;
  const [chosen, setChosen] = useState<string | null>(null);
  const [flash, setFlash] = useState<string>('');
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));
  const locked = seq.phase === 'feedback';
  const bucketLabel = (id: string) => config.buckets.find((b) => b.id === id)!.label;

  const choose = (bucketId: string) => {
    if (locked) return;
    if (bucketId === item.bucket) {
      setFlash(`✓ ${item.text} → ${bucketLabel(bucketId)}`);
      seq.answerAndAdvance(true);
    } else {
      setChosen(bucketId);
      seq.answer(false);
    }
  };
  const next = () => {
    setChosen(null);
    seq.advance();
  };
  useNumberKeys(config.buckets.length, !locked, (i) => choose(config.buckets[i]!.id));
  const onDragEnd = ({ over }: DragEndEvent) => {
    if (over) choose(String(over.id));
  };

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title="Sort it"
      footer={
        locked ? (
          <FeedbackFooter
            kind="wrong"
            title={verdictTitle('wrong')}
            detail={
              <p>
                <strong>{item.text}</strong> belongs to <strong>{bucketLabel(item.bucket)}</strong>.
              </p>
            }
            isLast={seq.isLast}
            onNext={next}
          />
        ) : null
      }
    >
      <p className="text-center font-bold text-muted">
        {config.instruction ?? 'Drag the card into the right box, or tap a box.'}
      </p>
      <p
        role="status"
        aria-live="polite"
        className="min-h-6 text-center font-bold text-success"
        data-testid="flash"
      >
        {flash}
      </p>
      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
        <DraggableCard
          id={item.id}
          disabled={locked}
          aside={item.speak ? <SpeakButton text={item.speak} /> : null}
        >
          {item.emoji ? (
            <span aria-hidden="true" className="text-5xl">
              {item.emoji}
            </span>
          ) : null}
          <span className="font-display text-4xl font-bold text-ink" data-testid="prompt">
            {item.text}
          </span>
        </DraggableCard>
        <div className={`grid gap-3 ${config.buckets.length > 2 ? 'grid-cols-3' : 'grid-cols-2'}`}>
          {config.buckets.map((b, i) => (
            <BucketTarget
              key={b.id}
              bucket={b}
              index={i}
              disabled={locked}
              state={
                locked
                  ? b.id === item.bucket
                    ? 'right'
                    : b.id === chosen
                      ? 'wrong'
                      : 'idle'
                  : 'idle'
              }
              onChoose={() => choose(b.id)}
            />
          ))}
        </div>
      </DndContext>
    </GameFrame>
  );
}

export default Sortit;
