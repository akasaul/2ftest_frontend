import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Avatar,
  CardActions,
  Stack,
} from "@mui/material";

interface PizzaCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  restaurantName: string;
  restaurantImage: string;
}

const PizzaCard: React.FC<PizzaCardProps> = ({
  image,
  name,
  description,
  price,
  restaurantName,
  restaurantImage,
}) => {
  return (
    <Card
      sx={{
        background: "#fff",
        borderRadius: "25px",
        padding: "20px",
      }}
      elevation={0}
    >
      <CardMedia component="img" image={image} alt={name} />
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
          >
            Order
          </Button>
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          borderTop: "2px solid rgba(0, 0, 0, 0.2)",
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
