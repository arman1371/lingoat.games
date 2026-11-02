import type { LevelContent } from '../schema';
import { medias } from './u1-medias';
import { societe } from './u2-societe';
import { egalite } from './u3-egalite';
import { alimentation } from './u4-alimentation';
import { sante } from './u5-sante';

const units = [medias, societe, egalite, alimentation, sante];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
