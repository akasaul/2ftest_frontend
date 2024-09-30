import { z as zod } from "zod";
import { zfd } from "zod-form-data";

export const signUpSchema = zod
  .object({
    firstName: zod.string().min(1, { message: "First name is required" }),
    lastName: zod.string().min(1, { message: "Last name is required" }),
    email: zod.string().min(1, { message: "Email is required" }).email(),
    phoneNumber: zod
      .string()
      .regex(
        /^0[79]\d{8}$/,
        "Phone number must start with 09 or 07 and be exactly 10 digits long.",
      ),
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
  rememberMe: zod.boolean().optional(),
});

export const signUpRestaurantSchema = zfd
  .formData({
    firstName: zod.string().min(1, { message: "First name is required" }),
    lastName: zod.string().min(1, { message: "Last name is required" }),
    restaurantName: zod
      .string()
      .min(1, { message: "Restaurant name is required" }),
    location: zod.string().min(1, { message: "Location is required" }),
    phoneNumber: zod
      .string()
      .regex(
        /^0[79]\d{8}$/,
        "Phone number must start with 09 or 07 and be exactly 10 digits long.",
      ),

    email: zod.string().min(1, { message: "Email is required" }).email(),

    logo: zfd
      .file()
      .refine((file) => file.size < 5000000, {
        message: "File can't be bigger than 5MB.",
      })
      .refine(
        (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
        {
          message: "File format must be either jpg, jpeg lub png.",
        },
      ),

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

export const registerRestaurantUserSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  email: zod.string().email(),
  phoneNumber: zod.string().min(10),
  password: zod.string().min(8),
  role: zod.number().min(1),
});
