import { Link, useParams, useSearchParams } from 'react-router';
import { ActivityCard } from '@/components/ActivityCard';
import { Card } from '@/components/ui/Card';
import { TabPanel, Tabs } from '@/components/ui/Tabs';
import { useContent } from '@/content/ContentProvider';
import { pathStates, playUrl } from '@/app/path';
import { GAME_TYPE_LABELS } from '@/lib/filters';
import { t } from '@/i18n';
import { useProgressStore } from '@/store/progressStore';
import { NotFoundPage } from './NotFoundPage';

export function UnitPage() {
  const { levelId = '', unitId = '' } = useParams();
  const [params, setParams] = useSearchParams();
  const content = useContent();
  const progress = useProgressStore((s) => s.activities);
  const unit = content.unitById.get(unitId);
  if (!unit || unit.levelId !== levelId) return <NotFoundPage />;

  const path = content.pathOf(unit.id);
  const states = pathStates(path, progress);
  const ids = path.map((a) => a.id);
  const view = params.get('view') === 'explore' ? 'explore' : 'path';
  const setView = (v: 'path' | 'explore') =>
    setParams(v === 'path' ? {} : { view: v }, { replace: true });

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-3">
        <Link to={`/levels/${levelId}`} className="text-sm font-bold text-primary">
          ← {levelId.toUpperCase().replace('-', '.')}
        </Link>
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-soft text-4xl"
          >
            {unit.emoji}
          </span>
          <div>
            <h1 className="text-3xl font-extrabold leading-tight text-ink">{unit.title}</h1>
            <p className="text-muted">{unit.subtitle}</p>
          </div>
        </div>
        <Card>
          <h2 className="font-extrabold text-ink">{t('unit.goals')}</h2>
          <ul className="mt-1 list-disc pl-5 text-ink">
            {unit.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          {unit.grammar.length ? (
            <p className="mt-2 text-sm text-muted">
              <strong>{t('unit.grammar')}:</strong> {unit.grammar.join(' · ')}
            </p>
          ) : null}
        </Card>
        <Tabs
          id="unit-view"
          label="View"
          value={view}
          onChange={setView}
          tabs={[
            { value: 'path', label: t('unit.path'), icon: 'map' },
            { value: 'explore', label: t('unit.explore'), icon: 'grid' },
          ]}
        />
      </header>

      <TabPanel id="unit-view" value={view}>
        {view === 'path' ? (
          <ol aria-label="Guided path" className="flex flex-col gap-3">
            {path.map((activity, i) => {
              const state = states[i]!;
              const stars = progress[activity.id]?.stars;
              return (
                <li key={activity.id} data-state={state} className="flex items-stretch gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      aria-hidden="true"
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-extrabold ${
                        state === 'done'
                          ? 'border-success bg-success text-on-primary'
                          : state === 'current'
                            ? 'border-primary bg-primary text-on-primary'
                            : 'border-line bg-surface text-muted'
                      }`}
                    >
                      {state === 'done' ? '✓' : i + 1}
                    </span>
                    {i < path.length - 1 ? (
                      <span aria-hidden="true" className="w-0.5 flex-1 bg-line" />
                    ) : null}
                  </div>
                  <div className="flex-1 pb-2">
                    <ActivityCard
                      activity={activity}
                      to={playUrl(activity.id, ids.slice(i + 1))}
                      stars={stars}
                      badge={state === 'current' ? 'Up next' : undefined}
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        ) : (
          <ul aria-label="All games" className="grid gap-4 sm:grid-cols-2">
            {path.map((activity) => (
              <li key={activity.id}>
                <ActivityCard
                  activity={activity}
                  to={playUrl(activity.id)}
                  stars={progress[activity.id]?.stars}
                />
              </li>
            ))}
          </ul>
        )}
      </TabPanel>
      <p className="text-center text-sm text-muted">
        {path.length} games · {new Set(path.map((a) => a.gameType)).size} game types
        {' · '}
        {[...new Set(path.map((a) => GAME_TYPE_LABELS[a.gameType].emoji))].join(' ')}
      </p>
    </div>
  );
}

export default UnitPage;
