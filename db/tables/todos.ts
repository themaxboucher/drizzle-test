import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  completed: varchar("completed", { length: 5 }).default("false"),
  createdAt: timestamp("created_at").defaultNow(),
});
