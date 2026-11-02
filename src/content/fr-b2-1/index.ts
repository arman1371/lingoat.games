import type { LevelContent } from '../schema';
import { identite } from './u1-identite';
import { parcours } from './u2-parcours';
import { sante } from './u3-sante';
import { doute } from './u4-doute';
import { sentiments } from './u5-sentiments';
import { migrations } from './u6-migrations';
import { demarches } from './u7-demarches';
import { cause } from './u8-cause';
import { recit } from './u9-recit';
import { cites } from './u10-cites';

const units = [
  identite,
  parcours,
  sante,
  doute,
  sentiments,
  migrations,
  demarches,
  cause,
  recit,
  cites,
];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
