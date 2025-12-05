import type {TrpcRouter} from 'backend/src/trpc'
import { createTRPCReact } from "@trpc/react-query";

const trpc = createTRPCReact<TrpcRouter>()  // типы с бэка