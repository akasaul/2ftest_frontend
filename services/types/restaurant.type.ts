import { MRT_ColumnFiltersState } from "material-react-table";

interface Restaurant {
  id: number;
  name: string;
  logo: string;
  orederCount: number;
}

export type GetTopRestaurantsResponse = Restaurant[];

export interface RestaurantUser {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
}

export type GetResetaurantUsers = {
  users: RestaurantUser[];
  pagination: { limit: number; page: number; rowCount: number };
};

export interface GetRestaurantUsersProps {
  pageIndex: number;
  pageSize: number;
  columnFilters: MRT_ColumnFiltersState;
  globalFilter: string;
}
