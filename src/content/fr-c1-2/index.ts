import type { LevelContent } from '../schema';
import { famille } from './u2-famille';
import { vieillir } from './u3-vieillir';
import { sante } from './u4-sante';
import { jeu } from './u1-jeu';
import { solidarite } from './u5-solidarite';

const units = [jeu, famille, vieillir, sante, solidarite];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
