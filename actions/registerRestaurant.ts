"use server";

import { signUpRestaurantSchema } from "@/schmas/auth";

export const SignUpRestaurant = async (data: FormData) => {
  const safeData = signUpRestaurantSchema.safeParse(data);
  if (!safeData.success) throw new Error("Invalid data");
  const { login, email, password, profileImage } = safeData.data;

  try {
  } catch (error: any) {
    throw new Error("Something went wrong");
  }
};
