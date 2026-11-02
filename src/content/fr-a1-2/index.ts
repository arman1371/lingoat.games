import type { LevelContent } from '../schema';
import { journee } from './u1-journee';
import { fetes } from './u2-fetes';
import { logement } from './u3-logement';
import { vacances } from './u4-vacances';
import { sante } from './u5-sante';

const units = [journee, fetes, logement, vacances, sante];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
