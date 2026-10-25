import indexHtml from '../../index.html?raw';
import faviconSvg from '../../public/favicon.svg?raw';

describe('app icons', () => {
  it('links the favicon, the ICO fallback and the Apple touch icon from index.html', () => {
    expect(indexHtml).toContain('<link rel="icon" href="/favicon.ico" sizes="48x48" />');
    expect(indexHtml).toContain('<link rel="icon" type="image/svg+xml" href="/favicon.svg" />');
    expect(indexHtml).toContain('<link rel="apple-touch-icon" href="/apple-touch-icon.png" />');
  });

  it('uses the brand colour as the theme colour', () => {
    expect(indexHtml).toContain('<meta name="theme-color" content="#584bca" />');
  });

  it('draws the favicon as Goaty on the brand background, not as a letter', () => {
    expect(faviconSvg).toContain('viewBox="0 0 512 512"');
    expect(faviconSvg).toContain('fill="#584BCA"');
    expect(faviconSvg).not.toContain('<text');
    expect(faviconSvg).toContain('fill="#D9A441"'); // horns
  });
});
