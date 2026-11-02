import { byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import {
  activity,
  condTable,
  dictation,
  gap,
  meta,
  q,
  say,
  sent,
  sortCards,
  tf,
  unitFr,
  withLesson,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b1-1-critique';

const critical = vocabList(U, 'Thinking critically', [
  ['l’esprit critique', 'critical thinking', '🧠'],
  ['la source fiable', 'reliable source', '✅'],
  ['la preuve', 'proof, evidence', '🔬'],
  ['le témoignage', 'testimony', '🗣️'],
  ['l’argument', 'argument', '💬'],
  ['la manipulation', 'manipulation', '🎭'],
  ['le préjugé', 'prejudice', '🙈'],
  ['la désinformation', 'disinformation', '🚫'],
  ['le sondage', 'opinion poll', '📊'],
  ['la statistique', 'statistic', '📈'],
  ['se méfier de', 'to be wary of', '⚠️'],
  ['douter de', 'to doubt', '🤔'],
]);

const art = vocabList(U, 'Contemporary art', [
  ['l’œuvre', 'work of art', '🖼️'],
  ['le vernissage', 'private view, opening night', '🥂'],
  ['le commissaire d’exposition', 'curator', '🎟️'],
  ['l’installation', 'art installation', '🧱'],
  ['le plasticien', 'visual artist', '🎨'],
  ['le chef-d’œuvre', 'masterpiece', '🏆'],
  ['la toile', 'canvas', '🖌️'],
  ['le courant artistique', 'art movement', '🌊'],
  ['provoquer', 'to provoke', '🔥'],
  ['choquer', 'to shock', '😲'],
  ['la critique d’art', 'art review', '📝'],
  ['le mécène', 'patron, sponsor', '💎'],
]);

const doubt = vocabList(U, 'Degrees of certainty', [
  ['sûrement', 'surely', '✔️'],
  ['sans doute', 'probably, no doubt', '👌'],
  ['apparemment', 'apparently', '👀'],
  ['soi-disant', 'so-called', '🗨️'],
  ['prétendument', 'allegedly', '🤥'],
  ['il paraît que', 'it seems that, apparently', '🤷'],
  ['il semblerait que', 'it would seem that', '🌫️'],
  ['de source sûre', 'from a reliable source', '🔒'],
]);

const vocab = [...critical, ...art, ...doubt];

const CERTAINTY_CARDS: [string, 'sure' | 'probable' | 'doubtful', string][] = [
  ['certainement', 'sure', 'certainly'],
  ['sûrement', 'sure', 'surely'],
  ['de source sûre', 'sure', 'from a reliable source'],
  ['sans doute', 'probable', 'probably'],
  ['probablement', 'probable', 'probably'],
  ['apparemment', 'probable', 'apparently'],
  ['peut-être', 'doubtful', 'maybe'],
  ['il semblerait que', 'doubtful', 'it would seem that'],
  ['soi-disant', 'doubtful', 'so-called'],
  ['prétendument', 'doubtful', 'allegedly'],
];

export const critique: UnitContent = {
  unit: unitFr({
    id: U,
    order: 9,
    title: 'Esprit critique',
    subtitle: 'Check information, express doubt and talk about contemporary art',
    emoji: '🧠',
    goals: [
      'Say how reliable information is',
      'Report uncertain news with the conditional',
      'Use se faire + infinitive and talk about art',
    ],
    grammar: [
      'The conditional for uncertain news',
      'se faire + infinitive',
      'Adverbs of certainty and doubt',
    ],
    vocabFields: ['Thinking critically', 'Contemporary art', 'Degrees of certainty'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-critical',
      'flashcards',
      meta(
        'Thinking critically',
        'Words to check and question information.',
        ['vocabulary', 'media-news'],
        1,
        4,
      ),
      flashcards(critical),
    ),
    activity(
      U,
      'flash-art',
      'flashcards',
      meta(
        'Contemporary art',
        'Words for exhibitions and artists.',
        ['vocabulary', 'music-art'],
        1,
        4,
      ),
      flashcards(art),
    ),
    activity(
      U,
      'flash-doubt',
      'flashcards',
      meta(
        'Degrees of certainty',
        'Adverbs and phrases to show how sure you are.',
        ['vocabulary', 'opinions-presenting'],
        1,
        3,
      ),
      flashcards(doubt),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the meaning of the words.',
        ['vocabulary', 'media-news'],
        1,
        3,
      ),
      quizDeEn(
        byDe(
          vocab,
          'la désinformation',
          'le sondage',
          'se méfier de',
          'le préjugé',
          'le vernissage',
          'la toile',
          'le mécène',
          'prétendument',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'listen-critique',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'media-news'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'la preuve',
          'le témoignage',
          'l’installation',
          'le plasticien',
          'choquer',
          'apparemment',
          'soi-disant',
          'de source sûre',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'gap-conditional',
      'gapfill',
      {
        ...meta(
          'Uncertain news',
          'Use the conditional when you cannot be sure.',
          ['grammar', 'fr-b11-cond-news', 'media-news'],
          2,
          5,
        ),
        lesson: 'fr-b11-cond-news',
      },
      {
        items: [
          gap(
            'n1',
            'Selon la radio, le ministre ___ démissionné.',
            'aurait',
            ['aurait', 'a', 'avait', 'aura'],
            'According to the radio, the minister has resigned (not confirmed).',
            'Conditional past (aurait + participle) = unconfirmed news.',
          ),
          gap(
            'n2',
            'D’après un témoin, il y ___ trois blessés.',
            'aurait',
            ['aurait', 'a', 'avait', 'avoir'],
            'According to a witness, there would be three injured.',
            'Il y aurait: conditional of il y a.',
          ),
          gap(
            'n3',
            'Le président ___ malade, dit-on.',
            'serait',
            ['serait', 'est', 'sera', 'soit'],
            'The president is said to be ill.',
            'Être in the conditional: serait.',
          ),
          gap(
            'n4',
            'Les prix ___ augmenter l’an prochain, selon des experts.',
            'pourraient',
            ['pourraient', 'peuvent', 'pourront', 'pourrait'],
            'Prices could rise next year, according to experts.',
            'Pouvoir in the conditional, plural: pourraient.',
          ),
          gap(
            'n5',
            'Selon des sources, l’accord ___ signé hier.',
            'aurait été',
            ['aurait été', 'a été', 'serait', 'avait été'],
            'According to sources, the agreement was signed yesterday (unconfirmed).',
            'Conditional past of a passive: aurait été signé.',
          ),
          gap(
            'n6',
            'Cette œuvre ___ valoir deux millions d’euros.',
            'vaudrait',
            ['vaudrait', 'vaut', 'vaudra', 'vaille'],
            'This work would be worth two million euros.',
            'Valoir → vaudrait.',
          ),
          gap(
            'n7',
            'Le tableau ___ volé pendant la nuit, selon la police.',
            'aurait été',
            ['aurait été', 'a été', 'serait', 'avait'],
            'The painting was reportedly stolen overnight, according to the police.',
            'Past, unconfirmed: aurait été volé.',
          ),
          gap(
            'n8',
            'Le musée ___ fermer l’année prochaine, dit-on.',
            'devrait',
            ['devrait', 'doit', 'devra', 'devait'],
            'The museum is said to be closing next year.',
            'Devoir in the conditional can report a rumour.',
          ),
        ],
      },
    ),
    activity(
      U,
      'conj-conditional',
      'conjugation',
      {
        ...meta(
          'Forms of the conditional',
          'Future stem + imparfait endings.',
          ['grammar', 'fr-b11-cond-news'],
          2,
          4,
        ),
        lesson: 'fr-b11-cond-news',
      },
      {
        tables: [
          condTable('etre-c', 'être', 'to be', ['je', 'nous', 'ils/elles']),
          condTable('avoir-c', 'avoir', 'to have', ['tu', 'vous', 'il/elle/on']),
          condTable('aller-c', 'aller', 'to go', ['je', 'tu', 'ils/elles']),
          condTable('pouvoir-c', 'pouvoir', 'to be able to', ['nous', 'vous', 'il/elle/on']),
        ],
      },
    ),
    activity(
      U,
      'sort-certainty',
      'sortit',
      {
        ...meta(
          'How sure is it?',
          'Sort the words by degree of certainty.',
          ['grammar', 'fr-b11-doubt-adverbs'],
          2,
          4,
        ),
        lesson: 'fr-b11-doubt-adverbs',
      },
      {
        instruction: 'How sure does the speaker sound?',
        buckets: [
          { id: 'sure', label: 'Almost sure', emoji: '✅' },
          { id: 'probable', label: 'Probable', emoji: '👌' },
          { id: 'doubtful', label: 'Doubtful', emoji: '🤔' },
        ],
        items: sortCards('c', CERTAINTY_CARDS),
      },
    ),
    activity(
      U,
      'gap-doubt',
      'gapfill',
      {
        ...meta(
          'Express doubt',
          'Choose the right word to show how sure you are.',
          ['grammar', 'fr-b11-doubt-adverbs'],
          2,
          5,
        ),
        lesson: 'fr-b11-doubt-adverbs',
      },
      {
        items: [
          gap(
            'd1',
            'Peut-être ___ elle a raison.',
            'qu’',
            ['qu’', 'que', 'de', 'ce'],
            'Maybe she is right.',
            'Peut-être que + clause (que becomes qu’ before elle).',
          ),
          gap(
            'd2',
            'Sans doute ___-il déjà parti.',
            'est',
            ['est', 'soit', 'a', 'sera'],
            'He has probably already left.',
            'After sans doute at the start, the subject and verb can be inverted: est-il.',
          ),
          gap(
            'd3',
            'Il ___ que la nouvelle est fausse.',
            'paraît',
            ['paraît', 'paraisse', 'paraissant', 'paru'],
            'It seems that the news is false.',
            'Il paraît que + indicative.',
          ),
          gap(
            'd4',
            'Il ___ que cette œuvre vaille des millions.',
            'semblerait',
            ['semblerait', 'semble', 'semblera', 'sembler'],
            'It would seem that this work is worth millions.',
            'Il semblerait que + subjunctive.',
          ),
          gap(
            'd5',
            'Le journal parle d’un artiste ___ génial.',
            'soi-disant',
            ['soi-disant', 'sûrement', 'certainement', 'probablement'],
            'The paper talks about a so-called genius artist.',
            'Soi-disant shows distance, doubt.',
          ),
          gap(
            'd6',
            '___, il est mieux payé que moi, mais ce n’est pas sûr.',
            'Apparemment',
            ['Apparemment', 'Certainement', 'Évidemment', 'Sûrement'],
            'Apparently he is paid better than me, but it is not certain.',
            'Apparemment: it looks that way, without proof.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-se-faire',
      'gapfill',
      {
        ...meta(
          'Things that happen to you',
          'se faire + infinitive.',
          ['grammar', 'fr-b11-se-faire'],
          2,
          5,
        ),
        lesson: 'fr-b11-se-faire',
      },
      {
        items: [
          gap(
            'f1',
            'Elle s’est ___ couper les cheveux.',
            'fait',
            ['fait', 'faite', 'faits', 'faire'],
            'She had her hair cut.',
            'In se faire + infinitive, fait never agrees.',
          ),
          gap(
            'f2',
            'Ils se sont ___ voler leurs vélos.',
            'fait',
            ['fait', 'faits', 'faites', 'faire'],
            'They had their bikes stolen.',
            'Fait stays invariable before an infinitive.',
          ),
          gap(
            'f3',
            'Je me suis fait ___ par un faux article.',
            'avoir',
            ['avoir', 'eu', 'ayant', 'avait'],
            'I was fooled by a fake article.',
            'Se faire avoir = to be fooled.',
          ),
          gap(
            'f4',
            'Il s’est fait ___ pour avoir menti.',
            'critiquer',
            ['critiquer', 'critiqué', 'critiquant', 'critiquons'],
            'He was criticised for lying.',
            'Se faire + infinitive.',
          ),
          gap(
            'f5',
            'Nous nous sommes fait ___ par des photos truquées.',
            'tromper',
            ['tromper', 'trompé', 'trompant', 'trompons'],
            'We were deceived by faked photos.',
            'Infinitive after fait.',
          ),
          gap(
            'f6',
            'Elle ne se laisse pas ___ par les rumeurs.',
            'influencer',
            ['influencer', 'influencée', 'influençant', 'influence'],
            'She does not let rumours influence her.',
            'Se laisser + infinitive.',
          ),
          gap(
            'f7',
            'Je ne veux pas me faire ___ par les apparences.',
            'manipuler',
            ['manipuler', 'manipulé', 'manipulant', 'manipule'],
            'I do not want to be manipulated by appearances.',
            'Se faire + infinitive.',
          ),
          gap(
            'f8',
            'Elle s’est fait ___ une nouvelle coiffure.',
            'faire',
            ['faire', 'fait', 'faite', 'faisant'],
            'She had a new hairstyle done.',
            'Se faire faire = to have something made.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'media-news'],
        2,
        4,
      ),
      {
        items: [
          withLesson(
            'fr-b11-cond-news',
            sent(
              's1',
              'According to the radio, the minister has resigned.',
              ['Selon', 'la', 'radio,', 'le', 'ministre', 'aurait', 'démissionné.'],
              { extra: ['a'] },
            ),
          ),
          withLesson(
            'fr-b11-cond-news',
            sent(
              's2',
              'The painting was reportedly stolen.',
              ['Le', 'tableau', 'aurait', 'été', 'volé.'],
              { extra: ['serait'] },
            ),
          ),
          withLesson(
            'fr-b11-se-faire',
            sent(
              's3',
              'She had her hair cut.',
              ['Elle', 's’est', 'fait', 'couper', 'les', 'cheveux.'],
              { extra: ['faite'] },
            ),
          ),
          withLesson(
            'fr-b11-se-faire',
            sent(
              's4',
              'I was fooled by a fake article.',
              ['Je', 'me', 'suis', 'fait', 'avoir', 'par', 'un', 'faux', 'article.'],
              { extra: ['eu'] },
            ),
          ),
          withLesson(
            'fr-b11-doubt-adverbs',
            sent('s5', 'Maybe she is right.', ['Peut-être', 'qu’elle', 'a', 'raison.'], {
              extra: ['que'],
            }),
          ),
          withLesson(
            'fr-b11-doubt-adverbs',
            sent('s6', 'Apparently he is wrong.', ['Apparemment,', 'il', 'a', 'tort.'], {
              extra: ['soi-disant'],
            }),
          ),
        ],
      },
    ),
    activity(
      U,
      'spell-critique',
      'spell',
      meta(
        'Spell the words',
        'Unscramble and type words from the unit. Accents are optional here.',
        ['spelling', 'media-news'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp-sondage',
            mode: 'unscramble',
            answer: 'sondage',
            hint: 'opinion poll',
            emoji: '📊',
            speak: 'le sondage',
          },
          {
            id: 'sp-preuve',
            mode: 'unscramble',
            answer: 'preuve',
            hint: 'proof',
            emoji: '🔬',
            speak: 'la preuve',
          },
          {
            id: 'sp-vernissage',
            mode: 'type',
            answer: 'vernissage',
            hint: 'opening night',
            emoji: '🥂',
            speak: 'le vernissage',
          },
          dictation('sp-temoignage', 'témoignage', 'testimony', 'le témoignage'),
        ],
      },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Questioning information',
        'A news item, an art opening and a poll.',
        ['communication', 'media-news'],
        2,
        6,
      ),
      {
        scenes: [
          {
            id: 'news',
            title: 'A news item',
            emoji: '📰',
            setting: 'You discuss a news story with your colleague Théo. Use tu.',
            turns: [
              say(
                'Théo',
                'Tu as vu ? Le maire aurait démissionné.',
                'Did you see? The mayor has apparently resigned.',
              ),
              you(
                'Oui, mais je me méfie : il n’y a pas de preuve.',
                [
                  'Oui, mais je me méfie de : il n’y a pas de preuve.',
                  'Se méfier de needs a complement; here just se méfier.',
                ],
                [
                  'Oui, mais je me méfie : il n’y a pas des preuves.',
                  'After a negation use de: pas de preuve.',
                ],
              ),
              say('Théo', 'Le journal dit qu’il serait malade.', 'The paper says he is ill.'),
              you(
                'Peut-être qu’il l’est, mais je veux une source fiable.',
                [
                  'Peut-être qu’il l’est, mais je veux une source fiabile.',
                  'The adjective is fiable.',
                ],
                [
                  'Peut-être que il l’est, mais je veux une source fiable.',
                  'Que becomes qu’ before il.',
                ],
              ),
              say(
                'Théo',
                'Tu crois que le journal s’est fait avoir ?',
                'Do you think the paper was fooled?',
              ),
              you(
                'C’est possible : il s’est déjà fait avoir une fois.',
                [
                  'C’est possible : il s’est déjà faite avoir une fois.',
                  'Fait stays invariable (and il is masculine anyway).',
                ],
                [
                  'C’est possible : il s’est déjà fait eu une fois.',
                  'After faire the infinitive stays: avoir.',
                ],
              ),
            ],
          },
          {
            id: 'gallery',
            title: 'An art opening',
            emoji: '🥂',
            setting: 'You are at a vernissage and talk to the curator, Mme Leroy. Use vous.',
            turns: [
              say(
                'Mme Leroy',
                'Que pensez-vous de cette installation ?',
                'What do you think of this installation?',
              ),
              you(
                'Il me semble qu’elle veut provoquer le public.',
                [
                  'Il me semble qu’elle veuille provoquer le public.',
                  'Il me semble que + indicative.',
                ],
                [
                  'Il me semble qu’elle veut provoquer au public.',
                  'Provoquer takes a direct object.',
                ],
              ),
              say(
                'Mme Leroy',
                'Le plasticien, lui, serait très content.',
                'The artist, for his part, is said to be very happy.',
              ),
              you('Sans doute, mais je trouve cette œuvre un peu choquante.', [
                'Sans doute, mais je trouve ce œuvre un peu choquante.',
                'Œuvre is feminine: cette œuvre.',
              ]),
              say(
                'Mme Leroy',
                'Certains disent que c’est un chef-d’œuvre.',
                'Some say it is a masterpiece.',
              ),
              you('Certes, mais ça dépend des goûts.', [
                'Certes mais ça dépends des goûts.',
                'Ça dépend (no -s).',
              ]),
            ],
          },
          {
            id: 'poll',
            title: 'A poll',
            emoji: '📊',
            setting: 'You discuss a poll with your friend Camille. Use tu.',
            turns: [
              say(
                'Camille',
                'Selon un sondage, 80 % des gens auraient changé d’avis.',
                'According to a poll, 80% of people changed their mind.',
              ),
              you('Apparemment, mais qui a posé les questions ?', [
                'Apparemment que, mais qui a posé les questions ?',
                'Apparemment is an adverb, no que.',
              ]),
              say(
                'Camille',
                'Une agence qui serait indépendante.',
                'An agency said to be independent.',
              ),
              you(
                'Soi-disant indépendante, oui. Je doute de ces chiffres.',
                ['Soi-disant indépendante, oui. Je doute ces chiffres.', 'Douter de + noun.'],
                [
                  'Soi-disant indépendante, oui. Je doute que ces chiffres.',
                  'Before a noun use douter de.',
                ],
              ),
              say('Camille', 'Il faut vérifier la source.', 'We have to check the source.'),
              you('Tout à fait, je ne veux pas me faire manipuler.', [
                'Tout à fait, je ne veux pas me faire manipulé.',
                'After faire use the infinitive: manipuler.',
              ]),
            ],
          },
        ],
      },
    ),
    activity(
      U,
      'blitz',
      'blitz',
      meta('Critical blitz', 'True or false? Beat the clock!', ['grammar', 'media-news'], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', 'The conditional can show that news is not confirmed.', true),
          tf(
            'b2',
            '“Le ministre aurait démissionné” means it is certain.',
            false,
            'The conditional shows that the information is not confirmed.',
          ),
          tf('b3', 'The conditional is formed with the future stem and imparfait endings.', true),
          tf(
            'b4',
            'In se faire + infinitive, “fait” agrees with the subject.',
            false,
            'It stays invariable: elle s’est fait couper les cheveux.',
          ),
          tf('b5', 'Se faire avoir means to be fooled.', true),
          tf('b6', 'Peut-être que is followed by an indicative clause.', true),
          tf('b7', 'Il paraît que is followed by the indicative.', true),
          tf('b8', 'Soi-disant shows that you doubt something.', true),
          tf(
            'b9',
            'Sûrement is weaker than peut-être.',
            false,
            'Sûrement is stronger: it means “surely”.',
          ),
          tf('b10', 'Un sondage is an opinion poll.', true),
          tf('b11', 'Le vernissage is the opening of an exhibition.', true),
          tf(
            'b12',
            'Un préjugé is a proof.',
            false,
            'Un préjugé is a prejudice; proof is la preuve.',
          ),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'media-news'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            'fr-b11-cond-news',
            q('c1', 'Complete: “Selon la police, le voleur ___ arrêté hier.”', 'aurait été', [
              'a été',
              'serait',
              'avait',
            ]),
          ),
          withLesson(
            'fr-b11-cond-news',
            q('c2', 'Conditional of “aller” (je):', 'j’irais', [
              'j’allerais',
              'j’irai',
              'j’allais',
            ]),
          ),
          withLesson(
            'fr-b11-se-faire',
            q('c3', 'Complete: “Elle s’est ___ opérer.”', 'fait', ['faite', 'faits', 'faire']),
          ),
          withLesson(
            'fr-b11-se-faire',
            q('c4', 'Se faire avoir means …', 'to be fooled', [
              'to have fun',
              'to get a job',
              'to become rich',
            ]),
          ),
          withLesson(
            'fr-b11-doubt-adverbs',
            q('c5', 'Which adverb shows the most doubt?', 'soi-disant', [
              'certainement',
              'sûrement',
              'sans doute',
            ]),
          ),
          withLesson(
            'fr-b11-doubt-adverbs',
            q('c6', 'Complete: “Peut-être ___ il viendra.”', 'qu’', ['que', 'de', 'ce']),
          ),
          q('c7', '“L’esprit critique” means …', 'critical thinking', [
            'a bad mood',
            'a newspaper',
            'a poll',
          ]),
          q('c8', '“La toile” (in art) is …', 'a canvas', [
            'a curtain',
            'a gallery',
            'a sculpture',
          ]),
        ],
      },
    ),
  ],
};
