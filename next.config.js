/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'kr.object.ncloudstorage.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
    ],
  },
};

module.exports = nextConfig;
