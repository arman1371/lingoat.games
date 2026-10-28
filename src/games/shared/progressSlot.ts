import { createContext } from 'react';

/**
 * Where a sequential game puts its progress bar: PlayPage offers a slot in the top row, next to the
 * close button. Without one (an engine rendered on its own) the frame draws the bar itself.
 */
export const ProgressSlotContext = createContext<HTMLElement | null>(null);
