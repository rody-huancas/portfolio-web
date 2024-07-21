import Link from "next/link";
import Image from "next/image";

interface CardBlogProps {
  href: string;
  image: string;
  title: string;
  category: string;
  date: string;
}

const CardBlog = ({ href, image, title, category, date }: CardBlogProps) => {
  return (
    <Link href={href} className="flex flex-col sm:flex-row items-center sm:gap-5 group">
      <div className="relative w-60 h-40 rounded-xl mb-2 sm:mb-5 overflow-hidden">
        <Image
          src={image}
          alt={`Logo de ${title}`}
          fill
          className="rounded-xl group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="sm:space-y-2">
        <h5 className="text-sm uppercase font-bold tracking-widest text-gray-500">
          {category}
        </h5>
        <h3 className="text-white text-2xl mb2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm capitalize font-bold tracking-widest text-gray-500">
          {date}
        </p>
      </div>
    </Link>
  );
};

export default CardBlog;
