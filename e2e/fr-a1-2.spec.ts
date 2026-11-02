import { expect, test } from '@playwright/test';
import fr12 from '../src/content/fr-a1-2';
import { activity, captureSpeech, playPerfectly } from './helpers';

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
});

test.describe('French A1.2 – level navigation', () => {
  test('French Home lists A1.2 as available with its games', async ({ page }) => {
    await page.goto('/fr');
    const card = page.getByTestId('level-fr-a1-2');
    await expect(card).toContainText('A1.2');
    await expect(card).toContainText(`0 / ${fr12.activities.length} games`);
  });

  test('Home → A1.2 → unit shows the unit and a guided path, all inside /fr', async ({ page }) => {
    await page.goto('/fr');
    await page.getByTestId('level-fr-a1-2').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a1-2$/);
    await expect(page.getByRole('heading', { name: 'A1.2', level: 1 })).toBeVisible();
    const units = page.getByRole('list', { name: 'Units' }).getByRole('listitem');
    await expect(units).toHaveCount(fr12.units.length);
    await page.getByTestId('unit-fr-a1-2-journee').click();
    await expect(page).toHaveURL(/\/fr\/levels\/fr-a1-2\/units\/fr-a1-2-journee$/);
    await expect(page.getByRole('heading', { name: 'Ma journée', level: 1 })).toBeVisible();
    const steps = page.getByRole('list', { name: 'Guided path' }).getByRole('listitem');
    await expect(steps).toHaveCount(
      fr12.activities.filter((x) => x.unitId === 'fr-a1-2-journee').length,
    );
    await expect(steps.first()).toHaveAttribute('data-state', 'current');
  });
});

