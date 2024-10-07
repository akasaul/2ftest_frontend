"use client";

import { createPizzaSchema } from "@/schmas/pizza.schema";
import { useCreatePizza } from "@/services/mutations/pizza.mutations";
import { useGetRestaurantToppings } from "@/services/queries/toppings.query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Stack,
  Typography,
  Grid,
  Checkbox,
  Button,
  styled,
  FormHelperText,
  Modal,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import AddToppingForm from "./addToppingForm";
import { toast } from "react-toastify";

const AddMenuForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof createPizzaSchema>>({
    resolver: zodResolver(createPizzaSchema),
  });

  type Values = z.infer<typeof createPizzaSchema>;
  const { data, refetch } = useGetRestaurantToppings();

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

  const { mutateAsync: createPizza } = useCreatePizza();

  const [open, setOpen] = useState(false);

  const onSubmit = async (values: Values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price.toString());
    formData.append("pizzaCover", values.pizzaCover);
    formData.append("toppings", JSON.stringify(values.toppings));

    await createPizza(formData);
    toast.success('Pizza created succesfully');
  };

  const handleClose = () => {
    setOpen(false);
    refetch();
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
        Add Menu
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
              Topping
            </Typography>
            <Grid container spacing={1} marginBlock={1}>
              {data?.data?.map((topping) => (
                <Grid item xs={6} key={topping.id}>
                  <Controller
                    name="toppings"
                    control={control}
                    render={() => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={() => {
                                setValue("toppings", [
                                  ...data?.data?.map((top) => top.id),
                                  topping.id,
                                ]);
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
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: "74px",
                  height: "44px",
                }}
                onClick={() => setOpen(true)}
              >
                <Add /> Add
              </Button>
            </Grid>

            {errors.toppings && (
              <FormHelperText>{errors.toppings.message}</FormHelperText>
            )}
          </Stack>

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
                {errors.name ? (
                  <FormHelperText>{errors.name.message}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name={"pizzaCover"}
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
                    alt="Upload pizza cover"
                    style={{
                      marginRight: "8px",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <h6>
                    {getValues("pizzaCover")
                      ? getValues("pizzaCover").name
                      : "Upload Pizza cover"}
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

                {errors.pizzaCover ? (
                  <FormHelperText color="red">
                    {errors.pizzaCover.message}
                  </FormHelperText>
                ) : null}
              </div>
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "none",
            borderRadius: "20px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <AddToppingForm handleClose={handleClose} />
        </Box>
      </Modal>
    </Stack>
  );
};

export default AddMenuForm;
