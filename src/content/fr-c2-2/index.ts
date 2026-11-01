import type { LevelContent } from '../schema';
import { arts } from './u1-arts';
import { litterature } from './u2-litterature';
import { cinema } from './u3-cinema';
import { patrimoine } from './u4-patrimoine';
import { climatUnit } from './u8-climat';
import { droit } from './u5-droit';
import { expressions } from './u9-expressions';
import { engagement } from './u7-engagement';
import { medias } from './u6-medias';

const units = [
  arts,
  litterature,
  cinema,
  patrimoine,
  droit,
  medias,
  engagement,
  climatUnit,
  expressions,
];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
