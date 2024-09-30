import { Box, Typography, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Box component="nav" display={"flex"} justifyContent={"space-between"}>
      <p>logo</p>
      <Stack
        direction={"row"}
        minWidth={"30%"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" fontWeight={700} color="primary">
          Home
        </Typography>
        <Typography variant="h5" fontWeight={500} color="#16120DBF">
          Orders
        </Typography>
      </Stack>
      <p>icon</p>
    </Box>
  );
};

export default Navbar;
