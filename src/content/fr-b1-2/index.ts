import type { LevelContent } from '../schema';
import { voyage } from './u1-voyage';
import { paysages } from './u2-paysages';
import { hypotheses } from './u3-hypotheses';
import { regrets } from './u4-regrets';
import { planete } from './u5-planete';
import { convaincre } from './u6-convaincre';
import { ville } from './u7-ville';
import { rapporter } from './u8-rapporter';
import { etudes } from './u9-etudes';

const units = [
  voyage,
  paysages,
  hypotheses,
  regrets,
  planete,
  convaincre,
  ville,
  rapporter,
  etudes,
];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
