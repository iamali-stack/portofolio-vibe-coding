# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository set up
- All dependencies installed (`npm install`)

## 🎯 Quick Deploy Options

### 1. Vercel (Recommended - Easiest)

**Option A: Using Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
./deploy.sh vercel
```

**Option B: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### 2. Netlify

**Option A: Using Netlify CLI**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
./deploy.sh netlify
```

**Option B: Using Netlify Dashboard**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Connect your repository
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Click "Deploy site"

### 3. Railway

1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Railway will auto-detect Next.js
7. Click "Deploy"

### 4. Docker Deployment

**Build and run locally:**
```bash
# Build Docker image
./deploy.sh docker

# Run container
docker run -p 3000:3000 ali-khaled-portfolio
```

**Using Docker Compose:**
```bash
docker-compose up -d
```

### 5. Manual Server Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Copy files to server:**
   ```bash
   scp -r .next package.json package-lock.json user@your-server:/path/to/app
   ```

3. **On server, install dependencies and start:**
   ```bash
   npm install --production
   npm start
   ```

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Ali Khaled Portfolio"
NEXT_TELEMETRY_DISABLED=1
```

For production, set these in your hosting platform's dashboard.

## 🛠️ Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to your site dashboard
2. Click "Domain settings"
3. Add custom domain
4. Update DNS records as instructed

## 📊 Performance Optimization

The project is already optimized with:
- ✅ Static generation for all pages
- ✅ Image optimization disabled (for faster builds)
- ✅ Standalone output for Docker
- ✅ Proper caching headers
- ✅ Security headers

## 🔍 Health Check

Your deployment includes a health check endpoint:
- URL: `/api/health`
- Returns: Status, timestamp, and uptime
- Used by Docker for health monitoring

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Issues
```bash
# Check if port 3000 is in use
lsof -i :3000
# Kill process if needed
kill -9 <PID>
```

### Docker Issues
```bash
# Clean Docker cache
docker system prune -a
# Rebuild image
docker build --no-cache -t ali-khaled-portfolio .
```

### Environment Variables
- Make sure all `NEXT_PUBLIC_*` variables are set in your hosting platform
- Restart the application after adding new environment variables

## 📈 Monitoring

### Vercel Analytics
- Automatically available in Vercel dashboard
- No additional setup required

### Custom Analytics
Add to your hosting platform's environment variables:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id
```

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      # Add your deployment steps here
```

## 📞 Support

If you encounter issues:
1. Check the build logs in your hosting platform
2. Verify all environment variables are set
3. Ensure Node.js version is 18+
4. Check that all dependencies are installed

---

**Happy Deploying! 🎉**
