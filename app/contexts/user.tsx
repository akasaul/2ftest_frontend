"use client";

import * as React from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

export interface UserContextValue {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  checkSession?: () => Promise<void>;
}

export const UserContext = React.createContext<UserContextValue | undefined>(
  undefined,
);

export interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({
  children,
}: UserProviderProps): React.JSX.Element {
  const [state, setState] = React.useState<{
    user: User | null;
    error: string | null;
    isLoading: boolean;
  }>({
    user: null,
    error: null,
    isLoading: true,
  });

  const checkSession = React.useCallback(async (): Promise<void> => {
    try {
      // const { data, error } = await authClient.getUser();
      const { data, error } = {
        data: { id: "1", email: "test@test.com", name: "Test User" },
        error: null,
      };

      if (error) {
        setState((prev) => ({
          ...prev,
          user: null,
          error: "Something went wrong",
          isLoading: false,
        }));
        return;
      }

      setState((prev) => ({
        ...prev,
        user: data ?? null,
        error: null,
        isLoading: false,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        user: null,
        error: "Something went wrong",
        isLoading: false,
      }));
    }
  }, []);

  React.useEffect(() => {
    checkSession().catch((err) => console.error(err));
  }, [checkSession]);

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export const UserConsumer = UserContext.Consumer;
