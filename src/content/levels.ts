import { DEFAULT_LANGUAGE, type LanguageId } from './languages';
import type { LevelMeta } from './schema';

/**
 * Level catalogue. To add a level: create `src/content/<level-id>/index.ts` that default-exports a
 * `LevelContent`, then flip the entry below to `available` and point `load` at it.
 */
export const LEVELS: LevelMeta[] = [
  {
    language: 'de',
    id: 'a1-1',
    title: 'A1.1',
    subtitle: 'First steps: greetings, family, hobbies, time and shopping',
    status: 'available',
    load: () => import('./a1-1'),
  },
  {
    language: 'de',
    id: 'a1-2',
    title: 'A1.2',
    subtitle: 'Everyday life: town, home, work, health, travel and services',
    status: 'available',
    load: () => import('./a1-2'),
  },
  {
    language: 'de',
    id: 'a2-1',
    title: 'A2.1',
    subtitle: 'Online life, plans, travel, flat hunting, offices, school and job search',
    status: 'available',
    load: () => import('./a2-1'),
  },
  {
    language: 'de',
    id: 'a2-2',
    title: 'A2.2',
    subtitle:
      'Learning, sport, neighbours, music, wishes, post, travel, banking and the world of work',
    status: 'available',
    load: () => import('./a2-2'),
  },
  {
    language: 'de',
    id: 'b1-1',
    title: 'B1.1',
    subtitle:
      'Luck, entertainment, health, languages, work, services, living together, friendship, future, celebrations, environment and mishaps',
    status: 'available',
    load: () => import('./b1-1'),
  },
  {
    language: 'de',
    id: 'b1-2',
    title: 'B1.2',
    subtitle:
      'Colleagues, digital life, consumer rights, courses, customs, volunteering, politics, history, city and country, home and Europe, theatre and the B1 exam',
    status: 'available',
    load: () => import('./b1-2'),
  },
  {
    language: 'de',
    id: 'b2-1',
    title: 'B2.1',
    subtitle:
      'Relationships, minimalism, well-being, body language, teamwork, life paths, society, housing, media, science, travel and climate at upper-intermediate level',
    status: 'available',
    load: () => import('./b2-1'),
  },
  {
    language: 'de',
    id: 'b2-2',
    title: 'B2.2',
    subtitle:
      'Relationships, nutrition, university, complaints, fitness, regional languages, economy and tourism, art, recent history, sustainable cities, stress and decisions, media and law',
    status: 'available',
    load: () => import('./b2-2'),
  },
  {
    language: 'de',
    id: 'c1-1',
    title: 'C1.1',
    subtitle:
      'Time and pace, media, language, manners, tourism, work, career paths, study, consumption, economy and society',
    status: 'available',
    load: () => import('./c1-1'),
  },
  {
    language: 'de',
    id: 'c1-2',
    title: 'C1.2',
    subtitle:
      'Finance, medicine and food, law, psychology, city and village, literature, film and art, international business, research, teamwork, sustainability and talks',
    status: 'available',
    load: () => import('./c1-2'),
  },
  {
    language: 'de',
    id: 'c2-1',
    title: 'C2.1',
    subtitle:
      'Nuance and style, working life, economy, digitalisation, AI and research, medicine, mind and wellbeing, media and debate',
    status: 'available',
    load: () => import('./c2-1'),
  },
  {
    language: 'de',
    id: 'c2-2',
    title: 'C2.2',
    subtitle:
      'Art, literature, heritage, law, politics, civil society, climate, idioms and arguing at near-native level',
    status: 'available',
    load: () => import('./c2-2'),
  },
  {
    language: 'fr',
    id: 'fr-a1-1',
    title: 'A1.1',
    subtitle: 'First steps in French',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-a1-2',
    title: 'A1.2',
    subtitle: 'Breakthrough, second half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-a2-1',
    title: 'A2.1',
    subtitle: 'Waystage, first half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-a2-2',
    title: 'A2.2',
    subtitle: 'Waystage, second half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-b1-1',
    title: 'B1.1',
    subtitle: 'Threshold, first half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-b1-2',
    title: 'B1.2',
    subtitle: 'Threshold, second half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-b2-1',
    title: 'B2.1',
    subtitle: 'Vantage, first half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-b2-2',
    title: 'B2.2',
    subtitle: 'Vantage, second half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-c1-1',
    title: 'C1.1',
    subtitle: 'Effective proficiency, first half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-c1-2',
    title: 'C1.2',
    subtitle: 'Effective proficiency, second half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-c2-1',
    title: 'C2.1',
    subtitle: 'Mastery, first half',
    status: 'coming-soon',
  },
  {
    language: 'fr',
    id: 'fr-c2-2',
    title: 'C2.2',
    subtitle: 'Mastery, second half',
    status: 'coming-soon',
  },
];

const levelsByLanguage = new Map<LanguageId, LevelMeta[]>();

/** Levels of one language. The array is stable per language, so it is safe as a hook dependency. */
export function levelsOf(language: LanguageId = DEFAULT_LANGUAGE): LevelMeta[] {
  let levels = levelsByLanguage.get(language);
  if (!levels) {
    levels = LEVELS.filter((l) => l.language === language);
    levelsByLanguage.set(language, levels);
  }
  return levels;
}

/**
 * The level an activity belongs to. Activity ids start with their level id (`a1-2-…`, `fr-a1-1-…`), so
 * this works for languages whose content is not loaded.
 */
export function levelOfActivityId(activityId: string): LevelMeta | undefined {
  return LEVELS.find((l) => activityId.startsWith(`${l.id}-`));
}

export function getLevelMeta(id: string): LevelMeta | undefined {
  return LEVELS.find((l) => l.id === id);
}
