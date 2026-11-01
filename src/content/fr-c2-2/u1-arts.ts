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

const U = 'fr-c2-2-arts';
const LESSON = 'fr-c22-participe-present' as const;

const monde = vocabList(U, 'The art world', [
  ['le vernissage', 'opening night of an exhibition', '🥂'],
  ['le commissaire d’exposition', 'exhibition curator', '🧑‍💼'],
  ['le chef-d’œuvre', 'masterpiece', '🏆'],
  ['la rétrospective', 'retrospective', '🕰️'],
  ['le mécène', 'patron, sponsor', '💰'],
  ['l’accrochage', 'hanging (of an exhibition)', '🪝'],
  ['le cartel', 'museum label next to a work', '🏷️'],
  ['la salle des ventes', 'auction room', '🔨'],
  ['le faussaire', 'forger', '🕵️'],
  ['la contrefaçon', 'forgery, counterfeit', '🧾'],
  ['la toile', 'canvas, painting', '🎨'],
  ['le socle', 'plinth', '🗿'],
  ['le vitrail', 'stained-glass window', '🪟'],
  ['la fresque', 'fresco, mural', '🏛️'],
]);

const juger = vocabList(U, 'Judging a work', [
  ['saisissant', 'striking, gripping', '⚡'],
  ['bouleversant', 'deeply moving', '😢'],
  ['foisonnant', 'teeming, richly detailed', '🌿'],
  ['épuré', 'pared-down, clean-lined', '⬜'],
  ['tape-à-l’œil', 'flashy, showy', '✨'],
  ['intemporel', 'timeless', '♾️'],
  ['déroutant', 'disconcerting', '🌀'],
  ['dépouillé', 'bare, stripped-back', '🥀'],
  ['évoquer', 'to evoke', '💭'],
  ['dégager', 'to give off (an atmosphere)', '🌫️'],
  ['mettre en scène', 'to stage', '🎬'],
  ['rendre hommage à', 'to pay tribute to', '🙇'],
  ['le parti pris', 'bold stance, deliberate choice', '📌'],
  ['le propos', 'message, subject matter (of a work)', '💬'],
]);

const vocab = [...monde, ...juger];
const grammarTags = ['grammar', LESSON, 'fr-c22-art'] as const;

