import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.casinotsu.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'casinotsu.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
