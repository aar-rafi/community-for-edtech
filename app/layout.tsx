import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ['latin'] })

const hindSiliguri = localFont({
  src: [
    {
      path: "../lib/fonts/HindSiliguri-Regular.ttf",
      weight: "400",
    },
    {
      path: "../lib/fonts/HindSiliguri-Medium.ttf",
      weight: "500",
    },
    {
      path: "../lib/fonts/HindSiliguri-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../lib/fonts/HindSiliguri-Bold.ttf",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "ACS Community",
  description: "A community platform for edtech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hindSiliguri.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
