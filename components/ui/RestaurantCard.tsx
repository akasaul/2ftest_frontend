import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Grid,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";

interface RestaurantCardProps {
  restaurantName: string;
  restaurantImage: string;
  description: string;
  numberOfOrders: string;
}

const OrderBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  paddingInline: "16px",
  background: "#0080000D",
  borderRadius: "16px",
  height: "130px",
});

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurantName,
  restaurantImage,
  description,
  numberOfOrders,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginInline={"15px"}
      boxShadow={"0 4px 12px rgba(0,0,0,0.1)"}
    >
      <Card
        elevation={0}
        sx={{
          borderRadius: "16px",
          padding: "16px",
          backgroundColor: "#fff",
          maxWidth: "650px",
          width: "100%",
        }}
      >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Stack gap={2}>
                <Stack direction="row" gap={2} alignItems="center">
                  <Avatar
                    src={restaurantImage}
                    alt={restaurantName}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Typography variant="h6" component="div" fontWeight="bold">
                    {restaurantName}
                  </Typography>
                </Stack>
                <Typography variant="caption" color="text.secondary">
                  {description}
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <OrderBox>
                <Stack direction="row" gap={2}>
                  <Box
                    width="80px"
                    height="80px"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    bgcolor="#FF810033"
                    borderRadius="50%"
                  >
                    <img src={"/icons/restaurant-stats.svg"} />
                  </Box>
                  <Stack
                    alignItems="start"
                    gap={2}
                    justifyContent="start"
                    height={"100%"}
                  >
                    <Typography
                      color="text.secondary"
                      sx={{
                        opacity: 0.8,
                      }}
                    >
                      Number of order
                    </Typography>
                    <Typography
                      fontSize="50px"
                      fontWeight={700}
                      color="#FF8100"
                    >
                      {numberOfOrders}
                    </Typography>
                  </Stack>
                </Stack>
              </OrderBox>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RestaurantCard;
