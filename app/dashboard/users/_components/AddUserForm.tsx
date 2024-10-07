"use client";

import PizzaLoader from "@/components/ui/Loader";
import { registerRestaurantUserSchema } from "@/schmas/auth";
import { createRoleSchema } from "@/schmas/role.schema";
import { useRegisterRestaurantUser } from "@/services/mutations/auth.mutations";
import { useCreateRole } from "@/services/mutations/role.mutations";
import { useGetRestaurantRoles } from "@/services/queries/role.query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Button,
  FormHelperText,
  Select,
  MenuItem,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

interface Props {
  handleClose: () => void;
}

const AddUserForm = ({ handleClose }: Props) => {
  const { data, isLoading } = useGetRestaurantRoles({
    pageSize: 100,
    pageIndex: 0,
  });

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof registerRestaurantUserSchema>>({
    resolver: zodResolver(registerRestaurantUserSchema),
  });

  type Values = z.infer<typeof registerRestaurantUserSchema>;

  const { mutateAsync: registerRestuarantUser } = useRegisterRestaurantUser();

  const onSubmit = async (values: Values) => {
    try {
      await registerRestuarantUser(values);
      handleClose();
      toast.success(`User activity changed!`);
    } catch (err) {
      toast.error(`Phone Number is not unique!`);
    }
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
        Add User
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={"20px"} marginBlock={"30px"}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <FormControl error={Boolean(errors.firstName)}>
                <InputLabel>First Name</InputLabel>
                <OutlinedInput {...field} label="Last Name" type="text" />
                {errors.firstName ? (
                  <FormHelperText>{errors.firstName.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <FormControl error={Boolean(errors.lastName)}>
                <InputLabel>Last Name</InputLabel>
                <OutlinedInput {...field} label="Last Name" type="text" />
                {errors.lastName ? (
                  <FormHelperText>{errors.lastName.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <FormControl error={Boolean(errors.email)}>
                <InputLabel>Email</InputLabel>
                <OutlinedInput {...field} label="Email" type="email" />
                {errors.email ? (
                  <FormHelperText>{errors.email.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <FormControl error={Boolean(errors.password)}>
                <InputLabel>Email</InputLabel>
                <OutlinedInput {...field} label="Password" type="password" />
                {errors.password ? (
                  <FormHelperText>{errors.password.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <FormControl error={Boolean(errors.phoneNumber)}>
                <InputLabel>Phone Number</InputLabel>
                <OutlinedInput {...field} label="Phone Number" type="text" />
                {errors.phoneNumber ? (
                  <FormHelperText>{errors.phoneNumber.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <FormControl fullWidth>
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              label="Role"
              onChange={(e: any) => {
                setValue("role", e.target.value);
              }}
            >
              {data?.data?.data.map(({ name, id }) => (
                <MenuItem
                  key={id}
                  value={id}
                  sx={{ textTransform: "capitalize" }}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
        </Stack>
      </form>
    </Stack>
  );
};

export default AddUserForm;
