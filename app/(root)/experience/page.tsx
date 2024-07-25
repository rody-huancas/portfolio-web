import { experienceData } from "@/assets/experience";

import Title from "@/components/ui/title";
import Container from "@/components/ui/container";
import TimelineExperience from "@/components/ui/timeline-experience";

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
