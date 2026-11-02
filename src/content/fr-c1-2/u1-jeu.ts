import { activity, byDe, flashcards, listen, memory, quizDeEn, vocabList } from '../builders';
import { unitFrC12 } from './helpers';
import type { UnitContent } from './types';

const U = 'fr-c1-2-jeu';

const games = vocabList(U, 'Jeux et paris', [
  ['le jeu de hasard', 'game of chance', '🍀'],
  ['le jeu de société', 'board game', '🧩'],
  ['le jeu d’argent', 'gambling game, game played for money', '💶'],
  ['le pari', 'bet', '🤞'],
  ['parier', 'to bet', '🏇'],
  ['le parieur', 'bettor', '🧐'],
  ['la mise', 'stake', '🪙'],
  ['miser', 'to stake, to put money on', '🃏'],
  ['le gain', 'winnings', '💰'],
  ['le gros lot', 'jackpot, top prize', '🏆'],
  ['le tirage au sort', 'prize draw, drawing of lots', '🎟️'],
  ['la machine à sous', 'slot machine', '🎰'],
  ['le casino', 'casino', '🏛️'],
  ['le dé', 'die (plural: dice)', '🎲'],
  ['les échecs', 'chess', '♟️'],
  ['le plateau', 'game board', '🗺️'],
  ['la partie', 'a game, one round', '⏱️'],
  ['la règle du jeu', 'rule of the game', '📜'],
  ['tricher', 'to cheat', '🥷'],
  ['le tricheur', 'cheat', '🕵️'],
  ['perdre gros', 'to lose a lot of money', '📉'],
  ['le joueur', 'player, gambler', '🎮'],
]);

const help = vocabList(U, 'Dépendance et prévention', [
  ['la dépendance', 'dependence, addiction', '🔗'],
  ['l’addiction', 'addiction', '⛓️'],
  ['le joueur compulsif', 'compulsive gambler', '🌀'],
  ['la compulsion', 'compulsion, urge', '🔁'],
  ['s’endetter', 'to get into debt', '💳'],
  ['se ruiner', 'to ruin oneself, to lose everything', '🏚️'],
  ['le sevrage', 'withdrawal (from an addiction)', '🚭'],
  ['la rechute', 'relapse', '↩️'],
  ['l’entourage', 'the people around you, family and friends', '👥'],
  ['la prévention', 'prevention', '🛡️'],
  ['la ludothérapie', 'play therapy', '🧸'],
  ['ludique', 'playful, fun', '😄'],
  ['la ludification', 'gamification', '🏅'],
  ['se prendre au jeu', 'to get caught up in the game', '🪤'],
  ['jouer le tout pour le tout', 'to go for broke', '🚀'],
  ['quitte ou double', 'double or nothing', '🔄'],
  ['Les jeux sont faits', 'the bets are placed (roulette)', '🔔'],
  ['Rien ne va plus', 'no more bets (roulette)', '🛑'],
]);

const vocab = [...games, ...help];

const betting = byDe(
  vocab,
  'le pari',
  'parier',
  'le parieur',
  'la mise',
  'miser',
  'le gain',
  'le gros lot',
  'le tirage au sort',
  'la machine à sous',
  'tricher',
);
const memoryPairs = byDe(
  vocab,
  'le dé',
  'les échecs',
  'le plateau',
  'la partie',
  'le tricheur',
  'la règle du jeu',
);
const heard = byDe(
  vocab,
  'le jeu de hasard',
  'le jeu de société',
  'la mise',
  'le gain',
  'la machine à sous',
  'la dépendance',
  'la rechute',
  'l’entourage',
);

