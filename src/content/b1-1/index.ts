import type { LevelContent } from '../schema';
import { withSortitTranslations } from '../translations';
import { sortitTranslations } from './translations';
import { glueck } from './u1-glueck';
import { unterhaltung } from './u2-unterhaltung';
import { gesundheit } from './u3-gesundheit';
import { sprachen } from './u4-sprachen';
import { beruf } from './u5-beruf';
import { serviceUnit } from './u6-service';
import { wohnen } from './u7-wohnen';
import { freundschaft } from './u8-freundschaft';
import { zukunft } from './u9-zukunft';
import { feiern } from './u10-feiern';
import { umwelt } from './u11-umwelt';
import { pannen } from './u12-pannen';

const units = [
  glueck,
  unterhaltung,
  gesundheit,
  sprachen,
  beruf,
  serviceUnit,
  wohnen,
  freundschaft,
  zukunft,
  feiern,
  umwelt,
  pannen,
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
