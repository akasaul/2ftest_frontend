interface Restaurant {
  id: number;
  name: string;
  logo: string;
  orederCount: number;
}

export type GetTopRestaurantsResponse  = Restaurant[]
