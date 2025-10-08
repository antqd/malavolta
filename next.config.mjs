/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      // proxy API → tua VPS (porta 80 dietro Nginx)
      {
        source: "/api-proxy/:path*",
        destination: "https://api.alfonsomalavolta.com/:path*",
      },
    ];
  },
};

export default nextConfig;
