import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn("font-sans antialiased", inter.className)}>
        <main className="p-0 md:px-8 container min-h-screen flex flex-col gap-4">
          <Header />
          <section className="flex-1 flex flex-col py-4 md:items-stretch">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
