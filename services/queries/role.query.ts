import { useQuery } from "@tanstack/react-query";
import {
  getAllPermissions,
  getMyPermissions,
  getRestaurantRoles,
  getRolePermissions,
  getRoles,
} from "../api/role.service";
import { GetRestaurantRoleProps, GetRoleProps } from "../types/role.type";

export const useGetRoles = (props: GetRoleProps) =>
  useQuery({
    queryKey: ["getRoles", props.pageIndex, props.pageSize, props.globalFilter],
    queryFn: () => getRoles(props),
  });

export const useGetRestaurantRoles = (props: GetRestaurantRoleProps) =>
  useQuery({
    queryKey: ["getRestaurantRoles"],
    queryFn: () => getRestaurantRoles(props),
  });

export const useGetMyPermissions = () =>
  useQuery({
    queryKey: ["getMyPermissions"],
    queryFn: () => getMyPermissions(),
  });

export const useGetRolePermissions = (id: number) =>
  useQuery({
    queryKey: ["getRolePermissions", id],
    queryFn: () => getRolePermissions(id),
  });

export const useGetAllPermissions = () =>
  useQuery({
    queryKey: ["getAllPermissions"],
    queryFn: () => getAllPermissions(),
  });
