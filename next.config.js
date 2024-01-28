const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://absen-api.69.mu/",
    API_KEY: "QoaUmKyg60wWQl1LVkKi",
    LOGIN_USERNAME: "admin",
    LOGIN_PASSWORD: "4377",
  },
};

module.exports = nextConfig;
