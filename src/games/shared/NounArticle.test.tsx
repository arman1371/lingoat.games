import { render, screen } from '@testing-library/react';
import { buildNounIndex } from '@/lib/german/nouns';
import { NounArticle, NounIndexContext } from './NounArticle';

const index = buildNounIndex([
  { de: 'Käse', article: 'der' },
  { de: 'Eltern', article: 'die' },
]);

const renderRow = (text: string, answer: string, value = index) =>
  render(
    <NounIndexContext value={value}>
      <NounArticle text={text} answer={answer} />
    </NounIndexContext>,
  );

describe('NounArticle', () => {
  it('shows the noun with its article and gender', () => {
    renderRow('Ich nehme ___ Käse.', 'den');
    expect(screen.getByTestId('noun-article')).toHaveTextContent('The nounder Käsemasculine');
    expect(screen.getByTestId('noun-article-noun')).toHaveAttribute('lang', 'de');
  });

  it('leaves out the gender when the article does not tell it', () => {
    renderRow('Das sind ___ Eltern.', 'meine');
    expect(screen.getByTestId('noun-article')).toHaveTextContent('The noundie Eltern');
    expect(screen.queryByText(/feminine/)).not.toBeInTheDocument();
  });

  it('renders nothing when the answer is not article-dependent or the noun is unknown', () => {
    renderRow('Ich ___ Käse.', 'mag');
    renderRow('Ich nehme ___ Tisch.', 'den');
    expect(screen.queryByTestId('noun-article')).not.toBeInTheDocument();
  });

  it('renders nothing without a noun index (an engine rendered on its own)', () => {
    render(<NounArticle text="Ich nehme ___ Käse." answer="den" />);
    expect(screen.queryByTestId('noun-article')).not.toBeInTheDocument();
  });
});
