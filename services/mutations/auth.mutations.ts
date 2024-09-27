import { useMutation } from "@tanstack/react-query";
import { signIn, signUp } from "../api/auth.service";

export const useSignIn = () =>
  useMutation({
    mutationKey: ["signIn"],
    mutationFn: signIn,
  });

export const useSignUp = () =>
  useMutation({
    mutationKey: ["signUp"],
    mutationFn: signUp,
  });
