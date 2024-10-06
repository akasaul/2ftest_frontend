"use client";

import RestaurantCard from "@/components/ui/RestaurantCard";
import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTopRestaurants } from "@/services/queries/restuarants.query";
import PizzaLoader from "@/components/ui/Loader";

const PopularRestaurants = () => {
  const { data, isLoading } = useGetTopRestaurants();
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

  const theme = useTheme();

  return (
    <Box
      marginBlock={"100px"}
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
        sx={{
          opacity: 0.5,

          fontSize: {
            xs: theme.typography.h4.fontSize,
            sm: theme.typography.h3.fontSize,
            md: theme.typography.h2.fontSize,
          },
        }}
      >
        Top Restaurants
      </Typography>
      {isLoading ? (
        <PizzaLoader />
      ) : (
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
        >
          {data?.data.map((restaurant, index) => (
            <SwiperSlide key={index}>
              <RestaurantCard
                restaurantName={restaurant.name}
                restaurantImage={restaurant.logo}
                description={
                  "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to..."
                }
                numberOfOrders={restaurant.orederCount?.toString()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default PopularRestaurants;
