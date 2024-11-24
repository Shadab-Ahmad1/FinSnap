import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

export const LandingPage = lazy(() => import('src/pages/landing-page'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <LandingPage />
        </Suspense>
      ),
    },
  ]);

  return routes;
}
