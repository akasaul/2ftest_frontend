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

export interface PizzaDetailsTopping {
  id: number;
  name: string;
  isDefault: boolean;
}

export interface PizzaDetails {
  id: number;
  name: string;
  price: number;
  pizzaCover: string;
  toppings: PizzaDetailsTopping[];
}

export type GetPizzaDetailsResponse = PizzaDetails;

export type GetPopularPizzasResponse = PopularPizza[];
