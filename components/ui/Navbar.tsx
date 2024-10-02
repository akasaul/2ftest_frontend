"use client";
import { useAuth } from "@/providers/AuthProvider";
import { Box, Typography, Stack, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const { isLoggedIn, isLoading, logout } = useAuth();

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
          minWidth: { xs: "140px", sm: "250px", md: "350px" },
          marginInline: "10px",
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
      </Stack>
      {!isLoading && isLoggedIn ? (
        <Button
          type="submit"
          variant="contained"
          sx={{ height: "42px" }}
          onClick={logout}
        >
          Logout
        </Button>
      ) : (
        <Link href={"/signup"}>
          <Button type="submit" variant="contained" sx={{ height: "42px" }}>
            Register
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default Navbar;
