type User = {
  id: number;
  email: string;
  token: string;
  firstName: string;
  lastName: string;
};
export interface SignInRespose {
  user: User;
  restaurantId?: number;
}

export interface SignUpRestaurantResponse {
  user: {
    user: User;
  };
}

export interface SignUpResponse {
  user: User
}
