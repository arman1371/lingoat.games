import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { localRepository } from './repository';

export type ThemeSetting = 'system' | 'light' | 'dark';
export type MotionSetting = 'system' | 'reduced' | 'full';

export interface SettingsState {
  theme: ThemeSetting;
  motion: MotionSetting;
  sounds: boolean;
  autoSpeak: boolean;
  ttsRate: number;
  /** XP to earn per day. */
  dailyGoal: number;
  set: (patch: Partial<Omit<SettingsState, 'set'>>) => void;
}

export const DEFAULT_SETTINGS = {
  theme: 'system',
  motion: 'system',
  sounds: true,
  autoSpeak: true,
  ttsRate: 0.9,
  dailyGoal: 50,
} satisfies Omit<SettingsState, 'set'>;

export const useSettingsStore = create<SettingsState>()(
  persist((set) => ({ ...DEFAULT_SETTINGS, set: (patch) => set(patch) }), {
    name: 'lingoat.settings',
    version: 1,
    storage: createJSONStorage(() => localRepository),
    partialize: ({ theme, motion, sounds, autoSpeak, ttsRate, dailyGoal }) => ({
      theme,
      motion,
      sounds,
      autoSpeak,
      ttsRate,
      dailyGoal,
    }),
  }),
);

export function resolveTheme(theme: ThemeSetting, prefersDark: boolean): 'light' | 'dark' {
  return theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme;
}

export function resolveReducedMotion(motion: MotionSetting, prefersReduced: boolean): boolean {
  return motion === 'system' ? prefersReduced : motion === 'reduced';
}
