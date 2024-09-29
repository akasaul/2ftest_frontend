import { paths } from "@/paths";
import { api } from "@/lib/api";
import { GetPizzasResponse } from "@/services/types/pizza.type";

export const getPopularPizzas = async () => {
  const response = await api.get<GetPizzasResponse>(paths.pizza.popular);
  return response;
};
