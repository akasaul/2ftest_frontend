"use client";

import PizzaLoader from "@/components/ui/Loader";
import { useAuth } from "@/providers/AuthProvider";
import { Can } from "@casl/react";
import { Box } from "@mui/material";

const OrdersLayout = ({ children }: { children: React.ReactNode }) => {
  const { ability } = useAuth();

  if (!ability) {
    return (
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
    );
  }

  return (
    <Can I={"read"} a={"Order"} ability={ability}>
      {children}
    </Can>
  );
};

export default OrdersLayout;
