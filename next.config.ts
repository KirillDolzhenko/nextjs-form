import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        "@styles/*": "./src/app/styles/*",
      },
    },
  },
};

export default nextConfig;
