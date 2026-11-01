import type { LevelContent } from '../schema';
import { ensemble } from './u1-ensemble';
import { souvenirs } from './u2-souvenirs';
import { travail } from './u3-travail';

const units = [ensemble, souvenirs, travail];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
