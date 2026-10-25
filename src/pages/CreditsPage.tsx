import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { TextField } from '@/components/ui/TextField';
import { label } from '@/content/builders';
import { useContent } from '@/content/ContentProvider';
import { imageUrl, photoPageUrl } from '@/content/images';
import { t } from '@/i18n';
import { useImageManifest } from '@/lib/useImageManifest';

const PAGE_SIZE = 50;

/** Who took which word photo: generated from the image manifest, one row per word. */
export function CreditsPage() {
  const manifest = useImageManifest();
  const { vocab } = useContent();
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState(PAGE_SIZE);

  const rows = useMemo(() => {
    if (!manifest) return [];
    const byId = new Map(vocab.map((v) => [v.id, v]));
    const needle = query.trim().toLowerCase();
    return Object.entries(manifest)
      .flatMap(([id, entry]) => {
        const v = byId.get(id);
        return v ? [{ id, entry, word: label(v), en: v.en }] : [];
      })
      .filter((r) => !needle || `${r.word} ${r.en} ${r.entry[1]}`.toLowerCase().includes(needle))
      .sort((a, b) => a.word.localeCompare(b.word, 'de'));
  }, [manifest, vocab, query]);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-ink">{t('credits.title')}</h1>
        <p className="text-muted">{t('credits.intro')}</p>
        <Link to="/profile" className="text-sm font-bold text-primary underline">
          {t('credits.back')}
        </Link>
      </header>
      <TextField
        label={t('credits.search')}
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShown(PAGE_SIZE);
        }}
      />
      <p aria-live="polite" data-testid="credits-count" className="text-sm font-bold text-muted">
        {t('credits.count', { n: rows.length })}
      </p>
      {manifest && rows.length === 0 ? <p className="text-muted">{t('credits.empty')}</p> : null}
      <ul className="flex flex-col gap-2">
        {rows.slice(0, shown).map((r) => (
          <li key={r.id}>
            <a
              href={photoPageUrl(r.entry)}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card interactive className="flex items-center gap-3 p-3">
                <img
                  src={imageUrl(r.id)}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                  className="size-11 shrink-0 rounded-xl bg-sunken object-cover"
                />
                <span className="flex min-w-0 flex-col">
                  <span className="font-bold text-ink">{r.word}</span>
                  <span className="text-sm text-muted">
                    {t('credits.by', { author: r.entry[1] })}
                    <span className="sr-only"> {t('credits.opens')}</span>
                  </span>
                </span>
              </Card>
            </a>
          </li>
        ))}
      </ul>
      {shown < rows.length ? (
        <Button variant="secondary" onClick={() => setShown((n) => n + PAGE_SIZE)}>
          {t('credits.more')}
        </Button>
      ) : null}
    </div>
  );
}

export default CreditsPage;
