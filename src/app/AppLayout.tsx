import { Suspense, useEffect } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router';
import { ContentProvider, useContentState } from '@/content/ContentProvider';
import { Skeleton } from '@/components/ui/Skeleton';
import { StatePanel } from '@/components/ui/StatePanel';
import { t } from '@/i18n';
import { dayNumber } from '@/lib/srs';
import { useProgressStore, visibleStreak } from '@/store/progressStore';
import { useApplySettings } from './theme';

function Loading() {
  return (
    <div role="status" className="flex flex-col gap-4 py-8">
      <p className="sr-only">{t('common.loading')}</p>
      <Skeleton className="h-40" />
      <Skeleton className="h-24" />
      <Skeleton className="h-24" />
    </div>
  );
}

function Gate() {
  const state = useContentState();
  if (state.status === 'loading') return <Loading />;
  if (state.status === 'error') {
    return (
      <StatePanel kind="error" title="Could not load the lessons">
        {state.message}
      </StatePanel>
    );
  }
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
}

const NAV = [
  { to: '/', label: 'nav.home', icon: '🏠', end: true },
  { to: '/library', label: 'nav.library', icon: '🎮', end: false },
  { to: '/review', label: 'nav.review', icon: '📦', end: false },
  { to: '/settings', label: 'nav.settings', icon: '⚙️', end: false },
] as const;

function Shell() {
  useApplySettings();
  const { pathname } = useLocation();
  const playing = pathname.startsWith('/play');
  const xp = useProgressStore((s) => s.xp);
  const streak = useProgressStore((s) => visibleStreak(s.streak, dayNumber()));
  const mistakeCount = useProgressStore((s) => Object.keys(s.mistakes).length);

  useEffect(() => {
    window.scrollTo?.(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>
      <header className="border-b-2 border-line bg-surface">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-ink">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-on-primary"
            >
              Ä
            </span>
            <span className="sr-only sm:not-sr-only">{t('appName')}</span>
          </Link>
          {!playing ? (
            <nav
              aria-label="Main"
              className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t-2 border-line bg-surface pb-[env(safe-area-inset-bottom)] md:static md:ml-6 md:flex md:gap-1 md:border-0 md:bg-transparent md:pb-0"
            >
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  className={({ isActive }) =>
                    `relative flex min-h-14 flex-col items-center justify-center gap-0.5 px-3 text-xs font-bold md:min-h-11 md:flex-row md:gap-2 md:rounded-xl md:text-sm ${
                      isActive
                        ? 'text-primary md:bg-primary-soft md:text-on-primary-soft'
                        : 'text-muted hover:text-ink'
                    }`
                  }
                >
                  <span aria-hidden="true" className="text-xl md:text-base">
                    {n.icon}
                  </span>
                  {t(n.label)}
                  {n.to === '/review' && mistakeCount > 0 ? (
                    <span
                      className="absolute right-1/4 top-1 rounded-full bg-danger px-1.5 text-[10px] text-on-primary md:static"
                      aria-label={`${mistakeCount} items to review`}
                    >
                      {mistakeCount}
                    </span>
                  ) : null}
                </NavLink>
              ))}
            </nav>
          ) : null}
          <div className="ml-auto flex items-center gap-3 text-sm font-extrabold text-ink">
            <span title="Daily streak" data-testid="streak">
              🔥 {streak}
            </span>
            <span title="Experience points" data-testid="xp">
              ⭐ {xp}
            </span>
          </div>
        </div>
      </header>
      <main
        id="main"
        tabIndex={-1}
        className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 pb-28 md:pb-10"
      >
        <Gate />
      </main>
    </div>
  );
}

export function AppLayout() {
  return (
    <ContentProvider>
      <Shell />
    </ContentProvider>
  );
}
