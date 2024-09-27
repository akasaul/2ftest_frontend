import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
