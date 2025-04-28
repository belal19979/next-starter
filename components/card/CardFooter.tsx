import { CardActions, Typography, Button } from "@mui/material";

export const CardFooter = () => {
  return (
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
  );
};

export default CardFooter;
