"use client";

import { About } from "../About";
import Feature from "../Feature";
import ImageSection from "../ImageSection";
import Services from "../Services";
// import { Testimonials } from "../Testimonials";
import { Process } from "../Process";
import React, { FC } from "react";
import { HomeProps } from "types";
import { CircularProgress } from "@mui/material";
import { FormContainer } from "../FormContainer";

interface HomeTemplateProps {
  homepageImage: HomeProps[];
}

const HomeTemplate: FC<HomeTemplateProps> = ({ homepageImage }) => {
  if (!homepageImage || homepageImage.length === 0) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <p className="text-siteColor">
          <CircularProgress />
        </p>
      </div>
    );
  }

  const content = (
    <>
      <div>
        <p className="text-textColor mt-2">
          Stubborn stains don&apos;t make your environment feel spotless and
          inviting. Our experienced team uses top-quality products to handle
          even the most challenging cleaning tasks.
        </p>
        <p className="text-textColor mt-2">
          Whether it&apos;s a high volume restaurant, a busy bar, or a
          commercial space, we are dedicated to providing a cleaner, healthier
          environment for your employees and customers. Trust us to deliver
          exceptional results every time, making your space shine with a level
          of cleanliness that reflects your commitment to excellence.
          Here&apos;s our process:
        </p>
      </div>
      <Process />
    </>
  );

  const leadingText = (
    <h3 className="text-textColor text-center tracking-light text-[22px] lg:text-[24px] bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[640px] mb-5 lg:mb-5">
      &quot;You Never Get a Second Chance to Make a First Impression&hellip;
      &quot;
    </h3>
  );

  const formText = (
    <div className="max-w-[720px] mx-auto">
      <p className="text-[#fff] text-center text-[18px] font-poppins font-normal shadow-lg leading-normal max-w-7xl">
        Your Trusted Partner in Commercial Cleaning
      </p>
      <h2 className="text-[#fff] text-center tracking-light text-[44px] font-poppins leading-tight @[480px]:text-4xl @[480px]:leading-tight font-bold shadow-lg">
        We bring unmatched professionalism to ensure your business shines in
        every way.
      </h2>
    </div>
  );

  return (
    <main>
      <Feature
        backgroundImage={homepageImage[0]?.headerImg}
        logo={homepageImage[0]?.logoImg}
      />
      <section id="about" className="bg-siteColor py-10 lg:py-24">
        <About />
      </section>
      <hr  className="text-white"/>
    </main>
  );
};

export default HomeTemplate;
