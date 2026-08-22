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
      // Videos stream from CloudFront; images are served straight from S3.
      // Allow-list both hosts accordingly.
      ...(process.env.CLOUDFRONT_BASE_URL
        ? [{
            protocol: new URL(process.env.CLOUDFRONT_BASE_URL).protocol.replace(':', '') as 'http' | 'https',
            hostname: new URL(process.env.CLOUDFRONT_BASE_URL).hostname,
          }]
        : []),
      ...(process.env.NEXT_PUBLIC_S3_IMAGE_HOST
        ? [{
            protocol: 'https' as const,
            hostname: process.env.NEXT_PUBLIC_S3_IMAGE_HOST,
            pathname: '/cbm-images/**',
          }]
        : []),
    ],
  },
};

export default nextConfig;
