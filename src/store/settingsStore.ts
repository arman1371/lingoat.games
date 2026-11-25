import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { localRepository } from './repository';

export type ThemeSetting = 'system' | 'light' | 'dark';
export type MotionSetting = 'system' | 'reduced' | 'full';

export interface SettingsData {
  theme: ThemeSetting;
  motion: MotionSetting;
  sounds: boolean;
  /** Speak words and sentences aloud on their own, in every game. */
  autoSpeak: boolean;
  ttsRate: number;
  /** XP to earn per day. */
  dailyGoal: number;
}

export interface SettingsState extends SettingsData {
  set: (patch: Partial<SettingsData>) => void;
}

export const DEFAULT_SETTINGS = {
  theme: 'system',
  motion: 'system',
  sounds: true,
  autoSpeak: true,
  ttsRate: 0.9,
  dailyGoal: 50,
} satisfies SettingsData;

export const useSettingsStore = create<SettingsState>()(
  persist((set) => ({ ...DEFAULT_SETTINGS, set: (patch) => set(patch) }), {
    name: 'lingoat.settings',
    version: 2,
    // v1 had a second toggle for sentences; if either was off the player wanted quiet, so stay quiet.
    migrate: (persisted, version) => {
      const old = persisted as Partial<SettingsData> & { speakSentences?: boolean };
      return version < 2
        ? { ...old, autoSpeak: old.autoSpeak !== false && old.speakSentences !== false }
        : old;
    },
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
