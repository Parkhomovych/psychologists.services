"use client";
import { useUserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";

const withAuth = (Component: ComponentType<any>) => {
  const Wrapper = () => {
    const { user } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/login"); // Redirect to login if user is not authenticated
      }
    }, [user, router]);
    return <Component />;
  };
  return Wrapper;
};

export default withAuth;
