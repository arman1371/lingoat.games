import type { LevelContent } from '../schema';
import { bonjour } from './u1-bonjour';
import { presenter } from './u2-presenter';
import { nombres } from './u3-nombres';
import { famille } from './u4-famille';
import { loisirs } from './u5-loisirs';
import { table } from './u6-table';
import { ville } from './u7-ville';

const units = [bonjour, presenter, nombres, famille, loisirs, table, ville];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
