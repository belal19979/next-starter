import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#EE2B69" },
    secondary: { main: "#FBE843" },
    background: { default: "#ffffff" },
  },
  typography: {
    fontFamily: "var(--font-work-sans), Arial, sans-serif",
    h1: { fontWeight: 800, fontSize: "3.375rem", lineHeight: 1.2 },
    h2: { fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  shadows: ["none", "2px 2px 0px rgba(0,0,0,.25)"],
});
