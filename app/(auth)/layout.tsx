import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: { xs: "flex", lg: "grid" },
        flexDirection: "column",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          background: "#FF9921",
          color: "var(--mui-palette-common-white)",
          display: { xs: "none", lg: "flex" },
          p: 3,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            height: "100vh",
            width: '100%',
          alignItems: "center",
          justifyContent: "center",
          }}
        >
          <Stack spacing={1}>
            <img src={"/icons/pizzaOnly.svg"} height={70} width={70} />
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "center",
          // p: 3,
        }}
      >
        <Box sx={{ maxWidth: "450px", width: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
