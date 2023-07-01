import { Inter as FontSans } from "next/font/google";
import { PropsWithChildren } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import ThemeSwitch from "@/components/theme-switch";
import { classNames } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const meta = {
  title: "Next.js Realtime chat with socket.IO",
  description: "Brought to you by NextJs, SocketIO and Me",
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html suppressHydrationWarning>
      <body className={classNames("antialiased loading", fontSans.variable)}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <main className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]">
            {children}
          </main>
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
