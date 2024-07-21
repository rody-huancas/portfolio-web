import Image from "next/image";

const CardVentures = () => {
  return (
    <a href="https://www.datec.pe/" target="_blank" className="block group">
      <div className="relative w-20 h-20 rounded-xl mb-5">
        <Image
          src={"https://app-datec-erp.netlify.app/images/logo.png"}
          alt="Logo"
          fill
          className="rounded-xl"
        />
      </div>
      <h3 className="text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
        Datec Consulting
      </h3>
      <p className="text-gray-500">
        La empresa ofrece servicios de consultoría en TIC y soluciones de
        negocios innovadoras con tecnologías de información.
      </p>
    </a>
  );
};

export default CardVentures;
