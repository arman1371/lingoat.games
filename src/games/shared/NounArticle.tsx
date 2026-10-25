import { createContext, useContext, useMemo } from 'react';
import { t } from '@/i18n';
import { findGapNoun, type NounIndex } from '@/lib/german/nouns';

/**
 * Nouns of the loaded vocabulary, by bare singular. PlayPage provides it; engines rendered on
 * their own (tests) get none and simply show no noun row.
 */
export const NounIndexContext = createContext<NounIndex | undefined>(undefined);

interface Props {
  /** the sentence with the blank, as authored (`___`) */
  text: string;
  /** the correct answer for the blank */
  answer: string;
}

/**
 * The "The noun" row of the feedback sheet: for a gap whose answer depends on the article of the
 * noun next to it (den/dem/einen, an adjective ending), shows that noun with its dictionary
 * article, in the correct and the wrong case alike. Renders nothing when there is no such noun.
 */
export function NounArticle({ text, answer }: Props) {
  const index = useContext(NounIndexContext);
  const found = useMemo(
    () => (index ? findGapNoun(text, answer, index) : null),
    [index, text, answer],
  );
  if (!found) return null;
  return (
    <div className="mt-2 rounded-xl bg-surface px-4 py-3" data-testid="noun-article">
      <p className="text-[11px] font-extrabold uppercase tracking-wider text-muted">
        {t('noun.label')}
      </p>
      <p className="text-lg font-bold" lang="de" data-testid="noun-article-noun">
        {found.article} {found.noun}
      </p>
      {found.gender ? <p className="text-sm text-muted">{t(`noun.${found.gender}`)}</p> : null}
    </div>
  );
}
