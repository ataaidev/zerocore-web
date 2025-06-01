#!/bin/bash

# Force NPM usage for Cloudflare Pages
export YARN_ENABLED=false
export NPM_CONFIG_PACKAGE_LOCK=true

echo "🚀 Zero Core Studio - Cloudflare Build"
echo "📦 Using NPM (forced)"

# Clean any yarn artifacts
rm -rf yarn.lock .yarnrc .yarnrc.yml

# Install with NPM
npm ci

# Build
npm run build

echo "✅ Build completed with NPM" 