import { render, screen } from '@testing-library/react';
import { buildNounIndex } from '@/lib/german/nouns';
import { NounIndexContext } from './NounArticle';
import { CaseDrillContext, SentenceNouns } from './SentenceNouns';

const index = buildNounIndex([
  { de: 'Hund', article: 'der' },
  { de: 'Lampe', article: 'die' },
  { de: 'Kind', article: 'das', plural: 'Kinder' },
]);

const renderRow = (text: string, drill = true) =>
  render(
    <NounIndexContext value={index}>
      <CaseDrillContext value={drill}>
        <SentenceNouns text={text} />
      </CaseDrillContext>
    </NounIndexContext>,
  );

describe('SentenceNouns', () => {
  it('lists the article of every noun in the sentence, before any answer', () => {
    renderRow('Ich gebe dem Hund eine Lampe.');
    expect(screen.getByRole('list', { name: 'Nouns' })).toHaveAttribute('lang', 'de');
    expect(screen.getAllByTestId('sentence-noun').map((n) => n.textContent)).toEqual([
      'der Hund',
      'die Lampe',
    ]);
  });

  it('shows the nouns of a gap sentence too', () => {
    renderRow('Ich sehe ___ Hund.');
    expect(screen.getByTestId('sentence-noun')).toHaveTextContent('der Hund');
  });

  it('is not interactive', () => {
    renderRow('Ich sehe ___ Hund.');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders nothing outside a case drill', () => {
    renderRow('Ich sehe ___ Hund.', false);
    expect(screen.queryByTestId('sentence-nouns')).not.toBeInTheDocument();
  });

  it('renders nothing without a noun index or without known nouns', () => {
    render(
      <CaseDrillContext value>
        <SentenceNouns text="Ich sehe ___ Hund." />
      </CaseDrillContext>,
    );
    renderRow('Wie geht es dir?');
    expect(screen.queryByTestId('sentence-nouns')).not.toBeInTheDocument();
  });
});
