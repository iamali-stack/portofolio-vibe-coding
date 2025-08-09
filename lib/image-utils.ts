// Utility function to handle image paths for GitHub Pages
export function getImagePath(path: string): string {
  // If we're in production (GitHub Pages), add the base path
  if (typeof window !== 'undefined' && window.location.hostname === 'iamali-stack.github.io') {
    return `/portofolio-vibe-coding${path}`
  }
  // For local development, use the path as is
  return path
}

// Alternative approach using environment variable
export function getImagePathEnv(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portofolio-vibe-coding' : ''
  return `${basePath}${path}`
}
