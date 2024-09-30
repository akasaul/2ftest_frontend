import { z } from "zod";

export const createToppingSchema = z.object({
  name: z.string(),
  price: z.number().min(1),
});
