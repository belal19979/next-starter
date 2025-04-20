"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const AuthButtons = () => {
  const { data: session } = useSession();

  return session && session?.user ? (
    <>
      <Link href="/startup/create">
        <span className="mr-4">Create</span>
      </Link>
      <button onClick={() => signOut()}>Logout</button>
      <Link href={`/user/${session?.user.name}`}>
        <span className="mr-4">{session?.user?.name}</span>
      </Link>
    </>
  ) : (
    <button onClick={() => signIn("github")}>Login with GitHub</button>
  );
};
