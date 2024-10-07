import { useMutation } from "@tanstack/react-query";
import {
  createRole,
  updateRole,
  assignRole,
  assignPermissions,
  changeUserActvity,
  deleteRestaurantUser,
  deleteRole,
} from "../api/role.service";

export const useCreateRole = () =>
  useMutation({
    mutationKey: ["createRole"],
    mutationFn: createRole,
  });

export const useUpdateRole = () =>
  useMutation({
    mutationKey: ["updateRole"],
    mutationFn: updateRole,
  });

export const useChangeUserActivity = () =>
  useMutation({
    mutationKey: ["changeUserActivity"],
    mutationFn: changeUserActvity,
  });


export const useDeleteRestaurantUser = () =>
  useMutation({
    mutationKey: ["deleteRestaurantUser"],
    mutationFn: deleteRestaurantUser,
  });

export const useDeleteRole = () =>
  useMutation({
    mutationKey: ["deleteRole"],
    mutationFn: deleteRole,
  });

export const useAssignRole = () =>
  useMutation({
    mutationKey: ["assignRole"],
    mutationFn: assignRole,
  });

export const useAssignPermissions = () =>
  useMutation({
    mutationKey: ["assignPermissions"],
    mutationFn: assignPermissions,
  });
