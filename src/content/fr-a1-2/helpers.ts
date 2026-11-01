import { unit as baseUnit } from '../builders';

export { frTable } from '../fr-a1-1/helpers';
export type { UnitContent } from './types';

/** `unit()` of the level: every unit passes the level id so the content test can check the prefix. */
export const unitFr = (u: Parameters<typeof baseUnit>[0]) => baseUnit({ levelId: 'fr-a1-2', ...u });
