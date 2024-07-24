import { cn } from "@/libs/utils";

interface ButtonLinkProps {
  href: string;
  label: string;
  className?: string;
}

const ButtonLink = ({ href, label, className }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "py-3 px-4 border border-primary text-primary w-full rounded-lg hover:bg-primary/10 transition-colors duration-300 font-medium",
        className
      )}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

export default ButtonLink;
