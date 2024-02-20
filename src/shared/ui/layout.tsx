import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Loader } from '@mantine/core';
import { Header } from '@/widgets/Header';

const Layout: FC = () => {
  return (
    <AppShell header={{ height: 92 }} withBorder={false}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        {' '}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
