import type { LevelContent } from '../schema';
import { sante } from './u1-sante';
import { medias } from './u2-medias';
import { consommer } from './u3-consommer';
import { voyage } from './u4-voyage';

const units = [sante, medias, consommer, voyage];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
