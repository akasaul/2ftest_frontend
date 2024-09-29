"use client";

import { useGetPopularPizzas } from "@/services/queries/pizza.query";
import PizzaCard from "@/components/ui/PizzaCard";
import { Box } from "@mui/material";

const PopularPizzas = () => {
  // const { data, isLoading, error } = useGetPopularPizzas();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        rowGap: "40px",
        columnGap: "40px",
      }}
    >
      <PizzaCard
        image="/vipPIzza.png"
        name="Margarita"
        description="Tomato, Mozzerella, Bell Peppers, Onions Olives"
        price={150}
        restaurantName="Azmera Pizza"
        restaurantImage="userPH.jpeg"
      />
      <PizzaCard
        image="/vipPIzza.png"
        name="Margarita"
        description="Tomato, Mozzerella, Bell Peppers, Onions Olives"
        price={150}
        restaurantName="Azmera Pizza"
        restaurantImage="userPH.jpeg"
      />

      <PizzaCard
        image="/vipPIzza.png"
        name="Margarita"
        description="Tomato, Mozzerella, Bell Peppers, Onions Olives"
        price={150}
        restaurantName="Azmera Pizza"
        restaurantImage="userPH.jpeg"
      />

      {/* {isLoading && <Box>Loading...</Box>} */}
      {/* {data?.map((pizza) => <PizzaCard key={pizza.id} />)} */}
    </Box>
  );
};

export default PopularPizzas;
