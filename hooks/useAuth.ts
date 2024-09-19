import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("use auth mount");

    if (token) {
      setIsLoggedIn(true);
      setIsLoading(false);
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsLoading(false);
  };

  return { isLoggedIn, isLoading, login, logout };
};
