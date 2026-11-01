import type { LevelContent } from '../schema';
import { identite } from './u1-identite';
import { parcours } from './u2-parcours';
import { sante } from './u3-sante';

const units = [identite, parcours, sante];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
