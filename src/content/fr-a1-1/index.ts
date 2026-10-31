import type { LevelContent } from '../schema';
import { bonjour } from './u1-bonjour';
import { presenter } from './u2-presenter';
import { nombres } from './u3-nombres';
import { famille } from './u4-famille';

const units = [bonjour, presenter, nombres, famille];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
