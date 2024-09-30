import Navbar from "@/components/ui/Navbar";
import { Box, Stack, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      padding={"20px"}
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1 100%)",
      }}
    >
      <Navbar />
      <Stack direction={"row"} alignItems={"center"}>
        <Stack
          flex={2}
          maxWidth={{
            maxWidth: "900px",
          }}
        >
          <Typography
            sx={{
              backgroundImage:
                "linear-gradient(90.23deg, #FF8100 -2.97%, #FFBE71 93.66%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            color="inherit"
            variant="h1"
          >
            Order us
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            laudantium consequatur labore placeat delectus distinctio quo quasi
            quisquam nam dicta laboriosam magnam et tenetur doloribus
            exercitationem, voluptas possimus expedita non.
          </Typography>
        </Stack>

        <Box
          flex={1}
          component="img"
          src="/vipPIzza.png"
          alt="Pizza"
          sx={{
            borderRadius: "50%",
            objectFit: "contain",
            marginLeft: "20px",
            zIndex: 1,
            position: "absolute",
            right: "-300px",
          }}
        />
      </Stack>
    </Box>
  );
};

export default Hero;
