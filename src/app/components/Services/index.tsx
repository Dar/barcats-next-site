"use client";

import React, { FC, useEffect, useState } from "react";
import { TileVertical } from "../TileVertical";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/utils/fbase";
import { Service } from "types";
import { CircularProgress } from "@mui/material";
import { TileStack } from "../TileStack";

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

  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl">
        <CircularProgress />
      </div>
    );
  }

  return (
     <div className="items-center text-center">
        {services.map((service, idx) => (
          <TileStack
            key={service.slug}
            item={idx}
            title={service.title}
            text={service.leadText}
            slug={service.slug}
            imageUrl={service.imageUrl ?? ""}
          />
        ))}
      </div>
  );
};

export default Services;
