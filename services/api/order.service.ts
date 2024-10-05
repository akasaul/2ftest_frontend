import { paths } from "@/configs/paths";
import { api } from "@/lib/api";
import { z } from "zod";
import { createOrderSchema } from "@/schmas/order.schema";
import {
  GetMyOrders as GetMyOrdersResponse,
  GetOrdersResponse,
  OrderProps,
} from "../types/order.type";

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
    { status: updateOrderBody.status },
  );
  return response;
};

export const getOrders = async ({
  pageIndex,
  pageSize,
  globalFilter,
  status,
  toppings,
}: OrderProps) => {
  const response = await api.get<GetOrdersResponse>(paths.order.restaurant, {
    params: {
      page: pageIndex + 1,
      limit: pageSize,
      search: globalFilter,
      status,
      toppings,
    },
  });
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
