import type { LevelContent } from '../schema';
import { registres } from './u1-registres';

const units = [registres];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
