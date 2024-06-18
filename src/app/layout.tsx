import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenPathFinder | Discover, Connect & Code",
  description: "Navigate Your Coding Journey: Explore Open Source Projects by Tech Stack, Connect, and Collaborate with New Developers on Open Path Finder.",
  icons: {
    icon: "/logos/opf-wbg.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
