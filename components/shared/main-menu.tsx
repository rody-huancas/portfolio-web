import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/libs/utils";
import { menuRoutes } from "@/assets/data";

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <ul>
      {menuRoutes.map((route) => (
        <li key={route.href}>
          <Link
            href={route.href}
            className={cn(
              "flex items-center gap-4 transition-colors duration-300 py-5 px-8 border-b border-gray-500/30 hover:bg-gray-500/5",
              pathname === route.href ? "text-primary bg-gray-500/5" : "text-gray-500 hover:text-gray-500"
            )}
          >
            <route.icon size={18} />
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
