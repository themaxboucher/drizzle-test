"use client";

import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/server/routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const trpc = createTRPCReact<AppRouter>();

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  
  const client = trpc.createClient({
    links: [
      httpBatchLink({
        url: "/api/trpc",
      }),
    ],
  });

  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
