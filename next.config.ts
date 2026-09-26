import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" }, // YouTube thumbnails
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default withNextIntl(nextConfig);
