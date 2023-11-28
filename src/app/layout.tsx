export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import { twMerge } from "tailwind-merge";
import AppStateProvider from "@/lib/providers/state-provider";
import { SupabaseUserProvider } from "@/lib/providers/supabase-user-provider";
import { SocketProvider } from "@/lib/providers/socket-provider";
import { Toaster } from "@/components/ui/toaster";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SyncBoard: Where Ideas Sync, Teams Thrive!",
  description:
    "SyncBoard is a versatile, real-time collaborative platform designed to streamline teamwork and organization",

  authors: {
    name: "Rohan Shakya",
    url: "https://www.shakyarohan.com.np/",
  },
  themeColor: "#6F00FF",
  viewport: "width=device-width, initial-scale=1",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge("bg-background", font.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppStateProvider>
            <SupabaseUserProvider>
              <SupabaseUserProvider>
                <SocketProvider>
                  {children}
                  <Toaster />
                </SocketProvider>
              </SupabaseUserProvider>
            </SupabaseUserProvider>
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
