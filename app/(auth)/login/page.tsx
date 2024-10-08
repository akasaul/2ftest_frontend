"use client";

import * as React from "react";
import RouterLink from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
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

import { signInSchema } from "@/schmas/auth";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useSignIn } from "@/services/mutations/auth.mutations";
import { useAuth } from "@/providers/AuthProvider";
import useToast from "@/hooks/useToast";
import { paths } from "@/configs/paths";

type Values = zod.infer<typeof signInSchema>;

const defaultValues: Values = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(signInSchema) });

  const {
    mutateAsync: signIn,
    isPending,
    error,
    isError,
    isSuccess,
  } = useSignIn();

  const { login } = useAuth();

  useToast({
    isLoading: isPending,
    isSuccess,
    isError,
    errors: error && [(error as any).response.data],
    successMessage: "Succesfully Logged In!",
  });

  const onSubmit = async (values: Values): Promise<void> => {
    const { data } = await signIn(values);
    login(data.user.token, data.restaurantId ? "restaurant" : "customer");
  };

  return (
    <Stack spacing={4} justifyContent={"center"}>
      <Stack spacing={1}>
        <Typography variant="h6">Login</Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
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
            name="rememberMe"
            render={({ field }) => (
              <div>
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label={<Typography variant="body1">Remember Me</Typography>}
                />
                {errors.rememberMe ? (
                  <FormHelperText error>
                    {errors.rememberMe.message}
                  </FormHelperText>
                ) : null}
              </div>
            )}
          />

          {errors.root ? (
            <Alert color="error">{errors.root.message}</Alert>
          ) : null}
          <Button
            disabled={isPending}
            type="submit"
            variant="contained"
            sx={{ height: "42px" }}
          >
            LOGIN
          </Button>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Have not an account?{" "}
            <Link
              component={RouterLink}
              href={paths.auth.signUp}
              underline="hover"
            >
              Sign up
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Are you a restaurant?{" "}
            <Link
              component={RouterLink}
              href={paths.auth.signUpRestaurant}
              underline="hover"
            >
              Register
            </Link>
          </Typography>
        </Stack>
      </form>
    </Stack>
  );
};

export default Login;
