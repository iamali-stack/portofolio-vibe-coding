#!/bin/bash

# Deployment script for Ali Khaled Portfolio
# This script helps deploy the Next.js application to various platforms

set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Function to deploy to Vercel
deploy_vercel() {
    echo "📦 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
        vercel --prod
    else
        echo "❌ Vercel CLI not found. Please install it with: npm i -g vercel"
        exit 1
    fi
}

# Function to deploy to Netlify
deploy_netlify() {
    echo "📦 Deploying to Netlify..."
    if command -v netlify &> /dev/null; then
        npm run build
        netlify deploy --prod --dir=.next
    else
        echo "❌ Netlify CLI not found. Please install it with: npm i -g netlify-cli"
        exit 1
    fi
}

# Function to build Docker image
build_docker() {
    echo "🐳 Building Docker image..."
    docker build -t ali-khaled-portfolio .
    echo "✅ Docker image built successfully!"
    echo "To run the container: docker run -p 3000:3000 ali-khaled-portfolio"
}

# Function to run locally
run_local() {
    echo "🏃 Running locally..."
    npm run build
    npm start
}

# Main deployment logic
case "${1:-help}" in
    "vercel")
        deploy_vercel
        ;;
    "netlify")
        deploy_netlify
        ;;
    "docker")
        build_docker
        ;;
    "local")
        run_local
        ;;
    "build")
        echo "🔨 Building for production..."
        npm run build
        echo "✅ Build completed successfully!"
        ;;
    "test")
        echo "🧪 Testing build..."
        npm run build
        echo "✅ Build test passed!"
        ;;
    "help"|*)
        echo "📋 Available deployment options:"
        echo "  ./deploy.sh vercel   - Deploy to Vercel"
        echo "  ./deploy.sh netlify  - Deploy to Netlify"
        echo "  ./deploy.sh docker   - Build Docker image"
        echo "  ./deploy.sh local    - Run locally (production mode)"
        echo "  ./deploy.sh build    - Build for production"
        echo "  ./deploy.sh test     - Test the build"
        echo ""
        echo "💡 Make sure you have the necessary CLI tools installed:"
        echo "  - Vercel CLI: npm i -g vercel"
        echo "  - Netlify CLI: npm i -g netlify-cli"
        echo "  - Docker: https://docs.docker.com/get-docker/"
        ;;
esac

echo "✅ Deployment process completed!"
