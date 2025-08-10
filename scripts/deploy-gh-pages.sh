#!/bin/bash

# GitHub Pages Manual Deployment Script
# This script builds the project and copies files to docs/ folder for GitHub Pages

set -e

echo "🚀 Starting GitHub Pages deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out docs

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Create docs directory and copy files
echo "📁 Creating docs directory..."
mkdir -p docs

# Copy all files from out/ to docs/
echo "📋 Copying files to docs/..."
cp -r out/* docs/

# Note: The built index.html from Next.js is now preserved
echo "✅ GitHub Pages deployment files ready!"
echo ""
echo "📋 Next steps:"
echo "1. Commit and push the docs/ folder:"
echo "   git add docs/"
echo "   git commit -m 'Add docs for GitHub Pages'"
echo "   git push"
echo ""
echo "2. Go to your repository settings:"
echo "   https://github.com/iamali-stack/portofolio-vibe-coding/settings/pages"
echo ""
echo "3. Under 'Source', select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/docs' folder"
echo "5. Click 'Save'"
echo ""
echo "Your site will be available at:"
echo "https://iamali-stack.github.io/portofolio-vibe-coding"
