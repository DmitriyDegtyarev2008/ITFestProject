import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { TrpcRouter } from '../../backend/src/'

export const trpc = createTRPCReact<TrpcRouter>();

const queryClient = new QueryClient();

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = trpc.createClient({
    links: [
      httpBatchLink({
        url: 'http://localhost:4300/trpc', // Проверь, что сервер запущен
      }),
    ],
  });

  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
