"use client";

import { About } from "../About";
import Feature from "../Feature";
import React, { FC } from "react";
import { HomeProps } from "types";
import { CircularProgress } from "@mui/material";
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
