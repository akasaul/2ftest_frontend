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
