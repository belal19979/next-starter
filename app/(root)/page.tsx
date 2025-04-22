import { Typography } from "@mui/material";
import { HeaderContainer } from "../components/HeaderContainer";
import { SearchForm } from "../components/SearchForm";

export default function Home() {
  return (
    <HeaderContainer>
      <Typography
        variant="h1"
        sx={{
          backgroundColor: "common.black",
          px: 6,
          py: 3,
        }}
      >
        Pitch your startup , <br /> connect with Entrepreneurs
      </Typography>
      <Typography variant="body1" my={3}>
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </Typography>

      <SearchForm></SearchForm>
    </HeaderContainer>
  );
}
