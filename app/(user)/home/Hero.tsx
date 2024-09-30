"use client";

import React from "react";
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import Navbar from "@/components/ui/Navbar";

const Hero = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        backgroundImage:
          "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1 100%)",
        height: "700px",
        overflowX: "hidden",
      }}
      position={"relative"}
    >
      <Navbar />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"40px"}
      >
        <Box
          sx={{
            maxWidth: { xs: "600px", sm: "400px", md: "600px", lg: "50%" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "70px", sm: "90px", md: "130px" },
              backgroundImage:
                "linear-gradient(90.23deg, #FF8100 -2.97%, #FFBE71 93.66%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Order us
          </Typography>
          <Typography mb={4} variant={"body2"} fontWeight={400}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "30px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "5px 15px",
              width: "100%",
              maxWidth: "400px",
              position: "relative",
            }}
          >
            <InputBase
              placeholder="Search"
              sx={{
                flex: 1,
                fontSize: "16px",
                color: "#6C727F",
                padding: "10px 15px",
                borderRadius: "30px",
                backgroundColor: "#fff",
              }}
            />
            <IconButton
              type="submit"
              sx={{
                p: "15px",
                position: "absolute",
                right: "5px",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "50%",
              }}
            >
              <img
                src={"/icons/searchIcon.svg"}
                height={"25px"}
                width={"25px"}
              />
            </IconButton>
          </Box>
        </Box>

        <Box
          component="img"
          src="/pizzaHero.png"
          alt="Pizza"
          sx={{
            display: { xs: "none", sm: "block" },
            height: { xs: "700px", md: "700px" },
            width: { xs: "700px", md: "800px", lg: "850px" },
            borderRadius: "50%",
            objectFit: "cover",
            zIndex: 1,
            position: "absolute",
            top: "50px",
            right: { xs: "-300px", sm: "-415px", md: "-430px" },
            transform: "rotate(270deg)",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Hero;
