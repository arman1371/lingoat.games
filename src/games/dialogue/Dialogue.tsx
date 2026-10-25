import { useMemo, useState } from 'react';
import { Mascot } from '@/components/ui/Mascot';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { ChoiceList } from '../shared/ChoiceList';
import { FeedbackFooter, GameFrame } from '../shared/GameFrame';
import { shuffledOptions } from '../shared/choices';
import { useAnswerSound } from '../shared/useAnswerSound';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';

type Scene = GameProps<'dialogue'>['config']['scenes'][number];

interface Line {
  who: 'npc' | 'you';
  name?: string;
  text: string;
  translation?: string;
}

export function Dialogue({ config, seed, onFinish }: GameProps<'dialogue'>) {
  const seq = useSequence(config.scenes, seed, onFinish, { shuffleItems: false, sounds: false });
  const scene = seq.item;
  return <SceneView key={scene.id} scene={scene} seed={seed} seq={seq} />;
}

function SceneView({
  scene,
  seed,
  seq,
}: {
  scene: Scene;
  seed: number;
  seq: ReturnType<typeof useSequence<Scene>>;
}) {
  const playAnswerSound = useAnswerSound();
  const [wrongPicks, setWrongPicks] = useState<string[]>([]);
  const [hint, setHint] = useState<string | null>(null);
  const [lines, setLines] = useState<Line[]>(() => collectNpcLines(scene, 0).lines);
  const [pending, setPending] = useState(() => collectNpcLines(scene, 0).next);
  const done = pending >= scene.turns.length;
  const sceneCorrect = wrongPicks.length === 0;

  const current = !done ? scene.turns[pending] : undefined;
  const youTurn = current?.kind === 'you' ? current : undefined;
  const options = useMemo(
    () =>
      youTurn
        ? shuffledOptions(
            youTurn.options.map((o) => o.text),
            seed,
            `${scene.id}:${pending}`,
          )
        : [],
    [youTurn, seed, scene.id, pending],
  );

  const pick = (text: string) => {
    if (!youTurn) return;
    const option = youTurn.options.find((o) => o.text === text)!;
    playAnswerSound(option.correct);
    if (!option.correct) {
      setWrongPicks((w) => [...w, text]);
      setHint(option.feedback ?? 'Not the best reply here – try another one.');
      return;
    }
    setHint(null);
    const afterYou: Line[] = [...lines, { who: 'you', text }];
    const more = collectNpcLines(scene, pending + 1);
    setLines([...afterYou, ...more.lines]);
    setPending(more.next);
    // A scene counts as correct only if no wrong reply was picked at any point.
    if (more.next >= scene.turns.length) seq.answer(sceneCorrect);
  };

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title={scene.title}
      footer={
        done && seq.phase === 'feedback' ? (
          <FeedbackFooter
            kind={sceneCorrect ? 'correct' : 'almost'}
            title={sceneCorrect ? 'Perfect conversation!' : 'Conversation finished'}
            detail={
              sceneCorrect ? null : <p>You needed a few tries – practise this scene again later.</p>
            }
            isLast={seq.isLast}
            onNext={seq.advance}
          />
        ) : null
      }
    >
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-ink" data-testid="prompt">
          {scene.emoji ? <span aria-hidden="true">{scene.emoji} </span> : null}
          {scene.title}
        </h2>
        {scene.setting ? <p className="text-muted">{scene.setting}</p> : null}
      </div>

      <ol aria-label="Conversation" className="flex flex-col gap-3">
        {lines.map((line, i) => (
          <li
            key={i}
            className={`flex items-end gap-2 ${line.who === 'you' ? 'justify-end' : 'justify-start'}`}
          >
            {line.who === 'npc' ? <Mascot mood="happy" size={36} className="shrink-0" /> : null}
            <div
              className={`anim-pop max-w-[85%] rounded-3xl px-4 py-3 ${
                line.who === 'you' ? 'bg-primary text-on-primary' : 'bg-surface-2 text-ink'
              }`}
            >
              {line.who === 'npc' ? (
                <p className="text-xs font-bold text-muted">{line.name}</p>
              ) : null}
              <p className="flex items-center gap-2 text-lg font-bold">
                {line.text}
                {line.who === 'npc' ? <SpeakButton text={line.text} /> : null}
              </p>
              {line.translation ? <p className="text-sm opacity-80">{line.translation}</p> : null}
            </div>
          </li>
        ))}
      </ol>

      {youTurn ? (
        <div className="flex flex-col gap-3">
          <p className="font-bold text-muted">Choose your reply</p>
          <ChoiceList options={options.filter((o) => !wrongPicks.includes(o))} onSelect={pick} />
          {hint ? (
            <p
              role="status"
              className="anim-shake rounded-2xl border-2 border-danger bg-danger-soft p-3 text-ink"
            >
              {hint}
            </p>
          ) : null}
        </div>
      ) : null}
    </GameFrame>
  );
}

/** Collect consecutive NPC turns starting at `from`; returns the index of the next player turn. */
function collectNpcLines(scene: Scene, from: number): { lines: Line[]; next: number } {
  const lines: Line[] = [];
  let i = from;
  while (i < scene.turns.length) {
    const t = scene.turns[i]!;
    if (t.kind !== 'npc') break;
    lines.push({ who: 'npc', name: t.who, text: t.text, translation: t.translation });
    i++;
  }
  return { lines, next: i };
}

export default Dialogue;