/** Every engine that a French A1.2 unit uses is exercised through the real UI. */
const PLAYED: [engine: string, activityId: string][] = [
  ['flashcards (morning)', 'fr-a1-2-journee-flash-morning'],
  ['flashcards (activities)', 'fr-a1-2-journee-flash-activities'],
  ['flashcards (parts of the day)', 'fr-a1-2-journee-flash-when'],
  ['flashcards (how often)', 'fr-a1-2-journee-flash-order'],
  ['quiz (what are they doing)', 'fr-a1-2-journee-quiz-emoji'],
  ['listen (routine verbs)', 'fr-a1-2-journee-listen-routine'],
  ['conjugation (pronominal verbs)', 'fr-a1-2-journee-conj-pronominal'],
  ['gap fill (me, te, se)', 'fr-a1-2-journee-gap-pronominal'],
  ['gap fill (how often)', 'fr-a1-2-journee-gap-frequency'],
  ['gap fill (first, then, finally)', 'fr-a1-2-journee-gap-sequence'],
  ['sentence builder', 'fr-a1-2-journee-sentences'],
  ['spell (accents and a hyphen)', 'fr-a1-2-journee-spell-routine'],
  ['dialogue (three scenes)', 'fr-a1-2-journee-dialogues'],
  ['blitz', 'fr-a1-2-journee-blitz'],
  ['quiz (unit challenge)', 'fr-a1-2-journee-challenge'],
  ['flashcards (family)', 'fr-a1-2-fetes-flash-family'],
  ['flashcards (celebrations)', 'fr-a1-2-fetes-flash-events'],
  ['flashcards (wishes)', 'fr-a1-2-fetes-flash-wishes'],
  ['flashcards (looks and character)', 'fr-a1-2-fetes-flash-looks'],
  ['flashcards (past and future)', 'fr-a1-2-fetes-flash-markers'],
  ['quiz (which celebration)', 'fr-a1-2-fetes-quiz-emoji'],
  ['listen (wishes)', 'fr-a1-2-fetes-listen-wishes'],
  ['conjugation (passé composé)', 'fr-a1-2-fetes-conj-passe-compose'],
  ['sort it (participle endings)', 'fr-a1-2-fetes-sort-participles'],
  ['gap fill (passé composé)', 'fr-a1-2-fetes-gap-passe-compose'],
  ['gap fill (time markers)', 'fr-a1-2-fetes-gap-markers'],
  ['sort it (looks or character)', 'fr-a1-2-fetes-sort-traits'],
  ['sentence builder', 'fr-a1-2-fetes-sentences'],
  ['dialogue (three scenes)', 'fr-a1-2-fetes-dialogues'],
  ['blitz', 'fr-a1-2-fetes-blitz'],
  ['quiz (unit challenge)', 'fr-a1-2-fetes-challenge'],
  ['flashcards (rooms)', 'fr-a1-2-logement-flash-rooms'],
  ['flashcards (furniture)', 'fr-a1-2-logement-flash-furniture'],
  ['flashcards (repairs)', 'fr-a1-2-logement-flash-repairs'],
  ['flashcards (house rules)', 'fr-a1-2-logement-flash-rules'],
  ['flashcards (where exactly)', 'fr-a1-2-logement-flash-where'],
  ['quiz (what is in the flat)', 'fr-a1-2-logement-quiz-emoji'],
  ['listen (problems)', 'fr-a1-2-logement-listen-repairs'],
  ['sort it (which room)', 'fr-a1-2-logement-sort-rooms'],
  ['gap fill (object pronouns)', 'fr-a1-2-logement-gap-object-pronouns'],
  ['gap fill (y)', 'fr-a1-2-logement-gap-y'],
  ['gap fill (place words)', 'fr-a1-2-logement-gap-where'],
  ['gap fill (rules)', 'fr-a1-2-logement-gap-rules'],
  ['sentence builder (home)', 'fr-a1-2-logement-sentences'],
  ['dialogue (home scenes)', 'fr-a1-2-logement-dialogues'],
  ['blitz (home)', 'fr-a1-2-logement-blitz'],
  ['quiz (home challenge)', 'fr-a1-2-logement-challenge'],
  ['flashcards (planning)', 'fr-a1-2-vacances-flash-planning'],
  ['flashcards (where to stay)', 'fr-a1-2-vacances-flash-stay'],
  ['flashcards (on holiday)', 'fr-a1-2-vacances-flash-holiday'],
  ['flashcards (comparing places)', 'fr-a1-2-vacances-flash-compare'],
  ['quiz (what is it)', 'fr-a1-2-vacances-quiz-emoji'],
  ['listen (the trip)', 'fr-a1-2-vacances-listen-trip'],
  ['conjugation (partir, sortir, dormir)', 'fr-a1-2-vacances-conj-partir'],
  ['conjugation (passé composé with être)', 'fr-a1-2-vacances-conj-etre'],
  ['sort it (avoir or être)', 'fr-a1-2-vacances-sort-auxiliary'],
  ['gap fill (comparison)', 'fr-a1-2-vacances-gap-comparison'],
  ['gap fill (être agreement)', 'fr-a1-2-vacances-gap-pc-etre'],
  ['gap fill (c’était)', 'fr-a1-2-vacances-gap-cetait'],
  ['sentence builder (holiday)', 'fr-a1-2-vacances-sentences'],
  ['dialogue (booking and postcard)', 'fr-a1-2-vacances-dialogues'],
  ['blitz (holiday)', 'fr-a1-2-vacances-blitz'],
  ['quiz (holiday challenge)', 'fr-a1-2-vacances-challenge'],
  ['flashcards (the body)', 'fr-a1-2-sante-flash-body'],
  ['flashcards (doctor and pharmacy)', 'fr-a1-2-sante-flash-doctor'],
  ['flashcards (advice and bad luck)', 'fr-a1-2-sante-flash-advice'],
  ['quiz (body and care)', 'fr-a1-2-sante-quiz-emoji'],
  ['listen (symptoms)', 'fr-a1-2-sante-listen-symptoms'],
  ['conjugation (devoir, pouvoir)', 'fr-a1-2-sante-conj-devoir'],
  ['conjugation (pronominal passé composé)', 'fr-a1-2-sante-conj-pronominal-pc'],
  ['gap fill (avoir mal à)', 'fr-a1-2-sante-gap-avoir-mal'],
  ['gap fill (devoir, il faut)', 'fr-a1-2-sante-gap-devoir'],
  ['gap fill (lui, leur)', 'fr-a1-2-sante-gap-lui-leur'],
  ['gap fill (pronominal past)', 'fr-a1-2-sante-gap-pc-pronominal'],
  ['gap fill (pourquoi, parce que)', 'fr-a1-2-sante-gap-because'],
  ['sentence builder (health)', 'fr-a1-2-sante-sentences'],
  ['dialogue (doctor and pharmacy)', 'fr-a1-2-sante-dialogues'],
  ['blitz (health)', 'fr-a1-2-sante-blitz'],
  ['quiz (health challenge)', 'fr-a1-2-sante-challenge'],
  ['flashcards (working life)', 'fr-a1-2-travail-flash-work'],
  ['flashcards (looking for a job)', 'fr-a1-2-travail-flash-search'],
  ['flashcards (skills)', 'fr-a1-2-travail-flash-skills'],
  ['flashcards (university and goals)', 'fr-a1-2-travail-flash-study'],
  ['quiz (work and university)', 'fr-a1-2-travail-quiz-emoji'],
  ['listen (work and study)', 'fr-a1-2-travail-listen-work'],
  ['conjugation (savoir, pouvoir, vouloir)', 'fr-a1-2-travail-conj-savoir-pouvoir'],
  ['gap fill (savoir or pouvoir)', 'fr-a1-2-travail-gap-savoir-pouvoir'],
  ['gap fill (si)', 'fr-a1-2-travail-gap-si'],
  ['gap fill (depuis, pendant)', 'fr-a1-2-travail-gap-depuis'],
  ['gap fill (qui, que)', 'fr-a1-2-travail-gap-qui-que'],
  ['gap fill (très, trop)', 'fr-a1-2-travail-gap-intensity'],
  ['sentence builder (work)', 'fr-a1-2-travail-sentences'],
  ['dialogue (interview and studies)', 'fr-a1-2-travail-dialogues'],
  ['blitz (work)', 'fr-a1-2-travail-blitz'],
  ['quiz (work challenge)', 'fr-a1-2-travail-challenge'],
  ['flashcards (town and countryside)', 'fr-a1-2-nature-flash-town'],
  ['flashcards (nature)', 'fr-a1-2-nature-flash-nature'],
  ['flashcards (animals)', 'fr-a1-2-nature-flash-animals'],
  ['flashcards (environment and new life)', 'fr-a1-2-nature-flash-change'],
  ['quiz (animals and landscapes)', 'fr-a1-2-nature-quiz-emoji'],
  ['listen (in the country)', 'fr-a1-2-nature-listen-nature'],
  ['sort it (town or countryside)', 'fr-a1-2-nature-sort-town-country'],
  ['spell (animals)', 'fr-a1-2-nature-spell-nature'],
  ['conjugation (-er verbs)', 'fr-a1-2-nature-conj-er'],
  ['gap fill (plus de, moins de)', 'fr-a1-2-nature-gap-quantity'],
  ['gap fill (en)', 'fr-a1-2-nature-gap-en'],
  ['gap fill (adverbs in -ment)', 'fr-a1-2-nature-gap-adverbs'],
  ['sentence builder (nature)', 'fr-a1-2-nature-sentences'],
  ['dialogue (a new life)', 'fr-a1-2-nature-dialogues'],
  ['blitz (nature)', 'fr-a1-2-nature-blitz'],
  ['quiz (nature challenge)', 'fr-a1-2-nature-challenge'],
];

test.describe('French A1.2 – playing the games', () => {
  for (const [engine, id] of PLAYED) {
    test(`${engine}: ${id} can be played perfectly`, async ({ page }) => {
      await playPerfectly(page, id);
      await expect(page.getByRole('img', { name: '3 of 3 stars' })).toBeVisible();
      await expect(page.getByTestId('mistakes-note')).toHaveCount(0);
    });
  }

  test('the units covered above include every French A1.2 unit', () => {
    const covered = new Set(PLAYED.map(([, id]) => activity(id).unitId));
    expect([...covered].sort()).toEqual(fr12.units.map((u) => u.id).sort());
  });
});
