import { paths } from "@/paths";
import { api } from "@/lib/api";
import { z } from "zod";
import { createPizzaSchema } from "@/schmas/pizza.schema";
import { GetPopularPizzasResponse } from "../types/pizza.type";

export const getPopularPizzas = async () => {
  const response = await api.get<GetPopularPizzasResponse>(paths.pizza.popular);
  return response;
};

export const createPizza = async (
  pizzaBody: z.infer<typeof createPizzaSchema>,
) => {
  const response = await api.post(paths.pizza.create, pizzaBody);
  return response;
};
