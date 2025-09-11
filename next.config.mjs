/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api-proxy/:path*",
        destination: "http://185.229.239.141/:path*", // backend IP (porta 80 via Nginx)
      },
    ];
  },
};

export default nextConfig;