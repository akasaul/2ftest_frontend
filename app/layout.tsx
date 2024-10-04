import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import theme from "@/styles/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import TanstackProvider from "@/providers/TanstackProvider";
import ToastProvider from "@/providers/ToastProvider";
import { AuthProvider } from "@/providers/AuthProvider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LocalizationProvider } from "@/providers/LocalizationProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
      <body className={`${inter.className} ${roboto.className}`}>
        <AppRouterCacheProvider>
          <AuthProvider>
            <LocalizationProvider>
              <ThemeProvider theme={theme}>
                <ToastProvider>
                  <TanstackProvider>{children}</TanstackProvider>
                </ToastProvider>
              </ThemeProvider>
            </LocalizationProvider>
          </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
