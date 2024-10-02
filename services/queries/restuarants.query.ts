import { useQuery } from "@tanstack/react-query";
import { getTopRestaurants } from "../api/restaurant.service";

export const useGetTopRestaurants = () =>
  useQuery({
    queryKey: ["getTopRestaurants"],
    queryFn: getTopRestaurants,
  });
