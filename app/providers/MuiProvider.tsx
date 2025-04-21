"use client";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import { CssBaseline } from "@mui/material";

export function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
