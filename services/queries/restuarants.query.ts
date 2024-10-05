import { useQuery } from "@tanstack/react-query";
import {
  getRestaurantUsers,
  getTopRestaurants,
} from "../api/restaurant.service";
import { GetRestaurantUsersProps } from "../types/restaurant.type";

export const useGetTopRestaurants = () =>
  useQuery({
    queryKey: ["getTopRestaurants"],
    queryFn: getTopRestaurants,
  });

export const useGetRestaurantUsers = (props: GetRestaurantUsersProps) =>
  useQuery({
    queryKey: [
      "getRestaurantUsers",
      props.pageIndex,
      props.pageSize,
      props.globalFilter,
    ],

    queryFn: getRestaurantUsers,
  });
