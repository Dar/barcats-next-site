
"use client";
import dynamic from "next/dynamic";
import Providers from "../utils/providers";
 
const ProtectedRoute = dynamic(() => import("@/app/components/ProtectedRoute"), {
  ssr: false,
});
const ServiceForm = dynamic(() => import("@/app/components/ServiceForm"), {
  ssr: false,
});
const ServiceList = dynamic(() => import("@/app/components/ServiceList"), {
  ssr: false,
});

export default function ServicesPage() {
  return (
    <Providers>
      <ProtectedRoute>
        <section className="flex flex-col items-center justify-center px-10 py-20 bg-fixed bg-cover md:bg-cover min-h-screen">
          <div className="mt-12 w-full max-w-3xl">
            <h1 className="text-center text-2xl font-bold mb-8">
              Services Admin
            </h1>
            <ServiceForm />
          </div>
          <div className="w-full max-w-3xl mt-12">
            <ServiceList />
          </div>
        </section>
      </ProtectedRoute>
    </Providers>
  );
}
