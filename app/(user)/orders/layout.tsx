"use client";
import { paths } from "@/paths";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OrderLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(paths.auth.signUp);
    }
  }, [isLoggedIn, router]);

  return <>{children}</>;
};

export default OrderLayout;
