"use client";

import Layout from "@/components/Layout";
import { trpc, trpcClientConfig } from "@/utils/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

const queryClient = new QueryClient();
const trpcClient = trpc.createClient(trpcClientConfig());

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Layout>
          <QueryClientProvider client={queryClient}>
            <trpc.Provider client={trpcClient} queryClient={queryClient}>
              {children}
            </trpc.Provider>
          </QueryClientProvider>
        </Layout>
      </body>
    </html>
  );
}
