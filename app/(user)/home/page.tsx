import { Box } from "@mui/material";
import PopularPizzas from "./PopularPizzas";
import PopularRestaurants from "./PopularRestaurants";
import FeaturedPizzas from "./FeaturedPizzas";

const Home = () => {
  return (
    <Box bgcolor={"#FFF8F1"} height={"100vh"} paddingInline={"80px"}>
      <FeaturedPizzas />
      {/* <PopularRestaurants /> */}
      {/* <PopularPizzas /> */}
    </Box>
  );
};

export default Home;
