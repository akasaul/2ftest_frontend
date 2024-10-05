export const paths = {
  home: "/home",
  auth: {
    signIn: "/login",
    signUp: "/signup",
    signUpRestaurant: "/signup-restaurant",
  },
  order: {
    create: "/orders",
    update: "/orders",
    get: "/orders",
    restaurant: "/orders/restaurant",
    my: "/orders/my",
    restaurantOrders: "/orders/restaurant",
    details: "/orders",
  },
  owner: {
    dashboard: "/dashboard",
  },
  menus: {
    home: "/menus",
  },
  role: {
    get: "/roles",
    myPermissions: "/roles/my-permissions",
    update: "/roles",
    create: "/roles",
    assign: "/roles/assign",
  },
  toppings: {
    create: "/toppings",
    getRestaurant: "/toppings/restaurant",
  },
  restuarants: {
    top: "/restaurants/top",
    users: "/restaurants/users",
  },
  user: {
    home: "/home",
  },
  pizza: {
    popular: "/pizzas/popular",
    create: "/pizzas",
    get: "/pizzas",
  },
  dashboard: {
    home: "/dashboard",
    roles: "/dashboard/roles",
    users: "/dashboard/users",
    orders: "/dashboard",
    addMenu: "/dashboard/add-menu",
  },
};
