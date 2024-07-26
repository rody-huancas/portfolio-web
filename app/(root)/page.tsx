import BlogSection from "./sections/blog-section";
import HeroSection from "./sections/hero-section";
import FeaturedWorkSection from "./sections/featured-work-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedWorkSection />
      <BlogSection /> 
    </div>
  );
}