export const jeu: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 1,
    title: 'Quitte ou double !',
    subtitle: 'Games, gambling and addiction – and how the -ant forms work',
    emoji: '🎲',
    goals: [
      'Talk about games of chance, strategy and skill',
      'Describe gambling, dependence and prevention',
      'Choose between participe présent, gérondif and adjectif verbal',
    ],
    grammar: ['Participe présent', 'Gérondif (en + -ant)', 'Adjectif verbal'],
    vocabFields: ['Jeux et paris', 'Dépendance et prévention'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-games',
      'flashcards',
      {
        title: 'Games and bets',
        description: 'Meet the words for games of chance, bets and winnings.',
        tags: ['vocabulary', 'fr-c12-games'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(games.slice(0, 14)),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match each French word with its English meaning.',
        tags: ['vocabulary', 'fr-c12-games'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(betting, games),
    ),

    activity(
      U,
      'memory-games',
      'memory',
      {
        title: 'Table game memory',
        description: 'Find the pairs: French word and English meaning.',
        tags: ['vocabulary', 'fr-c12-games'],
        difficulty: 1,
        estMinutes: 3,
      },
      memory(memoryPairs),
    ),

    activity(
      U,
      'listen-games',
      'listen',
      {
        title: 'Listen: games and addiction',
        description: 'Listen to the word and pick its meaning.',
        tags: ['listening', 'fr-c12-games'],
        difficulty: 1,
        estMinutes: 3,
      },
      listen(heard, vocab),
    ),

    activity(
      U,
      'flash-addiction',
      'flashcards',
      {
        title: 'Dependence and prevention',
        description: 'Words and set phrases for addiction, help and the language of the casino.',
        tags: ['vocabulary', 'fr-c12-games'],
        difficulty: 2,
        estMinutes: 4,
      },
      flashcards(help),
    ),

    activity(
      U,
      'quiz-definitions',
      'quiz',
      {
        title: 'Which word is defined?',
        description: 'Read the definition in French and find the word.',
        tags: ['vocabulary', 'fr-c12-games'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'd1',
            prompt: 'Somme d’argent que l’on engage dans un jeu.',
            options: ['la mise', 'le gain', 'la rechute', 'le plateau'],
            answer: 'la mise',
          },
          {
            id: 'd2',
            prompt: 'Argent que l’on reçoit lorsqu’on gagne.',
            options: ['le gain', 'la mise', 'la dépendance', 'le pari'],
            answer: 'le gain',
          },
          {
            id: 'd3',
            prompt: 'Personne qui ne respecte pas les règles pour gagner.',
            options: ['le tricheur', 'le parieur', 'le joueur compulsif', 'le gagnant'],
            answer: 'le tricheur',
          },
          {
            id: 'd4',
            prompt: 'Retour d’un comportement addictif après une période d’arrêt.',
            options: ['la rechute', 'le sevrage', 'la prévention', 'la partie'],
            answer: 'la rechute',
          },
          {
            id: 'd5',
            prompt: 'État de celui qui ne peut plus se passer d’une activité.',
            options: ['la dépendance', 'la ludification', 'le tirage au sort', 'la mise'],
            answer: 'la dépendance',
          },
          {
            id: 'd6',
            prompt: 'La famille et les amis proches d’une personne.',
            options: ['l’entourage', 'la prévention', 'le sevrage', 'le plateau'],
            answer: 'l’entourage',
          },
          {
            id: 'd7',
            prompt: 'Soin qui utilise le jeu pour aider une personne.',
            options: ['la ludothérapie', 'la compulsion', 'la ludification', 'le sevrage'],
            answer: 'la ludothérapie',
          },
          {
            id: 'd8',
            prompt: 'Se retrouver avec des dettes à rembourser.',
            options: ['s’endetter', 'se ruiner', 'parier', 'tricher'],
            answer: 's’endetter',
            explanation: '“Se ruiner” means to lose all one’s money, not just to owe some.',
          },
          {
            id: 'd9',
            prompt: 'Appareil dans lequel on introduit des pièces pour tenter de gagner.',
            options: ['la machine à sous', 'le dé', 'le plateau', 'la partie'],
            answer: 'la machine à sous',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-kinds',
      'sortit',
      {
        title: 'Chance, strategy or skill?',
        description: 'Sort the games by what decides the winner.',
        tags: ['vocabulary', 'fr-c12-games'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'What decides who wins?',
        buckets: [
          { id: 'hasard', label: 'le hasard – luck', emoji: '🍀' },
          { id: 'strategie', label: 'la stratégie – planning', emoji: '🧠' },
          { id: 'adresse', label: 'l’adresse – skill', emoji: '🎯' },
        ],
        items: [
          {
            id: 'h1',
            text: 'la loterie',
            bucket: 'hasard',
            speak: 'la loterie',
            translation: 'lottery',
          },
          {
            id: 'h2',
            text: 'la roulette',
            bucket: 'hasard',
            speak: 'la roulette',
            translation: 'roulette',
          },
          {
            id: 'h3',
            text: 'la tombola',
            bucket: 'hasard',
            speak: 'la tombola',
            translation: 'raffle',
          },
          {
            id: 's1',
            text: 'les échecs',
            bucket: 'strategie',
            speak: 'les échecs',
            translation: 'chess',
          },
          {
            id: 's2',
            text: 'le jeu de go',
            bucket: 'strategie',
            speak: 'le jeu de go',
            translation: 'the game of Go',
          },
          {
            id: 's3',
            text: 'les dames',
            bucket: 'strategie',
            speak: 'les dames',
            translation: 'draughts, checkers',
          },
          {
            id: 'a1',
            text: 'le billard',
            bucket: 'adresse',
            speak: 'le billard',
            translation: 'billiards, pool',
          },
          {
            id: 'a2',
            text: 'les fléchettes',
            bucket: 'adresse',
            speak: 'les fléchettes',
            translation: 'darts',
          },
          {
            id: 'a3',
            text: 'la pétanque',
            bucket: 'adresse',
            speak: 'la pétanque',
            translation: 'pétanque, boules',
          },
          {
            id: 'a4',
            text: 'le flipper',
            bucket: 'adresse',
            speak: 'le flipper',
            translation: 'pinball',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-ant',
      'sortit',
      {
        title: '-ant: three jobs',
        description:
          'Sort the sentences: participe présent, gérondif (en + -ant) or adjectif verbal.',
        tags: ['grammar', 'fr-c12-participe-present', 'fr-c12-gerondif', 'fr-c12-adjectif-verbal'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'Which -ant form is in the sentence?',
        buckets: [
          { id: 'participe', label: 'participe présent', emoji: '➡️' },
          { id: 'gerondif', label: 'gérondif (en …ant)', emoji: '🔄' },
          { id: 'adjectif', label: 'adjectif verbal', emoji: '🎭' },
        ],
        items: [
          {
            id: 'p1',
            text: 'Ayant tout perdu, il a arrêté de jouer.',
            bucket: 'participe',
            speak: 'Ayant tout perdu, il a arrêté de jouer.',
            translation: 'Having lost everything, he stopped playing.',
          },
          {
            id: 'p2',
            text: 'Je cherche un joueur connaissant les règles.',
            bucket: 'participe',
            speak: 'Je cherche un joueur connaissant les règles.',
            translation: 'I am looking for a player who knows the rules.',
          },
          {
            id: 'p3',
            text: 'Sachant que tout était perdu, elle a abandonné.',
            bucket: 'participe',
            speak: 'Sachant que tout était perdu, elle a abandonné.',
            translation: 'Knowing that all was lost, she gave up.',
          },
          {
            id: 'g1',
            text: 'Il a perdu gros en jouant au casino.',
            bucket: 'gerondif',
            speak: 'Il a perdu gros en jouant au casino.',
            translation: 'He lost a lot by playing at the casino.',
          },
          {
            id: 'g2',
            text: 'On apprend les règles en jouant.',
            bucket: 'gerondif',
            speak: 'On apprend les règles en jouant.',
            translation: 'You learn the rules by playing.',
          },
          {
            id: 'g3',
            text: 'Elle regarde le match tout en travaillant.',
            bucket: 'gerondif',
            speak: 'Elle regarde le match tout en travaillant.',
            translation: 'She watches the match while working.',
          },
          {
            id: 'a1',
            text: 'Une partie passionnante.',
            bucket: 'adjectif',
            speak: 'Une partie passionnante.',
            translation: 'A thrilling game.',
          },
          {
            id: 'a2',
            text: 'Des résultats décevants.',
            bucket: 'adjectif',
            speak: 'Des résultats décevants.',
            translation: 'Disappointing results.',
          },
          {
            id: 'a3',
            text: 'Ce jeu est vraiment captivant.',
            bucket: 'adjectif',
            speak: 'Ce jeu est vraiment captivant.',
            translation: 'This game is really captivating.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-forms',
      'gapfill',
      {
        title: 'Participle or gérondif?',
        description: 'Choose or type the right -ant form.',
        tags: ['grammar', 'fr-c12-participe-present', 'fr-c12-gerondif'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'f1',
            text: 'Il s’est ruiné en ___ sur des chevaux.',
            answer: 'pariant',
            options: ['pariant', 'parié', 'parier', 'parie'],
            translation: 'He ruined himself by betting on horses.',
            explanation: 'After en the verb takes the -ant form: nous parions → pariant.',
            lesson: 'fr-c12-gerondif',
            why: {
              parié: 'After en you need the -ant form, not the past participle.',
              parier: 'After en you need the -ant form, not the infinitive.',
            },
          },
          {
            id: 'f2',
            text: 'Elle a trouvé la solution en ___ le plateau autrement.',
            answer: 'tournant',
            options: ['tournant', 'tourné', 'tourner', 'tourne'],
            translation: 'She found the solution by turning the board around.',
            lesson: 'fr-c12-gerondif',
            why: { tourné: 'After en you need the -ant form, not the past participle.' },
          },
          {
            id: 'f3',
            text: '___ que la partie était perdue, il a abandonné.',
            answer: 'Sachant',
            options: ['Sachant', 'Savant', 'Sait', 'Su'],
            translation: 'Knowing that the game was lost, he gave up.',
            explanation: 'savoir is irregular: sachant. Here the participle gives the reason.',
            lesson: 'fr-c12-participe-present',
            why: {
              Savant: 'savant is an adjective or a noun (a scholar), not the participle of savoir.',
            },
          },
          {
            id: 'f4',
            text: 'Je cherche un joueur ___ les règles des échecs.',
            answer: 'connaissant',
            options: ['connaissant', 'connu', 'connaissante', 'connaître'],
            translation: 'I am looking for a player who knows the rules of chess.',
            explanation: 'The participle replaces “qui connaît” and never agrees.',
            lesson: 'fr-c12-participe-present',
            why: {
              connaissante: 'The participle is invariable; it does not take a feminine ending.',
            },
          },
          {
            id: 'f5',
            text: '___ endetté, il a vendu sa voiture.',
            answer: 'Étant',
            options: ['Étant', 'Été', 'Être', 'Sont'],
            translation: 'Being in debt, he sold his car.',
            explanation:
              'être is irregular: étant. It gives the reason (= comme il était endetté).',
            lesson: 'fr-c12-participe-present',
          },
          {
            id: 'f6',
            text: 'Il fait ses devoirs tout ___ regardant le match.',
            answer: 'en',
            options: ['en', 'au', 'à', 'par'],
            translation: 'He does his homework while watching the match.',
            explanation: 'tout en + -ant stresses that two actions happen at the same time.',
            lesson: 'fr-c12-gerondif',
          },
          {
            id: 'f7',
            text: 'Il a gagné en ___ (tricher).',
            answer: 'trichant',
            translation: 'He won by cheating.',
            explanation: 'nous trichons → trichant, with en: the gérondif.',
            lesson: 'fr-c12-gerondif',
          },
          {
            id: 'f8',
            text: 'Elle s’est endettée en ___ (miser) toutes ses économies.',
            answer: 'misant',
            translation: 'She got into debt by staking all her savings.',
            explanation: 'nous misons → misant, with en: the gérondif.',
            lesson: 'fr-c12-gerondif',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-adjectives',
      'gapfill',
      {
        title: 'Adjective or participle?',
        description: 'Agree the adjectif verbal and watch the spelling.',
        tags: ['grammar', 'fr-c12-adjectif-verbal'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'j1',
            text: 'Ce jeu de société est vraiment ___.',
            answer: 'captivant',
            options: ['captivant', 'captivante', 'captivants', 'captivantes'],
            translation: 'This board game is really captivating.',
            explanation: 'jeu is masculine singular, so the adjective has no ending.',
            why: {
              captivante: 'jeu is masculine, so no -e.',
              captivants: 'jeu is singular, so no -s.',
              captivantes: 'jeu is masculine singular: no -e and no -s.',
            },
          },
          {
            id: 'j2',
            text: 'Les parties les plus ___ durent jusqu’à minuit.',
            answer: 'passionnantes',
            options: ['passionnantes', 'passionnante', 'passionnants', 'passionnant'],
            translation: 'The most thrilling games last until midnight.',
            explanation: 'parties is feminine plural: -antes.',
            why: {
              passionnants: 'parties is feminine, so you need -es as well.',
              passionnante: 'parties is plural, so you need -s.',
            },
          },
          {
            id: 'j3',
            text: 'Les résultats ont été ___ pour les parieurs.',
            answer: 'décevants',
            options: ['décevants', 'décevant', 'décevantes', 'décevante'],
            translation: 'The results were disappointing for the bettors.',
            why: {
              décevant: 'résultats is plural, so the adjective takes -s.',
              décevantes: 'résultats is masculine, so no -e.',
            },
          },
          {
            id: 'j4',
            text: 'Une soirée au casino peut être très ___.',
            answer: 'fatigante',
            options: ['fatigante', 'fatiguante', 'fatigantes', 'fatigant'],
            translation: 'An evening at the casino can be very tiring.',
            explanation: 'The adjective is spelled fatigant(e); the participle is fatiguant.',
            why: {
              fatiguante: 'The adjective is spelled with a plain g: fatigante.',
              fatigant: 'soirée is feminine, so the adjective ends in -e.',
            },
          },
          {
            id: 'j5',
            text: 'Ses arguments sont ___.',
            answer: 'convaincants',
            options: ['convaincants', 'convainquants', 'convaincant', 'convaincantes'],
            translation: 'His arguments are convincing.',
            explanation: 'The adjective is spelled convaincant; the participle is convainquant.',
            why: {
              convainquants: 'The adjective keeps the c: convaincants.',
              convaincant: 'arguments is plural, so the adjective takes -s.',
            },
          },
          {
            id: 'j6',
            text: 'Les règles sont ___ d’un pays à l’autre.',
            answer: 'différentes',
            options: ['différentes', 'différantes', 'différents', 'différente'],
            translation: 'The rules differ from one country to another.',
            explanation: 'The adjective is différent(e); the participle is différant.',
            why: {
              différantes: 'The adjective ends in -ent: différentes.',
              différents: 'règles is feminine, so you need -es.',
            },
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the sentence',
        description: 'Put the words in order – each sentence uses an -ant form.',
        tags: ['grammar', 'fr-c12-participe-present', 'fr-c12-gerondif'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'He lost a lot by playing at the casino.',
            words: ['Il', 'a', 'perdu', 'gros', 'en', 'jouant', 'au', 'casino.'],
            lesson: 'fr-c12-gerondif',
          },
          {
            id: 's2',
            translation: 'You learn the rules by playing.',
            words: ['On', 'apprend', 'les', 'règles', 'en', 'jouant.'],
            lesson: 'fr-c12-gerondif',
          },
          {
            id: 's3',
            translation: 'She makes progress by training every day.',
            words: ['Elle', 'progresse', 'en', 's’entraînant', 'chaque', 'jour.'],
            alsoAccept: ['En s’entraînant chaque jour, elle progresse.'],
            lesson: 'fr-c12-gerondif',
          },
          {
            id: 's4',
            translation: 'Knowing that the game was lost, he gave up.',
            words: ['Sachant', 'que', 'la', 'partie', 'était', 'perdue,', 'il', 'a', 'abandonné.'],
            lesson: 'fr-c12-participe-present',
          },
          {
            id: 's5',
            translation: 'He watches the match while doing his homework.',
            words: ['Il', 'regarde', 'le', 'match', 'tout', 'en', 'faisant', 'ses', 'devoirs.'],
            lesson: 'fr-c12-gerondif',
          },
          {
            id: 's6',
            translation: 'Having lost everything, she stopped playing.',
            words: ['Ayant', 'tout', 'perdu,', 'elle', 'a', 'arrêté', 'de', 'jouer.'],
            alsoAccept: ['Elle a arrêté de jouer, ayant tout perdu.'],
            lesson: 'fr-c12-participe-present',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the words',
        description: 'Unscramble, type and write what you hear. Accents are optional here.',
        tags: ['spelling', 'fr-c12-games'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'sp1',
            mode: 'unscramble',
            answer: 'ludothérapie',
            hint: 'play therapy',
            emoji: '🧸',
            speak: 'ludothérapie',
          },
          {
            id: 'sp2',
            mode: 'unscramble',
            answer: 'parieur',
            hint: 'bettor',
            emoji: '🧐',
            speak: 'parieur',
          },
          {
            id: 'sp3',
            mode: 'type',
            answer: 'la rechute',
            hint: 'relapse',
            emoji: '↩️',
            speak: 'la rechute',
          },
          {
            id: 'sp4',
            mode: 'type',
            answer: 'la dépendance',
            hint: 'dependence, addiction',
            emoji: '🔗',
            speak: 'la dépendance',
          },
          {
            id: 'sp5',
            mode: 'dictation',
            answer: 'Rien ne va plus',
            hint: 'Type what you hear (no more bets)',
            speak: 'Rien ne va plus',
          },
          {
            id: 'sp6',
            mode: 'dictation',
            answer: 'quitte ou double',
            hint: 'Type what you hear (double or nothing)',
            speak: 'quitte ou double',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Talking about gambling',
        description: 'Three conversations: a worried friend, a counsellor and a game night.',
        tags: ['communication', 'fr-c12-games'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'friend',
            title: 'A worried friend',
            emoji: '😟',
            setting: 'Sophie has noticed that Karim plays online poker every night.',
            turns: [
              {
                kind: 'npc',
                who: 'Sophie',
                text: 'Karim, tu as encore joué toute la nuit ? Tu as l’air épuisé.',
                translation: 'Karim, did you play all night again? You look exhausted.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Oui, je me suis pris au jeu et je n’ai pas vu l’heure passer.',
                    correct: true,
                  },
                  {
                    text: 'Non, j’ai perdu gros hier, mais c’est sans importance.',
                    correct: false,
                    feedback: 'That does not answer her question about the night.',
                  },
                  {
                    text: 'Oui, c’est un jeu très épuisé.',
                    correct: false,
                    feedback: 'People are “épuisé”; a game is “épuisant” (an adjectif verbal).',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Sophie',
                text: 'Tu mises de plus en plus, non ? Je m’inquiète pour toi.',
                translation: 'You are staking more and more, aren’t you? I am worried about you.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Tu as raison. Je vais en parler avec mon entourage.',
                    correct: true,
                  },
                  {
                    text: 'Rien ne va plus, c’est ça ?',
                    correct: false,
                    feedback: '“Rien ne va plus” is what the croupier says at the roulette table.',
                  },
                  {
                    text: 'Les jeux sont faits, tu peux partir.',
                    correct: false,
                    feedback: 'That is a roulette phrase and a rude way to answer a friend.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Sophie',
                text: 'Merci de m’écouter. Je suis là si tu as besoin.',
                translation: 'Thank you for listening. I am here if you need me.',
              },
            ],
          },
          {
            id: 'counsellor',
            title: 'At the counsellor’s',
            emoji: '🗂️',
            setting: 'Karim talks to a specialist about his gambling.',
            turns: [
              {
                kind: 'npc',
                who: 'La conseillère',
                text: 'Depuis quand avez-vous du mal à vous arrêter ?',
                translation: 'Since when have you found it hard to stop?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Depuis un an environ. Je mise de plus en plus en cachant tout à mes proches.',
                    correct: true,
                  },
                  {
                    text: 'Depuis un an environ. Je mise de plus en plus en cachent tout à mes proches.',
                    correct: false,
                    feedback: 'The gérondif is en cachant – the form ends in -ant, not -ent.',
                  },
                  {
                    text: 'Je suis un jeu de société, madame.',
                    correct: false,
                    feedback: 'That does not answer the question.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'La conseillère',
                text: 'Avez-vous déjà essayé d’arrêter ? Y a-t-il eu une rechute ?',
                translation: 'Have you tried to stop before? Was there a relapse?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Oui, deux fois. Chaque fois, j’ai rechuté au bout d’un mois.',
                    correct: true,
                  },
                  {
                    text: 'Oui, c’est un gros lot.',
                    correct: false,
                    feedback: '“Le gros lot” is the jackpot – not what she is asking about.',
                  },
                  {
                    text: 'Non, c’est le tirage au sort.',
                    correct: false,
                    feedback: 'A prize draw is not an answer here.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'La conseillère',
                text: 'Nous allons d’abord faire le point sur votre situation financière.',
                translation: 'First we will look at your financial situation.',
              },
            ],
          },
          {
            id: 'game-night',
            title: 'Game night',
            emoji: '🧩',
            setting: 'Friends are choosing a board game for the evening.',
            turns: [
              {
                kind: 'npc',
                who: 'Julie',
                text: 'On joue aux échecs ou à un jeu de société ?',
                translation: 'Shall we play chess or a board game?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Plutôt un jeu de société : c’est plus ludique et on peut discuter en jouant.',
                    correct: true,
                  },
                  {
                    text: 'Plutôt un jeu de société : c’est plus ludique et on peut discuter en joué.',
                    correct: false,
                    feedback: 'After en you need the -ant form: en jouant.',
                  },
                  {
                    text: 'Plutôt une machine à sous, c’est moins fatiguant.',
                    correct: false,
                    feedback: 'A slot machine is not a game for a group of friends.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Julie',
                text: 'D’accord ! Mais attention : pas de tricheur autour de la table !',
                translation: 'OK! But careful: no cheats around the table!',
              },
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      {
        title: 'Games blitz',
        description: 'True or false? Words, culture and the -ant forms.',
        tags: ['grammar', 'fr-c12-participe-present', 'fr-c12-gerondif', 'fr-c12-adjectif-verbal'],
        difficulty: 3,
        estMinutes: 3,
      },
      {
        seconds: 60,
        statements: [
          { id: 'b1', text: 'The gérondif is always introduced by “en”.', isTrue: true },
          {
            id: 'b2',
            text: 'The participe présent agrees with the noun in gender and number.',
            isTrue: false,
            explanation: 'The participle is invariable. Only the adjectif verbal agrees.',
          },
          {
            id: 'b3',
            text: '“Des règles différentes” contains an adjectif verbal.',
            isTrue: true,
          },
          {
            id: 'b4',
            text: 'The present participle of “être” is “étant”.',
            isTrue: true,
          },
          {
            id: 'b5',
            text: 'The present participle of “savoir” is “savant”.',
            isTrue: false,
            explanation: 'It is “sachant”. “Savant” is an adjective or noun.',
          },
          {
            id: 'b6',
            text: 'In “Il a gagné en trichant”, the same person wins and cheats.',
            isTrue: true,
            explanation: 'The gérondif shares the subject of the main verb.',
          },
          {
            id: 'b7',
            text: '“Quitte ou double” means “double or nothing”.',
            isTrue: true,
          },
          {
            id: 'b8',
            text: 'The croupier says “Rien ne va plus” before the roulette wheel starts.',
            isTrue: true,
          },
          {
            id: 'b9',
            text: '“Le gain” is the money you stake.',
            isTrue: false,
            explanation: '“La mise” is the stake. “Le gain” is what you win.',
          },
          {
            id: 'b10',
            text: '“Une soirée fatiguante” is the correct spelling of the adjective.',
            isTrue: false,
            explanation: 'The adjective is “fatigante”; “fatiguant” is the participle.',
          },
          {
            id: 'b11',
            text: '“Tout en travaillant” stresses that two actions happen at the same time.',
            isTrue: true,
          },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Words and -ant forms in one final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c12-games'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: '“Le parieur” is someone who …',
            options: ['places bets', 'cheats at cards', 'runs a casino', 'wins the jackpot'],
            answer: 'places bets',
          },
          {
            id: 'c2',
            prompt: 'Il a gagné le gros lot en ___ un seul billet.',
            options: ['achetant', 'acheté', 'acheter', 'achète'],
            answer: 'achetant',
            lesson: 'fr-c12-gerondif',
            why: { acheté: 'After en you need the -ant form.' },
          },
          {
            id: 'c3',
            prompt: 'Which sentence contains an adjectif verbal?',
            options: [
              'Une histoire passionnante.',
              'Il parle en riant.',
              'Ayant perdu, il part.',
              'Je cherche un joueur connaissant le jeu.',
            ],
            answer: 'Une histoire passionnante.',
            lesson: 'fr-c12-adjectif-verbal',
          },
          {
            id: 'c4',
            prompt: 'After a long period of abstinence he starts gambling again. This is …',
            options: ['une rechute', 'un sevrage', 'un pari', 'une ludification'],
            answer: 'une rechute',
          },
          {
            id: 'c5',
            prompt: '___ le courage de s’arrêter, elle a demandé de l’aide.',
            options: ['Ayant', 'Avoir', 'Eu', 'Ayante'],
            answer: 'Ayant',
            lesson: 'fr-c12-participe-present',
            why: { Ayante: 'The participle is invariable.' },
          },
          {
            id: 'c6',
            prompt: 'Des conversations ___ avec son entourage l’ont aidé.',
            options: ['convaincantes', 'convainquantes', 'convaincants', 'convaincante'],
            answer: 'convaincantes',
            lesson: 'fr-c12-adjectif-verbal',
            why: { convainquantes: 'The adjective is spelled convaincant(e).' },
          },
          {
            id: 'c7',
            prompt: 'What does “se prendre au jeu” mean?',
            options: [
              'to get caught up in the game',
              'to win the game',
              'to cheat in a game',
              'to buy a game',
            ],
            answer: 'to get caught up in the game',
          },
          {
            id: 'c8',
            prompt: 'Elle regarde la télé tout ___ révisant.',
            options: ['en', 'au', 'par', 'dans'],
            answer: 'en',
            lesson: 'fr-c12-gerondif',
          },
        ],
      },
    ),
  ],
};
