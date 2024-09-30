import { useMutation } from "@tanstack/react-query";
import {
  createRole,
  updateRole,
  assignRole,
  assignPermissions,
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
