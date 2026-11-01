import type { LevelContent } from '../schema';
import { famille } from './u2-famille';
import { vieillir } from './u3-vieillir';
import { jeu } from './u1-jeu';

const units = [jeu, famille, vieillir];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
