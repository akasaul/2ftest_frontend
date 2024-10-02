interface Restaurant {
  id: number;
  name: string;
  logo: string;
  orederCount: number;
}

export type GetTopRestaurantsResponse = Restaurant[];

interface Role {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: string;
}

export interface GetRoleProps {
  limit: number;
  page: number;
}

export type GetRolesResponse = {
  data: Role[];
  pagination: {
    page: number;
    limit: number;
  };
};
