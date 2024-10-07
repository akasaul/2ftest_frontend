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
  const [enableGetPermissions, setEnableGetPermissions] = useState(false);
  const { data } = useGetMyPermissions(enableGetPermissions);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const view =
    typeof window !== "undefined" ? localStorage.getItem("view") : null;

  useEffect(() => {
    if (token && view) {
      const permissions = data?.data ?? [];
      setEnableGetPermissions(true);
      const ability = defineAbilityFor(permissions);
      setAuthState({
        ability,
        permissions: data?.data ?? [],
        isLoggedIn: true,
        view,
        isLoading: false,
      });
    } else {
      setEnableGetPermissions(false);
      setAuthState({
        ability: null,
        permissions: [],
        isLoggedIn: false,
        view: null,
        isLoading: false,
      });
    }
  }, [token, view, data?.data]);

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
