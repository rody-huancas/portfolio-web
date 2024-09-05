import { Metadata } from "next";

import Title from "@/components/ui/title";
import Container from "@/components/ui/container";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Rody Huancas | Contáctame",
  description:
    "Contáctame para discutir tus proyectos o resolver cualquier duda relacionada con el desarrollo web. Estoy disponible para ayudarte a transformar tus ideas en soluciones tecnológicas eficientes y personalizadas, enfocadas en tus necesidades.",
};

const Contact = () => {
  return (
    <Container>
      <div className="max-w-3xl mx-auto">
        <Title title="Contáctame" />

        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
