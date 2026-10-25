import { Icon } from '@/components/ui/Icon';
import { useNumberKeys } from './useNumberKeys';

interface Props {
  options: readonly string[];
  onSelect: (option: string) => void;
  /** once set, buttons lock and show right/wrong colours */
  picked?: string | null;
  answer?: string;
  columns?: 1 | 2;
}

/** Big tappable answer buttons with 1–9 keyboard shortcuts. */
export function ChoiceList({ options, onSelect, picked = null, answer, columns = 1 }: Props) {
  const locked = picked !== null;

  useNumberKeys(options.length, !locked, (i) => onSelect(options[i] as string));

  return (
    <div
      role="group"
      aria-label="Answers"
      className={`grid gap-3 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}
    >
      {options.map((option, i) => {
        const isAnswer = locked && option === answer;
        const isWrongPick = locked && option === picked && option !== answer;
        const tone = isAnswer
          ? 'border-success bg-success-soft'
          : isWrongPick
            ? 'border-danger bg-danger-soft anim-shake'
            : 'border-line bg-surface hover:bg-surface-2';
        return (
          <button
            key={option}
            type="button"
            disabled={locked}
            onClick={() => onSelect(option)}
            className={`press flex min-h-14 items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left text-lg font-bold disabled:cursor-default ${tone}`}
          >
            <span
              aria-hidden="true"
              className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-sm text-muted md:flex"
            >
              {i + 1}
            </span>
            <span className="flex-1">{option}</span>
            {isAnswer ? <Icon name="check-circle" size={24} /> : null}
            {isWrongPick ? <Icon name="x-circle" size={24} /> : null}
            {isAnswer ? <span className="sr-only">, correct answer</span> : null}
            {isWrongPick ? <span className="sr-only">, your answer, incorrect</span> : null}
          </button>
        );
      })}
    </div>
  );
}
