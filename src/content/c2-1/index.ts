import type { LevelContent } from '../schema';
import { withSortitTranslations } from '../translations';
import { sortitTranslations } from './translations';
import { sprache } from './u1-sprache';
import { arbeit } from './u2-arbeit';
import { wirtschaft } from './u3-wirtschaft';
import { digitalUnit } from './u4-digital';
import { ki } from './u5-ki';
import { medizin } from './u6-medizin';
import { psyche } from './u7-psyche';
import { medien } from './u8-medien';
import { debatte } from './u9-debatte';

const units = [sprache, arbeit, wirtschaft, digitalUnit, ki, medizin, psyche, medien, debatte];

const vocab = units.flatMap((u) => u.vocab);

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab,
  activities: withSortitTranslations(
    units.flatMap((u) => u.activities),
    vocab,
    sortitTranslations,
  ),
};

export default content;
export type { UnitContent } from './types';
