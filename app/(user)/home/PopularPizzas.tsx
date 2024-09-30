"use client";

import { useGetPopularPizzas } from "@/services/queries/pizza.query";
import PizzaCard from "@/components/ui/PizzaCard";
import { Box, Stack, Typography } from "@mui/material";

const PopularPizzas = () => {
  // const { data, isLoading, error } = useGetPopularPizzas();
  return (
    <Stack sx={{
      padding: "50px",
    }}>
      <Typography
        variant="h2"
        marginBottom={"30px"}
        fontWeight={500}
        sx={{ opacity: 0.5 }}
      >Popular Pizzas</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "40px",
          columnGap: "40px",
        }}
      >
        <PizzaCard
          image="/pizzaCard.png"
          name="Margarita"
          description="Tomato, Mozzerella, Bell Peppers, Onions Olives"
          price={150}
          restaurantName="Azmera Pizza"
          restaurantImage="userPH.jpeg"
        />
        <PizzaCard
          image="/pizzaCard.png"
          name="Margarita"
          description="Tomato, Mozzerella, Bell Peppers, Onions Olives"
          price={150}
          restaurantName="Azmera Pizza"
          restaurantImage="userPH.jpeg"
        />

        <PizzaCard
          image="/pizzaCard.png"
          name="Margarita"
          description="Tomato, Mozzerella, Bell Peppers, Onions Olives"
          price={150}
          restaurantName="Azmera Pizza"
          restaurantImage="userPH.jpeg"
        />


        <PizzaCard
          image="/pizzaCard.png"
          name="Margarita"
          description="Tomato, Mozzerella, Bell Peppers, Onions Olives"
          price={150}
          restaurantName="Azmera Pizza"
          restaurantImage="userPH.jpeg"
        />

        <PizzaCard
          image="/pizzaCard.png"
          name="Margarita"
          description="Tomato, Mozzerella, Bell Peppers, Onions Olives"
          price={150}
          restaurantName="Azmera Pizza"
          restaurantImage="userPH.jpeg"
        />

        <PizzaCard
          image="/pizzaCard.png"
          name="Margarita"
          description="Tomato, Mozzerella, Bell Peppers, Onions Olives"
          price={150}
          restaurantName="Azmera Pizza"
          restaurantImage="userPH.jpeg"
        />
        {/* {isLoading && <Box>Loading...</Box>} */}
        {/* {data?.map((pizza) => <PizzaCard key={pizza.id} />)} */}
      </Box>
    </Stack>
  );
};

export default PopularPizzas;
