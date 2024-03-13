/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedForwardedHosts: [
        'localhost',
        'friendly-couscous-76q6vqrjq4p3rvp9-3000.app.github.dev',
      ],
      allowedOrigins: [
        'http://localhost',
        'https://friendly-couscous-76q6vqrjq4p3rvp9-3000.app.github.dev',
      ],
    },
  },
};

module.exports = nextConfig;
