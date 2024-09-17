"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Feature = ({
  backgroundImage,
  logo,
}: {
  backgroundImage: string;
  logo: string;
}) => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const headerElement = document.querySelector("header");
    setHeaderHeight(headerElement?.offsetHeight || 0);
  }, []);
  return (
    <section
      className="feature-height items-center justify-center flex px-10 py-10 bg-fit bg-fixed bg-cover md:bg-cover"
      style={{
        marginTop: headerHeight,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="max-w-2xl">
        <Image
          priority={false}
          src={logo}
          width={450}
          height={192}
          alt="Bar Cats Commercial Cleaning logo"
          />
      </div>
    </section>
  );
};

export default Feature;
