import { pgTable, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { projects } from "./projects";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  completed: varchar("completed", { length: 5 }).default("false"),
  createdAt: timestamp("created_at").defaultNow(),
  projectId: integer("project_id")
  .references(() => projects.id),
});
