"use client";
import { useEffect, useState } from "react";
import { db } from "../../utils/fbase";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { Service } from "types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";

const ServiceList: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "services"), (snapshot) => {
      const servicesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Service[];
      setServices(servicesList);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "services", id));
  };

  return (
    <div className="mt-10">
      <h2 className="text-lg font-bold mb-4">Existing Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {service.imageUrl && (
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.leadText}</p>
              <div className="flex justify-between">
                <Link href={`/admin/update/${service.id}`}>
                  <span className="flex items-center text-blue-500 hover:text-blue-700">
                    <EditIcon className="mr-2" /> Edit
                  </span>
                </Link>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="flex items-center text-red-500 hover:text-red-700"
                >
                  <DeleteIcon className="mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
