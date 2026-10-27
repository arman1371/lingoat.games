import { createContext, useContext, useId, useMemo } from 'react';
import { t } from '@/i18n';
import { sentenceNouns } from '@/lib/german/nouns';
import { NounIndexContext } from './NounArticle';

/**
 * True while the running activity drills a case (accusative, dative, …): PlayPage sets it from the
 * activity's grammar tags. Engines rendered on their own (tests) get false and show no noun row.
 */
export const CaseDrillContext = createContext(false);

/**
 * The "Nouns" row under a sentence of a case drill: the dictionary article of every noun in it, shown
 * before the player answers so a missing article is never the reason for a wrong answer. Not interactive.
 */
export function SentenceNouns({ text }: { text: string }) {
  const labelId = useId();
  const index = useContext(NounIndexContext);
  const drill = useContext(CaseDrillContext);
  const nouns = useMemo(
    () => (index && drill ? sentenceNouns(text, index) : []),
    [index, drill, text],
  );
  if (nouns.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center justify-center gap-2" data-testid="sentence-nouns">
      <span id={labelId} className="text-[11px] font-extrabold uppercase tracking-wider text-muted">
        {t('noun.listLabel')}
      </span>
      <ul aria-labelledby={labelId} className="flex flex-wrap gap-2" lang="de">
        {nouns.map((n) => (
          <li
            key={n.noun}
            className="rounded-full bg-sunken px-3 py-1 text-sm font-bold text-ink"
            data-testid="sentence-noun"
          >
            {n.article} {n.noun}
          </li>
        ))}
      </ul>
    </div>
  );
}