export const arts: UnitContent = {
  unit: unitFrC22({
    id: U,
    order: 1,
    title: 'Arts et expositions',
    subtitle: 'Talk about exhibitions, judge a work and describe it with present participles',
    emoji: '🖼️',
    goals: [
      'Talk and write about exhibitions, collections and the art market',
      'Judge a work with precise, nuanced adjectives and verbs',
      'Tell the participe présent, the gérondif and the adjectif verbal apart',
    ],
    grammar: [
      'Participe présent (-ant): invariable, keeps its object: des visiteurs admirant la toile.',
      'Gérondif (en + -ant): how or when, same subject as the main verb: en copiant les maîtres.',
      'Adjectif verbal: agrees like an adjective: des couleurs éclatantes.',
      'Spelling pairs: provoquant / provocant, fatiguant / fatigant, différant / différent.',
    ],
    vocabFields: ['The art world', 'Judging a work'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-monde',
      'flashcards',
      meta(
        'The art world',
        'Vernissage, cartel, faussaire: who and what is behind an exhibition.',
        ['vocabulary', 'fr-c22-art'],
        1,
        4,
      ),
      flashcards(monde),
    ),

    activity(
      U,
      'flash-juger',
      'flashcards',
      meta(
        'Judging a work',
        'Saisissant, épuré, évoquer: words for criticism.',
        ['vocabulary', 'fr-c22-art'],
        1,
        4,
      ),
      flashcards(juger),
    ),

    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta(
        'Behind the exhibition',
        'Name the word for the picture.',
        ['vocabulary', 'fr-c22-art'],
        1,
        4,
      ),
      quizEmoji(
        byDe(
          monde,
          'le vernissage',
          'le chef-d’œuvre',
          'la salle des ventes',
          'le faussaire',
          'la toile',
          'le socle',
          'le vitrail',
          'le mécène',
        ),
      ),
    ),

    activity(
      U,
      'listen-juger',
      'listen',
      meta('Hear the critics', 'Listen and pick the meaning.', ['listening', 'fr-c22-art'], 2, 4),
      listen(juger),
    ),

    activity(
      U,
      'memory-juger',
      'memory',
      meta(
        'Critic’s memory',
        'Match each judgement with its meaning.',
        ['vocabulary', 'fr-c22-art'],
        2,
        4,
      ),
      memory(
        byDe(
          juger,
          'saisissant',
          'bouleversant',
          'foisonnant',
          'épuré',
          'tape-à-l’œil',
          'intemporel',
          'déroutant',
          'dépouillé',
        ),
      ),
    ),

    activity(
      U,
      'spell-monde',
      'spell',
      meta(
        'Spell it',
        'Unscramble, type and write what you hear. Accents are optional here.',
        ['spelling', 'fr-c22-art'],
        2,
        5,
      ),
      {
        items: [
          {
            id: 'sp-faussaire',
            mode: 'unscramble',
            answer: 'faussaire',
            hint: 'forger',
            emoji: '🕵️',
            speak: 'le faussaire',
          },
          {
            id: 'sp-retrospective',
            mode: 'unscramble',
            answer: 'rétrospective',
            hint: 'retrospective',
            emoji: '🕰️',
            speak: 'la rétrospective',
          },
          {
            id: 'sp-vernissage',
            mode: 'type',
            answer: 'vernissage',
            hint: 'opening night of an exhibition',
            emoji: '🥂',
            speak: 'le vernissage',
          },
          {
            id: 'sp-contrefacon',
            mode: 'type',
            answer: 'contrefaçon',
            hint: 'forgery, counterfeit',
            emoji: '🧾',
            speak: 'la contrefaçon',
          },
          dictation(
            'd1',
            'Le commissaire a organisé une rétrospective.',
            'The curator organised a retrospective.',
          ),
          dictation(
            'd2',
            'Cette œuvre dégage une atmosphère déroutante.',
            'This work gives off a disconcerting atmosphere.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-participes',
      'gapfill',
      meta(
        'Participe, gérondif or adjectif?',
        'Choose the form that fits the sentence.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'Les visiteurs sortent du musée en ___ les sculptures.',
              'admirant',
              ['admirant', 'admirants', 'admiré', 'admirent'],
              'The visitors leave the museum admiring the sculptures.',
              'En + participe présent is the gérondif: it says how the action happens and never changes.',
            ),
            {
              admirants: 'After en the form is invariable: there is no -s.',
              admiré: 'The gérondif needs the -ant form, not the past participle.',
              admirent: 'A conjugated verb cannot follow en.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Cette exposition est vraiment ___.',
              'passionnante',
              ['passionnante', 'passionnant', 'passionnantes', 'passionnent'],
              'This exhibition is truly fascinating.',
              'After est, passionnant is an adjectif verbal: it agrees with exposition (feminine, singular).',
            ),
            {
              passionnant: 'The adjectif verbal agrees: exposition is feminine, so add -e.',
              passionnantes: 'Exposition is singular: no -s.',
              passionnent: 'That is a verb form (they thrill); after est you need an adjective.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'Des couleurs ___ éclairent la toile.',
              'éclatantes',
              ['éclatantes', 'éclatant', 'éclatants', 'éclatante'],
              'Dazzling colours light up the canvas.',
              'Éclatant is an adjectif verbal here, so it agrees with couleurs: feminine plural.',
            ),
            {
              éclatant: 'It describes the noun like an adjective, so it must agree.',
              éclatants: 'Couleur is feminine: -es, not -s alone.',
              éclatante: 'Couleurs is plural: add the -s.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'J’ai vu des visiteurs ___ devant la fresque.',
              'discutant',
              ['discutant', 'discutants', 'en discutant', 'discutés'],
              'I saw visitors chatting in front of the fresco.',
              'The participe présent follows the noun and stays invariable: it replaces “qui discutaient”.',
            ),
            {
              discutants: 'As a verb the participe présent never takes an -s.',
              'en discutant':
                'The gérondif would make “I” the one chatting; here the visitors chat, so the participle follows the noun.',
              discutés: 'The past participle would say they were discussed.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Elle a appris à peindre ___ les maîtres.',
              'en copiant',
              ['en copiant', 'copiant', 'copiante', 'en copié'],
              'She learned to paint by copying the masters.',
              'To say how something is done, use the gérondif: en + -ant.',
            ),
            {
              copiant:
                'Without en the form would qualify a noun; for the manner you need en copiant.',
              copiante: 'There is no agreement in a gérondif.',
              'en copié': 'After en the -ant form is needed.',
            },
          ),
          typed(
            't1',
            'Ces peintures sont ___ (provoquer) : elles choquent le public.',
            'provocantes',
            'These paintings are provocative: they shock the public.',
            'As an adjectif verbal the stem is provoc- (provocant), and it agrees: feminine plural.',
          ),
          typed(
            't2',
            'En ___ (négliger) la restauration, la ville a perdu sa fresque.',
            'négligeant',
            'By neglecting the restoration, the town lost its fresco.',
            'The gérondif keeps the verb spelling and the e after g: négligeant. The adjective is négligent.',
          ),
          typed(
            't3',
            'Cette visite guidée est ___ (fatiguer).',
            'fatigante',
            'This guided tour is tiring.',
            'The adjectif verbal drops the u: fatigant, and agrees: fatigante. The participle is fatiguant.',
          ),
          typed(
            't4',
            'Les deux musées présentent des styles ___ (différer).',
            'différents',
            'The two museums present different styles.',
            'The adjectif verbal is spelled différent (with -ent) and agrees: différents. The participle is différant.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-forms',
      'sortit',
      meta(
        'Which -ant form?',
        'Participe présent, gérondif or adjectif verbal?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'What kind of -ant form is it?',
        buckets: [
          { id: 'pp', label: 'Participe présent (verb)', emoji: '▶️' },
          { id: 'ger', label: 'Gérondif (en + -ant)', emoji: '🔗' },
          { id: 'adj', label: 'Adjectif verbal (agrees)', emoji: '🎨' },
        ],
        items: cards('f', [
          ['des élèves visitant le musée', 'pp', 'pupils visiting the museum'],
          ['une toile représentant un port', 'pp', 'a canvas depicting a harbour'],
          ['des mécènes finançant la restauration', 'pp', 'patrons funding the restoration'],
          ['un guide parlant trois langues', 'pp', 'a guide speaking three languages'],
          ['en visitant le musée', 'ger', 'while visiting the museum'],
          ['en peignant à l’huile', 'ger', 'by painting in oils'],
          ['tout en restaurant la fresque', 'ger', 'while restoring the fresco'],
          ['en sortant de la salle', 'ger', 'on leaving the room'],
          ['une œuvre saisissante', 'adj', 'a striking work'],
          ['des couleurs éclatantes', 'adj', 'dazzling colours'],
          ['un récit bouleversant', 'adj', 'a deeply moving story'],
          ['des idées stimulantes', 'adj', 'stimulating ideas'],
        ]),
      },
    ),

    activity(
      U,
      'quiz-transform',
      'quiz',
      meta(
        'Say it with -ant',
        'Rewrite the clause with a participle or a gérondif.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            't1',
            'des visiteurs qui attendent à l’entrée',
            'des visiteurs attendant à l’entrée',
            [
              'des visiteurs attendants à l’entrée',
              'des visiteurs en attendant à l’entrée',
              'des visiteurs attendus à l’entrée',
            ],
            'A relative clause with qui becomes an invariable participe présent.',
          ),
          q(
            't2',
            'une toile qui représente un port',
            'une toile représentant un port',
            [
              'une toile représentante un port',
              'une toile en représentant un port',
              'une toile représentée un port',
            ],
            'The participle keeps its object and does not agree.',
          ),
          q(
            't3',
            'Parce qu’il n’avait plus d’argent, il a vendu son atelier.',
            'N’ayant plus d’argent, il a vendu son atelier.',
            [
              'Ne ayant plus d’argent, il a vendu son atelier.',
              'Pas ayant plus d’argent, il a vendu son atelier.',
              'N’avoir plus d’argent, il a vendu son atelier.',
            ],
            'A participe présent can give the reason; ne and the auxiliary join into n’ayant.',
          ),
          q(
            't4',
            'Quand elle a quitté la salle, elle a salué le conservateur.',
            'En quittant la salle, elle a salué le conservateur.',
            [
              'Quittant en la salle, elle a salué le conservateur.',
              'En quitté la salle, elle a salué le conservateur.',
              'Elle quittant la salle, a salué le conservateur.',
            ],
            'Same subject, two actions at the same time: the gérondif.',
          ),
          q(
            't5',
            'Il restaure la fresque et, en même temps, il chante.',
            'Il restaure la fresque tout en chantant.',
            [
              'Il restaure la fresque tout chantant.',
              'Il restaure la fresque tout en chante.',
              'Il restaure la fresque tout chanter.',
            ],
            'Tout en + gérondif stresses that the two actions go on together.',
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
          {
            ...sent(
              's1',
              'He learned by copying the old masters.',
              ['Il', 'a', 'appris', 'en', 'copiant', 'les', 'maîtres.'],
              { extra: ['copié'] },
            ),
          },
          {
            ...sent(
              's2',
              'The curator, noticing the mistake, closed the room.',
              ['Le', 'commissaire,', 'remarquant', 'l’erreur,', 'a', 'fermé', 'la', 'salle.'],
              { extra: ['remarqué'] },
            ),
          },
          {
            ...sent(
              's3',
              'These dazzling colours are striking.',
              ['Ces', 'couleurs', 'éclatantes', 'sont', 'saisissantes.'],
              { extra: ['saisissant'] },
            ),
          },
          {
            ...sent(
              's4',
              'Not knowing the painter, I bought nothing.',
              ['Ne', 'connaissant', 'pas', 'le', 'peintre,', 'je', 'n’ai', 'rien', 'acheté.'],
              { extra: ['en'] },
            ),
          },
          {
            ...sent(
              's5',
              'The audience left the room applauding.',
              ['Le', 'public', 'a', 'quitté', 'la', 'salle', 'en', 'applaudissant.'],
              { extra: ['applaudissants'] },
            ),
          },
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Vernissage, visit and auction',
        'Chat at an opening, follow a guide and discuss a doubtful painting.',
        ['communication', 'fr-c22-art'],
        3,
        6,
      ),
      {
        scenes: [
          {
            id: 'vernissage',
            title: 'At the opening',
            emoji: '🥂',
            setting: 'You meet the curator of an exhibition at the vernissage. Use vous.',
            turns: [
              say(
                'La commissaire',
                'Bonsoir ! Que pensez-vous de l’accrochage ?',
                'Good evening! What do you think of the hanging?',
              ),
              you(
                'Je le trouve épuré, presque dépouillé, mais très saisissant.',
                [
                  'Ouais, c’est pas mal, quoi.',
                  'Too casual for a conversation with the curator; keep a measured, polite register.',
                ],
                [
                  'Je le trouve épuré, mais tape-à-l’œil.',
                  'Épuré (clean-lined) and tape-à-l’œil (showy) contradict each other.',
                ],
              ),
              say(
                'La commissaire',
                'Le parti pris était justement de laisser parler les toiles.',
                'The deliberate choice was exactly to let the canvases speak.',
              ),
              you(
                'C’est réussi : le propos de l’artiste en ressort avec force.',
                [
                  'C’est réussi : le propos de l’artiste en ressortant avec force.',
                  'A participe présent cannot be the main verb of a sentence; use the present: ressort.',
                ],
                [
                  'C’est réussi : le propos de l’artiste en ressorte avec force.',
                  'Ressorte is not a form of ressortir in the indicative: the present is ressort.',
                ],
              ),
            ],
          },
          {
            id: 'guide',
            title: 'With the guide',
            emoji: '🎧',
            setting: 'A museum guide shows a group a large war painting. Use vous.',
            turns: [
              say(
                'Le guide',
                'Cette toile évoque la guerre. Qu’est-ce qui vous frappe ?',
                'This canvas evokes the war. What strikes you?',
              ),
              you(
                'Ses couleurs sombres dégagent une atmosphère pesante.',
                [
                  'Ses couleurs sombres dégageant une atmosphère pesante.',
                  'The participe présent alone does not make a sentence; use the conjugated verb dégagent.',
                ],
                [
                  'Ses couleurs sombre dégagent une atmosphère pesante.',
                  'Couleurs is plural, so the adjective agrees: sombres.',
                ],
              ),
              say(
                'Le guide',
                'Le peintre a travaillé en respectant la composition des maîtres anciens.',
                'The painter worked respecting the composition of the old masters.',
              ),
              you(
                'Il rend ainsi hommage à la tradition tout en la bousculant.',
                [
                  'Il rend ainsi hommage à la tradition tout bousculant.',
                  'After tout the gérondif needs en: tout en la bousculant.',
                ],
                [
                  'Il rend ainsi hommage de la tradition tout en la bousculant.',
                  'Rendre hommage takes à: rendre hommage à.',
                ],
              ),
            ],
          },
          {
            id: 'auction',
            title: 'At the auction',
            emoji: '🔨',
            setting: 'At the salle des ventes you talk to an expert about a doubtful painting.',
            turns: [
              say(
                'L’expert',
                'Ce tableau est peut-être une contrefaçon.',
                'This painting may be a forgery.',
              ),
              you(
                'Vous pensez qu’un faussaire l’a signé en imitant le style du maître ?',
                [
                  'Vous pensez qu’un faussaire l’a signé en imitants le style du maître ?',
                  'The gérondif is invariable: en imitant, never imitants.',
                ],
                [
                  'Vous pensez qu’un faussaire l’a signé imitant en le style du maître ?',
                  'En comes before the participle: en imitant.',
                ],
              ),
              say(
                'L’expert',
                'Peut-être. Les experts, examinant la signature, ont des doutes.',
                'Perhaps. The experts, examining the signature, have doubts.',
              ),
              you(
                'Alors je renonce à enchérir : un achat aussi risqué serait imprudent.',
                [
                  'Alors je renonce à enchérir : un achat aussi risquant serait imprudent.',
                  'Risqué (past participle used as an adjective) means “risky”; risquant would be a verb form.',
                ],
                [
                  'Alors je renonce enchérir : un achat aussi risqué serait imprudent.',
                  'Renoncer takes à before an infinitive: je renonce à enchérir.',
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
        'Art and -ant blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'fr-c22-art'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'The gérondif is always introduced by en.', true),
          tf(
            'b2',
            '“Des couleurs éclatants” is correct.',
            false,
            'Couleurs is feminine plural, so the adjectif verbal agrees: éclatantes.',
          ),
          tf('b3', 'A gérondif has the same subject as the main verb.', true),
          tf('b4', '“N’ayant pas vu l’exposition” is a correct negative participe présent.', true),
          tf(
            'b5',
            'A participe présent that has an object agrees with the noun.',
            false,
            'As a verb it is invariable: des visiteurs admirant la toile.',
          ),
          tf(
            'b6',
            '“Provocant” is the participe présent of provoquer.',
            false,
            'The participle is provoquant; provocant is the adjective.',
          ),
          tf('b7', '“Le vernissage” is the opening night of an exhibition.', true),
          tf(
            'b8',
            '“Un faussaire” is someone who collects paintings.',
            false,
            'A faussaire is a forger.',
          ),
          tf('b9', '“Tout en” + gérondif can express opposition.', true),
          tf(
            'b10',
            '“Fatiguant” and “fatigant” are two spellings of the same word.',
            false,
            'Fatiguant is the participle, fatigant the adjective.',
          ),
          tf('b11', '“Le cartel” is a label next to a work.', true),
          tf(
            'b12',
            '“Tape-à-l’œil” is a compliment.',
            false,
            'It describes something flashy and cheap-looking.',
          ),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Art critic challenge',
        'Vocabulary and the three -ant forms in one round.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          withLesson(
            q(
              'c1',
              'Une œuvre qui ne change pas avec le temps est…',
              'intemporelle',
              ['intemporelles', 'intemporant', 'intemporé'],
              'Intemporel is a plain adjective: here feminine singular.',
            ),
            LESSON,
          ),
          q('c2', 'Que veut dire « le cartel » dans un musée ?', 'the label next to a work', [
            'the person who buys the works',
            'the room for temporary shows',
            'the insurance policy',
          ]),
          withLesson(
            q(
              'c3',
              'Les visiteurs ont applaudi ___ l’artiste.',
              'en félicitant',
              ['en félicitants', 'félicitants', 'en félicité'],
              'The gérondif is invariable and starts with en.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c4',
              'Ces sculptures sont ___.',
              'étonnantes',
              ['étonnant', 'étonnants', 'étonnante'],
              'Étonnant is an adjectif verbal: feminine plural after sculptures.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c5',
              'Quelle phrase sur la critique est correcte ?',
              'Une critique convaincante a lancé le peintre.',
              [
                'Une critique convainquante a lancé le peintre.',
                'Une critique convaincant a lancé le peintre.',
                'Une critique convaincantes a lancé le peintre.',
              ],
              'The adjective convaincant has c; the participle is convainquant.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c6',
              'Quelle phrase sur les mécènes est correcte ?',
              'Les mécènes, voyant le succès, ont donné davantage.',
              [
                'Les mécènes, voyants le succès, ont donné davantage.',
                'Les mécènes, en voyants le succès, ont donné davantage.',
                'Les mécènes, voyante le succès, ont donné davantage.',
              ],
              'A participe présent with an object is invariable.',
            ),
            LESSON,
          ),
          q('c7', 'Que veut dire « un parti pris » ?', 'a deliberate, bold choice', [
            'a political party',
            'a bad habit',
            'a joint decision by two people',
          ]),
          withLesson(
            q(
              'c8',
              'Il a trouvé son style ___.',
              'en expérimentant sans cesse',
              [
                'expérimentant en sans cesse',
                'en expérimentants sans cesse',
                'en expérimenté sans cesse',
              ],
              'En + -ant says how: by constantly experimenting.',
            ),
            LESSON,
          ),
        ],
      },
    ),
  ],
};
