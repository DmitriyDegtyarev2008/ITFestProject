import type {TrpcRouter} from 'backend/'
import { createTRPCReact } from "@trpc/react-query";

const trpc = createTRPCReact<TrpcRouter>()  // типы с бэка