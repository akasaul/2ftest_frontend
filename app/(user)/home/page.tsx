import PizzaCard from "@/components/ui/PizzaCard";
import { Box, Grid } from "@mui/material";

const Home = () => {
  return (
    <Box bgcolor={"#FFF8F1"} height={"100vh"} paddingInline={"80px"}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "40px",
          columnGap: "40px",
        }}
      >
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </Box>
    </Box>
  );
};

export default Home;
