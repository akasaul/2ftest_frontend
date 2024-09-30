import { useMutation } from "@tanstack/react-query";
import {
  signIn,
  signUp,
  signUpRestaurant,
  registerRestaurantUser,
} from "../api/auth.service";

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

export const useRegisterRestaurantUser = () =>
  useMutation({
    mutationKey: ["registerRestaurantUser"],
    mutationFn: registerRestaurantUser,
  });
