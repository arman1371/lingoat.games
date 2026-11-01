import type { LevelContent } from '../schema';
import { jeu } from './u1-jeu';

const units = [jeu];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
