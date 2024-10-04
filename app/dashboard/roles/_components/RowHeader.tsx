import { Typography } from "@mui/material";
import React from "react";

interface Props {
  header: string;
}

const RowHeader = ({ header }: Props) => {
  return (
    <Typography variant="subtitle1" fontWeight={"600"}>
      {header}
    </Typography>
  );
};

export default RowHeader;
