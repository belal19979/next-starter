import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Stack,
  CardHeader,
} from "@mui/material";
import Image from "next/image";
import avatarwebp from "@/public/avatarwebp.webp";
import VisibilityIcon from "@mui/icons-material/Visibility";
export const StartupCard = () => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 600 }}>
      {
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2, //here
          }}
        >
          <Typography>20 MAY , 2023</Typography>
          <Stack direction="row" gap={2} alignItems="center">
            <VisibilityIcon />
            <Typography variant="body1">232</Typography>
          </Stack>
        </Box>
      }

      <CardContent
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
      </CardContent>
      <Typography sx={{ pb: 4, px: 3 }}>
        A mobile app that helps users track and reduce their carbo and ..
      </Typography>
      <CardMedia
        component="img"
        image="https://images.ctfassets.net/guq7uhccw0bf/36QYocjmcgfng6dUsuE1Kz/7296e8deff54c7442dfebca523e593d6/c2.png"
        alt=""
      />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography>Senior level</Typography>
        <Button>Detail</Button>
      </CardActions>
    </Card>
  );
};
