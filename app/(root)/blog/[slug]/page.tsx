import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/ui/container";

import { slugify } from "@/libs/utils";
import { blogData } from "@/assets/blog";
import { IoIosArrowRoundBack } from "react-icons/io";

interface BlogPageProps {
  params: { slug: string };
}

interface BlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = params;
  const blog = blogData.find((p) => slugify(p.title) === slug);

  if (!blog) return {};

  return { title: `Blog | ${blog.title}`, description: blog.description, };
}

const BlogDetail = ({ params }: BlogPageProps) => {
  const { slug } = params;
  const blog = blogData.find((p) => slugify(p.title) === slug);

  if (!blog) notFound();

  return (
    <Container>
      <div className="max-w-3xl mx-auto py-10 px-4 overflow-hidden">
        <Link
          href={"/blog"}
          className="flex items-center gap-2 hover:text-white/90 transition-colors duration-300 mb-10"
        >
          <IoIosArrowRoundBack size={28} />
          Regresar
        </Link>

        <h1 className="text-3xl font-bold text-white/85 mb-6">{blog.title}</h1>
        <p className="text-gray-100/80 mb-4">{blog.description}</p>
        <div className="relative w-full h-96 group overflow-hidden rounded-2xl">
          <Image
            src={blog.image}
            fill
            alt={`Imagen del blog ${blog.title}`}
            className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4"></h2>
        <ul className="list-disc list-inside space-y-7">
          {blog.commands.map((command, index) => (
            <li
              key={index}
              className="flex flex-col p-4 rounded-md border border-gray-100/60"
            >
              <span className="text-gray-100/90">{command.description}</span>
              <span className="font-mono text-gray-100/80">
                {command.command}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default BlogDetail;
