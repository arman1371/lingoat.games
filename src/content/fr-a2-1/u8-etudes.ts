import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  gaps,
  imparfaitTable,
  meta,
  pcTable,
  quizRows,
  say,
  sentRows,
  sortCards,
  spellRows,
  tfRows,
  unitFr21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-a2-1-etudes';

const system = vocabList(U, 'The school system', [
  ['le collège', 'lower secondary school', '🏫'],
  ['le lycée', 'upper secondary school', '🚌'],
  ['le brevet', 'exam at the end of collège', '🎓'],
  ['la licence', 'bachelor’s degree', '📜'],
  ['le master', 'master’s degree', '🧑‍🎓'],
  ['le relevé de notes', 'transcript', '🗒️'],
  ['la filière', 'course of study', '🛤️'],
  ['la bourse', 'grant', '💶'],
  ['l’emploi du temps', 'timetable', '🗓️'],
  ['la matière', 'school subject', '📚'],
  ['la rentrée', 'start of the school year', '🍂'],
  ['l’enseignant', 'teacher', '🧑‍🏫'],
]);

const study = vocabList(U, 'Studying', [
  ['la note', 'mark / grade', '📝'],
  ['le cours magistral', 'lecture', '🎤'],
  ['les travaux dirigés', 'seminar / tutorial', '👥'],
  ['la dissertation', 'essay', '✍️'],
  ['l’exposé', 'presentation', '🗣️'],
  ['le résumé', 'summary', '🧾'],
  ['le campus', 'campus', '🏞️'],
  ['le cartable', 'school bag', '🎒'],
  ['le redoublement', 'repeating a year', '🔂'],
  ['le règlement', 'rules', '📏'],
]);

const verbs = vocabList(U, 'Learning verbs', [
  ['réviser', 'to revise', '📖'],
  ['échouer', 'to fail', '💥'],
  ['redoubler', 'to repeat a year', '🔁'],
  ['s’inscrire', 'to enrol', '🖊️'],
  ['suivre un cours', 'to attend a course', '🎧'],
  ['assister à', 'to attend', '🪑'],
  ['tricher', 'to cheat', '🤥'],
  ['rattraper', 'to catch up', '🏃'],
  ['progresser', 'to make progress', '📈'],
]);

const phrases = vocabList(U, 'Reasons and results', [
  ['J’ai raté l’examen à cause du stress.', 'I failed the exam because of stress.', '😰'],
  ['Grâce à mon prof, j’ai réussi.', 'Thanks to my teacher, I passed.', '🙏'],
  ['Je suis resté parce que j’avais un cours.', 'I stayed because I had a class.', '📚'],
  ['Du coup, j’ai changé de filière.', 'So I changed course.', '🔀'],
  ['C’est pourquoi je révise.', 'That is why I am revising.', '🧠'],
  ['Comme il pleuvait, nous sommes rentrés.', 'As it was raining, we went home.', '🌧️'],
  ['Pourtant, j’avais bien révisé.', 'Yet I had revised well.', '🤷'],
  ['Qu’est-ce que tu étudiais ?', 'What were you studying?', '❓'],
  ['Tu avais quelle matière préférée ?', 'What was your favourite subject?', '⭐'],
  ['Bon courage pour tes examens !', 'Good luck with your exams!', '🍀'],
]);

const vocab = [...system, ...study, ...verbs, ...phrases];

const PCI = 'fr-a21-imparfait-pc' as const;
const CAUSE = 'fr-a21-cause' as const;
const CONS = 'fr-a21-consequence' as const;

