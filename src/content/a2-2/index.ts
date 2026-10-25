import type { LevelContent } from '../schema';
import { withSortitTranslations } from '../translations';
import { sortitTranslations } from './translations';
import { withHints } from '../hints';
import { hints } from './hints';
import { lernen } from './u1-lernen';
import { sportUnit } from './u2-sport';
import { nachbarn } from './u3-nachbarn';
import { kunst } from './u4-kunst';
import { wuensche } from './u5-wuensche';
import { feste } from './u6-feste';
import { postUnit } from './u7-post';
import { werbung } from './u8-werbung';
import { reisen } from './u9-reisen';
import { bankUnit } from './u10-bank';
import { leben } from './u11-leben';
import { arbeit } from './u12-arbeit';

const units = [
  lernen,
  sportUnit,
  nachbarn,
  kunst,
  wuensche,
  feste,
  postUnit,
  werbung,
  reisen,
  bankUnit,
  leben,
  arbeit,
];

const vocab = units.flatMap((u) => u.vocab);

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab,
  activities: withSortitTranslations(
    withHints(
      units.flatMap((u) => u.activities),
      hints,
    ),
    vocab,
    sortitTranslations,
  ),
};

export default content;
export type { UnitContent } from './types';
