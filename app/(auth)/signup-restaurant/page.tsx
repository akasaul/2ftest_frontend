"use client";

import * as React from "react";
import RouterLink from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Eye as EyeIcon } from "@phosphor-icons/react/dist/ssr/Eye";
import { EyeSlash as EyeSlashIcon } from "@phosphor-icons/react/dist/ssr/EyeSlash";
import { Controller, useForm } from "react-hook-form";
import { z as zod } from "zod";
import { styled } from "@mui/material/styles";
import { useSignUpRestaurant } from "@/services/mutations/auth.mutations";
import { useAuth } from "@/providers/AuthProvider";

import { signUpRestaurantSchema } from "@/schmas/auth";
import { paths } from "@/paths";

type Values = zod.infer<typeof signUpRestaurantSchema>;

const SignUpRestaurant = () => {
  const [isPending] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>();
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState<boolean>();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(signUpRestaurantSchema),
  });

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const { mutateAsync: signUpRestaurant } = useSignUpRestaurant();

  const { login } = useAuth();

  const onSubmit = async (values: Values) => {
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("name", values.restaurantName);
    formData.append("location", values.location);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("logo", values.logo);

    const {
      data: { user },
    } = await signUpRestaurant(formData);
    login(user.user.token, "restaurant");
  };

  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h4">Pizza</Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <FormControl error={Boolean(errors.firstName)}>
                <InputLabel>First name</InputLabel>
                <OutlinedInput {...field} label="First name" />
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
              <FormControl error={Boolean(errors.firstName)}>
                <InputLabel>Last name</InputLabel>
                <OutlinedInput {...field} label="Last name" />
                {errors.firstName ? (
                  <FormHelperText>{errors.firstName.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <FormControl error={Boolean(errors.email)}>
                <InputLabel>Email address</InputLabel>
                <OutlinedInput {...field} label="Email address" type="email" />
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
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  {...field}
                  endAdornment={
                    showPassword ? (
                      <EyeIcon
                        cursor="pointer"
                        fontSize="var(--icon-fontSize-md)"
                        onClick={(): void => {
                          setShowPassword(false);
                        }}
                      />
                    ) : (
                      <EyeSlashIcon
                        cursor="pointer"
                        fontSize="var(--icon-fontSize-md)"
                        onClick={(): void => {
                          setShowPassword(true);
                        }}
                      />
                    )
                  }
                  label="Password"
                  type={showPassword ? "text" : "password"}
                />
                {errors.password ? (
                  <FormHelperText>{errors.password.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <FormControl error={Boolean(errors.confirmPassword)}>
                <InputLabel>Confirm password</InputLabel>
                <OutlinedInput
                  {...field}
                  endAdornment={
                    showConfirmPassword ? (
                      <EyeIcon
                        cursor="pointer"
                        fontSize="var(--icon-fontSize-md)"
                        onClick={(): void => {
                          setShowConfirmPassword(false);
                        }}
                      />
                    ) : (
                      <EyeSlashIcon
                        cursor="pointer"
                        fontSize="var(--icon-fontSize-md)"
                        onClick={(): void => {
                          setShowConfirmPassword(true);
                        }}
                      />
                    )
                  }
                  label="Confirm password"
                  type={showConfirmPassword ? "text" : "password"}
                />
                {errors.confirmPassword ? (
                  <FormHelperText>
                    {errors.confirmPassword.message}
                  </FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <FormControl error={Boolean(errors.phoneNumber)}>
                <InputLabel>Phone number</InputLabel>
                <OutlinedInput {...field} label="Phone number" type={"text"} />
                {errors.phoneNumber ? (
                  <FormHelperText>{errors.phoneNumber.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="restaurantName"
            render={({ field }) => (
              <FormControl error={Boolean(errors.restaurantName)}>
                <InputLabel>Restaurant name</InputLabel>
                <OutlinedInput
                  {...field}
                  label="Restaurant name"
                  type={"text"}
                />
                {errors.restaurantName ? (
                  <FormHelperText>
                    {errors.restaurantName.message}
                  </FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="location"
            render={({ field }) => (
              <FormControl error={Boolean(errors.location)}>
                <InputLabel>Location</InputLabel>
                <OutlinedInput {...field} label="Location" type={"text"} />
                {errors.location ? (
                  <FormHelperText>{errors.location.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name={"logo"}
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <div>
                <Button
                  sx={{
                    border: "2px dashed #bfbfbf",
                    backgroundColor: "transparent",
                    color: "#ff9800",
                    textTransform: "none",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "100%",
                    padding: "20px",
                    height: "56px",
                    "&:hover": {
                      backgroundColor: "#fff7e6",
                    },
                  }}
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                >
                  <img
                    src="/icons/upload.svg"
                    alt="Upload Logo"
                    style={{
                      marginRight: "8px",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <h6>
                    {getValues("logo") ? getValues("logo").name : "Upload Logo"}
                  </h6>
                  <VisuallyHiddenInput
                    type="file"
                    {...fieldProps}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(event) =>
                      onChange(event.target.files && event.target.files[0])
                    }
                  />
                </Button>

                {errors.logo ? (
                  <FormHelperText color="red">
                    {errors.logo.message}
                  </FormHelperText>
                ) : null}
              </div>
            )}
          />

          <Controller
            control={control}
            name="terms"
            render={({ field }) => (
              <div>
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label={
                    <Typography variant="body1">
                      I accept the Terms and Conditions
                    </Typography>
                  }
                />
                {errors.terms ? (
                  <FormHelperText error>{errors.terms.message}</FormHelperText>
                ) : null}
              </div>
            )}
          />
          <Button
            disabled={isPending}
            type="submit"
            variant="contained"
            sx={{ height: "42px" }}
          >
            Sign up
          </Button>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              component={RouterLink}
              href={paths.auth.signIn}
              underline="hover"
            >
              Login
            </Link>
          </Typography>
        </Stack>
      </form>
    </Stack>
  );
};

export default SignUpRestaurant;
