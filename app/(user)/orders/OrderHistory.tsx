"use client";

import PizzaCard from "@/components/ui/PizzaCard";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import PizzaLoader from "@/components/ui/Loader";
import { useGetMyOrders } from "@/services/queries/order.query";
import OrderCard from "./OrderCard";

const OrderHistory = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetMyOrders();
  return (
    <Stack
      sx={{
        padding: "50px",
      }}
    >
      <Typography
        variant="h2"
        marginBottom={"30px"}
        fontWeight={500}
        sx={{
          opacity: 0.5,

          fontSize: {
            xs: theme.typography.h4.fontSize,
            sm: theme.typography.h3.fontSize,
            md: theme.typography.h2.fontSize,
          },
        }}
      >
        Order History
      </Typography>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "300px",
            width: "100%",
          }}
        >
          <PizzaLoader />
          <PizzaLoader />
        </Box>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr  1fr", lg: "1fr 1fr 1fr" },
          rowGap: "40px",
          columnGap: "40px",
        }}
      >
        {data?.data?.length == 0 && <p>No orders yet</p>}
        {data?.data?.map((pizza) => (
          <OrderCard
            key={pizza.id}
            image={pizza.pizzaCover}
            name={pizza.pizzaName}
            description={pizza.toppings.join(", ")}
            price={pizza.price}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default OrderHistory;
