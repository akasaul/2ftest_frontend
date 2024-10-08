import { z } from "zod";

export const createRoleSchema = z.object({
  name: z.string().min(5),
  permissions: z.array(z.number()),
});

export const assignRoleSchema = z.object({
  userId: z.number().min(1),
  roleId: z.number().min(1),
});

export const getRolesSchema = z.object({
  isActive: z.enum(["true", "false"]).optional(),
  search: z.string().optional(),
});

export const getRolePermissionsSchema = z.object({
  roleId: z.string(),
});

export const assignPermisionSchema = z.object({
  roleId: z.number().min(1),
  permissions: z.array(z.number()).optional(),
  name: z.string().optional(),
});
