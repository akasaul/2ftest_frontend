"use client";
import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  body1: { fontSize: "16px", fontWeight: 400, lineHeight: "24px" },
  body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.57 },
  button: {
    fontWeight: 700,
    color: "#fff",
  },
  caption: { fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.66 },
  subtitle1: { fontsize: "1rem", fontweight: 500, lineheight: 1.57 },
  subtitle2: { fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.57 },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.5px",
    lineHeight: 2.5,
    textTransform: "uppercase",
  },
  h1: { fontSize: "150px", fontWeight: 700, lineHeight: "225px" },
  h2: { fontSize: "3rem", fontWeight: 500, lineHeight: 1.2 },
  h3: { fontSize: "2.25rem", fontWeight: 500, lineHeight: 1.2 },
  h4: { fontSize: "2rem", fontWeight: 500, lineHeight: 1.2 },
  h5: { fontSize: "1.5rem", fontWeight: 500, lineHeight: 1.2 },
};

const theme = createTheme({
  typography: typography,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#FF8100",
          light: "#FF962C",
          dark: "#FF962C",
        },
        background: {
          default: "#fff",
          paper: "#fff",
        },
        secondary: {
          main: "#00f",
          light: "#00f",
          dark: "#00f",
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FDFFFE",
        },
      },
    },
  },
});

export default theme;
