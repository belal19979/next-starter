import { Box, Typography } from "@mui/material";
import { HeaderContainer, SearchForm, StartupCard } from "@/components";
import { posts } from "@/lib/mockData";
import { StartupCardType } from "@/lib/types/startupCard.types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <HeaderContainer>
        <Typography
          variant="h1"
          sx={{
            backgroundColor: "common.black",
            color: "white",
            px: 6,
            py: 3,
          }}
        >
          Pitch your startup , <br /> connect with Entrepreneurs
        </Typography>
        <Typography variant="body1" my={3}>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </Typography>
        <SearchForm query={query} />
      </HeaderContainer>
      <Box component="section" marginTop={5}>
        <Typography variant="h5">
          {query ? `search results for "${query}"` : "All startups"}
        </Typography>
        <Box component="ul" sx={{ listStyle: "none" }}>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <Typography variant="body2">No startups found</Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
