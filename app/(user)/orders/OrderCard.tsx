import React from "react";
import {
  Card,
  CardContent,
  Box,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";

interface OrderCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  status: string;
}

const OrderCard = ({
  image,
  name,
  description,
  price,
  status,
}: OrderCardProps) => {
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
          <Typography
            variant="h4"
            flex={3}
            fontWeight={600}
            color={"textSecondaryChannel"}
            sx={{ textTransform: "capitalize" }}
          >
            {status.toLowerCase()}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
