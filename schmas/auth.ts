import { z as zod } from "zod";

export const signUpSchema = zod
  .object({
    firstName: zod.string().min(1, { message: "First name is required" }),
    lastName: zod.string().min(1, { message: "Last name is required" }),
    email: zod.string().min(1, { message: "Email is required" }).email(),
    password: zod
      .string()
      .min(6, { message: "Password should be at least 6 characters" }),
    terms: zod
      .boolean()
      .refine((value) => value, "You must accept the terms and conditions"),
    confirmPassword: zod.string(),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Passwords do not match",
  });

export const signInSchema = zod.object({
  email: zod.string().min(1, { message: "Email is required" }).email(),
  password: zod.string().min(1, { message: "Password is required" }),
});
