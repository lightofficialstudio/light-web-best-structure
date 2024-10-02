import TerserPlugin from "terser-webpack-plugin";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Keep this for SWC compiler optimization

  // Rewrite API requests to the backend
  async rewrites() {
    return [
      {
        source: "/api/:path((?!auth).*)", // ส่งเส้นทางที่ไม่ใช่ /api/auth ไปยัง BACKEND_API_URL
        destination: `${process.env.BACKEND_API_URL}/:path*`,
      },
    ];
  },

  // Custom Webpack configuration
  webpack(config, { dev }) {
    if (!dev) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Drop console logs in production
            },
          },
        })
      );
    }

    // Additional performance optimizations can be added here
    return config;
  },
};

export default nextConfig;
