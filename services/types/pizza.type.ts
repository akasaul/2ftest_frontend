interface Pizza {
  id: string;
  name: string;
  cover: string;
  toppings: string[];
  price: number;
}

type GetPizzasResponse = Pizza[];
