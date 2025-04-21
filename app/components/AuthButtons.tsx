"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button, Typography, Stack } from "@mui/material";

export const AuthButtons = () => {
  const { data: session } = useSession();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {session && session?.user ? (
        <>
          <Link href="/startup/create" passHref>
            <Button variant="contained">Create</Button>
          </Link>
          <Button variant="contained" onClick={() => signOut()}>
            Logout
          </Button>
          <Link href={`/user/${session?.user.name}`}>
            <Typography variant="body1">{session?.user?.name}</Typography>
          </Link>
        </>
      ) : (
        <Button variant="contained" onClick={() => signIn("github")}>
          Login with GitHub
        </Button>
      )}
    </Stack>
  );
};
