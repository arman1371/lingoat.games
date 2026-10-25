import { useMemo, useState } from 'react';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { WordImage } from '@/components/WordImage';
import { ChoiceList } from '../shared/ChoiceList';
import { FeedbackFooter, GameFrame, verdictTitle } from '../shared/GameFrame';
import { shuffledOptions } from '../shared/choices';
import { MistakeHint } from '../shared/MistakeHint';
import { NounArticle } from '../shared/NounArticle';
import { mistakeWhy } from '../shared/hints';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';

export function Quiz({ config, seed, onFinish }: GameProps<'quiz'>) {
  const seq = useSequence(config.questions, seed, onFinish);
  const q = seq.item;
  const [picked, setPicked] = useState<string | null>(null);
  const options = useMemo(() => shuffledOptions(q.options, seed, q.id), [q, seed]);

  const select = (option: string) => {
    if (picked !== null) return;
    setPicked(option);
    seq.answer(option === q.answer);
  };
  const next = () => {
    setPicked(null);
    seq.advance();
  };
  const correct = picked === q.answer;

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title="Quiz"
      footer={
        seq.phase === 'feedback' ? (
          <FeedbackFooter
            kind={correct ? 'correct' : 'wrong'}
            title={verdictTitle(correct ? 'correct' : 'wrong')}
            detail={
              <>
                {!correct ? (
                  <p>
                    Answer: <strong>{q.answer}</strong>
                  </p>
                ) : null}
                <NounArticle text={q.prompt} answer={q.answer} />
                {q.explanation ? <p>{q.explanation}</p> : null}
                {!correct && picked !== null ? (
                  <MistakeHint why={mistakeWhy(q, picked)} lesson={q.lesson} />
                ) : null}
              </>
            }
            isLast={seq.isLast}
            onNext={next}
          />
        ) : null
      }
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <WordImage id={q.id} emoji={q.emoji} />
        <h2 className="text-3xl font-extrabold text-ink" data-testid="prompt">
          {q.prompt}
        </h2>
        {q.speak ? <SpeakButton text={q.speak} /> : null}
      </div>
      <ChoiceList
        options={options}
        picked={picked}
        answer={q.answer}
        onSelect={select}
        columns={2}
      />
    </GameFrame>
  );
}

export default Quiz;
