import { initTRPC } from "@trpc/server";

// Initialize tRPC
export const t = initTRPC.create();

// Shortcuts for cleaner code
export const router = t.router;
export const publicProcedure = t.procedure;
