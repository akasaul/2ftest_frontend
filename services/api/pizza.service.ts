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

export const createPizza = async (pizzaBody: FormData) => {
  const response = await api.post(paths.pizza.create, pizzaBody, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export const getPizzaDetails = async (id: number) => {
  console.log({ id });
  const response = await api.get<GetPizzaDetailsResponse>(
    `${paths.pizza.get}/${id}`,
  );
  return response;
};
