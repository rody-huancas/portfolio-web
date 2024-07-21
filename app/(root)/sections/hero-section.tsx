import Image from "next/image";

import { homeInformation } from "@/assets/data";

import Container from "@/components/ui/container";
import ButtonSocialMedia from "@/components/ui/button-social-media";

const HeroSection = () => {
  return (
    <section id="home" className="border-b border-gray-500/30 py-10">
      <Container>
        <div className="space-y-10">
          <div className="relative w-16 h-16">
            <Image src={homeInformation.image} alt={`Logo ${homeInformation.title}`} fill />
          </div>
        
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white/90 mb-2">
              {homeInformation.title}
            </h1>
            <h2 className="text-2xl text-white/70 mb-5">
              {homeInformation.subtitle}
            </h2>
            <p className="text-gray-500">{homeInformation.description}</p>
          </div>
        
          <div className="flex items-center gap-5">
            {homeInformation.socialMedia.map((social) => (
              <ButtonSocialMedia key={social.socialMedia} icon={social.icon} href={social.href} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
