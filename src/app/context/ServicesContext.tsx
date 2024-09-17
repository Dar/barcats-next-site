'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';
import { Service } from 'types';


interface ServicesContextProps {
  services: Service[];
  fetchServices: () => void;
  addService: (title: string, content: string, imageBase64: string) => void;
  updateService: (id: string, title: string, content: string) => void;
  deleteService: (id: string) => void;
}

const ServicesContext = createContext<ServicesContextProps>({
  services: [],
  fetchServices: () => {},
  addService: () => {},
  updateService: () => {},
  deleteService: () => {},
});

export const ServiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [services, setServices] = useState<Service[]>([]);
  const { user } = useAuth();
  const router = useRouter();

  const fetchServices = useCallback(async () => {
    if (!user) return;
  
    const token = await user.getIdToken();
    const response = await fetch('/api/services', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setServices(data);
  }, [user, setServices]);

  const addService = async (title: string, content: string, imageBase64: string) => {
    if (!user) return;

    const token = await user.getIdToken();
    const response = await fetch('/api/services/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content, imageBase64 }),
    });

    if (response.ok) {
      fetchServices();
    }
  };

  const updateService = async (id: string, title: string, content: string) => {
    if (!user) return;

    const token = await user.getIdToken();
    const response = await fetch('/api/services/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ id, title, content }),
    });

    if (response.ok) {
      fetchServices();
    }
  };

  const deleteService = async (id: string) => {
    if (!user) return;

    const token = await user.getIdToken();
    const response = await fetch('/api/services/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      fetchServices();
    }
  };

  useEffect(() => {
    let mounted = true;
      fetchServices();

      return () => {
        mounted = false;
      }
      
  },[user, fetchServices]);

  return (
    <ServicesContext.Provider value={{ services, fetchServices, addService, updateService, deleteService }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
