import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Nav from "@/components/nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});
export const metadata: Metadata = {
  title: "Michael Soofian",
  description: "Michael Soofian's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          syne.variable
        )}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