export const etudes: UnitContent = {
  unit: unitFr21({
    id: U,
    order: 8,
    title: 'École et formation',
    subtitle: 'Talk about school and training, tell what happened and give reasons',
    emoji: '🎓',
    goals: [
      'Describe the French school system and your own path',
      'Tell a story with the imparfait and the passé composé',
      'Give reasons and results',
    ],
    grammar: [
      'Imparfait or passé composé?',
      'parce que, à cause de, grâce à',
      'donc, alors, du coup',
    ],
    vocabFields: ['The school system', 'Studying', 'Learning verbs', 'Reasons and results'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-system',
      'flashcards',
      meta(
        'The school system',
        'From collège to master: the French education path.',
        ['vocabulary', 'school-education'],
        1,
        3,
      ),
      flashcards(system),
    ),

    activity(
      U,
      'flash-study',
      'flashcards',
      meta(
        'Studying',
        'Marks, lectures, essays and presentations.',
        ['vocabulary', 'school-education'],
        1,
        3,
      ),
      flashcards(study),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What is this?',
        'Name the school word from the picture.',
        ['vocabulary', 'school-education'],
        1,
        3,
      ),
      quizEmoji([...system.slice(0, 8), ...study.slice(0, 4)], [...system, ...study]),
    ),

    activity(
      U,
      'listen-school',
      'listen',
      meta(
        'Listen: school',
        'Listen to the word and pick its meaning.',
        ['listening', 'school-education'],
        2,
        3,
      ),
      listen(
        [
          ...byDe(vocab, 'le lycée', 'la bourse', 'la rentrée', 'la dissertation'),
          ...byDe(vocab, 'réviser', 'échouer', 'tricher', 'rattraper'),
        ],
        vocab,
      ),
    ),

    activity(
      U,
      'memory-school',
      'memory',
      meta(
        'School memory',
        'Find the pairs: French word and English meaning.',
        ['vocabulary', 'school-education'],
        1,
        3,
      ),
      memory([
        ...byDe(vocab, 'le relevé de notes', 'la filière', 'la matière', 'le cartable'),
        ...byDe(vocab, 'redoubler', 's’inscrire', 'progresser', 'assister à'),
      ]),
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Reasons and results',
        'Verbs and phrases to explain what happened and why.',
        ['vocabulary', 'communication', 'school-education'],
        1,
        3,
      ),
      flashcards([...verbs, ...phrases]),
    ),

    activity(
      U,
      'conj-school',
      'conjugation',
      meta(
        'Past tenses at school',
        'Imparfait for the scene, passé composé for the event.',
        ['grammar', PCI],
        2,
        4,
      ),
      {
        tables: [
          imparfaitTable('étudier', 'to study', ['je', 'nous', 'ils/elles']),
          pcTable('réussir', 'to pass / to succeed', ['je', 'tu', 'nous']),
          pcTable('suivre', 'to follow', ['il/elle/on', 'vous', 'ils/elles']),
          imparfaitTable('apprendre', 'to learn', ['tu', 'vous', 'il/elle/on']),
        ],
      },
    ),

    activity(
      U,
      'gap-past',
      'gapfill',
      meta(
        'Scene and event',
        'Choose the imparfait for the background and the passé composé for the event.',
        ['grammar', PCI, 'school-education'],
        3,
        4,
      ),
      {
        items: gaps('p', PCI, [
          [
            'Il ___ quand je suis arrivé.',
            'pleuvait',
            ['pleuvait', 'a plu', 'pleut', 'pleuvra'],
            'It was raining when I arrived.',
            'The weather is the background: imparfait.',
          ],
          [
            'Je ___ quand le professeur est entré.',
            'révisais',
            ['révisais', 'ai révisé', 'révise', 'réviserai'],
            'I was revising when the teacher came in.',
            'An action in progress: imparfait.',
          ],
          [
            'Hier, nous ___ l’examen de maths.',
            'avons passé',
            ['avons passé', 'passions', 'passerons', 'passons'],
            'Yesterday we took the maths exam.',
            'A finished event: passé composé.',
          ],
          [
            'Quand j’___ au lycée, je prenais le bus.',
            'étais',
            ['étais', 'ai été', 'serai', 'suis'],
            'When I was at secondary school, I took the bus.',
            'A situation lasting some time: imparfait.',
          ],
          [
            'Elle ___ fatiguée, alors elle est rentrée.',
            'était',
            ['était', 'a été', 'est', 'sera'],
            'She was tired, so she went home.',
            'A state that explains the event: imparfait.',
          ],
          [
            'Soudain, le téléphone ___ pendant le cours.',
            'a sonné',
            ['a sonné', 'sonnait', 'sonne', 'sonnera'],
            'Suddenly the phone rang during the class.',
            'Soudain introduces an event: passé composé.',
          ],
          [
            'Chaque matin, je ___ le métro pour aller à la fac.',
            'prenais',
            ['prenais', 'ai pris', 'prendrai', 'prends'],
            'Every morning I took the metro to go to uni.',
            'A habit: imparfait.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sort-past',
      'sortit',
      meta(
        'Background or event?',
        'Sort the sentences: do they set the scene or tell what happened?',
        ['grammar', PCI],
        3,
        4,
      ),
      {
        instruction:
          'Does the sentence set the scene (imparfait) or tell an event (passé composé)?',
        buckets: [
          { id: 'scene', label: 'Sets the scene', emoji: '🖼️' },
          { id: 'event', label: 'An event', emoji: '⚡' },
        ],
        items: sortCards('s', [
          ['J’étais fatigué.', 'scene', 'I was tired.'],
          ['Il faisait froid.', 'scene', 'It was cold.'],
          ['Nous habitions à Lyon.', 'scene', 'We lived in Lyon.'],
          ['Elle lisait un livre.', 'scene', 'She was reading a book.'],
          ['Tu avais dix ans.', 'scene', 'You were ten.'],
          ['Je suis rentré à huit heures.', 'event', 'I came home at eight.'],
          ['Elle a réussi son examen.', 'event', 'She passed her exam.'],
          ['Il a téléphoné hier.', 'event', 'He phoned yesterday.'],
          ['Ils sont partis à midi.', 'event', 'They left at noon.'],
          ['J’ai ouvert la porte.', 'event', 'I opened the door.'],
        ]),
      },
    ),

    activity(
      U,
      'gap-cause',
      'gapfill',
      meta(
        'Because of, thanks to',
        'Choose parce que, à cause de, grâce à or comme.',
        ['grammar', CAUSE],
        2,
        4,
      ),
      {
        items: gaps('c', CAUSE, [
          [
            'Je suis en retard ___ la grève.',
            'à cause de',
            ['à cause de', 'grâce à', 'parce que', 'comme'],
            'I am late because of the strike.',
            'À cause de + noun for a negative cause.',
          ],
          [
            '___ mon professeur, j’ai réussi l’examen.',
            'Grâce à',
            ['Grâce à', 'À cause de', 'Parce que', 'Comme'],
            'Thanks to my teacher, I passed the exam.',
            'Grâce à + noun for a positive cause.',
          ],
          [
            'Il est resté chez lui ___ il était malade.',
            'parce qu’',
            ['parce qu’', 'à cause d’', 'grâce à', 'comme'],
            'He stayed at home because he was ill.',
            'Parce que + clause; que becomes qu’ before il.',
          ],
          [
            '___ il pleuvait, nous sommes restés à la maison.',
            'Comme',
            ['Comme', 'Parce que', 'À cause de', 'Grâce à'],
            'As it was raining, we stayed at home.',
            'Comme at the start of a sentence gives the reason first.',
          ],
          [
            'J’ai échoué ___ stress.',
            'à cause du',
            ['à cause du', 'grâce au', 'parce que', 'comme'],
            'I failed because of the stress.',
            'À cause de + le → à cause du.',
          ],
          [
            'Elle a pu étudier ___ sa bourse.',
            'grâce à',
            ['grâce à', 'à cause de', 'parce que', 'comme'],
            'She was able to study thanks to her grant.',
            'A positive cause: grâce à.',
          ],
          [
            'Je n’ai pas dormi ___ j’avais peur de l’examen.',
            'parce que',
            ['parce que', 'à cause de', 'grâce à', 'comme'],
            'I did not sleep because I was afraid of the exam.',
            'Parce que is followed by a full clause.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'gap-consequence',
      'gapfill',
      meta(
        'So, yet, that is why',
        'Choose donc, alors, du coup, pourtant or c’est pourquoi.',
        ['grammar', CONS],
        3,
        4,
      ),
      {
        items: gaps('r', CONS, [
          [
            'J’étais malade, ___ je suis resté au lit.',
            'donc',
            ['donc', 'pourtant', 'parce que', 'mais'],
            'I was ill, so I stayed in bed.',
            'Donc introduces the result.',
          ],
          [
            'Il avait beaucoup révisé, ___ il a échoué.',
            'pourtant',
            ['pourtant', 'donc', 'alors', 'parce que'],
            'He had revised a lot, yet he failed.',
            'Pourtant introduces a contrast.',
          ],
          [
            'Elle n’aimait pas la chimie. ___, elle a changé de filière.',
            'Du coup',
            ['Du coup', 'Pourtant', 'Parce que', 'Comme'],
            'She did not like chemistry. So she changed course.',
            'Du coup is the informal “so”.',
          ],
          [
            'Il pleuvait, ___ nous sommes rentrés.',
            'alors',
            ['alors', 'pourtant', 'mais', 'parce que'],
            'It was raining, so we went home.',
            'Alors introduces the result.',
          ],
          [
            'Je veux réussir, c’est ___ je révise.',
            'pourquoi',
            ['pourquoi', 'parce que', 'donc', 'alors'],
            'I want to succeed, that is why I revise.',
            'C’est pourquoi introduces a result.',
          ],
          [
            'Le cours était ennuyeux, ___ j’ai écouté jusqu’au bout.',
            'pourtant',
            ['pourtant', 'donc', 'du coup', 'alors'],
            'The class was boring, yet I listened to the end.',
            'The result is surprising: pourtant.',
          ],
          [
            'Il n’avait pas de bourse. ___ il a travaillé le soir.',
            'Alors',
            ['Alors', 'Pourtant', 'Parce que', 'Mais'],
            'He had no grant. So he worked in the evening.',
            'Alors starts the sentence that gives the result.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words of a school story in the right order.',
        ['grammar', 'school-education'],
        2,
        4,
      ),
      {
        items: sentRows('s', [
          [
            PCI,
            'It was raining when I left.',
            ['Il', 'pleuvait', 'quand', 'je', 'suis', 'sorti.'],
            ['sortais'],
          ],
          [
            PCI,
            'I was studying when my friend arrived.',
            ['J’étudiais', 'quand', 'mon', 'ami', 'est', 'arrivé.'],
            ['étudie'],
          ],
          [
            CAUSE,
            'I stayed because I had a class.',
            ['Je', 'suis', 'resté', 'parce', 'que', 'j’avais', 'un', 'cours.'],
            ['grâce'],
          ],
          [
            CAUSE,
            'Thanks to my teacher, I passed.',
            ['Grâce', 'à', 'mon', 'prof,', 'j’ai', 'réussi.'],
            ['cause'],
          ],
          [
            CONS,
            'I was ill, so I stayed in bed.',
            ['J’étais', 'malade,', 'donc', 'je', 'suis', 'resté', 'au', 'lit.'],
            ['pourtant'],
          ],
          [
            CONS,
            'So I changed course.',
            ['Du', 'coup,', 'j’ai', 'changé', 'de', 'filière.'],
            ['donc'],
          ],
        ]),
      },
    ),

    activity(
      U,
      'spell-school',
      'spell',
      meta(
        'Spell the school words',
        'Unscramble and type words about studying. Accents are optional here.',
        ['spelling', 'school-education'],
        2,
        3,
      ),
      {
        items: spellRows('sp', [
          ['unscramble', 'lycée', 'upper secondary school', '🚌', 'le lycée'],
          ['unscramble', 'brevet', 'exam at the end of collège', '🎓', 'le brevet'],
          ['type', 'matière', 'school subject', '📚', 'la matière'],
          ['type', 'bourse', 'grant', '💶', 'la bourse'],
          ['type', 'rentrée', 'start of the school year', '🍂', 'la rentrée'],
        ]),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'School stories',
        'Recall your school days, explain a failure and talk about changing course.',
        ['communication', 'school-education'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'memories',
            title: 'School days',
            emoji: '🚌',
            setting: 'A friend asks about your lycée. You say tu.',
            turns: [
              say('Théo', 'Comment c’était, ton lycée ?', 'What was your lycée like?'),
              you(
                'J’adorais mes profs, mais je n’aimais pas les maths.',
                [
                  'J’adore mes profs, mais je n’aime pas les maths.',
                  'You are talking about the past: j’adorais.',
                ],
                [
                  'J’adorait mes profs, mais je n’aimais pas les maths.',
                  'With je the ending is -ais: j’adorais.',
                ],
              ),
              say(
                'Théo',
                'Il s’est passé quelque chose de spécial ?',
                'Did anything special happen?',
              ),
              you(
                'Oui : il neigeait et le bus n’est pas venu.',
                [
                  'Oui : il a neigé et le bus ne venait pas.',
                  'The weather is the background (neigeait); the bus not coming is the event (n’est pas venu).',
                ],
                [
                  'Oui : il neigeait et le bus ne vient pas.',
                  'Use the past for the event: le bus n’est pas venu.',
                ],
              ),
            ],
          },
          {
            id: 'exam',
            title: 'A failed exam',
            emoji: '😰',
            setting: 'Your teacher asks why you failed. You say vous.',
            turns: [
              say('Le professeur', 'Pourquoi avez-vous échoué ?', 'Why did you fail?'),
              you(
                'J’ai échoué à cause du stress, mais je vais recommencer.',
                [
                  'J’ai échoué grâce au stress, mais je vais recommencer.',
                  'Grâce à is for a positive cause; stress is a negative one.',
                ],
                [
                  'J’ai échoué parce du stress, mais je vais recommencer.',
                  'Parce que + clause; à cause de + noun.',
                ],
              ),
              say('Le professeur', 'Vous aviez bien révisé ?', 'Had you revised well?'),
              you(
                'Oui, mais j’étais trop stressé, donc j’ai tout oublié.',
                [
                  'Oui, mais j’étais trop stressé, pourtant j’ai tout oublié.',
                  'Donc gives the result; pourtant would contrast.',
                ],
                [
                  'Oui, mais j’étais trop stressé, donc je ai tout oublié.',
                  'Je + ai becomes j’ai.',
                ],
              ),
            ],
          },
          {
            id: 'orientation',
            title: 'Changing course',
            emoji: '🔀',
            setting: 'An adviser asks about your plans. You say vous.',
            turns: [
              say(
                'La conseillère',
                'Pourquoi voulez-vous changer de filière ?',
                'Why do you want to change course?',
              ),
              you(
                'Comme je n’aimais pas la chimie, je veux étudier les langues.',
                [
                  'À cause de je n’aimais pas la chimie, je veux étudier les langues.',
                  'À cause de needs a noun, not a clause: use parce que or comme.',
                ],
                [
                  'Comme je n’aimait pas la chimie, je veux étudier les langues.',
                  'With je the ending is -ais: j’aimais.',
                ],
              ),
              say('La conseillère', 'Vous avez déjà une idée ?', 'Do you already have an idea?'),
              you(
                'Oui, grâce à mon stage, j’ai découvert l’enseignement.',
                [
                  'Oui, à cause de mon stage, j’ai découvert l’enseignement.',
                  'The internship had a good result: grâce à.',
                ],
                [
                  'Oui, grâce à mon stage, je découvrais l’enseignement.',
                  'One finished discovery: j’ai découvert.',
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
        'School blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'school-education', PCI],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: tfRows('b', [
          ['“Le lycée” comes after “le collège”.', true],
          ['“La bourse” is a grant.', true],
          ['“Redoubler” means “to repeat a year”.', true],
          ['“Il pleuvait quand je suis sorti” is correct.', true],
          [
            '“Il a plu quand je sortais” sets the scene correctly.',
            false,
            'Use the imparfait for the background: il pleuvait.',
          ],
          ['“Grâce à” introduces a positive cause.', true],
          ['“À cause de” is followed by a noun.', true],
          [
            '“À cause de je suis malade” is correct.',
            false,
            'Use parce que + clause: parce que je suis malade.',
          ],
          ['“Donc” introduces a result.', true],
          ['“Pourtant” introduces a result.', false, 'Pourtant introduces a contrast.'],
          ['“Du coup” means “so”.', true],
          ['“L’emploi du temps” is a timetable.', true],
        ]),
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'school-education'],
        3,
        4,
      ),
      {
        questions: quizRows('c', [
          [
            'Complete: “Je dormais quand le téléphone ___.”',
            'a sonné',
            ['sonnait', 'sonne', 'sonnera'],
            PCI,
          ],
          [
            'Complete: “Il ___ froid quand nous sommes partis.”',
            'faisait',
            ['a fait', 'fait', 'fera'],
            PCI,
          ],
          [
            'Complete: “___ mon prof, j’ai appris beaucoup.”',
            'Grâce à',
            ['À cause de', 'Parce que', 'Comme'],
            CAUSE,
          ],
          [
            'Complete: “Je suis fatigué ___ la grève.”',
            'à cause de',
            ['grâce à', 'parce que', 'donc'],
            CAUSE,
          ],
          ['Complete: “J’ai faim, ___ je mange.”', 'donc', ['pourtant', 'parce que', 'mais'], CONS],
          ['Which word introduces a contrast?', 'pourtant', ['donc', 'alors', 'du coup'], CONS],
          [
            '“Le brevet” is …',
            'the exam at the end of collège',
            ['a bachelor’s degree', 'a school bag', 'a grant'],
          ],
          [
            '“Suivre un cours” means …',
            'to attend a course',
            ['to cancel a class', 'to repeat a year', 'to cheat'],
          ],
        ]),
      },
    ),
  ],
};
