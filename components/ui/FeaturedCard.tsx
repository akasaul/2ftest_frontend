import React from "react";
import { Box, Button, Typography, Stack, useTheme } from "@mui/material";

const FeaturedCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "start", sm: "center" },
        justifyContent: { sm: "space-between" },
        paddingInline: { xs: "10px", sm: "50px" },
        paddingBlock: "30px",
        backgroundColor: "#2F2F2F",
        borderRadius: "40px",
        overflow: "hidden",
        color: "#fff",
        position: "relative",
      }}
    >
      <Box sx={{ maxWidth: { sm: "50%" }, zIndex: 1 }}>
        <Stack spacing={4} direction="column" alignItems="start">
          <Box>
            <Typography fontWeight="bold" variant="h3">
              Make Your First Order
            </Typography>

            <Typography variant="h3" fontWeight="bold">
              and Get{" "}
              <span style={{ color: "#FF962C", marginLeft: "30px" }}>
                50% Off
              </span>
            </Typography>
          </Box>
          <Typography variant="body1">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              height: "50px",
              width: "200px",
            }}
          >
            <Typography variant={"h5"} fontWeight="bold">
              Order Now
            </Typography>
          </Button>
        </Stack>
      </Box>

      <Box
        component="img"
        src="/vipPIzza.png"
        alt="Pizza"
        sx={{
          display: { xs: "none", sm: "block" },
          height: "150%",
          borderRadius: "50%",
          position: "absolute",
          right: { sm: "-300px", lg: "-100px" },
          objectFit: "contain",
          marginLeft: "20px",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default FeaturedCard;
