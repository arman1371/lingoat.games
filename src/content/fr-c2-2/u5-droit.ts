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

const U = 'fr-c2-2-droit';
const LESSON = 'fr-c22-negation' as const;

const tribunal = vocabList(U, 'In court', [
  ['le juge d’instruction', 'investigating judge', '🔎'],
  ['le procureur', 'public prosecutor', '👨‍⚖️'],
  ['le prévenu', 'person accused of an offence', '🧍'],
  ['le justiciable', 'person who uses the courts', '👤'],
  ['l’audience', 'court hearing', '🏛️'],
  ['la plaidoirie', 'counsel’s speech, plea', '🗣️'],
  ['le jugement', 'judgment', '📜'],
  ['la peine', 'sentence, penalty', '⛓️'],
  ['le sursis', 'suspended sentence', '⏳'],
  ['l’acquittement', 'acquittal', '✅'],
  ['le pourvoi en cassation', 'appeal to the Court of Cassation', '📤'],
  ['le non-lieu', 'decision not to prosecute', '🚫'],
  ['la garde à vue', 'police custody', '🚔'],
]);

const droits = vocabList(U, 'Rights, disputes and contracts', [
  ['le litige', 'dispute', '💢'],
  ['la clause', 'clause', '📑'],
  ['la résiliation', 'termination (of a contract)', '✂️'],
  ['le préjudice', 'harm, damage suffered', '🩹'],
  ['le dédommagement', 'compensation', '💶'],
  ['la mise en demeure', 'formal notice', '✉️'],
  ['le recours', 'appeal, legal remedy', '↩️'],
  ['l’assignation', 'summons', '📨'],
  ['la prescription', 'limitation period', '⌛'],
  ['la juridiction', 'court, jurisdiction', '🗺️'],
  ['l’huissier', 'bailiff', '📎'],
  ['le droit d’auteur', 'copyright', '©️'],
  ['l’atteinte à la vie privée', 'invasion of privacy', '🔒'],
]);

const vocab = [...tribunal, ...droits];
const grammarTags = ['grammar', LESSON, 'fr-c22-droit'] as const;

