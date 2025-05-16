const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ['image/webp'],
    domains: ['yourdomain.com'],
  },
  compress: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
