/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');

    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false };
    }

    return config;
  },
};

module.exports = nextConfig;
