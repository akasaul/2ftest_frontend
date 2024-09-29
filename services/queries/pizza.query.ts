import { useQuery } from "@tanstack/react-query";
import { getPopularPizzas } from "@/services/api/pizza.service";

export const useGetPopularPizzas = () =>
  useQuery({
    queryKey: ["getPopularPizzas"],
    queryFn: getPopularPizzas,
  });
