import { cn } from "@/libs/utils";
import Link from "next/link";

import { RiBriefcase2Line, RiFileListLine, RiHome3Line, RiMailLine, RiShapeLine, RiUserLine } from "react-icons/ri";

const MainMenu = () => {
  const routes = [
    {
      label: "Inicio",
      icon: RiHome3Line,
      href: "/",
    },
    {
      label: "Experiencia",
      icon: RiShapeLine,
      href: "/work",
    },
    {
      label: "Empresas",
      icon: RiBriefcase2Line,
      href: "/ventures",
    },
    {
      label: "Blog",
      icon: RiFileListLine,
      href: "/blog",
    },
    {
      label: "Sobre Mí",
      icon: RiUserLine,
      href: "/about",
    },
    {
      label: "Contacto",
      icon: RiMailLine,
      href: "/contact",
    },
  ];

  return (
    <ul>
      <li>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-4 text-gray-500 hover:text-gray-500 transition-colors duration-300 py-5 px-8 border-b border-gray-500/30 hover:bg-gray-500/5"
            )}
          >
            <route.icon size={18} />
            {route.label}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default MainMenu;
