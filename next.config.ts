import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // need this for next/image to use images from backend
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
