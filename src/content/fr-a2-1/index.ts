import type { LevelContent } from '../schema';
import { parcours } from './u1-parcours';

const units = [parcours];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
