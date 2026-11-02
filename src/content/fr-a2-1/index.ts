import type { LevelContent } from '../schema';
import { parcours } from './u1-parcours';
import { sorties } from './u2-sorties';
import { souvenirs } from './u3-souvenirs';
import { logement } from './u4-logement';
import { portrait } from './u5-portrait';

const units = [parcours, sorties, souvenirs, logement, portrait];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
