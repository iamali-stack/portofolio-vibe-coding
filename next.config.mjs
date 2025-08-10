/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/portofolio-vibe-coding',
  assetPrefix: '/portofolio-vibe-coding',
  // Additional configurations can be added here
}

export default nextConfig
