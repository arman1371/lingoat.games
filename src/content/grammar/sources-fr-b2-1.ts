import type { Source } from './sources';

/** Pages fetched while writing the French B2.1 lessons (see docs/grammar-sources.md). */
const wp = (page: string, title: string): Source => ({
  title: `Wikipédia: ${title}`,
  url: `https://fr.wikipedia.org/wiki/${encodeURI(page)}`,
});

export const FRB21_SOURCES = {
  imparfait: wp('Imparfait_de_l’indicatif_en_français', 'Imparfait de l’indicatif en français'),
  passeCompose: wp('Passé_composé', 'Passé composé'),
  participe: wp('Accord_du_participe_passé_en_français', 'Accord du participe passé en français'),
  conjonction: wp('Conjonction_de_subordination', 'Conjonction de subordination'),
  circonstancielle: wp(
    'Proposition_subordonnée_circonstancielle',
    'Proposition subordonnée circonstancielle',
  ),
  conditionnel: wp('Conditionnel_en_français', 'Conditionnel en français'),
  imperatif: wp('Impératif_(grammaire)', 'Impératif (grammaire)'),
  subjonctif: wp('Subjonctif_en_français', 'Subjonctif en français'),
  subjonctifPresent: wp('Subjonctif_présent_en_français', 'Subjonctif présent en français'),
  subjonctifPasse: wp('Subjonctif_passé', 'Subjonctif passé'),
  conjonctive: wp('Proposition_subordonnée_conjonctive', 'Proposition subordonnée conjonctive'),
  passeSimple: wp('Passé_simple_en_français', 'Passé simple en français'),
  passeAnterieur: wp('Passé_antérieur_en_français', 'Passé antérieur en français'),
  relatif: wp('Pronom_relatif_en_français', 'Pronom relatif en français'),
  relative: wp('Proposition_subordonnée_relative', 'Proposition subordonnée relative'),
  voixPassive: wp('Voix_passive', 'Voix passive'),
  voixPronominale: wp('Voix_pronominale', 'Voix pronominale'),
  plusQueParfait: wp(
    'Indicatif_plus-que-parfait_en_français',
    'Indicatif plus-que-parfait en français',
  ),
};
