import type { Metadata } from "next";

import { Figtree } from "next/font/google";
import { ReactNode } from "react";

import { Toaster } from "sonner";

import { cn } from "@/libs/utils";

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rody Huancas | Desarrollador Web Full Stack",
  description: "Soy Rody Huancas, un desarrollador web Full Stack apasionado por crear soluciones innovadoras y eficientes. Explora mi portafolio para ver mis proyectos destacados, habilidades en desarrollo de software, y cómo puedo ayudarte a alcanzar tus objetivos tecnológicos.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{children: ReactNode}>) {
  return (
    <html lang="es">
      <body className={cn('bg-dark text-gray-300', font.className)} suppressHydrationWarning={true}>
        <main className="lg:pl-[300px] px-5 lg:px-0"> 
          {children}
        </main>

        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}