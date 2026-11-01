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

const U = 'fr-c2-2-medias';
const LESSON = 'fr-c22-modalisation' as const;

const presse = vocabList(U, 'Press and news', [
  ['le quotidien', 'daily newspaper', '📰'],
  ['l’éditorial', 'editorial', '✍️'],
  ['le reportage', 'report, feature', '🎥'],
  ['le correspondant', 'correspondent', '🌍'],
  ['la manchette', 'headline', '🗞️'],
  ['le fil d’actualité', 'news feed', '📱'],
  ['la dépêche', 'news agency wire', '⚡'],
  ['la rédaction', 'editorial staff', '🏢'],
  ['le lectorat', 'readership', '👥'],
  ['le pigiste', 'freelance journalist', '🧑‍💻'],
  ['la chronique', 'column', '🗒️'],
  ['le scoop', 'scoop, exclusive', '💥'],
  ['le journalisme d’investigation', 'investigative journalism', '🕵️'],
]);

const liberte = vocabList(U, 'Freedom, opinion and misinformation', [
  ['la liberté d’expression', 'freedom of expression', '🗣️'],
  ['la désinformation', 'disinformation', '🌀'],
  ['la rumeur', 'rumour', '👂'],
  ['le démenti', 'denial', '❌'],
  ['le rectificatif', 'published correction', '✏️'],
  ['le lanceur d’alerte', 'whistleblower', '🔔'],
  ['le secret des sources', 'protection of journalists’ sources', '🔐'],
  ['la diffamation', 'defamation', '😠'],
  ['le canular', 'hoax', '🃏'],
  ['la vérification des faits', 'fact-checking', '✅'],
  ['la polémique', 'controversy', '🔥'],
  ['l’algorithme', 'algorithm', '🤖'],
  ['le droit de réponse', 'right of reply', '↩️'],
]);

const vocab = [...presse, ...liberte];
const grammarTags = ['grammar', LESSON, 'fr-c22-medias'] as const;

