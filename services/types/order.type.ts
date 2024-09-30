export interface MyOrder {
  id: number;
  pizzaCover: string;
  pizzaName: string;
  toppings: MyOrderTopping[];
  price: number;
  qty: number;
}

interface MyOrderTopping {
  id: number;
  name: string;
  price: number;
}

export type GetMyOrders = MyOrder[];
