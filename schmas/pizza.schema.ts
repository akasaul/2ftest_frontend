import { z } from "zod";
import { zfd } from "zod-form-data";

export const createPizzaSchema = zfd.formData({
  name: z
    .string()
    .min(5, { message: "Name should contain atleast 5 characters." }),
  toppings: z
    .array(z.number())
    .min(0, { message: "Atleast one topping is required." }),
  price: z.number().min(0, { message: "Price can not be less than 0." }),
  pizzaCover: zfd
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
});
