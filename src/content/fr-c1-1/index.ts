import type { LevelContent } from '../schema';
import { medias } from './u1-medias';

const units = [medias];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
