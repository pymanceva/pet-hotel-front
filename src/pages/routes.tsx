import { Navigate, RouteObject } from 'react-router-dom';
import { RoomListPage } from './RoomList';
import Layout from '@/shared/ui/layout';
import { ErrorPage } from './Error';
import { RoomPage } from './Room';
import { AuthorizationPage } from './Authorization';
import { EmployeePage } from './Employees';
import { ClientsPage } from './Client';
import { ClientInformationPage } from './ClientInformation';
import { PetCreate } from './PetCreate/PetCreate';

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
      { path: 'client', element: <ClientsPage /> },
      { path: 'client/:clientId', element: <ClientInformationPage /> },
      { path: 'create-pet', element: <PetCreate /> },
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
