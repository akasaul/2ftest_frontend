import { Box } from "@mui/material";
import PopularPizzas from "./_components/PopularPizzas";
import PopularRestaurants from "./_components/PopularRestaurants";
import FeaturedPizzas from "./_components/FeaturedPizzas";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";

const Home = () => {
  return (
    <Box bgcolor={"#FFF9F1"} height={"100vh"}>
      <Hero />
      <FeaturedPizzas />
      <PopularRestaurants />
      <PopularPizzas />
      <Footer />
    </Box>
  );
};

export default Home;
