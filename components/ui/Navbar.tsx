import { Box, Typography, Stack } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box
      component="nav"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"20px"}
    >
      <img src={"/icons/logo.svg"} />
      <Stack
        direction={"row"}
        minWidth={"300px"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Link href={"/"}>
          <Typography variant="h5" fontWeight={700} color="primary">
            Home
          </Typography>
        </Link>

        <Link href={"/orders"}>
          <Typography variant="h5" fontWeight={500} color="#16120DBF">
            Orders
          </Typography>
        </Link>

        <Link href={"/who-we-are"}>
          <Typography variant="h5" fontWeight={500} color="#16120DBF">
            Who we are
          </Typography>
        </Link>
      </Stack>
      <p>icon</p>
    </Box>
  );
};

export default Navbar;
