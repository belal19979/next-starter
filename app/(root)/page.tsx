import { Box, Typography } from "@mui/material";
import { HeaderContainer, SearchForm, StartupCard } from "@/components";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: "yesterday",
      views: 60,
      _id: 1,
      description: "this is description",
      image: "",
      category: "Robots",
      title: "Robots title",
    },
  ];
  type StartupCardType = {
    _createdAt: string;
    views: number;
    _id: number;
    description: string;
    image: string;
    category: string;
    title: string;
  };
  return (
    <>
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
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </Typography>
        <SearchForm query={query} />
      </HeaderContainer>
      <section style={{ color: "black" }}>
        <p style={{ color: "black" }}>
          {query ? `search results for "${query}"` : "All startups"}
        </p>
        <ul>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={index} />
            ))
          ) : (
            <p>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
