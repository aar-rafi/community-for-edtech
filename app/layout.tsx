import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import RightPanel from "@/components/right-panel";

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
          {/* <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto py-6">
              <div className="grid grid-cols-1 md:grid-cols-[27%_43%_27%] gap-6">
                <div className="hidden md:block auto-cols-max">
                  <Sidebar />
                </div>
                <div className="auto-cols-max">{children}</div>
                <div className="hidden md:block auto-cols-max">
                  <RightPanel />
                </div>
              </div>
            </main>
          </div> */}
          <div className="min-h-screen bg-background">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
