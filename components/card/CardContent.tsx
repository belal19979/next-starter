import {
  Box,
  CardContent as MuiCardContent,
  Stack,
  Typography,
} from "@mui/material";
// import avatarwebp from "@/public/avatarwebp.webp";
import { StartupCardType } from "@/lib/types/startupCard.types";

import Image from "next/image";
import Link from "next/link";

export const CardContent = ({ post }: { post: StartupCardType }) => {
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
          <Link href={`/user/${post.author._id}`}>
            <Typography variant="body1">{post.author.name}</Typography>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <Typography>{post.title}</Typography>
          </Link>
        </Stack>
        <Box sx={{ position: "relative", width: "60px", height: "60px" }}>
          <Image
            src="https://placehold.co/600*400"
            alt="avatar placeholder"
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
