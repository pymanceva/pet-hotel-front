import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

function App() {
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
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <h1>Hello pet-hotel</h1>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
