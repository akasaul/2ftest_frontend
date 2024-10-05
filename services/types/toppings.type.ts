export interface Topping {
  id: number;
  name: string;
  price: number;
  restaurantId: number;
}

export type GetRestaurantToppingsResponse = Topping[];
