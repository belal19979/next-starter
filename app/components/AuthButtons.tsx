"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const AuthButtons = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-5 text-black">
      {session && session?.user ? (
        <>
          <Link href="/startup/create">
            <button>Create</button>
          </Link>
          <span onClick={() => signOut()}>Logout</span>
          <Link href={`/user/${session?.user.name}`}>
            <span>{session?.user?.name}</span>
          </Link>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Login with GitHub</button>
      )}
    </div>
  );
};
