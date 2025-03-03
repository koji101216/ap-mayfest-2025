import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
        permanent: true,
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
