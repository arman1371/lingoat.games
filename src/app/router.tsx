import { lazy } from 'react';
import { createBrowserRouter, createMemoryRouter, Navigate, type RouteObject } from 'react-router';
import { AppLayout } from './AppLayout';
import { ErrorPage } from './ErrorPage';

const page = <T extends { default: React.ComponentType }>(load: () => Promise<T>) => ({
  Component: lazy(load),
});

// Pages are lazy so the first paint only ships the shell.
export const routes: RouteObject[] = [
  {
    path: '/',
    Component: AppLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, ...page(() => import('@/pages/HomePage')) },
      { path: 'levels/:levelId', ...page(() => import('@/pages/LevelPage')) },
      { path: 'levels/:levelId/units/:unitId', ...page(() => import('@/pages/UnitPage')) },
      { path: 'library', ...page(() => import('@/pages/LibraryPage')) },
      { path: 'play/:activityId', ...page(() => import('@/pages/PlayPage')) },
      { path: 'review', ...page(() => import('@/pages/ReviewPage')) },
      { path: 'progress', ...page(() => import('@/pages/ProgressPage')) },
      { path: 'profile', ...page(() => import('@/pages/SettingsPage')) },
      { path: 'settings', element: <Navigate to="/profile" replace /> },
      { path: '*', ...page(() => import('@/pages/NotFoundPage')) },
    ],
  },
];

export const createAppRouter = () => createBrowserRouter(routes);
export const createTestRouter = (initialEntries: string[]) =>
  createMemoryRouter(routes, { initialEntries });
