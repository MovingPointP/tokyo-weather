import type { NextConfig } from "next";

// 静的なHTMLを生成
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tokyo-weather",
};

export default nextConfig;
