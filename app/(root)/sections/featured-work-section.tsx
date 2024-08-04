"use client";

import { useRouter } from "next/navigation";

import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import CardFeaturedWork from "@/components/ui/card-featured-work";
import { projectsData } from "@/assets/projects";

const FeaturedWorkSection = () => {
  const router = useRouter();

  return (
    <section id="featuredWork" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Proyectos Destacados" />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-10">
          {projectsData.slice(0, 2).map((project) => (
            <CardFeaturedWork
              key={project.title}
              title={project.title}
              image={project.images[0]}
              category={project.category}
              technologies={project.technologies}
            />
          ))}
        </div>
        <Button
          label="Ver todos los proyectos"
          onClick={() => router.push("/projects")}
        />
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;
