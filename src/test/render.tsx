import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ComponentType, ReactNode } from 'react';
import type { GameProps } from '@/games/types';
import type { GameType } from '@/content/schema';
import type { GameResult } from '@/lib/scoring';

/** Render a game engine with a fixture config and capture its result. */
export function renderGame<T extends GameType>(
  Game: ComponentType<GameProps<T>>,
  config: GameProps<T>['config'],
  seed = 1,
  options: {
    advanceTimers?: (ms: number) => void;
    /** context providers around the engine */
    wrapper?: ComponentType<{ children: ReactNode }>;
  } = {},
) {
  const onFinish = vi.fn<(r: GameResult) => void>();
  const user = options.advanceTimers
    ? userEvent.setup({ advanceTimers: options.advanceTimers })
    : userEvent.setup();
  const utils = render(<Game config={config} seed={seed} onFinish={onFinish} />, {
    wrapper: options.wrapper,
  });
  return { ...utils, user, onFinish };
}
