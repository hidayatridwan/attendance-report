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
    API_URL: "https://test.gwenza.com/",
    API_KEY: "QoaUmKyg60wWQl1LVkKi",
    LOGIN_USERNAME: "ridwan",
    LOGIN_PASSWORD: "4377",
  },
};

module.exports = nextConfig;
