"use client";
import { useAuth } from "@/providers/AuthProvider";
import { Box, Typography, Stack, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const { isLoggedIn, isLoading } = useAuth();
  return (
    <Box
      component="nav"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingBlock={"10px"}
      paddingInline={"20px"}
    >
      <Link href={"/"}>
        <img src={"/icons/logo.svg"} />
      </Link>
      <Stack
        direction={"row"}
        display={"flex"}
        justifyContent={"space-between"}
        sx={{
          minWidth: { xs: "400px" },
        }}
      >
        <Link href={"/"}>
          <Typography
            variant="h5"
            fontWeight={path == "/home" ? 700 : 500}
            color={path == "/home" ? "primary" : "#16120DBF"}
          >
            Home
          </Typography>
        </Link>

        <Link href={"/orders"}>
          <Typography
            variant="h5"
            fontWeight={path == "/orders" ? 700 : 500}
            color={path == "/orders" ? "primary" : "#16120DBF"}
          >
            Orders
          </Typography>
        </Link>

        <Link href={"/who-we-are"}>
          <Typography
            variant="h5"
            fontWeight={path == "/who-we-are" ? 700 : 500}
            color={path == "/who-we-are" ? "primary" : "#16120DBF"}
          >
            Who we are
          </Typography>
        </Link>
      </Stack>
      {!isLoading && isLoggedIn ? (
        <Button type="submit" variant="contained" sx={{ height: "42px" }}>
          Logout
        </Button>
      ) : (
        <Button type="submit" variant="contained" sx={{ height: "42px" }}>
          Register
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
