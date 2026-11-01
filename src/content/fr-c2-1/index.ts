import type { LevelContent } from '../schema';
import { registres } from './u1-registres';
import { humourUnit } from './u2-humour';
import { recit } from './u3-recit';
import { cause } from './u4-cause';

const units = [registres, humourUnit, recit, cause];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
