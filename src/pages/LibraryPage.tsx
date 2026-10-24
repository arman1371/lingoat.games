import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ActivityCard } from '@/components/ActivityCard';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { TextField } from '@/components/ui/TextField';
import { useContent } from '@/content/ContentProvider';
import { GAME_TYPES } from '@/content/gameTypes';
import { LEVELS } from '@/content/levels';
import { GROUP_LABELS, TAGS, tagsInGroup, type TagId } from '@/content/tags';
import { playUrl } from '@/app/path';
import {
  DIFFICULTY_LABELS,
  DURATION_LABELS,
  GAME_TYPE_LABELS,
  activeFilterCount,
  filterActivities,
  filtersFromParams,
  filtersToParams,
  type DurationBucket,
  type FilterState,
} from '@/lib/filters';
import { t } from '@/i18n';
import { useProgressStore } from '@/store/progressStore';

function toggle<T>(list: readonly T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function LibraryPage() {
  const content = useContent();
  const progress = useProgressStore((s) => s.activities);
  const [params, setParams] = useSearchParams();
  const filters = useMemo(() => filtersFromParams(params), [params]);
  const update = (patch: Partial<FilterState>) =>
    setParams(filtersToParams({ ...filters, ...patch }), { replace: true });

  const results = useMemo(
    () => filterActivities(content.activities, filters, content.units),
    [content, filters],
  );
  const count = activeFilterCount(filters);
  // open the panel on arrival when the URL already carries filters; afterwards the user decides
  const [panelOpen, setPanelOpen] = useState(
    () => activeFilterCount(filters) > (filters.q ? 1 : 0),
  );
  const unitTitle = (id: string) => content.unitById.get(id)?.title;
  const levelsWithUnits = LEVELS.filter((l) => content.units.some((u) => u.levelId === l.id));
  // with a level selected only that level's units are offered as unit chips
  const visibleUnits = content.units.filter(
    (u) => filters.levels.length === 0 || filters.levels.includes(u.levelId),
  );

  const tagFacet = (group: 'skill' | 'topic' | 'grammar', key: 'skills' | 'topics' | 'grammar') => (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 text-sm font-extrabold uppercase tracking-wide text-muted">
        {GROUP_LABELS[group]}
      </legend>
      <div className="flex flex-wrap gap-2">
        {tagsInGroup(group).map((id) => (
          <Chip
            key={id}
            selected={filters[key].includes(id)}
            onToggle={() => update({ [key]: toggle<TagId>(filters[key], id) })}
          >
            {TAGS[id].emoji} {TAGS[id].label}
          </Chip>
        ))}
      </div>
    </fieldset>
  );

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-extrabold text-ink">{t('library.title')}</h1>
        <p className="text-muted">
          Mix and match: filter by topic, grammar point, game type and more.
        </p>
      </header>

      <div className="flex flex-col gap-3">
        <TextField
          label={t('library.search')}
          hideLabel
          type="search"
          value={filters.q}
          onChange={(e) => update({ q: e.target.value })}
          placeholder={t('library.search')}
        />
        <details
          className="rounded-2xl border-2 border-line bg-surface p-3"
          open={panelOpen}
          onToggle={(e) => setPanelOpen(e.currentTarget.open)}
          data-testid="filters"
        >
          <summary className="min-h-11 cursor-pointer select-none py-2 text-lg font-extrabold text-ink">
            {t('library.filters')}
            {count > 0 ? ` (${count})` : ''}
          </summary>
          <div className="mt-3 flex flex-col gap-5">
            {levelsWithUnits.length > 1 && (
              <fieldset className="flex flex-col gap-2">
                <legend className="mb-1 text-sm font-extrabold uppercase tracking-wide text-muted">
                  {t('library.level')}
                </legend>
                <div className="flex flex-wrap gap-2">
                  {levelsWithUnits.map((l) => (
                    <Chip
                      key={l.id}
                      selected={filters.levels.includes(l.id)}
                      onToggle={() => update({ levels: toggle(filters.levels, l.id) })}
                    >
                      {l.title}
                    </Chip>
                  ))}
                </div>
              </fieldset>
            )}
            <fieldset className="flex flex-col gap-2">
              <legend className="mb-1 text-sm font-extrabold uppercase tracking-wide text-muted">
                Unit
              </legend>
              <div className="flex flex-wrap gap-2">
                {visibleUnits.map((u) => (
                  <Chip
                    key={u.id}
                    selected={filters.units.includes(u.id)}
                    onToggle={() => update({ units: toggle(filters.units, u.id) })}
                  >
                    {u.emoji} {u.title}
                  </Chip>
                ))}
              </div>
            </fieldset>
            {tagFacet('skill', 'skills')}
            {tagFacet('topic', 'topics')}
            {tagFacet('grammar', 'grammar')}
            <fieldset className="flex flex-col gap-2">
              <legend className="mb-1 text-sm font-extrabold uppercase tracking-wide text-muted">
                Game type
              </legend>
              <div className="flex flex-wrap gap-2">
                {GAME_TYPES.map((g) => (
                  <Chip
                    key={g}
                    selected={filters.types.includes(g)}
                    onToggle={() => update({ types: toggle(filters.types, g) })}
                  >
                    {GAME_TYPE_LABELS[g].emoji} {GAME_TYPE_LABELS[g].label}
                  </Chip>
                ))}
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <legend className="mb-1 text-sm font-extrabold uppercase tracking-wide text-muted">
                Difficulty &amp; length
              </legend>
              <div className="flex flex-wrap gap-2">
                {([1, 2, 3] as const).map((d) => (
                  <Chip
                    key={d}
                    selected={filters.difficulty.includes(d)}
                    onToggle={() => update({ difficulty: toggle(filters.difficulty, d) })}
                  >
                    {DIFFICULTY_LABELS[d]}
                  </Chip>
                ))}
                {(Object.keys(DURATION_LABELS) as DurationBucket[]).map((d) => (
                  <Chip
                    key={d}
                    selected={filters.duration.includes(d)}
                    onToggle={() => update({ duration: toggle(filters.duration, d) })}
                  >
                    ⏱ {DURATION_LABELS[d]}
                  </Chip>
                ))}
              </div>
            </fieldset>
          </div>
        </details>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p
          role="status"
          aria-live="polite"
          className="font-bold text-ink"
          data-testid="result-count"
        >
          {t('library.results', { n: results.length })}
        </p>
        <div className="flex gap-2">
          {count > 0 ? (
            <Button variant="ghost" size="sm" onClick={() => setParams({}, { replace: true })}>
              {t('library.clear')}
            </Button>
          ) : null}
          {results.length > 0 ? (
            <Link
              to={playUrl(
                results[0]!.id,
                results.slice(1).map((a) => a.id),
              )}
              data-testid="play-queue"
            >
              <Button size="sm" icon="▶️">
                {t('library.playQueue')}
              </Button>
            </Link>
          ) : null}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="rounded-2xl bg-surface-2 p-8 text-center text-lg font-bold text-muted">
          {t('library.none')}
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Games">
          {results.map((a, i) => (
            <li key={a.id}>
              <ActivityCard
                activity={a}
                to={playUrl(
                  a.id,
                  results.slice(i + 1).map((x) => x.id),
                )}
                stars={progress[a.id]?.stars}
                unitTitle={unitTitle(a.unitId)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LibraryPage;
