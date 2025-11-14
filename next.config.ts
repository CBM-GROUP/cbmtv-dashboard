import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'development.autofore.com',
        port: '',
        pathname: '/storage/images/**',
      },
    ],
  },
};

export default nextConfig;
