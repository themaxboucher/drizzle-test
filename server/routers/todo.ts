import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { db } from "@/db";
import { todos } from "@/db/tables/todos";

export const todoRouter = router({
  // GET all todos
  getAll: publicProcedure.query(async () => {
    return await db.select().from(todos);
  }),

  // ADD a new todo
  add: publicProcedure
    .input(z.object({ title: z.string(), projectId: z.number() }))
    .mutation(async ({ input }) => {
      const [todo] = await db
        .insert(todos)
        .values({
          title: input.title,
          projectId: input.projectId,
        })
        .returning();
      return todo;
    }),
});
