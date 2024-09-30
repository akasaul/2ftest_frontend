"use client";

import RestaurantCard from "@/components/ui/RestaurantCard";
import React from "react";
import { Navigation, A11y } from "swiper/modules";

import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularRestaurants = () => {
  const restaurantData = [
    {
      restaurantName: "Azmera Pizza",
      restaurantImage: "/userPH.jpeg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
      numberOfOrders: "2K",
    },
    {
      restaurantName: "Azmera Pizza 2",
      restaurantImage: "/userPH.jpeg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
      numberOfOrders: "3K",
    },
    {
      restaurantName: "Azmera Pizza 3",
      restaurantImage: "/userPH.jpeg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
      numberOfOrders: "1K",
    },
    {
      restaurantName: "Azmera Pizza 3",
      restaurantImage: "/userPH.jpeg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
      numberOfOrders: "1K",
    },
    {
      restaurantName: "Azmera Pizza 3",
      restaurantImage: "/userPH.jpeg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to...",
      numberOfOrders: "1K",
    },
  ];

  return (
    <Box
      padding={"50px"}
      sx={{
        background:
          "linear-gradient(180deg, rgba(250, 126, 0, 0) 0%, rgba(250, 126, 0, 0.2) 60.5%, rgba(148, 74, 0, 0) 100%)",
      }}
      position={"relative"}
    >
      <Typography
        variant="h2"
        marginBottom={"30px"}
        fontWeight={500}
        sx={{ opacity: 0.5 }}
      >
        Top Restaurants
      </Typography>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {restaurantData.map((restaurant, index) => (
          <SwiperSlide key={index}>
            <RestaurantCard
              restaurantName={restaurant.restaurantName}
              restaurantImage={restaurant.restaurantImage}
              description={restaurant.description}
              numberOfOrders={restaurant.numberOfOrders}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PopularRestaurants;
