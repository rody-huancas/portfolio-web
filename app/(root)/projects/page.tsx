import { Metadata } from "next";

import { projectsData } from "@/assets/projects";

import Title from "@/components/ui/title";
import Container from "@/components/ui/container";
import CardFeaturedWork from "@/components/ui/card-featured-work";

export const metadata: Metadata = {
  title: "Rody Huancas | Proyectos",
  description:
    "Explora los proyectos destacados de Rody Huancas, desarrollador web Full Stack. Conoce los proyectos innovadores que demuestran habilidades en desarrollo de software, diseño de interfaces y soluciones tecnológicas.",
};

const PageProjects = () => {
  return (
    <Container>
      <Title title="Proyectos Destacados" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-10 mb-10">
        {projectsData.map((project, index) => (
          <CardFeaturedWork
            key={project.title}
            title={project.title}
            image={project.images[0]}
            category={project.category}
            technologies={project.technologies}
          />
        ))}
      </div>
    </Container>
  );
};

export default PageProjects;
