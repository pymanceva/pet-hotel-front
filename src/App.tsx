import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Cookie from 'js-cookie';
import { routes } from './pages/routes';

function App() {
  const router = createBrowserRouter(routes);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  Cookie.set('X-PetHotel-User-Id', '1');
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
