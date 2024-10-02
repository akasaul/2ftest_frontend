import React from "react";
import { Box, Typography, Stack, IconButton, InputBase } from "@mui/material";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#D8BE9C",
          padding: { xs: "20px 10px", md: "40px" },
          position: "relative",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 2, md: 0 }}
        >
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6" fontWeight={600} color="#000">
              Home
            </Typography>
            <Typography variant="h6" fontWeight={600} color="#000">
              Order
            </Typography>
            <Typography variant="h6" fontWeight={600} color="#000">
              About Us
            </Typography>
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            spacing={2}
            width={"30%"}
            minWidth={"500px"}
          >
            <img
              src={"/icons/pizzaFooter.svg"}
              height={"50px"}
              width={"133px"}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                padding: "5px 15px",
                width: "100%",
                maxWidth: "400px",
                position: "relative",
              }}
            >
              <InputBase
                placeholder="Your feedback..."
                sx={{
                  flex: 1,
                  fontSize: "16px",
                  color: "#6C727F",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                }}
              />
              <IconButton
                type="submit"
                sx={{
                  p: "10px",
                }}
              >
                <img
                  src={"/icons/sendIcon.svg"}
                  height={"25px"}
                  width={"25px"}
                />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          backgroundColor: "#000",
          padding: { xs: "20px 10px", md: "40px" },
          color: "#fff",
          borderTop: "1px solid #333",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Copyright and Terms */}
        <Stack direction="row" spacing={2}>
          <Typography variant="body2" color="#fff">
            ©2024 Pizza All Rights Reserved.
          </Typography>
          <Typography variant="body2" color="#fff">
            Terms & Conditions
          </Typography>
        </Stack>

        {/* Social Media Icons */}
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton
            sx={{
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#555" },
              color: "#fff",
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#555" },
              color: "#fff",
            }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#555" },
              color: "#fff",
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#555" },
              color: "#fff",
            }}
          >
            <YouTube />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
