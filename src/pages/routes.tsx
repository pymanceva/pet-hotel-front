import { Navigate, RouteObject } from 'react-router-dom';
import { RoomListPage } from './RoomList';
import Layout from '@/shared/ui/layout';
import { ErrorPage } from './Error';
import { RoomPage } from './Room';
import { AuthorizationPage } from './Authorization';
import { EmployeePage } from './Employees';
import { ClientsPage } from './Client';
import { ClientInformationPage } from './ClientInformation';
import CategoriesPage from './Categories';

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
        path: 'employee',
        element: <EmployeePage />,
      },
      {
        path: 'room/:id',
        element: <RoomPage />,
      },
      {
        path: 'rooms',
        element: <RoomListPage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      { path: 'client', element: <ClientsPage /> },
      { path: 'client/:clientId', element: <ClientInformationPage /> },
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
