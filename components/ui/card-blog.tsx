import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/libs/utils";

interface CardBlogProps {
  blog: BlogPostInterface
}

const CardBlog = ({ blog }: CardBlogProps) => {
  return (
    <Link href={`/blog/${slugify(blog.title)}`} className="flex flex-col sm:flex-row items-center sm:gap-5 group">
      <div className="relative w-96 h-52 rounded-xl mb-2 sm:mb-5 overflow-hidden">
        <Image
          src={blog.image}
          alt={`Logo de ${blog.title}`}
          fill
          className="rounded-xl group-hover:scale-105 transition-all duration-300 object-cover"
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-sm uppercase font-bold tracking-widest text-gray-500">
          {blog.category}
        </h2>
        <h3 className="text-white text-xl text-balance md:text-2xl mb-2 group-hover:text-primary transition-colors duration-300 capitalize">
          {blog.title}
        </h3>
        <p className="text-sm capitalize font-bold tracking-widest text-gray-500">
          {blog.date}
        </p>
      </div>
    </Link>
  );
};

export default CardBlog;
