import { Box, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const CardHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          backgroundColor: "#FFE6EC",
          px: 2,
          py: 0.5,
          borderRadius: "50px",
          fontWeight: "bold",
        }}
      >
        20 MAY , 2023
      </Typography>
      <Stack direction="row" gap={2} alignItems="center">
        <VisibilityIcon color="primary" />
        <Typography variant="body1">232</Typography>
      </Stack>
    </Box>
  );
};
