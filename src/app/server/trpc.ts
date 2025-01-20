import { initTRPC } from "@trpc/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const t = initTRPC.create();

const DATA_PATH = path.join(process.cwd(), "data.json");

const loadData = () => {
  if (fs.existsSync(DATA_PATH)) {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  }
  return null;
};

const saveData = (data: [key: string]): void => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
};

export const appRouter = t.router({
  getData: t.procedure.query(() => {
    const data = loadData();
    return data || {};
  }),
  saveData: t.procedure
    .input(z.object({ data: z.any() }))
    .mutation(({ input }) => {
      saveData(input.data);
      return { success: true };
    }),
});

export type AppRouter = typeof appRouter;
