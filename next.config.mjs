/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.spedo.it",
      },
      {
        protocol: "https",
        hostname: "www.calderoni.it",
      },
      {
        protocol: "https",
        hostname: "www.agrionica.it",
      },
      {
        protocol: "https",
        hostname: "www.gamberinisrl.com",
      },
      {
        protocol: "https",
        hostname: "www.bicchi.com",
      },
      {
        protocol: "https",
        hostname: "www.rinieri.com",
      },
      {
        protocol: "https",
        hostname: "www.argnaniemonti.it",
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
