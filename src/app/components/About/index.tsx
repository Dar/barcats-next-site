import { HappyFace, Recycle, SideBarIcon } from "@/app/shared/Icons/Icons";
import React from "react";

export const About = () => {
  return (
    <div className="container mx-auto max-w-7xl px-7 ">
      <div className="flex flex-col gap-4 mb-11 items-center text-center">
        <p className="text-[#fec70b] tracking-light text-2xl leading-tight @[480px]:text-4xl @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[640px]">
          Bar Cats Commercial Cleaning Services
        </p>
   
        <p className="text-white font-poppins text-[18px] font-normal leading-normal max-w-7xl">
          When guests walk into your venue, they step into the world you&apos;ve created — the mood, the
energy, the feeling that keeps them coming back. Every detail shapes that experience, and
cleanliness is part of the atmosphere itself.
        </p>
        <p className="text-white font-poppins text-[18px] font-normal leading-normal max-w-7xl">
          Maintaining that standard takes consistency. Whether it&apos;s a restaurant, bar, bakery, or nightclub, every venue has its own rhythm and expectations.
        </p>
        <p className="text-white font-poppins text-[18px] font-normal leading-normal max-w-7xl">
          We handle the cleaning so your team can focus on service, guests, and keeping that energy alive.
        </p>
        <p className="text-white font-poppins text-[18px] font-normal leading-normal max-w-7xl">Daily, weekly, bi-weekly, or monthly — front of house, back of house, or both — we&apos;re there for you.</p>
        <p className="text-red-600 text-2xl font-bold">
          We are a fully insured and bonded company.
        </p>
        <p className="text-white font-poppins text-[18px]  font-normal leading-normal max-w-7xl">
          Available 24 hours a day, 7 days a week, 365 days a year. Whether
          it&apos;s daily cleaning, deep cleaning, or emergency services, Our
          services include floor care, kitchen sanitation, restroom maintenance,
          and more, all aimed at enhancing the overall ambiance and operational
          efficiency of the bars and restaurants we serve.
        </p>
        <p className="text-white font-poppins text-[18px]  font-normal leading-normal max-w-7xl">
          <strong>For venues that care how it feels the moment the doors open.</strong>
          </p>
      </div>
   
    </div>
  );
};
