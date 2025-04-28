import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#EE2B69" },
    secondary: { main: "#FBE843" },
  },
  typography: {
    fontFamily: "var(--font-work-sans), Arial, sans-serif",
    h1: {
      fontSize: "36px",
      lineHeight: "46px",
      fontWeight: 800,
      textTransform: "uppercase",
      textAlign: "center",
      "@media (min-width:600px)": {
        fontSize: "54px",
        lineHeight: "64px",
      },
    },
    h2: { fontWeight: 700 },
    body1: {
      fontWeight: 500,
      fontSize: "20px",
      textAlign: "center",
    },
  },
  shape: { borderRadius: 12 },
});
