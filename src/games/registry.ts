import { lazy, type ComponentType } from 'react';
import type { GameType } from '@/content/schema';
import type { GameProps } from './types';

type Loader<T extends GameType> = () => Promise<{ default: ComponentType<GameProps<T>> }>;

/** One lazy-loaded component per engine; adding a game = a new folder + one line here + schema entry. */
export const gameLoaders: { [T in GameType]: Loader<T> } = {
  flashcards: () => import('./flashcards/Flashcards'),
  quiz: () => import('./quiz/Quiz'),
  memory: () => import('./memory/Memory'),
  listen: () => import('./listen/Listen'),
  spell: () => import('./spell/Spell'),
  sentence: () => import('./sentence/Sentence'),
  gapfill: () => import('./gapfill/Gapfill'),
  sortit: () => import('./sortit/Sortit'),
  conjugation: () => import('./conjugation/Conjugation'),
  blitz: () => import('./blitz/Blitz'),
  dialogue: () => import('./dialogue/Dialogue'),
  clock: () => import('./clock/Clock'),
  market: () => import('./market/Market'),
};

export const gameComponents = Object.fromEntries(
  (Object.keys(gameLoaders) as GameType[]).map((type) => [
    type,
    lazy(gameLoaders[type] as Loader<GameType>),
  ]),
) as unknown as { [T in GameType]: ComponentType<GameProps<T>> };

export const GAME_HELP: Record<GameType, string> = {
  flashcards: 'Flip the card, then tell yourself honestly if you knew it.',
  quiz: 'Pick the right answer. Press 1–4 on the keyboard to answer fast.',
  memory: 'Match each word on the left with its partner on the right.',
  listen: 'Press the speaker, listen closely, then pick what you heard.',
  spell: 'Build or type the word. Use the ä ö ü ß keys if you need them.',
  sentence: 'Tap the words in the right order. Drag to rearrange.',
  gapfill: 'Fill the gap with the missing word.',
  sortit: 'Drag each card into the right box – or just tap the box.',
  conjugation: 'Complete the verb table for every person.',
  blitz: 'Race the clock: is the sentence correct or wrong?',
  dialogue: 'Chat with a German speaker – choose the best reply.',
  clock: 'Read the clock or set the hands to the time you hear.',
  market: 'Fill the basket for the customer, then work out the price.',
};
