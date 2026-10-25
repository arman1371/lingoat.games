import type { LevelContent } from '../schema';
import { withSortitTranslations } from '../translations';
import { sortitTranslations } from './translations';
import { beziehungen } from './u1-beziehungen';
import { ernaehrung } from './u2-ernaehrung';
import { studium } from './u3-studium';
import { service2 } from './u4-service';
import { gesundheit } from './u5-gesundheit';
import { sprache } from './u6-sprache';
import { wirtschaft } from './u7-wirtschaft';
import { kunst } from './u8-kunst';
import { geschichte } from './u9-geschichte';
import { stadt } from './u10-stadt';
import { druck } from './u11-druck';
import { netz } from './u12-netz';

const units = [
  beziehungen,
  ernaehrung,
  studium,
  service2,
  gesundheit,
  sprache,
  wirtschaft,
  kunst,
  geschichte,
  stadt,
  druck,
  netz,
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
