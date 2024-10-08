"use client";

import Link from "next/link";

import { cn } from "@/libs/utils";

import MainMenu from "./main-menu";

interface SidebarProps {
  showMenu: boolean;
  onClose: () => void;
}

const SidebarMenu = ({ showMenu, onClose }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 lg:left-0 w-[70vw] sm:w-[30vw] lg:w-[300px] h-full bg-dark border-r border-gray-500/30 transition-all duration-300 ease-in-out z-50",
          showMenu ? "left-0" : "-left-full"
        )}
      >
        <section className="p-8 border-b border-gray-500/30">
          <Link
            href={"/"}
            className="text-3xl text-white hover:text-primary transition-colors duration-300"
          >
            Rody Huancas
          </Link>
          <h3 className="text-base text-gray-300 font-light">
            Desarrollador Web
          </h3>
        </section>

        <section>
          <MainMenu />
        </section>
      </aside>

      <div
        className={cn(
          "fixed bg-black/20 z-40 left-0 top-0 w-full h-full lg:hidden",
          showMenu ? "block" : "hidden"
        )}
        onClick={onClose}
      />
    </>
  );
};

export default SidebarMenu;
