# 🚀 GitHub Pages Setup Guide

Your portfolio has been successfully pushed to GitHub! Now you need to enable GitHub Pages.

## 📋 Steps to Enable GitHub Pages

### 1. Go to Your Repository
Visit: https://github.com/iamali-stack/portofolio-vibe-coding

### 2. Enable GitHub Pages
1. Click on **Settings** tab in your repository
2. Scroll down to **Pages** section (in the left sidebar)
3. Under **Source**, you'll see options:
   - **Deploy from a branch** (select this first)
   - **GitHub Actions** (this will appear after enabling Pages)
4. Select **Deploy from a branch**
5. Choose **main** branch
6. Select **/(root)** folder
7. Click **Save**

### 3. Switch to GitHub Actions (After Pages is Enabled)
1. Go back to **Settings → Pages**
2. Now you should see **GitHub Actions** as an option
3. Select **GitHub Actions**
4. Click **Save**

### 4. Check Deployment Status
1. Go to **Actions** tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages"
3. The workflow will run automatically and deploy your site

### 5. Your Site URL
Once deployed, your portfolio will be available at:
**https://iamali-stack.github.io/portofolio-vibe-coding**

## 🔧 What's Already Configured

✅ **Static Export**: Next.js configured to export static files
✅ **GitHub Actions**: Automatic deployment workflow
✅ **Base Path**: Configured for repository name
✅ **Trailing Slash**: Enabled for better compatibility
✅ **All Assets**: Images and static files included

## 📊 Deployment Process

1. **Enable Pages** → Select "Deploy from a branch" first
2. **Switch to Actions** → Change to "GitHub Actions" source
3. **Push to main branch** → Triggers GitHub Actions
4. **Build process** → Creates static files in `out/` directory
5. **Deploy to GitHub Pages** → Makes site live

## 🎯 Alternative: Manual Setup

If GitHub Actions doesn't work, you can use the manual method:

1. **Settings → Pages**
2. Select **Deploy from a branch**
3. Choose **main** branch
4. Select **/docs** folder
5. Create a `docs` folder and copy `out/` contents there

## 🔍 Troubleshooting

### If "GitHub Actions" doesn't appear:
1. First enable Pages with "Deploy from a branch"
2. Then switch to "GitHub Actions"
3. Make sure you have admin permissions on the repository

### If deployment fails:
1. Check **Actions** tab for error messages
2. Ensure repository has **Pages** enabled
3. Verify **GitHub Actions** permissions are enabled

### If site doesn't load:
1. Wait 5-10 minutes for deployment
2. Check if the URL is correct
3. Clear browser cache

## 📈 Monitoring

- **Actions tab**: Monitor deployment status
- **Settings → Pages**: Check deployment source
- **Repository insights**: View traffic and analytics

---

**Your portfolio will be live once you enable GitHub Pages! 🎉**
