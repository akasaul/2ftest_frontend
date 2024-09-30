import { paths } from "@/paths";
import { api } from "@/lib/api";
import { z } from "zod";
import { createOrderSchema } from "@/schmas/order.schema";

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
