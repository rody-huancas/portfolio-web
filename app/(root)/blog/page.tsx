import { blogData } from "@/assets/blog";
import CardBlog from "@/components/ui/card-blog";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const Blog = () => {
  return (
    <Container>
      <Title title="Blog" />

      {blogData.map((blog) => <CardBlog key={blog.title} blog={blog} /> )}
    </Container>
  );
};

export default Blog;
