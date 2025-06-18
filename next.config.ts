import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
