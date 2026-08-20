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
      ...(process.env.CLOUDFRONT_BASE_URL
        ? [{
            protocol: new URL(process.env.CLOUDFRONT_BASE_URL).protocol.replace(':', '') as 'http' | 'https',
            hostname: new URL(process.env.CLOUDFRONT_BASE_URL).hostname,
            pathname: '/cbm-images/**',
          }]
        : []),
    ],
  },
};

export default nextConfig;
