import type {TrpcRouter} from '@spacedom/backend/src/trpc'
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const trpc = createTRPCReact<TrpcRouter>()  // типы с бэка

const queryClient = new QueryClient({
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
            url: 'http://localhost:3000.'
        })
    ]
})