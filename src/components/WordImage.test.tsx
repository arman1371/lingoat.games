import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ImageManifestContext } from '@/lib/useImageManifest';
import { WordImage } from './WordImage';

const manifest = {
  apfel: ['apples-red-1/', 'someone', 7],
  birne: ['pears-2/', 'other', 8],
} as const;
const withManifest = (ui: React.ReactNode) => (
  <ImageManifestContext.Provider value={manifest}>{ui}</ImageManifestContext.Provider>
);

describe('WordImage', () => {
  it('shows the emoji alone for a word without a photo', () => {
    render(withManifest(<WordImage id="haus" emoji="🏠" />));
    expect(screen.getByTestId('emoji')).toHaveTextContent('🏠');
    expect(screen.getByTestId('emoji')).toHaveClass('opacity-100');
    expect(screen.queryByTestId('word-photo')).not.toBeInTheDocument();
  });

  it('renders nothing when there is neither a photo nor an emoji', () => {
    const { container } = render(withManifest(<WordImage id="haus" />));
    expect(container).toBeEmptyDOMElement();
  });

  it('lazy-loads our own copy of the photo and shows no emoji before, during or after loading', () => {
    render(withManifest(<WordImage id="apfel" emoji="🍎" />));
    const img = screen.getByTestId('word-photo');
    expect(img).toHaveAttribute('src', '/img/apfel.webp');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('alt', '');
    expect(img).toHaveClass('opacity-0');
    expect(screen.getByTestId('emoji')).toHaveClass('opacity-0'); // no flash of the emoji
    fireEvent.load(img);
    expect(img).toHaveClass('opacity-100');
    expect(screen.getByTestId('emoji')).toHaveClass('opacity-0');
  });

  it('falls back to the emoji when the photo fails to load', () => {
    render(withManifest(<WordImage id="apfel" emoji="🍎" />));
    fireEvent.error(screen.getByTestId('word-photo'));
    expect(screen.queryByTestId('word-photo')).not.toBeInTheDocument();
    expect(screen.getByTestId('emoji')).toHaveTextContent('🍎');
    expect(screen.getByTestId('emoji')).toHaveClass('opacity-100');
  });

  it('shows the photo without an emoji, and uses an alt text when one is passed', () => {
    render(withManifest(<WordImage id="apfel" alt="an apple" />));
    expect(screen.getByRole('img', { name: 'an apple' })).toBeInTheDocument();
    expect(screen.queryByTestId('emoji')).not.toBeInTheDocument();
  });

  it('starts over for the next word', () => {
    const { rerender } = render(withManifest(<WordImage id="apfel" emoji="🍎" />));
    fireEvent.error(screen.getByTestId('word-photo'));
    rerender(withManifest(<WordImage id="birne" emoji="🍐" />));
    expect(screen.getByTestId('word-photo')).toHaveAttribute('src', '/img/birne.webp');
  });

  it('keeps the tile empty until the manifest is known, then shows the emoji or the photo', async () => {
    render(<WordImage id="a1-1-hallo-hallo" emoji="👋" />);
    await screen.findByTestId('emoji');
    await waitFor(() => expect(screen.getByTestId('emoji')).toHaveClass('opacity-100'));
  });

  it('loads the generated manifest on its own when none is provided', async () => {
    render(<WordImage id="a1-1-einkaufen-apfel" emoji="🍎" />);
    expect(await screen.findByTestId('word-photo')).toHaveAttribute(
      'src',
      '/img/a1-1-einkaufen-apfel.webp',
    );
    await act(async () => {});
  });
});
