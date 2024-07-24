import CardFeaturedWork from "@/components/ui/card-featured-work";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rody Huancas | Proyectos",
  description: "Explora los proyectos destacados de Rody Huancas, desarrollador web Full Stack. Conoce los proyectos innovadores que demuestran habilidades en desarrollo de software, diseño de interfaces y soluciones tecnológicas.",
};

const PageProjects = () => {
  return (
    <Container>
      <Title title="Proyectos Destacados" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
        <CardFeaturedWork
          href="/projects/tintrail"
          image="https://rodyhuancas.vercel.app/images/tinttrail.webp"
          category="Software"
          title="TintTrail"
        />
        <CardFeaturedWork
          href="/projects/tintrail"
          image="https://rodyhuancas.vercel.app/images/tinttrail.webp"
          category="Software"
          title="TintTrail"
        />
        <CardFeaturedWork
          href="/projects/tintrail"
          image="https://rodyhuancas.vercel.app/images/tinttrail.webp"
          category="Software"
          title="TintTrail"
        />
      </div>
    </Container>
  );
};

export default PageProjects;
