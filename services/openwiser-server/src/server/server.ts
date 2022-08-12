import * as trpc from "@trpc/server";
import * as trpcExress from "@trpc/server/adapters/express";

export const trpcRouter = trpc.router().query("getSources", {
  resolve: () => {
    return { res: ["these are "] };
  },
});

export type trpcRouter = typeof trpcRouter;

export const createContext = ({
  req,
  res,
}: trpcExress.CreateExpressContextOptions) => ({ req, res });

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
