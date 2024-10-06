"use client";

import PizzaLoader from "@/components/ui/Loader";
import { createRoleSchema } from "@/schmas/role.schema";
import { useCreateRole } from "@/services/mutations/role.mutations";
import { useGetAllPermissions } from "@/services/queries/role.query";
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
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  handleClose: () => void;
}

const AddRoleForm = ({ handleClose }: Props) => {
  const { data, isLoading } = useGetAllPermissions();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof createRoleSchema>>({
    resolver: zodResolver(createRoleSchema),
  });

  type Values = z.infer<typeof createRoleSchema>;

  const { mutateAsync: createRole } = useCreateRole();

  const onSubmit = async (values: Values) => {
    await createRole(values);
    handleClose();
  };

  if (isLoading) return <PizzaLoader />;

  return (
    <Stack>
      <Typography
        variant="h5"
        color={"#525256"}
        fontWeight={500}
        lineHeight={1.2}
        textAlign={"center"}
      >
        Add Role
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
              {data?.data?.map((topping) => (
                <Grid item xs={6} key={topping.id}>
                  <Controller
                    name="permissions"
                    control={control}
                    render={() => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
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

export default AddRoleForm;
