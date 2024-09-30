import { useQuery } from "@tanstack/react-query";
import {
  getOrders,
  getMyOrders,
  getRestaurantOrders,
} from "@/services/api/order.service";

export const useGetOrders = () =>
  useQuery({
    queryKey: ["getOrders"],
    queryFn: getOrders,
  });

export const useGetMyOrders = () =>
  useQuery({
    queryKey: ["getMyOrders"],
    queryFn: getMyOrders,
  });

export const useGetRestaurantOrders = () =>
  useQuery({
    queryKey: ["getRestaurantOrders"],
    queryFn: getRestaurantOrders,
  });
