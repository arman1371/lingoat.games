import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useProgress } from '@/app/language';
import { playUrl } from '@/app/path';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Chip';
import { GameTile } from '@/components/ui/GameTile';
import { Icon } from '@/components/ui/Icon';
import { Segment } from '@/components/ui/Segment';
import { StatePanel } from '@/components/ui/StatePanel';
import { useContent } from '@/content/ContentProvider';
import { grammarTopic } from '@/content/grammar';
import { LESSONS } from '@/content/lessons';
import { buildNotebook, weakSpotKeys } from '@/lib/notebook';
import { t } from '@/i18n';

type View = 'words' | 'grammar';

export function NotebookPage() {
  const content = useContent();
  const navigate = useNavigate();
  const weak = useProgress((s) => s.weak);
  const queueWeakSpots = useProgress((s) => s.queueWeakSpots);
  const [view, setView] = useState<View>('words');

  const notebook = useMemo(() => buildNotebook(weak, content), [weak, content]);
  const keys = useMemo(() => weakSpotKeys(notebook), [notebook]);
  const empty = notebook.words.length + notebook.grammar.length === 0;

  const practise = () => {
    queueWeakSpots(keys);
    const [first, ...rest] = [...new Set(keys.map((k) => k.split('::')[0]!))];
    navigate(`${playUrl(first!, rest)}${rest.length ? '&' : '?'}review=1`);
  };

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="font-display text-3xl font-bold text-ink">{t('notebook.title')}</h1>
        <p className="text-muted">{t('notebook.intro')}</p>
      </header>

      {empty ? (
        <div data-testid="notebook-empty">
          <StatePanel kind="empty" title={t('notebook.emptyTitle')}>
            {t('notebook.empty')}
          </StatePanel>
        </div>
      ) : (
        <>
          <Button
            icon={<Icon name="play" size={18} filled />}
            onClick={practise}
            data-testid="practise-weak"
            className="self-start"
          >
            {t('notebook.practise', { n: keys.length })}
          </Button>

          <Segment<View>
            label={t('notebook.view')}
            value={view}
            onChange={setView}
            options={[
              { value: 'words', label: t('notebook.words', { n: notebook.words.length }) },
              { value: 'grammar', label: t('notebook.grammar', { n: notebook.grammar.length }) },
            ]}
          />

          {view === 'words' ? (
            <ul className="grid gap-3 sm:grid-cols-2" aria-label={t('notebook.wordsList')}>
              {notebook.words.map((w) => (
                <li key={w.key}>
                  <Card className="flex min-h-11 items-center gap-3">
                    <GameTile type={w.gameType} size="md" />
                    <div className="min-w-0 flex-1">
                      <p className="break-words font-extrabold text-ink">{w.text}</p>
                      {w.meaning && <p className="break-words text-sm text-muted">{w.meaning}</p>}
                    </div>
                    <Tag tone="error">×{w.score}</Tag>
                  </Card>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2" aria-label={t('notebook.grammarList')}>
              {notebook.grammar.map((g) => {
                const body = (
                  <Card
                    interactive={!!grammarTopic(g.lesson)}
                    className="flex min-h-11 items-center justify-between gap-3"
                  >
                    <span className="font-extrabold text-ink">{LESSONS[g.lesson].title}</span>
                    <Tag tone="error">×{g.score}</Tag>
                  </Card>
                );
                return (
                  <li key={g.lesson}>
                    {grammarTopic(g.lesson) ? (
                      <Link to={`/library/grammar/${g.lesson}`} className="block">
                        {body}
                      </Link>
                    ) : (
                      body
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default NotebookPage;
