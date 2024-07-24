import Image from "next/image";

const CardTestimonials = () => {
  return (
    <div className="p-10 rounded-xl border border-gray-500/30">
      <p className="mb-10 text-gray-300 font-medium">
        {'"'}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo
        nisi maxime blanditiis reprehenderit impedit deserunt dolore laboriosam
        unde suscipit, adipisci dolorum, animi cum ad, officiis fugiat modi
        voluptatum doloremque.
        {'"'}
      </p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full">
          <Image
            src={"/favicon.svg"}
            alt="Image"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-white font-medium">Julliana Cox</h3>
          <h5 className="text-gray-500 uppercase font-medium tracking-widest text-sm">
            Gerente General
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonials;
