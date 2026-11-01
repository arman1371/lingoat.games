import type { LevelContent } from '../schema';
import { ensemble } from './u1-ensemble';

const units = [ensemble];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
