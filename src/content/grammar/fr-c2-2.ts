import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c2-2';

/** French C2.2: one full lesson per unit, added unit by unit. */
export const FR22_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-c22-participe-present',
    title: 'Participe présent, gérondif or adjectif verbal?',
    tagline: 'Three forms in -ant, three jobs',
    level: LEVEL,
    summary:
      'The participe présent is a verb form: invariable, and it keeps its object. With en it becomes the gérondif, which says how or when and shares the subject of the main verb. The adjectif verbal is an adjective: it agrees, and a few verbs spell it differently.',
    sections: [
      section(
        'three-forms',
        'Three forms that look alike',
        p(
          'All three end in **-ant**, but they behave differently. The test is simple: does the word have an object or complement like a verb, or does it describe a noun like an adjective?',
        ),
        table(
          'The three -ant forms compared.',
          ['Form', 'Job', 'Agrees?', 'Example'],
          [
            [
              'participe présent',
              'verb: replaces “qui + verb” or gives a reason',
              'no',
              'Des visiteurs admirant la toile.',
            ],
            [
              'gérondif (en + -ant)',
              'adverb: how, when, why, even if',
              'no',
              'Elle a appris en copiant les maîtres.',
            ],
            [
              'adjectif verbal',
              'adjective: describes a noun, can follow être, accepts très',
              'yes',
              'Des couleurs très éclatantes.',
            ],
          ],
          0,
        ),
        p(
          'Form them all the same way: take the **nous** form of the present, drop **-ons** and add **-ant** (nous parlons → parlant). Three verbs are irregular: **être → étant**, **avoir → ayant**, **savoir → sachant**.',
        ),
        compare(
          {
            title: 'participe présent',
            question: 'Does it have an object and no agreement?',
            example: 'Une toile représentant un port.',
          },
          {
            title: 'adjectif verbal',
            question: 'Does it only describe the noun?',
            example: 'Une œuvre saisissante.',
          },
        ),
      ),
      section(
        'gerondif',
        'The gérondif: en + -ant',
        p(
          'The gérondif is an invariable adverbial phrase. It always has **the same subject as the main verb** and often says that two actions happen together, or how something is done: *En sortant, elle a salué le guide.* With **tout en** the two actions clash or go on in parallel: *Il admire l’artiste tout en critiquant son style.*',
        ),
        examples(
          [
            'En quittant la salle, elle a salué le conservateur.',
            'On leaving the room, she greeted the curator.',
          ],
          [
            'Il a trouvé son style en expérimentant sans cesse.',
            'He found his style by constantly experimenting.',
          ],
          ['Il restaure la fresque tout en chantant.', 'He restores the fresco while singing.'],
        ),
        mistake(
          'Watch out',
          '✗ J’ai vu des visiteurs en discutant devant la fresque.  ✓ J’ai vu des visiteurs discutant devant la fresque. (the visitors chat, not “I”)',
          '✗ Elle a quitté la salle en applaudissants.  ✓ Elle a quitté la salle en applaudissant.',
        ),
      ),
      section(
        'participe',
        'The participe présent in writing',
        p(
          'Without **en** the participle belongs to a noun or to the sentence: it replaces a relative clause (*des mécènes finançant la restauration*) or gives a reason (*N’ayant plus d’argent, il a vendu son atelier*). It is typical of written and formal French. The negation goes around it: **ne … pas** (*ne connaissant pas le peintre*) or n’ayant.',
        ),
        examples(
          ['Un guide parlant trois langues.', 'A guide who speaks three languages.'],
          [
            'Ne connaissant pas le peintre, je n’ai rien acheté.',
            'Not knowing the painter, I bought nothing.',
          ],
        ),
      ),
      section(
        'spelling',
        'Spelling: when participle and adjective differ',
        p(
          'For a few verbs the adjectif verbal is spelled differently from the participe présent, even though both sound the same. Learn the pairs by their ending.',
        ),
        table(
          'Participe présent and adjectif verbal spelled differently.',
          ['Ending', 'Participe présent', 'Adjectif verbal'],
          [
            ['-guant / -gant', 'naviguant, fatiguant', 'navigant, fatigant'],
            ['-quant / -cant', 'convainquant, provoquant', 'convaincant, provocant'],
            ['-ant / -ent', 'précédant, différant', 'précédent, différent'],
            ['-geant / -gent', 'négligeant, exigeant', 'négligent, exigent'],
          ],
        ),
        tip(
          'A quick check',
          'If you can put très before the word or use it after être, it is an adjective and it agrees: *Cette visite est très fatigante.*',
        ),
      ),
    ],
    related: ['fr-adjectives'],
    sources: [S.participle, S.gerund, S.adjectifVerbal, S.fatigant],
  },
];
