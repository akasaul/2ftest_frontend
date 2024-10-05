import { AbilityBuilder, Ability, AbilityClass } from "@casl/ability";
import { Permission } from "@/services/types/role.type";

export type Actions =
  | "manage"
  | "create"
  | "read"
  | "update"
  | "delete"
  | "manageRole";
export type Subjects = "all" | "Post" | "Comment" | "User" | "Role" | "Order";

export type AppAbility = Ability<[Actions, Subjects]>;

export const defineAbilityFor = (permissions: Permission[]) => {
  const { can, build } = new AbilityBuilder<Ability<[Actions, Subjects]>>(
    Ability as AbilityClass<AppAbility>,
  );

  permissions.forEach((permission) => {
    can(permission.action as Actions, permission.subject as Subjects);
  });

  return build();
};
