"use client";

import React from "react";
import {
  Card,
  CardContent,
  Box,
  CardMedia,
  Typography,
  Button,
  Avatar,
  CardActions,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface PizzaCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  restaurantName: string;
  restaurantImage: string;
}

const PizzaCard = ({
  id,
  image,
  name,
  description,
  price,
  restaurantName,
  restaurantImage,
}: PizzaCardProps) => {
  const router = useRouter();
  return (
    <Card
      sx={{
        background: "#fff",
        borderRadius: "25px",
        padding: "10px",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        position: "relative",
        width: "auto",
        maxWidth: "400px",
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EA810033",
          borderRadius: "50%",
          width: "300px",
          height: "300px",
          padding: "15px",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </Box>

      <CardContent>
        <Typography variant="h4" fontWeight={700}>
          {name}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>

        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          mt={2}
        >
          <Typography
            variant="h3"
            flex={3}
            fontWeight={600}
            color={"textSecondaryChannel"}
          >
            {price}
          </Typography>

          <Button
            variant={"contained"}
            sx={{
              flex: 3,
              borderRadius: "10px",
              textTransform: "none",
              fontSize: "24px",
              height: "48px",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textAlign: "left",
            }}
            onClick={() => router.push(`/menus/${id}`)}
          >
            Order
          </Button>
        </Stack>
      </CardContent>

      <CardActions
        sx={{
          borderTop: "2px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          marginY={"10px"}
        >
          <Avatar
            sx={{
              width: "65px",
              height: "65px",
            }}
            alt={restaurantName}
            src={restaurantImage}
          />
          <Typography
            variant="h5"
            sx={{
              opacity: 0.7,
            }}
            fontWeight={700}
          >
            {restaurantName}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default PizzaCard;
