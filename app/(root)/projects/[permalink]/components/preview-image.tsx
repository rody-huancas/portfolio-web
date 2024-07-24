"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "https://rodyhuancas.vercel.app/images/tinttrail.webp",
  "https://rodyhuancas.vercel.app/images/erp-datec.webp",
  "https://rodyhuancas.vercel.app/images/admin-dashboard.webp",
];

const PreviewImage = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex justify-center items-start gap-10 p-4">
      <div className="grid gap-5">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-36 h-24 rounded-xl group overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index}`}
              layout="fill"
              className="rounded-xl group-hover:scale-105 transition-transform duration-300 object-fill"
            />
          </div>
        ))}
      </div>
      <div className="relative w-auto h-auto rounded-3xl overflow-hidden">
        <Image
          src={selectedImage}
          alt="Large Image"
          layout="responsive"
          width={1200}
          height={800}
          className="rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default PreviewImage;
