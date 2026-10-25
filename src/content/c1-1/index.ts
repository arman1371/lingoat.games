import type { LevelContent } from '../schema';
import { withSortitTranslations } from '../translations';
import { sortitTranslations } from './translations';
import { zeit } from './u1-zeit';
import { digital } from './u2-digital';
import { sprache } from './u3-sprache';
import { manieren } from './u4-manieren';
import { tourismus } from './u5-tourismus';
import { arbeit } from './u6-arbeit';
import { lebenswege } from './u7-lebenswege';
import { studium } from './u8-studium';
import { konsum } from './u9-konsum';
import { wirtschaft } from './u10-wirtschaft';
import { gesellschaft } from './u11-gesellschaft';

const units = [
  zeit,
  digital,
  sprache,
  manieren,
  tourismus,
  arbeit,
  lebenswege,
  studium,
  konsum,
  wirtschaft,
  gesellschaft,
];

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
