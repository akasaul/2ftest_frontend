import { MRT_ColumnFiltersState } from "material-react-table";

export interface MyOrder {
  id: number;
  pizzaCover: string;
  pizzaName: string;
  toppings: MyOrderTopping[];
  price: number;
  qty: number;
  status: string;
}

export interface MyOrderTopping {
  id: number;
  name: string;
  price: number;
}

export interface OrderProps {
  pageIndex: number;
  pageSize: number;
  columnFilters: MRT_ColumnFiltersState;
  globalFilter: string;

  status?: string;
  toppings?: number[];
}

export type GetMyOrders = MyOrder[];

export interface GetOrdersResponse {
  data: RestaurantOrder[];
  pagination: {
    page: number;
    limit: number;
    rowCount: number;
  };
}

export interface RestaurantOrder {
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
