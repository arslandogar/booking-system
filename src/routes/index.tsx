import { Navigate, useRoutes } from 'react-router-dom';

import { Landing, BookTour, MyTours } from '@/pages';

export const appRoutes = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/my-tours',
    element: <MyTours />,
  },
  {
    path: '/book-tour/:tourId',
    element: <BookTour />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes([
    ...appRoutes,
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return <>{element}</>;
};
