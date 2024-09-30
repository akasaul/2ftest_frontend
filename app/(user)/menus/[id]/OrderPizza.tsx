"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetPizzaDetailsResponse, PizzaDetailsTopping } from "@/services/types/pizza.type";

const pizzaSchema = z.object({
  toppings: z.array(z.number()).min(1, "Please select at least one topping"),
  quantity: z
    .number()
    .min(1, "Quantity must be at least 1")
    .max(10, "You cannot order more than 10 pizzas"),
});

type PizzaFormData = z.infer<typeof pizzaSchema>;

const toppingsFromBackend = [
  { name: "Mozzarella", id: 1, isSelected: true },
  { name: "Tomato", id: 2 },
  { name: "Bell Peppers", id: 3 },
  { name: "Onions", id: 4 },
  { name: "Olives", id: 5 },
];

interface OrderPizzaProps {
  pizzaDetails: GetPizzaDetailsResponse;
}

const OrderPizza = ({ pizzaDetails }: OrderPizzaProps) => {
  const [price] = useState(150);
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PizzaFormData>({
    resolver: zodResolver(pizzaSchema),
    defaultValues: {
      toppings: pizzaDetails.toppings
        .filter((topping) => topping.isDefault)
        .map((topping) => topping.id),
      quantity: 1,
    },
  });

  const onSubmit = (data: PizzaFormData) => {
    console.log("Order submitted", data);
  };

  const quantity = watch("quantity");

  const handleToppingChange = (toppingId: number, isChecked: boolean) => {
    const currentToppings = watch("toppings");

    if (isChecked) {
      setValue("toppings", [...currentToppings, toppingId]);
    } else {
      setValue(
        "toppings",
        currentToppings.filter((topping) => topping !== toppingId),
      );
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        sx={{ fontSize: "70px", fontWeight: "700", marginBottom: "30px" }}
      >
        Margherita
      </Typography>

      <Grid container spacing={1}>
        {toppingsFromBackend.map((topping) => (
          <Grid item xs={6} key={topping.id}>
            <Controller
              name="toppings"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={field.value.includes(topping.id)}
                      onChange={(e) =>
                        handleToppingChange(topping.id, e.target.checked)
                      }
                    />
                  }
                  label={topping.name}
                />
              )}
            />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "20px 0",
          gap: "50px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton
            onClick={() => setValue("quantity", Math.max(quantity - 1, 1))}
            sx={{
              border: "2px solid #FF8100",
              borderRadius: "7px",
              padding: "5px",
              height: "40px",
              width: "45px",
              marginRight: "10px",
              color: "#000",
            }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="body2" sx={{ margin: "0 10px" }}>
            {quantity}
          </Typography>
          <IconButton
            onClick={() => setValue("quantity", Math.min(quantity + 1, 10))}
            sx={{
              border: "2px solid #FF8100",
              borderRadius: "7px",
              padding: "5px",
              height: "40px",
              width: "45px",
              marginLeft: "10px",
              color: "#000",
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Typography
          sx={{ fontSize: "45px" }}
          fontWeight={"bold"}
          color="secondary"
        >
          {price * quantity}
        </Typography>
      </Box>

      {errors.quantity && (
        <Typography color="error" variant="body2">
          {errors.quantity.message}
        </Typography>
      )}

      {errors.toppings && (
        <Typography color="error" variant="body2">
          Please select at least one topping.
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          padding: "10px 20px",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "20px",
        }}
        disableElevation
        onClick={handleSubmit(onSubmit)}
      >
        Order
        <img src={"/icons/orderIcon.svg"} />
      </Button>
    </Box>
  );
};

export default OrderPizza;
