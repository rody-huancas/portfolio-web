import { cn } from "@/libs/utils";
import { IconType } from "react-icons";

interface ButtonIconProps {
  icon: IconType;
  className?: string;
  arial?: string;
  onClick: () => void;
}

const ButtonIcon = ({icon: Icon, className, onClick, arial}: ButtonIconProps) => {
  return (
    <button
      type="button"
      className={cn("", className)}
      onClick={onClick}
      aria-label={arial}
    >
      <Icon size={20} />
    </button>
  );
};

export default ButtonIcon;
