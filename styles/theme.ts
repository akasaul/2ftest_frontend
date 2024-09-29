"use client";
import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily:
    '"Inter", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  body1: { fontSize: "16px", fontWeight: 400, lineHeight: "24px" },
  body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.57 },
  button: {
    fontWeight: 700,
    color: "#fff",
  },
  caption: { fontSize: "15px", fontWeight: 400, lineHeight: 1.66 },
  subtitle1: { fontsize: "1rem", fontweight: 500, lineheight: 1.57 },
  subtitle2: { fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.57 },
  overline: {
    color: "#01C550",
    fontSize: "45px",
    fontWeight: 700,
    letterSpacing: "0.5px",
    lineHeight: "44.55px",
  },
  h1: { fontSize: "150px", fontWeight: 700, lineHeight: "225px" },
  h2: { fontSize: "50px", fontWeight: 500, lineHeight: "75px" },
  h3: { fontSize: "45px", fontWeight: 500, lineHeight: 1.2 },
  h4: { fontSize: "25px", fontWeight: 500, lineHeight: 1.2 },
  h5: { fontSize: "20px", fontWeight: 500, lineHeight: 1.2 },
  h6: { fontSize: "24px", fontWeight: 400, lineHeight: "32.02px" },
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
        // text: {
        //   secondary: "#01C550",
        // },
        text: {
          secondaryChannel: "#01C550",
        },
        secondary: {
          main: "#01C550",
          light: "#01C550",
          dark: "#01C550",
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
