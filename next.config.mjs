/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fix for Module not found: Can't resolve fs.
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  redirects: () => {
    return [];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Allow all images from Cloudinary
      },
    ],
  },
};

export default nextConfig;
