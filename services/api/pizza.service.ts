import { api } from "@/lib/api";
import { z } from "zod";
import { createPizzaSchema } from "@/schmas/pizza.schema";
import {
  GetPizzaDetailsResponse,
  GetPopularPizzasResponse,
} from "../types/pizza.type";
import { paths } from "@/configs/paths";

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

export const getPizzaDetails = async (id: number) => {
  console.log({ id });
  const response = await api.get<GetPizzaDetailsResponse>(
    `${paths.pizza.get}/${id}`,
  );
  return response;
};
