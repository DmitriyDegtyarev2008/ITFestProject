import type {TrpcRouter} from '@spacedom/backend/src/trpc'
import { createTRPCReact } from "@trpc/react-query";

const trpc = createTRPCReact<TrpcRouter>()  // типы с бэка

const queryClient = new 