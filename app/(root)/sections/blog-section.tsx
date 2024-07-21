"use client";

import Title from "@/components/ui/title";
import Container from "@/components/ui/container";
import CardBlog from "@/components/ui/card-blog";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BlogSection = () => {
  const router = useRouter();
  return (
    <section id="blog" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Blog" />

        <div className="space-y-5 mb-5">
          <CardBlog
            href="/blog/blog-1"
            title="Comandos de Git"
            category="Tecnología"
            image="https://miro.medium.com/v2/resize:fit:828/format:webp/0*mnBPahCuD9Xf-grZ"
            date="19 Julio de 2024"
          />
          <CardBlog
            href="/blog/blog-1"
            title="Comandos de Git"
            category="Tecnología"
            image="https://miro.medium.com/v2/resize:fit:828/format:webp/0*mnBPahCuD9Xf-grZ"
            date="19 Julio de 2024"
          />
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