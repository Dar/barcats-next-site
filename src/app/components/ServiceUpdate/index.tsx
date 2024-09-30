import ServiceForm from "@/app/components/ServiceForm";
import { Service } from "types";

interface ServiceUpdateProps {
  id: string;
  existingPost: Service | null;
}

export default function ServiceUpdate({ id, existingPost }: ServiceUpdateProps) {
  return (
    <div className="mt-12">
      <h1 className="text-center text-lg font-bold">
        Update Service
      </h1>
      {existingPost ? (
        <ServiceForm serviceId={id} existingPost={existingPost} />
      ) : (
        <p className="text-center">No service data available.</p>
      )}
    </div>
  );
}
