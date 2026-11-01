import type { LevelContent } from '../schema';
import { humourUnit } from './u2-humour';
import { recit } from './u3-recit';
import { registres } from './u1-registres';

const units = [registres, humourUnit, recit];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
