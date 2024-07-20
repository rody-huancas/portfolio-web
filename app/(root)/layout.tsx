"use client";

import { ReactNode, useState } from "react";

import Sidebar from "@/components/shared/sidebar";
import { RiMenu2Line } from "react-icons/ri";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />

      <button type="button" className="lg:hidden" onClick={() => setShowMenu(true)}>
        <RiMenu2Line size={20} />
      </button>

      {children}
    </div>
  );
};

export default MainLayout;
