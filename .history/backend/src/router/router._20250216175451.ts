import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure.query(() => {
    return "Hello, SpaceDom!";
  }),
  sum: t.procedure
    .input(z.object({ a: z.number(), b: z.number() }))
    .query(({ input }) => {
      return input.a + input.b;
    }),
});

export type AppRouter = typeof appRouter;
