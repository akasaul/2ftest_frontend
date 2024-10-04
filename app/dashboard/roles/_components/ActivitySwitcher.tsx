import { Switch, Typography, Box } from "@mui/material";
import { useState } from "react";

interface Props {
  isActive: boolean;
  onActivityChange: (isActive: boolean) => Promise<void>;
}

const ActivitySwitcher = ({ isActive, onActivityChange }: Props) => {
  const [active, setActive] = useState(isActive);

  const handleToggle = () => {
    setActive(!active);
    onActivityChange(!active);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: active ? "#E8F5E9" : "#f5f5f5",
        borderRadius: "30px",
        padding: "10px 35px",
        maxWidth: "150px",
      }}
    >
      <Typography
        sx={{
          color: active ? "#008000" : "#BDBDBD",
        }}
      >
        {active ? "Active" : "Inactive"}
      </Typography>
      <Switch
        size="small"
        checked={active}
        onChange={handleToggle}
        color="success"
      />
    </Box>
  );
};

export default ActivitySwitcher;
