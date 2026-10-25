import type { LevelContent } from '../schema';
import { withSortitTranslations } from '../translations';
import { sortitTranslations } from './translations';
import { beziehungen } from './u1-beziehungen';
import { besitz } from './u2-besitz';
import { wohlbefinden } from './u3-wohlbefinden';
import { kommunikation } from './u4-kommunikation';
import { teamgeist } from './u5-teamgeist';
import { lebenswege } from './u6-lebenswege';
import { gesellschaft } from './u7-gesellschaft';
import { wohnen } from './u8-wohnen';
import { medien } from './u9-medien';
import { wissenschaft } from './u10-wissenschaft';
import { unterwegs } from './u11-unterwegs';
import { klima } from './u12-klima';

const units = [
  beziehungen,
  besitz,
  wohlbefinden,
  kommunikation,
  teamgeist,
  lebenswege,
  gesellschaft,
  wohnen,
  medien,
  wissenschaft,
  unterwegs,
  klima,
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
