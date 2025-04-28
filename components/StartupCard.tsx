import { Card, CardMedia } from "@mui/material";
import { CardHeader, CardContent, CardFooter } from "./card";

export const StartupCard = () => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 600 }}>
      <CardHeader />
      <CardContent />
      <CardMedia
        component="img"
        image="https://images.ctfassets.net/guq7uhccw0bf/36QYocjmcgfng6dUsuE1Kz/7296e8deff54c7442dfebca523e593d6/c2.png"
        alt=""
      />
      <CardFooter />
    </Card>
  );
};
