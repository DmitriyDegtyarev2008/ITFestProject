import type { TrpcRouter } from 'spacedom/backend/src/trpc'
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

export const TrpcProvider = ({children}: {children: React.ReactNode}) => {  // компонет для провада приложения в реакт приложение 
    return (
        <trpc.Provider client={trpcClient}  queryClientqueryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    )
}