import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingButton, NavBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />

        <main className="">{children}</main>

        <FloatingButton />
      </body>
    </html>
  );
}
