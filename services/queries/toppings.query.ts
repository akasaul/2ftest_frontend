import { useQuery } from "@tanstack/react-query";
import { getRestaurantTopping } from "../api/topping.service";

export const useGetRestaurantToppings = () =>
  useQuery({
    queryKey: ["getRestaurantToppings"],
    queryFn: () => getRestaurantTopping(),
  });
