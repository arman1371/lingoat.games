import { createContext, useContext, useEffect } from 'react';

/**
 * How a game tells the play page which word, question or step is on screen, so "Report a problem" can say
 * exactly which one. PlayPage provides the setter; outside it (tests, previews) this does nothing.
 */
export const ReportItemContext = createContext<(itemId: string | undefined) => void>(() => {});

/** Call with the id of the item on screen (`useSequence` does it for its engines). */
export function useReportItem(itemId: string | undefined): void {
  const setItem = useContext(ReportItemContext);
  useEffect(() => {
    setItem(itemId);
    return () => setItem(undefined);
  }, [itemId, setItem]);
}
