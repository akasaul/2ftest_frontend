import { paths } from "@/paths";
import { api } from "@/lib/api";
import { GetPizzasResponse } from "@/services/types/pizza";
import { z } from "zod";
import { createPizzaSchema } from "@/schmas/pizza.schema";

export const getPopularPizzas = async () => {
  const response = await api.get<GetPizzasResponse>(paths.pizza.popular);
  return response;
};

export const createPizza = async (
  pizzaBody: z.infer<typeof createPizzaSchema>,
) => {
  const response = await api.post(paths.pizza.create, pizzaBody);
  return response;
};
