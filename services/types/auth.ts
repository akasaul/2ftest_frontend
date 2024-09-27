export interface SignInRespose {
  user: {
    id: number;
    email: string;
    token: string;
    firstName: string;
    lastName: string;
  };
  restaurantId?: number;
}