export const medias: UnitContent = {
  unit: unitFrC22({
    id: U,
    order: 6,
    title: 'Médias et société',
    subtitle: 'Read the press, question sources and report news with the right distance',
    emoji: '📰',
    goals: [
      'Talk about newspapers, journalists and how news is made',
      'Discuss freedom of expression, rumours and misinformation',
      'Report unconfirmed news with the conditional of reserve and markers of distance',
    ],
    grammar: [
      'The conditional of reserve (conditionnel journalistique): le ministre aurait démissionné.',
      'Source markers: selon, d’après, à en croire.',
      'Distance markers: soi-disant, prétendument, apparemment.',
      'Il semblerait que + subjunctive.',
    ],
    vocabFields: ['Press and news', 'Freedom, opinion and misinformation'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-presse',
      'flashcards',
      meta(
        'Press and news',
        'Manchette, dépêche, pigiste: how a newspaper works.',
        ['vocabulary', 'fr-c22-medias'],
        1,
        4,
      ),
      flashcards(presse),
    ),

    activity(
      U,
      'flash-liberte',
      'flashcards',
      meta(
        'Freedom, opinion and misinformation',
        'Démenti, canular, lanceur d’alerte: the words of the information debate.',
        ['vocabulary', 'fr-c22-medias'],
        1,
        4,
      ),
      flashcards(liberte),
    ),

    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta(
        'In the newsroom',
        'Name the word for the picture.',
        ['vocabulary', 'fr-c22-medias'],
        1,
        4,
      ),
      quizEmoji(
        byDe(
          presse,
          'le quotidien',
          'le reportage',
          'le correspondant',
          'la manchette',
          'le fil d’actualité',
          'la dépêche',
          'la rédaction',
          'le scoop',
        ),
      ),
    ),

    activity(
      U,
      'listen-liberte',
      'listen',
      meta('Hear the debate', 'Listen and pick the meaning.', ['listening', 'fr-c22-medias'], 2, 4),
      listen(liberte),
    ),

    activity(
      U,
      'memory-liberte',
      'memory',
      meta(
        'Information memory',
        'Match each media term with its meaning.',
        ['vocabulary', 'fr-c22-medias'],
        2,
        4,
      ),
      memory(
        byDe(
          liberte,
          'la désinformation',
          'la rumeur',
          'le démenti',
          'le rectificatif',
          'le lanceur d’alerte',
          'la diffamation',
          'le canular',
          'la polémique',
        ),
      ),
    ),

    activity(
      U,
      'spell-presse',
      'spell',
      meta(
        'Spell it',
        'Unscramble, type and write what you hear. Accents are optional here.',
        ['spelling', 'fr-c22-medias'],
        2,
        5,
      ),
      {
        items: [
          {
            id: 'sp-rectificatif',
            mode: 'unscramble',
            answer: 'rectificatif',
            hint: 'published correction',
            emoji: '✏️',
            speak: 'le rectificatif',
          },
          {
            id: 'sp-diffamation',
            mode: 'unscramble',
            answer: 'diffamation',
            hint: 'defamation',
            emoji: '😠',
            speak: 'la diffamation',
          },
          {
            id: 'sp-dementi',
            mode: 'type',
            answer: 'démenti',
            hint: 'denial',
            emoji: '❌',
            speak: 'le démenti',
          },
          {
            id: 'sp-canular',
            mode: 'type',
            answer: 'canular',
            hint: 'hoax',
            emoji: '🃏',
            speak: 'le canular',
          },
          dictation(
            'd1',
            'Le ministre aurait démissionné, selon une source.',
            'The minister has reportedly resigned, according to a source.',
          ),
          dictation('d2', 'Le journal a publié un démenti.', 'The newspaper published a denial.'),
        ],
      },
    ),

    activity(
      U,
      'gap-reserve',
      'gapfill',
      meta(
        'Fact or reserve?',
        'Choose the form that fits what the journalist knows.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'Information non confirmée : le ministre ___ démissionné.',
              'aurait',
              ['aurait', 'a', 'aura', 'ait'],
              'Unconfirmed: the minister has reportedly resigned.',
              'The conditional of reserve (aurait + participle) presents the news as not yet confirmed.',
            ),
            {
              a: 'The indicative states a fact; here the news is not confirmed.',
              aura: 'The future does not fit a past event.',
              ait: 'The subjunctive does not mark reserve in a main clause.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'L’Élysée l’a confirmé : l’accord ___ signé hier.',
              'a été',
              ['a été', 'aurait été', 'serait', 'sera'],
              'The Élysée confirmed it: the agreement was signed yesterday.',
              'Once a fact is confirmed, the indicative is used.',
            ),
            {
              'aurait été': 'The conditional would suggest doubt, but the news is confirmed.',
              serait: 'The conditional suggests doubt, and the participle is missing.',
              sera: 'The future does not fit “yesterday”.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'Il y ___ une dizaine de blessés, mais le bilan n’est pas confirmé.',
              'aurait',
              ['aurait', 'a', 'avait', 'aura'],
              'There are said to be about ten injured, but the toll is not confirmed.',
              'Il y aurait signals that the figure is an unconfirmed report.',
            ),
            {
              a: 'The indicative would present the figure as certain.',
              avait: 'The imperfect describes the past, not an unconfirmed report.',
              aura: 'The future does not fit a toll that already exists.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Cette « exclusivité » s’est révélée fausse : elle était ___ exclusive.',
              'soi-disant',
              ['soi-disant', 'certainement', 'évidemment', 'heureusement'],
              'This “exclusive” turned out to be false: it was supposedly exclusive.',
              'Soi-disant (like prétendument) tells the reader the speaker doubts the claim.',
            ),
            {
              certainement: 'Certainement expresses certainty, the opposite of doubt.',
              évidemment: 'Évidemment means “obviously”.',
              heureusement: 'Heureusement means “luckily”.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Il ___ que le journal ait voulu étouffer l’affaire.',
              'semblerait',
              ['semblerait', 'est certain', 'est évident', 'est vrai'],
              'It seems that the paper wanted to hide the case.',
              'Il semblerait que expresses caution and is followed by the subjunctive (ait voulu).',
            ),
            {
              'est certain': 'Il est certain que takes the indicative, not ait voulu.',
              'est évident': 'Il est évident que takes the indicative, not ait voulu.',
              'est vrai': 'Il est vrai que takes the indicative, not ait voulu.',
            },
          ),
          withWhy(
            gap(
              'g6',
              '___ le rédacteur en chef, l’article sera retiré.',
              'D’après',
              ['D’après', 'Pendant', 'Parce que', 'Pourtant'],
              'According to the editor-in-chief, the article will be withdrawn.',
              'D’après (like selon) names the source of the claim.',
            ),
            {
              Pendant: 'Pendant means “during”.',
              'Parce que': 'Parce que introduces a clause with a verb, not a person.',
              Pourtant: 'Pourtant means “yet”.',
            },
          ),
          typed(
            't1',
            'Selon la rumeur, le premier ministre ___ quitté Paris.',
            'aurait',
            'According to the rumour, the prime minister has left Paris.',
            'The conditional of reserve: aurait + past participle.',
          ),
          typed(
            't2',
            'Il ___ que l’article contienne des erreurs.',
            'semblerait',
            'It seems that the article contains errors.',
            'Il semblerait que + subjunctive.',
          ),
          typed(
            't3',
            'Selon une source, trois élus ___ impliqués.',
            'seraient',
            'According to a source, three elected officials are involved.',
            'Être in the conditional: ils seraient.',
          ),
          typed(
            't4',
            'Le coupable ___ un ancien employé, dit-on.',
            'serait',
            'The culprit is said to be a former employee.',
            'The conditional of reserve: il serait.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sort-reserve',
      'sortit',
      meta(
        'Fact, reserve or distance?',
        'Is the news stated as a fact, reported with reserve, or marked with a distance word?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'How is the information presented?',
        buckets: [
          { id: 'fait', label: 'Confirmed fact (indicative)', emoji: '✅' },
          { id: 'reserve', label: 'Reserve (conditional)', emoji: '❔' },
          { id: 'distance', label: 'Source or distance word', emoji: '👓' },
        ],
        items: cards('r', [
          [
            'le ministre a démissionné hier, a confirmé l’Élysée',
            'fait',
            'the minister resigned yesterday, the Élysée confirmed',
          ],
          [
            'le tribunal a rendu son verdict ce matin',
            'fait',
            'the court gave its verdict this morning',
          ],
          ['la chaîne a diffusé un démenti', 'fait', 'the channel broadcast a denial'],
          ['le président a signé le décret', 'fait', 'the president signed the decree'],
          ['le ministre aurait démissionné', 'reserve', 'the minister has reportedly resigned'],
          [
            'il y aurait une dizaine de blessés',
            'reserve',
            'there are said to be about ten injured',
          ],
          [
            'l’accord serait sur le point d’être signé',
            'reserve',
            'the agreement is said to be about to be signed',
          ],
          [
            'les négociations auraient échoué',
            'reserve',
            'the negotiations have reportedly failed',
          ],
          [
            'cette soi-disant exclusivité était fausse',
            'distance',
            'this so-called exclusive was false',
          ],
          [
            'le prétendu scandale n’a jamais existé',
            'distance',
            'the alleged scandal never existed',
          ],
          [
            'selon des sources proches du dossier',
            'distance',
            'according to sources close to the case',
          ],
          [
            'd’après le témoin, il était seul',
            'distance',
            'according to the witness, he was alone',
          ],
        ]),
      },
    ),

    activity(
      U,
      'quiz-transform',
      'quiz',
      meta(
        'Take a distance',
        'Rewrite the sentence with the right reserve.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            't1',
            'Le ministre a démissionné. (unconfirmed)',
            'Le ministre aurait démissionné.',
            [
              'Le ministre a aurait démissionné.',
              'Le ministre serait démissionné.',
              'Le ministre avait démissionné.',
            ],
            'Avoir in the conditional + participle: the resignation is only reported.',
          ),
          q(
            't2',
            'Il y a trois blessés. (unconfirmed)',
            'Il y aurait trois blessés.',
            [
              'Il y serait trois blessés.',
              'Il y avait trois blessés.',
              'Il aurait y trois blessés.',
            ],
            'Il y a becomes il y aurait; y stays before the verb.',
          ),
          q(
            't3',
            'Les négociations vont échouer. (unconfirmed)',
            'Les négociations échoueraient.',
            [
              'Les négociations vont échoueraient.',
              'Les négociations échoueront.',
              'Les négociations échoue.',
            ],
            'The conditional presents the forecast as a rumour.',
          ),
          q(
            't4',
            'Le suspect est un ancien employé. (unconfirmed)',
            'Le suspect serait un ancien employé.',
            [
              'Le suspect aurait un ancien employé.',
              'Le suspect sera un ancien employé.',
              'Le suspect était un ancien employé.',
            ],
            'Être in the conditional: il serait.',
          ),
          q(
            't5',
            'Le journal a menti. (distance: d’après le démenti)',
            'D’après le démenti, le journal aurait menti.',
            [
              'D’après le démenti, le journal aurait mentir.',
              'D’après le démenti, le journal serait menti.',
              'D’après le démenti, le journal avait mentir.',
            ],
            'The source marker goes with the conditional perfect: aurait menti.',
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
            'The minister has reportedly resigned.',
            ['Le', 'ministre', 'aurait', 'démissionné.'],
            { extra: ['a'] },
          ),
          sent(
            's2',
            'According to a source, three elected officials are involved.',
            ['Selon', 'une', 'source,', 'trois', 'élus', 'seraient', 'impliqués.'],
            { extra: ['sont'] },
          ),
          sent(
            's3',
            'It seems that the paper wanted to hide the case.',
            ['Il', 'semblerait', 'que', 'le', 'journal', 'ait', 'voulu', 'étouffer', 'l’affaire.'],
            { extra: ['aurait'] },
          ),
          sent(
            's4',
            'The so-called exclusive was a hoax.',
            ['Cette', 'soi-disant', 'exclusivité', 'était', 'un', 'canular.'],
            { extra: ['vraie'] },
          ),
          sent(
            's5',
            'The newspaper published a correction.',
            ['Le', 'journal', 'a', 'publié', 'un', 'rectificatif.'],
            { extra: ['aurait'] },
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Newsroom, press office and phone',
        'Report news with the right distance.',
        ['communication', 'fr-c22-medias'],
        3,
        6,
      ),
      {
        scenes: [
          {
            id: 'redaction',
            title: 'In the newsroom',
            emoji: '🏢',
            setting: 'You are a journalist and report to your editor-in-chief. Use vous.',
            turns: [
              say(
                'La rédactrice en chef',
                'Que savons-nous de la démission ?',
                'What do we know about the resignation?',
              ),
              you(
                'Le ministre aurait démissionné, mais rien n’est confirmé.',
                [
                  'Le ministre a démissionné, mais rien n’est confirmé.',
                  'The indicative states it as a fact; for an unconfirmed item use the conditional.',
                ],
                [
                  'Le ministre aurait démissionné, mais rien est confirmé.',
                  'Rien needs ne: rien n’est confirmé.',
                ],
              ),
              say('La rédactrice en chef', 'Quelle est votre source ?', 'What is your source?'),
              you(
                'D’après un proche du dossier, il y aurait des désaccords.',
                [
                  'D’après un proche du dossier, il y serait des désaccords.',
                  'Il y a is built on avoir: il y aurait.',
                ],
                [
                  'D’après un proche du dossier, il aurait y des désaccords.',
                  'The pronoun y stays before the verb: il y aurait.',
                ],
              ),
            ],
          },
          {
            id: 'porte-parole',
            title: 'At the press office',
            emoji: '🎤',
            setting: 'You are a journalist and question a spokesperson. Use vous.',
            turns: [
              say(
                'Le porte-parole',
                'Je ne confirme rien pour l’instant.',
                'I am not confirming anything for now.',
              ),
              you(
                'Selon nos informations, l’accord serait sur le point d’être signé.',
                [
                  'Selon nos informations, l’accord sera sur le point d’être signé.',
                  'The future announces a fact, not a reserve.',
                ],
                [
                  'Selon nos informations, l’accord serait sur le point de être signé.',
                  'De becomes d’ before a vowel: d’être.',
                ],
              ),
              say(
                'Le porte-parole',
                'C’est une rumeur sans fondement.',
                'That is a groundless rumour.',
              ),
              you(
                'Nous publierons votre démenti si vous le demandez.',
                [
                  'Nous publions votre démenti si vous le demanderiez.',
                  'After si, never use the conditional: si vous le demandez.',
                ],
                [
                  'Nous publierons votre démenti si vous le demandiez.',
                  'Si + imperfect needs a conditional in the main clause.',
                ],
              ),
            ],
          },
          {
            id: 'reseaux',
            title: 'On social media',
            emoji: '📱',
            setting: 'You talk with a friend about a photo that is circulating. Use tu.',
            turns: [
              say(
                'Léa',
                'Tu as vu cette photo ? Elle serait de ce matin.',
                'Have you seen this photo? It is said to be from this morning.',
              ),
              you(
                'Méfie-toi : c’est peut-être un canular.',
                [
                  'Méfie-toi : peut-être c’est un canular.',
                  'At the start of a clause peut-être needs que or inversion.',
                ],
                [
                  'Méfiez-toi : c’est peut-être un canular.',
                  'Tu goes with méfie-toi, not méfiez-toi.',
                ],
              ),
              say('Léa', 'Comment vérifier ?', 'How can we check?'),
              you(
                'Il faut chercher la source avant de partager.',
                [
                  'Il faut chercher la source avant partager.',
                  'Avant takes de before an infinitive: avant de partager.',
                ],
                [
                  'Il faut chercher la source avant de partagé.',
                  'After a preposition the verb is an infinitive: partager.',
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
        'Media and reserve blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'fr-c22-medias'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'The conditional of reserve presents news as unconfirmed.', true),
          tf(
            'b2',
            '“Le ministre aurait démissionné” means the resignation is confirmed.',
            false,
            'It signals that the news is not confirmed.',
          ),
          tf('b3', 'Journalists use the conditional to shift responsibility for a claim.', true),
          tf('b4', 'Selon and d’après introduce a source.', true),
          tf('b5', '“Soi-disant” expresses distance from a claim.', true),
          tf(
            'b6',
            '“Prétendument” means “as has been proved”.',
            false,
            'It means “supposedly”: the speaker doubts the claim.',
          ),
          tf('b7', 'A démenti is a denial.', true),
          tf('b8', 'A rectificatif corrects a published mistake.', true),
          tf('b9', '“Un lanceur d’alerte” reveals wrongdoing.', true),
          tf('b10', '“Un quotidien” is a weekly magazine.', false, 'It is a daily newspaper.'),
          tf(
            'b11',
            '“La diffamation” is the protection of sources.',
            false,
            'It is defamation; the protection of sources is le secret des sources.',
          ),
          tf('b12', '“Un canular” is a hoax.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Editor-in-chief challenge',
        'Vocabulary and reserve in one round.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q('c1', 'Que veut dire « un lanceur d’alerte » ?', 'a whistleblower', [
            'a news anchor',
            'a press officer',
            'a fact-checker',
          ]),
          withLesson(
            q(
              'c2',
              'Rumeur non vérifiée : le chanteur ___ malade.',
              'serait',
              ['est', 'sera', 'fut'],
              'The conditional of reserve marks an unchecked rumour.',
            ),
            LESSON,
          ),
          q('c3', 'Que veut dire « le rectificatif » ?', 'a published correction', [
            'a letter to the editor',
            'a front-page headline',
            'a press agency',
          ]),
          withLesson(
            q(
              'c4',
              'Information non confirmée : le préfet ___ quitté la ville.',
              'aurait',
              ['a', 'avait', 'aura'],
              'Aurait + participle: reported, not confirmed.',
            ),
            LESSON,
          ),
          q(
            'c5',
            'Que veut dire « le secret des sources » ?',
            'a journalist’s right not to name informants',
            ['a secret agreement between papers', 'a hidden paywall', 'an anonymous column'],
          ),
          withLesson(
            q(
              'c6',
              'Comment dit-on « supposedly » avec un doute ?',
              'prétendument',
              ['évidemment', 'justement', 'sûrement'],
              'Prétendument marks the speaker’s doubt.',
            ),
            LESSON,
          ),
          q('c7', 'Que veut dire « le fil d’actualité » ?', 'news feed', [
            'print run',
            'editorial staff',
            'column',
          ]),
          withLesson(
            q(
              'c8',
              'Il ___ que le chiffre soit exagéré.',
              'semblerait',
              ['est certain', 'est clair', 'est évident'],
              'Il semblerait que takes the subjunctive; the others take the indicative.',
            ),
            LESSON,
          ),
        ],
      },
    ),
  ],
};
