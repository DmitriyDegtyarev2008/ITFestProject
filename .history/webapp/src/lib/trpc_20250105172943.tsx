import type
import { createTRPCReact } from "@trpc/react-query";

const trpc = createTRPCReact<TrpcRouter>()  // типы с бэка