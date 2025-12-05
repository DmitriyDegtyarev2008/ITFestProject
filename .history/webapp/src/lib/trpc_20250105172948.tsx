import type {Tr}
import { createTRPCReact } from "@trpc/react-query";

const trpc = createTRPCReact<TrpcRouter>()  // типы с бэка