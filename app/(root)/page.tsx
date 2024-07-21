import FeaturedWorkSection from "./sections/featured-work-section";
import HeroSection from "./sections/hero-section";
import TestimonialsSection from "./sections/testimonials-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
    </div>
  );
}
