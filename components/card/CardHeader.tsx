import { Box, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { StartupCardType } from "@/lib/types/startupCard.types";
import { formatDate } from "@/lib/utils";

export const CardHeader = ({ post }: { post: StartupCardType }) => {
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
        {formatDate(post._createdAt)}
      </Typography>
      <Stack direction="row" gap={2} alignItems="center">
        <VisibilityIcon color="primary" />
        <Typography variant="body1">{post.views}</Typography>
      </Stack>
    </Box>
  );
};
