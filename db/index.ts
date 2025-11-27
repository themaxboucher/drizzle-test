import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const sql = postgres(process.env.SUPABASE_DB_URL!, { ssl: "require" });

export const db = drizzle(sql);
