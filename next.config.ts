import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly set the root directory to avoid warnings
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;