import {
  Box,
  CardContent as MuiCardContent,
  Stack,
  Typography,
} from "@mui/material";
import avatarwebp from "@/public/avatarwebp.webp";

import Image from "next/image";

export const CardContent = () => {
  return (
    <>
      <MuiCardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 4,
          px: 3,
        }}
      >
        <Stack direction="column" alignItems="center">
          <Typography variant="body1">Steven smith</Typography>
          <Typography>Eco track</Typography>
        </Stack>
        <Box sx={{ position: "relative", width: "60px", height: "60px" }}>
          <Image
            src={avatarwebp}
            alt="avatar"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </MuiCardContent>
      <Typography sx={{ pb: 4, px: 3 }}>
        A mobile app that helps users track and reduce their carbo and ..
      </Typography>
    </>
  );
};
