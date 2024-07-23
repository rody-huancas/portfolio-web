import { Metadata } from "next";

import Image from "next/image";

import Header from "./components/header";
import Container from "@/components/ui/container";
import PreviewImage from "./components/preview-image";

export const metadata: Metadata = {
  title: "Proyecto - TintTrail",
  description: "TintTrail, proyecto para generar paleta de colores.",
};

const DetailProject = () => {
  return (
    <Container>
      <Header />
      <PreviewImage />
    </Container>
  );
};

export default DetailProject;
