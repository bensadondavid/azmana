import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-32ed76fafe064db4932e2c55271750cb.r2.dev",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;