import { useMutation } from "@tanstack/react-query";
import { signIn, signUp, signUpRestaurant } from "../api/auth.service";

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

export const useSignUpRestaurant = () =>
  useMutation({
    mutationKey: ["signUpRestaurant"],
    mutationFn: signUpRestaurant,
  });
