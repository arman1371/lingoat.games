import { GrammarIndex } from '@/components/grammar/GrammarIndex';
import { t } from '@/i18n';

/** The Grammar menu item: every written lesson, filterable by level. */
export function GrammarIndexPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="font-display text-3xl font-bold text-ink">{t('grammar.title')}</h1>
        <p className="text-muted">{t('grammar.intro')}</p>
      </header>
      <GrammarIndex />
    </div>
  );
}

export default GrammarIndexPage;