export const droit: UnitContent = {
  unit: unitFrC22({
    id: U,
    order: 5,
    title: 'Droit et justice',
    subtitle: 'Talk about courts, rights and contracts, and master the finer points of negation',
    emoji: '⚖️',
    goals: [
      'Follow and describe a trial, from the investigation to the appeal',
      'Talk about contracts, disputes and claims',
      'Use ne … que, ni … ni, the negative pronouns and ne on its own',
    ],
    grammar: [
      'ne … que (only) and ne … ni … ni (neither … nor).',
      'personne, rien and aucun as subjects: personne n’a parlé.',
      'ne alone in formal French (je ne puis, il ne cesse de) and the explétif ne (plus grave que je ne pensais).',
      'pas de after a negation: je n’ai pas de preuve.',
    ],
    vocabFields: ['In court', 'Rights, disputes and contracts'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-tribunal',
      'flashcards',
      meta(
        'In court',
        'Prévenu, plaidoirie, sursis: who and what you meet in a trial.',
        ['vocabulary', 'fr-c22-droit'],
        1,
        4,
      ),
      flashcards(tribunal),
    ),

    activity(
      U,
      'flash-droits',
      'flashcards',
      meta(
        'Rights, disputes and contracts',
        'Litige, préjudice, mise en demeure: the words of a legal conflict.',
        ['vocabulary', 'fr-c22-droit'],
        1,
        4,
      ),
      flashcards(droits),
    ),

    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta(
        'Inside the courtroom',
        'Name the word for the picture.',
        ['vocabulary', 'fr-c22-droit'],
        1,
        4,
      ),
      quizEmoji(
        byDe(
          tribunal,
          'le juge d’instruction',
          'le procureur',
          'la plaidoirie',
          'le jugement',
          'la peine',
          'le sursis',
          'l’acquittement',
          'la garde à vue',
        ),
      ),
    ),

    activity(
      U,
      'listen-droits',
      'listen',
      meta('Hear the lawyers', 'Listen and pick the meaning.', ['listening', 'fr-c22-droit'], 2, 4),
      listen(droits),
    ),

    activity(
      U,
      'memory-droits',
      'memory',
      meta(
        'Lawyer’s memory',
        'Match each legal term with its meaning.',
        ['vocabulary', 'fr-c22-droit'],
        2,
        4,
      ),
      memory(
        byDe(
          droits,
          'le litige',
          'la clause',
          'la résiliation',
          'le préjudice',
          'le dédommagement',
          'la mise en demeure',
          'le recours',
          'l’assignation',
        ),
      ),
    ),

    activity(
      U,
      'spell-tribunal',
      'spell',
      meta(
        'Spell it',
        'Unscramble, type and write what you hear. Accents are optional here.',
        ['spelling', 'fr-c22-droit'],
        2,
        5,
      ),
      {
        items: [
          {
            id: 'sp-plaidoirie',
            mode: 'unscramble',
            answer: 'plaidoirie',
            hint: 'counsel’s speech, plea',
            emoji: '🗣️',
            speak: 'la plaidoirie',
          },
          {
            id: 'sp-acquittement',
            mode: 'unscramble',
            answer: 'acquittement',
            hint: 'acquittal',
            emoji: '✅',
            speak: 'l’acquittement',
          },
          {
            id: 'sp-huissier',
            mode: 'type',
            answer: 'huissier',
            hint: 'bailiff',
            emoji: '📎',
            speak: 'l’huissier',
          },
          {
            id: 'sp-prejudice',
            mode: 'type',
            answer: 'préjudice',
            hint: 'harm, damage suffered',
            emoji: '🩹',
            speak: 'le préjudice',
          },
          dictation('d1', 'Le prévenu n’a que dix euros.', 'The accused has only ten euros.'),
          dictation('d2', 'Personne n’a contesté le jugement.', 'Nobody contested the judgment.'),
        ],
      },
    ),

    activity(
      U,
      'gap-negation',
      'gapfill',
      meta(
        'Which negation?',
        'Choose the word that completes the negation.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'Le prévenu n’a ___ dix euros sur lui.',
              'que',
              ['que', 'pas', 'plus', 'ni'],
              'The accused has only ten euros on him.',
              'Ne … que means “only”: it denies everything but the amount.',
            ),
            {
              pas: 'Ne … pas would say that he has no ten euros.',
              plus: 'Ne … plus means “no longer”.',
              ni: 'Ni needs a second ni.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Personne ___ a contesté le jugement.',
              'n’',
              ['n’', 'ne pas', 'ne', 'pas'],
              'Nobody contested the judgment.',
              'Personne as a subject goes with ne, which becomes n’ before a vowel. There is no pas.',
            ),
            {
              'ne pas': 'Personne already makes the sentence negative: no pas.',
              ne: 'Before a vowel ne becomes n’.',
              pas: 'Ne is required, and pas is not.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'La peine est plus lourde que je ___ pensais.',
              'ne',
              ['ne', 'pas', 'n’ai', 'ne pas'],
              'The sentence is heavier than I thought.',
              'After a comparative, a literary ne (the ne explétif) is often added. It is not a negation.',
            ),
            {
              pas: 'The sentence is not negative: no pas.',
              'n’ai': 'Pensais is already conjugated: only ne is needed.',
              'ne pas': 'The ne explétif stands alone.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Le prévenu n’a pas ___ avocat.',
              'd’',
              ['d’', 'un', 'de l’', 'du'],
              'The accused has no lawyer.',
              'After a plain negation, un/une/des become de (d’ before a vowel).',
            ),
            {
              un: 'After ne … pas the indefinite article becomes de.',
              'de l’': 'That is a partitive, which does not fit a countable avocat.',
              du: 'Avocat is a countable noun: d’avocat.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Elle n’a ___ le temps ni l’argent de faire appel.',
              'ni',
              ['ni', 'pas', 'ne', 'et'],
              'She has neither the time nor the money to appeal.',
              'Ni … ni joins two negated items; the first ni follows n’a directly.',
            ),
            {
              pas: 'Ni … ni replaces pas.',
              ne: 'Ne is already there as n’.',
              et: 'Et does not combine with ni.',
            },
          ),
          withWhy(
            gap(
              'g6',
              'L’affaire ne progresse ___ depuis un an.',
              'guère',
              ['guère', 'rien', 'personne', 'aucun'],
              'The case has hardly progressed for a year.',
              'Guère is a negative adverb meaning “hardly”; it stands where pas would.',
            ),
            {
              rien: 'Rien replaces a thing, and progresser has no object here.',
              personne: 'Personne replaces a person.',
              aucun: 'Aucun needs a noun after it.',
            },
          ),
          typed(
            't1',
            'Il n’y a ni preuve ___ aveu dans ce dossier.',
            'ni',
            'There is neither proof nor confession in this file.',
            'Ni … ni: each item has its own ni.',
          ),
          typed(
            't2',
            'Je ___ puis vous dire la date du procès.',
            'ne',
            'I cannot tell you the date of the trial.',
            'In formal French ne alone is enough with pouvoir (je ne puis).',
          ),
          typed(
            't3',
            'Le procureur n’a ___ deux témoins à citer.',
            'que',
            'The prosecutor has only two witnesses to call.',
            'Ne … que restricts: only two.',
          ),
          typed(
            't4',
            'Rien ___ prouve sa culpabilité.',
            'ne',
            'Nothing proves his guilt.',
            'Rien as a subject takes ne before the verb, without pas.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sort-negation',
      'sortit',
      meta(
        'Which kind of negation?',
        'Plain negation, ne … que, ni … ni, or ne on its own?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'What kind of negation is it?',
        buckets: [
          { id: 'pas', label: 'ne … pas / jamais / plus', emoji: '🚫' },
          { id: 'que', label: 'ne … que (only)', emoji: '☝️' },
          { id: 'ni', label: 'ne … ni … ni (neither)', emoji: '⚖️' },
          { id: 'seul', label: 'ne alone / ne explétif', emoji: '✒️' },
        ],
        items: cards('n', [
          ['le prévenu n’a pas parlé', 'pas', 'the accused did not speak'],
          ['je ne vois pas de témoin', 'pas', 'I see no witness'],
          ['elle n’a jamais fait appel', 'pas', 'she never appealed'],
          ['il n’a que deux jours pour faire appel', 'que', 'he has only two days to appeal'],
          ['je n’ai fait que mon devoir', 'que', 'I only did my duty'],
          [
            'elle ne demande qu’une chose : la vérité',
            'que',
            'she asks for one thing only: the truth',
          ],
          [
            'ni le procureur ni l’avocat n’ont parlé',
            'ni',
            'neither the prosecutor nor the lawyer spoke',
          ],
          ['il n’a ni nié ni avoué', 'ni', 'he neither denied nor confessed'],
          ['elle n’a ni témoin ni preuve', 'ni', 'she has neither witness nor proof'],
          ['je ne saurais vous répondre', 'seul', 'I could not answer you'],
          ['il ne cesse de protester', 'seul', 'he keeps protesting'],
          [
            'la peine est plus lourde que je ne pensais',
            'seul',
            'the sentence is heavier than I thought',
          ],
        ]),
      },
    ),

    activity(
      U,
      'quiz-transform',
      'quiz',
      meta(
        'Say it with ne',
        'Rewrite the sentence with the negation asked for.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            't1',
            'Le juge a seulement deux dossiers.',
            'Le juge n’a que deux dossiers.',
            [
              'Le juge n’a pas que deux dossiers.',
              'Le juge ne que a deux dossiers.',
              'Le juge n’a seulement deux dossiers.',
            ],
            'Ne goes before the verb and que before the element that remains.',
          ),
          q(
            't2',
            'Il n’a pas parlé et il n’a pas écrit.',
            'Il n’a ni parlé ni écrit.',
            [
              'Il n’a pas ni parlé ni écrit.',
              'Il ni a parlé ni a écrit.',
              'Il n’a ni parlé et écrit.',
            ],
            'Ni … ni replaces pas, with one ni before each element.',
          ),
          q(
            't3',
            'Quelqu’un a contesté le jugement. (negative)',
            'Personne n’a contesté le jugement.',
            [
              'Personne a contesté le jugement.',
              'Personne n’a pas contesté le jugement.',
              'Pas personne n’a contesté le jugement.',
            ],
            'Personne is the subject, followed by ne and no pas.',
          ),
          q(
            't4',
            'Je ne peux pas vous le dire. (formal register)',
            'Je ne puis vous le dire.',
            [
              'Je ne puis vous pas le dire.',
              'Je puis ne vous le dire.',
              'Je ne vous puis le dire.',
            ],
            'In formal French, pouvoir (je puis) can take ne alone.',
          ),
          q(
            't5',
            'Elle est plus habile qu’on le pensait. (with the ne explétif)',
            'Elle est plus habile qu’on ne le pensait.',
            [
              'Elle est plus habile qu’on ne pas le pensait.',
              'Elle est plus habile qu’on ne le pensait pas.',
              'Elle est ne plus habile qu’on le pensait.',
            ],
            'The ne explétif goes before the pronoun and the verb of the comparison.',
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
            'The accused has only ten euros.',
            ['Le', 'prévenu', 'n’a', 'que', 'dix', 'euros.'],
            { extra: ['seulement'] },
          ),
          sent(
            's2',
            'Neither the prosecutor nor the lawyer spoke.',
            ['Ni', 'le', 'procureur', 'ni', 'l’avocat', 'n’ont', 'parlé.'],
            { extra: ['pas'] },
          ),
          sent(
            's3',
            'Nobody contested the judgment.',
            ['Personne', 'n’a', 'contesté', 'le', 'jugement.'],
            {
              extra: ['pas'],
            },
          ),
          sent(
            's4',
            'The sentence is heavier than I thought.',
            ['La', 'peine', 'est', 'plus', 'lourde', 'que', 'je', 'ne', 'pensais.'],
            { extra: ['pas'] },
          ),
          sent(
            's5',
            'He keeps claiming his innocence.',
            ['Il', 'ne', 'cesse', 'de', 'clamer', 'son', 'innocence.'],
            { extra: ['rien'] },
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Lawyer, clerk and interview',
        'Talk about a case with the right negation.',
        ['communication', 'fr-c22-droit'],
        3,
        6,
      ),
      {
        scenes: [
          {
            id: 'avocat',
            title: 'With your lawyer',
            emoji: '👩‍⚖️',
            setting: 'You are the accused and talk to your lawyer. Use vous.',
            turns: [
              say(
                'Maître Roux',
                'Le procureur n’a ni preuve ni témoin direct.',
                'The prosecutor has neither proof nor a direct witness.',
              ),
              you(
                'Alors personne ne peut m’accuser, n’est-ce pas ?',
                [
                  'Alors personne peut m’accuser, n’est-ce pas ?',
                  'Personne needs ne before the verb.',
                ],
                [
                  'Alors personne ne peut pas m’accuser, n’est-ce pas ?',
                  'Personne already carries the negation: no pas.',
                ],
              ),
              say(
                'Maître Roux',
                'Pas si vite : l’enquête n’est pas terminée.',
                'Not so fast: the investigation is not over.',
              ),
              you(
                'Je ne saurais en dire davantage sans vous.',
                [
                  'Je saurais ne en dire davantage sans vous.',
                  'Ne goes before the verb, not after it.',
                ],
                [
                  'Je ne saurais en dire davantage pas sans vous.',
                  'Pas has no place here: in formal French ne alone is enough.',
                ],
              ),
            ],
          },
          {
            id: 'greffe',
            title: 'At the clerk’s office',
            emoji: '🗃️',
            setting: 'You have received a formal notice and talk to a clerk. Use vous.',
            turns: [
              say(
                'La greffière',
                'Vous avez reçu une mise en demeure ?',
                'Have you received a formal notice?',
              ),
              you(
                'Oui, mais je n’ai ni le temps ni l’argent d’aller au tribunal.',
                [
                  'Oui, mais je n’ai pas ni le temps ni l’argent d’aller au tribunal.',
                  'Ni … ni replaces pas: never combine them.',
                ],
                [
                  'Oui, mais je n’ai ni le temps et l’argent d’aller au tribunal.',
                  'The second element needs its own ni.',
                ],
              ),
              say(
                'La greffière',
                'Vous pouvez faire un recours gratuit.',
                'You can make a free appeal.',
              ),
              you(
                'Merci : je n’avais pas pensé à cette possibilité.',
                [
                  'Merci : je ne pas avais pensé à cette possibilité.',
                  'In a compound tense, ne goes before the auxiliary and pas after it.',
                ],
                [
                  'Merci : je n’avais pensé pas à cette possibilité.',
                  'Pas follows the auxiliary, not the participle.',
                ],
              ),
            ],
          },
          {
            id: 'interview',
            title: 'Interview with a jurist',
            emoji: '🎙️',
            setting: 'You are a journalist and interview a jurist. Use vous.',
            turns: [
              say(
                'La juriste',
                'On dit que la justice est lente. C’est vrai, mais pas toujours.',
                'People say justice is slow. That is true, but not always.',
              ),
              you(
                'Elle est plus lente que beaucoup ne le croient, surtout en appel.',
                [
                  'Elle est plus lente que beaucoup ne pas le croient, surtout en appel.',
                  'The ne explétif is not followed by pas.',
                ],
                [
                  'Elle est plus lente que beaucoup le croient pas, surtout en appel.',
                  'Pas would turn it into a real negation, and ne would be missing.',
                ],
              ),
              say(
                'La juriste',
                'Un justiciable doit connaître les délais.',
                'A person using the courts must know the deadlines.',
              ),
              you(
                'Il ne doit pas attendre : la prescription n’épargne personne.',
                [
                  'Il ne doit attendre pas : la prescription n’épargne personne.',
                  'Pas goes before the infinitive-dependent verb: il ne doit pas attendre.',
                ],
                [
                  'Il ne doit pas attendre : la prescription n’épargne rien.',
                  'For people use personne: n’épargne personne.',
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
        'Law and negation blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'fr-c22-droit'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Ne … que” means “only”.', true),
          tf(
            'b2',
            '“Je n’ai pas que dix euros” means “I have only ten euros”.',
            false,
            'That says he has more than ten euros. “Only” is je n’ai que dix euros.',
          ),
          tf('b3', 'With ni … ni, you do not add pas.', true),
          tf(
            'b4',
            '“Personne n’a pas parlé” is correct.',
            false,
            'Personne already negates the sentence: personne n’a parlé.',
          ),
          tf('b5', 'In formal French ne can be enough with verbs such as pouvoir or savoir.', true),
          tf('b6', 'The ne explétif has a negative meaning.', false, 'It adds nothing negative.'),
          tf('b7', '“Plus grave que je ne pensais” contains an explétif ne.', true),
          tf('b8', 'After a negation, des becomes de: je n’ai pas de preuves.', true),
          tf('b9', '“Un prévenu” is a person accused of an offence.', true),
          tf('b10', '“Le sursis” suspends the carrying out of a sentence.', true),
          tf('b11', '“Un acquittement” is a guilty verdict.', false, 'It is an acquittal.'),
          tf('b12', '“Un huissier” is a judge.', false, 'He is a bailiff.'),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Court clerk challenge',
        'Vocabulary and negation in one round.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q('c1', 'Que veut dire « un non-lieu » ?', 'a decision not to prosecute', [
            'a place of detention',
            'a guilty plea',
            'a court of appeal',
          ]),
          withLesson(
            q(
              'c2',
              'Il ne reste ___ deux jours pour faire appel.',
              'que',
              ['pas', 'ni', 'rien'],
              'Ne … que: only two days remain.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c3',
              'Ni le témoin ___ l’accusé n’a répondu.',
              'ni',
              ['et', 'ou', 'pas'],
              'Ni … ni: each element has its own ni.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c4',
              'Personne ___ osé contester la décision.',
              'n’a',
              ['n’a pas', 'a pas', 'ne pas a'],
              'Personne goes with ne alone.',
            ),
            LESSON,
          ),
          q('c5', 'Que veut dire « la prescription » ?', 'the limitation period', [
            'the final sentence',
            'a court summons',
            'a lawyer’s fee',
          ]),
          withLesson(
            q(
              'c6',
              'Elle a obtenu plus qu’elle ___ espérait.',
              'n’',
              ['pas', 'ne pas', 'jamais'],
              'The ne explétif follows a comparative.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c7',
              'Il n’y a pas ___ preuve contre lui.',
              'de',
              ['une', 'la', 'des'],
              'After a plain negation, un/une become de.',
            ),
            LESSON,
          ),
          q('c8', 'Que veut dire « le justiciable » ?', 'a person who uses the courts', [
            'a type of judge',
            'a court clerk',
            'a jury member',
          ]),
        ],
      },
    ),
  ],
};
