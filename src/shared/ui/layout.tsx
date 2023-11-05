import { FC, PropsWithChildren, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { Header } from '@/widgets/header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 125, breakpoint: 'sm' }}
      padding="md"
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        {' '}
        <Suspense>
          <Outlet />
        </Suspense>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
