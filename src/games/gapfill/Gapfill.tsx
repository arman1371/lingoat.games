import { useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { UmlautKeyboard } from '@/components/ui/UmlautKeyboard';
import { checkAnswer, type AnswerVerdict } from '@/lib/answer-check';
import { t } from '@/i18n';
import { ChoiceList } from '../shared/ChoiceList';
import { FeedbackFooter, GameFrame, verdictTitle } from '../shared/GameFrame';
import { shuffledOptions } from '../shared/choices';
import { MistakeHint } from '../shared/MistakeHint';
import { mistakeWhy } from '../shared/hints';
import { useSpeakSentence } from '../shared/useSentenceSpeech';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';
import { spokenWithoutGap } from './logic';

export function Gapfill({ config, seed, onFinish }: GameProps<'gapfill'>) {
  const seq = useSequence(config.items, seed, onFinish);
  const item = seq.item;
  const [before, after] = item.text.split('___') as [string, string];
  const [typed, setTyped] = useState('');
  const [picked, setPicked] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<AnswerVerdict | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const options = useMemo(
    () => (item.options ? shuffledOptions(item.options, seed, item.id) : null),
    [item, seed],
  );
  useSpeakSentence(spokenWithoutGap(before, after));
  const accepted = [item.answer, ...(item.alsoAccept ?? [])];

  const grade = (given: string) => {
    const v = checkAnswer(given, accepted);
    setVerdict(v);
    seq.answer(v !== 'wrong');
  };
  const next = () => {
    setTyped('');
    setPicked(null);
    setVerdict(null);
    seq.advance();
  };

  const shown = options ? (picked ?? '…') : null;

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title="Gap fill"
      footer={
        verdict ? (
          <FeedbackFooter
            kind={verdict}
            title={verdictTitle(verdict)}
            detail={
              <>
                <p>
                  {before}
                  <strong>{item.answer}</strong>
                  {after}
                </p>
                {item.explanation ? <p>{item.explanation}</p> : null}
                {verdict === 'wrong' ? (
                  <MistakeHint why={mistakeWhy(item, picked ?? typed)} lesson={item.lesson} />
                ) : null}
              </>
            }
            isLast={seq.isLast}
            onNext={next}
          />
        ) : !options ? (
          <Button size="lg" block onClick={() => grade(typed)} disabled={typed.trim() === ''}>
            {t('common.check')}
          </Button>
        ) : null
      }
    >
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-muted">Fill in the gap</p>
        <p
          className="mt-2 font-display text-2xl font-bold leading-relaxed text-ink"
          data-testid="sentence"
        >
          {before}
          {options ? (
            <span className="mx-1 inline-block min-w-16 rounded-xl border-2 border-primary bg-primary-soft px-2 text-on-primary-soft">
              {shown}
            </span>
          ) : (
            <input
              ref={inputRef}
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              disabled={verdict !== null}
              aria-label="Missing word"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && typed.trim() && !verdict) grade(typed);
              }}
              className="mx-1 w-36 rounded-xl border-2 border-primary bg-primary-soft px-2 py-1 text-center text-2xl font-bold text-on-primary-soft"
              style={{ width: `${Math.max(6, item.answer.length + 2)}ch` }}
            />
          )}
          {after}
        </p>
        {item.translation ? <p className="mt-2 text-muted">{item.translation}</p> : null}
      </div>
      {options ? (
        <ChoiceList
          options={options}
          picked={picked}
          answer={item.answer}
          columns={2}
          onSelect={(o) => {
            if (picked !== null) return;
            setPicked(o);
            grade(o);
          }}
        />
      ) : (
        <div className="flex justify-center">
          <UmlautKeyboard
            onInsert={(c) => {
              setTyped((v) => v + c);
              inputRef.current?.focus();
            }}
          />
        </div>
      )}
    </GameFrame>
  );
}

export default Gapfill;
