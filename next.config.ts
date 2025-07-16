// import { config } from 'dotenv';
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/menu",
        permanent: true,
      },
    ];
  },
  // env: process.env,
  // reactStrictMode: true,
};

export default nextConfig;
