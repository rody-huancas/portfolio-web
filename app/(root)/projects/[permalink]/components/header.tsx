"use client";

import Link from "next/link";

import Title from "@/components/ui/title";
import Button from "@/components/ui/button";

import { IoIosArrowRoundBack } from "react-icons/io";

const Header = () => {
  return (
    <div className="space-y-5 my-16">
      <Link
        href={"/projects"}
        className="flex items-center gap-2 hover:text-white/90 transition-colors duration-300 mb-10"
      >
        <IoIosArrowRoundBack size={28} />
        Regresar
      </Link>

      <Title title="TintTrail" className="mb-5 mt-10 font-medium" />

      <div className="grid md:grid-cols-3 gap-10">
        <div className="space-y-5 md:col-span-2">
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
            cupiditate amet beatae laudantium dignissimos aspernatur dolorum
            provident sit placeat rem modi, eius odit sint sed in vero?
            Laudantium, placeat.
          </p>

          <div className="flex items-center gap-5">
            <Button type="button" label="Ver Demo" className="w-auto" />
            <Button type="button" label="Ver Repositorio" className="w-auto" />
          </div>
        </div>

        <div className="space-y-4">
          <span className="font-semibold">Tecnologías usadas:</span>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-blue-600/70 px-3 py-1 rounded-full text-white/90">React</div>
            <div className="bg-blue-600/70 px-3 py-1 rounded-full text-white/90">
              TypeScript
            </div>
            <div className="bg-blue-600/70 px-3 py-1 rounded-full text-white/90">
              TailwindCSS
            </div>
            <div className="bg-blue-600/70 px-3 py-1 rounded-full text-white/90">Sass</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
