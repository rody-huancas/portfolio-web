import { cn } from "@/libs/utils";

import { SlEnvolopeLetter } from "react-icons/sl";
import { TbPoint, TbTimelineEventMinus, TbWorld } from "react-icons/tb";

interface TimelineExperienceProps {
  experience: ExperienceInterface;
  className?: string;
}

const TimelineExperience = ({ experience, className }: TimelineExperienceProps) => {
  return (
    <div className={cn("space-y-6 border-l-2 border-collapse pb-3", className)}>
      <div className="relative w-full">
        <div className="absolute -top-0.5 z-10 -ml-4 h-8 w-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center">
          <TbTimelineEventMinus />
        </div>
        <div className="ml-8 space-y-5">
          <div className="space-y-1">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
              <h3 className="font-semibold text-gray-100/90 text-lg">
                {experience.position}
                {" - "}
                {experience.company}
              </h3>
              {experience.actually && (
                <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-[#03e26b]/5 text-[#03e26b] sm:ms-3 mb-2 sm:mb-0">
                  Actualmente
                </span>
              )}
            </div>
            <span className="text-gray-100/70">{experience.date}</span>
          </div>

          <div className="space-y-3">
            {experience.description.map((description) => (
              <p className="mt-2 max-w-screen-lg text-base text-gray-300/90 flex gap-3">
                <span className="pt-1">
                  <TbPoint />
                </span>
                {description}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            {experience.url_company && (
              <a
                href={experience.url_company}
                target="_blank"
                className="w-full sm:w-auto flex items-center justify-center gap-3 py-2 px-5 bg-gray-100/90 text-gray-700 font-medium hover:bg-white transition-colors duration-300"
              >
                <TbWorld size={18} />
                Ir a la Web
              </a>
            )}
            {experience.url_recommendation_letter && (
              <a
                href={experience.url_recommendation_letter}
                target="_blank"
                className="w-full sm:w-auto flex items-center justify-center gap-3 py-2 px-5 bg-gray-100/90 text-gray-700 font-medium hover:bg-white transition-colors duration-300"
              >
                <SlEnvolopeLetter size={18} />
                Carta de recomendación
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineExperience;
