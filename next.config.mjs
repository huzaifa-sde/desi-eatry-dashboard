const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://localhost:5000/desi/api/v1/:path*"
            : "https://desi-eatry-backend-production.up.railway.app/desi/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
