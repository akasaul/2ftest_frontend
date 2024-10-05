import { z } from "zod";

export const createOrderSchema = z.object({
  pizzaId: z.number(),
  additionalToppings: z.array(z.number()).optional(),
  qty: z.number().min(0),
});

export const orderSchema = z.object({
  toppings: z.array(z.number()).min(1, "Please select at least one topping"),
  quantity: z
    .number()
    .min(1, "Quantity must be at least 1")
    .max(10, "You cannot order more than 10 pizzas"),
});


