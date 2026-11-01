import { unit as baseUnit } from '../builders';

export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFrC12 = (u: Parameters<typeof baseUnit>[0]) =>
  baseUnit({ levelId: 'fr-c1-2', ...u });
