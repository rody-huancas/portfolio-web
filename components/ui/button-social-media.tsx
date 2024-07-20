import { IconType } from "react-icons";

interface ButtonSocialMediaProps {
  icon: IconType;
  href: string;
}

const ButtonSocialMedia = ({ icon: Icon, href }: ButtonSocialMediaProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-12 h-12 flex items-center justify-center border border-gray-500/30 rounded-lg text-gray-500 hover:text-white transition-colors duration-300 hover:bg-gray-500/10"
    >
      <Icon size={20} />
    </a>
  );
};

export default ButtonSocialMedia;
