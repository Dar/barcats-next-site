import React from "react";
import ServiceDetail from "@/app/components/ServiceDetail";
import { db } from "@/app/utils/fbase";
import { collection, query, getDocs } from "firebase/firestore";
import { Service } from "types";

// Fetch all service data
async function getServiceData(slug: string) {
  const servicesQuery = query(collection(db, "services"));
  const querySnapshot = await getDocs(servicesQuery);

  const services = querySnapshot.docs.map((doc) => doc.data() as Service);
  const service = services.find((s) => s.slug === slug) || null;
  const otherServices = services.filter((s) => s.slug !== slug);

  return { service, otherServices };
}

export async function generateStaticParams() {
  const servicesQuery = query(collection(db, "services"));
  const querySnapshot = await getDocs(servicesQuery);

  const paths = querySnapshot.docs.map((doc) => {
    const service = doc.data() as Service;
    return { slug: service.slug };
  });

  return paths;
}

// Page Component
export default async function ServicesPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { service, otherServices } = await getServiceData(slug);

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <>
      <ServiceDetail service={service} otherServices={otherServices} />
    </>
  );
}

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { service } = await getServiceData(slug);

  if (service) {
    return {
      title: `${service.title} | Bar Cats Commercial Cleaning`,
      description: service.leadText,
      keywords: `${service.title}, Services, ${service.title} Details, Bar Cats Commercial Cleaning`,
      openGraph: {
        title: `${service.title} | Bar Cats Commercial Cleaning`,
        description: service.leadText,
        url: `https://barcats.ca/services/${slug}`,
        images: [
          {
            url: service.imageUrl || "https://barcats.ca/assets/barcats-cleaning-service.webp",
            width: 800,
            height: 600,
            alt: service.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${service.title} | Bar Cats Commercial Cleaning`,
        description: service.leadText,
        images: [
          {
            url: service.imageUrl || "https://barcats.ca/assets/barcats-cleaning-service.webp",
            width: 800,
            height: 600,
            alt: service.title,
          },
        ],
      },
    };
  }

  return {
    title: "Service Not Found | Bar Cats Commercial Cleaning",
    description: "The service you are looking for does not exist.",
  };
}
