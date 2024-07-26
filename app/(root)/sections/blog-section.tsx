"use client";

import { useRouter } from "next/navigation";

import { blogData } from "@/assets/blog";

import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import CardBlog from "@/components/ui/card-blog";
import Container from "@/components/ui/container";

const BlogSection = () => {
  const router = useRouter();

  return (
    <section id="blog" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Blog" />

        <div className="space-y-5 mb-5">
          {blogData.slice(0, 2).map((blog) => <CardBlog key={blog.title} blog={blog} /> )}
        </div>

        <Button
          label="Ver todos los posts"
          onClick={() => router.push("/blog")}
        />
      </Container>
    </section>
  );
};

export default BlogSection;
