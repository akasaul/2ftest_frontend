"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { paths } from "@/configs/paths";
import { useAuth } from "@/providers/AuthProvider";

export interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({
  children,
}: AuthGuardProps): React.JSX.Element | null {
  const router = useRouter();
  const { isLoggedIn, isLoading } = useAuth();
  const [isChecking, setIsChecking] = React.useState<boolean>(true);

  const checkPermissions = async () => {
    if (isLoading) {
      return;
    }

    if (!isLoggedIn) {
      router.replace(paths.auth.signIn);
      return;
    }

    setIsChecking(false);
  };

  React.useEffect(() => {
    checkPermissions();
  }, [isLoggedIn, isLoading]);

  if (isChecking) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
