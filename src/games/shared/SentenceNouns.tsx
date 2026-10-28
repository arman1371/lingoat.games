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
 * before the player answers so a missing article is never the reason for a wrong answer. Flat pills (article
 * badge + noun) under a labelled divider, so they are not mistaken for answer buttons. Not interactive.
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
    <div className="flex w-full flex-col items-center gap-2.5" data-testid="sentence-nouns">
      <div className="flex w-full items-center gap-2.5">
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
        <span
          id={labelId}
          className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-muted"
        >
          {t('noun.listLabel')}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      <ul aria-labelledby={labelId} className="flex flex-wrap justify-center gap-2" lang="de">
        {nouns.map((n) => (
          <li
            key={n.noun}
            className="flex items-center gap-2 rounded-full border-[1.5px] border-line bg-surface py-[3px] pl-[3px] pr-3.5 text-[15px] font-bold text-ink"
            data-testid="sentence-noun"
          >
            <span className="rounded-full bg-primary-soft px-2.5 py-[5px] text-[13px] font-extrabold leading-4 text-on-primary-soft">
              {n.article}
            </span>{' '}
            {n.noun}
          </li>
        ))}
      </ul>
    </div>
  );
}
