import { Switch, Typography, Box } from "@mui/material";
import { useState } from "react";

interface Props {
  isActive: boolean;
}

const ActivitySwitcher = ({ isActive }: Props) => {
  const [active, setActive] = useState(isActive);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: active ? "#E8F5E9" : "#f5f5f5",
        borderRadius: "20px",
        padding: "5px 10px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: active ? "green" : "#BDBDBD",
          marginRight: "8px",
        }}
      >
        {active ? "Active" : "Inactive"}
      </Typography>
      <Switch checked={active} onChange={handleToggle} color="success" />
    </Box>
  );
};

export default ActivitySwitcher;
