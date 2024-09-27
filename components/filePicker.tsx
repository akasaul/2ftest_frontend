"use client";

import React, { useRef } from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { encodeFileToBase64 } from "@/utils/encodeFileToBase64";

const FileUploadWrapper = styled(Button)({
  border: "2px dashed #bfbfbf",
  backgroundColor: "transparent",
  color: "#ff9800",
  textTransform: "none",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  width: "100%",
  padding: "20px",
  height: "56px",
  "&:hover": {
    backgroundColor: "#fff7e6", // Light background on hover
  },
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface FilePickerProps {
  control: any;
  errors: any;
  name: string;
}

const FilePicker = ({ name, control, errors }: FilePickerProps) => {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      try {
        const base64File = await encodeFileToBase64(files[0]);
      } catch (error) {
        console.error("Error encoding file:", error);
      }
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl error={Boolean(errors.logo)} fullWidth>
          <FileUploadWrapper component="label" role={undefined} tabIndex={-1}>
            <img
              src="/icons/upload.svg"
              alt="Upload Logo"
              style={{ marginRight: "8px", width: "16px", height: "16px" }}
            />
            <h6>Upload Logo</h6>
            <VisuallyHiddenInput
              {...field}
              type="file"
              onChange={(event) => handleFileChange(event, field)} // Handle change separately
            />
          </FileUploadWrapper>
          {errors.logo ? (
            <FormHelperText>{errors.logo.message}</FormHelperText>
          ) : null}
        </FormControl>
      )}
    />
  );
};

export default FilePicker;
