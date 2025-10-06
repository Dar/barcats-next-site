"use client";
import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const  TileStack = ({
  title,
  text,
  imageUrl,
  item
}: {
  title: string;
  text: string;
  slug: string;
  imageUrl: string;
  item:number;
}) => {
  const router = useRouter();

  const titleForId = title
  .normalize('NFD') 
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/gi, '-')      
  .replace(/^-+|-+$/g, '')            
  .toLowerCase();

  return (
    <div className={`py-12 lg:py-8`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex px-4">
          {imageUrl && (
            <Image
              src={imageUrl}  
              width={500}
              height={500}
              alt={title}
              priority
              className="rounded-md object-cover w-full h-full"
            />
          )}
        </div>
        <div className={`flex flex-col`}>
          <h2 className="max-md:text-3xl md:text-4xl font-bold mb-4 text-left max-md:px-4 max-md:text-left">
            {title}
          </h2>
          <div
            className="px-4 md:px-0 text-left"
            dangerouslySetInnerHTML={{ __html: text || "" }}
          />
        </div>
      </div>
    </div>
  );
};
