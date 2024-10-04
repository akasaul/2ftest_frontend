import { api } from "@/lib/api";
import { z } from "zod";
import {
  createRoleSchema,
  assignRoleSchema,
  assignPermisionSchema,
} from "@/schmas/role.schema";
import { GetRoleProps, GetRolesResponse } from "../types/role.type";
import { paths } from "@/configs/paths";

export const createRole = async (
  roleBody: z.infer<typeof createRoleSchema>,
) => {
  const response = await api.post(paths.role.create, roleBody);
  return response;
};

interface UpdateRolesBody {
  roleId: number;
  isActive: boolean;
}

export const updateRole = async (updateRolesBody: UpdateRolesBody) => {
  const response = await api.put(
    `${paths.order.update}/${updateRolesBody.roleId}`,
    updateRolesBody.isActive,
  );
  return response;
};

export const assignRole = async (
  roleBody: z.infer<typeof assignRoleSchema>,
) => {
  const response = await api.put(paths.role.assign, roleBody);
  return response;
};

export const assignPermissions = async (
  permissionsBody: z.infer<typeof assignPermisionSchema>,
) => {
  const response = await api.put(paths.role.assign, permissionsBody);
  return response;
};

export const getRoles = async ({
  pageSize,
  pageIndex,
  globalFilter,
}: GetRoleProps) => {
  const response = await api.get<GetRolesResponse>(paths.role.get, {
    params: {
      limit: pageSize,
      page: pageIndex + 1,
      search: globalFilter,
    },
  });
  return response;
};
