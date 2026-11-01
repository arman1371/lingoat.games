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
  {
    id: 'fr-c22-accord-participe',
    title: 'Agreeing the past participle',
    tagline: 'When does the participle take -e or -s?',
    level: LEVEL,
    summary:
      'With être the participle agrees with the subject. With avoir it agrees only with a direct object placed before it. Reflexive verbs agree with se when se is the direct object. Some cases stay invariable: faire + infinitive, en for a quantity, and verbs of price or duration.',
    sections: [
      section(
        'basics',
        'être and avoir',
        table(
          'Agreement of the past participle.',
          ['Auxiliary', 'Agrees with', 'Example'],
          [
            ['être', 'the subject', 'Elle est partie après le dernier acte.'],
            ['avoir, object after', 'nothing', 'Elle a lu ces pièces.'],
            ['avoir, object before', 'the object', 'Les pièces que j’ai vues étaient superbes.'],
          ],
          2,
        ),
        p(
          'The direct object can come before the verb as **que**, as a pronoun (**le, la, l’, les**) or in a question (*Quelles pièces avez-vous vues ?*). Ask yourself: *what did I see?* If the answer stands in front of the participle, agree it.',
        ),
      ),
      section(
        'reflexive',
        'Reflexive verbs',
        p(
          'In *elle s’est levée*, **se** is the direct object (she raised herself), so the participle agrees. In *elle s’est lavé les mains* the direct object is **les mains**, which follows, so there is no agreement. Verbs that take **à** (*se parler, se téléphoner, s’écrire, se plaire*) have an indirect **se**: the participle never agrees.',
        ),
        table(
          'Reflexive verbs and agreement.',
          ['Type', 'Example', 'Agreement'],
          [
            ['se = direct object', 'Elle s’est cachée.', 'yes'],
            ['direct object after', 'Elles se sont lavé les mains.', 'no'],
            ['se = indirect (à)', 'Elles se sont parlé.', 'no'],
            ['direct object before', 'Les lettres qu’elles se sont écrites.', 'yes'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Elles se sont lavées les mains.  ✓ Elles se sont lavé les mains.',
          '✗ Ils se sont parlés.  ✓ Ils se sont parlé.',
        ),
      ),
      section(
        'invariable',
        'Cases that stay invariable',
        p(
          '**Faire + infinitive** never agrees. After **devoir, pouvoir, vouloir** the participle stays invariable because the object belongs to the infinitive. With **en** standing for a quantity there is no agreement. A price or a duration is an amount, not an object: *les quarante euros que ce roman m’a coûté*.',
        ),
        examples(
          ['La pièce que le metteur en scène a fait jouer.', 'The play the director had staged.'],
          ['Voici les répliques qu’elle a dû apprendre.', 'Here are the lines she had to learn.'],
          ['Des romans, j’en ai lu beaucoup.', 'Novels, I have read many.'],
        ),
        tip(
          'With an infinitive',
          'After voir, entendre or laisser, agree only if the object does the action of the infinitive: *la comédienne que j’ai vue jouer* (she acts), but *les répliques qu’il a entendu chuchoter* (the lines are whispered).',
        ),
      ),
    ],
    related: ['fr-c22-participe-present'],
    sources: [S.pastParticipleAgreement],
  },
  {
    id: 'fr-c22-passif',
    title: 'The passive and its alternatives',
    tagline: 'Who does what, and who do we leave out?',
    level: LEVEL,
    summary:
      'The passive is être + past participle, and the participle agrees with the subject. The agent comes after par (or de). French often prefers on + active verb, a pronominal verb (se vendre) or se faire + infinitive.',
    sections: [
      section(
        'form',
        'Building the passive',
        p(
          'Only verbs with a direct object have a passive. The object becomes the subject, **être** takes the tense of the active verb, and the participle agrees with the new subject.',
        ),
        table(
          'Active and passive in several tenses.',
          ['Tense', 'Active', 'Passive'],
          [
            ['présent', 'Le jury prime le film.', 'Le film est primé par le jury.'],
            ['passé composé', 'Le jury a primé le film.', 'Le film a été primé par le jury.'],
            [
              'futur',
              'Un critique présentera les films.',
              'Les films seront présentés par un critique.',
            ],
            ['imparfait', 'On doublait les films.', 'Les films étaient doublés.'],
          ],
          1,
        ),
        p(
          'The agent is introduced by **par** for a concrete action (*primé par un jury*) and by **de** with feelings or description (*aimé de tous, couvert de gloire*). It is often left out: *Le voleur a été arrêté.*',
        ),
      ),
      section(
        'alternatives',
        'Avoiding the passive',
        p(
          'French uses the passive less than English. Four common alternatives keep the agent out of sight or put the focus where you want it.',
        ),
        table(
          'Ways to avoid the passive.',
          ['Way', 'Example', 'Use'],
          [
            ['on + active verb', 'On a projeté trois courts-métrages.', 'unnamed, general agent'],
            ['pronominal passive', 'Les billets se vendent vite.', 'a general fact about things'],
            [
              'se faire + infinitive',
              'Il s’est fait applaudir.',
              'a person who undergoes something',
            ],
            [
              'impersonal passive',
              'Il a été décidé de prolonger le festival.',
              'formal, administrative',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Le film a été tournée à Marseille.  ✓ Le film a été tourné à Marseille.',
          '✗ Il s’est fait applaudi.  ✓ Il s’est fait applaudir. (the infinitive follows, and faire does not agree)',
        ),
        tip(
          'se voir + infinitive',
          'Se voir is used for something received: *Le film se voit décerner un prix.* It is formal and fits news writing.',
        ),
      ),
    ],
    related: ['fr-c22-accord-participe'],
    sources: [S.passive],
  },
];
