import { Card, CardMedia } from "@mui/material";
import { CardHeader, CardContent, CardFooter } from "./card";
import { StartupCardType } from "@/lib/types/startupCard.types";

export const StartupCard = ({ post }: { post: StartupCardType }) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 600 }}>
      <CardHeader post={post} />
      <CardContent post={post} />
      <CardMedia
        component="img"
        image="https://images.ctfassets.net/guq7uhccw0bf/36QYocjmcgfng6dUsuE1Kz/7296e8deff54c7442dfebca523e593d6/c2.png"
        alt=""
      />
      <CardFooter />
    </Card>
  );
};
