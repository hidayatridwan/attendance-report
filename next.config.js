/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://test.gwenza.com/public/",
    API_KEY: "QoaUmKyg60wWQl1LVkKi",
  },
};

module.exports = nextConfig;
