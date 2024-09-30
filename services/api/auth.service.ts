import {
  signInSchema,
  signUpSchema,
  registerRestaurantUserSchema,
} from "@/schmas/auth";
import { apiRoutes } from "../apiRoutes";
import { z } from "zod";
import { api } from "@/lib/api";
import {
  SignInRespose,
  SignUpRestaurantResponse,
  SignUpResponse,
} from "@/services/types/auth.type";

export const signIn = async (signInBody: z.infer<typeof signInSchema>) => {
  const res = await api.post<SignInRespose>(apiRoutes.auth.logIn, signInBody);
  return res;
};

export const signUpRestaurant = async (signUpBody: FormData) => {
  const res = await api.post<SignUpRestaurantResponse>(
    apiRoutes.auth.signUpRestaurant,
    signUpBody,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return res;
};

export const signUp = async (signUpBody: z.infer<typeof signUpSchema>) => {
  const res = await api.post<SignUpResponse>(apiRoutes.auth.signUp, signUpBody);
  return res;
};

export const registerRestaurantUser = async (
  registerBody: z.infer<typeof registerRestaurantUserSchema>,
) => {
  const res = await api.post<SignUpResponse>(
    apiRoutes.auth.registerRestaurantUser,
    registerBody,
  );
  return res;
};
