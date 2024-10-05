import { Box } from "@mui/material";
import AddMenuForm from "./_components/addMenuForm";

const AddMenu = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
      }}
    >
      <AddMenuForm />
    </Box>
  );
};

export default AddMenu;
