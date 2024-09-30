import { useQuery } from "@tanstack/react-query";
import {
  getPizzaDetails,
  getPopularPizzas,
} from "@/services/api/pizza.service";

export const useGetPopularPizzas = () =>
  useQuery({
    queryKey: ["getPopularPizzas"],
    queryFn: getPopularPizzas,
  });

export const useGetPizzaDetails = (id: number) =>
  useQuery({
    queryKey: ["getPizzaDetails"],
    queryFn: () => getPizzaDetails(id),
  });
