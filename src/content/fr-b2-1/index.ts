import type { LevelContent } from '../schema';
import { identite } from './u1-identite';
import { parcours } from './u2-parcours';
import { sante } from './u3-sante';
import { doute } from './u4-doute';

const units = [identite, parcours, sante, doute];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
