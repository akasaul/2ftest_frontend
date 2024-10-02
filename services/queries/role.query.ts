import { useQuery } from "@tanstack/react-query";
import { getRoles } from "../api/role.service";
import { GetRoleProps } from "../types/role.type";

export const useGetRoles = (props: GetRoleProps) =>
  useQuery({
    queryKey: ["getRoles"],
    queryFn: () => getRoles(props),
  });
