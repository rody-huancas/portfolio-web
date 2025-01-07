"use client";

import { ReactNode, useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"

import Footer from "@/components/shared/footer";
import ButtonIcon from "@/components/ui/button-icon";
import SidebarMenu from "@/components/shared/sidebar-menu";

import { RiMenu2Line } from "react-icons/ri";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <ProgressBar color="#fca311" height="4px" shallowRouting />

      <SidebarMenu showMenu={showMenu} onClose={() => setShowMenu(false)} />

      <ButtonIcon
        icon={RiMenu2Line}
        onClick={() => setShowMenu(true)}
        className="lg:hidden fixed right-0 bottom-0 z-40 bg-primary text-white p-4 rounded-tl-lg rounded-bl-lg"
        arial="Menu to open the navegation links"
      />

      {children}

      <Footer />
    </>
  );
};

export default MainLayout;
