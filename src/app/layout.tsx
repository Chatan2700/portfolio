import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Sebastian Rios",
  description: "Software engineer portfolio and devlog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} bg-background text-primary antialiased`}
      >
        <div className="flex min-h-screen max-w-160 flex-col border-x border-border-soft mx-auto">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
