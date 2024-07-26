import { Metadata } from "next";

import { experienceData } from "@/assets/experience";

import Title from "@/components/ui/title";
import Container from "@/components/ui/container";
import TimelineExperience from "@/components/ui/timeline-experience";

export const metadata: Metadata = {
  title: "Rody Huancas | Experiencia",
  description:
    "Descubre la experiencia profesional de Rody Huancas como desarrollador web Full Stack. Explora su trayectoria en el desarrollo de aplicaciones, optimización de sistemas y colaboración en proyectos innovadores que destacan su compromiso con la excelencia y la satisfacción del cliente.",
};

const Experience = () => {
  return (
    <Container>
      <Title title="Mi Experiencia" />

      {experienceData.map((experience) => (
        <TimelineExperience
          key={experience.company}
          experience={experience}
          className={experienceData.length > 1 ? "pb-10" : "pb-3"}
        />
      ))}
    </Container>
  );
};

export default Experience;
