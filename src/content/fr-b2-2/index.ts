import type { LevelContent } from '../schema';
import { actu } from './u1-actu';
import { sante } from './u2-sante';

const units = [actu, sante];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
