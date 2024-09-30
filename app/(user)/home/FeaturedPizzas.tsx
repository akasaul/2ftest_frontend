"use client";

import FeaturedCard from "@/components/ui/FeaturedCard";
import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const FeaturedPizzas = () => {
  const featuredPizzas = [1, 2, 3];
  return (
    <Box marginTop={"50px"} paddingInline={"50px"}>
      <Typography
        variant="h2"
        marginBottom={"30px"}
        fontWeight={500}
        sx={{ opacity: 0.5 }}
      >
        Featured pizza
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
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
