import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { createRng, hashString } from '@/lib/rng';
import { useLanguageMeta } from '@/app/language';
import { formatDigital, parseTime } from '@/lib/german/time';
import { timeToWords } from '@/lib/spoken';
import { t } from '@/i18n';
import { ChoiceList } from '../shared/ChoiceList';
import { FeedbackFooter, GameFrame, verdictTitle } from '../shared/GameFrame';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';
import { AnalogClock } from './AnalogClock';
import { buildClockOptions, sameTime, wrapHour, wrapMinute } from './logic';

export function ClockMaster({ config, seed, onFinish }: GameProps<'clock'>) {
  const seq = useSequence(config.rounds, seed, onFinish);
  const round = seq.item;
  const language = useLanguageMeta();
  const target = useMemo(() => parseTime(round.time), [round.time]);
  const phrase = timeToWords(target, round.style, language.id);
  const options = useMemo(
    () =>
      buildClockOptions(target, round.style, createRng(seed ^ hashString(round.id)), language.id),
    [target, round.style, round.id, seed, language.id],
  );
  const [picked, setPicked] = useState<string | null>(null);
  const [set, setSet] = useState({ hour: 12, minute: 0 });
  const [verdict, setVerdict] = useState<boolean | null>(null);

  const next = () => {
    setPicked(null);
    setVerdict(null);
    setSet({ hour: 12, minute: 0 });
    seq.advance();
  };

  const finishRead = (option: string) => {
    if (picked !== null) return;
    setPicked(option);
    setVerdict(option === phrase);
    seq.answer(option === phrase);
  };
  const checkSet = () => {
    const ok = sameTime(set, target, round.style);
    setVerdict(ok);
    seq.answer(ok);
  };

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title="Clock master"
      footer={
        verdict !== null ? (
          <FeedbackFooter
            kind={verdict ? 'correct' : 'wrong'}
            title={verdictTitle(verdict ? 'correct' : 'wrong')}
            detail={
              <p>
                {formatDigital(target)} = <strong>{phrase}</strong>
              </p>
            }
            isLast={seq.isLast}
            onNext={next}
          />
        ) : round.mode === 'set' ? (
          <Button size="lg" block onClick={checkSet}>
            {t('common.check')}
          </Button>
        ) : null
      }
    >
      {round.mode === 'read' ? (
        <>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-extrabold text-ink" data-testid="prompt">
              {language.gameStrings.timeQuestion}
            </h2>
            <AnalogClock time={target} />
            <p className="text-lg font-bold text-muted">
              {round.style === 'formal' ? 'Official time' : 'Everyday speech'}
            </p>
          </div>
          <ChoiceList
            options={options}
            picked={picked}
            answer={phrase}
            onSelect={finishRead}
            columns={2}
          />
        </>
      ) : (
        <>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-muted">Set the clock to</p>
            <h2
              className="flex items-center gap-3 text-3xl font-extrabold text-ink"
              data-testid="prompt"
            >
              {phrase}
              <SpeakButton text={phrase} />
            </h2>
            <AnalogClock time={set} label={`Your clock shows ${formatDigital(set)}`} />
            <p className="text-3xl font-extrabold tabular-nums text-primary" data-testid="digital">
              {formatDigital(set)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Stepper
              label="Hour"
              onMinus={() => setSet((s) => ({ ...s, hour: wrapHour(s.hour, -1) }))}
              onPlus={() => setSet((s) => ({ ...s, hour: wrapHour(s.hour, 1) }))}
              disabled={verdict !== null}
            />
            <Stepper
              label="Minutes"
              onMinus={() => setSet((s) => ({ ...s, minute: wrapMinute(s.minute, -5) }))}
              onPlus={() => setSet((s) => ({ ...s, minute: wrapMinute(s.minute, 5) }))}
              disabled={verdict !== null}
            />
          </div>
        </>
      )}
    </GameFrame>
  );
}

function Stepper({
  label,
  onMinus,
  onPlus,
  disabled,
}: {
  label: string;
  onMinus: () => void;
  onPlus: () => void;
  disabled: boolean;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-col items-center gap-2 rounded-2xl border-2 border-line bg-surface p-3"
    >
      <span className="font-bold text-muted">{label}</span>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          aria-label={`${label} minus`}
          disabled={disabled}
          onClick={onMinus}
        >
          −
        </Button>
        <Button
          variant="secondary"
          aria-label={`${label} plus`}
          disabled={disabled}
          onClick={onPlus}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default ClockMaster;
