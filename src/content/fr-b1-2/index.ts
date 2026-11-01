import type { LevelContent } from '../schema';
import { voyage } from './u1-voyage';

const units = [voyage];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
