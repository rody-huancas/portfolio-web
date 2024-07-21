import { RiBriefcase2Line, RiFileListLine, RiGithubLine, RiHome3Line, RiLinkedinLine, RiMailLine, RiShapeLine, RiUserLine } from "react-icons/ri";

export const menuRoutes = [
  {
    label: "Inicio",
    icon: RiHome3Line,
    href: "/",
  },
  {
    label: "Proyectos",
    icon: RiShapeLine,
    href: "/projects",
  },
  {
    label: "Empresas",
    icon: RiBriefcase2Line,
    href: "/ventures",
  },
  {
    label: "Blog",
    icon: RiFileListLine,
    href: "/blog",
  },
  {
    label: "Sobre Mí",
    icon: RiUserLine,
    href: "/about",
  },
  {
    label: "Contacto",
    icon: RiMailLine,
    href: "/contact",
  },
];

export const homeInformation = {
  image: "https://rodyhuancas.vercel.app/icons/favicon.svg",
  title: "Hola, soy Rody",
  subtitle: "Desarrollador Full Stack",
  description:
    "+1 año como desarrollador Full Stack, me apasiona la tecnología y creo proyectos de código libre. Transformo ideas en realidad a través del código. ¡Bienvenido a mi portafolio!",
  socialMedia: [
    {
      socialMedia: "LinkedIn",
      icon: RiLinkedinLine,
      href: "https://www.linkedin.com/in/rody-huancas/",
    },
    {
      socialMedia: "GitHub",
      icon: RiGithubLine,
      href: "https://github.com/rody-huancas",
    },
    {
      socialMedia: "Curriculum Vitae",
      icon: RiFileListLine,
      href: "https://res.cloudinary.com/dmgazox1n/image/upload/v1721505199/Portfolio/PDF/kbughvmin3otxdfnoc9w.pdf",
    },
  ],
};
