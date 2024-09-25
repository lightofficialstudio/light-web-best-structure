/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // เปิดการใช้งาน strict mode ของ React
  swcMinify: true, // เปิดการใช้งาน SWC minifier เพื่อประสิทธิภาพที่ดีขึ้น
  webpack(config) {
    return config;
  },
};

export default nextConfig;
