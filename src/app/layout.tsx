import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import Header from "@/components/Header";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Cars Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <main className="container min-h-screen flex flex-col gap-4">
          <Header />
          <section className="flex-1 border">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
