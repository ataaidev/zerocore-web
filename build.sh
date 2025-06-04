#!/bin/bash

# Force NPM usage for Cloudflare Pages
export YARN_ENABLED=false
export NPM_CONFIG_PACKAGE_LOCK=true
export NODE_ENV=production

echo "🚀 Zero Core Studio - Cloudflare Pages Build"
echo "📦 Using NPM (forced)"

# Clean any yarn artifacts
rm -rf yarn.lock .yarnrc .yarnrc.yml

# Clean previous builds
rm -rf .next out

# Install with NPM
npm ci

# Build for static export (Cloudflare Pages)
echo "🏗️  Building Next.js for static export..."
npm run build

# Verify output directory
if [ -d "out" ]; then
    echo "✅ Static export successful - 'out' directory created"
    echo "📁 Output directory contents:"
    ls -la out/
else
    echo "❌ Build failed - 'out' directory not found"
    exit 1
fi

echo "✅ Build completed for Cloudflare Pages" 