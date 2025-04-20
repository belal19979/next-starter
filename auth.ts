import GithubProvider from "next-auth/providers/github";
import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

export async function auth() {
  return await getServerSession(authOptions);
}
