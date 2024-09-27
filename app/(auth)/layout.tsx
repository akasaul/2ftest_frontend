import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
          alignItems: "center",
          background: "#FF9921",
          color: "var(--mui-palette-common-white)",
          display: { xs: "none", lg: "flex" },
          justifyContent: "center",
          p: 3,
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography
              color="inherit"
              sx={{ fontSize: "24px", lineHeight: "32px", textAlign: "center" }}
              variant="h1"
            >
              Niko
            </Typography>
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
