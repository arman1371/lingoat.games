import type { LevelContent } from '../schema';
import { registres } from './u1-registres';
import { humourUnit } from './u2-humour';
import { recit } from './u3-recit';
import { cause } from './u4-cause';
import { concessionUnit } from './u5-concession';
import { subjonctif } from './u6-subjonctif';
import { relief } from './u7-relief';

const units = [registres, humourUnit, recit, cause, concessionUnit, subjonctif, relief];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
