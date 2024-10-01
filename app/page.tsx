"use client";

import { paths } from "@/paths";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push(paths.user.home);
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
