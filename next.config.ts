import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://placehold.co/600*400")],
  },
};

export default nextConfig;
t