/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        destination: 'http://localhost:1337/:path*',
        source: '/uploads/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
