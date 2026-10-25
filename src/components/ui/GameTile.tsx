import type { GameType } from '@/content/gameTypes';
import { Icon, type IconName } from './Icon';

/** Icon and colour pair for each game, from the design's Game Tile. Class names are written out so Tailwind finds them. */
const TILE: Record<GameType, { icon: IconName; colors: string }> = {
  flashcards: {
    icon: 'layers',
    colors:
      'bg-game-flashcards-bg text-game-flashcards-fg shadow-[0_3px_0_var(--game-flashcards-solid)]',
  },
  quiz: {
    icon: 'target',
    colors: 'bg-game-quiz-bg text-game-quiz-fg shadow-[0_3px_0_var(--game-quiz-solid)]',
  },
  gapfill: {
    icon: 'pencil',
    colors: 'bg-game-gapfill-bg text-game-gapfill-fg shadow-[0_3px_0_var(--game-gapfill-solid)]',
  },
  sentence: {
    icon: 'shuffle',
    colors: 'bg-game-sentence-bg text-game-sentence-fg shadow-[0_3px_0_var(--game-sentence-solid)]',
  },
  listen: {
    icon: 'headphones',
    colors: 'bg-game-listen-bg text-game-listen-fg shadow-[0_3px_0_var(--game-listen-solid)]',
  },
  spell: {
    icon: 'type',
    colors: 'bg-game-spell-bg text-game-spell-fg shadow-[0_3px_0_var(--game-spell-solid)]',
  },
  memory: {
    icon: 'grid',
    colors: 'bg-game-memory-bg text-game-memory-fg shadow-[0_3px_0_var(--game-memory-solid)]',
  },
  blitz: {
    icon: 'zap',
    colors: 'bg-game-blitz-bg text-game-blitz-fg shadow-[0_3px_0_var(--game-blitz-solid)]',
  },
  sortit: {
    icon: 'menu',
    colors: 'bg-game-sortit-bg text-game-sortit-fg shadow-[0_3px_0_var(--game-sortit-solid)]',
  },
  dialogue: {
    icon: 'chat',
    colors: 'bg-game-dialogue-bg text-game-dialogue-fg shadow-[0_3px_0_var(--game-dialogue-solid)]',
  },
  conjugation: {
    icon: 'refresh',
    colors:
      'bg-game-conjugation-bg text-game-conjugation-fg shadow-[0_3px_0_var(--game-conjugation-solid)]',
  },
  clock: {
    icon: 'clock',
    colors: 'bg-game-clock-bg text-game-clock-fg shadow-[0_3px_0_var(--game-clock-solid)]',
  },
  market: {
    icon: 'cart',
    colors: 'bg-game-market-bg text-game-market-fg shadow-[0_3px_0_var(--game-market-solid)]',
  },
};

const SIZES = {
  sm: { box: 'h-10 w-10 rounded-xl', icon: 20 },
  md: { box: 'h-14 w-14 rounded-2xl', icon: 28 },
  lg: { box: 'h-20 w-20 rounded-3xl', icon: 40 },
} as const;

/** Rounded square with the game's icon; decorative, the game name is always written next to it. */
export function GameTile({ type, size = 'md' }: { type: GameType; size?: keyof typeof SIZES }) {
  const s = SIZES[size];
  return (
    <span
      aria-hidden="true"
      data-game={type}
      className={`inline-flex shrink-0 items-center justify-center ${s.box} ${TILE[type].colors}`}
    >
      <Icon name={TILE[type].icon} size={s.icon} />
    </span>
  );
}
