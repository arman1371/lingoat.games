import { lazy } from 'react';
import { createBrowserRouter, createMemoryRouter, Navigate, type RouteObject } from 'react-router';
import { AppLayout } from './AppLayout';
import { ErrorPage } from './ErrorPage';
import { getLanguage, languageOfPath, type LanguageId } from '@/content/languages';

const page = <T extends { default: React.ComponentType }>(load: () => Promise<T>) => ({
  Component: lazy(load),
});

// Created once per module, not per router: a lazy component that has resolved never suspends again.
const pages = {
  home: page(() => import('@/pages/HomePage')),
  level: page(() => import('@/pages/LevelPage')),
  unit: page(() => import('@/pages/UnitPage')),
  library: page(() => import('@/pages/LibraryPage')),
  grammar: page(() => import('@/pages/GrammarPage')),
  play: page(() => import('@/pages/PlayPage')),
  review: page(() => import('@/pages/ReviewPage')),
  progress: page(() => import('@/pages/ProgressPage')),
  profile: page(() => import('@/pages/SettingsPage')),
  credits: page(() => import('@/pages/CreditsPage')),
  notFound: page(() => import('@/pages/NotFoundPage')),
};

// Pages are lazy so the first paint only ships the shell.
export const createRoutes = (language: LanguageId): RouteObject[] => [
  {
    path: '/',
    element: <AppLayout language={language} />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, ...pages.home },
      { path: 'levels/:levelId', ...pages.level },
      { path: 'levels/:levelId/units/:unitId', ...pages.unit },
      { path: 'library', ...pages.library },
      { path: 'library/grammar/:topicId', ...pages.grammar },
      { path: 'play/:activityId', ...pages.play },
      { path: 'review', ...pages.review },
      { path: 'progress', ...pages.progress },
      { path: 'profile', ...pages.profile },
      { path: 'credits', ...pages.credits },
      { path: 'settings', element: <Navigate to="/profile" replace /> },
      { path: '*', ...pages.notFound },
    ],
  },
];

/**
 * One router per page load. Non-default languages are served under a route prefix (`/fr`), which becomes
 * the router's basename, so the same routes and links work unchanged in every language.
 */
function routerOptions(pathname: string) {
  const language = languageOfPath(pathname);
  const basename = getLanguage(language).routePrefix || undefined;
  return { language, basename };
}

export const createAppRouter = (pathname: string = window.location.pathname) => {
  const { language, basename } = routerOptions(pathname);
  return createBrowserRouter(createRoutes(language), { basename });
};

export const createTestRouter = (initialEntries: string[]) => {
  const { language, basename } = routerOptions(initialEntries[0] ?? '/');
  return createMemoryRouter(createRoutes(language), { initialEntries, basename });
};
