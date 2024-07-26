import { Metadata } from "next";
import { notFound } from "next/navigation";

import { slugify } from "@/libs/utils";
import { projectsData } from "@/assets/projects";

import Header from "./components/header";
import Container from "@/components/ui/container";
import PreviewImage from "./components/preview-image";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = params;

  const project = projectsData.find((p) => slugify(p.title) === slug);
  if (!project) return {};

  return {
    title: `Proyecto | ${project.title}`,
    description: project.description,
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = params;

  const project = projectsData.find((p) => slugify(p.title) === slug);

  if (!project) notFound();

  return (
    <Container>
      <Header
        title={project.title}
        description={project.description}
        demo={project.demo}
        repository={project.respository}
        technologies={project.technologies}
      />
      <PreviewImage images={project.images} title={project.title} />
    </Container>
  );
};

export default ProjectPage;
