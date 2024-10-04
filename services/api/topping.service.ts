import { api } from "@/lib/api";
import { z } from "zod";
import { createToppingSchema } from "@/schmas/toppings.schema";
import { paths } from "@/configs/paths";

export const createTopping = async (
  toppingBody: z.infer<typeof createToppingSchema>,
) => {
  const response = await api.post(paths.toppings.create, toppingBody);
  return response;
};
