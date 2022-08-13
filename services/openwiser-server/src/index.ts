import * as trpcExress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import formidable from "formidable";

import { unlinkSync } from "node:fs";

import { createContext, trpcRouter } from "./server";
import { kindleClippingsParer } from "./utils";

export * from "./server";

const app = express();

app.use(express.json());
app.use(cors());

const uploadRouter = express.Router();

uploadRouter.post("/kindle", (req, res) => {
  console.log("new file");

  const form = formidable({ multiples: false });

  form.parse(req);

  form.on("file", (_, file) => {
    const formattedClippings = kindleClippingsParer(file.filepath);

    console.log(formattedClippings);

    unlinkSync(file.filepath);
  });

  res.status(200).json({ message: "Uploaded a Kindle Clippings file." });
});

app.use("/upload", uploadRouter);

app.use(
  "/trpc",
  trpcExress.createExpressMiddleware({ router: trpcRouter, createContext })
);

app.listen(5000, () => console.log(`Listening on port ${5000}...`));
