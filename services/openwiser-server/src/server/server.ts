import * as trpc from "@trpc/server";

export const appRouter = trpc.router().query("getSources", {
  resolve: () => {
    return { res: ["these are "] };
  },
});

export type appRouter = typeof appRouter;
