import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ceaseless-moose-383.convex.cloud",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
