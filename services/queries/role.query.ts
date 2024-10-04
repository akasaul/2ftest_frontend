import { useQuery } from "@tanstack/react-query";
import { getRoles } from "../api/role.service";
import { GetRoleProps } from "../types/role.type";

export const useGetRoles = (props: GetRoleProps) =>
  useQuery({
    queryKey: ["getRoles", props.pageIndex, props.pageSize, props.globalFilter],
    queryFn: () => getRoles(props),
  });
