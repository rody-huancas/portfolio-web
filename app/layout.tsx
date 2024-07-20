import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";
import Sidebar from "@/components/shared/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio Web",
  description: "Portafolio Web",
};

export default function RootLayout({ children }: Readonly<{children: ReactNode}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Sidebar />
        
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
