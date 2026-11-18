import { Link } from 'react-router';
import { Card } from '@/components/ui/Card';
import { t } from '@/i18n';
import { getLegal, type LegalDoc, type LegalId } from '@/legal/legal';

function Doc({ doc, lang, level }: { doc: LegalDoc; lang: 'de' | 'en'; level: 1 | 2 }) {
  const H = level === 1 ? 'h1' : 'h2';
  const S = level === 1 ? 'h2' : 'h3';
  return (
    <section lang={lang} className="flex flex-col gap-3">
      <H className="text-3xl font-semibold text-ink">{doc.title}</H>
      {doc.sections.map((s) => (
        <Card key={s.heading} className="flex flex-col gap-2">
          <S className="font-extrabold text-ink">{s.heading}</S>
          {s.paragraphs.map((p) => (
            <p key={p} className="whitespace-pre-line text-sm text-ink">
              {p}
            </p>
          ))}
        </Card>
      ))}
    </section>
  );
}

/** Impressum / Datenschutzerklärung: German (binding) first, English courtesy translation below. */
function LegalPage({ id }: { id: LegalId }) {
  const { de, en } = getLegal(id);
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
      {/* keeps the page, which names the operator, out of search results; the rest of the site stays indexable */}
      <meta name="robots" content="noindex, nofollow" />
      <Doc doc={de} lang="de" level={1} />
      <Link to="/profile" className="text-sm font-bold text-primary underline">
        {t('legal.back')}
      </Link>
      <p className="text-sm font-bold text-muted">{t('legal.translation')}</p>
      <Doc doc={en} lang="en" level={2} />
    </div>
  );
}

export const ImpressumPage = () => <LegalPage id="impressum" />;
export const DatenschutzPage = () => <LegalPage id="datenschutz" />;
