import React from "react";
import Image from "next/image";
import { TileHorizontal } from "@/app/components/TileHorizontal";
import { Process } from "@/app/components/Process";
import { Service } from "types";

interface ServiceDetailProps {
  service: Service;
  otherServices: Service[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  service,
  otherServices,
}) => {
  return (
    <>
      <div className="py-12 lg:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 mb-14 gap-4">
          <div className="flex px-4">
            {service.imageUrl && (
              <Image
                src={service.imageUrl}
                width={500}
                height={500}
                alt={service.title}
                priority
                className="rounded-md object-cover w-full h-full"
              />
            )}
          </div>
          <div className="flex flex-col">
            <h1 className="text-siteColor text-4xl font-bold mb-4 text-center md:text-left">
              {service.title}
            </h1>
            <div
              className="text-content px-4 md:px-0"
              dangerouslySetInnerHTML={{ __html: service.content || "" }}
            />
          </div>
        </div>

        <div className=" max-w-6xl mx-auto my-8 p-4">
          <Process />
        </div>

        <div className="bg-siteColor py-24">
          <div className="px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <h1 className="text-6xl text-white font-bold mb-4">
                What Makes Our Service Highly Effective?
              </h1>
            </div>
            <div className="flex flex-col justify-start p-4">
              <p className="text-[16px] mb-4 text-white">
                Our expertise is rooted in customer convenience and attention to
                detail. Expert cleaners from our team first survey the premises
                to design the perfect cleaning plan suitable for a high-volume
                business such as a restaurant, pub, or bar.
              </p>
              <p className="text-[16px] mb-4 text-white">
                With us on the job, you don&apos;t have to worry about the
                accumulation of grease, grime, and other residues that result
                from daily operations. We ensure the entire establishment is
                spotless and hygienic.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Services Section */}
      <div className="px-4 max-w-6xl mx-auto py-16">
        <h3 className="text-black text-4xl mb-8 font-bold">Other Services</h3>
        <div className="flex lg:flex-row flex-col gap-3">
          {otherServices.map((otherService) => (
            <TileHorizontal
              key={otherService.slug}
              title={otherService.title}
              text={otherService.leadText}
              slug={otherService.slug}
              imageUrl={otherService.imageUrl || ""}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
