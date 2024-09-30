import { useMutation } from "@tanstack/react-query";
import { createOrders, updateOrders } from "../api/order.service";

export const useCreateOrders = () =>
  useMutation({
    mutationKey: ["createOrder"],
    mutationFn: createOrders,
  });

export const useUpdateOrder = () =>
  useMutation({
    mutationKey: ["updateOrder"],
    mutationFn: updateOrders,
  });
