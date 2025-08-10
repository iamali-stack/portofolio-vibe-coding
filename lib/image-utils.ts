// Utility function to handle image paths for GitHub Pages
export function getImagePath(path: string): string {
  // Remove the ../public/ or ../../public/ or public/ prefix if it exists
  const cleanPath = path.replace(/^\.\.\/public\//, '').replace(/^\.\.\/\.\.\/public\//, '').replace(/^public\//, '')
  
  // If we're in production (GitHub Pages), add the base path
  if (typeof window !== 'undefined' && window.location.hostname === 'iamali-stack.github.io') {
    return `/portofolio-vibe-coding/${cleanPath}`
  }
  // For local development, use the path as is
  return `/${cleanPath}`
}

// Alternative approach using environment variable
export function getImagePathEnv(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portofolio-vibe-coding' : ''
  // Remove the ../public/ or ../../public/ or public/ prefix if it exists
  const cleanPath = path.replace(/^\.\.\/public\//, '').replace(/^\.\.\/\.\.\/public\//, '').replace(/^public\//, '')
  return `${basePath}/${cleanPath}`
}
