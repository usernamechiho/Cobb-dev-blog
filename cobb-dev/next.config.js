/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ['localhost', 'localhost:1337'],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:1337/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
