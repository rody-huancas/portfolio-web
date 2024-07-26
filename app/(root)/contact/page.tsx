import { Metadata } from "next";

import Title from "@/components/ui/title";
import Container from "@/components/ui/container";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Rody Huancas | Contáctame",
  description:
    "Ponte en contacto con Rody Huancas para discutir tus proyectos o cualquier consulta relacionada con desarrollo web. Estoy aquí para ayudarte a transformar tus ideas en soluciones tecnológicas efectivas.",
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
