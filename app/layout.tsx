import type { Metadata } from "next";

import { Figtree } from "next/font/google";
import { ReactNode } from "react";

import { cn } from "@/libs/utils";

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio Web",
  description: "Portafolio Web",
};

export default function RootLayout({ children }: Readonly<{children: ReactNode}>) {
  return (
    <html lang="es">
      <body className={cn('bg-dark text-gray-300', font.className)} suppressHydrationWarning={true}>
        <main className="lg:pl-[20vw] px-5 lg:px-0 container mx-auto p-5 lg:py-8"> 
          {children}
        </main>
      </body>
    </html>
  );
}