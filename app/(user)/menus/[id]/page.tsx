"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import OrderPizza from "./OrderPizza";
import PopularPizzas from "../../home/PopularPizzas";
import { useGetPizzaDetails } from "@/services/queries/pizza.query";
import PizzaLoader from "@/components/ui/Loader";

const MenuDetails = ({ params: { id } }: { params: { id: number } }) => {
  const { data,  isFetched } = useGetPizzaDetails(id);
  return (
    <Box sx={{ p: 5 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", sm: "center" }}
        spacing={5}
        justifyContent={{ xs: "center" }}
      >
        <Stack sx={{ flex: 3 }}>
          <img
            src="https://picsum.photos/200/200"
            alt="pizza"
            style={{
              height: "400px",
              borderRadius: "50px",
              objectFit: "cover",
            }}
          />
        </Stack>

        <Stack sx={{ flex: 2 }}>
          {isFetched && data?.data ? (
            <OrderPizza pizzaDetails={data.data} />
          ) : (
            <PizzaLoader />
          )}
        </Stack>
      </Stack>
      <PopularPizzas />
    </Box>
  );
};

export default MenuDetails;
