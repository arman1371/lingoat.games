import type { LevelContent } from '../schema';
import { withSortitTranslations } from '../translations';
import { sortitTranslations } from './translations';
import { finanzen } from './u1-finanzen';
import { gesundheit } from './u2-gesundheit';
import { recht } from './u3-recht';
import { psychologie } from './u4-psychologie';
import { stadt } from './u5-stadt';
import { literatur } from './u6-literatur';
import { kino } from './u7-kino';
import { geschaeft } from './u8-geschaeft';
import { forschung } from './u9-forschung';
import { team10 } from './u10-team';
import { nachhaltigkeit } from './u11-nachhaltigkeit';
import { vortrag } from './u12-vortrag';

const units = [
  finanzen,
  gesundheit,
  recht,
  psychologie,
  stadt,
  literatur,
  kino,
  geschaeft,
  forschung,
  team10,
  nachhaltigkeit,
  vortrag,
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
