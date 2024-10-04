import { useQuery } from "@tanstack/react-query";
import {
  getOrders,
  getMyOrders,
  getRestaurantOrders,
} from "@/services/api/order.service";
import { OrderProps } from "../types/order.type";

export const useGetOrders = (orderProps: OrderProps) =>
  useQuery({
    queryKey: ["getOrders", orderProps.globalFilter, orderProps.pageSize, orderProps.pageIndex],
    queryFn: () => getOrders(orderProps),
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
