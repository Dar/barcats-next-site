"use client";
import React from "react";
import { backgroundImage } from "@/app/shared/Images";
import Form  from "../Form";

export const FormContainer = ({ text }: { text: React.ReactNode }) => {
  const error = false;
  return (
    <div
      className=" max-w justify-center px-3 lg:px-40 py-16 lg:py-32 bg-fit bg-fixed bg-cover md:bg-cover"
      style={{ height:'auto', backgroundImage: `url(${backgroundImage.src})`, width: "100%" }}
    >
      <div className="mb-11">{text}</div>

      <div className="bg-white w-full px-4 py-10 rounded-lg mx-auto">
        <h3 className="text-black text-center text-4xl font-bold">
          Get a free quote
        </h3>
        <p className="text-textColor mx-auto text-center my-6 text-xl max-w-2xl">
          Contact us for a free estimate.
          <br /> We&apos;ll provide details on how we can help.
        </p>
        <div className="mx-auto md:max-w-md lg:max-w-2xl">
          <Form />
        </div>
      </div>
    </div>
  );
};
