/** @type {import('next').NextConfig} */
const repoName = 'portofolio-vibe-coding'
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const publicOrigin = 'https://iamali-stack.github.io'

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',
  trailingSlash: true,
  // Use basePath only for GitHub Pages export builds
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `${publicOrigin}/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },
};

export default nextConfig;
