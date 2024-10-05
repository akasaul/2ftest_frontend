import { api } from "@/lib/api";
import {
  GetResetaurantUsers,
  GetTopRestaurantsResponse,
} from "../types/restaurant.type";
import { paths } from "@/configs/paths";

export const getTopRestaurants = async () => {
  const response = await api.get<GetTopRestaurantsResponse>(
    paths.restuarants.top,
  );
  return response;
};

export const getRestaurantUsers = async () => {
  const response = await api.get<GetResetaurantUsers>(paths.restuarants.users);
  return response;
};
