import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

async function expectNoViolations(page: Page, label: string) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  const summary = results.violations.map(
    (v) =>
      `${v.id}: ${v.nodes
        .map((n) => n.target.join(' '))
        .slice(0, 3)
        .join(' | ')}`,
  );
  expect(summary, `${label}: accessibility violations`).toEqual([]);
}

/**
 * axe measures contrast on the current frame, so wait for a few frames in which every entrance animation
 * (pop, shake) has finished. A fixed timeout is not enough on a slow runner.
 */
async function settle(page: Page) {
  await page.evaluate(async () => {
    const frame = () => new Promise<void>((done) => requestAnimationFrame(() => done()));
    for (let i = 0; i < 3; i++) {
      await frame();
      await Promise.allSettled(document.getAnimations().map((a) => a.finished));
    }
  });
}

const PAGES: [string, string, string][] = [
  ['home', '/', 'Start your first game'],
  ['home in French', '/fr', 'Starting French'],
  ['level in French', '/fr/levels/fr-a1-1', 'A1.1'],
  ['unit in French', '/fr/levels/fr-a1-1/units/fr-a1-1-bonjour', 'Bonjour !'],
  ['unit 2 in French', '/fr/levels/fr-a1-1/units/fr-a1-1-presenter', 'Je me présente'],
  ['unit 3 in French', '/fr/levels/fr-a1-1/units/fr-a1-1-nombres', 'Les nombres'],
  ['unit 4 in French', '/fr/levels/fr-a1-1/units/fr-a1-1-famille', 'Ma famille'],
  ['unit 5 in French', '/fr/levels/fr-a1-1/units/fr-a1-1-loisirs', 'Goûts et loisirs'],
  ['unit 6 in French', '/fr/levels/fr-a1-1/units/fr-a1-1-table', 'À table !'],
  ['unit 7 in French', '/fr/levels/fr-a1-1/units/fr-a1-1-ville', 'En ville'],
  ['unit 8 in French', '/fr/levels/fr-a1-1/units/fr-a1-1-temps', 'Jours, heure et météo'],
  ['level A1.2 in French', '/fr/levels/fr-a1-2', 'A1.2'],
  ['A1.2 unit 1 in French', '/fr/levels/fr-a1-2/units/fr-a1-2-journee', 'Ma journée'],
  ['level A2.2 in French', '/fr/levels/fr-a2-2', 'A2.2'],
  ['unit 1 of A2.2 in French', '/fr/levels/fr-a2-2/units/fr-a2-2-sante', 'À votre santé !'],
  ['level', '/levels/a1-1', 'A1.1'],
  ['unit', '/levels/a1-1/units/a1-1-hallo', 'Hallo & Tschüss'],
  ['level A1.2', '/levels/a1-2', 'A1.2'],
  ['unit A1.2', '/levels/a1-2/units/a1-2-stadt', 'In der Stadt'],
  ['unit A1.2 with grammar card', '/levels/a1-2/units/a1-2-wohnen', 'Wohnen'],
  ['grammar lesson', '/library/grammar/two-way-prepositions', 'Wo? or Wohin?'],
  ['grammar lesson in French', '/fr/library/grammar/fr-demonstratives', 'ce, cet, cette, ces'],
  ['grammar lesson B2.1', '/library/grammar/konjunktiv-1', 'Reported speech: Konjunktiv I'],
  [
    'grammar lesson B2.2',
    '/library/grammar/perfekt-double-infinitive',
    'Perfekt with a double infinitive',
  ],
  ['level A2.1', '/levels/a2-1', 'A2.1'],
  ['unit A2.1', '/levels/a2-1/units/a2-1-online', 'Online & Apps'],
  ['level A2.2', '/levels/a2-2', 'A2.2'],
  ['unit A2.2', '/levels/a2-2/units/a2-2-lernen', 'Lernen & Prüfungen'],
  ['level B1.1', '/levels/b1-1', 'B1.1'],
  ['unit B1.1', '/levels/b1-1/units/b1-1-glueck', 'Glück im Alltag'],
  ['level C1.2', '/levels/c1-2', 'C1.2'],
  ['unit C1.2', '/levels/c1-2/units/c1-2-finanzen', 'Finanzen'],
  ['level B1.2', '/levels/b1-2', 'B1.2'],
  ['unit B1.2', '/levels/b1-2/units/b1-2-kollegen', 'Unter Kollegen'],
  ['level B2.1', '/levels/b2-1', 'B2.1'],
  ['unit B2.1', '/levels/b2-1/units/b2-1-beziehungen', 'Beziehungen & Gefühle'],
  ['level B2.2', '/levels/b2-2', 'B2.2'],
  ['unit B2.2', '/levels/b2-2/units/b2-2-beziehungen', 'Beziehungen & Vielfalt'],
  ['level C1.1', '/levels/c1-1', 'C1.1'],
  ['unit C1.1', '/levels/c1-1/units/c1-1-zeit', 'Zeit und Tempo'],
  ['level C2.1', '/levels/c2-1', 'C2.1'],
  ['unit C2.1', '/levels/c2-1/units/c2-1-sprache', 'Sprache & Zwischentöne'],
  ['level C2.2', '/levels/c2-2', 'C2.2'],
  ['unit C2.2', '/levels/c2-2/units/c2-2-kunst', 'Kunst & Ästhetik'],
  ['library grammar tab', '/library', 'Library'],
  ['library games tab', '/library?view=games', 'Library'],
  ['library with level filter', '/library?view=games&lvl=a1-2', 'Library'],
  ['review', '/review', 'Mistake box'],
  ['profile', '/profile', 'Profile'],
  ['progress', '/progress', 'Progress'],
  ['play intro', '/play/a1-1-hallo-time-of-day?seed=1', 'Greeting for the time of day'],
  ['404', '/nope', 'Page not found'],
];

