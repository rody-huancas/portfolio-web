"use client";

import Link from "next/link";

import MainMenu from "./main-menu";
import { cn } from "@/libs/utils";

interface SidebarProps {
  showMenu: boolean;
  onClose: () => void;
}

const Sidebar = ({ showMenu, onClose }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 lg:left-0 w-[70vw] sm:w-[30vw] lg:w-[15vw] h-full bg-dark border-r border-gray-500/30 transition-all duration-300 ease-in-out z-50",
          showMenu ? "left-0" : "-left-full"
        )}
      >
        <section className="p-8 border-b border-gray-500/30">
          <Link
            href={"/"}
            className="text-2xl text-white hover:text-primary transition-colors duration-300"
          >
            Rody Huancas
          </Link>
          <h3 className="text-sm text-gray-500 font-light">
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

export default Sidebar;
