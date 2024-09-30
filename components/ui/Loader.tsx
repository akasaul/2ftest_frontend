import React from "react";
import { Box, keyframes } from "@mui/material";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const PizzaLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="/icons/pizzaOnly.svg"
        alt="Pizza loader"
        sx={{
          width: "100px",
          height: "100px",
          animation: `${spin} 2s linear infinite`,
        }}
      />
    </Box>
  );
};

export default PizzaLoader;
