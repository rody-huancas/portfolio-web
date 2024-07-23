import CardFeaturedWork from "@/components/ui/card-featured-work";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const PageProjects = () => {
  return (
    <Container>
      <Title title="Proyectos Destacados" />

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 mb-10">
        <CardFeaturedWork
          href="/projects/tintrail"
          image="https://rodyhuancas.vercel.app/images/tinttrail.webp"
          category="Software"
          title="TintTrail"
        />
        <CardFeaturedWork
          href="/projects/tintrail"
          image="https://rodyhuancas.vercel.app/images/tinttrail.webp"
          category="Software"
          title="TintTrail"
        />
      </div>
    </Container>
  );
};

export default PageProjects;
