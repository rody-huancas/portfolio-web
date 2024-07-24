"use client";

import { useState } from "react";
import Image from "next/image";

interface PreviewImageProps {
  images: string[];
  title: string;
}

const PreviewImage = ({ images, title }: PreviewImageProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse xl:flex-row justify-center items-start gap-10 p-4">
      <div className="w-full lg:w-auto grid grid-cols-3 xl:grid-cols-1 place-items-center gap-5 md:gap-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-28 h-20 md:w-36 md:h-24 rounded-xl group overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index}`}
              fill
              className="rounded-xl group-hover:scale-105 transition-transform duration-300 object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
      <div className="relative w-auto h-auto rounded-3xl overflow-hidden">
        <Image
          src={selectedImage}
          alt={`Imagen de ${title}`}
          width={1200}
          height={800}
          className="rounded-3xl object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default PreviewImage;
