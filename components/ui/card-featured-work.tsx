import Link from "next/link";
import Image from "next/image";

import { slugify } from "@/libs/utils";
import BadgeTechnology from "./badge-technology";

interface CardFeaturedWorkProps {
  image: string;
  category: string;
  title: string;
  technologies?: string[];
}

const CardFeaturedWork = ({ image, category, title, technologies }: CardFeaturedWorkProps) => {
  return (
    <Link href={`/projects/${slugify(title)}`} className="group">
      <div className="relative w-full h-60 sm:h-72 md:h-80 mb-5 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={`Imagen de ${title}`}
          fill
          className="object-cover rounded-xl group-hover:scale-105 transition-all duration-500 ease-in-out"
          priority
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h5 className="text-gray-500 uppercase tracking-widest font-medium">
            {category}
          </h5>
          <h3 className="text-xl text-white group-hover:text-primary transition-colors duration-500 ease-in-out text-nowrap">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-1 flex-wrap">
          {technologies &&
            technologies.map((technology) => (
              <BadgeTechnology key={technology} technology={technology} />
            ))}
        </div>
      </div>
    </Link>
  );
};

export default CardFeaturedWork;
