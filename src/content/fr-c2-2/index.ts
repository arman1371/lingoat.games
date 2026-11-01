import type { LevelContent } from '../schema';
import { arts } from './u1-arts';

const units = [arts];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
