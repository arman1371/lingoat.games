import type { LevelContent } from '../schema';
import { medias } from './u1-medias';
import { societe } from './u2-societe';

const units = [medias, societe];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
