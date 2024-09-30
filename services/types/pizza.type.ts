export interface PopularPizza {
  id: number;
  name: string;
  price: number;
  pizzaCover: string;
  toppings: string[];
  restaurant: {
    logo: string;
    name: string;
  };
}

export type GetPopularPizzasResponse = PopularPizza[];
