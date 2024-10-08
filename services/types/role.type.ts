import { MRT_ColumnFiltersState, MRT_SortingState } from "material-react-table";

interface Restaurant {
  id: number;
  name: string;
  logo: string;
  orederCount: number;
}

export type GetTopRestaurantsResponse = Restaurant[];

export interface Role {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: string;
}

export interface GetRoleProps {
  pageIndex: number;
  pageSize: number;
  columnFilters: MRT_ColumnFiltersState;
  globalFilter: string;
}

export interface GetRestaurantRoleProps {
  pageIndex: number;
  pageSize: number;
}

export interface Permission {
  id: number;
  name: string;
  action: string;
  subject: string;
}

export type GetMyPermissions = Permission[];

export type GetRolesResponse = {
  data: Role[];
  pagination: {
    page: number;
    limit: number;
    rowCount: number;
  };
};

export interface Permission {
  id: number;
  name: string;
  action: string;
  subject: string;
}

export type GetAllPermissions = Permission[];

export interface RolePermission {
  id: number;
  name: string;
  isSelected: boolean;
}

export type GetRolePermissions = {
  permissions: RolePermission[];
  name: string;
};
