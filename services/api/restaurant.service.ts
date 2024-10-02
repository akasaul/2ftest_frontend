import { paths } from "@/paths";
import { api } from "@/lib/api";
import { GetTopRestaurantsResponse } from "../types/restaurant.type";

export const getTopRestaurants = async () => {
  const response = await api.get<GetTopRestaurantsResponse>(
    paths.restuarants.top,
  );
  return response;
};
