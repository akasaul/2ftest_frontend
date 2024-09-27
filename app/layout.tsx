import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import theme from "@/styles/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import TanstackProvider from "@/providers/TanstackProvider";
import ToastProvider from "@/providers/ToastProvider";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niko Pizza | Home",
  description: "A pizza ordering app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <ToastProvider>
                <TanstackProvider>{children}</TanstackProvider>
              </ToastProvider>
            </ThemeProvider>
          </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
