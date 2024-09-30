import { Box } from "@mui/material";
import PopularPizzas from "./PopularPizzas";
import PopularRestaurants from "./PopularRestaurants";
import FeaturedPizzas from "./FeaturedPizzas";
import Hero from "./Hero";

const Home = () => {
  return (
    <Box bgcolor={"#FFF8F1"} height={"100vh"}>
      {/* <Hero /> */}
      {/* {/* <FeaturedPizzas /> */}
      <PopularRestaurants />
      {/* <PopularPizzas /> */}
    </Box>
  );
};

export default Home;
