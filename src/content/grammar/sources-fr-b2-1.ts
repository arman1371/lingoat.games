import type { Source } from './sources';

/** Pages fetched while writing the French B2.1 lessons (see docs/grammar-sources.md). */
const wp = (page: string, title: string): Source => ({
  title: `Wikipédia: ${title}`,
  url: `https://fr.wikipedia.org/wiki/${encodeURI(page)}`,
});

export const FRB21_SOURCES = {
  imparfait: wp('Imparfait_de_l’indicatif_en_français', 'Imparfait de l’indicatif en français'),
  passeCompose: wp('Passé_composé', 'Passé composé'),
  plusQueParfait: wp(
    'Indicatif_plus-que-parfait_en_français',
    'Indicatif plus-que-parfait en français',
  ),
};
