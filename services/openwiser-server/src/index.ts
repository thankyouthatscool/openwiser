import * as trpc from "@trpc/server";
import * as trpcExress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";

import { appRouter } from "./server";

const app = express();

app.use(express.json());
app.use(cors());

const createContext = ({
  req,
  res,
}: trpcExress.CreateExpressContextOptions) => ({ req, res });

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

app.get("/hello", (req, res) => {
  console.log(req.body);

  res.status(200).json({ message: "Hello" });
});

app.use(
  "/trpc",
  trpcExress.createExpressMiddleware({ router: appRouter, createContext })
);

app.listen(5000, () => console.log(`Listening on port ${5000}...`));
