import {
  Card,
  CardContent,
  CardActions,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const PizzaCard = () => {
  return (
    <Card
      sx={{
        // maxWidth: "387px",
        background: "#fff",
        borderRadius: "25px",
        padding: "20px",
      }}
      elevation={0}
    >
      <CardContent>
        <img src="/vipPIzza.png" />
        <Stack>
          <Typography variant="h4" fontWeight={700}>
            Margarita
          </Typography>
          <Typography variant="caption" color={"rgba(0, 0, 0, 0.7)"}>
            Tomato, Mozzerella, Bell Peppers, Onions Olives
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          marginY={"10px"}
        >
          <Typography
            variant="h3"
            flex={3}
            fontWeight={700}
            color={"textSecondary"}
          >
            150
          </Typography>
          <Button
            variant={"contained"}
            sx={{
              flex: 4,
              borderRadius: "10px",
              textTransform: "none",
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "46.3px",
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
          <img
            src="userPH.jpeg"
            style={{
              height: "65px",
              width: "65px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />

          <Typography variant="h5" fontWeight={700}>
            Azmera Pizza
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default PizzaCard;
