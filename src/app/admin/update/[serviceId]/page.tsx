import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/app/utils/fbase";
import ServiceForm from "@/app/components/ServiceForm";
import { Service } from "types";
import ProtectedRoute from "@/app/components/ProtectedRoute";

// Fetch the service data dynamically for server-side rendering
async function fetchServiceData(serviceId: string) {
  const docRef = doc(db, "services", serviceId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return docSnap.data() as Service;
}

// This replaces getStaticProps and fetches the params dynamically
export async function generateStaticParams() {
  const servicesCollection = collection(db, "services");
  const serviceDocs = await getDocs(servicesCollection);

  return serviceDocs.docs.map((doc) => ({
    serviceId: doc.id,
  }));
}

// Page Component
export default async function UpdateServicePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const serviceId = params.serviceId;
  const existingPost = await fetchServiceData(serviceId);

  if (!existingPost) {
    return <div>No service found!</div>;
  }

  return (
    <ProtectedRoute>
      <section className="h-100 items-center justify-center flex px-10 py-20 bg-fit bg-fixed bg-cover md:bg-cover">
        <ServiceForm serviceId={serviceId} existingPost={existingPost} />
      </section>
    </ProtectedRoute>
  );
}
