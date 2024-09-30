"use client";

import FeaturedCard from "@/components/ui/FeaturedCard";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "@mui/material";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const FeaturedPizzas = () => {
  const featuredPizzas = [1, 2, 3];
  const theme = useTheme();
  return (
    <Box marginTop={"50px"} paddingInline={"50px"}>
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
        Featured Pizzas
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {featuredPizzas.map((pizza, index) => (
          <SwiperSlide key={index}>
            <FeaturedCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FeaturedPizzas;
