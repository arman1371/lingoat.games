import { Suspense, useEffect } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router';
import { ContentProvider, useContentState } from '@/content/ContentProvider';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { Skeleton } from '@/components/ui/Skeleton';
import { StatPill } from '@/components/ui/StatPill';
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
  { to: '/', label: 'nav.home', icon: 'map', end: true },
  { to: '/library', label: 'nav.library', icon: 'grid', end: false },
  { to: '/review', label: 'nav.review', icon: 'book', end: false },
  { to: '/progress', label: 'nav.progress', icon: 'chart', end: false },
  { to: '/profile', label: 'nav.profile', icon: 'user', end: false },
] as const;

function MainNav({ mistakeCount }: { mistakeCount: number }) {
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-line bg-surface px-2 pb-[env(safe-area-inset-bottom)] md:static md:flex md:flex-col md:gap-1 md:border-0 md:bg-transparent md:p-0"
    >
      {NAV.map((n) => (
        <NavLink
          key={n.to}
          to={n.to}
          end={n.end}
          className={({ isActive }) =>
            `relative flex min-h-16 flex-col items-center justify-center gap-1 pb-1.5 pt-2 text-xs font-bold md:min-h-12 md:flex-row md:justify-start md:gap-3 md:rounded-xl md:px-4 md:py-0 md:text-base ${
              isActive
                ? 'text-on-primary-soft md:bg-primary-soft'
                : 'text-muted hover:text-ink md:hover:bg-surface-2'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={`flex h-8 w-14 items-center justify-center rounded-full md:h-auto md:w-auto ${
                  isActive ? 'bg-primary-soft md:bg-transparent' : ''
                }`}
              >
                <Icon name={n.icon} size={24} />
              </span>
              {t(n.label)}
              {n.to === '/review' && mistakeCount > 0 ? (
                <span
                  className="absolute right-[calc(50%-1.75rem)] top-1 min-w-5 rounded-full bg-danger px-1.5 text-center text-[11px] leading-5 text-on-primary md:static md:ml-auto"
                  aria-label={`${mistakeCount} items to review`}
                >
                  {mistakeCount}
                </span>
              ) : null}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

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
    <div className={`min-h-dvh ${playing ? '' : 'md:grid md:grid-cols-[16.5rem_minmax(0,1fr)]'}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>
      {!playing ? (
        <div className="md:sticky md:top-0 md:flex md:h-dvh md:flex-col md:gap-6 md:border-r md:border-line md:bg-surface md:px-4 md:py-6">
          <Link to="/" className="hidden px-2 md:inline-flex">
            <Logo />
          </Link>
          <MainNav mistakeCount={mistakeCount} />
        </div>
      ) : null}
      <div className="flex min-w-0 flex-col">
        <header className="bg-bg">
          <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 md:justify-end">
            <Link
              to="/"

              className={`inline-flex ${playing ? '' : 'md:hidden'}`}
            >
              <Logo />
            </Link>
            <div className="ml-auto flex items-center gap-2 md:ml-0">
              <StatPill
                icon="flame"
                tone="streak"
                value={streak}
                label={t('home.streak', { n: streak })}
                data-testid="streak"
              />
              <StatPill
                icon="zap"
                tone="xp"
                value={xp}
                label={t('home.xp', { n: xp })}
                data-testid="xp"
              />
            </div>
          </div>
        </header>
        <main
          id="main"
          tabIndex={-1}
          className="mx-auto w-full max-w-5xl flex-1 px-4 pb-28 pt-2 md:pb-10"
        >
          <Gate />
        </main>
      </div>
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
