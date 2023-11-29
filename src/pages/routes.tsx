import { Navigate, RouteObject } from 'react-router-dom';
import { RoomListPage } from './RoomList';
import Layout from '@/shared/ui/layout';
import { ErrorPage } from './Error';
import { RoomPage } from './Room';
import { AuthorizationPage } from './Authorization';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RoomListPage />,
      },
    ],
  },
  {
    path: '/authorization',
    element: <AuthorizationPage />,
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'main',
        element: <RoomListPage />,
      },
      {
        path: 'room/:id',
        element: <RoomPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
