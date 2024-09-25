import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ตรวจสอบว่าพาธนี้ยังคงถูกต้อง
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
