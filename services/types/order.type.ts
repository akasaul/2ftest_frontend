export interface MyOrder {
  id: number;
  pizzaCover: string;
  pizzaName: string;
  toppings: MyOrderTopping[];
  price: number;
  qty: number;
  status: string;
}

interface MyOrderTopping {
  id: number;
  name: string;
  price: number;
}

export interface OrderProps {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
  toppings?: number[];
}

export type GetMyOrders = MyOrder[];

export interface GetOrdersResponse {
  data: RestaurantOrder[];
  pagination: {
    page: number;
    limit: number;
  };
}

interface RestaurantOrder {
  id: number;
  pizzaCover: string;
  pizzaName: string;
  status: string;
  additionalToppings: MyOrderTopping[];
  defaultToppings: MyOrderTopping[];
  qty: number;
  price: number;
  customerNumber: string;
  createdAt: string;
}
