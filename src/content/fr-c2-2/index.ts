import type { LevelContent } from '../schema';
import { arts } from './u1-arts';
import { litterature } from './u2-litterature';

const units = [arts, litterature];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
