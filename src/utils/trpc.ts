import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/server/trpc";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClientConfig = () => ({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
