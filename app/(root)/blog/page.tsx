import { Metadata } from "next";

import { blogData } from "@/assets/blog";

import Title from "@/components/ui/title";
import CardBlog from "@/components/ui/card-blog";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Rody Huancas | Blog",
  description:
    "Descubre el blog de Rody Huancas, un espacio donde se comparten ideas, tutoriales y reflexiones sobre desarrollo web, programación y tecnología.",
};

const Blog = () => {
  return (
    <Container>
      <Title title="Blog" />

      {blogData.map((blog) => <CardBlog key={blog.title} blog={blog} /> )}
    </Container>
  );
};

export default Blog;
