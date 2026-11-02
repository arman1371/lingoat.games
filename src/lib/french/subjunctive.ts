import { conjugateFr, type FrenchForms } from './conjugation';
import { FRENCH_PRONOUNS } from '../persons';

const forms = (...f: [string, string, string, string, string, string]): FrenchForms =>
  Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, f[i]])) as FrenchForms;

/** Verbs whose subjunctive stem is not the ils-stem of the present (que je sois, que tu fasses). */
const IRREGULAR: Record<string, FrenchForms> = {
  être: forms('sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'),
  avoir: forms('aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'),
  aller: forms('aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'),
  faire: forms('fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'),
  pouvoir: forms('puisse', 'puisses', 'puisse', 'puissions', 'puissiez', 'puissent'),
  savoir: forms('sache', 'saches', 'sache', 'sachions', 'sachiez', 'sachent'),
  vouloir: forms('veuille', 'veuilles', 'veuille', 'voulions', 'vouliez', 'veuillent'),
};

/** The stem of the nous form keeps its sound before -ions: mangeons → mangions, commençons → commencions. */
function nousStem(nous: string): string {
  const stem = nous.slice(0, -3);
  if (stem.endsWith('ge')) return stem.slice(0, -1);
  if (stem.endsWith('ç')) return `${stem.slice(0, -1)}c`;
  return stem;
}

/**
 * The present subjunctive after "que": the stem of ils (ils prennent → que je prenne) with
 * -e, -es, -e, -ions, -iez, -ent; nous and vous use the stem of nous (que nous prenions).
 * Built on `conjugateFr`, so it covers the same verbs, plus the irregular subjunctive stems.
 */
export function subjunctiveFr(verb: string): FrenchForms {
  const irregular = IRREGULAR[verb];
  if (irregular) return irregular;
  const present = conjugateFr(verb);
  const ils = present['ils/elles'];
  const nous = present.nous;
  if (!ils.endsWith('ent') || !nous.endsWith('ons')) {
    throw new Error(`No subjunctive rule for "${verb}"`);
  }
  const stem = ils.slice(0, -3);
  const nStem = nousStem(nous);
  return forms(`${stem}e`, `${stem}es`, `${stem}e`, `${nStem}ions`, `${nStem}iez`, `${stem}ent`);
}
