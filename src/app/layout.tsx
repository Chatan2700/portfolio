import type { Metadata } from "next";

import "./globals.css";

import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";

export const metadata: Metadata = {
  title: "Sebastian Rios",
  description: "Software Engineer portfolio & Devlog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-950 antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
