"use client";

import { useRouter } from "next/navigation";

import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import CardFeaturedWork from "@/components/ui/card-featured-work";

const FeaturedWorkSection = () => {
  const router = useRouter();

  return (
    <section id="featuredWork" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Proyectos Destacados" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mb-10">
          <CardFeaturedWork
            href="/"
            image="https://rodyhuancas.vercel.app/images/tinttrail.webp"
            category="Software"
            title="TintTrail"
          />
          <CardFeaturedWork
            href="/"
            image="https://rodyhuancas.vercel.app/images/tinttrail.webp"
            category="Software"
            title="TintTrail"
          />
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
