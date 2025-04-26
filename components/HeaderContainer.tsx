import { Box } from "@mui/material";
import React from "react";

export const HeaderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        minHeight: "530px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 6,
      }}
    >
      {children}
    </Box>
  );
};
