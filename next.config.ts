/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'google.com',
      'leadbuddy.com',
      'cdn.example.com',
      'res.cloudinary.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
