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
    label: "Experiencia",
    icon: RiBriefcase2Line,
    href: "/experience",
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
  image: "https://res.cloudinary.com/dmgazox1n/image/upload/v1721969366/Portfolio/Iconos/icon_rody.png",
  title: "Hola, soy Rody",
  subtitle: "Desarrollador Full Stack",
  description:
    "+2 años de experiencia como desarrollador Full Stack, me dedico a crear soluciones tecnológicas modernas y a llevar ideas a la realidad. Apasionado por el código libre. ¡Bienvenido a mi portafolio!",
  socialMedia: [
    {
      socialMedia: "LinkedIn",
      icon: RiLinkedinLine,
      href: "https://www.linkedin.com/in/rody-huancas/",
      ariaLabel: "Abrir mi página de LinkedIn",
    },
    {
      socialMedia: "GitHub",
      icon: RiGithubLine,
      href: "https://github.com/rody-huancas",
      ariaLabel: "Ver mi perfil de GitHub y mis proyectos",
    },
    {
      socialMedia: "Curriculum Vitae",
      icon: RiFileListLine,
      href: "https://res.cloudinary.com/dmgazox1n/image/upload/v1732036456/Portfolio/PDF/HILDER-RODY-HUANCAS-CHUQUIPOMA.pdf",
      ariaLabel: "Ver mi currículum vitae en formato PDF",
    },
  ],
};
