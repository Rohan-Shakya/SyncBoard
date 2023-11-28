/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["eiczulwioqhnjnxaxjpx.supabase.co"],
  },
};

module.exports = nextConfig;