for (const scheme of ['light', 'dark'] as const) {
  test.describe(`accessibility (${scheme})`, () => {
    test.use({ colorScheme: scheme });

    for (const [name, url, heading] of PAGES) {
      test(`${name} has no WCAG A/AA violations`, async ({ page }) => {
        // The library renders every game card; axe needs longer as the catalogue grows.
        if (url.startsWith('/library?view=games')) test.slow();
        await page.goto(url);
        await expect(page.getByRole('heading', { name: heading }).first()).toBeVisible();
        await expectNoViolations(page, name);
      });
    }

    test('the language sheet has no violations', async ({ page }) => {
      await page.goto('/profile');
      await page.getByTestId('language-row').click();
      await expect(page.getByRole('dialog', { name: 'Learning language' })).toBeVisible();
      await settle(page);
      await expectNoViolations(page, 'language sheet');
    });

    test('an open game, feedback state and result screen have no violations', async ({ page }) => {
      await page.goto('/play/a1-1-hallo-time-of-day?seed=1');
      await page.getByTestId('start').click();
      await expect(page.getByTestId('prompt')).toBeVisible();
      await expectNoViolations(page, 'quiz question');
      await page.keyboard.press('1');
      await expect(page.getByTestId('feedback')).toBeVisible();
      await settle(page);
      await expectNoViolations(page, 'quiz feedback');
    });

    for (const id of [
      'a1-1-hallo-sort-hello-bye',
      'a1-1-tag-clock-read',
      'a1-1-einkaufen-market-bakery',
      'a1-1-hallo-sentences',
      'a1-1-wer-conj-heissen-sein',
      'a1-1-hallo-memory-greetings',
      'a1-1-hallo-blitz',
      'a1-1-hallo-dialogues',
      'a1-1-zahlen-dictation-phone',
      'a1-1-hallo-flash',
      'a1-2-wohnen-sort-rooms',
      'a1-2-termine-clock-appointments',
      'a1-2-kleidung-market-clothes',
      'a1-2-alltag-dialogues-life',
      'a1-2-arbeit-conj-past',
      'a1-2-termine-dictation',
      'a2-1-wohnung-quiz-ad',
      'a2-1-jobsuche-conj-reflexive',
      'a2-1-beruf-spell-cv',
      'a2-1-aemter-sort-offices',
      'a2-1-bahn-clock-timetable',
      'a2-2-reisen-listen-r-l',
      'a2-2-kunst-gap-adjectives-1',
      'a2-2-post-conj-post',
      'a2-2-feste-sort-final-sounds',
      'a2-2-lernen-quiz-stress',
      'b1-1-glueck-sort-n-ng-nk',
      'b1-1-glueck-memory-idioms',
      'b1-1-zukunft-conj-futur',
      'b1-1-wohnen-sort-two-part',
      'b1-1-feiern-dialogues',
      'c1-2-psychologie-sort-modals',
      'c1-2-recht-gap-substitutes',
      'b1-2-digital-sort-melody',
      'b1-2-heimat-quiz-stress',
      'b1-2-geschichte-conj-passive-past',
      'b1-2-diskussion-sort-presentation',
      'b1-2-regeln-gap-particles',
      'b2-1-besitz-conj-k1',
      'b2-1-wohnen-gap-conditions',
      'b2-1-medien-sort-reference',
      'b2-1-unterwegs-dialogues',
      'b2-1-wohlbefinden-challenge',
      'b2-2-druck-conj-konjunktiv-1',
      'b2-2-netz-sort-certainty',
      'b2-2-kunst-gap-passive',
      'b2-2-stadt-dialogues',
      'c1-1-zeit-sort-stress-calm',
      'c1-1-sprache-conj-k1',
      'c1-1-gesellschaft-sort-must-can',
      'c1-1-wirtschaft-gap-nominal',
      'c1-1-arbeit-dialogues',
      'c2-1-ki-conj-k1',
      'c2-1-wirtschaft-sort-relations',
      'c2-1-debatte-dialogues',
      'c2-2-kulturerbe-conj-passive',
      'c2-2-staat-sort-prepositions',
      'c2-2-nuancen-gap-particles',
      'c2-2-stellung-dialogues',
    ]) {
      test(`${id} has no violations`, async ({ page }) => {
        await page.goto(`/play/${id}?seed=1`);
        await page.getByTestId('start').click();
        // the game itself is a lazy chunk: wait until the intro and the loading fallback are gone
        await expect(page.getByTestId('start')).toHaveCount(0);
        await expect(page.getByRole('status').filter({ hasText: /loading/i })).toHaveCount(0);
        await settle(page);
        await expectNoViolations(page, id);
      });
    }
  });
}
