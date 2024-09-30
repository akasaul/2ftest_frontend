import { z } from "zod";

export const createOrderSchema = z.object({
  pizzaId: z.number(),
  additionalToppings: z.array(z.number()).optional(),
  qty: z.number().min(0),
});
