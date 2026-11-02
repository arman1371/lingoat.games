import type { LevelContent } from '../schema';
import { medias } from './u1-medias';
import { societe } from './u2-societe';
import { egalite } from './u3-egalite';
import { alimentation } from './u4-alimentation';
import { sante } from './u5-sante';
import { ville } from './u6-ville';
import { famille7 } from './u7-famille';
import { culture } from './u8-culture';
import { litterature } from './u9-litterature';

const units = [
  medias,
  societe,
  egalite,
  alimentation,
  sante,
  ville,
  famille7,
  culture,
  litterature,
];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
