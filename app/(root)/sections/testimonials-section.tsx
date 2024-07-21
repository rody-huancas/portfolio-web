import CardTestimonials from "@/components/ui/card-testimonials";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Testimonios" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CardTestimonials />
          <CardTestimonials />
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
