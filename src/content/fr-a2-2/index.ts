import type { LevelContent } from '../schema';
import { sante } from './u1-sante';
import { medias } from './u2-medias';

const units = [sante, medias];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
