import type { LevelContent } from '../schema';
import { actu } from './u1-actu';
import { sante } from './u2-sante';
import { solidarite } from './u3-solidarite';
import { justice } from './u4-justice';
import { culture } from './u5-culture';
import { science } from './u6-science';
import { economie } from './u7-economie';

const units = [actu, sante, solidarite, justice, culture, science, economie];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
