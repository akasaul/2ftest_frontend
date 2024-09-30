import { paths } from "@/paths";
import { api } from "@/lib/api";
import { z } from "zod";
import { createOrderSchema } from "@/schmas/order.schema";
import { GetMyOrders as GetMyOrdersResponse } from "../types/order.type";

export const createOrders = async (
  orderBody: z.infer<typeof createOrderSchema>,
) => {
  const response = await api.post(paths.order.create, orderBody);
  return response;
};

interface UpdateOrdersBody {
  orderId: number;
  status: string;
}

export const updateOrders = async (updateOrderBody: UpdateOrdersBody) => {
  const response = await api.put(
    `${paths.order.update}/${updateOrderBody.orderId}`,
    updateOrderBody.status,
  );
  return response;
};

export const getOrders = async () => {
  const response = await api.get(paths.order.get);
  return response;
};

export const getMyOrders = async () => {
  const response = await api.get<GetMyOrdersResponse>(paths.order.my);
  return response;
};

export const getRestaurantOrders = async () => {
  const response = await api.get(paths.order.restaurantOrders);
  return response;
};

export const getRestaurantDetails = async (id: string) => {
  const response = await api.get(`${paths.order.details}/${id}`);
  return response;
};
