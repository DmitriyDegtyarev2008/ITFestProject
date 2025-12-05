import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import type { TrpcRouter } from "../../backend/"; 

const trpc = createTRPCReact<TrpcRouter>();

const trpcClient = trpc.createClient({
  links: [httpBatchLink({ url: "http://localhost:4300/trpc" })],
});

const queryClient = new QueryClient();

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </trpc.Provider>
);
