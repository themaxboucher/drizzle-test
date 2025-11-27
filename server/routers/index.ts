import { router } from "../trpc";
import { todoRouter } from "./todo";

export const appRouter = router({
  todo: todoRouter,
});

// Export type for frontend type safety
export type AppRouter = typeof appRouter;
