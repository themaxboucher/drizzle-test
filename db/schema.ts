import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  completed: text("completed").default("false"),
  createdAt: timestamp("created_at").defaultNow(),
});
