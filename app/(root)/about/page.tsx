import { Metadata } from "next";

import { aboutData } from "@/assets/about";

import Title from "@/components/ui/title";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Rody Huancas | Sobre Mí",
  description:
    "Conoce a Rody Huancas, un apasionado desarrollador web Full Stack. Descubre mi trayectoria, habilidades y enfoque en el desarrollo de soluciones tecnológicas innovadoras.",
};

const About = () => {
  return (
    <Container>
      <div className="max-w-3xl mx-auto py-10">
        <Title title={aboutData.title} />
        <div className="space-y-3">
          {aboutData.description.map((data, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
