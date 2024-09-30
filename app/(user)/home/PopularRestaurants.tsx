"use client";

import RestaurantCard from "@/components/ui/RestaurantCard";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
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
  );
};

export default PopularRestaurants;
