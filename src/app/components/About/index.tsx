import { HappyFace, Recycle, SideBarIcon } from "@/app/shared/Icons/Icons";
import React from "react";

export const About = () => {
  return (
    <div className="container mx-auto max-w-7xl px-7 ">
      <div className="flex flex-col gap-4 mb-11 items-center text-center">
        <p className="text-[#fec70b] tracking-light text-2xl leading-tight @[480px]:text-4xl @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[640px]">Cleaning Toronto Establishements Since 2013</p>
        <h2 className="text-[#292939] font-poppins font-bold tracking-light text-[44px] leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[640px]">
          WHO WE ARE
        </h2>
        <p className="text-textColor font-poppins text-[18px] font-normal leading-normal max-w-7xl">
        Bar Cats is a Commercial Cleaning Company specializing in bars and restaurants in the core of downtown Toronto. Our team of experienced professionals is dedicated to maintaining the highest standards of cleanliness and hygiene, ensuring a safe and welcoming environment for both staff and patrons.
        </p>
        <p className="text-red-600 text-2xl font-bold">We are a fully insured and bonded company.</p>
        <p className="text-textColor font-poppins text-[18px]  font-normal leading-normal max-w-7xl">
         Available 24 hours a day, 7 days a week, 365 days a year. Whether it&apos;s daily cleaning, deep cleaning, or emergency services, Our services include floor care, kitchen sanitation, restroom maintenance, and more, all aimed at enhancing the overall ambiance and operational efficiency of the bars and restaurants we serve.
        </p>
      </div>
      <div className="gap-3 md:grid md:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] xs:px-4 lg:gap-3 p-0">
        <div className="mb-8 lg:mb-0 flex flex-1 gap-3 xs:space-y-6 rounded border border-[#fec70b] bg-[#fff] p-4 flex-col">
         <SideBarIcon color={"e02424"} size={24} desc={"Bar Cats Commercial Cleaning - Experienced Professionals"}/>
          <div className="flex flex-col gap-1">
            <h2 className="text-textColor font-poppins text-base font-bold leading-tight">
              Experienced Professionals
            </h2>
            <p className="text-textColor font-poppins text-sm font-normal leading-normal">
              Our team has over 10 years of experience in the cleaning industry.
            </p>
          </div>
        </div>
        <div className="mb-8 lg:mb-0 flex flex-1 gap-3 rounded border border-[#fec70b] bg-[#fff] p-4 flex-col">
          <Recycle color={"008000"} size={24} desc={"Bar Cats Commercial Cleaning - Eco-Friendly Cleaning"}/>
          <div className="flex flex-col gap-1">
            <h2 className="text-textColor font-poppins text-base font-bold leading-tight">
              Eco-Friendly Cleaning
            </h2>
            <p className="text-textColor font-poppins text-sm font-normal leading-normal">
              We use only eco-friendly products that are safe for your family
              and pets.
            </p>
          </div>
        </div>
        <div className="mb-8 lg:mb-0 flex flex-1 gap-3 rounded border border-[#fec70b] bg-[#fff] p-4 flex-col">
        <HappyFace color={"FFC000"} size={24} desc={"Bar Cats Commercial Cleaning - Satisfaction Guarantee"}/>
          <div className="flex flex-col gap-1">
            <h2 className="text-textColor font-poppins text-base font-bold leading-tight">
              Satisfaction Guarantee
            </h2>
            <p className="text-textColor font-poppins text-sm font-normal leading-normal">
              We promise to leave your space sparkling clean, or we&apos;ll make it
              right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
