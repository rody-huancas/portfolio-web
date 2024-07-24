import { ReactElement } from "react";
import { PiEmptyBold } from "react-icons/pi";
import { FaReact, FaNodeJs, FaCss3Alt, FaJsSquare, FaHtml5, FaDocker, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiGraphql, SiNextdotjs, SiRedux, SiAxios, SiVite } from "react-icons/si";

interface TechnologyAttributes {
  color: string;
  icon: ReactElement;
}

const defaultAttributes: TechnologyAttributes = {
  color: "#CCCCCC",
  icon: <FaGithub />,
};

export const technologyAttributes: Record<string, TechnologyAttributes> = {
  react: {
    color: "#58C4DC",
    icon: <FaReact />,
  },
  nodejs: {
    color: "#8CC84B",
    icon: <FaNodeJs />,
  },
  typescript: {
    color: "#007ACC",
    icon: <SiTypescript />,
  },
  tailwindcss: {
    color: "#38BDF8",
    icon: <SiTailwindcss />,
  },
  css: {
    color: "#2965F1",
    icon: <FaCss3Alt />,
  },
  javascript: {
    color: "#F7DF1E",
    icon: <FaJsSquare />,
  },
  html: {
    color: "#E34F26",
    icon: <FaHtml5 />,
  },
  docker: {
    color: "#2496ED",
    icon: <FaDocker />,
  },
  postgresql: {
    color: "#336791",
    icon: <SiPostgresql />,
  },
  mongodb: {
    color: "#47A248",
    icon: <SiMongodb />,
  },
  graphql: {
    color: "#E10098",
    icon: <SiGraphql />,
  },
  nextjs: {
    color: "#000000",
    icon: <SiNextdotjs />,
  },
  redux: {
    color: "#764ABC",
    icon: <SiRedux />,
  },
  zustand: {
    color: "#F7F7F7",
    icon: <PiEmptyBold />,
  },
  reactquery: {
    color: "#FF4154",
    icon: <PiEmptyBold />,
  },
  axios: {
    color: "#5A29A6",
    icon: <SiAxios />,
  },
  vite: {
    color: "#646CFF",
    icon: <SiVite />,
  },
};

export const getTechnologyAttributes = (technology: string): TechnologyAttributes => {
  const key = technology.toLowerCase().replace(/ /g, '');
  return technologyAttributes[key] || defaultAttributes;
};
