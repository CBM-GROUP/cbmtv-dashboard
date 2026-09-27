import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig: NextConfig = {
  async rewrites() {
    const apiBaseUrl =
      process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiBaseUrl) return [];

    return [
      {
        source: '/backend-api/:path*',
        destination: `${new URL(apiBaseUrl).origin}/:path*/`,
      },
    ];
  },
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

// Next 15 shares .next between dev and build; isolate dev so a production
// build cannot remove files the running dev server is about to write.
export default (phase: string): NextConfig => ({
  ...nextConfig,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});
