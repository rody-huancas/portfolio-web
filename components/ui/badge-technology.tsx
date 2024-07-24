import { technologyAttributes } from "@/utils/data";

interface BadgeTechnologyProps {
  technology: string;
}

const BadgeTechnology = ({ technology }: BadgeTechnologyProps) => {
  const techKey = technology.toLowerCase().replace(/ /g, "");
  const attributes = technologyAttributes[techKey] || {
    color: "#CCCCCC",
    icon: <span className="text-gray-500">⚙️</span>,
  };

  return (
    <div
      className="flex items-center gap-2 px-3 py-1 rounded-full text-white/90"
      style={{
        backgroundColor: `${attributes.color}1A`,
        color: attributes.color,
      }}
    >
      <div style={{ color: attributes.color }}>{attributes.icon}</div>
      <span>{technology}</span>
    </div>
  );
};

export default BadgeTechnology;
