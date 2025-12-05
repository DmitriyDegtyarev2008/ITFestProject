import type {TrpcRouter} from '@spacedom/backend/src/trpc'
import { QueryClient } from '@tanstack/react-query';
import { createTRPCReact } from "@trpc/react-query";

const trpc = createTRPCReact<TrpcRouter>()  // типы с бэка

const queryClient = new QueryClient({
    defaultOptions: {
        
    }
})