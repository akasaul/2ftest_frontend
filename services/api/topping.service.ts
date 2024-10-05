import { api } from "@/lib/api";
import { z } from "zod";
import { createToppingSchema } from "@/schmas/toppings.schema";
import { paths } from "@/configs/paths";
import { GetRestaurantToppingsResponse } from "../types/toppings.type";

export const createTopping = async (
  toppingBody: z.infer<typeof createToppingSchema>,
) => {
  const response = await api.post(paths.toppings.create, toppingBody);
  return response;
};

export const getRestaurantTopping = async () => {
  const response = await api.get<GetRestaurantToppingsResponse>(
    paths.toppings.getRestaurant,
  );
  return response;
};
