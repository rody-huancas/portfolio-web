import Image from "next/image";

import { homeInformation } from "@/assets/data";

import Container from "@/components/ui/container";
import ButtonSocialMedia from "@/components/ui/button-social-media";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="border-b border-gray-500/30 py-16">
      <Container>
        <div className="space-y-10">
          <div className="flex justify-between items-center">
            <div className="relative w-16 h-16">
              <Image
                src={homeInformation.image}
                alt={`Logo ${homeInformation.title}`}
                fill
              />
            </div>

            <Link
              href="/contact"
              className="bg-[#03e26b]/5 py-3 px-4 hover:bg-[#03e26b]/10 text-[#03e26b] rounded-lg flex items-center justify-center transition-colors duration-300 ease-out"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 100 100"
              >
                <path
                  fill="currentColor"
                  d="M50 37.45c-6.89 0-12.55 5.66-12.55 12.549c0 6.89 5.66 12.55 12.55 12.55c6.655 0 12.112-5.294 12.48-11.862a3.5 3.5 0 0 0 .07-.688a3.5 3.5 0 0 0-.07-.691C62.11 42.74 56.653 37.45 50 37.45m0 7c3.107 0 5.55 2.442 5.55 5.549s-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.549 5.55-5.549"
                  color="currentColor"
                ></path>
              </svg>
              Disponible para trabajar
            </Link>
          </div>

          <div className="">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white/90 mb-2 tracking-tight">
              {homeInformation.title}
            </h1>
            <h2 className="text-2xl text-white/80 mb-5">
              {homeInformation.subtitle}
            </h2>
            <p className="text-white/70 text-balance text-lg">
              {homeInformation.description}
            </p>
          </div>

          <div className="flex items-center gap-5">
            {homeInformation.socialMedia.map((social) => (
              <ButtonSocialMedia
                key={social.socialMedia}
                icon={social.icon}
                href={social.href}
                arial={social.ariaLabel}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
