// Utility function to handle image paths for GitHub Pages in Next.js
// Utility function to handle image paths for GitHub Pages in Next.js
export function getImagePath(path: string): string {
  // Remove any leading ./, ../, or public/ from the path
  const cleanPath = path.replace(/^(\.\/|\.{1,2}\/)*public\//, '').replace(/^(\.\/|\.{1,2}\/)+/, '');
  
  // Base path from env (set in next.config.js)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Return full path, making sure there's only one slash between parts
  return `${basePath}/${cleanPath}`.replace(/\/+/g, '/');
}

// Alternative approach using environment variable
export function getImagePathEnv(path: string): string {
  const cleanPath = path.replace(/^(\.\/|\.{1,2}\/)*public\//, '');
  // Use the environment variable for conditional base path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}/${cleanPath}`.replace(/\/+/g, '/');
}
