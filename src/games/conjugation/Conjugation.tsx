import { useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { UmlautKeyboard } from '@/components/ui/UmlautKeyboard';
import { t } from '@/i18n';
import { personLabel, type Person } from '@/lib/persons';
import { FeedbackFooter, GameFrame, verdictTitle } from '../shared/GameFrame';
import { MistakeHint } from '../shared/MistakeHint';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';
import { conjugationWhy, gradeTable, pronounOrder, type CellVerdicts } from './logic';

export function Conjugation({ config, seed, onFinish }: GameProps<'conjugation'>) {
  const seq = useSequence(config.tables, seed, onFinish);
  const table = seq.item;
  const [values, setValues] = useState<Partial<Record<Person, string>>>({});
  const [cells, setCells] = useState<CellVerdicts | null>(null);
  const [overall, setOverall] = useState<'correct' | 'almost' | 'wrong' | null>(null);
  const focused = useRef<HTMLInputElement | null>(null);

  const complete = table.blanks.every((p) => (values[p] ?? '').trim() !== '');

  const check = () => {
    const graded = gradeTable(table.forms, table.blanks, values);
    setCells(graded.cells);
    setOverall(graded.overall);
    seq.answer(graded.overall !== 'wrong');
  };
  const next = () => {
    setValues({});
    setCells(null);
    setOverall(null);
    seq.advance();
  };

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title="Conjugation grid"
      footer={
        overall ? (
          <FeedbackFooter
            kind={overall}
            title={verdictTitle(overall)}
            detail={
              overall !== 'correct' ? (
                <>
                  <p>Check the highlighted forms in the table.</p>
                  {overall === 'wrong' && cells ? (
                    <MistakeHint
                      why={conjugationWhy(table.forms, cells, values)}
                      lesson={table.lesson}
                    />
                  ) : null}
                </>
              ) : null
            }
            isLast={seq.isLast}
            onNext={next}
          />
        ) : (
          <Button size="lg" block disabled={!complete} onClick={check}>
            {t('common.check')}
          </Button>
        )
      }
    >
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-muted">Complete the table</p>
        <h2 className="text-3xl font-extrabold text-ink" data-testid="prompt">
          {table.verb}
        </h2>
        <p className="text-muted">{table.meaning}</p>
      </div>

      <form
        className="grid gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (complete && !overall) check();
        }}
      >
        {pronounOrder(table.forms).map((p) => {
          const isBlank = table.blanks.includes(p);
          const v = cells?.[p];
          return (
            <div
              key={p}
              className="grid grid-cols-[7rem_1fr] items-center gap-3 rounded-2xl border-2 border-line bg-surface p-2"
            >
              <label htmlFor={`cell-${p}`} className="pl-2 text-lg font-extrabold text-muted">
                {personLabel(p, table.forms[p] ?? '')}
              </label>
              {isBlank ? (
                <div className="flex items-center gap-2">
                  <input
                    id={`cell-${p}`}
                    value={values[p] ?? ''}
                    disabled={overall !== null}
                    onFocus={(e) => (focused.current = e.currentTarget)}
                    onChange={(e) => setValues((s) => ({ ...s, [p]: e.target.value }))}
                    onKeyDown={(e) => {
                      // several text fields and no submit button inside the form: handle Enter ourselves
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        if (complete && !overall) check();
                      }
                    }}
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    className={`min-h-12 w-full rounded-xl border-2 bg-surface px-3 text-xl font-bold text-ink ${
                      v === 'wrong' ? 'border-danger' : v ? 'border-success' : 'border-line'
                    }`}
                  />
                  {v ? (
                    <span className="min-w-20 text-sm font-bold text-ink" data-testid={`mark-${p}`}>
                      {v === 'wrong' ? `✗ ${table.forms[p]}` : '✓'}
                    </span>
                  ) : null}
                </div>
              ) : (
                <span id={`cell-${p}`} className="px-3 text-xl font-bold text-ink">
                  {table.forms[p]}
                </span>
              )}
            </div>
          );
        })}
      </form>
      <div className="flex justify-center">
        <UmlautKeyboard
          onInsert={(c) => {
            const el = focused.current;
            const p = el?.id.replace('cell-', '') as Person | undefined;
            if (p) setValues((s) => ({ ...s, [p]: (s[p] ?? '') + c }));
            el?.focus();
          }}
        />
      </div>
    </GameFrame>
  );
}

export default Conjugation;
