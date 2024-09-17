"use client";
import React, {useEffect, ReactNode, useState } from 'react'
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const allowedUID = process.env.NEXT_PUBLIC_FIREBASE_USER_UID;


const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.uid !== allowedUID)) {
      router.push('/admin/login'); 
    }
  }, [user, loading, router]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{user ? children : null}</main>
    </div>
  );
};

export default ProtectedRoute;
