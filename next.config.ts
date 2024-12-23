import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static exports
  distDir: "out", // Set output directory to 'out'
  // ... your other config options
};

export default nextConfig;
