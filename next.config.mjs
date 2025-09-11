/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // proxy API → tua VPS (porta 80 dietro Nginx)
      {
        source: "/api-proxy/:path*",
        destination: "http://185.229.239.141/:path*",
      },
    ];
  },
};

export default nextConfig;
