'use client';

import React, { FC, useEffect, useState } from "react";
import { TileVertical } from "../TileVertical";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/utils/fbase";
import { Service } from "types";
import { CircularProgress } from "@mui/material";

const Services: FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesCollection = collection(db, "services");
        const servicesSnapshot = await getDocs(servicesCollection);
        const servicesList = servicesSnapshot.docs.map(
          (doc) => doc.data() as Service
        );
        setServices(servicesList);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if(loading){
    return <div className="container mx-auto max-w-7xl">
        <CircularProgress />
      </div>
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col gap-4 mb-6 items-center text-center">      
        <h2 className="text-[#fff] tracking-light text-[44px] font-poppins font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[640px] ">
          Our Services
        </h2>

        <h3 className="text-[#fff] tracking-light font-poppins text-[21px] lg:text-[24px] italic leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[640px]  lg:mb-5">
          Our services include floor care, sanitation, and deep cleaning
          tailored to meet the highest standards of hygiene and cleanliness.
        </h3>

        <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          {services.map((service) => (
            <TileVertical
              key={service.slug}
              title={service.title}
              text={service.leadText}
              slug={service.slug}
              imageUrl={service.imageUrl ?? ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
