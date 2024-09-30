"use client";

import * as React from "react";
import RouterLink from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
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
import { useAuth } from "@/providers/AuthProvider";

import { signUpSchema } from "@/schmas/auth";
import { paths } from "@/paths";
import { useSignUp } from "@/services/mutations/auth.mutations";

type Values = zod.infer<typeof signUpSchema>;

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>();
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState<boolean>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(signUpSchema) });

  const { isPending, isError, error, mutateAsync: signUp } = useSignUp();
  const { login } = useAuth();

  const onSubmit = async (values: Values) => {
    const { data } = await signUp(values);
    login(data.user.token, "customer");
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

          {isError && <Alert severity="error">{error.message}</Alert>}

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

export default SignUp;
