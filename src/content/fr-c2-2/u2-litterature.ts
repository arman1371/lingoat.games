import { byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  activity,
  cards,
  dictation,
  gap,
  meta,
  q,
  say,
  sent,
  tf,
  typed,
  unitFrC22,
  withLesson,
  withWhy,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-c2-2-litterature';
const LESSON = 'fr-c22-accord-participe' as const;

const livre = vocabList(U, 'The book world', [
  ['le romancier', 'novelist', '✍️'],
  ['le dramaturge', 'playwright', '🖋️'],
  ['la maison d’édition', 'publishing house', '🏢'],
  ['le manuscrit', 'manuscript', '📜'],
  ['la rentrée littéraire', 'autumn publishing season', '🍂'],
  ['le tirage', 'print run', '🖨️'],
  ['la parution', 'publication, release', '🆕'],
  ['la préface', 'preface, foreword', '📑'],
  ['le recueil', 'collection (of poems or stories)', '📚'],
  ['l’intrigue', 'plot', '🧩'],
  ['le dénouement', 'ending, resolution of the plot', '🏁'],
  ['le narrateur', 'narrator', '🗣️'],
  ['le roman policier', 'crime novel', '🕵️'],
]);

const scene = vocabList(U, 'On and behind the stage', [
  ['la scénographie', 'stage design', '🏗️'],
  ['le metteur en scène', 'director (of a play)', '🎬'],
  ['la distribution', 'cast', '👥'],
  ['les coulisses', 'backstage', '🚪'],
  ['le rideau', 'curtain', '🎭'],
  ['la tirade', 'long speech (on stage)', '🗯️'],
  ['la réplique', 'line, reply (in a play)', '💬'],
  ['le souffleur', 'prompter', '🤫'],
  ['la répétition générale', 'dress rehearsal', '🔁'],
  ['la troupe', 'theatre company', '🧑‍🤝‍🧑'],
  ['la salle comble', 'full house', '🎟️'],
  ['l’ovation', 'standing ovation', '👏'],
  ['le trac', 'stage fright', '😰'],
]);

const vocab = [...livre, ...scene];
const grammarTags = ['grammar', LESSON, 'fr-c22-litterature'] as const;

export const litterature: UnitContent = {
  unit: unitFrC22({
    id: U,
    order: 2,
    title: 'Littérature et théâtre',
    subtitle: 'Talk about books and the stage, and get the past participle agreement right',
    emoji: '📚',
    goals: [
      'Talk about publishing, plots and narrators',
      'Describe a play, its cast and what happens behind the scenes',
      'Agree the past participle correctly in the hard cases',
    ],
    grammar: [
      'With être the participle agrees with the subject; with avoir only with a direct object before it.',
      'Reflexive verbs: elle s’est levée, but elle s’est lavé les mains.',
      'Invariable: faire + infinitive, en (quantity), dû/pu before an infinitive, measure verbs.',
    ],
    vocabFields: ['The book world', 'On and behind the stage'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-livre',
      'flashcards',
      meta(
        'The book world',
        'Romancier, tirage, dénouement: the words of publishing and plots.',
        ['vocabulary', 'fr-c22-litterature'],
        1,
        4,
      ),
      flashcards(livre),
    ),

    activity(
      U,
      'flash-scene',
      'flashcards',
      meta(
        'On and behind the stage',
        'Coulisses, tirade, trac: the words of the theatre.',
        ['vocabulary', 'fr-c22-litterature'],
        1,
        4,
      ),
      flashcards(scene),
    ),

    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta(
        'Books and stage',
        'Name the word for the picture.',
        ['vocabulary', 'fr-c22-litterature'],
        1,
        4,
      ),
      quizEmoji([
        ...byDe(livre, 'le romancier', 'le dramaturge', 'la maison d’édition', 'le manuscrit'),
        ...byDe(scene, 'les coulisses', 'le rideau', 'l’ovation', 'le trac'),
      ]),
    ),

    activity(
      U,
      'listen-scene',
      'listen',
      meta(
        'Hear the theatre',
        'Listen and pick the meaning.',
        ['listening', 'fr-c22-litterature'],
        2,
        4,
      ),
      listen(scene),
    ),

    activity(
      U,
      'memory-livre',
      'memory',
      meta(
        'Publisher’s memory',
        'Match each word of the book world with its meaning.',
        ['vocabulary', 'fr-c22-litterature'],
        2,
        4,
      ),
      memory(
        byDe(
          livre,
          'le manuscrit',
          'le tirage',
          'la parution',
          'la préface',
          'le recueil',
          'l’intrigue',
          'le dénouement',
          'le narrateur',
        ),
      ),
    ),

    activity(
      U,
      'spell-livre',
      'spell',
      meta(
        'Spell it',
        'Unscramble, type and write what you hear. Accents are optional here.',
        ['spelling', 'fr-c22-litterature'],
        2,
        5,
      ),
      {
        items: [
          {
            id: 'sp-denouement',
            mode: 'unscramble',
            answer: 'dénouement',
            hint: 'ending, resolution of the plot',
            emoji: '🏁',
            speak: 'le dénouement',
          },
          {
            id: 'sp-manuscrit',
            mode: 'unscramble',
            answer: 'manuscrit',
            hint: 'manuscript',
            emoji: '📜',
            speak: 'le manuscrit',
          },
          {
            id: 'sp-souffleur',
            mode: 'type',
            answer: 'souffleur',
            hint: 'prompter',
            emoji: '🤫',
            speak: 'le souffleur',
          },
          {
            id: 'sp-intrigue',
            mode: 'type',
            answer: 'intrigue',
            hint: 'plot',
            emoji: '🧩',
            speak: 'l’intrigue',
          },
          dictation(
            'd1',
            'Le romancier a corrigé le manuscrit.',
            'The novelist corrected the manuscript.',
          ),
          dictation(
            'd2',
            'La troupe a salué sous les ovations.',
            'The company took its bow under the ovation.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-accord',
      'gapfill',
      meta(
        'Agree it or leave it',
        'Choose the right form of the past participle.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'Les pièces que nous avons ___ au festival étaient superbes.',
              'vues',
              ['vues', 'vu', 'vue', 'vus'],
              'The plays we saw at the festival were superb.',
              'With avoir the participle agrees with the direct object placed before it: que = les pièces (feminine plural).',
            ),
            {
              vu: 'The direct object que comes before the verb, so the participle agrees.',
              vue: 'Pièces is plural: add the -s.',
              vus: 'Pièces is feminine: add the -e.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Elle s’est ___ dans les coulisses.',
              'cachée',
              ['cachée', 'caché', 'cachés', 'cachées'],
              'She hid in the wings.',
              'In se cacher the pronoun se is the direct object, so the participle agrees with it: elle → cachée.',
            ),
            {
              caché: 'Se is the direct object and it is feminine: agree it.',
              cachés: 'Elle is singular.',
              cachées: 'Elle is singular.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'Les comédiennes se sont ___ les mains avant la scène.',
              'lavé',
              ['lavé', 'lavées', 'lavée', 'lavés'],
              'The actresses washed their hands before the scene.',
              'The direct object is les mains, and it comes after the participle: no agreement. Se is only an indirect object here.',
            ),
            {
              lavées:
                'Agreement would need the direct object before the participle; les mains follows it.',
              lavée: 'Les mains follows the participle: it stays invariable.',
              lavés: 'Les mains follows the participle: it stays invariable.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Les actrices se sont ___ des textos pendant la répétition.',
              'envoyé',
              ['envoyé', 'envoyées', 'envoyés', 'envoyée'],
              'The actresses sent each other text messages during the rehearsal.',
              'Se is an indirect object (to each other); des textos follows the participle: invariable.',
            ),
            {
              envoyées: 'Se is “to each other”, an indirect object: it never triggers agreement.',
              envoyés: 'Se is an indirect object and the actresses are feminine anyway.',
              envoyée: 'Se is an indirect object: no agreement.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'La pièce que le metteur en scène a ___ jouer a fait scandale.',
              'fait',
              ['fait', 'faite', 'faits', 'faites'],
              'The play that the director had staged caused a scandal.',
              'Faire followed by an infinitive is always invariable.',
            ),
            {
              faite: 'Faire + infinitive never agrees, even with a direct object before it.',
              faits: 'Faire + infinitive never agrees.',
              faites: 'Faire + infinitive never agrees.',
            },
          ),
          withWhy(
            gap(
              'g6',
              'Voici les répliques qu’elle a ___ apprendre.',
              'dû',
              ['dû', 'dues', 'due', 'dus'],
              'Here are the lines she had to learn.',
              'Devoir before an infinitive stays invariable: the direct object belongs to apprendre.',
            ),
            {
              dues: 'The direct object is the object of apprendre, not of devoir: no agreement.',
              due: 'Devoir before an infinitive stays invariable.',
              dus: 'Devoir before an infinitive stays invariable.',
            },
          ),
          typed(
            't1',
            'Ces tirades, la comédienne les a ___ (répéter) cent fois.',
            'répétées',
            'These speeches, the actress rehearsed them a hundred times.',
            'The direct object les (tirades, feminine plural) comes before a ; the participle agrees.',
          ),
          typed(
            't2',
            'Les quarante euros que ce roman m’a ___ (coûter) valaient la peine.',
            'coûté',
            'The forty euros this novel cost me were worth it.',
            'With a price the verb coûter stays invariable: the complement is an amount, not an object.',
          ),
          typed(
            't3',
            'Des pièces de Molière, nous en avons ___ (voir) plusieurs.',
            'vu',
            'Of Molière’s plays, we have seen several.',
            'En stands for a quantity: the participle stays invariable.',
          ),
          typed(
            't4',
            'Elle est ___ (aller) au théâtre avec sa sœur.',
            'allée',
            'She went to the theatre with her sister.',
            'With être the participle agrees with the subject: elle → allée.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sort-accord',
      'sortit',
      meta(
        'Agreement or not?',
        'Does the participle agree in this phrase, or stay invariable?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'Is the past participle in this phrase written with an agreement?',
        buckets: [
          { id: 'agrees', label: 'It agrees (-e, -s)', emoji: '✅' },
          { id: 'invariable', label: 'It stays invariable', emoji: '⛔' },
        ],
        items: cards('a', [
          ['les pièces que j’ai vues', 'agrees', 'the plays I saw'],
          ['elle s’est levée tôt', 'agrees', 'she got up early'],
          ['elles sont parties ensemble', 'agrees', 'they left together'],
          ['les lettres qu’il a écrites', 'agrees', 'the letters he wrote'],
          ['ces actrices, je les ai applaudies', 'agrees', 'these actresses, I applauded them'],
          ['la comédienne que j’ai vue jouer', 'agrees', 'the actress I saw acting'],
          ['elle a lu ces pièces', 'invariable', 'she read these plays'],
          [
            'elles se sont écrit pendant des années',
            'invariable',
            'they wrote to each other for years',
          ],
          ['la pièce qu’il a fait jouer', 'invariable', 'the play he had staged'],
          ['des romans, j’en ai lu beaucoup', 'invariable', 'novels, I have read many'],
          ['les rôles qu’elle a dû apprendre', 'invariable', 'the parts she had to learn'],
          ['elles se sont lavé les mains', 'invariable', 'they washed their hands'],
        ]),
      },
    ),

    activity(
      U,
      'quiz-participes',
      'quiz',
      meta('Pick the participle', 'Choose the correct written form.', [...grammarTags], 3, 6),
      {
        questions: [
          q(
            'p1',
            'La préface que l’éditeur a (écrire) est brillante.',
            'écrite',
            ['écrit', 'écrits', 'écrites'],
            'The direct object que (la préface) comes first: feminine singular.',
          ),
          q(
            'p2',
            'Les comédiens se sont (parler) pendant la pause.',
            'parlé',
            ['parlés', 'parlées', 'parlée'],
            'Parler takes à: se is an indirect object, so no agreement.',
          ),
          q(
            'p3',
            'Ils se sont (rendre) compte de leur erreur.',
            'rendu',
            ['rendus', 'rendue', 'rendues'],
            'The direct object is compte, which follows: invariable.',
          ),
          q(
            'p4',
            'La comédienne que j’ai (voir) jouer était sublime.',
            'vue',
            ['vu', 'vus', 'vues'],
            'The actress performs the action of the infinitive: the participle agrees.',
          ),
          q(
            'p5',
            'Les romans qu’elle a (faire) traduire sont rares.',
            'fait',
            ['faits', 'faite', 'faites'],
            'Faire + infinitive is always invariable.',
          ),
          q(
            'p6',
            'Elle est (partir) après le dernier acte.',
            'partie',
            ['parti', 'partis', 'parties'],
            'With être the participle agrees with the subject.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build the sentence', 'Put the words in the right order.', [...grammarTags], 2, 5),
      {
        items: [
          sent(
            's1',
            'The plays that we saw were superb.',
            ['Les', 'pièces', 'que', 'nous', 'avons', 'vues', 'étaient', 'superbes.'],
            { extra: ['vu'] },
          ),
          sent('s2', 'She got up early.', ['Elle', 's’est', 'levée', 'tôt.'], { extra: ['levé'] }),
          sent(
            's3',
            'The actresses wrote to each other for years.',
            ['Les', 'actrices', 'se', 'sont', 'écrit', 'pendant', 'des', 'années.'],
            { extra: ['écrites'] },
          ),
          sent(
            's4',
            'These speeches, she has rehearsed them a hundred times.',
            ['Ces', 'tirades,', 'elle', 'les', 'a', 'répétées', 'cent', 'fois.'],
            { extra: ['répété'] },
          ),
          sent(
            's5',
            'The director had the play translated.',
            ['Le', 'metteur', 'en', 'scène', 'a', 'fait', 'traduire', 'la', 'pièce.'],
            { extra: ['faite'] },
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Bookshop, backstage and interview',
        'Talk about books, a play and an author, with the right agreement.',
        ['communication', 'fr-c22-litterature'],
        3,
        6,
      ),
      {
        scenes: [
          {
            id: 'librairie',
            title: 'In the bookshop',
            emoji: '📖',
            setting: 'You talk to a bookseller about the new autumn novels. Use vous.',
            turns: [
              say(
                'Le libraire',
                'Avez-vous lu les nouveaux romans de la rentrée littéraire ?',
                'Have you read the new novels of the autumn season?',
              ),
              you(
                'J’en ai lu trois, et je les ai tous trouvés excellents.',
                [
                  'J’en ai lus trois, et je les ai tous trouvés excellents.',
                  'En stands for a quantity, so lu stays invariable.',
                ],
                [
                  'J’en ai lu trois, et je les ai tous trouvé excellents.',
                  'Les (the novels) comes before the verb: trouvés agrees with it.',
                ],
              ),
              say(
                'Le libraire',
                'Et la préface de l’éditeur ? Vous l’avez lue ?',
                'And the publisher’s preface? Did you read it?',
              ),
              you(
                'Oui, je l’ai lue d’une traite.',
                [
                  'Oui, je l’ai lu d’une traite.',
                  'L’ stands for la préface (feminine): the participle agrees, lue.',
                ],
                ['Oui, je l’ai lues d’une traite.', 'La préface is singular: lue, without the -s.'],
              ),
            ],
          },
          {
            id: 'coulisses',
            title: 'Backstage',
            emoji: '🚪',
            setting: 'You are a young actor and talk to a colleague before the show. Use tu.',
            turns: [
              say(
                'Inès',
                'Tu as vu ma partenaire ? Elle s’est cachée dans les coulisses.',
                'Have you seen my co-star? She hid in the wings.',
              ),
              you(
                'Oui, je l’ai vue : elle s’est enfermée dans sa loge.',
                [
                  'Oui, je l’ai vu : elle s’est enfermée dans sa loge.',
                  'L’ is your female co-star: vue.',
                ],
                [
                  'Oui, je l’ai vue : elle s’est enfermé dans sa loge.',
                  'Se is the direct object and feminine: enfermée.',
                ],
              ),
              say(
                'Inès',
                'Elle a répété ses tirades toute la nuit.',
                'She rehearsed her speeches all night.',
              ),
              you(
                'Je sais, elle me les a fait réciter deux fois.',
                [
                  'Je sais, elle me les a faites réciter deux fois.',
                  'Faire followed by an infinitive never agrees.',
                ],
                [
                  'Je sais, elle me les a faits réciter deux fois.',
                  'Faire followed by an infinitive never agrees.',
                ],
              ),
            ],
          },
          {
            id: 'auteur',
            title: 'With the author',
            emoji: '✍️',
            setting: 'At a book signing you talk to a novelist. Use vous.',
            turns: [
              say(
                'Le romancier',
                'Les personnages que j’ai inventés me surprennent encore.',
                'The characters I invented still surprise me.',
              ),
              you(
                'Ceux que vous avez fait vivre dans vos romans sont très attachants.',
                [
                  'Ceux que vous avez faits vivre dans vos romans sont très attachants.',
                  'Faire + infinitive is invariable, whatever comes before.',
                ],
                [
                  'Ceux que vous avez fait vivres dans vos romans sont très attachants.',
                  'Vivre stays in the infinitive after faire.',
                ],
              ),
              say(
                'Le romancier',
                'Vous avez l’air de bien connaître mes livres.',
                'You seem to know my books well.',
              ),
              you(
                'Je les ai tous lus, et je les ai même relus plusieurs fois.',
                [
                  'Je les ai tous lu, et je les ai même relu plusieurs fois.',
                  'Les (your books) comes before the verb: lus and relus agree.',
                ],
                [
                  'Je les ai tous lus, et je les ai même relu plusieurs fois.',
                  'Both participles follow the same rule: relus agrees with les too.',
                ],
              ),
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      meta(
        'Theatre and agreement blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'fr-c22-litterature'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'With avoir the participle agrees with a direct object placed before it.', true),
          tf(
            'b2',
            '“Elle s’est lavée les mains” is correct.',
            false,
            'The direct object is les mains, after the participle: elle s’est lavé les mains.',
          ),
          tf('b3', '“Les pièces qu’il a fait jouer” is correct.', true),
          tf(
            'b4',
            'Faire before an infinitive agrees with the direct object.',
            false,
            'It is always invariable: fait.',
          ),
          tf('b5', '“Des romans, j’en ai lu beaucoup” is correct.', true),
          tf(
            'b6',
            '“Elle est parti” is correct.',
            false,
            'With être the participle agrees with the subject: elle est partie.',
          ),
          tf('b7', '“Le dénouement” is where the plot is resolved.', true),
          tf(
            'b8',
            '“Un souffleur” plays a wind instrument in the orchestra.',
            false,
            'A souffleur is the prompter, who whispers forgotten lines.',
          ),
          tf(
            'b9',
            '“Ils se sont parlés” is correct.',
            false,
            'Parler takes à, so se is an indirect object: ils se sont parlé.',
          ),
          tf(
            'b10',
            '“Les lettres qu’elles se sont écrites” is correct.',
            true,
            'Here the direct object is que (les lettres), placed before the verb.',
          ),
          tf('b11', '“La rentrée littéraire” is the autumn publishing season.', true),
          tf(
            'b12',
            '“Le tirage” is a long speech on stage.',
            false,
            'A tirage is a print run. The long speech is a tirade.',
          ),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Stage and page challenge',
        'Vocabulary and agreement in one round.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          withLesson(
            q(
              'c1',
              'Les actrices se sont (téléphoner) toute la soirée.',
              'téléphoné',
              ['téléphonées', 'téléphonés', 'téléphonée'],
              'Téléphoner takes à: se is indirect, so the participle is invariable.',
            ),
            LESSON,
          ),
          q('c2', 'Que veut dire « la tirade » ?', 'a long speech on stage', [
            'the stage curtain',
            'a prompter’s note',
            'the cast list',
          ]),
          withLesson(
            q(
              'c3',
              'La comédienne que j’ai (entendre) chanter était sublime.',
              'entendue',
              ['entendu', 'entendus', 'entendues'],
              'The actress sings, so the participle agrees with que.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c4',
              'Les rôles qu’elle a (devoir) apprendre étaient longs.',
              'dû',
              ['dus', 'due', 'dues'],
              'Devoir before an infinitive stays invariable.',
            ),
            LESSON,
          ),
          q('c5', 'Que veut dire « le dénouement » ?', 'the ending where the plot is resolved', [
            'the first chapter',
            'the narrator’s voice',
            'the publisher’s name',
          ]),
          withLesson(
            q(
              'c6',
              'Ils se sont (apercevoir) de leur erreur.',
              'aperçus',
              ['aperçu', 'aperçue', 'aperçues'],
              'Se is the direct object here, so the participle agrees with ils.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c7',
              'Les quarante euros que ce billet a (coûter) étaient bien dépensés.',
              'coûté',
              ['coûtés', 'coûtée', 'coûtées'],
              'A price complement does not trigger agreement.',
            ),
            LESSON,
          ),
          q('c8', 'Que veut dire « la maison d’édition » ?', 'a publishing house', [
            'a bookshop',
            'a writers’ retreat',
            'a library',
          ]),
        ],
      },
    ),
  ],
};
