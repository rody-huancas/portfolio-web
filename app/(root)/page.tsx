import BlogSection from "./sections/blog-section";
import HeroSection from "./sections/hero-section";
import FeaturedWorkSection from "./sections/featured-work-section";
import TestimonialsSection from "./sections/testimonials-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <BlogSection /> 
    </div>
  );
}
