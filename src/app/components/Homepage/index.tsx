
'use client';

import { About } from "../About";
import Feature from "../Feature";
import ImageSection from "../ImageSection";
import Services from "../Services";
import { Testimonials } from "../Testimonials";
import { Process } from "../Process";
import React, { FC, useEffect, useState } from "react";
import { HomeProps } from "types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/utils/fbase";
import { CircularProgress } from "@mui/material";
import { FormContainer } from "../FormContainer";

const HomeTemplate:FC = () => {
  const [homepageImage, setHomePageImage] = useState<HomeProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const homepageCollection = collection(db, "homepage");
        const homePageSnapshot = await getDocs(homepageCollection);
        const homepageImageList = homePageSnapshot.docs.map(
          (doc) => doc.data() as HomeProps
        );
        setHomePageImage(homepageImageList);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  const content = (
    <>
      <div>
        <h2 className="text-black text-[1.75rem] lg:text-[2.25rem] max-w font-bold">
          We specialize in tackling the toughest cleaning jobs.
        </h2>
        <p className="text-textColor mt-2">
          Stubborn stains doesn&apos;t make your environment feel spotless and
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
    <h3 className="text-textColor text-center tracking-light text-[24px] lg:text-[32px] italic leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[640px] mb-5 lg:mb-5">
      &quot;You Never Get a Second Chance <br />
      to Make a First Impression&hellip; &quot;
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

  if(loading){
    return <main className="h-[800px] flex justify-center items-center">
      <p className="text-siteColor">
        <CircularProgress />
      </p>
      </main>
  }

  return (
    <main>
      <Feature 
        backgroundImage={homepageImage[0]?.headerImg} 
        logo={homepageImage[0]?.logoImg} 
      />
      <section id="about" className="py-10 lg:py-24">
        <About />
      </section>
      <section className="md:py-10 lg:pb-36">
        <ImageSection
          imageSrc={homepageImage[0]?.sectionAboutImg}
          imageAlt="Bar Cats Cleaning Cleaning Services - Before and After"
          content={content}
          imageOnRight={true}
          lead={leadingText}
        />
      </section>
      <section
        id="services"
        className="px-4 lg:px-0 py-10 lg:py-24 bg-siteColor flex content-center"
      >
        <Services />
      </section>
      <section
        id="testimonials"
        className="w-full px-6 lg:px-0 py-12 lg:pt-16 lg:pb-32"
      >
        <div className="container mx-auto max-w-7xl px-3 lg:px-7 ">
          <h2 className="mb-2 text-[#292939] text-center tracking-light text-[44px] leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] font-poppins font-bold">
            Testimonials
          </h2>
          <p className="text-textColor lg:text-center tracking-light text-[16px] @[480px]:text-4xl @[480px]:font-black font-poppins">
            Our clients consistently praise Bar Cats for our exceptional
            attention to detail and reliable service. Many have noted how our
            thorough cleaning practices have significantly improved the
            cleanliness and ambiance of their establishments, making us their
            go-to choice for commercial cleaning.
          </p>
        </div>
        <Testimonials />
      </section>
      <section id="contactForm" className="w-full px-0">
        <FormContainer text={formText} />
      </section>
    </main>
  );
}



export default HomeTemplate;