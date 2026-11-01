import type { LevelContent } from '../schema';
import { journee } from './u1-journee';

const units = [journee];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
