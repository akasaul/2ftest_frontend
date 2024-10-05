"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { paths } from "@/configs/paths";
import { useGetMyPermissions } from "@/services/queries/role.query";
import { Permission } from "@/services/types/role.type";
import { AppAbility, defineAbilityFor } from "@/utils/ability";

interface AuthState {
  isLoggedIn: boolean;
  view: string | null;
  isLoading: boolean;
  permissions: Permission[];
  ability: AppAbility | null;
}

interface AuthContextType extends AuthState {
  login: (token: string, view: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useAuthProvider = () => {
  const [authState, setAuthState] = useState<AuthState>({
    ability: null,
    isLoggedIn: false,
    view: null,
    isLoading: true,
    permissions: [],
  });

  const router = useRouter();
  const { data } = useGetMyPermissions();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const view = localStorage.getItem("view");

    if (token && view) {
      const permissions = data?.data ?? [];
      const ability = defineAbilityFor(permissions);
      setAuthState({
        ability,
        permissions: data?.data ?? [],
        isLoggedIn: true,
        view,
        isLoading: false,
      });
    } else {
      setAuthState({
        ability: null,
        permissions: [],
        isLoggedIn: false,
        view: null,
        isLoading: false,
      });
    }
  }, [data?.data]);

  const login = (token: string, view: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("view", view);
    setAuthState((prev) => ({
      ...prev,
      isLoggedIn: true,
      view,
      isLoading: false,
    }));

    view === "customer"
      ? router.push(paths.user.home)
      : router.push(paths.owner.dashboard);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("view");
    setAuthState((prev) => ({
      ...prev,
      isLoggedIn: false,
      view: null,
      isLoading: false,
    }));
    router.push(paths.user.home);
  };

  return {
    ...authState,
    login,
    logout,
  };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
