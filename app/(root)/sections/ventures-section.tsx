import Title from "@/components/ui/title";
import Container from "@/components/ui/container";
import CardVentures from "@/components/ui/card-ventures";

const VenturesSection = () => {
  return (
    <section id="ventures" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Empresas" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <CardVentures />
          <CardVentures />
        </div>
      </Container>
    </section>
  );
};

export default VenturesSection;
