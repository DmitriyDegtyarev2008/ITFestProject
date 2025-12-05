import type { TrpcRouter } from ''
import { createTRPCReact } from "@trpc/react-query"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'

export const trpc = createTRPCReact<TrpcRouter>()  // типы с бэка

const queryClient = new QueryClient({   // управление  запросами
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false, 
        }
    }
})

const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/trpc',
        }),
    ]
})

export const TrpcProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </trpc.Provider>
    </QueryClientProvider>
  );
}


// компонет для провада приложения в реакт приложение 