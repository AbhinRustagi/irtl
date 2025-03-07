import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I'll read that later – Abhin Rustagi",
  description: "A collection of insightful, fascinating articles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} antialiased`}>
        <main className="mx-auto my-16 px-3 max-w-2xl">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
