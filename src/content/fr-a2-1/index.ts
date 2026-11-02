import type { LevelContent } from '../schema';
import { parcours } from './u1-parcours';
import { sorties } from './u2-sorties';
import { souvenirs } from './u3-souvenirs';
import { logement } from './u4-logement';
import { portrait } from './u5-portrait';
import { futur } from './u6-futur';
import { cuisine } from './u7-cuisine';

const units = [parcours, sorties, souvenirs, logement, portrait, futur, cuisine];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
