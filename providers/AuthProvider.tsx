"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

interface AuthState {
  isLoggedIn: boolean;
  view: string | null;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (token: string, view: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useAuthProvider = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    view: null,
    isLoading: true,
  });

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const view = localStorage.getItem("view");

    if (token && view) {
      setAuthState({
        isLoggedIn: true,
        view,
        isLoading: false,
      });
    } else {
      setAuthState({
        isLoggedIn: false,
        view: null,
        isLoading: false,
      });
    }
  }, []);

  // useEffect(() => {
  //   if (authState.isLoading) {
  //     return;
  //   }
  //   if (authState.isLoggedIn) {
  //     if (authState.view === "restaurant") {
  //       router.replace(paths.owner.dashboard);
  //     } else {
  //       router.replace(paths.user.home);
  //     }
  //   } else {
  //     router.replace(paths.auth.signIn);
  //   }
  // }, [authState.isLoggedIn, authState.isLoading, router]);

  const login = (token: string, view: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("view", view);
    setAuthState({
      isLoggedIn: true,
      view,
      isLoading: false,
    });

    view === "customer" ? router.push(paths.user.home) : router.push(paths.owner.dashboard);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("view");
    setAuthState({
      isLoggedIn: false,
      view: null,
      isLoading: false,
    });
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
