import { signInSchema, signUpSchema } from "@/schmas/auth";
import { apiRoutes } from "../apiRoutes";
import { z } from "zod";
import { api } from "@/lib/api";
import { SignInRespose } from "@/services/types/auth";


export const signIn = async (signInBody: z.infer<typeof signInSchema>) => {
  const res = await api.post<SignInRespose>(apiRoutes.auth.logIn, signInBody);
  return res;
};

export const signUp = async (signUpBody: z.infer<typeof signUpSchema>) => {
  const res = await api.post(apiRoutes.auth.signUp, signUpBody);
  return res;
};
