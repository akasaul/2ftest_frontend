"use client";

import { createToppingSchema } from "@/schmas/toppings.schema";
import { useCreateTopping } from "@/services/mutations/topping.mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Button,
  FormHelperText,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  handleClose: () => void;
}

const AddToppingForm = ({ handleClose }: Props) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof createToppingSchema>>({
    resolver: zodResolver(createToppingSchema),
  });

  type Values = z.infer<typeof createToppingSchema>;

  const { mutateAsync: createTopping } = useCreateTopping();

  const onSubmit = async (values: Values) => {
    await createTopping(values);
    handleClose()
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
        Add Topping
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

          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <FormControl error={Boolean(errors.price)}>
                <InputLabel>Price</InputLabel>
                <OutlinedInput
                  {...field}
                  onChange={(e) => setValue("price", parseInt(e.target.value))}
                  label="Price"
                  type="number"
                />
                {errors.price ? (
                  <FormHelperText>{errors.price.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />
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

export default AddToppingForm;
