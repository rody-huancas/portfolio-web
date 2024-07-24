import Image from "next/image";
import Link from "next/link";

interface CardFeaturedWorkProps {
  href: string;
  image: string;
  category: string;
  title: string;
}

const CardFeaturedWork = ({ href, image, category, title }: CardFeaturedWorkProps) => {
  return (
    <Link href={href} className="group">
      <div className="relative w-full h-80 mb-5 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={`Imagen de ${title}`}
          fill
          className="object-cover rounded-xl group-hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
      <h5 className="text-gray-500 uppercase tracking-widest font-medium">
        {category}
      </h5>
      <h3 className="text-xl text-white group-hover:text-primary transition-colors duration-500 ease-in-out">
        {title}
      </h3>
    </Link>
  );
};

export default CardFeaturedWork;
