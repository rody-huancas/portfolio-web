"use client";

import Link from "next/link";

import Title from "@/components/ui/title";
import ButtonLink from "@/components/ui/button-link";
import BadgeTechnology from "@/components/ui/badge-technology";

import { IoIosArrowRoundBack } from "react-icons/io";

interface HeaderProps {
  title: string;
  demo?: string;
  description: string;
  repository?: string;
  technologies: string[];
}

const Header = ({ title, demo, description, repository, technologies }: HeaderProps) => {
  return (
    <div className="space-y-5 my-16">
      <Link
        href={"/projects"}
        className="flex items-center gap-2 hover:text-white/90 transition-colors duration-300 mb-10"
      >
        <IoIosArrowRoundBack size={28} />
        Regresar
      </Link>

      <Title title={title} className="mb-5 mt-10 font-medium" />

      <div className="grid md:grid-cols-3 gap-10">
        <div className="space-y-5 md:col-span-2 lg:col-span-3 xl:col-span-2">
          <p className="text-gray-300">{description}</p>

          <div className="flex items-center gap-5">
            {demo && (
              <ButtonLink label="Ver Demo" href={demo} className="w-auto" />
            )}
            {repository && (
              <ButtonLink label="Ver Repositorio" href={repository} className="w-auto" />
            )}
          </div>
        </div>

        <div className="col-span-3 md:col-span-1 lg:col-span-3 xl:col-span-1 space-y-4">
          <span className="font-semibold">Tecnologías usadas:</span>

          <div className="col-span-3 md:col-span-1 lg:col-span-3 xl:col-span-1 flex items-center gap-3 flex-wrap">
            {technologies &&
              technologies.map((technology) => (
                <BadgeTechnology key={technology} technology={technology} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
