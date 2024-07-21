"use client";

import { ReactNode, useState } from "react";

import Sidebar from "@/components/shared/sidebar";
import ButtonIcon from "@/components/ui/button-icon";
import { RiMenu2Line } from "react-icons/ri";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />

      <ButtonIcon
        icon={RiMenu2Line}
        onClick={() => setShowMenu(true)}
        className="lg:hidden fixed right-0 bottom-0 z-40 bg-primary text-white p-4 rounded-tl-lg rounded-bl-lg"
      />

      {children}
    </div>
  );
};

export default MainLayout;
