import type { Metadata } from "next";

import { Figtree } from "next/font/google";
import { ReactNode } from "react";

import { cn } from "@/libs/utils";

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rody Huancas",
  description: "Rody Huancas, desarrollador web Full Stack. Explora mis proyectos y habilidades.",
};

export default function RootLayout({ children }: Readonly<{children: ReactNode}>) {
  return (
    <html lang="es">
      <body className={cn('bg-dark text-gray-300', font.className)} suppressHydrationWarning={true}>
        <main className="lg:pl-[300px] px-5 lg:px-0"> 
          {children}
        </main>
      </body>
    </html>
  );
}