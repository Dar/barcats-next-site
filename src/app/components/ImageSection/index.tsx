import Image from "next/image";
import React from "react";

interface ImageContentLayoutProps {
  imageSrc: string;
  imageAlt: string;
  content: React.ReactNode;
  imageOnRight?: boolean;
  lead?: React.ReactNode;
}

export default function ImageSection({
  imageSrc,
  imageAlt,
  content,
  lead,
  imageOnRight = false,
}: ImageContentLayoutProps) {
  return (
    <div className="md:flex container mx-auto max-w-7xl">
      {!imageOnRight && (
        <div className="w-full md:w-1/2 p-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            priority={false}
         

            className="rounded-lg w-full h-auto"
          />
        </div>
      )}
      <div className="flex w-full md:w-1/2 p-4">
        <div className="w-full">
          {lead}
          {content}
        </div>
      </div>
      {imageOnRight && (
        <div className="w-full md:w-1/2 p-4">
          <div className="flex justify-around mb-3">
            <p className="text-siteYellow text-2xl">Before</p>
            <p className="text-siteYellow text-2xl">After</p>
          </div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            priority={false}
            className="rounded-lg w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}
