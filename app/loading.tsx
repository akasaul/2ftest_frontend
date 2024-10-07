import PizzaLoader from "@/components/ui/Loader";
import { Box } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: '100%'
    }}>
      <PizzaLoader />
    </Box>
  );
};

export default Loading;
