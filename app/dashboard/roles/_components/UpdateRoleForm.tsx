"use client";

import { createRoleSchema } from "@/schmas/role.schema";
import { useAssignPermissions } from "@/services/mutations/role.mutations";
import { useGetRolePermissions } from "@/services/queries/role.query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Button,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  handleClose: () => void;
  id: number;
}

const UpdateRoleForm = ({ handleClose, id }: Props) => {
  const { data } = useGetRolePermissions(id);

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof createRoleSchema>>({
    resolver: zodResolver(createRoleSchema),
    defaultValues: {
      name: data?.data?.name,
      permissions: data?.data?.permissions
        ?.filter((permission) => permission.isSelected)
        .map((perm) => perm.id),
    },
  });

  useEffect(() => {
    if (data?.data) {
      console.log("new data");
      reset({
        name: data.data.name || "",
        permissions:
          data.data.permissions
            .filter((permission) => permission.isSelected)
            .map((perm) => perm.id) || [],
      });
    }
  }, [data, reset]);

  type Values = z.infer<typeof createRoleSchema>;

  const { mutateAsync: updatePermissions } = useAssignPermissions();

  const onSubmit = async (values: Values) => {
    await updatePermissions({
      name: values.name,
      roleId: id,
      permissions: values.permissions,
    });
    handleClose();
  };

  return (
    <Stack>
      <Typography
        variant="h5"
        color={"#525256"}
        fontWeight={500}
        lineHeight={1.2}
        textAlign={"center"}
      >
        Update Role
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={"20px"} marginBlock={"30px"}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <FormControl error={Boolean(errors.name)}>
                <InputLabel>Name</InputLabel>
                <OutlinedInput {...field} label="Name" type="text" />
                {errors.name ? (
                  <FormHelperText>{errors.name.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Stack>
            <Typography
              variant="h5"
              color={"#00000080"}
              fontWeight={500}
              lineHeight={1.2}
            >
              Permissions
            </Typography>
            <Grid container spacing={1} marginBlock={1}>
              {data?.data?.permissions.map((topping) => (
                <Grid item xs={6} sm={4} key={topping.id}>
                  <Controller
                    name="permissions"
                    control={control}
                    render={() => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked={topping.isSelected}
                              onChange={() => {
                                const currentPermissions =
                                  getValues("permissions") || [];
                                const newPermission = topping.id;

                                if (
                                  !currentPermissions.includes(newPermission)
                                ) {
                                  setValue("permissions", [
                                    ...currentPermissions,
                                    newPermission,
                                  ]);
                                } else {
                                  setValue(
                                    "permissions",
                                    currentPermissions.filter(
                                      (permission) =>
                                        permission !== newPermission,
                                    ),
                                  );
                                }
                              }}
                            />
                          }
                          label={topping.name}
                        />
                      );
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            {errors.permissions && (
              <FormHelperText>{errors.permissions.message}</FormHelperText>
            )}
          </Stack>
        </Stack>

        <Button
          type="submit"
          variant="contained"
          sx={{
            height: "65px",
            borderRadius: "25px",
            width: "300px",
            textTransform: "capitalize",
          }}
          disableElevation
        >
          Submit
        </Button>
      </form>
    </Stack>
  );
};

export default UpdateRoleForm;
