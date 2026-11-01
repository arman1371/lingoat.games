import type { LevelContent } from '../schema';
import { voyage } from './u1-voyage';
import { paysages } from './u2-paysages';
import { hypotheses } from './u3-hypotheses';

const units = [voyage, paysages, hypotheses];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
